-- BioSiker: gamifikacios rendszer (XP/szint/coin/avatar/mérföldkövek/
-- napi jutalmak/érme-bolt) oszlopai a user_progress táblához.
-- Futtasd le ezt a Supabase Dashboardon: SQL Editor -> New query -> illeszd be -> Run
-- (Ez egy UJ migracio a mar korabban letrehozott tablahoz - a korabbi
--  migraciokat mar lefuttattad, azokat nem kell ujra.)
--
-- Az `xp` oszlop MAR LETEZIK (user_progress.sql) - eddig fejezet-
-- elvegzeskor is jart erte, mostantol KIZAROLAG kviz-eredmeny alapjan
-- no (lasd UserDataContext.jsx awardXp). A szint a xp-bol szarmaztatott
-- (level = floor(xp / 100) + 1), nincs kulon oszlopa.
--
-- `coins`: a jatekos, kizarolag aktivitassal szerezheto virtualis
-- penznem (szintlepes + napi jutalom + mérföldkő-jutalom) - SOHA nem
-- vasarolhato valos penzert.
--
-- `gamification`: { avatarId, unlockedMilestones: { [id]: isoDate },
--   claimedDailyRewards: { [nap]: isoDate }, lastDailyClaimDate,
--   ownedShopItems: [itemId], activeShopItems: [itemId] }

alter table public.user_progress
  add column if not exists coins integer not null default 0;

alter table public.user_progress
  add column if not exists gamification jsonb not null default '{
    "avatarId": "avatar-1",
    "unlockedMilestones": {},
    "claimedDailyRewards": {},
    "lastDailyClaimDate": null,
    "ownedShopItems": [],
    "activeShopItems": []
  }'::jsonb;
