-- BioSiker: admin-mod tamogatasa (KIZAROLAG a Coin Shop korlatlan
-- attekintesehez - lasd UserDataContext.jsx purchaseShopItem).
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run
-- (Ez egy UJ migracio a mar korabban letrehozott tablahoz - a korabbi
--  migraciokat mar lefuttattad, azokat nem kell ujra.)
--
-- FONTOS BIZTONSAGI SZEMPONT: az is_admin mezo SOSEM irhato a kliens
-- (a bongeszoben futo app) altal - a src/lib/progressApi.js
-- stateToRow fuggvenye szandekosan SOHA nem kuldi ezt a mezot az
-- upsert hivasokban, es az alabbi trigger meg egy masodik, adatbazis-
-- szintu vedelmi reteget ad: barmilyen kiserlet, ami a PostgREST API-n
-- keresztul (tehat a sajat, hitelesitett JWT-jevel akar direktben is)
-- probalna modositani ezt a mezot, csendben visszaall a korabbi
-- ertekre. Az is_admin mezot KIZAROLAG a Supabase Dashboard SQL
-- Editoraban (postgres/service_role kapcsolattal) lehet valtoztatni.

alter table public.user_progress
  add column if not exists is_admin boolean not null default false;

create or replace function public.prevent_is_admin_self_update()
returns trigger
language plpgsql
security definer
as $$
begin
  -- A PostgREST (tehat minden, a bongeszobol jovo kereses) mindig
  -- 'authenticated' vagy 'anon' Postgres szereppel fut - a Supabase
  -- Dashboard SQL Editor/Table Editor viszont 'postgres' (vagy
  -- 'service_role') szereppel, igy csak az elobbi ket eset ellen vedunk.
  if new.is_admin is distinct from old.is_admin
     and current_user in ('authenticated', 'anon') then
    new.is_admin := old.is_admin;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_prevent_is_admin_self_update on public.user_progress;
create trigger trg_prevent_is_admin_self_update
  before update on public.user_progress
  for each row
  execute function public.prevent_is_admin_self_update();

-- Az admin fiok bekapcsolasa (galimre72@gmail.com) - ha meg nincs sora
-- a user_progress tablaban (meg sosem jelentkezett be), eloszor
-- jelentkezz be vele az appba egyszer, hogy letrejojjon a sora, utana
-- futtasd le ezt:
update public.user_progress
  set is_admin = true
  where user_id = (select id from auth.users where email = 'galimre72@gmail.com');
