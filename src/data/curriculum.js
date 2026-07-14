// A BioSiker tananyag-strukturaja.
//
// A modulok es fejezetek PONTOSAN a hivatalos erettsegi kovetelmenyrendszert
// kovetik (1. mellekletet a 33/2015. (VI. 24.) EMMI rendelethez).
//
// FONTOS ARCHITEKTURA: minden fejezetnek van egy `kozep` (alap) es egy
// `emeltExtra` (kiegeszito) tartalma. Emelt szinten a ketto OSSZEFESULVE
// jelenik meg (lasd getLevelContent) - az emelt szint SOHA nem kevesebb,
// mint a kozep + tobblet-tudas.
//
// isFree: minden modul elso fejezete ingyenesen elerheto (fuggetlenul a
// vizsgaszinttol). A tobbi elofizetest igenyel.
//
// content.comingSoon: true, ha az adott resz meg nincs feltoltve - ez
// folyamatos, sorban halado munka.

export const CURRICULUM = [
  {
    id: 'bevezetes',
    title: 'Bevezetés a biológiába',
    description: 'A biológia tudománya, az élet jellemzői, fizikai-kémiai alapismeretek.',
    icon: 'FlaskConical',
    color: 'from-emerald-500 to-teal-500',
    chapters: [
      {
        id: 'a-biologia-tudomanya',
        title: 'A biológia tudománya',
        order: 1,
        isFree: true,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'A biológia tudománya rendszerezi és vizsgálja az élővilágot. Ehhez pontosan meghatározott alapfogalmakra, rendszerezési elvekre és vizsgálati módszerekre van szükség - ezek adják a további fejezetek megértésének alapját.',
            sections: [
              {
                heading: 'A rendszerezés alapjai',
                paragraphs: [
                  'A biológiai rendszerezés (taxonómia) alapegysége a faj: azon egyedek csoportja, amelyek természetes körülmények között egymással szaporodva termékeny utódot hoznak létre.',
                  'Az élőlények csoportosítása során meghatározott rendszerezési alapelveket alkalmazunk: közös, jól megfigyelhető jellemzők (pl. testfelépítés, szaporodásmód) alapján soroljuk az élőlényeket egyre tágabb kategóriákba (faj, nem, család, rend, osztály, törzs, ország).',
                ],
              },
              {
                heading: 'Vizsgáló módszerek: a fénymikroszkóp',
                paragraphs: [
                  'A fénymikroszkóp a biológiai vizsgálatok egyik legalapvetőbb eszköze: látható fény segítségével nagyítja fel a szabad szemmel nem látható struktúrákat, például a sejteket és sejtalkotókat.',
                  'A mikroszkóp teljes nagyítását az objektív és az okulár nagyításának szorzata adja meg. Például egy 40×-es objektív és egy 10×-es okulár együttes használatával 400×-os nagyítást érünk el.',
                  'A vizsgálat előkészítéséhez gyakran kaparékot vagy nyúzatot készítünk (pl. hagymahéjból), illetve kész metszeteket elemzünk mikroszkóp alatt.',
                ],
              },
            ],
            keyTerms: ['faj', 'taxonómia', 'rendszerezés', 'fénymikroszkóp', 'nagyítás', 'objektív', 'okulár'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a rendszerezés mögötti tudományfilozófiai különbségeket és a modern vizsgálati eszközöket is ismerni kell.',
            sections: [
              {
                heading: 'Mesterséges és természetes (fejlődéstörténeti) rendszer',
                paragraphs: [
                  'A mesterséges rendszerek - mint amilyet Linné is alkotott - egy vagy néhány kiválasztott, könnyen megfigyelhető jellemző alapján csoportosítják az élőlényeket, a valódi rokonsági viszonyoktól függetlenül. Linné vezette be a kettős nevezéktant is (pl. Homo sapiens), amely ma is az élőlények tudományos elnevezésének alapja.',
                  'A fejlődéstörténeti (természetes) rendszer ezzel szemben az evolúciós rokonságot igyekszik tükrözni. Ennek modern eszköze a molekuláris törzsfa, amely a DNS- vagy fehérjeszekvenciák hasonlósága alapján állapítja meg a fajok közötti rokonsági fokot.',
                ],
              },
              {
                heading: 'Hipotézis, elmélet, kísérlet',
                paragraphs: [
                  'Fontos különbséget tenni a feltevés (hipotézis) - egy még nem igazolt, de logikusan megalapozott magyarázat - és az elmélet (teória) - egy sokszorosan tesztelt, széles körben elfogadott magyarázó rendszer - között.',
                  'Egy biológiai kísérlet értékeléséhez fel kell ismerni a kísérleti (független) változót, amit tudatosan változtatunk, és a függő változót, amit mérünk, valamint a kontrollcsoport szerepét.',
                ],
              },
              {
                heading: 'Modern vizsgáló eszközök',
                paragraphs: [
                  'A modellalkotás lényege, hogy egy bonyolult biológiai rendszert leegyszerűsítve, a lényeges összefüggésekre koncentrálva ábrázolunk.',
                  'Az élettani állapot leírására számos speciális eszköz szolgál: az EKG a szív elektromos működését, az EEG az agy elektromos aktivitását rögzíti, a CT és a röntgen a test belső szerkezetéről ad képet, az UH (ultrahang) hanghullámokkal alkot képet, az elektronmikroszkóp pedig a fénymikroszkópnál sokkal nagyobb nagyítást és felbontást tesz lehetővé.',
                ],
              },
            ],
            keyTerms: ['molekuláris törzsfa', 'hipotézis', 'elmélet', 'kísérleti változó', 'elektronmikroszkóp'],
          },
        },
      },
      {
        id: 'az-elet-jellemzoi',
        title: 'Az élet jellemzői',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'Az élő rendszerek jellemzően több szerveződési szinten vizsgálhatók - a sejten belüli struktúráktól egészen a bioszféráig.',
            sections: [
              {
                heading: 'Szerveződési szintek',
                paragraphs: [
                  'Egyed alatti szinten beszélhetünk sejt alatti (pl. molekulák, sejtalkotók), sejtszintű, szöveti, szervi és szervrendszeri szerveződésről.',
                  'Az egyed szintje az önálló, működőképes szervezetet jelenti.',
                  'Egyed feletti szinten a populáció (egy faj egyedeinek csoportja egy adott területen), a társulás (több populáció együttese), a biom (nagy kiterjedésű, jellegzetes életközösség-típus, pl. trópusi esőerdő) és a bioszféra (a Föld egészének élő rétege) szintjeit különböztetjük meg.',
                  'Ezek a szintek hierarchikusan épülnek egymásra: minden magasabb szint az alacsonyabb szintek elemeiből, azok kölcsönhatásaiból jön létre.',
                ],
              },
            ],
            keyTerms: ['szerveződési szint', 'populáció', 'társulás', 'biom', 'bioszféra'],
          },
          emeltExtra: {
            intro: 'Emelt szinten az élő rendszereket nyílt rendszerként, egymással szorosan összefüggő tulajdonságok együtteseként kell értelmezni.',
            sections: [
              {
                heading: 'Az élő rendszerek mint nyílt rendszerek',
                paragraphs: [
                  'Az élő rendszerek nyitottak: folyamatosan anyagot és energiát cserélnek a környezetükkel, ellentétben a zárt rendszerekkel.',
                  'Jellemző tulajdonságaik szorosan összefüggenek egymással: az anyagcsere biztosítja az energiát és az építőanyagokat; az elhatárolódás (pl. sejthártya) különíti el a belső környezetet a külvilágtól; a homeosztázis tartja fenn a belső egyensúlyt; az ingerlékenység és a mozgás teszi lehetővé a környezeti változásokra való reagálást; az alkalmazkodás, a növekedés, a szaporodás, valamint az öröklődés és az öröklődő változékonyság biztosítja a faj fennmaradását és fejlődését (evolúció); végül minden élőlény halandó.',
                ],
              },
              {
                heading: 'Körfolyamatok az élő rendszerekben',
                paragraphs: [
                  'Az élő rendszerekben számos ismétlődő körfolyamat zajlik: a sejtciklus a sejt osztódásának szakaszait, a szívciklus a szív összehúzódásainak és elernyedéseinek sorozatát, a nemi ciklus a szaporodással kapcsolatos hormonális változásokat, az aszpektusok pedig egy életközösség évszakos változásait jelentik.',
                ],
              },
            ],
            keyTerms: ['nyílt rendszer', 'homeosztázis', 'sejtciklus', 'aszpektus'],
          },
        },
      },
      {
        id: 'fizikai-kemiai-alapismeretek',
        title: 'Fizikai, kémiai alapismeretek',
        order: 3,
        isFree: false,
        estimatedMinutes: 18,
        content: {
          kozep: {
            intro: 'Néhány alapvető fizikai-kémiai jelenség - a diffúzió, az ozmózis, a felületi megkötődés és az enzimműködés - megértése nélkülözhetetlen a további biológiai folyamatok magyarázatához.',
            sections: [
              {
                heading: 'Diffúzió és ozmózis',
                paragraphs: [
                  'A diffúzió az anyagok nagyobb koncentrációjú helyről a kisebb koncentrációjú hely felé történő, energiabefektetés nélküli mozgása, amíg a koncentráció ki nem egyenlítődik.',
                  'Az ozmózis a víz mozgása egy féligáteresztő hártyán át, a kisebb oldott anyag-koncentrációjú oldatból a nagyobb koncentráció felé. Egyszerű kísérlettel (pl. burgonyaszelet sós vízbe helyezésével) jól bemutatható és értelmezhető.',
                ],
              },
              {
                heading: 'Felületi megkötődés',
                paragraphs: [
                  'A felületen való megkötődésnek (adszorpciónak) fontos biológiai szerepe van: ez áll az enzimműködés, a talajkolloidok anyagmegkötő képessége és a kapillaritás hátterében is.',
                  'Az orvosi szén nagy felületi megkötőképessége festékoldattal jól kimutatható kísérlettel - ez a tulajdonság áll a mérgezések esetén alkalmazott szenes kezelés hátterében is.',
                ],
              },
              {
                heading: 'Enzimek és katalízis',
                paragraphs: [
                  'Az aktiválási energia az a minimális energia, amely egy kémiai reakció beindításához szükséges. A katalizátorok - így az enzimek is - csökkentik ezt az energiaszükségletet, ezáltal felgyorsítják a reakciót.',
                  'Az enzimek minden sejtben működnek, és optimális működésükhöz meghatározott hőmérséklet és pH szükséges, amely összefügg a szervezet jellemző élettani értékeivel.',
                  'Egy enzim hibás működése (enzimhiány vagy -hiba) örökletes emberi betegséghez vezethet - ilyen betegségek megelőzésében fontos szerepe van a korai diagnosztikának.',
                ],
              },
            ],
            keyTerms: ['diffúzió', 'ozmózis', 'adszorpció', 'aktiválási energia', 'katalizátor', 'enzim'],
          },
          emeltExtra: {
            intro: 'Emelt szinten az ozmotikusan aktív anyagok élettani szerepét, a kromatográfia elvét és az ATP energetikai szerepét is ismerni kell.',
            sections: [
              {
                heading: 'Ozmotikusan aktív anyagok és kromatográfia',
                paragraphs: [
                  'A szervezet ozmotikusan aktív anyagai - például a vérfehérjék - meghatározó szerepet játszanak a vese visszaszívási folyamataiban és a nyirokképzésben.',
                  'A kromatográfia a keverékek komponenseinek szétválasztására szolgáló módszer, amely a molekulák eltérő megoszlásán alapul egy álló és egy mozgó fázis között.',
                ],
              },
              {
                heading: 'Az ATP energetikai szerepe',
                paragraphs: [
                  'Az ATP-bontó enzimek energiaigényes folyamatokat hajtanak végre - például a miozin az izom-összehúzódást, a Na-K pumpa pedig az ionok aktív szállítását a sejtmembránon át.',
                  'Az ATP-szintézis a mitokondriumban az egyenlőtlen ioneloszláson (elsősorban a hidrogénion-grádiensen) alapul.',
                ],
              },
            ],
            keyTerms: ['ozmotikusan aktív anyag', 'kromatográfia', 'ATP-szintézis', 'Na-K pumpa'],
          },
        },
      },
    ],
  },
  {
    id: 'egyed-alatti',
    title: 'Egyed alatti szerveződési szint',
    description: 'A sejtek kémiai felépítése, anyagcseréje és a sejtalkotók működése.',
    icon: 'Microscope',
    color: 'from-blue-500 to-indigo-500',
    chapters: [
      {
        id: 'szervetlen-szerves-alkotoelemek',
        title: 'Szervetlen és szerves alkotóelemek',
        order: 1,
        isFree: true,
        estimatedMinutes: 20,
        content: {
          kozep: {
            intro: 'Az élő szervezetek felépítésében meghatározott elemek, ionok és molekulák (víz, lipidek, szénhidrátok, fehérjék, nukleinsavak) vesznek részt.',
            sections: [
              {
                heading: 'Elemek és ionok',
                paragraphs: [
                  'A szervezet tömegének 95-99%-át hat elem adja: szén (C), hidrogén (H), oxigén (O), nitrogén (N), foszfor (P) és kén (S). Fontos ionok még a H⁺, Ca²⁺, Mg²⁺, Fe²⁺/³⁺, Na⁺, K⁺, Cl⁻, HCO₃⁻, CO₃²⁻, NO₃⁻.',
                  'A só jódozása és a fogkrémek fluorozása is ezen elemek élettani szerepével függ össze.',
                ],
              },
              {
                heading: 'Lipidek, szénhidrátok, fehérjék',
                paragraphs: [
                  'A lipidek (zsírok, foszfatidok) oldódási tulajdonságaik miatt energiaraktározásra, hőszigetelésre és mechanikai védelemre alkalmasak.',
                  'A szénhidrátok (szőlőcukor, keményítő, glikogén, cellulóz) íz, vízoldhatóság és emészthetőség szerint különböznek egymástól.',
                  'A fehérjék peptidláncból épülnek fel; szerkezetük hő, nehézfémsók vagy mechanikai hatásra megváltozhat (denaturáció).',
                ],
              },
              {
                heading: 'Nukleinsavak',
                paragraphs: [
                  'A DNS szerkezetében rejlik az információhordozó, önmegkettőződő (örökítő) szerep.',
                ],
              },
            ],
            keyTerms: ['biogén elem', 'lipid', 'szénhidrát', 'fehérje', 'DNS'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a molekulák részletes szerkezetét és a köztük lévő kölcsönhatásokat is ismerni kell.',
            sections: [
              {
                heading: 'További elemek és ionok',
                paragraphs: [
                  'A jód (I), fluor (F) és szilícium (Si) is fontos szerepet tölt be az élő szervezetben, csakúgy mint a NO₂⁻ és PO₄³⁻ ionok.',
                ],
              },
              {
                heading: 'Molekulaszerkezet',
                paragraphs: [
                  'Ismerni kell a zsírok (glicerin + zsírsavak) és a foszfatidok (glicerin + zsírsavak + foszforsav) pontos szerkezetét, valamint az α- és β-glükóz, ribóz, dezoxiribóz, amilóz és cellulóz molekulájának felépítését.',
                  'A fehérjéknél az aminosavak általános képletét, az oldalláncok kölcsönhatásait, valamint az elsődleges, másodlagos, harmadlagos és negyedleges szerkezetet kell érteni.',
                ],
              },
            ],
            keyTerms: ['α- és β-glükóz', 'peptidkötés', 'harmadlagos szerkezet'],
          },
        },
      },
      {
        id: 'anyagcsere-folyamatai',
        title: 'Az anyagcsere folyamatai',
        order: 2,
        isFree: false,
        estimatedMinutes: 18,
        content: {
          kozep: {
            intro: 'Az élő szervezetek anyagcseréje felépítő (asszimilációs) és lebontó (disszimilációs) folyamatokból áll, amelyek szorosan összekapcsolódnak.',
            sections: [
              {
                heading: 'Felépítés és lebontás kapcsolata',
                paragraphs: [
                  'Energiaforrás szerint fototróf (fényenergiát hasznosító) és kemotróf (kémiai energiát hasznosító) szervezeteket különböztetünk meg; szénforrás szerint autotróf (szervetlen szénforrást használó) és heterotróf (szerves szénforrásra szoruló) élőlényeket.',
                  'Fontos alapelv, hogy minden átépítés energiaveszteséggel jár.',
                ],
              },
              {
                heading: 'Felépítő folyamat: a fotoszintézis',
                paragraphs: [
                  'A növények fotoszintézise nélkülözhetetlen a földi élet fenntartásához. A fényszakaszban a víz fényenergia hatására bomlik, molekuláris oxigén keletkezik, a hidrogén szállítómolekulára kerül, és ATP képződik.',
                  'A sötétszakaszban a szén-dioxid redukálódik a hidrogén és az ATP segítségével, glükóz, majd más vegyületek keletkeznek.',
                ],
              },
              {
                heading: 'Lebontó folyamatok',
                paragraphs: [
                  'A glikolízis a sejt citoplazmájában zajló, oxigént nem igénylő lebontási folyamat.',
                  'A végső oxidáció során a szállítómolekulához kötött hidrogén molekuláris oxigénnel egyesül, aminek eredményeként víz és ATP keletkezik.',
                ],
              },
            ],
            keyTerms: ['fototróf', 'kemotróf', 'autotróf', 'heterotróf', 'fotoszintézis', 'glikolízis'],
          },
          emeltExtra: {
            intro: 'Emelt szinten az anyagcsere-folyamatok molekuláris részletei és a citromsavciklus is a követelmények közé tartozik.',
            sections: [
              {
                heading: 'Hidrolízis, kondenzáció, sejtszállítás',
                paragraphs: [
                  'A makromolekulák alapegységei kondenzációval kapcsolódnak össze, hidrolízissel bomlanak szét.',
                  'Az endocitózis és az exocitózis folyamata teszi lehetővé nagyobb anyagmennyiségek sejtbe juttatását, illetve onnan történő kijuttatását.',
                ],
              },
              {
                heading: 'A citrátkör (citromsavciklus)',
                paragraphs: [
                  'A citrátkör a mitokondriumban zajlik: a szerves molekulák szénvázából szén-dioxid keletkezik, a felszabaduló hidrogén szállítómolekulára kerül.',
                  'Az aminosavak lebomlásakor és átalakításakor a nitrogén ammónia, illetve karbamid formájában kiválasztódik, vagy más aminosavba épül be.',
                ],
              },
            ],
            keyTerms: ['hidrolízis', 'kondenzáció', 'citrátkör', 'exocitózis'],
          },
        },
      },
      {
        id: 'sejtalkotok',
        title: 'Sejtalkotók (az eukarióta sejtben)',
        order: 3,
        isFree: false,
        estimatedMinutes: 20,
        content: {
          kozep: {
            intro: 'Az eukarióta sejt felépítését meghatározó sejtalkotók (organellumok) mindegyike sajátos szerepet tölt be a sejt életében.',
            sections: [
              {
                heading: 'Elhatárolás',
                paragraphs: [
                  'A biológiai hártyák (membránok) szerepe sokrétű: anyagforgalom, határolás, összekötés, jelölés, jelfogás.',
                  'A passzív szállítás energiabefektetés nélkül, koncentráció-különbség mentén zajlik; az aktív szállítás energiát igényel. Endocitózissal anyagok juttathatók a sejtbe, exocitózissal a sejtből.',
                ],
              },
              {
                heading: 'Mozgás és anyagcsere',
                paragraphs: [
                  'Az emberi szervezetben példák az állábas, ostoros és csillós mozgásra.',
                  'A sejt belső hártyarendszere (endoplazmatikus hálózat) számos funkciót lát el. A mitokondrium a biológiai oxidáció, a színtest a fotoszintézis helyszíne. A lizoszóma a sejtbe bejutó, illetve a belső felesleges anyagok lebontását végzi.',
                ],
              },
              {
                heading: 'Osztódás és a sejtműködések vezérlése',
                paragraphs: [
                  'A számtartó osztódás (mitózis) a testi sejtek, a számfelező osztódás (meiózis) az ivarsejtek létrejöttében játszik szerepet, és biztosítja a genetikai sokféleséget. Az emberi testi sejtek 46, az ivarsejtek 23 kromoszómát tartalmaznak.',
                  'A sejt külső és belső ingerekre válaszolhat: koncentrációváltozással, alakváltozással, elválasztással vagy elektromos változással. Megkülönböztetünk programozott (apoptózis) és nem programozott sejthalált.',
                ],
              },
            ],
            keyTerms: ['membrán', 'passzív szállítás', 'aktív szállítás', 'mitózis', 'meiózis', 'lizoszóma'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szállítási mechanizmusok végrehajtóit és a sejtciklus részletes szakaszait is ismerni kell.',
            sections: [
              {
                heading: 'A szállítás végrehajtói',
                paragraphs: [
                  'A passzív és az aktív szállítást a kettős lipidréteg, a membráncsatornák, a szállítók és a pumpák valósítják meg, különböző hajtóerők segítségével.',
                ],
              },
              {
                heading: 'Sejtciklus és osztódás',
                paragraphs: [
                  'A sejtciklus jól elkülöníthető szakaszokra bontható. A mitózis és a meiózis összehasonlítható folyamataik, előfordulásuk, valamint a genetikai információ mennyiségi és minőségi változása alapján.',
                  'A mitokondriumban zajló citromsavciklus és a végoxidáció szerkezete és működése szorosan összefügg.',
                ],
              },
              {
                heading: 'Szabályozás',
                paragraphs: [
                  'A K-Na-pumpa kulcsfontosságú a sejtműködés szabályozásában, mivel fenntartja a sejtmembrán két oldala közötti ionkoncentráció-különbséget.',
                ],
              },
            ],
            keyTerms: ['sejtciklus', 'K-Na-pumpa', 'citromsavciklus'],
          },
        },
      },
    ],
  },
  {
    id: 'egyed-szintje',
    title: 'Az egyed szerveződési szintje',
    description: 'Vírusok, önálló sejtek, többsejtűség, szövetek és szervrendszerek.',
    icon: 'Dna',
    color: 'from-purple-500 to-pink-500',
    chapters: [
      {
        id: 'nem-sejtes-rendszerek',
        title: 'Nem sejtes rendszerek (vírusok)',
        order: 1,
        isFree: true,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'onallo-sejtek',
        title: 'Önálló sejtek (baktériumok, egysejtű eukarióták)',
        order: 2,
        isFree: false,
        estimatedMinutes: 15,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'tobbsejtuseg',
        title: 'Többsejtűség',
        order: 3,
        isFree: false,
        estimatedMinutes: 15,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'szovetek-szervek',
        title: 'Szövetek, szervek, szervrendszerek, testtájak',
        order: 4,
        isFree: false,
        estimatedMinutes: 22,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
    ],
  },
  {
    id: 'emberi-szervezet',
    title: 'Az emberi szervezet',
    description: 'Homeosztázis, kültakaró, mozgás, táplálkozás, légzés, keringés, kiválasztás, szabályozás, szaporodás.',
    icon: 'HeartPulse',
    color: 'from-red-500 to-orange-500',
    chapters: [
      { id: 'homeosztazis', title: 'Homeosztázis', order: 1, isFree: true, estimatedMinutes: 10,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'kultakaro', title: 'Kültakaró', order: 2, isFree: false, estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'mozgas', title: 'A mozgás', order: 3, isFree: false, estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'taplalkozas', title: 'A táplálkozás', order: 4, isFree: false, estimatedMinutes: 20,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'legzes', title: 'A légzés', order: 5, isFree: false, estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'anyagszallitas', title: 'Az anyagszállítás (vér, keringés)', order: 6, isFree: false, estimatedMinutes: 22,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'kivalasztas', title: 'A kiválasztás', order: 7, isFree: false, estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'szabalyozas', title: 'A szabályozás (idegrendszer, hormonrendszer, immunrendszer)', order: 8, isFree: false, estimatedMinutes: 30,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'szaporodas-egyedfejlodes', title: 'Szaporodás és egyedfejlődés', order: 9, isFree: false, estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
    ],
  },
  {
    id: 'egyed-feletti',
    title: 'Egyed feletti szerveződési szintek',
    description: 'Populációk, életközösségek, bioszféra, ökoszisztéma, környezetvédelem.',
    icon: 'Leaf',
    color: 'from-lime-500 to-green-600',
    chapters: [
      { id: 'populacio', title: 'Populáció', order: 1, isFree: true, estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'eletkozossegek', title: 'Életközösségek (élőhelytípusok)', order: 2, isFree: false, estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'bioszfera', title: 'Bioszféra', order: 3, isFree: false, estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'okoszisztema', title: 'Ökoszisztéma', order: 4, isFree: false, estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'kornyezetvedelem', title: 'Környezet- és természetvédelem', order: 5, isFree: false, estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
    ],
  },
  {
    id: 'oroklodes-evolucio',
    title: 'Öröklődés, változékonyság, evolúció',
    description: 'Molekuláris genetika, Mendeli genetika, populációgenetika, evolúció.',
    icon: 'Sparkle',
    color: 'from-violet-500 to-fuchsia-500',
    chapters: [
      { id: 'molekularis-genetika', title: 'Molekuláris genetika', order: 1, isFree: true, estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'mendeli-genetika', title: 'Mendeli genetika', order: 2, isFree: false, estimatedMinutes: 20,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'populaciogenetika-evolucio', title: 'Populációgenetika és evolúciós folyamatok', order: 3, isFree: false, estimatedMinutes: 20,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'bioszfera-evolucioja', title: 'A bioszféra evolúciója', order: 4, isFree: false, estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
    ],
  },
];

export const getModuleById = (moduleId) =>
  CURRICULUM.find((m) => m.id === moduleId) ?? null;

export const getChapterById = (moduleId, chapterId) => {
  const module = getModuleById(moduleId);
  if (!module) return null;
  return module.chapters.find((c) => c.id === chapterId) ?? null;
};

export const getTotalChapterCount = () =>
  CURRICULUM.reduce((sum, m) => sum + m.chapters.length, 0);

// Visszaadja egy fejezet tartalmat egy adott vizsgaszinthez.
// Kozepszinten csak a `kozep` tartalom jelenik meg.
// Emelt szinten a `kozep` ES az `emeltExtra` OSSZEFESULVE jelenik meg -
// az emelt szint tehat SOHA nem tartalmaz kevesebbet, mint a kozep.
export const getLevelContent = (chapter, level) => {
  const kozep = chapter?.content?.kozep;
  if (!kozep || kozep.comingSoon) return { comingSoon: true };

  if (level !== 'emelt') return kozep;

  const extra = chapter?.content?.emeltExtra;
  if (!extra || extra.comingSoon) {
    // A kozep tartalom mar kesz, de az emelt kiegeszites meg nincs -
    // addig is mutassuk a kozep tartalmat, jelezve, hogy bovul majd.
    return { ...kozep, emeltPending: true };
  }

  return {
    intro: kozep.intro,
    sections: [...(kozep.sections || []), ...(extra.sections || [])],
    keyTerms: [...new Set([...(kozep.keyTerms || []), ...(extra.keyTerms || [])])],
  };
};
