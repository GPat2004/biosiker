-- BioSiker: a 006_admin_flag.sql-ben letrehozott trigger-fuggveny
-- biztonsagi kemenyitese - a Supabase security advisor (get_advisors)
-- ket talalata alapjan, miutan a 006-ot elesben lefuttattuk:
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run
--
-- 1) function_search_path_mutable: a fuggveny search_path-ja korabban
--    nem volt rogzitve - egy tamado elore helyezhetett volna sajat
--    objektumokat egy masik semaba, amit a fuggveny (nem tudva rola)
--    hasznalt volna. Most rogzitve: 'public, pg_temp'.
-- 2) anon/authenticated_security_definer_function_executable: a
--    SECURITY DEFINER fuggveny alapertelmezetten kozvetlenul hivhato
--    volt RPC-kent (/rest/v1/rpc/prevent_is_admin_self_update) barki
--    altal - ez egy trigger-fuggveny, sosem kellene igy hivhatonak
--    lennie, ezert az EXECUTE jogot visszavontuk anon/authenticated/
--    public szereptol.

create or replace function public.prevent_is_admin_self_update()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if new.is_admin is distinct from old.is_admin
     and current_user in ('authenticated', 'anon') then
    new.is_admin := old.is_admin;
  end if;
  return new;
end;
$$;

revoke execute on function public.prevent_is_admin_self_update() from public;
revoke execute on function public.prevent_is_admin_self_update() from anon;
revoke execute on function public.prevent_is_admin_self_update() from authenticated;
