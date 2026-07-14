// A BioSiker tananyag-strukturaja.
//
// A modulok es fejezetek PONTOSAN a hivatalos erettsegi kovetelmenyrendszert
// kovetik (1. mellekletet a 33/2015. (VI. 24.) EMMI rendelethez), hogy se
// tobbet, se kevesebbet ne tanitsunk a megfelelo szinten.
//
// Minden fejezet ket valtozatban letezik: content.kozep es content.emelt.
// Az emelt szint mindig a kozepszint TARTALMAT IS MAGABAN FOGLALJA, plusz
// tobblet-tudast ad hozza - soha nem kevesebbet.
//
// isFree: minden modul elso fejezete ingyenesen elerheto (fuggetlenul a
// vizsgaszinttol). A tobbi elofizetest igenyel.
//
// content.comingSoon: true, ha az adott szinten meg nincs feltoltve valodi
// tartalom - ez folyamatos, sorban halado munka.

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
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A biológia tudománya rendszerezi és vizsgálja az élővilágot - ehhez alapvető vizsgálati szempontokra és módszerekre van szükség.',
            sections: [
              {
                heading: 'Vizsgálati szempontok',
                paragraphs: [
                  'A rendszerezés alapegysége a faj. Az élőlények csoportosítása során meghatározott rendszerezési alapelveket alkalmazunk, amelyek segítenek eligazodni az élővilág sokféleségében.',
                ],
              },
              {
                heading: 'Vizsgáló módszerek',
                paragraphs: [
                  'A fénymikroszkóp a biológiai vizsgálatok egyik alapeszköze. A nagyítást az objektív és az okulár nagyításának szorzata adja meg.',
                  'Kaparék- és nyúzatkészítés, valamint metszetelemzés segítségével vizsgálhatók a sejtek és szövetek mikroszkóp alatt.',
                ],
              },
            ],
            keyTerms: ['faj', 'rendszerezés', 'fénymikroszkóp', 'nagyítás'],
          },
          emelt: {
            intro: 'Emelt szinten a rendszerezés elveinek mélyebb megértése és a tudományos vizsgálati módszerek tudatos alkalmazása is elvárás.',
            sections: [
              {
                heading: 'Mesterséges és természetes rendszer',
                paragraphs: [
                  'A mesterséges rendszerek (pl. Linné rendszere) egy-két kiválasztott jellemző alapján csoportosítanak, míg a fejlődéstörténeti (természetes) rendszer az evolúciós rokonságot tükrözi. Ehhez ma már molekuláris törzsfákat is használunk.',
                  'Fontos különbséget tenni a feltevés (hipotézis) - egy még nem igazolt magyarázat - és az elmélet (teória) - egy sokszorosan alátámasztott magyarázó rendszer - között.',
                ],
              },
              {
                heading: 'Kísérlet és modellalkotás',
                paragraphs: [
                  'Egy biológiai kísérlet értelmezéséhez fel kell ismerni a kísérleti változót (amit változtatunk) és a kontrollt (amihez viszonyítunk).',
                  'Az élettani állapot leírására szolgáló eszközök (EKG, EEG, CT, UH, röntgen, elektronmikroszkóp) mindegyike más-más szempontból modellezi a szervezet működését.',
                ],
              },
            ],
            keyTerms: ['hipotézis', 'elmélet', 'kísérleti változó', 'molekuláris törzsfa'],
          },
        },
      },
      {
        id: 'az-elet-jellemzoi',
        title: 'Az élet jellemzői',
        order: 2,
        isFree: false,
        estimatedMinutes: 14,
        content: {
          kozep: {
            intro: 'Az élő rendszerek különböző szerveződési szinteken vizsgálhatók, a sejtszint alattitól a bioszféráig.',
            sections: [
              {
                heading: 'Szerveződési szintek',
                paragraphs: [
                  'Megkülönböztetünk egyed alatti szinteket (sejt alatti, sejtszintű, szövet, szerv, szervrendszer), az egyed szintjét, és egyed feletti szinteket (populáció, társulás, biom, bioszféra).',
                ],
              },
            ],
            keyTerms: ['szerveződési szint', 'populáció', 'bioszféra'],
          },
          emelt: {
            intro: 'Emelt szinten az élő rendszereket nyílt rendszerként, egymással összefüggő tulajdonságok együtteseként értelmezzük.',
            sections: [
              {
                heading: 'Az élő rendszerek mint nyílt rendszerek',
                paragraphs: [
                  'Az élő rendszerek nyitottak: folyamatosan anyagot és energiát cserélnek a környezetükkel. Jellemző tulajdonságaik - anyagcsere, elhatárolódás, homeosztázis, ingerlékenység, mozgás, alkalmazkodás, belső egység, növekedés, szaporodás, öröklődés és öröklődő változékonyság, evolúció, halandóság - szorosan összefüggenek egymással.',
                ],
              },
              {
                heading: 'Körfolyamatok',
                paragraphs: [
                  'Az élő rendszerekben számos körfolyamat zajlik: sejtciklus, szívciklus, nemi ciklus, valamint évszakos jelenségek (aszpektusok) - ezek mind az élő rendszerek ismétlődő, önfenntartó működését mutatják.',
                ],
              },
            ],
            keyTerms: ['nyílt rendszer', 'homeosztázis', 'sejtciklus'],
          },
        },
      },
      {
        id: 'fizikai-kemiai-alapismeretek',
        title: 'Fizikai, kémiai alapismeretek',
        order: 3,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'Néhány alapvető fizikai-kémiai jelenség (diffúzió, ozmózis, enzimműködés) megértése nélkülözhetetlen a biológiai folyamatok magyarázatához.',
            sections: [
              {
                heading: 'Diffúzió és ozmózis',
                paragraphs: [
                  'A diffúzió és az ozmózis alapvető biológiai jelentőséggel bír: ezek teszik lehetővé az anyagok sejten belüli és sejtek közötti mozgását.',
                ],
              },
              {
                heading: 'Enzimek',
                paragraphs: [
                  'Az enzimek minden sejtben működnek, és katalizátorként csökkentik a kémiai reakciók aktiválási energiáját. Optimális működésükhöz meghatározott hőmérséklet és pH szükséges, ami összefügg a szervezet jellemző élettani értékeivel.',
                  'Egy enzim hibás működése (enzimhiba) emberi betegséghez vezethet.',
                ],
              },
            ],
            keyTerms: ['diffúzió', 'ozmózis', 'enzim', 'aktiválási energia', 'katalizátor'],
          },
          emelt: {
            intro: 'Emelt szinten az ozmotikusan aktív anyagok élettani szerepét és az enzimműködés energetikai hátterét is ismerni kell.',
            sections: [
              {
                heading: 'Ozmotikusan aktív anyagok',
                paragraphs: [
                  'A szervezet ozmotikusan aktív anyagai (pl. vérfehérjék) fontos szerepet játszanak a visszaszívási és nyirokképzési folyamatokban.',
                  'A kromatográfia a keverékek komponenseinek szétválasztására szolgáló módszer, aminek elvi alapjait és egy leírt kísérlet eredményét is tudni kell értelmezni.',
                ],
              },
              {
                heading: 'ATP és energiaigényes folyamatok',
                paragraphs: [
                  'Az ATP-bontó enzimek (pl. a miozin, a Na-K pumpa) energiaigényes folyamatokat hajtanak végre, míg az ATP-szintézis az egyenlőtlen ioneloszláson alapul (mitokondrium).',
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
          emelt: {
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
                  'A sötétszakaszban a szén-dioxid redukálódik a hidrogén és az ATP segítségével, glükóz, majd más vegyületek keletkeznek. A folyamatban a fotoszintetikus színanyagok (karotinoidok, klorofillok) nyelik el a fényenergiát.',
                ],
              },
              {
                heading: 'Lebontó folyamatok',
                paragraphs: [
                  'A glikolízis a sejt citoplazmájában zajló, oxigént nem igénylő lebontási folyamat.',
                  'A biológiai oxidáció és az erjedés összehasonlítható biológiai funkciójuk, sejten belüli helyszínük és energiamérlegük alapján.',
                  'A végső oxidáció során a szállítómolekulához kötött hidrogén molekuláris oxigénnel egyesül, aminek eredményeként víz és ATP keletkezik.',
                ],
              },
            ],
            keyTerms: ['fototróf', 'kemotróf', 'autotróf', 'heterotróf', 'fotoszintézis', 'glikolízis'],
          },
          emelt: {
            intro: 'Emelt szinten az anyagcsere-folyamatok molekuláris részletei és a citromsavciklus is a követelmények közé tartozik.',
            sections: [
              {
                heading: 'Hidrolízis, kondenzáció, sejtszállítás',
                paragraphs: [
                  'A makromolekulák alapegységei kondenzációval kapcsolódnak össze, hidrolízissel bomlanak szét - minden ilyen átépítés energiával jár.',
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
          emelt: {
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
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'onallo-sejtek',
        title: 'Önálló sejtek (baktériumok, egysejtű eukarióták)',
        order: 2,
        isFree: false,
        estimatedMinutes: 15,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'tobbsejtuseg',
        title: 'Többsejtűség',
        order: 3,
        isFree: false,
        estimatedMinutes: 15,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'szovetek-szervek',
        title: 'Szövetek, szervek, szervrendszerek, testtájak',
        order: 4,
        isFree: false,
        estimatedMinutes: 22,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
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
      {
        id: 'homeosztazis',
        title: 'Homeosztázis',
        order: 1,
        isFree: true,
        estimatedMinutes: 10,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'kultakaro',
        title: 'Kültakaró',
        order: 2,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'mozgas',
        title: 'A mozgás',
        order: 3,
        isFree: false,
        estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'taplalkozas',
        title: 'A táplálkozás',
        order: 4,
        isFree: false,
        estimatedMinutes: 20,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'legzes',
        title: 'A légzés',
        order: 5,
        isFree: false,
        estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'anyagszallitas',
        title: 'Az anyagszállítás (vér, keringés)',
        order: 6,
        isFree: false,
        estimatedMinutes: 22,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'kivalasztas',
        title: 'A kiválasztás',
        order: 7,
        isFree: false,
        estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'szabalyozas',
        title: 'A szabályozás (idegrendszer, hormonrendszer, immunrendszer)',
        order: 8,
        isFree: false,
        estimatedMinutes: 30,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'szaporodas-egyedfejlodes',
        title: 'Szaporodás és egyedfejlődés',
        order: 9,
        isFree: false,
        estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
    ],
  },
  {
    id: 'egyed-feletti',
    title: 'Egyed feletti szerveződési szintek',
    description: 'Populációk, életközösségek, bioszféra, ökoszisztéma, környezetvédelem.',
    icon: 'Leaf',
    color: 'from-lime-500 to-green-600',
    chapters: [
      {
        id: 'populacio',
        title: 'Populáció',
        order: 1,
        isFree: true,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'eletkozossegek',
        title: 'Életközösségek (élőhelytípusok)',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'bioszfera',
        title: 'Bioszféra',
        order: 3,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'okoszisztema',
        title: 'Ökoszisztéma',
        order: 4,
        isFree: false,
        estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'kornyezetvedelem',
        title: 'Környezet- és természetvédelem',
        order: 5,
        isFree: false,
        estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
    ],
  },
  {
    id: 'oroklodes-evolucio',
    title: 'Öröklődés, változékonyság, evolúció',
    description: 'Molekuláris genetika, Mendeli genetika, populációgenetika, evolúció.',
    icon: 'Sparkle',
    color: 'from-violet-500 to-fuchsia-500',
    chapters: [
      {
        id: 'molekularis-genetika',
        title: 'Molekuláris genetika',
        order: 1,
        isFree: true,
        estimatedMinutes: 18,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'mendeli-genetika',
        title: 'Mendeli genetika',
        order: 2,
        isFree: false,
        estimatedMinutes: 20,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'populaciogenetika-evolucio',
        title: 'Populációgenetika és evolúciós folyamatok',
        order: 3,
        isFree: false,
        estimatedMinutes: 20,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
      {
        id: 'bioszfera-evolucioja',
        title: 'A bioszféra evolúciója',
        order: 4,
        isFree: false,
        estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emelt: { comingSoon: true } },
      },
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
