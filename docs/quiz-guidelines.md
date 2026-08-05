# BioSiker Kvíz-generálási szabályok

Ez a dokumentum a `.claude/agents/quiz-writer.md` és `.claude/agents/quiz-reviewer.md`
subagenteket egészíti ki. Célja: minden jövőbeli kérdésbank-generálás (akár
egy `/clear` utáni új munkamenetben is) automatikusan kövesse ugyanazokat a
minőségi és hatékonysági szabályokat, ne csak egy adott beszélgetésben
alkalmazott, dokumentálatlan konvenciókat.

Ezek a szabályok egy 2025-ös felhasználói visszajelzés nyomán születtek,
miután a már elkészült kérdésbankokban rendszerszintű problémák derültek ki
(a helyes válasz szisztematikusan a leghosszabb opció volt, a válaszbank
feleslegesen nagy volt, és a "Próbáld újra" gomb nem generált valódi új
kérdéssort). Az 1-4. szabály ezeket orvosolja, az 5. szabály pedig a
subagent-munkamenetek token-hatékonyságára vonatkozik.

---

## 1. Válaszhossz-egyensúly

**Szabály:** A helyes válasz NEM lehet szisztematikusan a leghosszabb/
legrészletesebb opció a kérdésbankban. Ha egy kérdésnél a helyes válasz
lényegesen (kb. 50-60%-nál nagyobb arányban) hosszabb, mint a leghosszabb
helytelen válasz, ez önmagában - tartalmi tudás nélkül is - kiszűrhetővé
teszi a helyes választ.

**quiz-writer feladata:** Írás közben törekedjen arra, hogy a 3 hibás
válasz is hasonló hosszúságú, hasonlóan kidolgozott legyen, mint a helyes
válasz - ne egy rövid kategórianév/szófordulat álljon szemben egy teljes,
kifejtett mondattal.

**quiz-reviewer feladata:** Ellenőrizze explicit ezt a mintázatot minden
kérdésnél (pl. karakterhossz-összevetéssel). Ha egy kérdésnél a helyes
válasz szisztematikusan kilóg hosszban, ⚠️-vel jelezze, és kérje a
quiz-writer-t (vagy magát a javító munkamenetet), hogy a hibás válaszokat
bővítse ki hasonlóan részletes, de tartalmilag téves állításokká - a helyes
válasz szövegét és pozícióját (correctIndex) nem szabad megváltoztatni.

---

## 2. Stílushű, de tartalmilag téves disztraktorok definíciós kérdéseknél

**Szabály:** Ha egy kérdés egy fogalom definícióját kéri ("Mit nevezünk
X-nek?", "Hogyan definiálja a szöveg X-et?", "Mit jelent X fogalma?"), a 3
helytelen válasz legyen szerkezetileg/stilisztikailag hasonló a helyes
definícióhoz (hasonló mondatforma, hasonló megfogalmazási minta), de
jelentésben egyértelműen és ellenőrizhetően téves. NE legyen a helyes
válasz pusztán a forma alapján (pl. "ez az egyetlen, ami tényleg úgy
hangzik, mint egy definíció") kiszűrhető.

**Példa a rossz gyakorlatra:** "Mit nevezünk denaturációnak?" - helyes
válasz egy teljes, kifejtett mondat, a 3 hibás válasz pedig 3-4 szavas
töredékek ("A fehérje lebontása", "Sejtosztódás", "Fehérjeszintézis").

**Példa a jó gyakorlatra:** mind a 4 opció egy teljes, definíció-formájú
mondat, amelyek közül csak egy helyes, a többi hasonló hosszúságú, hasonló
nyelvtani szerkezetű, de tartalmában téves állítás.

**quiz-reviewer feladata:** Azonosítsa a definíciós kérdéseket (jellemző
kérdésminták: "Mit nevezünk...", "Hogyan definiálja...", "Mit jelent...",
"Mi a ... fogalma/definíciója"), és ezeknél külön ellenőrizze a
disztraktorok stílushűségét.

---

## 3. Kérdésbank mérete: 17 kérdés/fejezet

**Szabály:** A korábbi 25+ kérdéses célszám helyett fejezetenként **kb. 17
kérdés** az elvárt méret, az alábbi szint-arányban:
- **Közép szintű bank: kb. 16-18 kérdés** - ebből a közép teszt 10 kérdést
  húz, így értelmes (nem szűk, ismétlődésre hajlamos) variáció marad.
- **Emelt kiegészítés: kb. 6-9 kérdés** - ezek KIZÁRÓLAG az `emeltExtra`
  szövegéből származó új témákat vagy a közép témák mélyebb, összetettebb
  megkérdezését tartalmazzák (lásd `.claude/agents/quiz-writer.md`).
- **Teljes bank egy fejezethez: kb. 17 kérdés** (16-18 kozep + 6-9 emelt
  gyakran meghaladja a 17-et - ez rendben van, a "kb. 17" egy célszám, nem
  szigorú felső korlát; a lényeg, hogy ne menjen 25+ fölé mesterséges
  feltöltéssel).

Ha egy fejezet forrásszövege rövid, és nem lehet 16+ tartalmilag különböző,
nem mesterkélt kozep kérdést írni belőle, KEVESEBBET kell írni - a
minőség/tartalmi különbözőség mindig fontosabb, mint a célszám elérése
(ez már korábban is szabály volt, változatlan marad).

**Miért csökkent a célszám 25+-ról 17-re:** a nagyobb kérdésbank arányosan
több quiz-writer/quiz-reviewer token-felhasználást igényelt anélkül, hogy
érdemben javította volna a kvíz pedagógiai értékét (a diák úgyis csak 10
kérdést lát egyszerre) - lásd az 5. pontot is.

---

## 4. Valódi újra-randomizálás a "Próbáld újra" gombnál

**Szabály:** A kvíz "Próbáld újra" (retry) funkciójának minden alkalommal
FRISS, random kérdéshalmazt kell húznia a teljes bankból, és a
válaszlehetőségek sorrendjét is újra kell kevernie - nem elég ugyanazt a
kérdéssort megjeleníteni újra, csak a navigációs állapotot (index,
kiválasztott válasz) visszaállítva.

**Implementáció:** A `src/components/QuizRunner.jsx` a `pool`-t és a
`count`-ot kapja meg propként (nem egy előre kikevert `questions` tömböt),
és a kérdéshalmazt saját belső state-ként (`useState(() =>
prepareQuiz(pool, count))`) tárolja. A `restart()` függvény explicit
újrahívja a `prepareQuiz(pool, count)`-ot (`setQuestions(prepareQuiz(pool,
count))`), amely a `src/lib/quizUtils.js`-ben lévő Fisher-Yates keveréssel
mind a kérdések kiválasztását, mind az egyes kérdések válasz-sorrendjét
újra véletlenszerűsíti. Az átfedés a korábbi kérdéssorral megengedett -
csak az nem megengedett, hogy garantáltan ugyanaz a 10 (vagy 30) kérdés
jelenjen meg minden retry-nél.

---

## 5. Token-hatékonyság több fejezet egy menetben történő feldolgozásához

**Szabály:** Ha egyszerre több fejezethez kell kérdésbankot írni vagy
ellenőrizni/javítani, KERÜLNI kell a felesleges ismétlődő
kontextus-betöltést (pl. ugyanannak a curriculum.js-nek a teljes
újraolvasását minden egyes fejezetnél, vagy egy subagent-hívást
fejezetenként, ha a munka batch-elhető).

**Gyakorlati alkalmazás:**
- **Új kérdésbank írásakor** (quiz-writer): ha egyszerre több fejezethez
  kell kérdésbankot generálni, és a fejezetek elég kicsik ahhoz, hogy egy
  subagent-válaszba beleférjenek, egy subagent-hívásban is fel lehet
  dolgozni több fejezetet egymás után (a subagent olvassa be az összes
  érintett fejezetet egy Read-hívással, ha azok egymás közelében vannak a
  curriculum.js-ben, majd sorban írja meg mindegyik kérdésbankját).
- **Meglévő kérdésbankok javításakor** (pl. minőségi hibák utólagos
  javítása): NE indíts külön subagentet fejezetenként. Ehelyett - ha a
  hiba mechanikusan (szkripttel) beazonosítható (pl. válaszhossz-arány) -
  a fő munkamenet szűrje le előre a pontos, javítandó kérdés-listát, és
  csak ezt a szűk, konkrét adatcsomagot add át egy (vagy néhány, batch-elt)
  subagentnek - ne kérj tőle teljes fájl-újraolvasást, ha a szükséges adat
  már rendelkezésre áll.
- **Cél:** 3-5 fejezet feldolgozása lehetőleg 1-2 subagent-hívásban
  történjen, ne 3-5 külön hívásban - ez érdemben csökkenti az ismétlődő
  kontextus-betöltés (rendszerprompt, eszközleírások, fájl-újraolvasás)
  költségét subagent-hívásonként.
- Ez a szabály NEM megy a minőség rovására - a quiz-reviewer ellenőrzési
  mélysége (forrás-hűség, formai helyesség, duplikáció, mennyiség,
  nyelvi/szakmai pontosság) minden fejezetnél változatlanul kötelező,
  csak a hívások szervezése legyen hatékonyabb.

**Mért eredmény (2026-08-05, ne teszteld le újra):** Két módszert
hasonlítottunk össze valós, éles fejezetek megírásán:
- **Fejezetenkénti szóló hívás** (1 subagent-hívás/fejezet, a subagent maga
  olvassa a curriculum.js-t): átlagosan **~75 900 token/fejezet** (5 korábbi
  fejezet átlaga, ~29,6 kérdés/fejezet).
- **3 fejezet egy batch-hívásban** (a fő munkamenet előre kimásolja a 3
  fejezet szövegét a promptba, a subagent nem olvassa újra a fájlt): a
  writer-hívás összesen 81 231 token volt 3 fejezethez (73 kérdés) = **~27
  100 token/fejezet - kb. 64%-os csökkenés**. A reviewer-hívás (szintén
  batch-elve, 3 fejezet egy válaszban) 57 745 token volt a 3 fejezet
  együttes ellenőrzésére.
- **Csak a kérdésszám csökkentése (3. szabály) önmagában, batch nélkül,
  NEM hoz érdemi megtakarítást** - a subagent-hívás költségét főleg a
  fix overhead (rendszerprompt, forrásszöveg beolvasása/feldolgozása)
  adja, nem a generált szöveg hossza. A tényleges megtakarítás forrása a
  batch-elés (kevesebb subagent-indítás, kevesebb ismételt
  kontextus-betöltés), NEM a rövidebb kérdésbank.
- **Következtetés - ez az alapértelmezett munkamódszer mostantól:** új
  fejezetek kvízírásakor a fő munkamenet előre másolja ki 3 (max. kb.
  3-4) fejezet `kozep`/`emeltExtra` szövegét a curriculum.js-ből egy
  batch writer-prompt-ba (a subagent NE olvassa újra a fájlt), majd
  ugyanígy egy batch reviewer-hívásban ellenőrizze mindhármat. Nincs
  szükség ennek a mérésnek a megismétlésére jövőbeli munkamenetekben.

---

## Munkafolyamat egy új fejezet kvízéhez (frissítve)

1. A fő munkamenet kiválaszt 2-4, egymáshoz közeli fejezetet, és
   kimásolja a `kozep`/`emeltExtra` szövegüket a promptba (ne a
   subagent olvassa be a curriculum.js-t - lásd az 5. pont mért
   eredményét).
2. EGY quiz-writer hívásban megíratja mindhárom/mindnégy fejezet
   kérdésbankját (kb. 16-18 kozep + 6-9 emelt fejezetenként, 1-4.
   szabály betartásával).
3. A fő munkamenet beilleszti mindegyiket a `src/data/quizzes.js`-be.
4. EGY quiz-reviewer hívásban ellenőrzi mindhárom/mindnégy fejezetet
   (a forrásszöveget újra mellékelve a promptban) - beleértve
   KIFEJEZETTEN az 1. és 2. pontot is (válaszhossz-egyensúly, stílushű
   disztraktorok definícióknál).
5. A fő munkamenet alkalmazza a javításokat (hossz-kiegyensúlyozás,
   duplikátum-törlés/összevonás), majd `node -c`, `npm run build`,
   `npm run lint` és egy gyors böngészős smoke-teszt fut le.
6. Csak minden fejezetnél ✅ után commit/push a `claude-work`-re.
