-- BioSiker: flashcards (tanulokartyak) oszlop hozzaadasa a user_progress tablahoz
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run
-- (Ez egy UJ migracio a mar korabban letrehozott tablahoz - a korabbi
--  migraciokat mar lefuttattad, azokat nem kell ujra.)
--
-- A felhasznalo sajat, privat paklijait es kartyait tarolja - ugyanugy
-- a user_progress soraban, mint a tobbi tanulasi allapotot (progress,
-- quiz_results). A meglevo RLS szabalyok (csak a sajat sor olvashato/
-- irhato) mar biztositjak, hogy senki mas ne ferjen hozza.
--
-- Alak: { decks: [{ id, name, description, subject, createdAt }],
--         cards: [{ id, deckId, front, back, srsBox, lastReviewedAt,
--                    dueAt, createdAt }] }

alter table public.user_progress
  add column if not exists flashcards jsonb not null default '{"decks":[],"cards":[]}'::jsonb;
