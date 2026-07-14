-- BioSiker: exam_level oszlop hozzaadasa a user_progress tablahoz
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run
-- (Ez egy UJ migracio a mar korabban letrehozott tablahoz - a regi
--  user_progress.sql-t mar lefuttattad, azt nem kell ujra.)

alter table public.user_progress
  add column if not exists exam_level text not null default 'kozep';
