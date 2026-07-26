# BioSiker Pedagógus AI - Mester Prompt
### Témakör-típus szerinti strukturális sablonok

Ez a dokumentum kiegészíti a `.claude/agents/pedagogus.md`-t. Célja: az
EGÉSZ tananyagra (mind a 44 tervezett fejezetre) alkalmazható strukturális
elvárás, témakör-típusonként. A sablonok NEM egy konkrét külső forrásból
származnak - a 33/2015 EMMI-rendelet saját, ismétlődő megfogalmazási
mintázataiból lettek levezetve. A rendelet maga ugyanazt a néhány
mondatszerkezetet használja minden hasonló típusú témakörnél (pl. minden
élőlénycsoportnál "testszerveződés + életműködések", minden
szervrendszernél "felépítés + működés + szabályozás + egészségtan"), ez
adja a sablonok alapját.

Minden fejezet megírása előtt a content-writer (fő munkamenet) ÉS a
pedagogus subagent először azonosítsa, MELYIK archetípusba tartozik a
fejezet, és azt a sablont alkalmazza.

---

## A) Élőlénycsoport/törzs bemutatása példafajokon
*Pl.: Baktériumok, Egysejtű eukarióták, állattörzsek (szivacsok,
csalánozók, laposférgek stb.), növénytörzsek*

Kötelező elemek minden megnevezett példafajnál/csoportnál:
1. Rendszertani besorolás (ország, törzs, ill. ha releváns osztály)
2. Előfordulás/élőhely
3. Méret és alak (ha jellemző)
4. Testfelépítés/sejtfelépítés
5. Életműködések: táplálkozás, légzés/gázcsere, kiválasztás,
   mozgás, szaporodás - CSAK azokat, amiket a hivatalos szöveg az
   adott csoportnál kifejezetten említ
6. A csoport evolúciós "újításai" (ha a PDF ezt a kifejezést használja
   az adott résznél, pl. harasztok, nyitvatermők, zárvatermők)
7. Emberi/gyakorlati vonatkozás, ha van (pl. betegségek, gazdasági
   jelentőség)

## B) Molekula/vegyület-típusú témakör
*Pl.: Lipidek, Szénhidrátok, Fehérjék, Nukleinsavak, Vitaminok*

1. Kémiai felépítés/szerkezet (a hivatalos szint mélységében - középszint
   csak alapvázat, emelt szint részletes szerkezetet kér)
2. Fizikai-kémiai tulajdonságok (oldódás, stabilitás, stb.)
3. Biológiai szerep/funkció a szervezetben
4. Előfordulás (természetes forrás, élelmiszer, szervezetben betöltött
   hely)
5. Hiány/túlzott bevitel következményei, ha a PDF ezt kéri
6. Kapcsolódó kísérlet/kimutatási módszer, ha a PDF explicit kéri
   (pl. Lugol-próba, denaturáció bemutatása)

## C) Named folyamat/ciklus
*Pl.: Fotoszintézis, Glikolízis, Citromsavciklus, Fehérjeszintézis,
DNS-replikáció*

1. Helyszín a sejten belül
2. Kiindulási anyagok és végtermékek
3. A folyamat fő szakaszai/lépései - KULCS-résztvevő molekulákkal,
   NEM a teljes lépéssor részletes felsorolásával (kivéve, ha a
   fejezet explicit kiemelt mélységű, pl. Fotoszintézis, Vírusok)
4. Energiamérleg, ha releváns
5. Szabályozás, ha a PDF ezt kéri
6. Kapcsolat más folyamatokkal (kereszthivatkozás korábbi fejezetre)

## D) Szervrendszer/emberi élettani témakör
*Pl.: Légzés, Keringés, Emésztés, Kiválasztás, Idegrendszer, Hormonrendszer*

1. Felépítés/anatómia (szervek, szövetek)
2. Működés/élettani folyamat
3. Szabályozás (idegi és/vagy hormonális)
4. Egészségtan: gyakori betegségek, kockázati tényezők, megelőzés,
   elsősegély - CSAK ha a PDF az adott alponthoz "egészségtana"
   vagy "elsősegélynyújtás" címszót rendel

### D-KIEGÉSZÍTÉS - kötelező pedagógiai módszertan, nem csak tartalom
- Ha a PDF ELSŐSEGÉLY-jellegű tudást kér (pl. újraélesztés lépései,
  vérzés ellátása, égési sérülés ellátása), a szöveg NEM lehet pusztán
  leíró ("fontos az újraélesztés") - KONKRÉT, SORSZÁMOZOTT lépéseket
  kell adnia, amit a diák ténylegesen alkalmazni tudna. Ez olyan
  tartalom, ahol a pontatlanság nem csak vizsgakockázat, hanem valós
  gyakorlati téves tájékoztatás - a pedagogus subagent ITT szigorúbban
  ellenőrizzen, mint bárhol máshol: minden lépés orvosilag/élettanilag
  pontos legyen, ne legyen elnagyolt vagy kihagyott lépés
- Betegségeknél mindig kösse össze a TÜNETET a MECHANIZMUSSAL (ne csak
  felsorolja a tüneteket, hanem magyarázza is, MIÉRT alakulnak ki az
  adott élettani zavarból)
- Kerülje az önmagában álló, klinikai kontextus nélküli tényközlést -
  minden élettani tényhez társítson legalább egy "mikor/hogyan derül ez
  ki a valóságban" jellegű gyakorlati vonatkozást (pl. szűrővizsgálat,
  tünet felismerése)

## E) Ökológiai/populációs témakör
*Pl.: Populáció, Életközösségek, Ökoszisztéma, Környezetvédelem*

1. Alapfogalom definíciója
2. Mechanizmus/folyamat leírása
3. Számítási/értelmezési készség, ha a PDF ezt kéri (pl. korfák,
   Hardy-Weinberg, ökológiai piramisok)
4. Konkrét hazai/gyakorlati példa
5. Emberi hatás/természetvédelmi vonatkozás, ha releváns

## F) Genetikai témakör
*Pl.: Molekuláris genetika, Mendeli genetika, Populációgenetika*

1. Alapfogalom(ak) pontos definíciója
2. Mechanizmus levezetése
3. Számítási példa/módszer, ha a PDF ezt kéri (pl. keresztezési
   arányok, kapcsoltság, allélgyakoriság)
4. Emberi vonatkozású példa/betegség, ha releváns
5. Etikai/társadalmi vonatkozás, ha a PDF ezt kéri (bioetika témakörnél)

### F-KIEGÉSZÍTÉS - kötelező pedagógiai módszertan, nem csak tartalom
- Ha a PDF számítási/levezetési képességet kér ("tudjon... számításokat
  végezni", "vezesse le", "legyen képes családfák elemzésére"), a
  fejezet NEM lehet csak a végeredmény/szabály közlése - KÖTELEZŐ
  legalább EGY teljesen kidolgozott, lépésről lépésre bemutatott
  számítási/levezetési példa (pl. egy konkrét Punnett-tábla vagy
  családfa végigvezetve, nem csak "a szabály a következő")
- A nehézségi szint emelkedjen fokozatosan: egyszerűbb (egygénes,
  teljes dominancia) példa ELŐBB, összetettebb (két gén, kapcsoltság,
  letális allél) csak UTÁNA, sose fordítva
- Minden számítási példánál a pedagogus subagent ellenőrizze: a
  levezetés matematikailag/genetikailag HELYES-e (nem csak azt, hogy
  "van-e" számítási példa) - egy hibás levezetés rosszabb, mint ha
  nem lenne példa, mert téves mintát rögzít a diákban

## G) Evolúciós témakör
*Pl.: Populációgenetika és evolúciós folyamatok, A bioszféra evolúciója*

1. Elméleti modell/mechanizmus leírása
2. Bizonyítékok (közvetlen és közvetett)
3. Konkrét példa a mechanizmusra
4. Kapcsolódás korábbi fejezetekhez (kereszthivatkozás)

---

## Általános elvek MINDEN archetípusnál (megerősítve a pedagogus.md-ből)

- Szószám: közép 400-700, összefésült emelt 700-1500 (kiemelt témáknál
  akár 1000+ középen is)
- Kereszthivatkozás korábbi fejezetekre kötelező, 2-3 db
- Tiltott mezők: summary, mnemonic, commonMistakes
- comparisonTable ott, ahol két fogalom szembeállítása indokolt
- Rendszertani/alaptudás kimondása akkor is, ha a PDF nem írja elő
  explicit módon, de a diák számára elvárt háttértudás (lásd
  pedagogus.md 2. pont)
- Az archetípus-sablon egy KIINDULÓPONT, nem helyettesíti a PDF adott
  alpontjának tételes alfogalom-ellenőrzését - mindkettőt el kell
  végezni

## Munkafolyamat egy új fejezetnél

1. Content-writer azonosítja: melyik modul/alpont, melyik archetípus
   (A-G)
2. Megírja a közép szintet az archetípus-sablon + a PDF adott
   alpontjának tételes alfogalmai alapján
3. Pedagogus subagent ellenőriz (szószám, alfogalom-lefedettség,
   archetípus-sablon teljesülése, kereszthivatkozás, tiltott mezők)
4. Csak ✅ után emelt szint, majd újra pedagogus-ellenőrzés
5. Csak ✅ után commit/push a claude-work-re
