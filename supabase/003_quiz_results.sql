-- BioSiker: quiz_results oszlop hozzaadasa a user_progress tablahoz
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run
-- (Ez egy UJ migracio a mar korabban letrehozott tablahoz - a regi
--  user_progress.sql-t es a 002_exam_level.sql-t mar lefuttattad, azokat
--  nem kell ujra.)
--
-- Fejezetenkenti es modulzarozo-teszt kviz-eredmenyeket tarolja:
-- { [quizKey]: { best, last, lastAt, attempts } }
-- quizKey = chapterId (fejezet-kviz) vagy "module:<moduleId>" (modulzaro teszt)

alter table public.user_progress
  add column if not exists quiz_results jsonb not null default '{}'::jsonb;
