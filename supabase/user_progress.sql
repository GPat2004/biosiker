-- BioSiker: user_progress tabla
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run

create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  subscription_plan text not null default 'free',
  subscription_since timestamptz,
  progress jsonb not null default '{}'::jsonb,
  xp integer not null default 0,
  streak_current integer not null default 0,
  streak_longest integer not null default 0,
  streak_last_active date,
  updated_at timestamptz not null default now()
);

-- Row Level Security bekapcsolasa: enelkul barki barkinek a sorat
-- olvashatna/irhatna az anon kulccsal. EZ KRITIKUS.
alter table public.user_progress enable row level security;

-- Mindenki csak a SAJAT sorat olvashatja
create policy "Users can view own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

-- Mindenki csak a SAJAT sorat hozhatja letre
create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

-- Mindenki csak a SAJAT sorat modosithatja
create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id);
