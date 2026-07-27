# BioSiker – Claude Code irányelvek

## Branch-szabályok
- MINDIG a `claude-work` branch-en dolgozz, soha ne commitolj/push-olj közvetlenül a `main`-re.
- Minden módosítás után: `git add -A && git commit -m "..." && git push`
- SOHA ne futtass `git push --force`-ot a main-re.
- SOHA ne merge-eld magad a PR-t – ez mindig emberi jóváhagyással történik.

## Minőségbiztosítás minden commit előtt
- `npm run build` – hibátlanul le kell futnia
- `npm run lint` – nem lehet ÚJ hiba a módosított fájlokban
- Ha van teszt-szkript a szószám/glossary-ellenőrzésre, azt is futtasd le

## Tartalmi szabályok
- A tananyag célja: magyar Biológia Érettségi (közép + emelt szint)
- Ne keverj bele irreleváns egyetemi anyagot (csak max. 1 mondatos érdekességként)
- Minden fejezetnél ellenőrizd a duplikátumokat a meglévő tartalommal

## Tananyag-írási szabályok (KÖTELEZŐ minden fejezetnél)

### Archetípus-sablonok
Fejezet megírása ELŐTT azonosítsd (a `docs/pedagogus-mester-prompt.md`
alapján), melyik strukturális archetípusba (A-G, pl. élőlénycsoport
bemutatása, molekula/vegyület, named folyamat, szervrendszer, ökológiai,
genetikai, evolúciós témakör) tartozik a fejezet, és kövesd az ahhoz
tartozó kötelező elemlistát. A pedagogus subagent is ez alapján ellenőriz
(lásd `.claude/agents/pedagogus.md` 2. checklist-pont). Az archetípus egy
kiindulópont, NEM helyettesíti a PDF tételes alfogalom-listáját.

### Alapelv
A hivatalos érettségi követelmény (33/2015. EMMI rendelet) az elsődleges
forrás. Minden fejezet PONTOSAN annyi alfogalmat fed le, amennyit a rendelet
előír – sem többet, sem kevesebbet (kivéve, ahol a felhasználó kifejezetten
kért plusz mélységet, pl. fotoszintézisnél és vírusoknál).

### Két külön lépés – SOHA ne csináld egyben
1. Először a KÖZÉP szintet írd meg, alaposan (célszám: min. 400-700 szó,
   fontosabb témáknál akár 1000+ szó)
2. KÜLÖN LÉPÉSBEN, csak a felhasználó jóváhagyása UTÁN írd meg az EMELT
   kiegészítést (célszám: a kettő összefésülve 700-1500 szó)
3. Ha a felhasználó "emelt szintet" kér egy fejezethez, és a közép szint
   már kész, csak a hiányzó `emeltExtra` részt írd meg – ne írd újra a
   közepet

### Kereszthivatkozások kötelezők
Minden fejezetnek utalnia kell korábban tanult fogalmakra ("ahogy a
Lipidek fejezetben már láttuk...", "ez ugyanaz az elv, mint a
Fotoszintézisnél..."). A cél: a diák lássa az összefüggéseket, ne
elszigetelt tényeket magoljon.

### Névvel ellátott folyamatoknál (pl. Calvin-ciklus, citromsavciklus)
Csak a KULCS-résztvevő molekulákra fókuszálj, ne a teljes lépéssorra. Pl.
citromsavciklusnál elég: oxálecetsav + acetil-KoA + citromsav – NEM kell
minden intermediert felsorolni (izocitrát, alfa-ketoglutarát stb.) Ez az,
amit ténylegesen kérdeznek érettségin.

### Mezők, amiket NE HASZNÁLJ
- `summary` (összefoglaló)
- `mnemonic` (mnemonika)
- `commonMistakes` (gyakori hibák)

Ezeket egy korábbi kísérlet után a felhasználó kifejezetten kérte törölni.

### Mező, amit HASZNÁLJ, ahol releváns
- `comparisonTable` – két fogalom szembeállításánál (pl. mitózis vs.
  meiózis, passzív vs. aktív szállítás) – ez valódi tartalom, nem dísz.

## Technikai ellenőrzés minden curriculum.js módosítás UTÁN, build ELŐTT
Ismert hibaforrás: duplikált vagy hiányzó `{` a beillesztésnél. Futtasd le:

```
python3 -c "
with open('src/data/curriculum.js') as f:
    content = f.readlines()
found = False
for i in range(len(content)-1):
    if content[i].strip() == '{' and content[i+1].strip() == '{':
        print(f'HIBA a {i+1}. sorban')
        found = True
if not found:
    print('Nincs duplikatum')
"
```

## Marketing-szöveg elve (ha bármikor landing page / marketing szöveget írsz)
- SOHA ne legyen kitalált statisztika (pl. "1200+ diák" – ha nem igaz)
- Az "AI" szó használata visszafogott – konkrét funkció-leírás, nem
  AI-túlhangsúlyozás
- SOHA ne másolj szöveget más weboldalról, még "inspirációként" sem

## Commit üzenetek formátuma
Rövid, magyar nyelvű, leíró jellegű, pl.:
"Egysejtű eukarióták fejezet közép szint hozzáadva"

## Subagent-használat KÖTELEZŐ
Minden fejezet megírása után hívd meg a content-reviewer subagentet.
Minden commit előtt hívd meg a lint-fixer subagentet.
Csak akkor nyiss PR-t, ha mindkettő ✅-t adott vissza.

## Push- és merge-határok (SZIGORÚ, kivétel nélküli szabály)

- A `claude-work` branch-re történő commit + push MINDIG automatikus,
  soha nem kell hozzá emberi jóváhagyás egyetlen fejezetnél sem.
- A Pull Request `main`-be MINDIG megnyílik automatikusan, amint a
  pedagogus subagent ✅-t ad.
- A PR **MERGE-elése a `main`-be (= éles, publikus weboldal) SOHA nem
  történhet automatikusan.** Ez mindig, kivétel nélkül a felhasználó
  saját, kézi jóváhagyása után történik a GitHub felületén. Sem a fő
  munkamenet, sem semmilyen subagent nem jogosult a `main`-be merge-elni.

## Modulonkénti (batch) haladás - ne kérj visszajelzést fejezetenként

Ha a felhasználó egy teljes modul (vagy több fejezet) megírására ad
utasítást, és nem kér közbenső visszajelzést:

1. Dolgozz végig AUTONÓM módon az összes fejezeten a modulban
2. Minden egyes fejezet után futtasd le a pedagogus subagentet - ha
   ⚠️-t ad, ELŐSZÖR próbáld magad kijavítani, és csak ismételt sikertelen
   kísérlet esetén állj meg és kérj emberi segítséget
3. Csak a TELJES modul végén nyiss egyetlen összesített PR-t (ne
   fejezetenként külön PR-t), és a PR leírásában foglald össze:
   - mely fejezetek készültek el
   - a pedagogus subagent végső döntése mindegyiknél
   - mely fejezeteknél van "Hiányzó ábra-javaslat" jelzés
4. Csak ezután jelezz a felhasználónak - egyetlen összefoglaló
   üzenetben, ne fejezetenként megszakítva a munkát
5. A PR megnyitása és az összefoglaló elküldése UTÁN, mielőtt a
   következő modulba kezdenél, futtass egy `/clear`-t. Ez minden
   teljes modul lezárása után kötelező, automatikusan érvényesülő
   lépés - nem csak egyszeri, aktuális munkamenetre vonatkozó kérés.

## Diagram-igény jelzése

A pedagogus subagent "Hiányzó ábra-javaslat" jelzéseit gyűjtsd össze
egy listába a modul végi összefoglalóban - ezekhez a felhasználó külön
fog utasítást adni, ne készíts SVG-t magadtól kérés nélkül.

## Pull Request szabály
Minden munkamenet végén, sikeres build+lint után, nyiss egy Pull Requestet
a `claude-work`-ből a `main` felé a GitHub CLI-vel:

gh pr create --base main --head claude-work \
  --title "Rövid cím a változásról" \
  --body "Részletes összefoglaló: mi változott, mely fejezetek, miért"

Ha már létezik nyitott PR a claude-work-ből, frissítsd a leírását ahelyett,
hogy újat nyitnál.
