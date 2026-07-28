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
        id: 'elemek-ionok',
        title: 'Elemek, ionok',
        order: 1,
        isFree: true,
        estimatedMinutes: 26,
        diagramId: 'elemek-megoszlasa',
        content: {
          kozep: {
            intro: 'Az élő szervezet felépítésében viszonylag kevés kémiai elem vesz részt - de ezek nem elszigetelt tények halmazaként érdemes megtanulni őket, hanem egy egymásra épülő, egymást feltételező rendszerként. Egy-egy elem gyakran több, látszólag távoli élettani folyamatban is kulcsszerepet játszik.',
            sections: [
              {
                heading: 'A négy legfontosabb elem és az összefüggéseik',
                paragraphs: [
                  'A szén (C), a hidrogén (H), az oxigén (O) és a nitrogén (N) adja a szervezet tömegének döntő többségét - de érdemes végiggondolni, miért pont ezek váltak ilyen meghatározóvá.',
                  'A szén különleges kémiai tulajdonsága (négy kovalens kötés kialakítására képes, stabil láncokat és gyűrűket hozhat létre) teszi lehetővé, hogy a szerves kémia teljes "váza" legyen - enélkül nem alakulhatott volna ki a szerves molekulák (szénhidrátok, lipidek, fehérjék, nukleinsavak) sokfélesége.',
                  'A hidrogén és az oxigén nemcsak a vizet alkotja: ugyanez a két elem áll a sejt energiatermelő rendszerének középpontjában is. A sejtlégzés során a hidrogén "szállítómolekulákra" kerül, majd a végoxidáció lépésében az oxigénnel egyesülve víz és ATP keletkezik belőle - vagyis a víz alkotóelemei és az energiatermelés kulcsszereplői ugyanazok az atomok.',
                  'A nitrogén köti össze a szerkezeti és az információs rendszert: nélküle nem lenne fehérjeszintézis (az aminosavak amino-csoportjában van jelen), és nem létezne genetikai információtárolás sem (a nukleinsav-bázisok nitrogéntartalmúak). Egyetlen elem tehát két, teljesen különböző biológiai rendszer működését is lehetővé teszi.',
                ],
              },
              {
                heading: 'Makroelemek - egymással összefüggő szerepkörök',
                paragraphs: [
                  'A foszfor (P) nemcsak a csontok és fogak ásványi alkotórésze, hanem az energiaháztartás (ATP) és az örökítő anyag (nukleinsavak) felépítésében is nélkülözhetetlen - ugyanaz az elem köti tehát össze a vázrendszert, az energiaanyagcserét és a genetikai rendszert.',
                  'A kálium (K) és a nátrium (Na) koncentrációja ellentétes irányban oszlik meg a sejtmembrán két oldalán (a kálium a sejten belül, a nátrium a sejten kívül van túlsúlyban). Ez a koncentráció-különbség hozza létre azt az elektromos potenciált, amely az idegi ingerületvezetés és az izomösszehúzódás alapja - ha ez az egyensúly felborul (például súlyos folyadékvesztés esetén), életveszélyes szívritmuszavar is kialakulhat. Ez jól mutatja, hogy egy látszólag egyszerű ionegyensúly hogyan határozhatja meg a legösszetettebb élettani folyamatokat is.',
                  'A kalcium (Ca) nemcsak csontalkotó elem, hanem a szervezet egyik legfontosabb "jelmolekulája" is: koncentrációjának pillanatnyi megváltozása indítja be az izomösszehúzódást, a véralvadási folyamatot és számos hormon kiválasztását. Emiatt a szervezet rendkívül szigorúan szabályozza a vér kalciumszintjét.',
                  'A klór (Cl) a nátriummal "együtt mozog" (mivel ellentétes elektromos töltésű részecskeként követi azt), emellett a gyomorsav (sósav) alkotóeleme is - vagyis ugyanaz az ion egyszerre vesz részt a sejten kívüli folyadéktér egyensúlyának fenntartásában és az emésztésben.',
                  'A magnézium (Mg) számos enzim működéséhez szükséges "segédmolekula" (kofaktor) - hiánya izomgörcshöz és szívritmuszavarhoz is vezethet, mivel enélkül több száz enzim nem tudna megfelelően működni. Növényekben ráadásul a klorofill molekula központi atomja is magnézium.',
                  'A kén (S) a fehérjék térszerkezetét stabilizáló diszulfidhidak alkotóeleme - enélkül sok fehérje nem tudná felvenni a működéséhez szükséges térbeli formát.',
                ],
              },
              {
                heading: 'Mikroelemek - kis mennyiség, aránytalanul nagy hatás',
                paragraphs: [
                  'A vas (Fe) egyszerre alkotóeleme a hemoglobinnak (a vörösvértestek oxigénszállító fehérjéjének), a mioglobinnak (az izmok oxigéntároló fehérjéjének), és a sejtlégzésben szereplő citokróm fehérjéknek is. Emiatt a vashiány nemcsak vérszegénységet okoz (kevesebb oxigénszállítás miatt), hanem a sejtek energiatermelését is rontja (a citokrómok hiányos működése miatt) - ez a kettős hatás magyarázza, miért olyan kifejezetten fárasztó állapot a vashiányos vérszegénység.',
                  'A jód (I) a pajzsmirigyhormonok alkotóeleme, amelyek az egész szervezet anyagcsere-sebességét szabályozzák. Jódhiány esetén nemcsak golyva (a pajzsmirigy megnagyobbodása) alakulhat ki, hanem az anyagcsere lelassulása miatt fáradékonyság, fokozott hidegérzékenység és súlygyarapodás is jelentkezhet - ez is jól mutatja, hogy egyetlen elem hiánya hogyan gyűrűzhet végig a szervezet egészén.',
                  'A cink (Zn) és a réz (Cu) számos enzim kofaktora, és mindkettő fontos szerepet játszik az immunrendszer megfelelő működésében is.',
                  'A fluor (F) a fogzománcba épülve jelentősen növeli annak ellenállóképességét a fogszuvasodással szemben - ez áll a fogkrémek fluorozásának hátterében.',
                ],
              },
            ],
            keyTerms: ['szén', 'hidrogén', 'oxigén', 'nitrogén', 'foszfor', 'kén', 'kalcium', 'kálium', 'nátrium', 'klór', 'magnézium', 'vas', 'jód', 'cink', 'réz', 'fluor'],
          },
          emeltExtra: {
            intro: 'Emelt szinten nemcsak további elemeket és ionokat kell ismerni, hanem azt is látni kell, hogyan szabályozza a szervezet ezeknek az elemeknek a szintjét - és mi történik, ha ez a szabályozás nem működik megfelelően.',
            sections: [
              {
                heading: 'További nyomelemek és ionok',
                paragraphs: [
                  'A szilícium (Si) egyes élőlényeknél (pl. kovamoszatoknál) a sejtfal, illetve a váz felépítésében játszik szerepet - ezek a szervezetek a vízből felvett szilícium-dioxidból építik fel jellegzetes, mintázott vázukat.',
                  'A nitrit (NO₂⁻) és a nitrát (NO₃⁻) a nitrogénforgalom fontos állomásai - a talajban élő baktériumok alakítják át egymásba ezeket a formákat, amelyeket a növények felvehetnek. Ez azt is jelenti, hogy a növények számára elérhető nitrogén mennyisége nem csak a talaj nitrogéntartalmától, hanem az ott élő baktériumközösség aktivitásától is függ.',
                  'A foszfát (PO₄³⁻) ion nemcsak a csontok és fogak felépítésében játszik szerepet, hanem a nukleinsavak (DNS, RNS) és az ATP gerincét is ez alkotja - minden foszfátcsoport egy-egy "kapocs" a nukleotidláncban. Ez összeköti a foszfor makroelemként betöltött szerepét (lásd fentebb) az energiaanyagcserével és az örökítő anyaggal is.',
                ],
              },
              {
                heading: 'A kalciumszint szabályozása - egy összetett visszacsatolási rendszer',
                paragraphs: [
                  'A vér kalciumszintjét a szervezet szűk határok között tartja, mert - ahogy fentebb szó volt róla - a kalcium jelmolekulaként is működik, így koncentrációjának ingadozása komoly zavarokat okozna.',
                  'Ha a vér kalciumszintje csökken, a mellékpajzsmirigy parathormont (PTH) választ ki. Ez a hormon három helyen hat egyszerre: mozgósítja a kalciumot a csontokból, fokozza a vese kalcium-visszaszívását, és aktiválja a D-vitamint, amely ezután a bélben fokozza a kalcium felszívódását a táplálékból. Ha a vér kalciumszintje túl magasra emelkedik, a pajzsmirigy kalcitonint választ ki, amely ellentétes irányban hat, és csökkenti a vér kalciumszintjét.',
                  'Ez a mechanizmus jó példa arra, hogy egy elem élettani szintjének szabályozása szinte sohasem egyetlen szervre vagy folyamatra korlátozódik, hanem több szerv (csont, vese, bél) összehangolt működését igényli.',
                ],
              },
              {
                heading: 'A Na⁺/K⁺-pumpa molekuláris működése',
                paragraphs: [
                  'A korábban említett nátrium-kálium koncentráció-különbséget egy aktív szállítást végző fehérje, a Na⁺/K⁺-pumpa tartja fenn: minden működési ciklusában 3 nátriumiont juttat ki a sejtből, miközben 2 káliumiont juttat be, ATP elhasználása mellett.',
                  'Mivel a kijuttatott pozitív töltés több, mint a bejuttatott, a pumpa maga is hozzájárul a sejt belsejének negatív elektromos potenciáljához (nyugalmi membránpotenciál) - vagyis a Na⁺ és K⁺ nem csak "egyensúlyban van", hanem a fenntartásukhoz szükséges munka maga is részt vesz az elektromos jel létrehozásában, amelyre az idegműködés épül.',
                ],
              },
              {
                heading: 'A vas szervezeten belüli szállítása és tárolása',
                paragraphs: [
                  'A felszívódott vas nem szabadon "úszik" a vérben, hanem egy szállítófehérjéhez, a transzferrinhez kötődve jut el a szövetekhez - ez védi a szervezetet a szabad vasionok károsító (sejtkárosító, oxidatív stressz-fokozó) hatásától.',
                  'A sejteken belül a felesleges vas a ferritin nevű fehérjéhez kötve raktározódik - így amikor a szervezetnek hirtelen több vasra van szüksége (pl. vérveszteség után), gyorsan mobilizálható tartalék áll rendelkezésre.',
                ],
              },
              {
                heading: 'A hidrogén-karbonát mint pufferrendszer',
                paragraphs: [
                  'A korábban már említett hidrogén-karbonát (HCO₃⁻) ion nemcsak a szén-dioxid vérbeli szállításában vesz részt, hanem a vér pH-jának állandóságát biztosító pufferrendszer alapja is: sav hozzáadásakor a hidrogén-karbonát megköti a felesleges hidrogéniont, lúg hozzáadásakor pedig hidrogéniont ad le - így a vér pH-ja még jelentős sav- vagy lúgterhelés esetén is csak kis mértékben változik.',
                ],
              },
            ],
            keyTerms: ['szilícium', 'nitrát', 'parathormon', 'kalcitonin', 'nyugalmi membránpotenciál', 'transzferrin', 'ferritin', 'pufferrendszer'],
          },
        },
      },
      {
        id: 'szervetlen-molekulak',
        title: 'Szervetlen molekulák',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        diagramId: 'viz-dipolus',
        content: {
          kozep: {
            intro: 'Három egyszerű szervetlen molekula - a víz, a szén-dioxid és az ammónia - kulcsszerepet játszik az élővilág működésében, jelentőségük messze túlmutat egyszerű szerkezetükön.',
            sections: [
              {
                heading: 'A víz szerkezete és különleges tulajdonságai',
                paragraphs: [
                  'A vízmolekulában az oxigénatom jobban vonzza az elektronokat, mint a hidrogénatomok, ezért a molekula dipólussá válik: az oxigén oldala enyhén negatív, a hidrogének oldala enyhén pozitív töltésű.',
                  'Ez a dipólus jelleg teszi lehetővé, hogy a vízmolekulák egymással hidrogénkötéseket alakítsanak ki - egy molekula pozitív töltésű hidrogénje a szomszédos molekula negatív töltésű oxigénjéhez kapcsolódik. Ez a kötéshálózat felelős a víz sok különleges tulajdonságáért.',
                  'A hidrogénkötések miatt a víznek nagy a fajhője (sok energia kell a felmelegítéséhez, illetve sok energia szabadul fel lehűléskor), ami stabilizálja a szervezetek és a környezet hőmérsékletét. A víz emellett kiváló oldószer a poláris anyagok (pl. sók, cukrok) számára.',
                  'A hidrogénkötések adják a víz kohézióját (a vízmolekulák egymáshoz tapadását, ami például a felületi feszültségért felelős) és az adhézióját (más anyagokhoz való tapadását, ami a kapillaritás alapja).',
                ],
              },
              {
                heading: 'A víz biológiai szerepe',
                paragraphs: [
                  'A víz a legtöbb biokémiai reakció közege: a sejten belüli anyagcsere-folyamatok szinte kivétel nélkül vizes közegben zajlanak.',
                  'Szállítóközegként is nélkülözhetetlen: a vér plazmájának, illetve a növények nedvkeringésének fő alkotórésze a víz.',
                  'A víz párolgása jelentős hőelvonással jár, ami fontos szerepet játszik a szervezetek hőszabályozásában (pl. izzadás, kutyáknál a zihálás).',
                  'A növényi sejtekben a víz a sejt belső nyomását (turgorát) is fenntartja, ami a növény merevségéhez, alakjának megtartásához szükséges.',
                ],
              },
              {
                heading: 'Szén-dioxid és ammónia',
                paragraphs: [
                  'A szén-dioxid a sejtlégzés (biológiai oxidáció) végterméke, ugyanakkor a fotoszintézis nélkülözhetetlen nyersanyaga is - ez a két folyamat egymást kiegészítve tartja fenn a légkör oxigén- és szén-dioxid-egyensúlyát.',
                  'A szén-dioxid jelenléte meszes vízzel (mészvízzel) mutatható ki: a szén-dioxid hatására a mészvízben rosszul oldódó kalcium-karbonát csapadék keletkezik, ami a folyadék elhomályosodásaként figyelhető meg.',
                  'Az ammónia a fehérjék és aminosavak lebontásakor keletkező, nitrogéntartalmú melléktermék. Mivel az ammónia mérgező a sejtekre, a szervezetek jellemzően kevésbé mérgező vegyületté (pl. karbamiddá) alakítják, mielőtt kiválasztanák.',
                ],
              },
            ],
            keyTerms: ['dipólus', 'hidrogénkötés', 'kohézió', 'adhézió', 'mészvízpróba', 'ammónia', 'karbamid'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szén-dioxid vérbeli szállítási formáit és a nitrogén-kiválasztás állatcsoportonként eltérő stratégiáit is ismerni kell.',
            sections: [
              {
                heading: 'A szén-dioxid szállítása a vérben',
                paragraphs: [
                  'A szövetekben keletkező szén-dioxid többféle formában szállítódik a vérben: egy része fizikailag oldott állapotban, nagyobb része hidrogén-karbonát (HCO₃⁻) ionná alakulva, kisebb hányada pedig a hemoglobinhoz kötődve, karbamino-vegyület formájában jut el a tüdőbe, ahol újra szén-dioxiddá alakulva kilélegzésre kerül.',
                ],
              },
              {
                heading: 'Nitrogén-kiválasztási stratégiák',
                paragraphs: [
                  'Az élővilágban háromféle fő nitrogén-kiválasztási stratégia alakult ki, attól függően, mennyi víz áll az adott élőlény rendelkezésére. Az ammonotelikus szervezetek (pl. sok vízi állat) közvetlenül ammóniát választanak ki, amit a bőséges víz gyorsan felhígít.',
                  'Az ureotelikus szervezetek (pl. az emlősök, köztük az ember, valamint a kétéltűek) a mérgező ammóniát kevésbé mérgező karbamiddá alakítják a májban, amely vizelettel ürül.',
                  'Az urikotelikus szervezetek (pl. a madarak, a hüllők és a rovarok) húgysav formájában választják ki a nitrogént - ez alig oldódik vízben, így pépes vagy szilárd formában, minimális vízveszteséggel üríthető, ami szárazföldi, illetve tojásban fejlődő szervezeteknél különösen előnyös.',
                ],
              },
            ],
            keyTerms: ['hidrogén-karbonát', 'karbamino-vegyület', 'ammonotelikus', 'ureotelikus', 'urikotelikus'],
          },
        },
      },
      {
        id: 'lipidek',
        title: 'Lipidek',
        order: 3,
        isFree: false,
        estimatedMinutes: 22,
        content: {
          kozep: {
            intro: 'A lipidek (zsírszerű anyagok) sokféle biológiai szerepet töltenek be - energiaraktározástól a membránépítésig -, és ahogy eddig is láttuk, ez a sokféleség szoros összefüggésben áll a molekulák szerkezetével.',
            sections: [
              {
                heading: 'Oldódási tulajdonságok - visszautalás a víz polaritására',
                paragraphs: [
                  'A lipidek vízben nem, szerves oldószerekben (pl. alkoholban, benzinben) viszont jól oldódnak. Ennek oka ugyanaz az alapelv, amit a víz dipólus jellegénél már megismertünk: "hasonló a hasonlót oldja". Mivel a lipidek molekulái apolárisak (nincs bennük egyenlőtlen töltéseloszlás), nem tudnak hidrogénkötést kialakítani a poláris vízmolekulákkal - emiatt nem elegyednek vízzel, hanem külön fázist alkotnak (ez figyelhető meg, amikor az olaj a víz felszínén úszik).',
                  'A zsírban oldódó vitaminok (A, D, E, K) apoláris jellegűek, ezért a zsírszövetben könnyen felhalmozódhatnak - ezzel szemben a vízoldékony vitaminok fölöslege egyszerűen kiürül a vizelettel. Emiatt a zsírban oldódó vitaminok túladagolása jóval veszélyesebb: a szervezet nem tudja őket olyan könnyen "kimosni" magából, mint a vízoldékonyakat.',
                ],
              },
              {
                heading: 'A zsírok és a foszfatidok szerkezete',
                paragraphs: [
                  'A zsírok glicerinből és zsírsavakból épülnek fel: egy glicerinmolekulához három zsírsav kapcsolódik (ezért nevezik ezt a molekulát triglicaridnak is).',
                  'A foszfatidok hasonló felépítésűek, de bennük a glicerinhez csak két zsírsav és egy foszforsav-egység kapcsolódik. Ez a látszólag apró szerkezeti különbség - egy zsírsav lecserélése egy foszforsav-egységre - alapvetően más tulajdonságot ad a molekulának, ahogy azt lentebb látni fogjuk.',
                ],
              },
              {
                heading: 'Biológiai szerep: miért pont a zsír az energiaraktár?',
                paragraphs: [
                  'A zsírok és olajok fő biológiai szerepe az energiaraktározás, a hőszigetelés és a mechanikai védelem - ez összefügg azzal, hogy a zsírszövet jellemzően a bőr alatt és a belső szervek körül helyezkedik el.',
                  'Nem véletlen, hogy a szervezet elsősorban zsírban raktározza a hosszú távú energiatartalékot, nem szénhidrátban: a zsírok molekulái sokkal "redukáltabbak" (kevesebb oxigént, több hidrogént tartalmaznak grammonként), ezért lebontásukkor közel kétszer annyi energia szabadul fel, mint ugyanannyi szénhidrát lebontásakor. Ugyanakkora energiatartalékot így jóval kisebb tömegben és térfogatban lehet elraktározni zsír formájában, mint szénhidrátként - ez jelentős előny egy mozgó szervezet számára.',
                ],
              },
              {
                heading: 'A membránépítés kémiai háttere',
                paragraphs: [
                  'A korábban tanultak (lásd az Elhatárolás fejezetet) szerint a sejtmembrán foszfatidokból épül fel. Most már azt is látjuk, miért éppen ezek a molekulák alkalmasak erre: a foszfatid egyik "vége" (a foszforsavat tartalmazó fejrész) poláris, tehát vízbarát, a másik "vége" (a két zsírsavlánc) apoláris, tehát vízkerülő.',
                  'Vizes közegben ez a kettősség arra kényszeríti a foszfatid-molekulákat, hogy kettős réteget alkossanak: a poláris fejrészek kifelé, a vizes közeg felé fordulnak, az apoláris láncok pedig egymás felé, elzárva a vizet. Ez a kettősréteg adja a sejtmembrán alapszerkezetét.',
                ],
              },
              {
                heading: 'Az epe szerepe a zsírok emésztésében',
                paragraphs: [
                  'Az epesavak szerkezete hasonló elven működik, mint a foszfatidoké: egyik részük poláris, másik részük apoláris. Emiatt az epesavak "mosószerként" viselkednek - az apoláris részükkel a zsírcseppekhez kapcsolódnak, a poláris részükkel pedig a vizes bélnedv felé fordulnak, így apró cseppekre (emulzióra) bontják a zsírt. Ez jelentősen megnöveli a zsír felületét, ami elősegíti az emésztőenzimek hatékony munkáját.',
                ],
              },
            ],
            keyTerms: ['lipid', 'zsír', 'foszfatid', 'emulgeálás', 'zsírszövet'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szteránváz és a karotinoidok szerkezetét, illetve azt is látni kell, hogyan oldja meg a szervezet a vízben nem oldódó lipidek szállítását a vérben.',
            sections: [
              {
                heading: 'A szteránváz - egyetlen molekulaváz, sok különböző hormon alapja',
                paragraphs: [
                  'A szteránváz négy összekapcsolódó gyűrűből álló, jellegzetes molekulaszerkezet, amely a koleszterin alapváza is - a koleszterin pedig nem csupán a sejtmembrán egyik alkotórésze, hanem a szervezet szinte összes szteroid típusú hormonjának kiindulási anyaga is.',
                  'Ugyanabból a szteránvázból, csak a rajta lévő oldalláncok apró módosításával épül fel a nemi hormonok (pl. tesztoszteron, ösztrogén), a mellékvesekéreg hormonjainak (pl. kortizol) és a D-vitamin aktív formájának szerkezete is. Ez jó példa arra, hogy a szervezet gazdaságosan "újrahasznosítja" ugyanazt az alapszerkezetet sokféle, egymástól teljesen eltérő élettani hatású molekula előállításához.',
                ],
              },
              {
                heading: 'Karotinoidok: fényelnyelés növényben és emberi szemben',
                paragraphs: [
                  'A karotinoidok molekulájában található konjugált kettőskötés-rendszer (váltakozó egyes és kettős kötések sorozata) felelős a fény elnyeléséért - minél hosszabb ez a váltakozó rendszer, annál hosszabb hullámhosszú fényt képes elnyelni a molekula, ez adja a karotinoidok jellegzetes sárga-narancs-vörös színét.',
                  'Ez a tulajdonság áll a növényi karotinoidok (karotin, xantofill) fotoszintézisben betöltött szerepének hátterében: a klorofill mellett kiegészítő fényelnyelő pigmentként működnek, a klorofill által kevésbé hatékonyan elnyelt hullámhossz-tartományban is képesek energiát gyűjteni, ráadásul feleslegesen erős fény esetén védik is a növényt a károsodástól.',
                  'Az emberi szervezetben az A-vitamin (amely karotinoidból, például béta-karotinból alakul át) a retina nevű molekulává alakul, amely a rodopszin nevű fényérzékeny fehérje alkotórésze a szem pálcikáiban. Amikor fény éri a retinát, a molekula konjugált kettőskötés-rendszerében térszerkezeti változás (izomerizáció) történik - ez a apró szerkezeti változás indítja el azt az idegi jelet, amelyet végül képként érzékelünk. Vagyis ugyanaz a konjugált kettőskötés-rendszer, amely a növényi fényelnyelést lehetővé teszi, az emberi látás molekuláris alapját is adja.',
                ],
              },
              {
                heading: 'Hogyan szállítódnak a lipidek a vérben?',
                paragraphs: [
                  'Korábban láttuk, hogy a lipidek apoláris jellegük miatt nem oldódnak vízben - ez komoly problémát jelentene a vér (ami túlnyomórészt víz) általi szállításukhoz. A szervezet ezt úgy oldja meg, hogy a lipideket fehérjeburokba csomagolva, ún. lipoproteinek formájában szállítja: a lipoprotein külső rétege poláris fehérjékből és foszfatid-fejekből áll (ezek a vizes közeg felé fordulnak), belsejében pedig apoláris lipidek (pl. koleszterin, trigliceridek) helyezkednek el.',
                  'Ez a "csomagolási elv" ugyanazon a fizikai-kémiai alapon nyugszik, mint a sejtmembrán felépítése vagy az epesavak emulgeáló hatása: mindegyik esetben egy poláris-apoláris kettősséggel rendelkező molekula (vagy molekulacsoport) teszi lehetővé, hogy egy egyébként vízzel nem elegyedő anyag mégis funkcionálhasson egy vizes közegben.',
                ],
              },
            ],
            keyTerms: ['szteránváz', 'koleszterin', 'konjugált kettőskötés', 'rodopszin', 'lipoprotein'],
          },
        },
      },
      {
        id: 'szenhidratok',
        title: 'Szénhidrátok',
        order: 4,
        isFree: false,
        estimatedMinutes: 26,
        diagramId: 'maltoz-kepzodes',
        content: {
          kozep: {
            intro: 'A szénhidrátok adják a bioszféra szerves anyagainak fő tömegét - energiaforrásként, tartaléktápanyagként, vázanyagként és a nukleinsavak építőköveiként egyaránt nélkülözhetetlenek.',
            sections: [
              {
                heading: 'Általános jellemzés',
                paragraphs: [
                  'A szénhidrátok általános képlete Cₙ(H₂O)ₘ - ez a képlet adta a nevüket is, hiszen régen úgy gondolták, a szén és a víz vegyületei. Kémiailag a szénhidrátok olyan molekulák, amelyek több hidroxilcsoportot (-OH) és egy karbonilcsoportot (C=O) tartalmaznak.',
                  'Biológiai jelentőségük sokrétű: a glükóz a sejtek elsődleges energiaforrása, a keményítő és a glikogén tartaléktápanyagok, a cellulóz vázanyagként ad szilárdságot a növényi sejtfalnak, a ribóz és a dezoxiribóz pedig a nukleinsavak (RNS, DNS) építőkövei.',
                ],
              },
              {
                heading: 'Egyszerű cukrok mérete szerint',
                paragraphs: [
                  'A triózok (3 szénatomos cukrok, pl. a glicerin-aldehid) az anyagcsere fontos köztes termékei (intermedierjei); a sejtekben jellemzően foszforsavval alkotott vegyülettel (észterrel) fordulnak elő, ami megakadályozza, hogy egyszerűen átjussanak a sejthártyán, így a sejt "csapdába ejtve" tudja őket energiaforrásként hasznosítani.',
                  'A pentózok (5 szénatomos cukrok) közül a legfontosabbak a ribóz és a dezoxiribóz - a kettő között mindössze egyetlen oxigénatom a különbség, a dezoxiribóz 2-es szénatomjához oxigén helyett csak hidrogén kapcsolódik. A ribóz az RNS, a dezoxiribóz a DNS építőköve.',
                  'A hexózok (6 szénatomos cukrok) közé tartozik a glükóz (szőlőcukor) - a sejtek elsődleges, közvetlen energiaforrása, és a vérben is ilyen formában szállítódik a szénhidrát -, a fruktóz (gyümölcscukor) - a legédesebb ízű egyszerű cukor -, valamint a galaktóz.',
                ],
              },
              {
                heading: 'Diszacharidok',
                paragraphs: [
                  'A diszacharidok két monoszacharid kondenzációjával (vízkilépéssel) jönnek létre; a köztük kialakuló kötést glikozidos kötésnek nevezzük.',
                  'A maltóz (malátacukor) két glükózegységből épül fel - a keményítő bomlásakor keletkezik. A laktóz (tejcukor) galaktózból és glükózból, a szacharóz (répacukor, nádcukor) pedig glükózból és fruktózból épül fel - ez utóbbi a legfontosabb természetes édesítőszerünk.',
                ],
              },
              {
                heading: 'Poliszacharidok',
                paragraphs: [
                  'A poliszacharidok monoszacharidokból kondenzációval felépülő óriásmolekulák, amelyekben akár több ezer egyszerű cukoregység is kapcsolódhat egymáshoz. Általános képletük (C₆H₁₀O₅)ₙ.',
                  'A keményítő a növények tartalék szénhidrátja, amely a fotoszintézis eredményeként keletkezik. A glikogén ugyanezt a szerepet tölti be az állatoknál (és az embernél is) - jellemzően a májban és az izmokban raktározódik.',
                  'A cellulóz a növényi sejtfal fő szilárdító anyaga - a Földön előforduló biomassza tömegének nagy részét ez adja. Az emberi emésztőrendszer nem képes lebontani, mert hiányoznak a szükséges enzimek - ez adja a táplálkozási "rost" jelentőségét.',
                  'A kitin egy nitrogéntartalmú poliszacharid, amely az ízeltlábúak külső vázának (kutikulájának), valamint a gombák sejtfalának szilárdító anyaga.',
                ],
              },
              {
                heading: 'Kimutatás és lebontás a gyakorlatban',
                paragraphs: [
                  'A keményítő jóddal (Lugol-oldattal) mutatható ki: az apoláris jódmolekulák "beépülnek" a keményítő spirálisan feltekeredett szerkezetébe, ahonnan kiszorítják a vízmolekulákat - ebben az apoláris környezetben a jód jellegzetes kék-lila színt vesz fel. Melegítés hatására a hőmozgás miatt a jód kilép a spirálból, a szín elhalványodik, majd lehűléskor a szín visszatér.',
                  'A sokáig rágott kenyérhéj azért válik édessé, mert a nyál amiláz enzime elkezdi bontani a keményítőt - a folyamat végül maltózra, majd glükózra bontja azt, amelyek már édes ízűek. Ez a lebontás (hidrolízis) a maltóz kondenzációval történő képződésének (lásd az ábrát) pontos fordítottja.',
                ],
              },
            ],
            keyTerms: ['trióz', 'pentóz', 'hexóz', 'glükóz', 'fruktóz', 'ribóz', 'dezoxiribóz', 'diszacharid', 'glikozidos kötés', 'maltóz', 'keményítő', 'glikogén', 'cellulóz', 'kitin', 'Lugol-próba'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szénhidrátok kémiai osztályozását (funkciós csoport szerint), valamint a keményítő belső szerkezetét is részletesen ismerni kell.',
            diagramId: 'aldoz-ketoz',
            sections: [
              {
                heading: 'Aldózok és ketózok',
                paragraphs: [
                  'A monoszacharidok kémiailag polihidroxi-aldehidek vagy polihidroxi-ketonok - vagyis a több hidroxilcsoport mellett vagy egy aldehid-, vagy egy ketocsoportot tartalmaznak. Ez alapján két nagy csoportba sorolhatók.',
                  'Az aldózoknál a karbonilcsoport a lánc végén helyezkedik el (aldehidcsoportot alkotva) - ilyen például a glükóz. A ketózoknál a karbonilcsoport a lánc belsejében, jellemzően a második szénatomon található (ketocsoportot alkotva) - ilyen például a fruktóz.',
              ],
              },
              {
                heading: 'Redukáló és nem redukáló diszacharidok',
                paragraphs: [
                  'A diszacharidok aszerint is csoportosíthatók, hogy marad-e bennük szabad, ún. glikozidos -OH csoport. Ha igen, a molekula vizes oldatban képes felnyílni, és kialakulhat benne egy szabad aldehidcsoport - az ilyen diszacharidokat redukáló diszacharidoknak nevezzük (pl. a maltóz és a laktóz).',
                  'A szacharóz esetében mindkét monoszacharid a glikozidos -OH csoportjával vesz részt a kötésben, ezért nem marad szabad, felnyílni képes rész - ezt nem redukáló diszachariddá teszi.',
                ],
              },
              {
                heading: 'A keményítő belső szerkezete: amilóz és amilopektin',
                paragraphs: [
                  'A keményítő valójában két, szerkezetében eltérő poliszacharid keveréke. Az amilóz elágazás nélküli, spirálisan feltekeredett glükózlánc, amelyet hidrogénkötések stabilizálnak - ez teszi lehetővé, hogy a jódmolekulák beépüljenek a spirál belsejébe (lásd a Lugol-próbát).',
                  'Az amilopektin ezzel szemben erősen elágazó szerkezetű, és a keményítőszemcsék felszínén helyezkedik el. Ez a szerkezeti különbség magyarázza, hogy a keményítő hideg vízben nem, meleg vízben viszont részlegesen (kolloidálisan) oldódik.',
                ],
              },
            ],
            keyTerms: ['aldóz', 'ketóz', 'karbonilcsoport', 'glikozidos -OH csoport', 'redukáló diszacharid', 'amilopektin'],
          },
        },
      },
      {
        id: 'feherjek',
        title: 'Fehérjék',
        order: 5,
        isFree: false,
        estimatedMinutes: 24,
        diagramId: 'peptidkotes-kialakulasa',
        content: {
          kozep: {
            intro: 'A fehérjék az élő szervezetek egyik legsokoldalúbb molekulacsoportját alkotják - alig van olyan életfolyamat, amelyben ne vennének részt.',
            sections: [
              {
                heading: 'Szerkezet és denaturáció',
                paragraphs: [
                  'A fehérjék általános szerkezeti alapegysége a peptidlánc, amely aminosavakból épül fel - az aminosavak közötti kapcsolódást peptidkötésnek nevezzük, amely kondenzációval (vízkilépéssel) alakul ki.',
                  'A fehérjék térszerkezete hő, nehézfémsók vagy mechanikai hatás következtében megváltozhat (denaturálódhat) - ez a folyamat jellemzően visszafordíthatatlan. Ez figyelhető meg például a tojás vagy a hús sütésekor, amikor a fehérje megszilárdul és megváltozik a színe, állaga.',
                  'A denaturációt kísérletileg is be lehet mutatni: hő hatására, nehézfémsók (pl. ólom- vagy higanysók) hozzáadásával, vagy mechanikai hatásra (pl. tojásfehérje felverésével) is kicsapódnak a fehérjék.',
                ],
              },
              {
                heading: 'A fehérjék biológiai szerepe',
                paragraphs: [
                  'A fehérjék rendkívül sokféle biológiai szerepet töltenek be. Enzimekként katalizálják a kémiai reakciókat; összehúzékony fehérjerendszerekként (aktin, miozin) mozgást hoznak létre az izmokban; vázanyagként (pl. a kollagén) mechanikai tartást adnak a szöveteknek.',
                  'Receptorként ingereket érzékelnek (pl. a sejtfelszíni receptorok), szállítófehérjeként anyagokat mozgatnak (pl. a hemoglobin oxigént szállít), tartalék tápanyagként raktározódnak (pl. a tojásfehérje), antitestként a szervezet védekezésében vesznek részt.',
                  'Jelölő fehérjeként a sejtek egymás felismerésében segítenek, részt vesznek a véralvadásban (pl. a fibrinogén), és szabályozó fehérjeként is működnek - számos hormon (pl. az inzulin) maga is fehérje természetű.',
                ],
              },
              {
                heading: 'Eszenciális aminosavak',
                paragraphs: [
                  'Az eszenciális aminosavakat a szervezet nem képes előállítani, ezért ezeket kizárólag a táplálékkal vehetjük fel - hiányuk súlyos egészségügyi következményekkel (pl. növekedési zavarral) járhat.',
                ],
              },
            ],
            keyTerms: ['peptidlánc', 'peptidkötés', 'denaturáció', 'eszenciális aminosav', 'antitest'],
          },
          emeltExtra: {
            intro: 'Emelt szinten az aminosavak pontos szerkezetét és a fehérjék négy szerkezeti szintjét is ismerni kell.',
            sections: [
              {
                heading: 'Az aminosavak felépítése',
                paragraphs: [
                  'Minden aminosav közös váza egy központi szénatomból, egy amino-csoportból (-NH₂), egy karboxil-csoportból (-COOH) és egy hidrogénatomból áll - az aminosavakat egymástól az úgynevezett oldallánc (R-csoport) különbözteti meg, amely aminosavtípusonként eltérő.',
                  'Az oldalláncok közötti kölcsönhatások - hidrogénkötések, ionos kölcsönhatások, kéntartalmú aminosavak közötti diszulfidhidak, valamint a vízkerülő (hidrofób) oldalláncok egymáshoz rendeződése - alakítják ki a fehérje jellegzetes, egyedi térszerkezetét.',
                ],
              },
              {
                heading: 'A fehérjeszerkezet négy szintje',
                paragraphs: [
                  'Az elsődleges szerkezet a fehérjelánc aminosav-sorrendje, amelyet a peptidkötések tartanak össze.',
                  'A másodlagos szerkezet a lánc egyes szakaszainak jellegzetes, ismétlődő térbeli mintázata - a leggyakoribb formák a csavarodott hélix és a lapos, ráncolt redő, amelyeket a lánc gerince mentén kialakuló hidrogénkötések stabilizálnak.',
                  'A harmadlagos szerkezet a teljes lánc egyedi, térbeli feltekeredése, amelyet az oldalláncok közötti kölcsönhatások alakítanak ki.',
                  'A negyedleges szerkezet több, önállóan is feltekeredett fehérjelánc együttes elrendeződése egyetlen funkcionális egységgé - például a hemoglobin négy alegységből épül fel.',
                ],
              },
              {
                heading: 'Stresszfehérjék',
                paragraphs: [
                  'A stresszfehérjék (hősokkfehérjék) segítik a sejtet a károsodott fehérjék helyreállításában vagy lebontásában, így szerepet játszanak a sejt öngyógyító folyamataiban, különösen stresszhatások (pl. hőstressz) idején.',
                ],
              },
            ],
            keyTerms: ['oldallánc', 'diszulfidhíd', 'elsődleges szerkezet', 'másodlagos szerkezet', 'harmadlagos szerkezet', 'negyedleges szerkezet', 'stresszfehérje'],
          },
        },
      },
      {
        id: 'nukleinsavak-nukleotidok',
        title: 'Nukleinsavak, nukleotidok',
        order: 6,
        isFree: false,
        estimatedMinutes: 24,
        diagramId: 'nukleotid-felepitese',
        content: {
          kozep: {
            intro: 'A nukleinsavak hordozzák és adják tovább az élőlények genetikai információját - és ahogy eddig is láttuk, ez a molekulacsoport is szorosan kapcsolódik ahhoz, amit a korábbi fejezetekben már megismertünk.',
            sections: [
              {
                heading: 'A nukleotidok felépítése - a foszfor újabb szerepe',
                paragraphs: [
                  'A nukleotidok és a nukleinsavak közös, általános szerkezeti váza cukor-bázis-foszfát egységekből épül fel: egy cukormolekulához egy nitrogéntartalmú bázis és egy foszfátcsoport kapcsolódik.',
                  'A korábban megismert foszfor (P) itt is kulcsszerepet kap: a nukleotidláncban a foszfátcsoportok "kapcsolják össze" egymás után a cukor-bázis egységeket, kialakítva a lánc gerincét. Ugyanaz az elem, amely a csontok felépítésében is részt vesz, itt az örökítő anyag szerkezeti vázát adja.',
                  'Sok nukleotid egymáshoz kapcsolódva alkotja a nukleinsavláncot - a lánc "gerincét" a cukor- és foszfátegységek váltakozása adja, a bázisok pedig erről a gerincről állnak ki, mint egy létra fokai.',
                ],
              },
              {
                heading: 'DNS és RNS - két rokon, de eltérő szerepű molekula',
                paragraphs: [
                  'A DNS (dezoxiribonukleinsav) és az RNS (ribonukleinsav) abban különbözik, hogy melyik cukrot tartalmazzák: a DNS-ben dezoxiribóz, az RNS-ben ribóz található - ugyanaz a két pentóz cukor, amit korábban a Szénhidrátok fejezetben már megismertünk, itt egészen más szerepben, építőelemként tűnik fel.',
                  'A DNS szerkezetében rejlik az információhordozó, önmegkettőződő (örökítő) szerep - ez teszi lehetővé, hogy a genetikai információ sejtosztódáskor pontosan átadódjon az utódsejteknek. Az RNS ezzel szemben jellemzően a genetikai információ "felhasználásában" (pl. a fehérjeszintézisben) vesz részt - vagyis a DNS a "tervrajz", amit biztonságos helyen (a sejtmagban) őriznek, az RNS pedig a "munkapéldány", amit a fehérjegyártáshoz használnak fel.',
                ],
              },
              {
                heading: 'Fontos önálló nukleotidok: az ATP és az energiaátvitel',
                paragraphs: [
                  'Nem minden nukleotid épül be nukleinsavba: az ATP önálló nukleotidként a sejt "energiapénzeként" működik, a legtöbb energiaigényes folyamathoz ez szolgáltatja az energiát.',
                  'Érdemes összevetni ezt azzal, amit a Lipidek fejezetben a hosszú távú energiaraktározásról tanultunk: míg a zsír egy hosszú távú, "bankban tartott" energiatartalék, addig az ATP inkább a "készpénz" - azonnal felhasználható, de csak kis mennyiségben tárolható belőle a sejtben egyszerre. A szervezetnek ezért folyamatosan újra kell "termelnie" az ATP-t a zsírokban és szénhidrátokban tárolt energiából.',
                  'A NAD⁺ és a NADP⁺ szintén önálló nukleotidok, amelyek hidrogén- (és ezzel elektron-) szállítómolekulaként vesznek részt az anyagcsere-folyamatokban - ezekkel a molekulákkal a következő fejezetekben (fotoszintézis, sejtlégzés) még sokszor találkozunk majd.',
                ],
              },
              {
                heading: 'Hogyan kapcsolódik ez a fehérjékhez?',
                paragraphs: [
                  'A Fehérjék fejezetben megismertük, hogy a fehérjék aminosav-sorrendje határozza meg a szerkezetüket és funkciójukat - de honnan "tudja" a sejt, milyen sorrendben kell összeraknia az aminosavakat? A válasz a nukleinsavakban rejlik: a genetikai információ a DNS-ből az RNS-en keresztül jut el a fehérjeszintézishez. Ezt az információáramlást (DNS → RNS → fehérje) a genetika tárgyalja majd részletesen egy későbbi témakörben, de már itt érdemes megjegyezni az irányát: a nukleinsavak a "terv", a fehérjék pedig a terv alapján megvalósuló "termék".',
                ],
              },
            ],
            keyTerms: ['nukleotid', 'DNS', 'RNS', 'ATP'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a DNS örökítő szerepét bizonyító klasszikus kísérleteket, a bázisok pontos osztályozását és a bázispárosodás kémiai hátterét is ismerni kell.',
            diagramId: 'dns-bazisparositas',
            sections: [
              {
                heading: 'A DNS örökítő szerepét bizonyító kísérletek',
                paragraphs: [
                  'Sokáig vitatott volt, hogy a sejtmagban egyszerre jelen lévő DNS vagy a fehérjék hordozzák-e az örökítő információt - hiszen mindkét molekulatípus elég összetett ehhez. A kérdést végül gondosan megtervezett kísérletek döntötték el.',
                  'Griffith kísérletében két baktériumtörzset vizsgált: egy betegséget okozó, tokos törzset és egy ártalmatlan, tok nélküli törzset. Amikor elpusztított (hőkezelt) tokos baktériumokat kevert élő, ártalmatlan baktériumokkal, az utóbbiak egy része "átalakult" betegséget okozó törzsé - ez a jelenség a transzformáció. Griffith még nem tudta, mi az átalakulást okozó anyag, csak azt bizonyította, hogy létezik ilyen "transzformáló elv".',
                  'Avery és munkatársai folytatták a kutatást, és tisztított anyagokkal (külön fehérjével, külön DNS-sel) ismételték meg a kísérletet - kimutatták, hogy kizárólag a DNS képes kiváltani a transzformációt, a fehérje nem. Ez volt az első erős bizonyíték arra, hogy a DNS az örökítő anyag.',
                  'Hershey és Chase kísérlete radioaktívan jelölt bakteriofágok (baktériumot fertőző vírusok) segítségével erősítette meg ugyanezt: a fehérjeburkot és a DNS-t külön-külön radioaktív izotóppal jelölték meg, majd megfigyelték, hogy fertőzéskor csak a DNS jelölése jut be a baktériumsejtbe, a fehérjeburoké kívül marad - vagyis a fertőző, örökítő anyag valóban a DNS.',
                ],
              },
              {
                heading: 'A bázisok típusai és a Chargaff-szabály',
                paragraphs: [
                  'A nitrogéntartalmú bázisok két nagy csoportba sorolhatók: a purinok (adenin, guanin) kétgyűrűs, a pirimidinek (citozin, timin, illetve az RNS-ben a timint helyettesítő uracil) egygyűrűs vegyületek.',
                  'Chargaff megfigyelése szerint a DNS-ben az adenin mennyisége mindig megegyezik a timinével, a guaniné pedig a citozinéval - ez a szabályszerűség (Chargaff-szabály) arra utal, hogy ezek a bázisok mindig párban fordulnak elő, méghozzá úgy, hogy egy purin mindig egy pirimidinnel párosodik.',
                ],
              },
              {
                heading: 'Miért pont így párosodnak a bázisok?',
                paragraphs: [
                  'A bázispárosodás nem véletlenszerű, hanem két okra vezethető vissza. Egyrészt geometriai okra: mivel a purinok nagyobbak (kétgyűrűsek), mint a pirimidinek (egygyűrűsek), egy purin-pirimidin pár mindig ugyanakkora szélességű - ez teszi lehetővé, hogy a kettős lánc mindvégig egyenletes, "létraszerű" szerkezetet alkosson. Ha két purin párosodna, túl széles, ha két pirimidin, túl keskeny lenne az adott szakasz.',
                  'Másrészt kémiai okra: az adenin és a timin között két, a guanin és a citozin között három hidrogénkötés alakul ki - ugyanaz a kötéstípus, amit a Szervetlen molekulák fejezetben a víznél már megismertünk, csak itt a bázisok közötti, nem a vízmolekulák közötti kapcsolatot hozza létre. Mivel a guanin-citozin párban eggyel több hidrogénkötés van, a guanin-citozin gazdag DNS-szakaszok stabilabbak, nehezebben "nyílnak fel" - ennek biológiai jelentősége is van: például egyes hőkedvelő baktériumok DNS-ében magasabb a guanin-citozin arány, ami segít a molekulának ellenállni a magas hőmérsékletnek.',
                ],
              },
            ],
            keyTerms: ['transzformáció', 'Hershey-Chase kísérlet', 'purin', 'pirimidin', 'Chargaff-szabály'],
          },
        },
      },
      {
        id: 'felepites-lebontas-kapcsolata',
        title: 'Felépítés és lebontás kapcsolata',
        order: 7,
        isFree: false,
        estimatedMinutes: 20,
        content: {
          kozep: {
            intro: 'Eddig sok különálló molekuláról tanultunk - most itt az ideje, hogy összekössük ezeket, és megnézzük az általános elveket, amelyek az összes felépítő és lebontó folyamatot mozgatják.',
            sections: [
              {
                heading: 'Energia- és szénforrás szerinti csoportosítás',
                paragraphs: [
                  'Energiaforrás szerint fototróf (fényenergiát hasznosító) és kemotróf (kémiai energiát hasznosító) szervezeteket különböztetünk meg; szénforrás szerint autotróf (szervetlen szénforrást használó) és heterotróf (szerves szénforrásra szoruló) élőlényeket.',
                  'A növények tipikusan fotoautotrófok: fényenergiát használnak, és szervetlen szén-dioxidból építik fel szerves anyagaikat - erről a folyamatról (fotoszintézis) a következő fejezetben lesz szó részletesen. Az ember és a legtöbb állat ezzel szemben kemoheterotróf: kémiai energiát nyer a táplálékból, és szerves szénforrásra (vagyis már valaki más által előállított szerves anyagra) szorul.',
                  'Vannak azonban különleges szervezetek is: egyes talajbaktériumok kemoautotrófok - kémiai energiát (pl. ammónia vagy kén-hidrogén oxidációjából) nyernek, de a szénforrásuk mégis szervetlen (szén-dioxid), akárcsak a növényeké. Ez mutatja, hogy az energiaforrás és a szénforrás egymástól függetlenül is variálódhat egy adott élőlénynél.',
                ],
              },
              {
                heading: 'Kondenzáció és hidrolízis - egy visszatérő minta',
                paragraphs: [
                  'Ha visszagondolunk az eddig tanultakra, észrevehetünk egy ismétlődő mintázatot: a szénhidrátoknál láttuk, hogy két glükózból maltóz épül fel vízkilépéssel (kondenzáció), a fehérjéknél pedig azt, hogy két aminosav peptidkötéssel, szintén vízkilépéssel kapcsolódik össze. Ezek nem különálló esetek, hanem ugyanannak az egyetlen kémiai alapelvnek a megnyilvánulásai.',
                  'A kondenzáció során két kisebb molekula egy nagyobbá kapcsolódik össze, miközben egy vízmolekula szabadul fel. A hidrolízis ennek pontos fordítottja: egy nagyobb molekula víz felvételével bomlik kisebb egységekre - ilyen történt például akkor is, amikor a keményítő a nyál amiláz enzimének hatására maltózra, majd glükózra bomlott.',
                  'Az emésztés valójában nem más, mint hidrolízisek sorozata: a szénhidrátok poliszacharidokból monoszacharidokká, a fehérjék peptidláncokból aminosavakká, a zsírok trigliceridekből glicerinné és zsírsavakká bomlanak - mindhárom molekulacsoportnál ugyanaz a vízfelvételes bontási elv érvényesül, csak más-más enzimek (pl. amiláz, pepszin, lipáz) végzik el.',
                  'Ez az elv gyakorlatilag minden makromolekula (szénhidrátok, lipidek, fehérjék, nukleinsavak) felépítésére és lebontására igaz - érdemes ezt egy általános "sablonként" megjegyezni, nem soronként külön-külön megtanulni minden molekulacsoportnál.',
                ],
              },
              {
                heading: 'Endocitózis és exocitózis',
                paragraphs: [
                  'Míg a kondenzáció és a hidrolízis molekuláris szinten történő átalakulás, addig nagyobb anyagmennyiségek sejtbe, illetve sejtből történő mozgatására az endocitózis és az exocitózis szolgál. Mindkét folyamat a sejtmembrán hólyagocska-képződésén (vezikulázásán) alapul: endocitózisnál a sejtmembrán "beöblösödik" és körbezárja a bejuttatandó anyagot, exocitózisnál pedig egy belső hólyagocska összeolvad a sejtmembránnal, kijuttatva a tartalmát.',
                ],
              },
              {
                heading: 'Az energiaveszteség elve',
                paragraphs: [
                  'Alapvető fizikai törvényszerűség, hogy minden anyagátépítés energiaveszteséggel jár - ezért nincs 100%-osan hatékony biológiai folyamat, a felszabaduló energia egy része mindig hő formájában távozik.',
                  'Ez az oka annak is, hogy a Nukleinsavak fejezetben megismert ATP-t a sejtnek folyamatosan újra kell "termelnie": az energiaátalakítások sohasem veszteségmentesek, ezért a sejt állandóan pótolja az elhasznált energiapénzt a tápanyagokból felszabaduló energiából.',
                ],
              },
            ],
            keyTerms: ['fototróf', 'kemotróf', 'autotróf', 'heterotróf', 'hidrolízis', 'kondenzáció', 'exocitózis', 'fotoautotróf', 'kemoheterotróf', 'kemoautotróf'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a kozépszinten megismert csoportokat egy teljes rendszerbe kell tudni foglalni, és mélyebben kell érteni az energiaátalakítás hatásfokát, valamint a sejt anyagfelvételének finomabb mechanizmusait is.',
            sections: [
              {
                heading: 'A teljes anyagcsere-tipológia',
                paragraphs: [
                  'A középszinten megismert fotoautotróf, kemoautotróf és kemoheterotróf típusok mellett létezik egy negyedik, jóval ritkább kombináció is: a fotoheterotróf szervezetek (néhány különleges baktériumcsoport) fényenergiát hasznosítanak, de szerves szénforrásra szorulnak.',
                  'Érdemes ezt a négy típust egy táblázatként elképzelni, ahol az egyik tengelyen az energiaforrás (fény vagy kémiai energia), a másikon a szénforrás (szervetlen vagy szerves) szerepel - a négy mező adja ki a négy típust. A természetben a fotoautotróf (pl. növények) és a kemoheterotróf (pl. állatok) a leggyakoribb, a kemoautotróf ritkább, de fontos szerepű (pl. a nitrogénkörforgásban), a fotoheterotróf pedig kifejezetten ritka.',
                ],
              },
              {
                heading: 'Az energiaátalakítás hatásfoka',
                paragraphs: [
                  'A korábban megismert energiaveszteség-elv mögött a termodinamika alaptörvényei állnak: az energia nem vész el, csak átalakul, de minden átalakuláskor egy része hő formájában, felhasználhatatlanul távozik a rendszerből.',
                  'A biológiai oxidáció hatásfoka - vagyis hogy a tápanyagokban tárolt energia hány százaléka alakul át ténylegesen felhasználható ATP-vé - hozzávetőlegesen 40% körüli; a fennmaradó rész hőként távozik. Ez a "veszteség" azonban nem tisztán negatív: az emlősöknél és madaraknál éppen ez a hőtermelés tartja fenn az állandó testhőmérsékletet, vagyis amit az egyik szempontból "hatékonyságvesztésnek" tekintünk, az egy másik szempontból (hőszabályozás) hasznos melléktermék.',
                  'Ez a szemlélet magyarázza azt is, hogy a táplálékláncokban miért csökken jelentősen (kb. tizedére) az átadható energia mennyisége minden egyes trófikus szint között: a termelők által megkötött energia nagy része már a termelők saját anyagcseréjében hő formájában elvész, mielőtt egyáltalán a fogyasztókhoz jutna.',
                ],
              },
              {
                heading: 'Receptor-mediált endocitózis - egy finomabb felvételi mechanizmus',
                paragraphs: [
                  'Az endocitózisnak létezik egy célzottabb formája is: a receptor-mediált endocitózis során a sejtmembrán felszínén lévő specifikus receptorfehérjék ismernek fel és kötnek meg egy adott anyagot, mielőtt a membrán körbezárná és a sejtbe juttatná azt.',
                  'Ez pontosan az a mechanizmus, amellyel a Lipidek fejezetben megismert lipoproteinek (pl. az LDL, "rossz koleszterin" hordozó részecske) bejutnak a sejtekbe: a sejtfelszíni LDL-receptorok felismerik a lipoprotein fehérjeburkát, majd a sejt receptor-mediált endocitózissal veszi fel a teljes részecskét, benne a koleszterinnel. Ez szemlélteti, hogy az endocitózis nem "vaktában" történő anyagfelvétel, hanem a sejt nagyon is szelektíven tudja szabályozni, mit enged be.',
                ],
              },
            ],
            keyTerms: ['fotoheterotróf', 'receptor-mediált endocitózis'],
          },
        },
      },
      {
        id: 'fotoszintezis',
        title: 'Felépítő folyamatok: a fotoszintézis',
        order: 8,
        isFree: false,
        estimatedMinutes: 26,
        diagramId: 'fotoszintezis-folyamatabra',
        content: {
          kozep: {
            intro: 'A fotoszintézis a legfontosabb felépítő (asszimilációs) folyamat, amely a földi élet energiaellátásának alapja - ez a témakör kiemelten fontos, ezért érdemes minden részletét alaposan végiggondolni.',
            sections: [
              {
                heading: 'Hely és jelentőség',
                paragraphs: [
                  'A fotoszintézis a növények, algák és egyes baktériumok színtestjeiben (kloroplasztiszaiban) zajlik.',
                  'A folyamat kettős jelentőségű: egyrészt ez a bioszféra elsődleges energiaforrása (szinte minden táplálékhálózat ezen a felépítő folyamaton alapul), másrészt ez tartja fenn a légkör oxigénkészletét is.',
                ],
              },
              {
                heading: 'A kloroplasztisz felépítése',
                paragraphs: [
                  'A kloroplasztiszt kettős membrán határolja. Belsejében található a tilakoidrendszer: lapos, membránnal határolt zsákocskák (tilakoidok), amelyek gyakran egymásra rendeződve gránumokat alkotnak. A tilakoidmembránban helyezkednek el a fotoszintetikus színanyagok - itt zajlik a fényszakasz.',
                  'A tilakoidokat körülvevő folyékony állományt sztrómának nevezzük - itt zajlik a sötétszakasz. Ez a térbeli elkülönülés (fényszakasz a tilakoidmembránban, sötétszakasz a sztrómában) nem véletlen: mindkét szakasz más-más típusú reakciókörülményeket igényel.',
                ],
              },
              {
                heading: 'Fényszakasz',
                paragraphs: [
                  'A fényszakasz a tilakoidmembránban zajlik. A fényenergia hatására a víz molekulái elbomlanak (ezt a folyamatot fotolízisnek nevezzük): a vízből molekuláris oxigén (O₂) szabadul fel - ez a folyamat felelős a légkör oxigénjének nagy részéért -, a hidrogén pedig egy szállítómolekulára (NADP⁺-ra) kerül, amiből így NADPH keletkezik.',
                  'A fényenergia hatására emellett ATP is képződik - ezt a folyamatot fotofoszforilációnak nevezzük, mivel fényenergia hajtja a foszforilációt (az ATP előállítását).',
                  'A fényszakasz végterméke tehát kétféle "csomagolt energia": az ATP és a NADPH - mindkettőt a sötétszakasz használja fel.',
                ],
              },
              {
                heading: 'Sötétszakasz',
                paragraphs: [
                  'A sötétszakasz a sztrómában zajlik, és - a nevével ellentétben - nem feltétlenül sötétben megy végbe, csak nincs közvetlen fényigénye, mert a fényszakaszból kapja a szükséges ATP-t és NADPH-t.',
                  'A sötétszakasz reakciósorozatát Calvin-ciklusnak nevezzük, és - mivel ez egy kiemelten fontos, gyakran számonkért folyamat - érdemes megjegyezni a legfontosabb résztvevő anyagait is, nem csak a folyamat lényegét. A belépő szén-dioxid egy már meglévő, öt szénatomos molekulához, a ribulóz-1,5-biszfoszfáthoz (RuBP) kötődik, ezt a lépést a RuBiSCO nevű enzim katalizálja - ez egyébként a Föld legnagyobb mennyiségben előforduló fehérjéje.',
                  'A szén-dioxid megkötése után elsőként egy háromszénatomos vegyület, a 3-foszfoglicerát (PGA) keletkezik. Ez az ATP és a NADPH energiájával (a fényszakasz "termékeivel") glicerinaldehid-3-foszfáttá (G3P) alakul - ennek egy része glükózzá, majd más szerves vegyületekké (pl. keményítővé) épül tovább, másik, nagyobb része pedig felhasználódik a kiindulási molekula, a RuBP újratermelésére, hogy a ciklus folytatódhasson.',
                  'A fotoszintézis egyszerűsített összegegyenlete: 6 szén-dioxid és 6 víz fényenergia jelenlétében 1 glükózzá és 6 oxigénné alakul (lásd az ábrát).',
                ],
              },
              {
                heading: 'Fotoszintetikus színanyagok és a fényelnyelés',
                paragraphs: [
                  'A fotoszintetikus színanyagok két fő típusa a klorofillok és a karotinoidok. A klorofill-a a fő színanyag, amely elsősorban a kék (kb. 430 nm hullámhosszú) és a vörös (kb. 662 nm hullámhosszú) fényt nyeli el a leghatékonyabban. A klorofill-b hasonló, de kissé eltérő elnyelési tartománnyal rendelkezik (kb. 453 nm a kék, kb. 642 nm a vörös tartományban), és kiegészítő színanyagként a klorofill-a által kevésbé hatékonyan elnyelt hullámhosszakon is gyűjt fényenergiát, amit aztán átad a klorofill-a-nak.',
                  'A zöld hullámhossz-tartományt (kb. 500-565 nm) egyik klorofill-forma sem nyeli el hatékonyan, hanem visszaveri - ez magyarázza, hogy a növények zöldnek látszanak: azt a színt látjuk, amit a levél NEM használt fel, hanem visszavert.',
                  'A karotinoidok (pl. a karotin) a kék-zöld tartományban (kb. 450-500 nm) nyelik el hatékonyan a fényt - pontosan abban a tartományban, ahol a klorofillok kevésbé hatékonyak -, így kiegészítik a klorofillok fényelnyelését, és emellett védik is a növényt a túl erős fény károsító hatásától.',
                ],
              },
              {
                heading: 'A fotoszintézis sebességét befolyásoló tényezők',
                paragraphs: [
                  'A fotoszintézis sebességét több környezeti tényező is korlátozhatja (limitálhatja): a fény intenzitása (alacsony fényerősségnél ez a korlátozó tényező), a szén-dioxid koncentrációja (mivel ez a sötétszakasz nyersanyaga), és a hőmérséklet (mivel a sötétszakasz reakcióit enzimek katalizálják, amelyeknek optimális hőmérséklet-tartományuk van).',
                  'Mindig az a tényező szabja meg ténylegesen a folyamat sebességét, amelyik a legkevésbé van jelen a szükséges mennyiséghez képest - ezt nevezzük a minimum-elvnek, amellyel részletesebben az ökológiai témakörnél találkozunk majd.',
                ],
              },
            ],
            keyTerms: ['fotoszintézis', 'fényszakasz', 'sötétszakasz', 'fotolízis', 'NADPH', 'Calvin-ciklus', 'RuBP', 'RuBiSCO', '3-foszfoglicerát', 'G3P', 'klorofill-a', 'klorofill-b'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a fényszakasz molekuláris lépéseit - a fotorendszereket, az elektronszállító láncot és az ATP keletkezésének kemiozmózis-mechanizmusát - is részletesen ismerni kell.',
            sections: [
              {
                heading: 'Fotorendszer II és a vízbontás',
                paragraphs: [
                  'A tilakoidmembránban két, egymástól elkülönülő fotorendszer működik együtt, amelyeket felfedezésük sorrendje alapján neveztek el (nem működési sorrendjük szerint). A folyamat a fotorendszer II-nél kezdődik: az itt található klorofill-a molekulák elnyelik a fényenergiát, aminek hatására egy elektron gerjesztett (magasabb energiájú) állapotba kerül, és elhagyja a fotorendszert.',
                  'A fotorendszer II az elveszített elektront a víz bontásából (fotolízis) pótolja - ez a lépés termeli a fotoszintézis során felszabaduló oxigént.',
                ],
              },
              {
                heading: 'Az elektronszállító lánc és a protongrádiens',
                paragraphs: [
                  'A fotorendszer II-től elszabadult, magas energiájú elektron egy elektronszállító láncon halad végig a tilakoidmembránban. Az elektron energiájának egy részét a lánc arra használja fel, hogy hidrogénionokat (protonokat) pumpáljon a tilakoid belsejébe (lumenébe) - így egy koncentráció-különbség (protongrádiens) alakul ki a tilakoidmembrán két oldala között.',
                  'A lánc végén az elektron a fotorendszer I-be jut, ahol egy újabb fényelnyelés újra megemeli az energiaszintjét, majd végül a NADP⁺ redukálására használódik fel, aminek eredményeként NADPH keletkezik.',
                ],
              },
              {
                heading: 'Kemiozmózis: hogyan keletkezik pontosan az ATP?',
                paragraphs: [
                  'A kialakult protongrádiens "kiegyenlítődése" hajtja meg az ATP termelését: a protonok egy speciális enzimen, az ATP-szintázon keresztül áramlanak vissza a tilakoid lumenéből a sztróma felé, és ez az áramlás biztosítja az ATP előállításához szükséges energiát. Ezt a mechanizmust kemiozmózisnak nevezzük.',
                  'Érdemes megjegyezni, hogy ugyanez az alapelv - elektronszállító lánc által létrehozott protongrádiens, amelyet egy ATP-szintáz enzim "használ ki" - a sejtlégzés végoxidációjában is megjelenik, csak ott a mitokondrium belső membránjában. A fotoszintézis és a sejtlégzés tehát, bár ellentétes irányú folyamatok, hasonló molekuláris "trükköt" alkalmaznak az ATP előállítására.',
                ],
              },
              {
                heading: 'Egy érdekesség: a C4-es fotoszintézis',
                paragraphs: [
                  'Egyes növények (pl. a kukorica) a Calvin-cikluson kívül egy kiegészítő szén-dioxid-megkötő lépést is alkalmaznak, amivel hatékonyabban tudnak fotoszintetizálni meleg, száraz körülmények között - ezt C4-es fotoszintézisnek nevezik. Ez a téma már túlmutat az érettségi követelményén, de érdemes tudni, hogy a fotoszintézis "alapmodellje", amit ebben a fejezetben tanultunk, nem az egyetlen létező változat a növényvilágban.',
                ],
              },
            ],
            keyTerms: ['fotorendszer', 'elektronszállító lánc', 'kemiozmózis', 'ATP-szintáz'],
          },
        },
      },
      {
        id: 'lebonto-folyamatok',
        title: 'Lebontó folyamatok',
        order: 9,
        isFree: false,
        estimatedMinutes: 26,
        diagramId: 'sejtlegzes-folyamatabra',
        content: {
          kozep: {
            intro: 'A lebontó (disszimilációs) folyamatok során a szerves molekulák lebontásával energia szabadul fel, amelyet a sejt ATP formájában tárol - ez a sejtlégzés lényege, és a fotoszintézishez hasonlóan ez is egy kiemelten fontos, gyakran számonkért témakör.',
            sections: [
              {
                heading: 'Glikolízis',
                paragraphs: [
                  'A glikolízis a sejt citoplazmájában zajló, oxigént nem igénylő lebontási folyamat. Egyetlen, hatszénatomos glükózmolekulából két, háromszénatomos piruvátmolekula keletkezik.',
                  'A folyamat során nettó 2 ATP szabadul fel (bár a lépések során összesen 4 ATP is képződik, ebből 2-t a sejt maga használ fel a folyamat beindításához, ezért a nettó nyereség csak 2). Emellett hidrogén is átkerül egy szállítómolekulára (NAD⁺-ra), aminek eredményeként NADH keletkezik - ezt a molekulát a következő lépések már felhasználják.',
                ],
              },
              {
                heading: 'Biológiai oxidáció és erjedés',
                paragraphs: [
                  'A glikolízis után a sejt "választás előtt áll": ha van elegendő oxigén, a piruvát a mitokondriumba jut, és biológiai oxidáción megy keresztül - ez oxigént igényel, és lényegesen több ATP-t termel (glükózonként összesen mintegy 30 vagy annál is több ATP-t).',
                  'Ha nincs elegendő oxigén, a sejt erjedéssel próbálja "kezelni" a glikolízis végtermékét - ez oxigén nélkül, a citoplazmában zajlik, és csak a glikolízis már megtermelt 2 ATP-jét "hasznosítja", további energiát nem nyer.',
                  'Az erjedésnek fontos szerepe van: a glikolízis működéséhez folyamatosan "szabad" (oxidált) NAD⁺-ra van szükség, hogy a hidrogént fel tudja venni. Ha nincs oxigén, a NADH nem tudja leadni a hidrogénjét a végoxidációban, és "elfogyna" a szabad NAD⁺ készlet, ami leállítaná a glikolízist is. Az erjedés lépése éppen ezt oldja meg: a piruvátra (vagy annak származékára) adja vissza a NADH hidrogénjét, így regenerálva a NAD⁺-ot, hogy a glikolízis folytatódhasson - ez az igazi "értelme" az erjedésnek, nem az energiatermelés.',
                  'Erjedés akkor zajlik, ha a sejt oxigénhez nem jut hozzá - például erős izommunka közben tejsavas erjedés indul be az izomsejtekben (ilyenkor keletkezik a tejsav, ami az izomfáradtság érzetét is okozhatja), míg az élesztőgombák alkoholos erjedéssel bontják a cukrot etil-alkohollá és szén-dioxiddá.',
                ],
              },
              {
                heading: 'Végoxidáció',
                paragraphs: [
                  'A végső oxidáció során a szállítómolekulákhoz (NADH-hoz és a citromsavciklusból érkező hasonló molekulákhoz) kötött hidrogén molekuláris oxigénnel egyesül, aminek eredményeként víz és ATP keletkezik - ez a lépés a mitokondrium belső membránján zajlik, és itt keletkezik a glükóz lebontása során felszabaduló energia nagy része.',
                  'Ez a mechanizmus - membránon átívelő elektronszállítás, amely energiát szabadít fel az ATP előállításához - hasonló elven működik, mint amit a fotoszintézis fényszakaszánál tanultunk, csak itt a mitokondrium belső membránjában zajlik.',
                ],
              },
            ],
            keyTerms: ['glikolízis', 'piruvát', 'NADH', 'biológiai oxidáció', 'erjedés', 'tejsavas erjedés', 'alkoholos erjedés', 'végoxidáció'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a piruvát mitokondriumba jutása utáni lépéseket, a citromsavciklus kulcsmolekuláit és a terminális oxidáció (légzési lánc) működését is ismerni kell - a teljes lépéssor memorizálása helyett elég a folyamatot meghatározó, "anchor" molekulákra fókuszálni.',
            sections: [
              {
                heading: 'A piruvát belépése: az acetil-KoA képződése',
                paragraphs: [
                  'A glikolízisből érkező piruvát a mitokondriumba jutva egy szén-dioxid-molekulát veszít (ezt dekarboxileződésnek nevezzük), és egy szállítómolekulához, a koenzim-A-hoz kapcsolódva acetil-KoA-vá alakul. Ez a lépés köti össze a glikolízist a citromsavciklussal - az acetil-KoA a citromsavciklus "belépőjegye".',
                ],
              },
              {
                heading: 'A citromsavciklus kulcsmolekulái',
                paragraphs: [
                  'A citromsavciklus egy négyszénatomos molekulával, az oxálecetsavval indul, amely egyesül a belépő acetil-KoA-val, és így jön létre a ciklust elindító hatszénatomos molekula, a citromsav (innen a folyamat neve).',
                  'A ciklus további lépései során a citromsav fokozatosan visszaalakul oxálecetsavvá - eközben két szén-dioxid-molekula szabadul fel (ezzel "adja vissza" azt a két szénatomot, amit az acetil-KoA hozott be), és a felszabaduló hidrogén szállítómolekulákra (NADH-ra és FADH₂-ra) kerül.',
                  'A regenerálódott oxálecetsav ezután újra felveheti a következő acetil-KoA-t, így a ciklus folyamatosan ismétlődhet - éppen ezért nem "fogy el" az oxálecetsav, hanem állandóan újratermelődik, amíg van elegendő acetil-KoA utánpótlás.',
                ],
              },
              {
                heading: 'Terminális oxidáció (légzési lánc)',
                paragraphs: [
                  'A citromsavciklusban (és korábban a glikolízisben) keletkező NADH és FADH₂ hidrogénjét a terminális oxidáció - más néven légzési lánc - használja fel: ez a mitokondrium belső membránjában található elektronszállító lánc, amely ugyanazon az elven működik, mint amit a fotoszintézis fényszakaszánál már megismertünk.',
                  'A légzési lánc egyik legfontosabb fehérjecsaládja a citokrómok csoportja - ezek olyan fehérjék, amelyek egy vasat (Fe) tartalmazó hem-csoportot hordoznak, hasonlót ahhoz, amit a hemoglobinnál is megismertünk. Az elektronszállítás során a citokrómokban lévő vasion Fe³⁺ és Fe²⁺ állapot között váltakozik: amikor a vasion elfogad egy elektront, Fe³⁺-ból Fe²⁺-má redukálódik, amikor pedig továbbadja azt a következő citokrómnak, Fe²⁺-ból Fe³⁺-má oxidálódik. Ez az ismétlődő oxidáció-redukció (redoxi) ciklus mozgatja végig az elektronokat a láncon.',
                  'A hidrogénből leváló elektronok a láncon végighaladva protonokat pumpálnak a mitokondrium két membránja közötti térbe, létrehozva egy protongrádienst. Ennek kiegyenlítődése az ATP-szintáz enzimen keresztül (kemiozmózis) hajtja az ATP nagy részének termelését. A lánc végén az elektron és a hidrogénion oxigénnel egyesül, víz keletkezik - ez az oxigén "végső rendeltetése" a sejtlégzésben.',
                ],
              },
              {
                heading: 'Az aminosavak lebontásának bekapcsolódása',
                paragraphs: [
                  'Az aminosavak lebomlásakor a nitrogéntartalmú rész ammónia, illetve karbamid formájában kiválasztódik, a megmaradó szénváz pedig - az aminosav típusától függően - a citromsavciklus különböző pontjain kapcsolódhat be az energiatermelésbe. Ez magyarázza, hogy szükség esetén (pl. hosszan tartó éhezéskor) a szervezet a fehérjéket is képes energiaforrásként hasznosítani, nem csak a szénhidrátokat és a zsírokat.',
                ],
              },
            ],
            keyTerms: ['acetil-KoA', 'oxálecetsav', 'citromsav', 'FADH₂', 'terminális oxidáció', 'légzési lánc', 'citokróm'],
          },
        },
      },
      {
        id: 'elhatarolas',
        title: 'Membránok szerepe',
        order: 10,
        isFree: false,
        estimatedMinutes: 22,
        diagramId: 'passziv-aktiv-szallitas',
        comparisonTable: {
          headers: ['Szempont', 'Passzív szállítás', 'Aktív szállítás'],
          rows: [
            ['Energiaigény', 'nincs', 'van (ATP)'],
            ['Irány', 'nagyobb → kisebb koncentráció felé', 'kisebb → nagyobb koncentráció felé'],
            ['Példa', 'diffúzió, ozmózis', 'Na-K pumpa'],
          ],
        },
        content: {
          kozep: {
            intro: 'A sejtet határoló biológiai hártyák (membránok) nélkülözhetetlenek a sejt életének fenntartásához - ezek szabályozzák, mi juthat be és ki a sejtből, és ahogy a Lipidek fejezetben már láttuk, szerkezetük szorosan összefügg ezzel a funkcióval.',
            sections: [
              {
                heading: 'A membrán felépítése és funkciói',
                paragraphs: [
                  'A Lipidek fejezetben megismertük, hogy a foszfatidok kettős természete (poláris fej, apoláris "farok") teszi lehetővé, hogy vizes közegben kettősréteget alkossanak - ez adja a sejtmembrán alapszerkezetét. A membránban emellett fehérjék is találhatók, amelyek csatornákat, szállítókat, receptorokat és jelfelismerő struktúrákat alkotnak.',
                  'A biológiai hártyák szerepe sokrétű: anyagforgalom (mi juthat be és ki a sejtből), határolás (a sejt belső terének elkülönítése a külvilágtól), összekötés (szomszédos sejtek kapcsolódása), jelölés (a sejt "azonosítása" mások számára) és jelfogás (ingerek érzékelése).',
                  'A membránfehérjék közül a csatornafehérjék pórust alkotnak, amelyen keresztül meghatározott ionok vagy kisebb molekulák áramolhatnak át; a szállítófehérjék (transzporterek) az anyaghoz kötődve, alakváltozással juttatják azt a membrán túloldalára; a receptorfehérjék pedig külső jelmolekulákat (pl. hormonokat) ismernek fel, és ennek hatására indítanak el egy sejten belüli választ.',
                  'A membrán felszínén található, sejtenként jellegzetes szénhidrátláncok (amelyek fehérjékhez vagy lipidekhez kapcsolódnak) teszik lehetővé, hogy a sejtek felismerjék egymást - ez a "jelölő" funkció alapja, és fontos szerepet játszik például az immunrendszer működésében is, amikor a szervezet megkülönbözteti a saját sejtjeit az idegenektől.',
                ],
              },
              {
                heading: 'Passzív és aktív szállítás',
                paragraphs: [
                  'A passzív szállítás energiabefektetés nélkül, koncentráció-különbség mentén zajlik - ilyen a diffúzió és az ozmózis, amelyeket a Szervetlen molekulák fejezetben már megismertünk. A kisebb, apoláris molekulák (pl. oxigén, szén-dioxid) közvetlenül át tudnak diffundálni a membrán lipidrétegén, a poláris molekulák és ionok azonban csak csatornafehérjéken vagy szállítófehérjéken keresztül tudnak átjutni - ezt nevezzük megkönnyített diffúziónak.',
                  'Az aktív szállítás ezzel szemben energiát igényel, mivel a koncentráció-különbséggel szemben történik - ilyen például a korábban (Elemek, ionok fejezet) megismert Na⁺/K⁺-pumpa működése, amely ATP felhasználásával tartja fenn a nátrium és a kálium ellentétes irányú koncentráció-különbségét a sejtmembrán két oldalán.',
                  'Fontos megjegyezni, hogy az aktív szállítás nem mindig közvetlenül ATP-t használ fel: létezik ún. másodlagos aktív szállítás is, amikor egy anyag szállítása egy másik ion (jellemzően a nátrium) koncentráció-grádiensének "kihasználásával" történik - ehhez az energiát végső soron szintén a Na⁺/K⁺-pumpa munkája biztosítja, csak közvetett módon.',
                ],
              },
              {
                heading: 'Endocitózis és exocitózis',
                paragraphs: [
                  'Nagyobb anyagmennyiségek szállítására a sejt endocitózist és exocitózist alkalmaz - mindkét folyamat a sejtmembrán hólyagocska-képződésén (vezikulázásán) alapul, ahogy azt a Felépítés és lebontás kapcsolata fejezetben már érintettük.',
                  'Endocitózissal nagyobb anyagmennyiségek juttathatók a sejtbe (a membrán "beöblösödik" és körbezárja a bejuttatandó anyagot), exocitózissal pedig a sejtből (egy belső hólyagocska összeolvad a sejtmembránnal, kijuttatva a tartalmát).',
                ],
              },
            ],
            keyTerms: ['membrán', 'passzív szállítás', 'aktív szállítás', 'endocitózis', 'csatornafehérje', 'receptorfehérje', 'megkönnyített diffúzió', 'másodlagos aktív szállítás'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szállítás pontos hajtóerőit, a csatornafehérjék működési elvét és egy különösen érdekes, specializált membránfehérje-típust, az akvaporinokat is meg kell ismerni.',
            sections: [
              {
                heading: 'Elektrokémiai grádiens - két hajtóerő együtt',
                paragraphs: [
                  'Az ionok mozgását a membránon át nem csak a koncentráció-különbség hajtja, hanem az elektromos potenciálkülönbség is - a kettő együttesét elektrokémiai grádiensnek nevezzük. Ez azért fontos, mert egy ion mozgásának iránya nem mindig egyezik meg azzal, amit a koncentráció-különbség önmagában sugallna - egy pozitív töltésű iont a negatív belső membránpotenciál akkor is "befelé húzhat", ha a koncentrációja már magasabb a sejt belsejében.',
                  'Ez a jelenség áll a korábban (Elemek, ionok fejezet) megismert nyugalmi membránpotenciál hátterében is: a Na⁺/K⁺-pumpa és az ioncsatornák együttes működése alakítja ki azt az elektrokémiai egyensúlyt, amely az idegsejtek ingerületvezetésének alapja.',
                ],
              },
              {
                heading: 'A csatornafehérjék "kapui"',
                paragraphs: [
                  'A csatornafehérjék nem folyamatosan nyitottak, hanem szabályozottan nyílnak és záródnak - ezt a tulajdonságukat "kapuzásnak" (gating) nevezzük. A feszültségfüggő csatornák a membránpotenciál megváltozására nyílnak ki - ez a mechanizmus áll az idegi ingerület (akciós potenciál) terjedésének hátterében. A ligandfüggő csatornák ezzel szemben egy adott jelmolekula (ligand, pl. egy neurotranszmitter) megkötődésére nyílnak meg.',
                  'Ez a kétféle szabályozási mód magyarázza, hogy a sejt miért képes rendkívül pontosan és gyorsan reagálni a különböző típusú ingerekre: a feszültségfüggő csatornák az elektromos jelekre, a ligandfüggő csatornák a kémiai jelekre specializálódtak.',
                ],
              },
              {
                heading: 'Akvaporinok - specializált víz-csatornák',
                paragraphs: [
                  'Bár a víz kis mérete miatt lassan, közvetlenül is át tud diffundálni a membrán lipidrétegén, sok sejtben (pl. a vese csatornáinak sejtjeiben) szükség van ennél sokkal gyorsabb vízszállításra. Erre szolgálnak az akvaporinok: kifejezetten víz szállítására specializálódott csatornafehérjék, amelyek a víz-molekulákat úgy engedik át magukon, hogy közben kiszűrik az egyéb oldott anyagokat és ionokat.',
                  'Az akvaporinok jó példát adnak arra, hogy a passzív szállítás (hiszen a víz itt is csak a koncentráció-különbség, vagyis az ozmózis mentén mozog) hogyan válhat mégis "célzottá" és rendkívül hatékonnyá egy specializált fehérje közreműködésével - anélkül, hogy ehhez energia befektetésére lenne szükség.',
                ],
              },
            ],
            keyTerms: ['elektrokémiai grádiens', 'feszültségfüggő csatorna', 'ligandfüggő csatorna', 'akvaporin'],
          },
        },
      },
      {
        id: 'sejt-anyagcsere',
        title: 'Anyagcsere (sejtszinten)',
        order: 11,
        isFree: false,
        estimatedMinutes: 18,
        content: {
          kozep: {
            intro: 'A sejt egyes sejtalkotói (organellumai) meghatározott anyagcsere-funkciókat látnak el - ez a fejezet arról szól, melyik sejtalkotó miért felelős, a mögöttük álló folyamatok részletei pedig már megvannak a korábbi fejezetekben.',
            sections: [
              {
                heading: 'Az endoplazmatikus hálózat',
                paragraphs: [
                  'A sejt belső hártyarendszere (endoplazmatikus hálózat) számos funkciót lát el: fehérjék és lipidek szintézisét, valamint anyagok szállítását a sejten belül. A hálózat két típusa - a riboszómákkal borított durva, illetve a riboszómamentes sima felszínű endoplazmatikus hálózat - feladata is eltérő: a durva elsősorban fehérjeszintézisben, a sima elsősorban lipidszintézisben és méregtelenítésben vesz részt.',
                ],
              },
              {
                heading: 'A mitokondrium és a színtest - két ellentétes irányú "erőmű"',
                paragraphs: [
                  'A mitokondrium a biológiai oxidáció, a színtest a fotoszintézis helyszíne - ez a két folyamat ellentétes irányú: a fotoszintézis szervetlen anyagokból épít fel szerves anyagot fényenergia felhasználásával, a biológiai oxidáció pedig szerves anyagokat bont le, hogy energiát (ATP-t) nyerjen belőlük.',
                  'A fotoszintézis lépéseit (fényszakasz, sötétszakasz, Calvin-ciklus) a Fotoszintézis fejezet tárgyalja részletesen, a biológiai oxidáció lépéseit (glikolízis, citromsavciklus, terminális oxidáció) pedig a Lebontó folyamatok fejezet - érdemes ezt a két fejezetet együtt átismételni, amikor a mitokondrium és a színtest szerepét tanuljuk, hiszen ugyanazoknak a folyamatoknak csak a "helyszínét" nézzük itt.',
                ],
              },
              {
                heading: 'A lizoszóma',
                paragraphs: [
                  'A lizoszóma a sejtbe bejutó, illetve a belső felesleges anyagok lebontását végzi emésztőenzimei segítségével - ezek az enzimek jellemzően savas környezetben (a lizoszóma belsejében) aktívak, ami megvédi a sejt többi részét attól, hogy a lizoszóma esetleges sérülése esetén az enzimek kárt tegyenek benne.',
                  'A lizoszómák fontos szerepet játszanak a sejt "önfelújításában" is: elhasználódott, károsodott sejtalkotókat is képesek lebontani, amelyek építőelemeit a sejt aztán újra felhasználhatja - ez a folyamat különösen fontos hosszú élettartamú sejteknél (pl. idegsejteknél), amelyek nem tudnak egyszerűen "kicserélődni" osztódással.',
                ],
              },
            ],
            keyTerms: ['endoplazmatikus hálózat', 'mitokondrium', 'lizoszóma'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a mitokondriumban zajló folyamatok szerkezet-működés kapcsolatát is ismerni kell.',
            sections: [
              {
                heading: 'A mitokondrium szerkezete és működése',
                paragraphs: [
                  'A mitokondriumban folyó citromsavciklus, illetve a végoxidáció szorosan összefügg a mitokondrium belső, redőzött szerkezetével (kristák), amely nagy felületet biztosít a folyamatokhoz.',
                  'A glikolízis a sejt citoplazmájában, az erjedés szintén a citoplazmában zajlik.',
                ],
              },
            ],
            keyTerms: ['kristák'],
          },
        },
      },
      {
        id: 'sejtosztodas',
        title: 'Osztódás',
        order: 12,
        isFree: false,
        estimatedMinutes: 30,
        diagramId: 'mitozis-meiozis',
        comparisonTable: {
          headers: ['Szempont', 'Mitózis', 'Meiózis'],
          rows: [
            ['Osztódások száma', '1', '2'],
            ['Keletkező sejtek száma', '2', '4'],
            ['Kromoszómaszám', 'változatlan (pl. 46 → 46)', 'megfeleződik (pl. 46 → 23)'],
            ['Előfordulás', 'testi sejtekben', 'ivarsejt-képzéskor'],
            ['Genetikai változatosság', 'nem növeli', 'növeli'],
          ],
        },
        content: {
          kozep: {
            intro: 'A sejtosztódás az élet egyik legalapvetőbb folyamata: ez biztosítja az élőlények növekedését, sejtjeik megújulását és a szaporodást is. Mivel ez a témakör kiemelten fontos és gyakran számonkért, minden részletét érdemes alaposan végiggondolni.',
            sections: [
              {
                heading: 'A kromoszóma fogalma',
                paragraphs: [
                  'A kromoszóma a DNS és a hozzá kapcsolódó fehérjék tömör, sejtosztódáskor mikroszkópban is látható formája - osztódás előtt a DNS ugyanis erősen feltekeredik, hogy könnyebben, sértetlenül szétosztható legyen a két utódsejt között.',
                  'Osztódás előtt (miután a DNS már megkettőződött) egy kromoszóma két, egymással teljesen megegyező kromatidából áll, amelyeket egy összeszűkülő pont, a centromér köt össze. A kromoszóma genetikai értelemben egy kapcsoltsági csoportot is jelent: a rajta elhelyezkedő gének "együtt öröklődnek", hiszen fizikailag ugyanahhoz a DNS-molekulához tartoznak.',
                  'Az emberi testi sejtek 46, az ivarsejtek 23 kromoszómát tartalmaznak - ez a különbség kulcsfontosságú a mitózis és a meiózis megértéséhez.',
                ],
              },
              {
                heading: 'A sejtciklus',
                paragraphs: [
                  'A sejt élete nem folyamatos osztódásból áll: a legtöbb idejét egy növekedési és felkészülési szakaszban, az interfázisban tölti, és csak ennek végén, viszonylag rövid ideig zajlik maga az osztódás.',
                  'Az interfázis három részre bontható. A G1-szakaszban a sejt növekszik, és termeli azokat a fehérjéket és sejtalkotókat, amelyekre a további működéséhez szüksége van. Az S-szakaszban ("szintézis" szakasz) megkettőződik a DNS-állomány - enélkül ugyanis nem tudná a két utódsejt is megkapni a teljes genetikai információt. A G2-szakaszban a sejt tovább növekszik, és közvetlenül felkészül az osztódásra.',
                  'Az interfázist követi az osztódás szakasza (M-szakasz), amely alatt a mitózis vagy a meiózis lépései zajlanak le.',
                ],
              },
              {
                heading: 'A mitózis (számtartó osztódás) szakaszai',
                paragraphs: [
                  'A mitózis eredményeként két, egymással és az eredeti sejttel genetikailag megegyező testi sejt jön létre - ez biztosítja a szervezet növekedését és a sejtek pótlását.',
                  'A profázis szakaszában a korábban lazán elhelyezkedő DNS-állomány kromoszómákká tömörödik, és megkezdődik egy speciális fehérjékből (mikrotubulusokból) álló szerkezet, az osztódási orsó kialakulása - az állati sejtekben ezt két centriólum szervezi, amelyek az osztódás során a sejt két ellentétes pólusára vándorolnak.',
                  'A metafázis során a kromoszómák a sejt "egyenlítői síkjában" rendeződnek el, az orsó fonalai pedig minden kromoszóma centromérjéhez kapcsolódnak - ez a lépés biztosítja, hogy az osztódás pontos és rendezett legyen.',
                  'Az anafázis szakaszában az orsó fonalai összehúzódnak, és a testvérkromatidák szétválnak egymástól, a sejt két ellentétes pólusa felé húzódva. Ettől kezdve minden kromatida önálló kromoszómának számít.',
                  'A telofázis során a két pólusnál összegyűlt kromoszómák körül újra kialakul a sejtmaghártya, létrejön a két új sejtmag, majd a citoplazma is kettéválik (ez utóbbi lépést sejttestosztódásnak nevezzük), és két, egymással genetikailag azonos utódsejt keletkezik.',
                ],
              },
              {
                heading: 'A meiózis (számfelező osztódás) lényege',
                paragraphs: [
                  'A meiózis az ivarsejtek (petesejt, hímivarsejt) létrejöttében játszik szerepet - ha az ivarsejtek is a testi sejtekkel megegyező (46-os) kromoszómaszámmal rendelkeznének, akkor a megtermékenyítéskor létrejövő zigóta kromoszómaszáma minden generációban megduplázódna. A meiózis pontosan ezt előzi meg azzal, hogy megfelezi a kromoszómaszámot.',
                  'A meiózis két egymást követő osztódásból áll (ellentétben a mitózis egyetlen osztódásával), de a DNS csak egyszer, az első osztódás előtt kettőződik meg - emiatt az egy kiindulási sejtből végül négy, felezett (23-as) kromoszómaszámú ivarsejt keletkezik.',
                ],
              },
              {
                heading: 'Az I. és a II. meiotikus osztódás közötti különbség',
                paragraphs: [
                  'Az első meiotikus osztódás (meiózis I) során az egymáshoz hasonló, de nem teljesen egyező (egyik anyai, egyik apai eredetű) homológ kromoszómapárok válnak szét egymástól, és kerülnek a két utódsejtbe - ekkor még minden kromoszóma két kromatidából áll, csak a homológ párok száma feleződik meg.',
                  'A második meiotikus osztódás (meiózis II) ezután lényegében a mitózishoz hasonlóan zajlik: itt már a testvérkromatidák válnak szét egymástól - ez a lépés adja a végleges, egyszeres kromatidájú, felezett kromoszómaszámú ivarsejteket.',
                  'Ez a kétlépcsős folyamat magyarázza, hogy miért pont négy sejt keletkezik egyetlen kiindulási sejtből: az első osztódás kettéosztja a homológ párokat (2 sejt), a második osztódás pedig mindkét sejtben szétválasztja a testvérkromatidákat (2×2 = 4 sejt).',
                ],
              },
              {
                heading: 'Hogyan hoz létre a meiózis genetikai változatosságot?',
                paragraphs: [
                  'A meiózis nemcsak megfelezi a kromoszómaszámot, hanem genetikai változatosságot is teremt. Ennek egyik forrása, hogy a meiózis I során az anyai és apai eredetű homológ kromoszómák véletlenszerűen, egymástól függetlenül kerülnek szét az utódsejtekbe - ezt független szétválásnak nevezzük. Mivel az embernek 23 pár kromoszómája van, ez önmagában több millió különböző kombinációt tesz lehetővé egyetlen ivarsejtben.',
                  'A változatosság másik forrása, hogy a homológ kromoszómák a meiózis I elején szorosan egymás mellé rendeződnek, és apró szakaszokat cserélhetnek egymással (ezt a folyamatot a Genetika témakörben tanuljuk majd részletesen) - ez tovább növeli az esélyét annak, hogy egy adott ivarsejt genetikailag egyedi kombinációt hordozzon.',
                  'Ez a kettős forrás (független szétválás és szakaszcsere) az oka annak, hogy egy szülőpár gyermekei - egypetéjű ikreket kivéve - genetikailag sosem egyeznek meg egymással, még akkor sem, ha ugyanattól a két szülőtől származnak.',
                ],
              },
              {
                heading: 'Miért van szükség mindkét osztódástípusra?',
                paragraphs: [
                  'A mitózis és a meiózis két, egymást kiegészítő szerepet tölt be: a mitózis biztosítja, hogy a szervezet sejtjei növekedni, megújulni tudjanak, méghozzá genetikailag pontosan az eredetivel megegyező formában - ez elengedhetetlen ahhoz, hogy egy szervezet minden sejtje ugyanazt a genetikai információt hordozza.',
                  'A meiózis ezzel szemben kifejezetten a szaporodáshoz szükséges: nemcsak a kromoszómaszám állandóságát tartja fenn generációról generációra, hanem az általa létrehozott genetikai változatosság az evolúció egyik alapvető forrása is - enélkül minden utód genetikailag azonos lenne a szüleivel, ami jelentősen csökkentené egy faj alkalmazkodóképességét a változó környezethez.',
                ],
              },
              {
                heading: 'Amikor a folyamat hibázik: nemleválás',
                paragraphs: [
                  'Ritkán előfordulhat, hogy a meiózis során egy homológ kromoszómapár (vagy a második osztódásnál egy testvérkromatida-pár) nem válik szét megfelelően - ezt a hibát nemleválásnak (nondiszjunkciónak) nevezzük. Ennek eredményeként olyan ivarsejtek keletkezhetnek, amelyekben egy adott kromoszómából eggyel több vagy eggyel kevesebb van a szokásosnál.',
                  'Ha egy ilyen rendellenes ivarsejt vesz részt a megtermékenyítésben, a létrejövő magzat sejtjeiben is eltérő lesz egy adott kromoszóma száma - ez áll például a Down-szindróma hátterében, amelynél a 21-es kromoszómából három (kettő helyett) található meg a sejtekben. A nemleválás esélye az anyai életkor előrehaladtával nő, ami az egyik oka annak, hogy idősebb várandós anyáknál gyakrabban javasolnak genetikai szűrővizsgálatot.',
                ],
              },
            ],
            keyTerms: ['kromoszóma', 'kromatida', 'centromér', 'kapcsoltsági csoport', 'sejtciklus', 'interfázis', 'G1-szakasz', 'S-szakasz', 'G2-szakasz', 'mitózis', 'profázis', 'metafázis', 'anafázis', 'telofázis', 'meiózis', 'homológ kromoszóma', 'független szétválás', 'nemleválás'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a crossing over pontos mechanizmusát, a hím és női ivarsejt-képzés közötti különbséget, valamint a sejtciklus szabályozásának ellenőrzőpontjait is ismerni kell.',
            sections: [
              {
                heading: 'A crossing over (rekombináció) mechanizmusa',
                paragraphs: [
                  'A meiózis I elején a homológ kromoszómapárok szorosan egymás mellé rendeződnek (ezt a folyamatot szinapszisnak nevezzük), és négy kromatidából álló szerkezetet, ún. tetrádot (bivalenst) alkotnak.',
                  'A szorosan összetapadt homológ kromatidák meghatározott pontokon (ezeket kiazmának nevezzük) fizikailag elszakadhatnak, majd a szomszédos kromatida megfelelő szakaszához kapcsolódhatnak vissza - ezáltal a két homológ kromoszóma szakaszokat cserél egymással.',
                  'Ennek eredménye, hogy egyetlen kromoszómán belül is új allél-kombinációk jönnek létre, amelyek korábban nem léteztek együtt: egy kromoszóma egy szakasza az egyik szülőtől, egy másik szakasza a másik szülőtől származhat. Ez a mechanizmus a független szétváláson túl egy második, még finomabb szintű forrása a genetikai változatosságnak.',
                ],
              },
              {
                heading: 'Hím és női ivarsejt-képzés - miért nem egyforma az eredmény?',
                paragraphs: [
                  'Bár a meiózis alapelve azonos mindkét nemnél, az eredmény eltérő. A hímivarsejt-képzés (spermatogenezis) során mind a négy meiózisból keletkező sejt működőképes hímivarsejtté (spermiummá) alakul.',
                  'A női ivarsejt-képzés (petesejt-képzés, oogenezis) során ezzel szemben a sejtosztódások nem egyenlő méretű sejteket hoznak létre: a citoplazma egyenlőtlenül oszlik el, így végül csak egyetlen, nagy méretű, tápanyagban gazdag petesejt jön létre, a másik három sejt (ún. sarkitest, poláris test) elpusztul. Ennek biológiai értelme, hogy a leendő embriónak a megtermékenyítés után azonnal jelentős tápanyag-tartalékra van szüksége, amíg saját táplálkozása (pl. a méhlepényen keresztül) ki nem alakul.',
                ],
              },
              {
                heading: 'A sejtciklus ellenőrzőpontjai',
                paragraphs: [
                  'A sejtciklus nem "vakon" halad előre: több ellenőrzőponton (checkpoint) is megvizsgálja, hogy az adott szakasz megfelelően zajlott-e le, mielőtt a következő lépésre engedné a sejtet. Például a G1/S ellenőrzőpontnál a sejt "megnézi", nincs-e DNS-károsodás, mielőtt engedélyezné a DNS megkettőződését.',
                  'Ha egy ellenőrzőpontnál javíthatatlan hibát észlel a sejt, gyakran a korábban (A sejtműködések vezérlése fejezetben) megismert programozott sejthalál (apoptózis) indul be - ez megakadályozza, hogy a hibás, potenciálisan károsodott genetikai állományú sejt tovább osztódjon és elszaporodjon. Az ellenőrzőpontok hibás működése az egyik oka annak, hogy egyes sejtek kontrollálatlanul osztódni kezdenek, ami a daganatos elváltozások kialakulásának egyik alapja.',
                ],
              },
            ],
            keyTerms: ['szinapszis', 'tetrád', 'kiazma', 'spermatogenezis', 'oogenezis', 'sarkitest', 'ellenőrzőpont'],
          },
        },
      },
      {
        id: 'sejtmukodesek-vezerlese',
        title: 'A sejtműködések vezérlése',
        order: 13,
        isFree: false,
        estimatedMinutes: 20,
        content: {
          kozep: {
            intro: 'A sejt nem elszigetelten létezik: folyamatosan reagál a külső és belső környezetéből érkező ingerekre, és ez a válaszkészség teszi lehetővé, hogy a szervezet sejtjei összehangoltan működjenek.',
            sections: [
              {
                heading: 'Az inger-válasz típusai',
                paragraphs: [
                  'A sejt többféle módon válaszolhat egy ingerre. Koncentrációváltozással reagálhat, például amikor egy hormon hatására megváltozik egy adott anyag mennyisége a sejten belül. Alakváltozással válaszolhat, ahogy azt a fehérvérsejtek állábas mozgásánál is látjuk. Elválasztással (szekrécióval) reagálhat, amikor egy mirigysejt egy jelre elkezd egy anyagot (pl. hormont vagy enzimet) termelni és kibocsátani. Elektromos változással válaszolhat, ahogy az idegsejtek teszik, amikor egy inger hatására megváltozik a membránjuk potenciálja.',
                ],
              },
              {
                heading: 'Receptorok és a jelátvitel alapja',
                paragraphs: [
                  'A Membránok szerepe fejezetben megismert receptorfehérjék adják a sejt "érzékelő rendszerét": egy jelmolekula (pl. hormon) receptorhoz kötődése elindít egy sejten belüli válaszfolyamatot, amely végül megváltoztatja a sejt működését - ezt nevezzük jelátvitelnek.',
                  'Ez a mechanizmus teszi lehetővé, hogy a szervezet távoli sejtjei is összehangoltan reagáljanak egyetlen jelre - például amikor egy hormon a véráramon keresztül eljut sok különböző sejthez, de csak azok reagálnak rá érdemben, amelyeknek van hozzá illeszkedő receptoruk.',
                ],
              },
              {
                heading: 'A Na-K-pumpa szerepe',
                paragraphs: [
                  'A korábban (Elemek, ionok és Membránok szerepe fejezetek) megismert Na⁺/K⁺-pumpa kulcsfontosságú a sejtműködés szabályozásában, mivel fenntartja a sejtmembrán két oldala közötti ionkoncentráció-különbséget - enélkül a sejt nem tudna elektromos jeleket létrehozni és továbbítani, ami különösen az idegsejtek és az izomsejtek működéséhez elengedhetetlen.',
                ],
              },
              {
                heading: 'Programozott és nem programozott sejthalál',
                paragraphs: [
                  'Megkülönböztetünk programozott sejthalált (apoptózis), amely a szervezet számára hasznos, szabályozott folyamat, és nem programozott sejthalált (nekrózis), amely sérülés vagy károsodás következménye, és - az apoptózissal ellentétben - gyulladásos reakciót is kiválthat a környező szövetben.',
                  'Az apoptózisnak fontos szerepe van az egyedfejlődés során is: embrionális korban például az ujjak közötti úszóhártyaszerű szövet apoptózissal tűnik el, így alakulnak ki a különálló ujjak. Az apoptózis emellett a szervezet védelmét is szolgálja: a károsodott DNS-t hordozó, potenciálisan veszélyessé váló sejtek gyakran ezen az úton pusztulnak el, mielőtt kárt tehetnének.',
                  'Az immunrendszer fejlődése során is kulcsszerepe van az apoptózisnak: azok az immunsejtek, amelyek tévesen a szervezet saját sejtjeit ismernék fel idegenként, jellemzően még érésük során apoptózissal elpusztulnak - ez az egyik mechanizmus, amely megakadályozza, hogy az immunrendszer a saját szervezet ellen forduljon.',
                ],
              },
            ],
            keyTerms: ['receptorfehérje', 'jelátvitel', 'K-Na-pumpa', 'apoptózis', 'nekrózis'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a jelátvitel pontos mechanizmusát (receptor-típusok, másodlagos hírvivők) és a sejtek közötti kommunikáció különböző formáit is ismerni kell.',
            sections: [
              {
                heading: 'Receptor-típusok',
                paragraphs: [
                  'A sejtfelszíni receptorok három fő típusba sorolhatók. Az ioncsatorna-kapcsolt receptorok (a Membránok szerepe fejezetben megismert ligandfüggő csatornák) közvetlenül megnyílnak a jelmolekula kötődésére, azonnali elektromos vagy ionkoncentráció-változást okozva - ez a leggyorsabb válaszforma, jellemzően az idegrendszerben fordul elő.',
                  'Az enzimkapcsolt receptorok a jelmolekula kötődésére saját maguk válnak enzimatikusan aktívvá, vagy egy hozzájuk kapcsolt enzimet aktiválnak. A G-fehérjéhez kapcsolt receptorok pedig a jel megérkezésekor egy közvetítő fehérjét (G-fehérjét) aktiválnak, amely aztán egy másik enzimet indít be.',
                ],
              },
              {
                heading: 'Másodlagos hírvivők és a jelerősítés',
                paragraphs: [
                  'A G-fehérjéhez kapcsolt receptorok működésének klasszikus példája, amikor az aktivált G-fehérje egy enzimet (adenilát-cikláz) indít be, amely ATP-ből egy másodlagos hírvivő molekulát, ciklikus AMP-t (cAMP) állít elő.',
                  'A másodlagos hírvivők jelentősége a jelerősítésben rejlik: egyetlen aktivált receptor több G-fehérjét is aktiválhat, minden G-fehérje sok cAMP-molekulát termelhet, és minden cAMP-molekula tovább aktiválhat egy enzimkaszkádot - így egyetlen jelmolekula kötődéséből a sejten belül több ezerszeres válasz keletkezhet. Ez magyarázza, hogy a szervezetben gyakran rendkívül kis mennyiségű hormon is jelentős élettani hatást tud kiváltani.',
                ],
              },
              {
                heading: 'A sejtek közötti kommunikáció formái',
                paragraphs: [
                  'A sejtek közötti jelátvitel többféle "hatótávolságon" valósulhat meg. Az endokrin jelátvitel során a jelmolekula (hormon) a véráramba jutva távoli sejtekhez is eljut. A parakrin jelátvitel esetén a jelmolekula csak a közeli sejtekre hat, mielőtt lebomlana. Az autokrin jelátvitel során a sejt saját maga által termelt jelmolekulára reagál. A szinaptikus jelátvitel pedig az idegsejtekre jellemző, rendkívül gyors és célzott forma, ahol a jelmolekula (neurotranszmitter) egy szűk résen (szinapszison) át közvetlenül a szomszédos sejthez jut el.',
                  'Ezekkel a jelátviteli formákkal részletesebben a Szabályozás (idegrendszer, hormonrendszer) témakörben találkozunk majd - érdemes már most megjegyezni a négy típus közötti alapvető különbséget, mert ez adja majd a keretet az idegi és a hormonális szabályozás összehasonlításához.',
                ],
              },
            ],
            keyTerms: ['enzimkapcsolt receptor', 'G-fehérjéhez kapcsolt receptor', 'másodlagos hírvivő', 'cAMP', 'endokrin jelátvitel', 'parakrin jelátvitel', 'autokrin jelátvitel', 'szinaptikus jelátvitel'],
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
        id: 'virusok',
        title: 'Vírusok',
        order: 1,
        isFree: true,
        estimatedMinutes: 26,
        content: {
          kozep: {
            intro: 'A vírusok nem sejtes szerveződésű biológiai rendszerek, amelyek csak élő sejtekben képesek szaporodni - jelentős egészségügyi szerepük miatt megértésük kulcsfontosságú, és szerencsére a felépítésükhöz szükséges alapfogalmakat (DNS, RNS, fehérje) már ismerjük a korábbi fejezetekből.',
            sections: [
              {
                heading: 'Felfedezésük története: Ivanovszkij kísérlete',
                paragraphs: [
                  'A vírusok létezését elsőként Dmitrij Ivanovszkij orosz botanikus bizonyította 1892-ben, a dohánynövények mozaikbetegségét vizsgálva - ez a betegség jellegzetes, foltos, mozaikszerű elszíneződést okoz a levélen.',
                  'Ivanovszkij a beteg növény kivonatát olyan finom pórusú (porcelán) szűrőn engedte át, amely minden addig ismert baktériumot visszatartott. Meglepő módon a leszűrt, baktériummentes folyadék továbbra is képes volt megfertőzni az egészséges növényeket - ez azt bizonyította, hogy a kórokozó minden addig ismert baktériumnál kisebb.',
                  'Ez a kísérlet volt az első tudományos bizonyíték egy addig ismeretlen, baktériumnál kisebb kórokozó-típus létezésére - ez a felfedezés vezetett el végül a vírusok azonosításához és jellemzéséhez.',
                ],
              },
              {
                heading: 'Felépítés és méret',
                paragraphs: [
                  'A vírusok felépítése egyszerű: egy fehérjeburokban (kapszid) örökítőanyag található, amely - a sejtes élőlényekkel ellentétben, amelyek mindig DNS-t hordoznak - lehet DNS vagy RNS is.',
                  'A vírusok mérete rendkívül kicsi, jellemzően 20-300 nanométer közötti - ez lényegesen kisebb a legtöbb baktériumnál (amelyek mikrométeres nagyságrendűek), ezért a vírusok fénymikroszkóppal nem, csak elektronmikroszkóppal láthatók. Alakjuk is változatos: vannak gömb alakú, pálcika alakú, és bonyolultabb, "fejjel és farokkal" rendelkező vírusok is, mint amilyenek a baktériumokat fertőző bakteriofágok.',
                  'A vírusok önálló anyagcserét nem folytatnak, saját riboszómájuk, enzimrendszerük nincs - kizárólag a gazdasejt anyagcsere-gépezetét felhasználva képesek szaporodni. Éppen emiatt áll vitatott kérdés elé a biológia: a vírusok az élő és az élettelen határán helyezkednek el, hiszen nem rendelkeznek önálló anyagcserével, de genetikai információt hordoznak és szaporodni képesek (ha van hozzá gazdasejtük).',
                ],
              },
              {
                heading: 'A vírusok szaporodási ciklusa',
                paragraphs: [
                  'A vírus szaporodása jellegzetes lépéssorozatban zajlik. Először a vírus a gazdasejt felszínén lévő, korábban (Membránok szerepe fejezet) megismert receptorfehérjékhez kötődik - egy vírus jellemzően csak azokat a sejttípusokat képes megfertőzni, amelyeknek van a számára megfelelő receptora.',
                  'Ezután a vírus genetikai anyaga bejut a sejtbe, és "eltéríti" annak anyagcsere-gépezetét: a gazdasejt riboszómái, enzimei innentől a vírus genetikai információja alapján kezdenek dolgozni, új vírus-alkotóelemeket (kapszidfehérjéket, genetikai anyagot) termelve.',
                  'Az újonnan összeszerelt vírusrészecskék végül kiszabadulnak a sejtből - gyakran úgy, hogy a gazdasejt szétesik (ezt lízisnek nevezzük), és elpusztul. Az így felszabaduló új vírusok újabb sejteket fertőzhetnek meg, a folyamat pedig ismétlődik.',
                ],
              },
              {
                heading: 'DNS-vírusok és RNS-vírusok',
                paragraphs: [
                  'A vírusokat aszerint is csoportosíthatjuk, hogy milyen típusú nukleinsavat hordoznak örökítőanyagként. A DNS-vírusok közé tartozik például a himlővírus, a herpeszvírus és a hepatitis B vírus.',
                  'Az RNS-vírusok közé tartozik az influenzavírus, a HIV, a koronavírusok (pl. a SARS-CoV-2) és a kanyaróvírus. Az RNS-vírusok jellemzően gyorsabban mutálódnak, mint a DNS-vírusok, mert a DNS megkettőződésekor a sejt hatékony hibajavító mechanizmusokat is alkalmaz, míg az RNS-alapú szaporodás során ilyen javítás jellemzően nem történik. Ez magyarázza, hogy miért kell évről évre új összetételű influenza elleni oltást kifejleszteni: a vírus gyors mutálódása miatt a korábbi oltás által kiváltott immunválasz egy idő után már nem illeszkedik pontosan az aktuálisan terjedő vírustörzshöz.',
                  'A HIV egy különleges RNS-vírus, ún. retrovírus: szaporodása során saját RNS-ét DNS-sé írja át (ez a folyamat a genetikai információ szokásos áramlási irányával ellentétes, innen a "retro" előtag), majd ezt a DNS-t beépíti a gazdasejt (egy bizonyos típusú immunsejt) saját DNS-állományába. Ez a beépülés az oka annak, hogy a HIV-fertőzés a szervezetből ma még nem gyógyítható ki teljesen: a vírus genetikai anyaga tartósan "elrejtőzik" a fertőzött sejtek saját DNS-ében.',
                ],
              },
              {
                heading: 'Fertőzés, megbetegedés, járvány',
                paragraphs: [
                  'A megfertőződés módjai sokfélék lehetnek: cseppfertőzés (pl. köhögéskor, tüsszentéskor kijutó apró cseppekkel), közvetlen érintkezés, testnedvekkel történő átvitel, illetve rovarcsípés.',
                  'A fertőzés a kórokozó szervezetbe jutását jelenti, a megbetegedés a tünetek megjelenését, a járvány pedig egy fertőző betegség egy adott területen, rövid idő alatt nagyszámú embert érintő terjedését. A fertőzés és a tünetek megjelenése között lappangási idő (inkubációs idő) telhet el.',
                  'A megelőzés legfontosabb eszközei a védőoltás, a higiéniai szabályok betartása (pl. kézmosás) és a fertőzött egyedek elkülönítése, amely lassítja a járvány terjedését.',
                ],
              },
              {
                heading: 'A prion - a vírusnál is egyszerűbb kórokozó',
                paragraphs: [
                  'A prion a vírusnál is egyszerűbb fertőző ágens: kizárólag egy rendellenesen feltekeredett fehérjéből áll, nukleinsavat egyáltalán nem tartalmaz - ezzel a legegyszerűbb ismert kórokozó-típus.',
                  'A prion a szervezetben található normál fehérjéket "kényszeríti át" a saját, kóros térszerkezetére, ami láncreakciószerűen terjed tovább, és idegrendszeri betegségekhez vezet - ilyen például a szarvasmarhákat érintő kergemarhakór.',
                ],
              },
            ],
            keyTerms: ['vírus', 'kapszid', 'bakteriofág', 'DNS-vírus', 'RNS-vírus', 'retrovírus', 'lízis', 'fertőzés', 'inkubációs idő', 'járvány', 'védőoltás', 'prion'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a vírus különböző "állapotainak" pontos elnevezéseit, valamint a bakteriofágok kétféle szaporodási stratégiáját is ismerni kell.',
            sections: [
              {
                heading: 'Virion és vegetatív vírus',
                paragraphs: [
                  'A sejten kívül létező, önálló, fertőzőképes vírusrészecskét virionnak nevezzük - ez a vírus "nyugvó", átmeneti formája, amely fehérjeburokból (kapszidból) és a benne rejtett örökítőanyagból áll, és amíg nem talál gazdasejtet, semmiféle életjelenséget nem mutat.',
                  'Amint a virion bejut egy gazdasejtbe, és megkezdi a szaporodását a sejt anyagcsere-gépezetét felhasználva, a vírust vegetatív állapotúnak (vegetatív vírusnak) nevezzük - ekkor a vírus genetikai anyaga aktívan "működik", új vírusalkotó elemek szintézisét irányítva. A virion tehát a vírus sejten kívüli, a vegetatív forma a sejten belüli, aktívan szaporodó állapotát jelöli.',
                ],
              },
              {
                heading: 'Litikus és lizogén ciklus',
                paragraphs: [
                  'A bakteriofágok (és néhány más vírus) kétféle stratégiát követhetnek a gazdasejten belül. A litikus ciklus során a fág azonnal megkezdi a szaporodását, új vírusrészecskéket termel, majd - ahogy azt korábban megismertük - a gazdasejt lízisével (szétesésével) szabadulnak ki az új virionok. Az ilyen viselkedésű fágokat virulens fágoknak nevezzük.',
                  'A lizogén ciklus ezzel szemben egy "rejtőzködő" stratégia: a fág DNS-e beépül a gazdasejt (baktérium) genomjába, ahol profágként (provírusként) marad jelen - ilyenkor a fág nem termel azonnal új vírusrészecskéket, hanem a baktérium minden osztódásakor a saját DNS-ével együtt öröklődik tovább. Az ilyen viselkedésre képes fágokat mérsékelt (temperáns) fágoknak nevezzük.',
                  'Ez a mechanizmus szoros rokonságban áll azzal, amit korábban a HIV kapcsán megismertünk: ott is a vírus genetikai anyagának a gazdasejt genomjába való beépüléséről volt szó. A profág (illetve a HIV esetében provírus) egy bizonyos ideig "alvó állapotban" maradhat, majd - jellemzően stresszhatásra (pl. UV-sugárzás, vegyi károsodás) - "kilépve" a genomból, litikus ciklusba kezdhet, és elpusztíthatja a gazdasejtet.',
                ],
              },
              {
                heading: 'Kilépés a sejtből: lízis vagy sarjadzás',
                paragraphs: [
                  'Nem minden vírus lízissel hagyja el a gazdasejtet. Egyes vírusok - így az influenzavírus, a HIV és a koronavírusok is - burkos vírusok: kapszidjukat egy külső, lipid membránból álló burok veszi körül, amelyre membránfehérjéik is kiállnak.',
                  'A burkos vírusok jellemzően sarjadzással (bimbózással) hagyják el a sejtet: a vírusrészecske a gazdasejt membránjának egy darabját "magával viszi" burokként, miközben áthalad rajta - ez a folyamat nem feltétlenül öli meg azonnal a gazdasejtet, ellentétben a lízissel járó kilépéssel.',
                ],
              },
            ],
            keyTerms: ['virion', 'vegetatív vírus', 'litikus ciklus', 'lizogén ciklus', 'profág', 'temperáns fág', 'burkos vírus'],
          },
        },
      },
      {
        id: 'bakteriumok',
        title: 'Baktériumok',
        order: 2,
        isFree: false,
        estimatedMinutes: 24,
        content: {
          kozep: {
            intro: 'A baktériumok önálló, prokarióta sejtszerveződésű élőlények - a Sejtalkotók fejezetben megismert prokarióta/eukarióta fogalompár itt egy konkrét, teljes élőlénycsoporton keresztül válik igazán érthetővé.',
            sections: [
              {
                heading: 'Prokarióta és eukarióta sejtszerveződés összehasonlítása',
                paragraphs: [
                  'A baktériumok sejtjeiben nincs valódi, hártyával határolt sejtmag - genetikai állományuk egyetlen, körkörös DNS-molekula formájában, közvetlenül a citoplazmában található. Nincsenek bennük a korábban (Anyagcsere sejtszinten fejezet) megismert membránnal határolt sejtszervecskék sem: se mitokondrium, se endoplazmatikus hálózat, se Golgi-készülék.',
                  'Ezzel szemben az eukarióta sejtekben (mint amilyenek a növények, állatok, gombák sejtjei) valódi sejtmag található, és a sejt belsejét membránnal határolt organellumok tagolják, amelyek mindegyike specializált feladatot lát el - ezt a fajta "belső munkamegosztást" a prokarióta sejtek nem ismerik, minden folyamatuk közvetlenül a citoplazmában zajlik.',
                  'A baktériumsejtek jellegzetes alakok szerint is csoportosíthatók: a gömb alakúakat kokkusznak, a pálcika alakúakat bacilusnak, a csavarodott alakúakat spirillumnak nevezzük - ezek az alaki különbségek mikroszkóp alatt jól megfigyelhetők, és segítenek a baktériumfajok azonosításában.',
                ],
              },
              {
                heading: 'A baktériumok sokoldalú jelentősége',
                paragraphs: [
                  'A baktériumok környezeti jelentősége óriási: a korábban (Elemek, ionok fejezet) megismert nitrogénkörforgásban a nitrifikáló baktériumok alakítják át a nitrogént a növények számára felvehető formákba - enélkül a szárazföldi életközösségek táplálékláncai összeomlanának.',
                  'Evolúciós jelentőségük is kiemelkedő: a baktériumok voltak a Föld első élőlényei, és a korábban (Anyagcsere sejtszinten fejezet) megismert endoszimbióta elmélet szerint a mitokondrium és a színtest is egykor önállóan élő baktériumokból alakult ki.',
                  'Ipari jelentőségük is jelentős: egyes baktériumok (pl. tejsavbaktériumok) segítségével készül a joghurt és a sajt - ugyanaz a tejsavas erjedés áll a háttérben, amit korábban (Lebontó folyamatok fejezet) az izomsejteknél már megismertünk, csak itt tudatosan, élelmiszer-előállítás céljából használjuk ki.',
                  'Mezőgazdasági jelentőségük is számottevő: egyes talajbaktériumok (pl. a hüvelyesek gyökerén élő nitrogénkötő baktériumok) képesek a légköri nitrogént a növények számára hasznosítható formává alakítani, ezáltal természetes módon javítva a talaj termékenységét.',
                  'Egészségügyi szempontból a baktériumok kettős szerepet töltenek be: egyes fajok kórokozók (fertőző betegségeket okoznak), mások viszont a gyógyszeriparban is fontos szerepet kapnak - például géntechnológiával módosított baktériumok állítanak elő emberi inzulint a cukorbetegek számára.',
                ],
              },
              {
                heading: 'Antibiotikum-rezisztencia',
                paragraphs: [
                  'A felelőtlen antibiotikum-szedés (pl. a kúra idő előtti abbahagyása) azért vezet a kórokozók ellenálló formáinak elterjedéséhez, mert egy baktériumpopuláción belül természetes genetikai változatosság áll fenn: néhány egyed véletlenszerűen ellenállóbb lehet egy adott antibiotikummal szemben. Ha a kezelés nem pusztítja el a teljes populációt, az érzékeny egyedek elpusztulnak, de az ellenálló egyedek túlélnek és tovább szaporodnak - ez a jelenség a természetes szelekció egy közvetlenül megfigyelhető, gyakorlati példája, amellyel az Evolúció témakörben találkozunk majd részletesebben.',
                  'Baktérium által okozott emberi megbetegedésre példa a tuberkulózis (TBC), a szalmonellózis vagy a Lyme-kór. Megelőzésükben és a védekezésben fontos szerepe van a higiéniának, a védőoltásoknak (ahol létezik ilyen), valamint a fertőtlenítési és sterilizálási eljárásoknak, amelyeket a Vírusok fejezetben már részben érintettünk.',
                ],
              },
            ],
            keyTerms: ['prokarióta', 'eukarióta', 'kokkusz', 'bacilus', 'spirillum', 'antibiotikum-rezisztencia', 'természetes szelekció', 'fertőtlenítés', 'sterilizálás'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a baktériumok anyagcsere- és ökológiai típusainak pontos azonosítását, a fertőtlenítési eljárások biológiai hátterét, valamint az endoszimbióta elmélet mellett szóló bizonyítékokat is ismerni kell.',
            sections: [
              {
                heading: 'Anyagcsere- és ökológiai típusok a baktériumok között',
                paragraphs: [
                  'A korábban (Anyagcsere fejezet) megismert fotoautotróf és kemoautotróf fogalompár mellett a baktériumok között megtalálható a heterotróf (pontosabban kemoheterotróf) típus is - ez a három anyagcsere-típus az energiaforrás és a szénforrás alapján különíthető el egymástól, és életfolyamataik leírása alapján bármelyik baktériumfaj besorolható valamelyik kategóriába.',
                  'A heterotróf baktériumok (a legtöbb ismert baktériumfaj) szerves anyagból nyerik mind az energiájukat, mind az építőanyagaikat - ide tartoznak a bélbaktériumok és a legtöbb kórokozó baktérium is. A fotoautotróf baktériumok (pl. a cianobaktériumok) fényenergiát hasznosítva, szervetlen szén-dioxidból építik fel szerves anyagaikat, hasonlóan a növényekhez. A kemoautotróf baktériumok (pl. a korábban már említett nitrifikáló talajbaktériumok) szervetlen vegyületek - például ammónia - oxidációjából nyert kémiai energiával szintén szervetlen szén-dioxidból építkeznek.',
                  'Az anyagcsere-típus mellett a baktériumok az életközösségben betöltött szerepük (ökológiai típusuk) alapján is csoportosíthatók. A termelő baktériumok (a fotoautotróf és kemoautotróf fajok) szerves anyagot állítanak elő, amelyet mások felhasználhatnak - ugyanaz az elv, amit a termelők tápláléklánc-beli szerepéről az Anyagcsere fejezetben már megismertünk. A lebontó baktériumok elhalt szerves anyagot bontanak le, ezzel zárva az anyagforgalom körforgását. A kórokozó baktériumok más élőlények kárára szaporodnak, míg a szimbionta baktériumok (pl. a bélflóra tagjai) kölcsönösen előnyös kapcsolatban élnek gazdaszervezetükkel.',
                ],
              },
              {
                heading: 'A fertőtlenítési eljárások biológiai alapja',
                paragraphs: [
                  'A középszinten megismert fertőtlenítési és sterilizálási eljárások mindegyike a kórokozó valamely alapvető sejtszerkezetét károsítja - emelt szinten ennek konkrét biológiai mechanizmusát is érteni kell.',
                  'A magas hőmérséklet (forralás, gőzölés) roncsolja a fehérjék térszerkezetét, vagyis - ahogy azt a Fehérjék fejezetben már megismertük - denaturálja azokat, ami működésképtelenné teszi a kórokozó enzimeit. Az alkohol- és más vegyszeralapú fertőtlenítőszerek a sejtmembrán lipidrétegét oldják fel, illetve szintén fehérjéket denaturálnak, így a sejt elveszti a határoló funkcióját.',
                  'Az ultraibolya (UV) sugárzás közvetlenül a DNS-t károsítja: a szomszédos timinbázisok között kóros kötéseket, ún. timindimereket hoz létre, amelyek megakadályozzák a DNS helyes megkettőződését és leolvasását. Az autoklávban alkalmazott túlnyomás azért hatékonyabb sterilizálási eljárás az egyszerű forralásnál, mert a nyomás növelésével a víz forráspontja 100 °C fölé emelhető, így a fehérjedenaturáció minden mikroorganizmusnál gyorsabban és biztosabban következik be.',
                ],
              },
              {
                heading: 'Az endoszimbióta elmélet és a mellette szóló bizonyítékok',
                paragraphs: [
                  'A korábban (Anyagcsere fejezet, illetve e fejezet középszintje) már érintőlegesen említett endoszimbióta elmélet szerint a mitokondrium és a színtest egykor önállóan élő, baktérium jellegű prokarióta szervezetek voltak, amelyeket egy ősi eukarióta sejt bekebelezett, de nem emésztett meg - a bekebelezett sejtek helyette tartós, kölcsönösen előnyös együttélésbe (szimbiózisba) kerültek a befogadó sejttel: az utóbbi védelmet és tápanyagot biztosított, míg az endoszimbionta hatékony energiatermeléssel (mitokondrium), illetve fotoszintézissel (színtest) "fizetett" ezért cserébe.',
                  'Az elmélet mellett több meggyőző bizonyíték is szól. Mindkét sejtszervecskét kettős membrán határolja (ahogy azt a Fotoszintézis, illetve a Lebontó folyamatok fejezetben már megfigyeltük) - ez pontosan annak felel meg, ahogyan egy bekebelezés során a befogadó sejt membránja körülveszi a bekebelezett sejtet, miközben annak saját, eredeti membránja is megmarad.',
                  'A mitokondrium és a színtest saját, körkörös DNS-molekulával rendelkezik, amely - a sejtmagi DNS-től eltérően - felépítésében a baktériumok DNS-éhez hasonlít. Saját riboszómáik mérete és típusa is inkább a baktériumok riboszómáira, mint az eukarióta sejt citoplazmatikus riboszómáira emlékeztet, osztódásuk pedig a baktériumok osztódásához hasonlóan, a sejt osztódásától függetlenül is végbemehet. Végül ezek a sejtszervecskék egyes, kifejezetten a baktériumok fehérjeszintézisét gátló antibiotikumokra érzékenyek maradtak, míg a sejt sejtmagi eredetű fehérjeszintézise nem - ez is arra utal, hogy a mitokondrium és a színtest fehérjeszintézis-gépezete eredetileg baktériumi eredetű.',
                ],
              },
            ],
            keyTerms: ['heterotróf baktérium', 'fotoautotróf', 'kemoautotróf', 'termelő', 'lebontó', 'kórokozó', 'szimbionta', 'timindimer', 'endoszimbióta elmélet'],
          },
        },
      },
      {
        id: 'egysejtu-eukariotak',
        title: 'Egysejtű eukarióták',
        order: 3,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'A korábban (Baktériumok fejezet) megismert prokarióta/eukarióta sejtszerveződés fogalompárja itt egy új szempontból válik fontossá: az egysejtű eukarióták olyan önálló élőlények, amelyek egyetlen sejtből állnak, mégis rendelkeznek valódi sejtmaggal és a hozzá tartozó sejtszervecskékkel - ez a fejezet az élővilág rendszerezésének egy új, első alkalommal megismert országát, a Protiszták országát mutatja be.',
            sections: [
              {
                heading: 'Rendszertani helyük: a Protiszták országa',
                paragraphs: [
                  'A korábban (A biológia tudománya fejezet) megismert rendszertani hierarchiában (faj → nem → család → rend → osztály → törzs → ország) az "ország" a legtágabb kategória. A korábban megismert baktériumok a Monera (más néven Prokarióták) országába tartoznak; az egysejtű eukarióták ezzel szemben már a Protiszták országának tagjai - ez az első ország, amelynek minden tagja valódi, hártyával határolt sejtmaggal rendelkezik.',
                  'A Protiszták országán belül az egyes fajok további törzsekbe sorolhatók a mozgásszervecskéik típusa alapján. Az óriás amőba a Gyökérlábúak törzsébe tartozik, a papucsállatka a Csillósok törzsébe, a zöld szemesostoros pedig az Ostorosok törzsébe.',
                ],
              },
              {
                heading: 'Mozgásformák',
                paragraphs: [
                  'Az óriás amőba állábak (ideiglenes sejtnyúlványok) segítségével mozog - ugyanezt a mozgásformát figyeltük meg korábban (Sejtműködések vezérlése fejezet) a fehérvérsejteknél is, amelyek szintén állábakkal változtatják alakjukat.',
                  'A papucsállatka egész testét sűrű csillósor borítja, amelyek összehangolt, hullámszerű csapkodásával mozog a vízben. A zöld szemesostoros egyetlen hosszú ostorral (flagellummal) hajtja magát előre - mindkét mozgásforma ugyanazon az elven alapul, mint amit emberi sejteknél (légúti hámsejtek csillói, illetve a hímivarsejt ostora) is megfigyelhetünk.',
                ],
              },
              {
                heading: 'Táplálkozás és felépítő anyagcsere',
                paragraphs: [
                  'Az óriás amőba és a papucsállatka heterotróf módon, fagocitózissal táplálkozik: a sejtmembrán körülzárja a táplálékrészecskét, majd a keletkező táplálékvakuólumban - a korábban (Anyagcsere sejtszinten fejezet) megismert lizoszóma enzimeinek segítségével - emésztődik meg.',
                  'A zöld szemesostoros különleges kivétel: színtestje (kloroplasztisza) van, amellyel fényben fotoautotróf módon szerves anyagot termel, sötétben vagy szerves anyag jelenlétében azonban heterotróf módon is képes táplálkozni. Az ilyen, kétféle anyagcsere-stratégiát egyesítő szervezeteket mixotrófnak nevezzük - ez a tulajdonság teszi a szemesostorost az egyik legérdekesebb, a növény és az állat közötti hagyományos határvonalat elmosó példává.',
                  'Az emésztés után vissza nem szívódott, emésztetlen maradékot a sejt a membránon keresztül üríti ki - az amőbánál ez a sejtfelszín bármely pontján megtörténhet, a papucsállatkánál viszont egy meghatározott helyen, az úgynevezett sejtvégbélen (citoprokton) keresztül távozik a salakanyag.',
                ],
              },
              {
                heading: 'Víztartalom-szabályozás és felismerésük mikroszkóp alatt',
                paragraphs: [
                  'Mindhárom faj édesvízben él, amely a sejtjükhöz képest hipotóniás közeg - a korábban (Membránok szerepe fejezet) megismert ozmózis miatt ezért folyamatosan víz áramlik be a sejtbe. A fölösleges víz eltávolítására egy különleges sejtszervecske, a lüktető (kontraktilis) vacuolum szolgál, amely rendszeres időközönként összehúzódva kiüríti a felgyülemlett vizet a sejtből.',
                  'Fénymikroszkóp alatt mindhárom faj jellegzetes sejtalkotói alapján felismerhető: az amőbánál az állandóan változó alak és az állábak, a papucsállatkánál a testet borító csillók és a két sejtmag (egy nagyobb és egy kisebb), a szemesostorosnál pedig az ostor, a színtest és a fényérzékelő szemfolt.',
                  'A három faj tehát ugyanazokat az alapvető életműködéseket (mozgás, táplálkozás, víztartalom-szabályozás) különböző, egymástól jól megkülönböztethető szervecskékkel valósítja meg - ez a sokféleség jól szemlélteti, hogy az egysejtű lét nem jelenti a funkciók egyszerűségét: egyetlen sejtnek kell ellátnia mindazt, amit egy többsejtű szervezetnél már specializálódott sejtek és szövetek végeznek.',
                ],
              },
            ],
            keyTerms: ['Protiszták országa', 'gyökérlábúak', 'csillósok', 'ostorosok', 'állábas mozgás', 'ostoros mozgás', 'csillós mozgás', 'fagocitózis', 'mixotróf', 'lüktető vacuolum'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a Protiszták országának kialakulásához köthető, nagy jelentőségű elméletet, az endoszimbióta elméletet kell részletesen ismerni - ez az elmélet éppen az itt tanult egysejtű eukarióta sejtszerveződés kialakulására ad magyarázatot.',
            sections: [
              {
                heading: 'Az endoszimbióta elmélet',
                paragraphs: [
                  'Az endoszimbióta elmélet szerint az eukarióta sejt két fontos sejtszervecskéje, a mitokondrium és a színtest, egykor önállóan élő, baktérium jellegű prokarióta szervezetek voltak, amelyeket egy ősi eukarióta sejt bekebelezett, de nem emésztett meg - a bekebelezett sejtek helyette tartós, kölcsönösen előnyös együttélésbe (szimbiózisba) kerültek a befogadó sejttel.',
                  'Az elmélet mellett szóló legfontosabb bizonyítékok - a kettős membrán, a saját körkörös DNS, a baktériumokéra emlékeztető méretű és típusú riboszómák, az önálló osztódás, valamint a baktériumellenes antibiotikumokra való érzékenység - részletes kifejtését a Baktériumok fejezet emelt része tartalmazza, hiszen ezek a bizonyítékok éppen a baktériumokkal való rokonságot támasztják alá.',
                  'Az elmélet jelentősége itt, az egysejtű eukarióták fejezetében abban áll, hogy megmagyarázza, miért rendelkezik minden ma élő eukarióta sejt - legyen az egysejtű (mint az óriás amőba vagy a papucsállatka) vagy egy többsejtű szervezet része - energiatermelő mitokondriummal: ez a sejtszervecske egyetlen közös, ősi endoszimbiotikus eseményből származik, amely még az első eukarióta sejtek megjelenésekor történt.',
                  'A színtest endoszimbiotikus eredete konkrétan is megfigyelhető ebben a fejezetben: a zöld szemesostoros - amely, ahogy azt középszinten megismertük, mixotróf módon képes fotoszintetizálni - éppen azért rendelkezik színtesttel, mert egy távoli őse egykor egy fotoszintetizáló, cianobaktérium jellegű sejtet kebelezett be.',
                  'Az elméletet az 1960-as-1970-es években Lynn Margulis amerikai biológus dolgozta ki és népszerűsítette részletesen, jelentősen hozzájárulva ahhoz, hogy mára az eukarióta sejt kialakulásának általánosan elfogadott magyarázatává váljon.',
                ],
              },
            ],
            keyTerms: ['endoszimbióta elmélet'],
          },
        },
      },
      {
        id: 'elkulonules',
        title: 'A gombák, növények, állatok elkülönülése',
        order: 4,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Növények', 'Állatok'],
          rows: [
            ['Domináns életszakasz', 'haploid ÉS diploid szakasz is hosszú, önálló (generációváltakozás)', 'diploid szakasz domináns és hosszú'],
            ['Haploid szakasz', 'önálló, spórákkal szaporodó egyed is lehet', 'csak az ivarsejtekre korlátozódik'],
            ['Ivarsejtképzés', 'a haploid egyed mitózissal termeli', 'közvetlenül meiózissal, a diploid egyedben'],
            ['Spóraképzés', 'jellemző (a diploid szakasz meiózisával)', 'nem jellemző'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Egysejtű eukarióták fejezet) megismert rendszertani hierarchiában (faj → nem → család → rend → osztály → törzs → ország) eddig két országgal találkoztunk: a Monera (baktériumok) és a Protiszták országával. Ez a fejezet a hagyományos rendszertan három további, kifejezetten többsejtű országát mutatja be - a növényeket, a gombákat és az állatokat -, így mind az öt ország a helyére kerül; azt is megvizsgáljuk, mi indokolja, hogy ezek külön országot alkotnak, és hogyan vezetett az evolúció az egysejtűségtől a valódi többsejtűségig.',
            sections: [
              {
                heading: 'Miért alkotnak külön országot a növények, a gombák és az állatok?',
                paragraphs: [
                  'A három ország elkülönítésének alapja a testszerveződés és az anyagcsere-folyamatok különbsége. A növények fotoautotróf módon táplálkoznak - ahogy azt korábban (Anyagcsere sejtszinten fejezet) megismertük -, sejtjeiket pedig a korábban (Szénhidrátok fejezet) tanult cellulózból felépülő sejtfal határolja.',
                  'A gombák és az állatok ezzel szemben heterotrófok, de eltérő módon táplálkoznak: a gombák sejtjeit kitinből álló sejtfal veszi körül (ahogy azt szintén a Szénhidrátok fejezetben megismertük), és jellemzően a testükön kívül emésztik meg táplálékukat, majd a már megemésztett tápanyagokat szívják fel. Az állati sejteknek nincs sejtfaluk, táplálkozásuk pedig jellemzően bekebelezéssel történik - ehhez hasonló folyamatot (fagocitózis) már megismertünk az Egysejtű eukarióták fejezetben, az óriás amőba és a papucsállatka táplálkozásánál.',
                ],
              },
              {
                heading: 'A differenciálódás: a többsejtűség kulcsa',
                paragraphs: [
                  'A többsejtű szerveződés alapfeltétele a differenciálódás: a sejtek szerkezeti és működésbeli specializálódása egy adott feladat ellátására. Minél összetettebb egy élőlény testfelépítése, annál inkább elkülönülnek egymástól a különböző feladatokat ellátó sejtek - ez a folyamat vezet el végül a valódi szövetek kialakulásához, amelyeket egy későbbi fejezetben (Szövetek, szervek) ismerünk majd meg részletesen.',
                  'Egy egysejtű élőlénynél - mint amilyeneket a korábban (Egysejtű eukarióták fejezet) megismertünk - minden életműködést egyetlen sejtnek kell ellátnia. Egy differenciálódott, többsejtű szervezetnél viszont a különböző sejtcsoportok - és a belőlük felépülő szövetek - egymás között megosztva, hatékonyabban látják el ugyanezeket a feladatokat.',
                ],
              },
              {
                heading: 'Az egysejtűségtől a többsejtűségig - a zöldmoszatok példáján',
                paragraphs: [
                  'A zöldmoszatok azért különösen alkalmasak a szerveződési szintek bemutatására, mert közöttük mindhárom fokozat - az egysejtű szerveződés, valamint a többsejtű, de még nem szövetes szerveződés két típusa - egyaránt megtalálható.',
                  'A sejttársulás (kolónia) esetén az egyes sejtek önállóan is életképesek maradnak, csupán lazán kapcsolódnak egymáshoz, érdemi munkamegosztás nélkül. A sejtfonál esetén a sejtek egymáshoz kapcsolódva, egy sorban helyezkednek el, fonalszerű alakzatot alkotva - ezt a szerveződési formát a következő fejezetben (Sejtfonalak) ismerjük meg részletesebben, a gombák példáján is. A teleptest ezeknél bonyolultabb: a sejtek már részleges munkamegosztást mutatnak, de valódi, elkülönült szövetek még nem alakulnak ki - ezzel egy későbbi fejezetben (Teleptest és álszövet) foglalkozunk majd részletesen.',
                  'Ez a fokozatosság jól szemlélteti, hogy a többsejtűség nem egyetlen lépésben, hanem fokozatosan alakult ki az evolúció során - és éppen ez az oka annak, hogy a növények, a gombák és az állatok, testszerveződésük és anyagcseréjük alapvető különbségei miatt, a rendszertanban külön országot alkotnak.',
                ],
              },
            ],
            keyTerms: ['differenciálódás', 'sejttársulás', 'sejtfonal', 'teleptest'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a növények és az állatok életciklusát kell összehasonlítani: azt, hogy a kromoszómakészlet szempontjából kétféle (haploid és diploid) állapot hogyan és milyen arányban váltja egymást a két országban.',
            sections: [
              {
                heading: 'Növények és állatok életciklusának összehasonlítása',
                paragraphs: [
                  'Az állatoknál a diploid szakasz a domináns és hosszú életszakasz - egy állat teste egész életében diploid sejtekből áll, a haploid állapot pedig kizárólag az ivarsejtekre (a petesejtre és a hímivarsejtre) korlátozódik, amelyek közvetlenül meiózissal keletkeznek a diploid egyed ivarszerveiben - ahogy azt korábban (Osztódás fejezet emelt része) a spermatogenezis és az oogenezis folyamatánál részletesen láttuk. Az állatoknál spóraképzés nem fordul elő.',
                  'A növényeknél ezzel szemben - a legtöbb csoportnál - mind a haploid, mind a diploid szakasz hosszú, önálló életszakaszként jelenik meg: ezt nevezzük generációváltakozásnak. A diploid szakasz sejtjei meiózissal nem közvetlenül ivarsejteket, hanem spórákat hoznak létre; ezekből a haploid spórákból fejlődik ki egy önálló, haploid egyed, amely már mitózissal termeli az ivarsejteket.',
                  'A generációváltakozás pontos lépéseit és a haploid, illetve diploid szakasz egymáshoz viszonyított hosszát a következő fejezetekben (Teleptest és álszövet, Harasztok, Zárvatermők), a mohák, a harasztok és a zárvatermők példáján ismerjük meg részletesen - itt elegendő megjegyezni az alapvető különbséget: az állatoknál a haploid szakasz rövid és csak az ivarsejtekre szorítkozik, a növényeknél viszont a haploid szakasz önálló, spórákkal szaporodó életszakaszt is jelenthet.',
                  'Az "életszakaszok típusa" kifejezés éppen erre a különbségre utal: állatoknál egyetlen domináns (diploid) életszakaszról beszélünk, amelyet csak rövid ideig szakít meg a haploid ivarsejt-állapot, míg a legtöbb növénynél két, egymást váltó, önálló életszakaszról - egy haploidról és egy diploidról - van szó, ez utóbbi az, amit generációváltakozásnak nevezünk.',
                  'Érdemes megjegyezni a spóra és az ivarsejt közötti alapvető különbséget is: a spóra - szemben az ivarsejttel - önmagában, megtermékenyítés nélkül is képes új egyeddé fejlődni, míg egy ivarsejtnek mindenképp egy másik ivarsejttel kell egyesülnie ehhez.',
                ],
              },
            ],
            keyTerms: ['haploid szakasz', 'diploid szakasz', 'generációváltakozás', 'spóraképzés', 'ivarsejtképzés'],
          },
        },
      },
      {
        id: 'sejtfonalak',
        title: 'Sejtfonalak',
        order: 5,
        isFree: false,
        estimatedMinutes: 14,
        content: {
          kozep: {
            intro: 'A korábban (A gombák, növények, állatok elkülönülése fejezet) megismert Gombák országának első konkrét képviselőit ismerjük meg ebben a fejezetben: a fonalas testfelépítésű gombákat, valamint - összehasonlításképpen - a fonalas zöldmoszatokat.',
            sections: [
              {
                heading: 'A fonalas testfelépítés: hifa és micélium',
                paragraphs: [
                  'A fonalas gombák teste vékony, elágazó fonalakból, ún. hifákból épül fel - ezek összessége alkotja a micéliumot, amely gyakran a talajban vagy a tápanyagforrás belsejében terjed szét, láthatatlanul, és csak a szaporítóképletek (pl. a penész "bolyhos" felszíne) jelennek meg a felszínen.',
                  'A gombák - ahogy azt korábban (A gombák, növények, állatok elkülönülése fejezet) megismertük - heterotróf módon, a testükön kívül megemésztett táplálékukat felszívva táplálkoznak: a hifák nagy felülete kiválóan alkalmas erre a sejten kívüli emésztésre és tápanyagfelvételre.',
                ],
              },
              {
                heading: 'Fonalas gombák: peronoszpóra, fejespenész, ecsetpenész',
                paragraphs: [
                  'A peronoszpóra növénykórokozó gomba, amely elsősorban a szőlő és a burgonya leveleit támadja meg, jelentős gazdasági kárt okozva - felismerése és az ellene való védekezés (pl. rézgálicos permetezés) máig fontos szőlészeti feladat.',
                  'A fejespenész (más néven kenyérpenész) jellegzetes, gömb alakú spóratokjairól ("fejeiről") ismerhető fel, amelyek a hifák végén, egyenes szárakon ülnek - ez a penészfaj gyakran jelenik meg a megromlott kenyéren és más szénhidráttartalmú élelmiszereken. Az ecsetpenész spóratartói ezzel szemben ecsetszerűen, többszörösen elágaznak - ez a gombanemzetség adta a penicillin nevű antibiotikumot, amelyet Alexander Fleming fedezett fel véletlenül, amikor észrevette, hogy egy ecsetpenésszel szennyeződött baktériumtenyészetben a penész körül nem nőttek baktériumok.',
                  'Egyes fonalas gombák emberi megbetegedéseket is okozhatnak - ilyenek a bőrgombásodások (pl. a lábgomba), amelyek a bőr felső rétegében szaporodó gombafonalak miatt alakulnak ki, és megfelelő higiéniával, illetve gombaellenes szerekkel kezelhetők.',
                  'A három gombafaj mikroszkóp vagy akár szabad szem alatt is megkülönböztethető egymástól: a fejespenész spóratokjai gömb alakúak és egyenes száron ülnek, az ecsetpenészé ecsetszerűen elágazó fürtökben helyezkednek el, a peronoszpóra pedig jellemzően a levelek fonákján megjelenő, szürkésfehér penészbevonat formájában ismerhető fel.',
                ],
              },
              {
                heading: 'Szaporodás, lebontó szerep és mikroszkópos vizsgálat',
                paragraphs: [
                  'A gombák - a fonalas fajok is - jellemzően spórákkal szaporodnak: a hifák végén képződő spóratokokban nagy számú, apró spóra keletkezik, amelyek szétszóródva, kedvező körülmények között új micéliummá csíráznak ki.',
                  'A fonalas gombák (és általában a gombák) az életközösségekben elsősorban lebontó szerepet töltenek be: elhalt növényi és állati maradványokat bontanak le, ezzel kulcsszerepet játszva az anyagforgalom fenntartásában - ezt a szerepkört a Baktériumok fejezet emelt része is tárgyalja, a baktériumok esetében.',
                  'Fénymikroszkóp alatt vizsgálva a kenyérpenész elágazó hifái és jellegzetes, gömb alakú spóratokjai jól megfigyelhetők. Összehasonlításképpen a fonalas zöldmoszatok (pl. a Spirogyra) is fonalas testfelépítésűek, de esetükben a fonál valódi, egymástól elkülönült sejtekből áll, amelyek mindegyike a korábban (Szénhidrátok fejezet) megismert cellulózból álló sejtfallal rendelkezik - ez a különbség (osztatlan gombafonál vs. sejtekre tagolt moszatfonál) mikroszkóp alatt is jól látható.',
                ],
              },
            ],
            keyTerms: ['Gombák országa', 'hifa', 'micélium', 'peronoszpóra', 'fejespenész', 'ecsetpenész', 'penicillin', 'lebontó'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes mélyebben megismerni a gombafonalak sejtszintű felépítését és növekedési módját, mert ez sok, egyébként meglepőnek tűnő tulajdonságukat megmagyarázza.',
            sections: [
              {
                heading: 'A gombafonalak sejtszintű felépítése és növekedése',
                paragraphs: [
                  'A legtöbb gombafonalat nem valódi, elkülönült sejtek alkotják: a hifát csak helyenként tagolják keresztfalak (szeptumok), amelyeken pórusok maradnak, így a citoplazma - és gyakran a sejtmagok is - szabadon áramolhatnak a "rekeszek" között. Az ilyen felépítést cönocitikus felépítésnek nevezzük - ez lényegesen eltér attól a sejtes felépítéstől, amit a legtöbb élőlénynél (pl. a fonalas zöldmoszatoknál) megszoktunk.',
                  'A hifa növekedése kizárólag a csúcsán történik (csúcsnövekedés): itt zajlik a legintenzívebb anyagszállítás és sejtfalépítés, míg a fonál idősebb, hátrébb eső szakaszai már nem növekednek tovább. Ez a növekedési mód teszi lehetővé, hogy a gomba rendkívül gyorsan és hatékonyan terjeszkedjen egy új tápanyagforrás (pl. egy darab kenyér) belsejében.',
                  'A fonalas gombák szaporodása lehet ivartalan (a hifák végén képződő spóratokokban, mitózissal keletkező spórákkal, ahogy azt középszinten megismertük) vagy ivaros: a peronoszpóránál például két, genetikailag eltérő hifa találkozásakor vastag falú, ellenálló ivaros spórák (petespórák) képződnek, amelyek akár évekig is életképesek maradhatnak a talajban, mielőtt kedvező körülmények között kicsíráznának.',
                ],
              },
            ],
            keyTerms: ['cönocitikus felépítés', 'csúcsnövekedés', 'petespóra'],
          },
        },
      },
      {
        id: 'teleptest-alszovet',
        title: 'Teleptest és álszövet',
        order: 6,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'A korábban (A gombák, növények, állatok elkülönülése fejezet) megismert teleptest fogalmát ebben a fejezetben konkrét példákon - moszatokon, gombákon és mohákon - mélyítjük el, majd megvizsgáljuk, hogyan jelenik meg egy hasonlóan egyszerű, még nem szövetes testfelépítés az állatvilágban (szivacsok), végül egy különösen fontos, biztonsági szempontból kritikus gombafajjal, a gyilkos galócával ismerkedünk meg.',
            sections: [
              {
                heading: 'Teleptestes szerveződés a moszatok és a gombák világában',
                paragraphs: [
                  'A teleptestes szerveződés - ahogy azt korábban megismertük - az egysejtű és a valódi, szövetes többsejtű szerveződés közötti átmeneti forma: a sejtek között már van bizonyos munkamegosztás, de valódi, egységes eredetű, differenciálódott szövetek még nem alakulnak ki. A vörös-, barna- és zöldmoszatok - hasonlóan a korábban (Egysejtű eukarióták fejezet) megismert egysejtű példákhoz - szintén a Protiszták országába tartoznak, annak ellenére, hogy testfelépítésük (teleptest) már összetettebb az egysejtű formáknál. A vörösmoszatok és a barnamoszatok szinte kizárólag tengeri élőlények, teleptestük gyakran méteres nagyságot is elérhet (pl. az óriás barnamoszatok), míg a zöldmoszatok - amelyeket korábban (Sejtfonalak fejezet) fonalas formájukban is megismertünk - édesvízben és tengerben egyaránt előfordulnak.',
                  'A kalapos gombák teleptestét (termőtestét) - amit köznyelvben "gombának" nevezünk - szintén nem valódi szövetek, hanem összefonódott hifák alkotják; ezt a szövetszerű, de nem valódi szövetből álló felépítést álszövetnek nevezzük. A termőtest feladata a spóraképzés és -szórás: a kalap alsó felén (lemezeken vagy csövecskékben) képződnek a spórák, amelyek innen szóródnak szét.',
                ],
              },
              {
                heading: 'A mohák testfelépítése',
                paragraphs: [
                  'A mohák - a teleptestes szerveződésnél már bonyolultabb, de a valódi szövetes növényeknél (harasztok, magvas növények) egyszerűbb testfelépítésű csoport - nem rendelkeznek valódi gyökérrel, csak rizoidoknak nevezett, egyszerű rögzítőképletekkel, és hiányzik belőlük a szállítószövet is - emiatt méretük néhány centiméterre korlátozódik.',
                  'Társulásokban gyakran úttörő (pionír) szerepet töltenek be: csupasz sziklafelszíneken, leégett területeken elsőként telepednek meg, elősegítve a talajképződést. A tőzegmohák (Sphagnum) kiemelkedő vízmegkötő képességükkel tőzeglápokat hoznak létre, amelyek jelentős szén-raktárak.',
                ],
              },
              {
                heading: 'A szivacsok: szövet nélküli testfelépítés az állatvilágban',
                paragraphs: [
                  'A szivacsok a korábban (A gombák, növények, állatok elkülönülése fejezet) bevezetett Állatok országának első konkrét képviselői ebben a tananyagban - rendszertani helyük a Szivacsok törzse (Porifera). Testüket pórusok hálózzák be, amelyeken keresztül vizet szűrnek át - ezt a folyamatot a testfalukat bélelő, ostoros gallérsejtek hajtják, amelyek egyúttal a vízáramban lévő táplálékrészecskéket fagocitózissal (ahogy azt az Egysejtű eukarióták fejezetben már megismertük) be is kebelezik.',
                  'A vázsejtek mésztűket, kovatűket vagy rugalmas fehérjerostokat választanak ki, amelyek megtartják a test alakját, az amőboid sejtek pedig - alakváltoztató mozgásukkal - a tápanyagokat szállítják a test különböző pontjaira. Bár ezek a sejttípusok már egyértelmű munkamegosztást mutatnak, a szivacsoknak sincsenek valódi, elkülönült szöveteik vagy szerveik.',
                ],
              },
              {
                heading: 'A gyilkos galóca: azonosítás és a mérgezés veszélyei',
                paragraphs: [
                  'A gyilkos galóca (Amanita phalloides) Magyarország egyik legveszélyesebb, halálosan mérgező gombafaja. Azonosítására szolgáló legfontosabb bélyegek: fehér lemezek, a tönk felső részén egy fehér gallér (gyűrű), a tönk alján pedig egy hüvelyszerű képlet (volva, "bocskor") - ezek együttes megléte a legbiztosabb figyelmeztető jel, függetlenül a kalap színétől, amely zöldes-olívától akár fehéresig is változhat.',
                  'A mérgezés különösen veszélyes, mert a tünetek (hasi görcs, hányás, hasmenés) csak jelentős késéssel, jellemzően 6-24 órával a fogyasztás után jelentkeznek - mire ezek megjelennek, a méreganyagok már felszívódtak, és súlyos, akár halálos máj- és vesekárosodást okozhatnak. Éppen ezért gomba gyűjtésekor és fogyasztásakor kiemelten fontos a biztos azonosítás.',
                ],
              },
              {
                heading: 'Gombák gyakorlati és ökológiai jelentősége, zuzmók',
                paragraphs: [
                  'Gombászáskor alapvető biztonsági szabály, hogy kizárólag olyan fajt szabad elfogyasztani, amelyet a gyűjtő teljes bizonyossággal felismer - kétség esetén (pl. a gyilkos galócához hasonló fajoknál) a gombát nem szabad megenni. A gombákat szellős, egymástól elkülönített csomagolásban (pl. kosárban, ne műanyag zacskóban) érdemes tárolni és minél előbb feldolgozni, mivel gyorsan romlanak.',
                  'A korábban (Sejtfonalak fejezet) megismert fonalas gombák gyakorlati jelentősége jelentős: a peronoszpóra és más növénykórokozó gombák elleni védekezés a mezőgazdaság állandó feladata, míg az ecsetpenészből (Penicillium) nyert penicillin az orvostudomány egyik legfontosabb felfedezése. A sütőélesztő - egy egysejtű gombafaj - anyagcseréje (erjedés) teszi lehetővé a kenyér és egyéb tésztafélék megkelesztését: az élesztő a lisztben lévő cukrokat erjeszti, és az eközben keletkező szén-dioxid-buborékok lazítják fel a tésztát - ez ugyanaz az erjedés, amit korábban (Lebontó folyamatok fejezet) az izomsejteknél már megismertünk, csak itt más szervezetnél és más gyakorlati célra.',
                  'A zuzmók nem önálló fajok, hanem egy gomba és egy alga (vagy cianobaktérium) szoros szimbiózisából létrejövő szervezetek: a gomba vázat és védelmet, az alga (fotoautotróf partnerként) szerves tápanyagot biztosít a közösségnek. A zuzmók rendkívül érzékenyek a levegőszennyezésre, ezért gyakoriságuk és állapotuk egy adott terület levegőminőségének megbízható biológiai indikátora (bioindikátor).',
                  'A gombák ökológiai szerepük szerint háromfélék lehetnek: lebontók (elhalt szerves anyagot bontanak le), paraziták (élő szervezeteken vagy azok belsejében élősködve táplálkoznak, kárt okozva a gazdaszervezetnek) és szimbionták (pl. a zuzmókban). Kézinagyítóval és mikroszkóppal vizsgálva a lombosmohák leveles szára és a zuzmók testfelépítése (a gomba- és algasejtek elrendeződése) egyaránt jól megfigyelhető és jellemezhető.',
                ],
              },
            ],
            keyTerms: ['teleptest', 'álszövet', 'rizoid', 'Szivacsok törzse', 'gallérsejt', 'vázsejt', 'amőboid sejt', 'gyilkos galóca', 'zuzmó', 'bioindikátor', 'parazita', 'sütőélesztő'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a mohák kétszakaszos egyedfejlődését (életciklusát) kell lépésről lépésre értelmezni, megérteni ennek fejlődéstörténeti jelentőségét, valamint összefüggésbe hozni a mohák testfelépítését a társulásokban elfoglalt helyükkel.',
            sections: [
              {
                heading: 'A mohák kétszakaszos egyedfejlődése',
                paragraphs: [
                  'A mohák életciklusában két, egymástól jól elkülönülő nemzedék váltja egymást - ezt korábban (A gombák, növények, állatok elkülönülése fejezet emelt része) generációváltakozásként ismertük meg. A szemmel is jól látható, zöld, leveles "mohapárnát" a haploid nemzedék, a gametofiton alkotja, amely ivarszerveket - petesejtet termelő archegóniumokat és ostoros hímivarsejtet termelő antheridiumokat - fejleszt.',
                  'A megtermékenyítéshez víz szükséges, mert az ostoros hímivarsejtnek úsznia kell az archegóniumban ülő petesejthez - ez magyarázza, hogy a mohák miért kötődnek szorosan a nedves élőhelyekhez. A megtermékenyítés eredményeként létrejövő diploid zigóta a gametofitonon marad, és ott fejlődik tovább a diploid nemzedékké, a sporofitonná (nyél és spóratok), amely tápanyagait is a gametofitontól kapja.',
                  'A sporofiton spóratokjában meiózissal haploid spórák keletkeznek, amelyek szétszóródva, kedvező körülmények között új gametofitonná csíráznak ki - ezzel a ciklus újrakezdődik. Fejlődéstörténeti szempontból különösen fontos, hogy a moháknál a haploid gametofiton a domináns, önállóan élő nemzedék, míg a diploid sporofiton attól függ - ez élesen elüt a később (Harasztok, Nyitvatermők, Zárvatermők fejezetek) megismerendő harasztoktól és magvas növényektől, amelyeknél éppen fordított a helyzet: a diploid sporofiton a domináns, önálló nemzedék.',
                ],
              },
              {
                heading: 'A mohák testfelépítése és társulásokban elfoglalt helye',
                paragraphs: [
                  'A mohák - a korábban középszinten megismert rizoidok és a hiányzó szállítószövet miatt - nem képesek a talajból hatékonyan vizet felvenni és azt a testükben nagy távolságra szállítani, ezért méretük néhány centiméterre korlátozódik, és jellemzően nedves, árnyékos élőhelyeken (erdők alján, sziklákon, lápokban) fordulnak elő.',
                  'Ez a testfelépítésbeli korlátozottság határozza meg a társulásokban elfoglalt helyüket is: a mohák jellemzően úttörő (pionír) fajok, amelyek elsőként telepednek meg csupasz, más növény számára még alkalmatlan felszíneken (sziklákon, leégett területeken), és ezzel elősegítik a talajképződést, megnyitva az utat a később megtelepedő, fejlettebb növények előtt.',
                ],
              },
            ],
            keyTerms: ['gametofiton', 'sporofiton', 'archegónium', 'antheridium'],
          },
        },
      },
      {
        id: 'harasztok',
        title: 'Harasztok',
        order: 7,
        isFree: false,
        estimatedMinutes: 14,
        content: {
          kozep: {
            intro: 'A korábban (Teleptest és álszövet fejezet) megismert mohák után a harasztokkal a Növények országának egy fejlettebb, már valódi szövetekkel és szervekkel rendelkező csoportját ismerjük meg - ez a fejezet azt mutatja be, milyen evolúciós "újítások" tették lehetővé a harasztok számára a hatékonyabb szárazföldi életmódot.',
            sections: [
              {
                heading: 'Szövetek és szervek megjelenése - a szállítószövet jelentősége',
                paragraphs: [
                  'A páfrányok, a zsurlók és a korpafüvek a Harasztok törzsén belüli, egymástól jól elkülöníthető alcsoportok - mindegyiküknél a spórákat termelő spóratartók (sporangiumok) jellemzően a levelek fonákján, kisebb csomókban helyezkednek el.',
                  'A harasztok - közéjük tartoznak a páfrányok, a zsurlók és a korpafüvek is - a mohákkal ellentétben már rendelkeznek valódi szállítószövettel, amely a vizet és a tápanyagokat szállítja a növény különböző részei között. Ez az evolúciós "újítás" teszi lehetővé, hogy a harasztok jóval magasabbra nőjenek, mint a szállítószövet nélküli mohák, hiszen a víz és a tápanyagok hatékonyan eljutnak a föld feletti, magasabban lévő részekhez is.',
                  'A szállítószövet megjelenésével együtt valódi szervek is kialakultak: a gyökér a vízfelvételt és a rögzítést végzi (sokkal hatékonyabban, mint a mohák egyszerű rizoidjai), a szár a szállítást biztosítja és a növényt magasba emeli, a levél pedig a fotoszintézis fő felülete. Ezekkel a szervekkel a harasztok - a mohákkal együtt - immár a Növények országának tagjai, de azon belül egy fejlettebb, szövetes csoportot alkotnak. Méretük és termetük fajonként igen változatos: az apró korpafüvektől egészen a trópusi, akár fákra hasonlító páfrányokig.',
                ],
              },
              {
                heading: 'Alkalmazkodás a szárazföldi élethez - és ami még hiányzik',
                paragraphs: [
                  'A hatékony vízszállítás és a magasabb növekedés jelentős versenyelőnyt biztosít a fényért folyó versengésben - ez magyarázza, hogy a harasztok miért képesek jóval nagyobb, összetettebb testet felépíteni, mint a mohák.',
                  'A harasztok szaporodása azonban még mindig nem teljesen független a víztől: bár szövetekkel és szervekkel rendelkeznek, spórákkal szaporodnak, és - a mohákhoz hasonlóan - az ostoros hímivarsejtnek a megtermékenyítéshez vízben kell úsznia a petesejthez. Emiatt a harasztok is jellemzően nedves élőhelyekhez (pl. erdők aljához, patakpartokhoz) kötődnek - a víztől teljesen független szaporodás majd csak a következő fejezetben (Nyitvatermők) megismerendő magvas növényeknél jelenik meg.',
                  'A nagyobb, összetettebb levelek jóval nagyobb felületet biztosítanak a korábban (Fotoszintézis fejezet) megismert fényszakasz és Calvin-ciklus számára, mint a mohák egyszerű, szövetek nélküli "levélkéi" - ez tovább növeli a harasztok energiatermelő hatékonyságát, és hozzájárul ahhoz, hogy nagyobb testet tudjanak felépíteni és fenntartani.',
                ],
              },
              {
                heading: 'Rendszertani hely és evolúciós jelentőség',
                paragraphs: [
                  'A harasztok - a mohákhoz hasonlóan - a Növények országába tartoznak, de a szövetek és szervek megjelenése miatt már önálló, fejlettebb csoportot alkotnak. Mintegy 400 millió évvel ezelőtt jelentek meg, és a szénkorszakban (kb. 300 millió évvel ezelőtt) a Föld első nagy kiterjedésű erdőit alkották - a ma ismert kőszéntelepek jelentős része ezekből az óriási, elpusztult haraszterdőkből képződött.',
                  'A kőszén elsősorban azért képződhetett ezekből az ősi haraszterdőkből, mert az akkori mocsaras környezetben az elhalt növényi anyag nem tudott teljesen lebomlani, hanem évmilliók alatt, nyomás és hő hatására szénné alakult át - ez az emberiség egyik legfontosabb fosszilis energiaforrásának eredete.',
                ],
              },
            ],
            keyTerms: ['haraszt', 'szállítószövet', 'páfrány', 'zsurló', 'korpafű'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a harasztok és a - később (Zárvatermők fejezet) részletesen megismerendő - zárvatermők kétszakaszos egyedfejlődését kell összehasonlítani, különös tekintettel a haploid és a diploid szakasz egymáshoz viszonyított arányára és ennek fejlődéstörténeti jelentőségére.',
            sections: [
              {
                heading: 'A haploid és a diploid szakasz aránya a harasztoknál és a zárvatermőknél',
                paragraphs: [
                  'A korábban (Teleptest és álszövet fejezet) megismert moháknál a haploid gametofiton volt a domináns, szemmel is jól látható nemzedék. A harasztoknál ez az arány megfordul: a jól ismert, leveles, gyökeres haraszt-növény már a diploid sporofiton, a haploid gametofiton pedig egy apró, rövid életű, gyakran csak néhány milliméteres képlet (előtenyész), amely a talaj felszínén fejlődik ki a kicsírázott spórából, és csak az ivarszerveket (archegónium, antheridium) hordozza.',
                  'A megtermékenyítéshez a harasztoknál is - a moháknál megismerthez hasonlóan - víz szükséges, hiszen az apró gametofitonon termelődő ostoros hímivarsejtnek úsznia kell a petesejthez. A megtermékenyítés után a zigótából fejlődik ki az immár domináns, jól látható, diploid sporofiton - ez a haraszt-növény, amelyet a mindennapokban "harasztként" ismerünk.',
                  'A zárvatermőknél ez a folyamat a legszélsőségesebb: a haploid szakasz olyannyira lecsökken, hogy már nem is önálló, szabadon élő képlet, hanem a diploid sporofiton (a virágos növény) testén belül, védett környezetben fejlődik ki néhány sejtből álló formában - ezzel a víztől teljesen független megtermékenyítés is lehetővé válik. Fejlődéstörténeti szempontból ez a tendencia (a haploid szakasz fokozatos visszaszorulása, a diploid szakasz egyre nagyobb dominanciája) jól mutatja a szárazföldi növények evolúciójának egyik fő irányát: a szaporodás egyre inkább függetlenedik a víztől, miközben a fiatal utódot (embriót) egyre hatékonyabban védi és táplálja az anyanövény.',
                ],
              },
            ],
            keyTerms: ['előtenyész'],
          },
        },
      },
      {
        id: 'nyitvatermok',
        title: 'Nyitvatermők',
        order: 8,
        isFree: false,
        estimatedMinutes: 14,
        content: {
          kozep: {
            intro: 'A korábban (Harasztok fejezet) megismert, még vízhez kötött szaporodású harasztok után a nyitvatermőkkel (pl. fenyőkkel) a magvas növények első csoportját ismerjük meg - ez a fejezet két olyan evolúciós "újítást" mutat be, amelyek végleg függetlenítik a szaporodást a víztől.',
            sections: [
              {
                heading: 'A mag: az embrió védelme és tartalék tápanyaga',
                paragraphs: [
                  'A nyitvatermőknél jelenik meg először a mag, amely a harasztok spórájánál sokkal ellenállóbb és "felkészültebb" szaporítóképlet: a magban lévő embriót védőburok veszi körül, és tartalék tápanyag is kíséri, amely a csírázás kezdeti szakaszában táplálja a fejlődő növénykét. A magkezdemény kívülről nincs körülzárva magházzal - innen ered a csoport neve is: nyitvatermő.',
                  'A spórával szemben a mag jelentős előnye, hogy az embrió a tartalék tápanyagnak köszönhetően akár hosszú, kedvezőtlen időszakokat (pl. szárazságot, telet) is túlélhet nyugalmi állapotban, és csak akkor csírázik ki, amikor a környezeti feltételek ismét kedvezővé válnak - ez sokkal nagyobb túlélési esélyt biztosít, mint a harasztok apró, tartalék tápanyag nélküli spórái.',
                  'A nyitvatermők jellegzetes szaporítóképletei a tobozok: a hímtobozokban termelődik a pollen (a hímivarsejtet tartalmazó, szél által terjesztett képlet), a nőtobozokban pedig a magkezdemények találhatók. Fontos pontosítani, hogy ez még nem a szó szoros értelmében vett virág - a valódi virágot a következő fejezetben (Zárvatermők) megismerendő csoport "találja fel". Az érettségi anyagok néha lazábban, "virágként" is hivatkoznak a tobozra - ha egy feladatban ezzel a szóhasználattal találkozol, tudd, hogy az valójában a tobozra vonatkozik.',
                ],
              },
              {
                heading: 'A víztől független szaporodás',
                paragraphs: [
                  'A pollen szél általi terjedése (szélbeporzás) kiváltja azt, hogy a hímivarsejtnek - ahogy azt a harasztoknál megismertük - vízben kellene úsznia a petesejthez: a pollenszem a levegőben jut el a nőtobozig, ahol egy pollentömlő nő ki belőle, és ezen keresztül jut el a hímivarsejt közvetlenül a petesejthez. Ez az evolúciós "újítás" teszi lehetővé, hogy a nyitvatermők a harasztoknál jóval szárazabb, kedvezőtlenebb élőhelyeken (pl. hegyvidéki, hideg vagy száraz területeken) is elterjedjenek.',
                  'A legtöbb nyitvatermő (pl. a fenyők) tűlevelű és örökzöld: a levelek kisebb felülete csökkenti a párologtatás mértékét, ami szintén hozzájárul a szárazabb, hidegebb élőhelyekhez való alkalmazkodáshoz. Jellegzetes hazai és világszerte elterjedt képviselőik az erdeifenyő, a lucfenyő és a jegenyefenyő, de ide tartozik az élő fosszíliaként is emlegetett ginkgo is.',
                ],
              },
              {
                heading: 'Rendszertani hely és jelentőségük',
                paragraphs: [
                  'A nyitvatermők a Növények országán belül önálló törzset alkotnak, és mintegy 300 millió évvel ezelőtt jelentek meg - hosszú ideig, a dinoszauruszok korában ők voltak a szárazföld domináns növényei, mielőtt a később (Zárvatermők fejezet) megismerendő zárvatermők átvették volna vezető szerepüket.',
                  'Gazdasági jelentőségük ma is jelentős: a fenyőerdők faanyaga az egyik legfontosabb nyersanyag az építőiparban és a papírgyártásban, tűlevelük pedig illóolajokat is tartalmaz, amelyeket többek között a gyógyászatban is felhasználnak. Örökzöld jellegük miatt télen is jelentős szerepet töltenek be az erdei életközösségek táplálék- és élőhelykínálatában.',
                ],
              },
            ],
            keyTerms: ['nyitvatermő', 'mag', 'toboz', 'pollen', 'szélbeporzás'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes mélyebben megismerni, milyen sejtszintű változás tette lehetővé a mag kialakulását: a heterospóriát.',
            sections: [
              {
                heading: 'Heterospória: az út a maghoz',
                paragraphs: [
                  'A harasztok - ahogy azt korábban megismertük - egyetlen típusú spórát termelnek, amelyből egy önálló, mindkét ivarszervet (archegónium és antheridium) hordozó előtenyész fejlődik. A nyitvatermőknél ezzel szemben két, egymástól méretben és funkcióban is eltérő spóratípus alakul ki: ezt a jelenséget heterospóriának nevezzük.',
                  'A kisebb mikrospórákból fejlődik ki a hím gametofiton (amely végül a pollenszemet alkotja), a nagyobb megaspórákból pedig a nő gametofiton, amely a magkezdeményen belül, védett környezetben marad, és soha nem válik önálló, szabadon élő képletté - ellentétben a harasztok előtenyészével. Ez a védett, a sporofitonon belül maradó női gametofiton az, amelyből végül a megtermékenyítés után a mag embriója és a magban tárolt tartalék tápanyag kialakul.',
                ],
              },
            ],
            keyTerms: ['heterospória', 'mikrospóra', 'megaspóra'],
          },
        },
      },
      {
        id: 'zarvatermok',
        title: 'Zárvatermők',
        order: 9,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Egyszikűek', 'Kétszikűek'],
          rows: [
            ['Sziklevél száma', '1', '2'],
            ['Levélerezet', 'párhuzamos', 'hálózatos'],
            ['Gyökérzet', 'szárgyökérrendszer', 'karógyökér'],
            ['Példa', 'gabonafélék, liliomfélék', 'hüvelyesek, gyümölcsfák'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Nyitvatermők fejezet) megismert magvas növények után a zárvatermőkkel a növényvilág legelterjedtebb, legváltozatosabb csoportját ismerjük meg - ez a fejezet azokat az újabb evolúciós "újításokat" mutatja be, amelyek a zárvatermőket a nyitvatermőknél is hatékonyabb versenyzővé teszik a fényért és a vízért folyó küzdelemben.',
            sections: [
              {
                heading: 'A virág és a zárt magház',
                paragraphs: [
                  'A zárvatermőknél jelenik meg először a valódi virág, amelynek része a takarólevelek (a csésze- és a sziromlevelek), amelyek védik a fejlődő ivarszerveket, és sok esetben - feltűnő színükkel, illatukkal - beporzó rovarokat vonzanak, hatékonyabbá téve a beporzást a korábban (Nyitvatermők fejezet) megismert szélbeporzásnál.',
                  'A virág termőjének felső, ragadós felszíne a bibe, amely megköti a ráhulló pollent. A magkezdemény itt - szemben a nyitvatermőkkel - zárt magházban fejlődik, amely védi a fejlődő magot, majd a megtermékenyítés után maga is átalakul: ez adja a termést.',
                  'Bár a virág elsősorban a rovarok általi beporzáshoz alkalmazkodott, egyes zárvatermők (pl. a fűfélék, a nyír vagy a tölgy) visszatértek a szélbeporzáshoz - az ő virágaik jellemzően feltűnés nélküliek, illat és színes szirmok nélküliek, hiszen nem kell beporzó állatokat vonzaniuk.',
                ],
              },
              {
                heading: 'A termés szerepe és a magterjesztés stratégiái',
                paragraphs: [
                  'A termés biológiai szerepe a magok védelme és terjesztésének elősegítése. A magterjesztésnek több stratégiája is kialakult: egyes termések húsosak, édesek (pl. a bogyók) - ezeket az állatok megeszik, a bennük lévő magok pedig sértetlenül áthaladnak az emésztőrendszeren, és az ürülékkel távol a szülőnövénytől jutnak új élőhelyre.',
                  'Más termések szél általi terjedésre specializálódtak (pl. repülőszőrök, szárnyak), míg megint mások horgas, tapadós felszínükkel az állatok szőrébe vagy tollazatába kapaszkodva jutnak el új helyekre. Ez a sokféleség jól mutatja, hogy a termés nem csupán a mag védelmét szolgálja, hanem aktívan hozzájárul a faj elterjedéséhez is.',
                ],
              },
              {
                heading: 'Szállítócsövek, gyökérszőrök és a Növényismeret könyv használata',
                paragraphs: [
                  'A zárvatermők fejlettebb szállítószövete (a szállítócsövek) hatékonyabban juttatja el a vizet és a tápanyagokat a növény minden részéhez, mint a nyitvatermők szállítószövete - ez teszi lehetővé, hogy a zárvatermők között rendkívül magas fák (pl. tölgyek, bükkök) is kialakulhassanak - ami egyben versenyelőnyt is jelent a fényért folyó küzdelemben, hiszen a magasabbra növő egyedek jutnak több napfényhez. A gyökérszőrök - a gyökér felszínét beborító apró, hajszálvékony sejtnyúlványok - jelentősen megnövelik a gyökér felszínét, ezáltal hatékonyabbá téve a vízfelvételt a talajból, versenyelőnyt biztosítva a vízért folyó küzdelemben.',
                  'Egy adott terület növényeinek megismeréséhez, illetve élőhelyi és ökológiai igényeik jellemzéséhez a Növényismeret könyv (határozókönyv) használata nyújt segítséget - ez a gyakorlati készség lehetővé teszi, hogy a diák önállóan azonosítsa a környezetében élő fajokat, és jellemezze azok élőhelyi igényeit.',
                ],
              },
              {
                heading: 'A zárvatermők sikere és sokfélesége',
                paragraphs: [
                  'A zárvatermők a Növények országán belül a legfiatalabb, de ma messze a legelterjedtebb és legváltozatosabb törzset alkotják: mintegy 250 000 ismert fajukkal a szárazföldi növényvilág túlnyomó többségét ők teszik ki. Sikerességük hátterében éppen az ebben a fejezetben megismert evolúciós újítások (hatékony beporzás, gyors és sokféle magterjesztés, fejlett szállítószövet) állnak.',
                ],
              },
            ],
            keyTerms: ['virág', 'takarólevél', 'bibe', 'zárt magház', 'termés', 'szállítócső', 'gyökérszőr'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos, kettős megtermékenyítésre vonatkozó emelt szintű követelmény külön fejezetben (Kettős megtermékenyítés) kerül feldolgozásra - itt egy másik, a zárvatermők sokféleségét megalapozó kérdést járunk körül: mi különbözteti meg egymástól a zárvatermők két nagy csoportját, az egyszikűeket és a kétszikűeket.',
            sections: [
              {
                heading: 'Egyszikűek és kétszikűek',
                paragraphs: [
                  'A zárvatermők két nagy csoportra oszthatók aszerint, hogy a mag embriója hány sziklevelet (az embrió első, tartalék tápanyagot felhasználó levélkéjét) tartalmaz: az egyszikűeknél (pl. gabonafélék, hagymafélék, liliomfélék) egy, a kétszikűeknél (pl. a legtöbb gyümölcsfa, hüvelyesek, összetettvirágzatúak) két sziklevél fejlődik.',
                  'A két csoport a levél erezetében is jellemzően eltér: az egyszikűeknél a levélerek párhuzamosan futnak, a kétszikűeknél hálózatosan elágaznak. A gyökérzet felépítése is különbözik: az egyszikűek jellemzően szárgyökérrendszert (sok, hasonló vastagságú gyökeret) fejlesztenek, míg a kétszikűeknél gyakran karógyökér (egy központi, vastag főgyökér és belőle kiinduló oldalgyökerek) alakul ki.',
                ],
              },
            ],
            keyTerms: ['egyszikű', 'kétszikű', 'sziklevél'],
          },
        },
      },
      {
        id: 'kettos-megtermekenyites',
        title: 'Kettős megtermékenyítés',
        order: 10,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Zárvatermők fejezet) megismert zárvatermőknél a megtermékenyítés különleges, kettős folyamat - ez a fejezet lépésről lépésre mutatja be, hogyan jön létre egyetlen pollentömlőben szállított két spermasejtből egyszerre az embrió és a magot tápláló szövet.',
            sections: [
              {
                heading: 'A pollentömlő és a két spermasejt útja',
                paragraphs: [
                  'A bibére hulló pollenszem kicsírázik, és egy hosszú pollentömlőt növeszt, amely a bibeszálon keresztül lenő egészen a magházban lévő magkezdeményig. A pollentömlőben két spermasejt (hímivarsejt) utazik a magkezdeményhez.',
                  'A magkezdeményben található az embriózsák, amelyben - a petesejt mellett - egy különleges, két sejtmagot (poláris magvakat) tartalmazó központi sejt is található. Amikor a pollentömlő eléri az embriózsákot, mindkét spermasejt egyszerre, két külön megtermékenyítési eseményben vesz részt.',
                ],
              },
              {
                heading: 'A két megtermékenyítés: embrió és endospermium',
                paragraphs: [
                  'Az egyik spermasejt a petesejttel egyesül, létrehozva a diploid zigótát, amelyből a mag embriója fejlődik ki - ez a "hagyományos" megtermékenyítés, amit már a korábban (Osztódás fejezet) megismert állati megtermékenyítésnél is láttunk.',
                  'A másik spermasejt ezzel egy időben a központi sejt két poláris magjával olvad össze - mivel itt egy haploid spermasejt (n) két haploid poláris maggal (n+n) egyesül, egy különleges, hármas kromoszómakészletű (triploid, 3n) sejtmag jön létre. Ebből fejlődik ki az endospermium, a mag tápanyag-raktározó szövete, amely az embriót táplálja a csírázás kezdeti szakaszában.',
                ],
              },
              {
                heading: 'Miért "kettős" ez a megtermékenyítés, és miért előnyös?',
                paragraphs: [
                  'A folyamatot azért nevezzük kettős megtermékenyítésnek, mert egyetlen pollentömlő két külön megtermékenyítési eseményt indít el egyszerre: az egyik az embriót, a másik a tápanyagraktárt (endospermiumot) hozza létre.',
                  'Ez energetikailag hatékonyabb stratégia, mint amit a korábban (Nyitvatermők fejezet) megismert nyitvatermőknél láttunk: ott a tápanyagot tároló szövet már a megtermékenyítés ELŐTT kialakul a magkezdeményben, függetlenül attól, hogy egyáltalán sikerül-e a megtermékenyítés. A zárvatermőknél ezzel szemben a tápszövet (endospermium) csak a sikeres megtermékenyítés eredményeként jön létre - így a növény nem "pazarolja" az energiát olyan magkezdeményekre, amelyek végül nem termékenyülnek meg.',
                  'A folyamat mindössze néhány óra alatt lezajlik, miután a pollentömlő elérte az embriózsákot - ez a gyorsaság is hozzájárul ahhoz, hogy a zárvatermők rendkívül hatékonyan tudjanak szaporodni.',
                ],
              },
              {
                heading: 'Az endospermium jelentősége az emberi táplálkozásban',
                paragraphs: [
                  'Az endospermium nemcsak a csírázó növény számára fontos tápanyagraktár, hanem az emberi táplálkozásban is kiemelkedő szerepet játszik: a gabonaszemek (pl. a búza, a rizs, a kukorica) nagy részét maga az endospermium alkotja, amely keményítőben gazdag, és a liszt fő alapanyagát adja.',
                  'A kettős megtermékenyítés jelenségét 1898-ban Szergej Nawaschin orosz botanikus fedezte fel és írta le először - ez a felfedezés fontos mérföldkő volt a növényi szaporodásbiológia történetében, hiszen megmutatta, hogy a zárvatermők szaporodása alapvetően eltér minden korábban ismert élőlénycsoportétól.',
                ],
              },
            ],
            keyTerms: ['pollentömlő', 'embriózsák', 'poláris mag', 'endospermium', 'triploid'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a triploid endospermium genetikai sajátosságait és a jelenség növénynemesítési, gyakorlati alkalmazásait érdemes mélyebben megismerni.',
            sections: [
              {
                heading: 'A triploiditás genetikai sajátosságai és gyakorlati jelentősége',
                paragraphs: [
                  'A triploid (3n) endospermium genetikailag különleges: mivel két poláris mag (amelyek ugyanannak az embriózsáknak, tehát ugyanannak az anyanövénynek a sejtmagjai) és egy apai eredetű spermasejt egyesüléséből jön létre, az endospermium genetikai állományának kétharmada anyai, egyharmada apai eredetű - ez eltér a zigóta (és a belőle fejlődő embrió) 50-50%-os arányától.',
                  'A triploid sejtek jellegzetessége, hogy páratlan kromoszómakészlettel rendelkeznek, ami miatt nem képesek szabályos meiózisra - az endospermium emiatt önmagában nem szaporodóképes szövet, kizárólag tápanyag-raktározó funkciót lát el. Ezt a tulajdonságot a növénynemesítésben is kihasználják: egyes magvatlan gyümölcsök (pl. bizonyos magvatlan görögdinnye-fajták) mesterségesen előidézett triploid növényekből származnak, amelyek - éppen a szabálytalan meiózis miatt - nem képesek életképes magot érlelni.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'szivacsok',
        title: 'Szivacsok',
        order: 11,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Teleptest és álszövet fejezet) megismert szivacsok testfelépítését ebben a fejezetben az állatvilág rendszeres bemutatásának első állomásaként, valamennyi életműködés szempontjából mélyítjük el - a szivacsok a legegyszerűbb testfelépítésű állatok, ezért esetükben számos életműködés hiánya éppúgy tanulságos, mint a jelenléte.',
            sections: [
              {
                heading: 'Testfelépítés és kültakaró',
                paragraphs: [
                  'A szivacsok teste - ahogy azt korábban megismertük - pórusokkal átjárt, zsákszerű forma, amelynek belsejében egy központi üreg (spongocoel) található; az ide beáramló, megszűrt vizet a test tetején lévő nagyobb nyíláson (oscŭlum) keresztül lövellik ki. Testük aszimmetrikus vagy csak sugarasan szimmetrikus, és - mivel nincsenek valódi szöveteik - külső rétegüket (kültakarójukat) egyszerű, laposhám-szerű sejtréteg alkotja.',
                ],
              },
              {
                heading: 'Életműködések: amik hiányoznak, és amik jelen vannak',
                paragraphs: [
                  'A szivacsok felnőtt formájukban helyhez kötöttek (szesszilisek): nincs önálló mozgásra képes izomszövetük, egész életüket egy adott ponthoz rögzülve töltik - egyedül a szabadon úszó, ostoros lárvaállapotuk képes helyváltoztatásra. A lárva rövid ideig (néhány órától néhány napig) tartó vándorlás után egy alkalmas felszínhez rögzül, és csak ekkor alakul át a jellegzetes, helyhez kötött felnőtt formává. Táplálkozásukat és a vízáramlás keltését - ahogy azt korábban megismertük - a gallérsejtek végzik, önálló légzőszervük és keringési rendszerük nincs: a gázcsere egyszerű diffúzióval zajlik, a tápanyagokat pedig az amőboid sejtek szállítják sejtről sejtre.',
                  'Idegrendszerük és érzékszervük sincs: az egyes sejtek önállóan reagálhatnak ingerekre, de nincs olyan összehangoló rendszer, amely az egész testet egységes válaszra késztetné. Szaporodásuk kétféle lehet: ivartalanul bimbózással (rügyezéssel) új egyedeket hozhatnak létre, ivarosan pedig - mivel a legtöbb faj hímnős (egy egyeden belül mindkét ivarsejttípus termelődik) - ivarsejteket bocsátanak a vízbe, ahol a megtermékenyítés végbemegy.',
                ],
              },
              {
                heading: 'Kapcsolat a környezettel',
                paragraphs: [
                  'A szivacsok kizárólag vízi (túlnyomórészt tengeri, néhány fajuk édesvízi) élőlények, hiszen táplálkozásuk és gázcseréjük is a vízáramláson alapul. Kiemelkedő regenerációs képességgel rendelkeznek: ha testük egy darabja leválik vagy szétesik, abból akár egy teljesen új egyed is kifejlődhet - ez a tulajdonság a legtöbb állatcsoportnál sokkal korlátozottabb. Méretük rendkívül változatos: néhány milliméteres formáktól a két métert is elérő óriás szivacsokig terjed.',
                ],
              },
              {
                heading: 'A szivacsok csoportosítása és gyakorlati jelentőségük',
                paragraphs: [
                  'A szivacsokat vázuk anyaga szerint csoportosíthatjuk: a mészszivacsok mésztűkből, az üvegszivacsok kovatűkből, a szarúszivacsok pedig rugalmas fehérjerostokból (spongin) építik fel vázukat. Ez utóbbi csoport képviselői (pl. a mosdószivacs) régóta ismertek az emberi felhasználásban is: természetes vázukat egykor tisztálkodásra és festékfelvitelre használták, mára azonban ezt a szerepet többnyire szintetikus szivacsok vették át.',
                  'A szivacsok fontos szerepet töltenek be a tengeri életközösségekben is: hatékony vízszűrő képességük hozzájárul a víz tisztításához, üregeik pedig számos más tengeri állatnak (pl. rákoknak, férgeknek) nyújtanak búvóhelyet - ez a fajta együttélés jó példa arra, hogyan alakíthat ki egy helyhez kötött, egyszerű testfelépítésű élőlény is összetett kapcsolatokat a környezetében élő más fajokkal.',
                ],
              },
            ],
            keyTerms: ['spongocoel', 'oscŭlum', 'szesszilis', 'hímnős', 'mészszivacs', 'üvegszivacs', 'szarúszivacs'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szivacsok testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni - vagyis azt, hogy mi különbözteti meg őket a korábban megismert, még nem állati szerveződési formáktól.',
            sections: [
              {
                heading: 'A szivacsok evolúciós újítása: a sejtszintű munkamegosztás',
                paragraphs: [
                  'A szivacsoknál jelenik meg először az állatvilágban a sejtszintű differenciálódás: a test különböző funkciókra specializálódott sejttípusokból épül fel (gallérsejt, vázsejt, amőboid sejt, kültakaró-sejt) - ez az evolúciós újítás önmagában is jelentős előrelépés az egysejtű eukariótákhoz és a teleptestes szerveződésű élőlényekhez képest, hiszen lehetővé teszi, hogy különböző sejtek különböző feladatokat lássanak el egyetlen testen belül.',
                  'Ugyanakkor a szivacsok testfelépítése még nem éri el a valódi szövetes szerveződés szintjét: a differenciálódott sejtek nem szerveződnek egységes eredetű, összehangoltan működő szövetekké, és nincs idegrendszerük sem, amely az egyes sejtek működését koordinálná. Ez a "hiányzó láncszem" jelöli ki a következő fejezetekben (Csalánozók, Laposférgek) megismerendő állatcsoportok fő evolúciós előrelépését: a valódi szövetek és az első idegsejtek megjelenését.',
                  'A gallérsejtek szerkezete és működése rendkívül hasonlít a korábban (Egysejtű eukarióták fejezet) megismert egysejtű, ostoros protisztákéhoz - ez a hasonlóság az egyik legerősebb bizonyíték amellett, hogy a többsejtű állatok evolúciósan egy hasonló, ostoros egysejtű ősből alakulhattak ki, amelynek sejtjei fokozatosan differenciálódtak és specializálódtak.',
                  'A szivacsok kiemelkedő regenerációs képességének hátterében differenciálatlan, ún. archeociták állnak: ezek a sejtek bármelyik specializált sejttípussá (gallérsejtté, vázsejtté, amőboid sejtté) képesek átalakulni, hasonlóan ahhoz, ahogy az emberi szervezet őssejtjei is különböző sejttípusokká fejlődhetnek. Ez a rugalmasság teszi lehetővé, hogy egy szétesett vagy szétvágott szivacs testrészből akár egy teljesen új, működőképes egyed regenerálódjon.',
                  'A szivacsokat éppen a valódi szövetek hiánya miatt sorolják a Parazoa ("féligállatok") csoportjába, szemben minden más állattörzzsel, amelyek Eumetazoának ("valódi állatoknak") számítanak, mivel rendelkeznek valódi szövetekkel és - legalábbis egyszerű formában - idegrendszerrel. Ez az alapvető megkülönböztetés jelöli ki a következő fejezetben (Csalánozók) tárgyalandó nagy evolúciós ugrást.',
                ],
              },
            ],
            keyTerms: ['archeocita', 'Parazoa', 'Eumetazoa'],
          },
        },
      },
      {
        id: 'csalanozok',
        title: 'Csalánozók',
        order: 12,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Szivacsok fejezet) megismert Parazoa csoport után a csalánozókkal (pl. hidra, medúzák, korallok) az Eumetazoák, vagyis a valódi szövetekkel rendelkező állatok első képviselőit ismerjük meg - ez a csoport nem szerepel a hivatalos érettségi követelmény listáján, de a szivacsok és a laposférgek közötti evolúciós lépés megértéséhez fontos áthidaló pont. A csalánozók az Állatok országán belül a Csalánozók törzsét (Cnidaria) alkotják, és kizárólag vízi, túlnyomórészt tengeri élőlények, bár néhány fajuk (pl. a hidra) édesvízben is előfordul.',
            sections: [
              {
                heading: 'Testfelépítés: sugaras szimmetria és a bélüreg',
                paragraphs: [
                  'A csalánozók teste - a szivacsokkal ellentétben - már valódi szövetekből épül fel, de csak két csíralemezből (diploblasztikus szerveződés): egy külső sejtrétegből (ektoderma) és egy belső sejtrétegből (entoderma), közöttük egy kocsonyás rétegecskével (mezoglea). Testük sugarasan szimmetrikus: a test középpontján átmenő bármely tengely mentén egyforma félre osztható - ez az első szimmetriaforma, amellyel az állatvilágban találkozunk.',
                  'Két alapvető testformájuk van: a polip (helyhez kötött, pl. a hidra vagy a tengeri rózsák) és a medúza (szabadon úszó, pl. a tűzmedúza). Mindkét forma középpontjában egyetlen nyílással rendelkező bélüreg (gastrovascularis üreg) található, amely egyszerre szolgál szájnyílásként és végbélnyílásként is.',
                ],
              },
              {
                heading: 'Táplálkozás és a csalánsejtek',
                paragraphs: [
                  'A csalánozók ragadozó életmódot folytatnak: tapogatóikon elhelyezkedő csalánsejtek (nematociszták) segítségével bénítják meg vagy ölik meg zsákmányukat - ezekben a sejtekben egy méreganyaggal töltött, spirálisan feltekeredett tű található, amely érintésre kilövell. Innen ered a csoport neve is.',
                  'A megbénított zsákmányt a tapogatók a szájnyíláson át a bélüregbe juttatják, ahol emésztőenzimek részlegesen lebontják, majd a sejtek fagocitózissal veszik fel a még meg nem emésztett táplálékrészecskéket - a bélüregben tehát sejten kívüli és sejten belüli emésztés egyaránt zajlik.',
                ],
              },
              {
                heading: 'Idegrendszer, mozgás és szaporodás',
                paragraphs: [
                  'A csalánozóknál jelennek meg először az állatvilágban a valódi idegsejtek, amelyek egy egyszerű, az egész testet behálózó ideghálózatot (nem központosított agyat vagy idegdúcot) alkotnak - ez teszi lehetővé, hogy a test összehangoltan reagáljon az ingerekre, például egyszerre húzza össze tapogatóit veszély esetén.',
                  'A polipformák helyhez kötöttek, a medúzaformák pedig a testfaluk ritmikus összehúzásával, sugárhajtásszerűen úsznak. Sok fajnál nemzedékváltakozás figyelhető meg a polip és a medúza alak között: a polip ivartalanul (bimbózással) medúzákat hoz létre, a medúzák pedig ivarosan szaporodnak, és az utódból ismét polip fejlődik.',
                ],
              },
              {
                heading: 'Ökológiai és gyakorlati jelentőségük',
                paragraphs: [
                  'A korallok kolóniában élő polipok, amelyek mészvázat választanak ki maguk köré - ezek a vázak generációkon át felhalmozódva hozzák létre a korallzátonyokat, a tengeri élővilág egyik legfajgazdagabb élőhelyét. A korallzátonyok pusztulása (pl. a tengervíz felmelegedése vagy elsavasodása miatt) súlyos következményekkel jár a rájuk épülő életközösségek számára.',
                  'Egyes csalánozók (pl. a tűzmedúza vagy egyes korallok) csípése, illetve érintése az emberre nézve is veszélyes lehet: a csalánsejtek mérge fájdalmas, allergiás reakciót vagy - ritkán, néhány trópusi fajnál - akár életveszélyes tüneteket is okozhat.',
                ],
              },
            ],
            keyTerms: ['Csalánozók törzse', 'csalánsejt', 'polip', 'medúza', 'bélüreg', 'ektoderma', 'entoderma', 'diploblasztikus'],
          },
          emeltExtra: {
            intro: 'Bár ez a fejezet nem szerepel a hivatalos érettségi követelményben, érdemes az itt megismert testfelépítést a szivacsokéval összehasonlítva megérteni, pontosan milyen evolúciós újítások jelennek meg először a csalánozóknál.',
            sections: [
              {
                heading: 'Evolúciós újítások a szivacsokhoz képest',
                paragraphs: [
                  'A korábban (Szivacsok fejezet) megismert szivacsokhoz képest a csalánozóknál három alapvető evolúciós újítás jelenik meg egyszerre: a valódi szövetek (bár még csak két csíralemezből), a szervezett testszimmetria (sugaras szimmetria, szemben a szivacsok aszimmetrikus vagy csak részlegesen szimmetrikus testével), és a valódi idegsejtek megjelenése.',
                  'Az ideghálózat kialakulása kulcsfontosságú előrelépés: míg a szivacsoknál az egyes sejtek egymástól függetlenül reagáltak az ingerekre, a csalánozóknál már összehangolt, az egész testre kiterjedő válasz jöhet létre - ez teszi lehetővé például, hogy egy csalánozó egyetlen érintésre az egész testével (nem csak az érintett ponton) reagáljon, gyorsan összehúzva tapogatóit.',
                  'A sugaras szimmetria is funkcionális előny: mivel a csalánozók (különösen a polipformák) minden irányból érkező ingerre és zsákmányra egyformán "figyelnek", ez a testforma ideális a helyhez kötött vagy lassan mozgó, minden irányból táplálékra leső életmódhoz - ezzel szemben a később (Laposférgek fejezet) megismerendő kétoldali szimmetria már egy határozott mozgásirányhoz igazodó, fejlettebb testfelépítést tesz lehetővé.',
                ],
              },
            ],
            keyTerms: ['ideghálózat', 'sugaras szimmetria'],
          },
        },
      },
      {
        id: 'laposfergek',
        title: 'Laposférgek',
        order: 13,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Csalánozók fejezet) megismert sugaras szimmetriájú állatok után a laposférgekkel az első kétoldalian szimmetrikus állatcsoportot ismerjük meg - ez a fejezet valamennyi életműködés szempontjából bemutatja őket, kiemelt figyelmet fordítva egészségügyi jelentőségükre is.',
            sections: [
              {
                heading: 'Testfelépítés: kétoldali szimmetria és bőrizomtömlő',
                paragraphs: [
                  'A laposférgek három nagy csoportra oszthatók: az örvényférgek (pl. a planária) szabadon élnek, a mételyek és a galandférgek pedig élősködő életmódot folytatnak. Az Állatok országán belül a Laposférgek törzsét (Platyhelminthes) alkotják. Testük lapított, szalagszerű, és - a csalánozók sugaras szimmetriájával szemben - kétoldalian szimmetrikus: a test csak egyetlen síkban osztható két egyforma (tükörképi) félre. Ez a testforma teszi lehetővé az egyértelmű elülső-hátulsó, hasi-háti és jobb-bal irányok megkülönböztetését.',
                  'A laposférgeknél jelenik meg elsőként a valódi izomszövet: a bőr és az alatta lévő izomrétegek egybefonódva bőrizomtömlőt alkotnak, amely lehetővé teszi a test összehúzódását és a mozgást. Testükben nincs valódi testüreg - a szerveik közötti teret laza kötőszövet (parenchima) tölti ki.',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'A szabadon élő fajok (pl. a planária) csillós kúszással mozognak, és fejük végén egyszerű szemfoltokkal érzékelik a fényt, amelyek segítségével elkerülik az erős megvilágítást. Az élősködő fajok (pl. a mételyek, galandférgek) ezzel szemben tapadókorongokkal vagy horgokkal rögzülnek a gazdaszervezethez, és gyakran elvesztik mozgásszervüket is.',
                  'Táplálkozásuk és emésztésük a fajtól függ: a szabadon élő laposférgeknek elágazó, egyetlen nyílással rendelkező bélrendszerük van (hasonlóan a csalánozókéhoz), míg egyes élősködők (pl. a galandféreg) bélrendszer nélkül élnek - a gazda már megemésztett tápanyagát közvetlenül a testfelületükön keresztül szívják fel. Önálló légzőszervük nincs: a szabadon élők diffúzióval, az oxigénszegény bélben élő paraziták pedig jellemzően anaerob úton nyerik energiájukat.',
                  'Önálló keringési (anyagszállító) rendszerük sincs: mivel testük lapított és vékony, a korábban (Membránok szerepe fejezet) megismert diffúzió önmagában is elegendő ahhoz, hogy a tápanyagok és a gázok eljussanak a test minden sejtjéhez - ez az egyik fő oka annak, hogy a laposférgek teste miért maradt lapos és vékony, szemben a később (Gyűrűsférgek fejezet) megismerendő, már önálló keringési rendszerrel rendelkező, vaskosabb testű állatcsoportokkal.',
                  'A laposférgeknél jelenik meg elsőként egy valódi kiválasztószerv is: a láng-sejtekből (protonefridiumokból) álló, egyszerű csatornarendszer gyűjti össze és üríti ki a fölösleges anyagokat. Szaporodásuk jellemzően ivaros, és a legtöbb faj hímnős - egyes szabadon élő fajok (pl. a planária) emellett kiemelkedő regenerációs képességgel is rendelkeznek: ha testük egy darabra vágódik, minden egyes darabból önálló, teljes értékű egyed nőhet ki, mert a testükben szétszórtan elhelyezkedő, differenciálatlan sejtek (neoblasztok) bármelyik szövettípussá képesek átalakulni.',
                ],
              },
              {
                heading: 'Egészségügyi jelentőségük',
                paragraphs: [
                  'A laposférgek közül számos faj élősködik emberben vagy más gerincesekben, jelentős egészségügyi kockázatot jelentve. A galandférgek a vékonybélben élnek, és a nem megfelelően hőkezelt hús fogyasztásával kerülhetnek az emberi szervezetbe; a mételyek pedig gyakran szennyezett vízzel vagy alulfőzött halhússal terjednek.',
                  'A galandféreg-fertőzés sokáig tünetmentes maradhat, vagy enyhe hasi panaszokat, fogyást okozhat - a fertőzés felismerése ezért gyakran csak a székletben megjelenő ízek (a galandféreg testének leváló szakaszai) észlelésekor történik meg. A megelőzés legfontosabb eszközei a húsok alapos átsütése/átfőzése és a rendszeres kézmosás.',
                ],
              },
            ],
            keyTerms: ['Laposférgek törzse', 'kétoldali szimmetria', 'bőrizomtömlő', 'parenchima', 'láng-sejt', 'planária', 'galandféreg', 'neoblaszt'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a laposférgek testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert csalánozókhoz képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a csalánozókhoz képest',
                paragraphs: [
                  'A csalánozóknál megismert diploblasztikus (két csíralemezű) szerveződéshez képest a laposférgeknél megjelenik a harmadik csíralemez, a mezoderma - ez a triploblasztikus szerveződés teszi lehetővé a valódi izomszövet (bőrizomtömlő) és a belső szervek (pl. a kiválasztószerv) kialakulását, amelyek a csalánozóknál még nem léteztek.',
                  'A valódi izomréteg sokkal célzottabb és hatékonyabb mozgást tesz lehetővé, mint a csalánozók egyszerű, az egész testfalra kiterjedő összehúzódása: a laposférgek izomrostjai különböző irányokban (hosszanti, körkörös, ferde rétegekben) rendezettek, ami finomabb, irányított mozgásformákat tesz lehetővé.',
                  'A kétoldali szimmetria megjelenése szoros összefüggésben áll egy másik fontos evolúciós újítással, a cephalizációval: mivel egy kétoldalian szimmetrikus, meghatározott irányba mozgó állatnál van "eleje" és "hátulja", előnyös, ha az érzékszervek (pl. a szemfoltok) és az idegi irányítás (agydúc, idegkötegek) a mozgás irányában lévő elülső testvégen összpontosulnak - ez ellentétben áll a csalánozók sugarasan szimmetrikus, minden irányból egyformán "figyelő" ideghálózatával.',
                  'A cephalizáció evolúciós logikája abban áll, hogy egy meghatározott irányba, folytonosan mozgó állat számára az a legelőnyösebb, ha a környezetét először az elülső testrészével "érzékeli" - így a veszélyre vagy a táplálékra még azelőtt reagálhat, hogy a teste nagy része elérné az adott pontot. Ez magyarázza, hogy miért pont az elülső testvégen halmozódtak fel az érzékszervek és az idegi feldolgozó központ, nem pedig valamelyik oldalon vagy a hátulján.',
                  'Az önálló kiválasztószerv (láng-sejtek) megjelenése is jelentős evolúciós előrelépés: a csalánozóknál a sejtek önállóan, közvetlenül a környezetükbe adták le a fölösleges anyagokat, a laposférgeknél viszont már egy specializált szervrendszer végzi ezt a feladatot - ez a "specializált szervek általi feladatmegoldás" elve, amit a további fejezetekben (Gyűrűsférgek, Rovarok) egyre fejlettebb formákban fogunk viszontlátni.',
                  'A specializált kiválasztószerv megjelenése azért vált szükségessé, mert a triploblasztikus, mezodermával rendelkező testben a sejtek már nem mindegyike érintkezik közvetlenül a külső környezettel - a testen belül elhelyezkedő sejteknek is el kell jutnia a fölösleges anyagoknak, amit egy kiterjedt csatornarendszer (a láng-sejtek hálózata) tud csak hatékonyan biztosítani, szemben a csalánozók vékony, egysejt-rétegnyi testfalával, ahol minden sejt közvetlenül a környezetbe adhatta le a hulladékanyagot.',
                ],
              },
            ],
            keyTerms: ['mezoderma', 'triploblasztikus', 'cephalizáció'],
          },
        },
      },
      {
        id: 'gyurusfergek',
        title: 'Gyűrűsférgek',
        order: 14,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Laposférgek fejezet) megismert lapított testű férgek után a gyűrűsférgekkel egy jóval fejlettebb testfelépítésű csoportot ismerünk meg - esetükben már megjelenik a szelvényezettség és a valódi testüreg is, amelyek alapjaiban új életműködési lehetőségeket nyitnak meg.',
            sections: [
              {
                heading: 'Testfelépítés: szelvényezettség és testüreg',
                paragraphs: [
                  'A gyűrűsférgek (pl. a földigiliszta) az Állatok országán belül a Gyűrűsférgek törzsét (Annelida) alkotják. Testük jellegzetesen szelvényezett (metamer): egymást követő, egymáshoz hasonló felépítésű gyűrűkből (szelvényekből) áll, amelyek mindegyike tartalmazza a fontosabb szervek egy-egy példányát (pl. idegdúcot, kiválasztószervet).',
                  'A laposférgekkel ellentétben a gyűrűsférgeknek már valódi testüregük (coelomájuk) van: a mezoderma két rétege között kialakuló, folyadékkal telt üreg, amely hidrosztatikus vázként funkcionál - a benne lévő folyadék nyomása és az izmok együttes munkája teszi lehetővé a szelvényenkénti, hullámzó mozgást.',
                  'A test elülső végén (fejtájékon) koncentrálódnak az érzékszervek és az agydúc - ugyanaz a jelenség, amit a korábban (Laposférgek fejezet) megismert szemfoltok és agydúc elülső elhelyezkedésénél már megfigyeltünk, csak itt szelvényenkénti idegdúcokkal kiegészülve, fejlettebb formában.',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'A gyűrűsférgek nedves, csupasz kültakarójukon keresztül lélegeznek (bőrlégzés), egyes vízi fajoknál kopoltyú is kialakult. Mozgásukat a testfalban lévő körkörös és hosszanti izmok, valamint a szelvényenként megjelenő serték (apró tüskeszerű képletek) segítik, amelyek megkapaszkodnak a talajban vagy az aljzatban.',
                  'Táplálkozásukhoz egy elejétől a végéig egyenes, két nyílással (szájnyílással és végbélnyílással) rendelkező bélcsatorna szolgál - ez a korábban (Csalánozók, Laposférgek fejezet) megismert egy nyílású béléhez képest jelentős előrelépés, mert lehetővé teszi az egyirányú, folyamatos táplálékáramlást és a hatékonyabb, szakaszos emésztést.',
                  'A gyűrűsférgeknél jelenik meg elsőként a zárt keringési rendszer: a vér mindig erekben áramlik (nem szabadon a testüregben), a hát- és hasi ér közötti keringést pedig összehúzódó, szívszerű érszakaszok tartják fenn. Kiválasztásukat szelvényenként megismétlődő metanefridiumok végzik, idegrendszerüket pedig egy agydúc és egy hasi idegdúclánc alkotja, amely szelvényenként újabb dúcokat tartalmaz.',
                ],
              },
              {
                heading: 'Szaporodás és gyakorlati jelentőségük',
                paragraphs: [
                  'A gyűrűsférgek jelentős része hímnős (pl. a földigiliszta), de a megtermékenyítéshez ekkor is két egyed szükséges: a nyeregöv (clitellum) által termelt váladék segíti az ivarsejtek cseréjét és a peték védelmét. Más csoportjaik (pl. a tengeri soksertéjűek) ivarilag elkülönültek.',
                  'A földigiliszták kiemelkedő ökológiai és mezőgazdasági jelentőséggel bírnak: a talajban ásva lazítják és szellőztetik azt, elhalt szerves anyagokat dolgoznak fel, ezzel javítva a talaj termékenységét. A piócák évszázadokon át az orvosi "érvágás" eszközei voltak, ma pedig a mikrosebészetben alkalmazzák őket, mivel nyáluk véralvadásgátló anyagot tartalmaz.',
                ],
              },
              {
                heading: 'Csoportjaik és élőhelyük',
                paragraphs: [
                  'A gyűrűsférgek három nagy csoportra oszthatók: a tengerben élő soksertéjűek (pl. a nereis), a talajban élő kevéssertéjűek (pl. a földigiliszta), és az édesvízben vagy szárazföldön élő piócák.',
                  'Élőhelyük rendkívül változatos: megtalálhatók a tengerekben, az édesvizekben és a nedves talajban egyaránt - közös vonásuk, hogy nedves környezetet igényelnek, mivel bőrlégzésükhöz a kültakaró állandó nedvessége elengedhetetlen. Méretük is széles skálán mozog: a néhány milliméteres fajoktól a több méter hosszúságot is elérő óriás soksertéjűekig terjed.',
                ],
              },
            ],
            keyTerms: ['Gyűrűsférgek törzse', 'szelvényezettség', 'testüreg', 'serte', 'zárt keringési rendszer', 'metanefridium', 'nyeregöv'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a gyűrűsférgek testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert laposférgekhez képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a laposférgekhez képest',
                paragraphs: [
                  'A laposférgeknél megismert triploblasztikus, de testüreg nélküli (acoelomata) szerveződéshez képest a gyűrűsférgeknél megjelenik a valódi testüreg (coeloma) - ez a folyadékkal telt üreg hidrosztatikus vázként működik, ami sokkal hatékonyabb, erőteljesebb mozgást tesz lehetővé, mint a laposférgek parenchimával kitöltött, testüreg nélküli teste.',
                  'A szelvényezettség (metaméria) megjelenése is jelentős evolúciós előny: mivel a test ismétlődő, egymáshoz hasonló egységekből áll, egy-egy szelvény sérülése vagy elvesztése nem feltétlenül veszélyezteti az egész állat életét, és az izomzat szelvényenkénti, egymástól független működése finomabb, hullámzó mozgásformákat tesz lehetővé, mint a laposférgek egységes bőrizomtömlője.',
                  'A kétnyílású bélcsatorna (a laposférgek/csalánozók egy nyílású béléhez képest) és a zárt keringési rendszer megjelenése együttesen sokkal hatékonyabb anyagcserét biztosít: a folyamatos, egyirányú táplálékáramlás lehetővé teszi, hogy a bél különböző szakaszai specializálódjanak (pl. előemésztés, felszívás, salakanyag-tömörítés), a zárt erekben áramló vér pedig gyorsabban és célzottabban szállítja a tápanyagokat és a gázokat a test minden pontjára, mint a laposférgek egyszerű diffúziója.',
                  'A testüreg megjelenésének további fontos következménye, hogy lehetővé teszi a belső szervek egymástól független mozgását és fejlődését: mivel a bélcsatorna és a testfal között folyadék van, a bél önállóan mozoghat (perisztaltikus mozgással továbbítva a táplálékot), függetlenül a test külső mozgásaitól - ez a laposférgeknél, ahol a szervek közvetlenül a parenchimába vannak "beágyazva", nem lehetséges.',
                  'Ezek az evolúciós újítások (testüreg, szelvényezettség, zárt keringés, kétnyílású bél) együttesen tették lehetővé, hogy a gyűrűsférgek jelentősen nagyobb testméretet és összetettebb életműködéseket érjenek el, mint a laposférgek - ez az a fejlődési irány, amelyet a következő fejezetekben (Rovarok, Csigák) még tovább fejlesztett formákban fogunk viszontlátni.',
                ],
              },
            ],
            keyTerms: ['acoelomata'],
          },
        },
      },
      {
        id: 'rovarok',
        title: 'Rovarok',
        order: 15,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Gyűrűsférgek (zárt)', 'Rovarok (nyílt)'],
          rows: [
            ['A vér útja', 'mindig erekben áramlik', 'részben szabadon a testüregben'],
            ['Oxigénszállítás', 'a vér feladata', 'nem a vér feladata (trachea végzi)'],
            ['Szállítás hatékonysága', 'nagyobb, célzottabb', 'kisebb, de energiatakarékosabb'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Gyűrűsférgek fejezet) megismert szelvényezett testű férgek után a rovarokkal a Föld legfajgazdagabb állatcsoportját ismerjük meg - testfelépítésük és életműködéseik számos ponton radikálisan eltérnek az addig tárgyalt csoportokétól.',
            sections: [
              {
                heading: 'Testfelépítés: kitines külső váz és a test hármas tagolódása',
                paragraphs: [
                  'A rovarok az Állatok országán belül az Ízeltlábúak törzsének (Arthropoda) egy osztályát, a Rovarok osztályát (Insecta) alkotják - ugyanabba a törzsbe tartoznak, mint a rákok vagy a pókok, de méretük, testfelépítésük és élőhelyeik alapján önálló, jól elkülöníthető csoportot alkotnak. Testüket a korábban (Szénhidrátok fejezet) megismert kitinből álló, kemény, merev külső váz (exoszkeleton) borítja, amely véd, de a növekedést is korlátozza: a rovarok időről időre levetik régi vázukat (vedlenek), és csak addig növekednek, amíg az új váz meg nem szilárdul.',
                  'Testük három fő tagra osztott: fej, tor és potroh. A fejen található a pár csáp (érintés- és szagérzékelésre), valamint az összetett (facetta-) szem. A torhoz kapcsolódik három pár ízelt láb - ez a rovarok egyik meghatározó bélyege -, és sok fajnál egy vagy két pár szárny is, amelyek a repülést teszik lehetővé: a rovarok voltak a Föld első repülésre képes állatai.',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'A rovarok szájszervei rendkívül változatosak, a táplálék típusától függően: rágó szájszerv (pl. sáskáknál), szívó szájszerv (pl. lepkéknél) vagy szúró-szívó szájszerv (pl. szúnyogoknál) alakult ki. Légzésüket egy sajátos légzőrendszer, a légzőnyílásokon (stigmákon) keresztül a testbe vezető, elágazó légzőcsövek (tracheák) végzik, amelyek közvetlenül a szövetekhez, sejtekhez szállítják az oxigént.',
                  'Mivel a légzőrendszer közvetlenül ellátja a sejteket oxigénnel, a vérnek (hemolimfának) nem kell oxigént szállítania - ezért a rovaroknál nyílt keringési rendszer alakult ki, szemben a korábban (Gyűrűsférgek fejezet) megismert zárt keringési rendszerrel: a hemolimfa nem csak erekben, hanem szabadon a testüregben is áramlik, egy hátoldali, pulzáló ér ("szív") hajtja körbe. Kiválasztásukat a Malpighi-edények végzik, amelyek a salakanyagokat közvetlenül a bélbe ürítik.',
                  'Idegrendszerük agydúcból és hasi idegdúcláncból áll, érzékelésüket összetett (facetta-) szemük és csápjaik szolgálják. Szaporodásuk ivaros, ivarilag elkülönült egyedekkel; egyedfejlődésük során teljes átalakuláson (pete-lárva-báb-imágó, pl. lepkéknél) vagy kevésbé teljes átalakuláson (pete-lárva-imágó, pl. sáskáknál) mennek keresztül.',
                ],
              },
              {
                heading: 'Ökológiai és gyakorlati jelentőségük',
                paragraphs: [
                  'A rovarok szinte minden szárazföldi élőhelyen megtalálhatók, és a Föld ismert állatfajainak több mint felét ők alkotják - sikerességük hátterében részben éppen a testfelépítésük áll: az exoszkeleton csökkenti a párolgás útján történő vízvesztést (ami a szárazföldi életmódhoz nélkülözhetetlen), a szárnyak pedig lehetővé teszik az új élőhelyek gyors elérését és a táplálékforrások, illetve partnerek hatékony felkutatását. Rendkívül sokfélék: közéjük tartoznak a bogarak (a legfajgazdagabb rovarrend), a lepkék, a hártyásszárnyúak (pl. méhek, hangyák), az egyenesszárnyúak (pl. sáskák) és a kétszárnyúak (pl. legyek, szúnyogok) is - mindegyik rend jellegzetes szájszervvel, szárnyfelépítéssel és életmóddal rendelkezik.',
                  'Kiemelkedő ökológiai szerepük van beporzóként (pl. a méhek a virágos növények megtermékenyítésében) - a méhek emellett társas rovarok is: egy kaptárban több ezer egyed él együtt, szigorú munkamegosztásban (dolgozók, herék, királynő). Mezőgazdasági kártevőként (pl. egyes lepke- és bogárfajok hernyói) és betegségterjesztőként (pl. a szúnyogok a malária kórokozóját terjesztik) is jelentősek lehetnek.',
                ],
              },
            ],
            keyTerms: ['Rovarok osztálya', 'exoszkeleton', 'trachea', 'nyílt keringési rendszer', 'Malpighi-edény', 'teljes átalakulás', 'kevésbé teljes átalakulás'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a rovarok testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert gyűrűsférgekhez képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a gyűrűsférgekhez képest',
                paragraphs: [
                  'A gyűrűsférgek lágy, izmos testfalával szemben a rovaroknál megjelenik a merev, kitines külső váz - ez egyfelől hatékonyabb védelmet nyújt a kiszáradással és a ragadozókkal szemben, másfelől viszont, mivel nem tud folyamatosan növekedni vele a test, szakaszos növekedést (vedlést) tesz szükségessé. Ez egy fontos "kompromisszum" az evolúció során: a védelem előnyéért cserébe a folyamatos növekedés lehetőségét kellett feladni.',
                  'A tracheás légzőrendszer megjelenése lehetővé tette, hogy a rovarok lemondjanak a korábban (Gyűrűsférgek fejezet) megismert, hatékony, zárt keringési rendszerről anélkül, hogy ez az oxigénellátás rovására menne - ez egy érdekes, evolúciós "visszalépésnek" tűnő, valójában mégis funkcionálisan indokolt megoldás: mivel a légzőrendszer közvetlenül, a véren "megkerülve" látja el a sejteket oxigénnel, a nyílt keringési rendszer energetikailag "elég jó" maradt, nem volt szükség a zárt rendszer fenntartására.',
                  'A szárny és a repülőképesség megjelenése az egyik legjelentősebb evolúciós újítás az egész állatvilág történetében: a rovarok voltak az első élőlények, amelyek aktív repülésre voltak képesek, ez pedig drámaian megnövelte élőhely-választási és táplálékkeresési lehetőségeiket, valamint segítette elterjedésüket és a ragadozók előli menekülésüket.',
                  'A teljes átalakulás (metamorfózis) evolúciós előnye, hogy a lárva és az imágó (kifejlett egyed) különböző élőhelyeken élhet és különböző táplálékot fogyaszthat - ezzel elkerülhető a lárvák és a felnőttek közötti táplálékért folyó verseny, és mindkét életszakasz a rá legjellemzőbb feltételekhez optimálisan alkalmazkodhat. A kevésbé teljes átalakulással fejlődő rovaroknál (pl. a sáskáknál) ez a különbség kisebb: a lárva már kis méretben is hasonlít a kifejlett egyedre, és ugyanazt a táplálékot fogyasztja, mint a szülei.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'csigak',
        title: 'Csigák',
        order: 16,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Rovarok fejezet) megismert Ízeltlábúak törzse után a csigákkal egy másik nagy állattörzs, a Puhatestűek (Mollusca) képviselőit ismerjük meg - testfelépítésük gyökeresen eltér a rovarokétól, annak ellenére, hogy mindkét csoport a fejlettebb, testüreggel rendelkező állatok közé tartozik. A Puhatestűek törzse a Föld egyik legfajgazdagabb állattörzse a rovarok után, amelybe a csigákon kívül a kagylók és a fejlábúak (pl. polipok, tintahalak) is tartoznak.',
            sections: [
              {
                heading: 'Testfelépítés: fej, láb, zsigerzacskó és a héj',
                paragraphs: [
                  'A csigák az Állatok országán belül a Puhatestűek törzsének (Mollusca) egy osztályát, a Csigák osztályát (Gastropoda) alkotják. Testük három fő részre tagolódik: a fejen tapogatók és szemek találhatók, az izmos lábon (erről kapták nevüket) hullámzó összehúzódásokkal csúsznak, a zsigerzacskóban pedig a belső szerveik helyezkednek el.',
                  'A legtöbb csigafaj testét csavart, mészből álló héj védi, amelyet egy különleges szövet, a köpeny választ el a zsigerzacskótól, és amely magát a héjat is elválasztja (kiválasztja). A köpeny alatt kialakuló köpenyüreg vízi fajoknál a kopoltyút, szárazföldi fajoknál (pl. az éti csigánál) pedig egy erezett, "tüdőként" funkcionáló felületet rejt, amellyel a csiga levegőt lélegzik.',
                  'Méretük fajonként igen eltérő: néhány milliméteres apró csigáktól egészen a több tíz centiméteres, óriásira növő tengeri fajokig terjed. Veszély esetén sok csigafaj teljesen visszahúzódik a héjába, amelyet egy szaruszerű fedél (operculum) zár el.',
                ],
              },
              {
                heading: 'Táplálkozás, mozgás és egyéb életműködések',
                paragraphs: [
                  'A csigák egyedi táplálkozási szerve a radula (reszelőnyelv): egy kitines, apró fogacskákkal borított szalag, amellyel lekaparják vagy feldarabolják táplálékukat - ez lehet növényi (pl. levelek) vagy állati eredetű, fajtól függően. Mozgásukat izmos talpuk hullámzó összehúzódásai és az általuk termelt nyálka segíti, amely csökkenti a súrlódást a talaj felszínén.',
                  'Keringési rendszerük - a korábban (Rovarok fejezet) megismerthez hasonlóan - nyílt: egy egyszerű szív pumpálja a vért az erekbe, majd onnan a testüregbe. Idegrendszerüket több pár idegdúc alkotja, érzékszerveik (tapogatók, egyszerű szemek) a fejükön koncentrálódnak. Legtöbbjük hímnős, ivaros szaporodással.',
                  'Egyedfejlődésük során jellegzetes jelenség a torzió: a zsigerzacskó és a köpenyüreg mintegy 180 fokban elcsavarodik a fej-láb tengelyhez képest - emiatt a végbélnyílás és a köpenyüreg a test elülső részére kerül, ami befolyásolja a belső szervek, köztük az idegrendszer elrendeződését is.',
                ],
              },
              {
                heading: 'Ökológiai és gyakorlati jelentőségük',
                paragraphs: [
                  'A csigák három nagy csoportra oszthatók: a tengeri csigák (pl. a kürtcsigák), az édesvízi csigák (pl. a fűszálcsiga) és a szárazföldi, tüdővel lélegző csigák (pl. az éti csiga vagy a héj nélküli meztelen csigák).',
                  'A csigák a legváltozatosabb élőhelyeken fordulnak elő: tengerben, édesvízben és szárazföldön egyaránt megtalálhatók. Egyes fajaik jelentős mezőgazdasági kártevők (kerti növények leveleit rágják le), mások élelmiszerforrásként hasznosulnak (pl. az éti csiga), néhány vízi csigafaj pedig köztigazdaként vesz részt a korábban (Laposférgek fejezet) megismert mételyek fejlődési ciklusában.',
                ],
              },
            ],
            keyTerms: ['Puhatestűek törzse', 'Csigák osztálya', 'köpeny', 'köpenyüreg', 'radula', 'torzió'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a csigák testfelépítésében megjelenő egyedi evolúciós újításokat, valamint ezek előnyeit és hátrányait kell elemezni, összefüggésbe hozva őket a Puhatestűek törzsének közös alaptervével.',
            sections: [
              {
                heading: 'A torzió és a héj evolúciós előnyei és hátrányai',
                paragraphs: [
                  'A torzió evolúciós előnye, hogy az elcsavarodás következtében a köpenyüreg (és benne az érzékeny kopoltyú) a test elülső részére kerül - így egy esetleges veszély esetén a csiga fejjel előre húzódhat vissza a héjába, és a legsebezhetőbb testrészei (a fej és a légzőszerv) kerülnek először védett helyzetbe.',
                  'A torziónak azonban van egy jelentős hátránya is: mivel a végbélnyílás is a test elülső részére kerül, a csiga saját salakanyaga a fej és a légzőszerv közelébe kerülhet - ez higiéniai szempontból hátrányos, ezért egyes csigacsoportoknál (pl. egyes tengeri "meztelen csigáknál") az evolúció során másodlagosan részleges detorzió (visszacsavarodás) ment végbe.',
                  'A mészhéj kialakítása és fenntartása jelentős energiabefektetést igényel a csiga részéről, cserébe viszont hatékony védelmet nyújt a kiszáradással és a ragadozókkal szemben. Egyes csigacsoportok (pl. a meztelen csigák) evolúciósan lemondtak a héjról - ez energiát takarít meg, cserébe viszont sebezhetőbbé teszi őket, ami gyorsabb mozgással vagy más védekezési stratégiákkal (pl. nyálkatermeléssel, rejtőszínnel) kompenzálódik.',
                ],
              },
              {
                heading: 'A Puhatestűek közös alapterve',
                paragraphs: [
                  'A köpeny és a belőle kiválasztott héj a Puhatestűek törzsének egyik legjellemzőbb evolúciós újítása: ugyanez az alapterv (fej-láb-zsigerzacskó-köpeny) módosul a törzs más osztályaiban is - a következő fejezetben (Kagylók) megismerendő kagylóknál például a láb ásásra specializálódott, a fej pedig nagyrészt visszafejlődött, mivel a kagylók szűrve táplálkoznak, és nincs szükségük aktív táplálékkeresésre.',
                  'A radula szintén egyedülálló a Puhatestűek körében: az állatvilágban kizárólag a csigákban és a fejlábúakban (pl. polipokban) alakult ki ez a fajta, kitines fogacskás reszelőszerv - ez az egyik legerősebb bizonyíték a közös eredetre, annak ellenére, hogy testfelépítésük felnőttkorra igen eltérővé válik. A kagylóknál a radula másodlagosan hiányzik: mivel ők - ahogy azt fentebb említettük - szűrve táplálkoznak, nincs szükségük szilárd táplálék lekaparására vagy feldarabolására, ezért ez a szerv az evolúció során elveszett náluk.',
                ],
              },
            ],
            keyTerms: ['detorzió'],
          },
        },
      },
      {
        id: 'kagylok',
        title: 'Kagylók',
        order: 17,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Csigák fejezet) megismert Puhatestűek törzsének másik jelentős osztályát, a kagylókat (Bivalvia) ismerjük meg ebben a fejezetben - testfelépítésük és életmódjuk jelentősen eltér a csigákétól, annak ellenére, hogy ugyanabból az alaptervből (fej-láb-zsigerzacskó-köpeny) fejlődtek ki, és jól illusztrálja, hogyan alakíthatja át az evolúció ugyanazt az alapszerkezetet egy egészen más életmódhoz igazodva.',
            sections: [
              {
                heading: 'Testfelépítés: két héjlemez és a redukált fej',
                paragraphs: [
                  'A kagylók az Állatok országán belül a Puhatestűek törzsének (Mollusca) egy osztályát, a Kagylók osztályát (Bivalvia) alkotják. Testüket két, zsanérral összekapcsolt mészhéj (teknő) védi, amelyet záróizmok tartanak zárva - ezek elernyedésekor a héj rugalmas szalagja (a zsanérszalag) nyitja szét a két teknőt. Veszély esetén a záróizmok gyors összehúzódásával a kagyló másodpercek alatt bezárhatja héját, ezzel védve puha testét.',
                  'A kagylóknál - szemben a korábban (Csigák fejezet) megismert csigákkal - a fej szinte teljesen visszafejlődött, radulájuk (reszelőnyelvük) sincs: mivel szűrve táplálkoznak, nincs szükségük aktív táplálékkeresésre vagy -feldarabolásra. Ahogy azt a Csigák fejezet emelt részében is megismertük, ez nem "hiányosság", hanem a szűrve táplálkozó életmódhoz való tökéletes alkalmazkodás eredménye. Lábuk ásásra módosult, ék alakú - ezzel fúrják be magukat a puha aljzatba (homokba, iszapba).',
                  'Méretük igen változatos: néhány milliméterestől a több mint egy méteres, óriási méretű óriáskagylóig terjed. Szinte kizárólag vízi (tengeri és édesvízi) élőlények, a szárazföldi élethez nem alkalmazkodtak.',
                ],
              },
              {
                heading: 'Életműködések: a szűrögető táplálkozás',
                paragraphs: [
                  'A kagylók kopoltyúja kettős feladatot lát el: a légzés mellett a táplálkozásban is kulcsszerepet játszik - a köpenyüregen átáramló vízből a kopoltyú szűri ki a lebegő planktont és szerves törmeléket, amelyet aztán a szájba továbbít. Ez a szűrögető (filtráló) táplálkozási mód rendkívül hatékony: egyetlen kagyló naponta akár több tíz liter vizet is átszűrhet.',
                  'Keringési rendszerük - a korábban megismert csigákéhoz hasonlóan - nyílt. A legtöbb faj helyhez kötött vagy csak lassan mozog, beásva magát az aljzatba, de néhány faj (pl. a fésűkagyló) a két héjlemez gyors összecsapásával rövid távolságokra "úszni" is képes. Idegrendszerük a redukált fejnek megfelelően egyszerű, nincs koncentrált agydúcuk; érzékszerveik is egyszerűek, bár néhány fajnál (pl. a fésűkagylónál) apró szemek találhatók a köpeny szélén. Szaporodásuk ivaros, sok tengeri fajnál szabadon úszó lárvaformával (veliger lárva).',
                ],
              },
              {
                heading: 'Ökológiai és gyakorlati jelentőségük',
                paragraphs: [
                  'A kagylók fontos ökológiai szerepet töltenek be vízszűrőként: hatékonyan tisztítják a vizet, amelyben élnek, és mivel felhalmozzák a vízben lévő szennyezőanyagokat, kiválóan alkalmasak a vízminőség biológiai jelzésére (bioindikátorként). Gyakorlati jelentőségük is jelentős: sok faj (osztriga, kagyló, fésűkagyló) fontos élelmiszerforrás.',
                  'A gyöngykagylóknál a gyöngyképződés úgy indul el, hogy egy idegen test (pl. egy homokszemcse vagy parazita) kerül a köpeny és a héj közé - a kagyló ekkor gyöngyházanyaggal vonja be az idegen testet, réteg réteg után, és ez a folyamat hozza létre a gyöngyöt.',
                ],
              },
            ],
            keyTerms: ['Kagylók osztálya', 'zsanérszalag', 'szűrögető táplálkozás', 'veliger lárva'],
          },
          emeltExtra: {
            intro: 'Bár ez a fejezet nem szerepel a hivatalos érettségi követelményben, érdemes megérteni, hogyan magyarázható evolúciósan a kagylók "leegyszerűsödött" testfelépítése a korábban megismert csigákhoz és rovarokhoz képest.',
            sections: [
              {
                heading: 'Miért "egyszerűsödött" a kagylók testfelépítése?',
                paragraphs: [
                  'A kagylók fej- és idegrendszer-redukciója első pillantásra "visszafejlődésnek" tűnhet a korábban (Csigák, Rovarok fejezetek) megismert cephalizációs tendenciához képest, valójában azonban ez egy funkcionálisan tökéletesen indokolt evolúciós alkalmazkodás: mivel a kagylók helyhez kötött vagy csak lassan mozgó, szűrve táplálkozó életmódot folytatnak, nincs szükségük az aktív táplálékkereséshez és a gyors, célzott mozgáshoz elengedhetetlen fejlett érzékszervekre és koncentrált idegi irányításra.',
                  'Ez a jelenség jól mutatja, hogy az evolúció nem feltétlenül halad egy "egyre bonyolultabb, egyre fejlettebb" irányba: egy adott szerv vagy testrész elvesztése vagy egyszerűsödése éppúgy lehet sikeres evolúciós stratégia, mint egy új, összetettebb szerkezet kialakulása, ha az adott életmódhoz jobban illeszkedik. A kagylók sikeressége (a Föld egyik legelterjedtebb és leghosszabb ideje fennmaradó állatcsoportja) önmagában bizonyítja, hogy ez az "egyszerűsödött" testfelépítés hatékony túlélési stratégia.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'elogerinchurosok',
        title: 'Előgerinchúrosok',
        order: 18,
        isFree: false,
        estimatedMinutes: 10,
        comparisonTable: {
          headers: ['Chordata-bélyeg', 'Lárva', 'Kifejlett egyed'],
          rows: [
            ['Gerinchúr', 'megvan', 'eltűnik'],
            ['Neurális cső', 'megvan', 'nagy része eltűnik'],
            ['Farok', 'megvan', 'eltűnik'],
            ['Kopoltyúrés', 'megvan', 'megmarad'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban megismert állattörzsek (Szivacsok, Csalánozók, Laposférgek, Gyűrűsférgek, Ízeltlábúak, Puhatestűek) után az előgerinchúrosokkal az első olyan állatcsoportot ismerjük meg, amely már a Gerinchúrosok törzsébe (Chordata) tartozik - ugyanabba a törzsbe, mint a később megismerendő gerincesek. Ez a fejezet nem szerepel a hivatalos érettségi követelményben, de fontos áthidaló pontot jelent a gerinctelenek és a gerincesek között.',
            sections: [
              {
                heading: 'A Gerinchúrosok törzs meghatározó bélyegei',
                paragraphs: [
                  'A Gerinchúrosok törzsének minden tagját - legalább egyedfejlődésük valamely szakaszában - négy közös bélyeg jellemzi: a hát mentén húzódó, rugalmas támasztóelem, a gerinchúr (notochord); egy háti elhelyezkedésű, cső alakú idegrendszer, a neurális cső (a korábban megismert hasi idegdúcláncokkal szemben); a garatban található kopoltyúrések; valamint a végbélnyílás mögött elhelyezkedő farok.',
                  'Ez a négy bélyeg nem feltétlenül van jelen egyszerre a kifejlett egyednél - ahogy azt az előgerinchúrosok példáján rögtön látni is fogjuk -, de az egyedfejlődés legalább egy szakaszában (jellemzően embrionálisan vagy lárvaként) minden gerinchúros esetében megjelenik. Ez a rendszertani kritérium teszi lehetővé, hogy olyan, egymástól látszólag nagyon eltérő élőlényeket, mint az előgerinchúrosok, a fejgerinchúrosok és a gerincesek, egyetlen közös törzsbe soroljunk.',
                ],
              },
              {
                heading: 'Az előgerinchúrosok: lárvában fejlettebb, mint felnőttkorban',
                paragraphs: [
                  'Az előgerinchúrosok (Tunicata, pl. a zsákállatok) mérete jellemzően néhány milliméterestől néhány centiméteresig terjed. Lárvájuk szabadon úszó, ebihalszerű alak, amely mind a négy chordata-bélyeget egyértelműen mutatja: van gerinchúrja, csöves idegrendszere és farka is. A kifejlett egyed ezzel szemben helyhez kötötté válik, elveszti a gerinchúrt és a farkat, testét egy különleges, tunicinnak nevezett anyagból álló köpeny (tok) veszi körül - innen ered a csoport másik neve, a tunikások.',
                  'A felnőtt előgerinchúrosok szűrve táplálkoznak: a garat kopoltyúrésein átáramló vízből szűrik ki a táplálékot, hasonlóan a korábban (Kagylók fejezet) megismert szűrögető táplálkozáshoz - ez a hasonlóság azonban két, egymással nem rokon állatcsoportnál, egymástól függetlenül alakult ki.',
                  'A lárva-felnőtt közötti radikális átalakulás (amely során elvész a gerinchúr, a farok és a csöves idegrendszer nagy része) egyfajta "fordított fejlődésnek" is tekinthető: míg a legtöbb állatnál az egyedfejlődés során egyre összetettebb szerkezetek alakulnak ki, itt éppen a legjellemzőbb chordata-bélyegek tűnnek el a kifejlett formában.',
                ],
              },
              {
                heading: 'Élőhelyük, szaporodásuk és jelentőségük',
                paragraphs: [
                  'Az előgerinchúrosok kizárólag tengeri élőlények, a világ minden óceánjában megtalálhatók, a sekély parti vizektől egészen a mélytengerig. Sok fajuk kolóniákban él, ahol az egyes egyedek közös köpenybe ágyazva, összekapcsolódva szűrik a vizet.',
                  'Szaporodásuk lehet ivaros (a legtöbb faj hímnős) vagy ivartalan (bimbózással, ami kolóniák kialakulásához vezet). Az ivaros szaporodásból származó, szabadon úszó lárva csak rövid ideig (néhány órától néhány napig) él ebben a formában, mielőtt egy szilárd felszínhez rögzülve átalakulna a helyhez kötött, felnőtt alakká.',
                  'Az előgerinchúrosok fontos szerepet játszanak a tengeri táplálékláncokban: hatékony vízszűrő tevékenységükkel hozzájárulnak a víz tisztításához, és egyes tengeri állatok (pl. néhány halfaj) táplálékként fogyasztják őket.',
                ],
              },
            ],
            keyTerms: ['Gerinchúrosok törzse', 'gerinchúr', 'neurális cső', 'kopoltyúrés', 'tunikás'],
          },
          emeltExtra: {
            intro: 'Bár ez a fejezet nem szerepel a hivatalos érettségi követelményben, érdemes megérteni, milyen evolúciós jelentősége van annak, hogy az előgerinchúrosok lárvája fejlettebb testfelépítésű, mint a kifejlett egyed.',
            sections: [
              {
                heading: 'Az előgerinchúrosok evolúciós jelentősége',
                paragraphs: [
                  'Az előgerinchúrosok lárvájának chordata-bélyegei fontos bizonyítékot szolgáltatnak arra, hogy a Gerinchúrosok törzse egy közös, feltehetően szabadon úszó, farokkal és gerinchúrral rendelkező ősi formából alakult ki - az előgerinchúrosoknál ez az "ősi" testfelépítés a lárvastádiumban őrződött meg, míg a kifejlett egyednél a helyhez kötött, szűrve táplálkozó életmódhoz alkalmazkodva visszafejlődött.',
                  'Ez a jelenség - amikor egy fejlettebb, mozgékonyabb lárvaforma egy egyszerűbb, helyhez kötött felnőtt formává alakul át - érdekes párhuzamot mutat a korábban (Kagylók fejezet) megismert evolúciós "egyszerűsödéssel": mindkét esetben a szűrve táplálkozó, mozgásszegény életmód vezetett hasonló irányú, de egymástól teljesen független (konvergens) evolúciós változáshoz két, egymással nem rokon állatcsoportnál.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'fejgerinchurosok',
        title: 'Fejgerinchúrosok',
        order: 19,
        isFree: false,
        estimatedMinutes: 10,
        content: {
          kozep: {
            intro: 'A korábban (Előgerinchúrosok fejezet) megismert, regresszív fejlődésű csoport után a fejgerinchúrosokkal (Cephalochordata, pl. a lándzsahal) egy olyan chordata csoportot ismerünk meg, amely egész életében megőrzi mind a négy chordata-bélyeget - ezzel a gerincesekhez vezető evolúciós út egyik legfontosabb, ma is élő modelljét adja. Míg az előgerinchúrosoknál a fejlettebb forma csak lárvakorban volt jelen, a fejgerinchúrosoknál ez az állapot végleges és állandó marad. Ez a fejezet nem szerepel a hivatalos érettségi követelményben.',
            sections: [
              {
                heading: 'Testfelépítés: a chordata-bélyegek egész életen át',
                paragraphs: [
                  'A fejgerinchúrosok az Állatok országán belül a Gerinchúrosok törzsének (Chordata) egyik alsótörzsét, a Cephalochordata-t alkotják. Jellemző képviselőjük (pl. a lándzsahal, Amphioxus) kis, néhány centiméteres, áttetsző, halványsárgás, hal-szerű, lándzsa alakú testű, és a világ sekély tengerpartjainak homokos aljzatán él, a mérsékelt övtől a trópusi tengerekig. Az előgerinchúrosokkal szemben náluk a gerinchúr, a neurális cső, a kopoltyúrések és a farok a teljes életciklus során, egész felnőtt korukban is megmarad - a gerinchúr a test elejétől (innen a csoport neve) egészen a farok végéig végignyúlik.',
                  'Testük ízekre (szelvényekre) tagolt izomkötegeket (miotómokat) tartalmaz, amelyek a farokizmokkal együtt oldalirányú, hullámzó mozgást tesznek lehetővé - ez az első alkalom a chordaták között, hogy ilyen hatékony, szelvényezett izomrendszer jelenik meg. A miotómok "V" vagy "W" alakú, egymás mögötti ismétlődő elrendezése jól látható az áttetsző testen keresztül, és ugyanazt az alapelvet követi, mint a később megismerendő halak szelvényezett törzsizomzata.',
                  'Bár nincs igazi feje a gerinceseknél megismert értelemben (nincs koponyája, nincsenek páros érzékszervei), a neurális cső elülső vége már némileg megvastagodott, kezdetleges agyhólyagszerű képletet alkot - ez az agy kialakulásának egyik legkorábbi evolúciós előfutára.',
                ],
              },
              {
                heading: 'Életmód és jelentőségük',
                paragraphs: [
                  'A fejgerinchúrosok jellemzően a tengerfenék homokjába félig beásva élnek, farokkal előre, csak elülső végük (szájnyílásuk) látszik ki - de szükség esetén (pl. zavarás vagy ragadozó közeledtekor) gyorsan ki is tudnak úszni az üledékből, és rövid ideig szabadon is úszkálhatnak, mielőtt visszaásnák magukat. Táplálkozásuk - a korábban (Kagylók, Előgerinchúrosok fejezetek) megismerthez hasonlóan - szűrve történik: a csillós garaton átáramló vízből szűrik ki a táplálékrészecskéket.',
                  'A fejgerinchúrosokat a gerincesekhez legközelebb álló, ma is élő, gerincoszlop nélküli chordata csoportnak tartják, ezért fontos modellszervezetei az evolúciós fejlődéstannak: vizsgálatukkal sokat megtudhatunk arról, milyen lehetett a gerincesek közvetlen, még gerinctelen őse. Genomjuk viszonylag egyszerű felépítése miatt a génkutatásban is fontos szerepet töltenek be: segítségükkel tanulmányozható, hogyan alakultak ki a gerincesek összetettebb génkészletei egy egyszerűbb, ősi chordata génkészletből - a lándzsahal genomjában megtalálhatók a gerinceseknél megismert legfontosabb génesaládok egyszerűbb, még nem megsokszorozódott elődei is.',
                  'Szaporodásuk ivaros, ivarilag elkülönült egyedekkel; a megtermékenyítés a vízben, a testen kívül történik, a megtermékenyített petesejtekből szabadon úszó lárvák kelnek ki, amelyek fokozatosan alakulnak át a felnőtt formává.',
                ],
              },
            ],
            keyTerms: ['Fejgerinchúrosok', 'lándzsahal', 'miotóm'],
          },
          emeltExtra: {
            intro: 'Bár ez a fejezet nem szerepel a hivatalos érettségi követelményben, érdemes megérteni, miért tekinthetők a fejgerinchúrosok a gerincesekhez vezető evolúciós út egyik legfontosabb élő modelljének.',
            sections: [
              {
                heading: 'A fejgerinchúrosok mint a gerincesek felé vezető lépés',
                paragraphs: [
                  'A fejgerinchúrosok testfelépítése számos ponton előrevetíti a később megismerendő gerincesek szerveződését: a szelvényezett miotómok a gerincesek törzsizomzatának előfutárai, a neurális cső elülső végén kialakuló kezdetleges agyhólyag pedig az agy kialakulásának első lépését mutatja - mindkét szerkezet a gerinceseknél sokkal összetettebb, differenciáltabb formában jelenik meg, de az alapelv (szelvényezett izomzat, elöl elhelyezkedő idegi központ) már itt is felismerhető.',
                  'Fontos ugyanakkor hangsúlyozni, hogy a fejgerinchúrosok NEM a gerincesek közvetlen ősei - nem "átmeneti fajok", hanem egy önálló, ma is élő ág, amely valószínűleg egy közös őstől ágazott el a gerincesekkel egy időben. Éppen ezért olyan értékesek a kutatás számára: mivel testfelépítésük évmilliók óta viszonylag keveset változott, egyfajta "élő modellként" segítenek megérteni, milyen lehetett az a közös ős, amelyből mind a fejgerinchúrosok, mind a gerincesek kialakultak.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'csontos-halak',
        title: 'Csontos halak',
        order: 20,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Csontos halak', 'Porcos halak'],
          rows: [
            ['Váz anyaga', 'csont', 'porc'],
            ['Úszóhólyag', 'van', 'nincs'],
            ['Kopoltyúrés', 'kopoltyúfedővel borított', 'nyitott'],
            ['Fogazat', 'nem cserélődik folyamatosan', 'folyamatosan cserélődik'],
            ['Megtermékenyítés', 'jellemzően külső', 'jellemzően belső'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Fejgerinchúrosok fejezet) megismert, még gerinchúrral rendelkező csoport után a csontos halakkal a Gerincesek altörzsének (Vertebrata) első képviselőit ismerjük meg - náluk a gerinchúrt egy sokkal erősebb, csontos elemekből álló gerincoszlop váltja fel.',
            sections: [
              {
                heading: 'Rendszertani hely és testfelépítés',
                paragraphs: [
                  'A csontos halak az Állatok országán belül a Gerinchúrosok törzsének (Chordata) egy altörzsét, a Gerincesek (Vertebrata) altörzsét, azon belül pedig a Csontos halak osztályát (Osteichthyes) alkotják. Testük áramvonalas, csontos pikkelyekkel és nyálkaréteggel borított, amely csökkenti az úszás közbeni súrlódást és véd a fertőzésektől.',
                  'Úszóikat páros (mell- és hasúszó) és páratlan (hát-, farok- és alfarki úszó) csoportba sorolhatjuk - a páros úszók elsősorban a kormányzást és az egyensúlyt, a farokúszó pedig a hajtóerőt biztosítja. Mozgásukat - hasonlóan a korábban (Fejgerinchúrosok fejezet) megismert lándzsahaléhoz - a törzsizomzat oldalirányú, hullámzó összehúzódása hajtja.',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'A csontos halak táplálkozása rendkívül sokféle: vannak közöttük ragadozók (pl. a csuka), növényevők (pl. az amur), planktonszűrők (pl. egyes heringfélék) és mindenevők is. Ez a sokféleség a szájuk és fogazatuk jelentős eltéréseiben is megmutatkozik: a ragadozó fajoknak éles, hátrahajló fogaik vannak a zsákmány megragadására, míg a szűrögető fajoknál a kopoltyútüskék finom hálót alkotnak a plankton kiszűrésére - hasonlóan a korábban (Kagylók fejezet) megismert szűrögető táplálkozáshoz.',
                  'A csontos halak kopoltyúval lélegeznek, amely a vízben oldott oxigént vonja ki. Keringési rendszerük zárt, egyszerű, kétüregű (egy pitvar és egy kamra) szívvel, amelyen a vér egyetlen körben áramlik át: szív → kopoltyú → test → vissza a szívhez.',
                  'Egyedi érzékszervük az oldalvonal-szerv, amely a vízben terjedő rezgéseket és áramlásokat érzékeli - ez segíti a tájékozódást, a zsákmány és a ragadozók észlelését, valamint a rajban úszó halak összehangolt mozgását. Szaporodásuk ivaros, ivarilag elkülönült egyedekkel, jellemzően külső megtermékenyítéssel: az ikrát és a haltejet egyaránt a vízbe bocsátják, ahol a megtermékenyítés végbemegy - emiatt rendkívül nagyszámú ivadékot hoznak létre, hiszen a külső fejlődés kockázatos.',
                ],
              },
              {
                heading: 'Az úszóhólyag',
                paragraphs: [
                  'A csontos halak egyedi szerve az úszóhólyag: egy gázzal töltött, a hasüregben elhelyezkedő szerv, amelynek térfogatát a hal szabályozni tudja. Ezáltal energiabefektetés nélkül, lebegve tud egy adott mélységben maradni, anélkül, hogy folyamatosan úsznia kellene a süllyedés elkerülése érdekében.',
                ],
              },
              {
                heading: 'Sokféleségük és gyakorlati jelentőségük',
                paragraphs: [
                  'A csontos halak a gerincesek legfajgazdagabb osztálya: méretük néhány milliméterestől több méteresig terjed, élőhelyük pedig a tengerek, óceánok és édesvizek szinte minden típusára kiterjed. Gazdasági jelentőségük kiemelkedő: a halászat és a haltenyésztés (akvakultúra) világszerte fontos élelmiszerforrást biztosít az emberiség számára.',
                ],
              },
              {
                heading: 'Kitekintés: a porcos halak',
                paragraphs: [
                  'A halak másik nagy csoportja a porcos halak (Chondrichthyes, pl. a cápák és a rájak) - ez a témakör nem szerepel a hivatalos érettségi követelményben, de érdemes röviden összevetni a csontos halakkal. Bár ők is a Gerincesek altörzsébe tartoznak, testfelépítésük több ponton eltér: vázuk nem csontból, hanem rugalmasabb, könnyebb porcból épül fel, és nincs úszóhólyaguk - emiatt vagy folyamatosan úszniuk kell, hogy ne süllyedjenek a mélybe, vagy a tengerfenéken pihennek.',
                  'További jellegzetességük, hogy kopoltyúréseik nyitottak (nincs kopoltyúfedőjük, mint a csontos halaknak), fogaik folyamatosan cserélődnek egész életük során, és sok fajuknál belső megtermékenyítés jellemző - szemben a csontos halak külső megtermékenyítésével.',
                ],
              },
            ],
            keyTerms: ['Gerincesek altörzse', 'Csontos halak osztálya', 'oldalvonal-szerv', 'úszóhólyag', 'porcos halak'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a csontos halak testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert fejgerinchúrosokhoz képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a fejgerinchúrosokhoz képest',
                paragraphs: [
                  'A legjelentősebb evolúciós újítás a gerincoszlop megjelenése: a korábban (Fejgerinchúrosok fejezet) megismert rugalmas, de viszonylag "puha" gerinchúrt egymáshoz kapcsolódó, kemény csontos elemekből (csigolyákból) álló gerincoszlop váltja fel. Ez sokkal erősebb, terhelhetőbb támasztékot ad a testnek, védi a gerincvelőt, és lehetővé teszi a jóval nagyobb testméret és erősebb izomzat kialakulását, mint amire a fejgerinchúrosok képesek voltak.',
                  'Az úszóhólyag megjelenése azért is jelentős evolúciós újítás, mert lehetővé tette a nyílt vízi (pelágikus) élettér meghódítását: a fenékhez kötött, folyamatos úszásra vagy pihenésre kényszerülő porcos halakkal szemben a csontos halak a vízoszlop bármely rétegében energiatakarékosan tartózkodhatnak. A gyors mélységváltás azonban korlátozott: az úszóhólyag gáztérfogatának beállítása (gázmirigyekkel történő gáztermelés vagy -felszívás) viszonylag lassú folyamat, ezért a hirtelen, nagy mélységváltozások (pl. horgászáskor a felszínre húzás) károsíthatják a halat.',
                  'A kétüregű szív (egy pitvar, egy kamra) és az egyetlen keringési kör egyszerű, de hatékony megoldás egy vízi, kopoltyús légzésű élőlény számára: a szív mindig oxigénszegény vért pumpál a kopoltyú felé, ahol az frissül, majd egyetlen körben jut el a test szöveteihez - ez a rendszer a későbbi, szárazföldi gerincesek fejlettebb, többüregű szívéhez képest egyszerűbb, de a vízi életmódhoz tökéletesen elegendő. Ennek egyik oka, hogy a vízben élő állatnak nem kell a testsúlyát tartania (a víz felhajtóereje ezt megoldja), így kevésbé van szüksége a szárazföldi mozgáshoz elengedhetetlen, nagy nyomású, kétkörös keringésre.',
                ],
              },
            ],
            keyTerms: ['gerincoszlop', 'csigolya'],
          },
        },
      },
      {
        id: 'ketelt-uek',
        title: 'Kétéltűek',
        order: 21,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Lárva (ebihal)', 'Kifejlett kétéltű'],
          rows: [
            ['Légzés', 'kopoltyú', 'tüdő + bőrlégzés'],
            ['Mozgás', 'úszás farokkal', 'ugrás/mászás négy végtaggal'],
            ['Táplálkozás', 'jellemzően növényevő, szűrögető', 'jellemzően ragadozó'],
            ['Élőhely', 'kizárólag vízi', 'víz és szárazföld (kétlaki)'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Csontos halak fejezet) megismert, kizárólag vízi életmódú gerincesek után a kétéltűekkel a Gerincesek altörzsének első olyan osztályát ismerjük meg, amely - bár még szorosan kötődik a vízhez - a szárazföldi élet felé is megtette az első lépéseket.',
            sections: [
              {
                heading: 'Rendszertani hely és testfelépítés',
                paragraphs: [
                  'A kétéltűek (Amphibia) a Gerincesek altörzsének osztálya. Testük fejre, törzsre és két pár végtagra tagolódik; a farkatlan kétéltűeknél (pl. békák) a farok csak lárvakorban van jelen, a farkos kétéltűeknél (pl. gőték, szalamandrák) felnőttkorban is megmarad.',
                  'Kültakarójuk csupasz, nyálkás bőr, amelyet nyálkamirigyek védenek a kiszáradástól - ellentétben a korábban (Csontos halak fejezet) megismert pikkelyes kültakaróval. Ez a vékony, nedves bőr egyszerre jelent előnyt (légzésre is alkalmas) és korlátot (könnyen kiszárad, ezért kötődnek a nedves élőhelyekhez).',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'Mozgásukat a két pár végtag biztosítja: a farkatlan kétéltűek erős hátsó végtagjaikkal ugranak, a farkos kétéltűek inkább másznak vagy úsznak. Lárvakorban a mozgás még farokúszóval történik, a csontos halakhoz hasonló módon.',
                  'Táplálkozásuk életszakaszonként eltérő: a kifejlett kétéltűek jellemzően ragadozók (rovarokat, férgeket, kisebb állatokat fogyasztanak), míg lárváik (pl. az ebihal) jellemzően növényevők vagy mindenevők, gyakran szűrögető táplálkozással - hasonlóan a korábban (Kagylók fejezet) megismert szűrögető táplálkozáshoz.',
                  'Légzésük kettős: a lárvák kopoltyúval lélegeznek, akárcsak a csontos halak, a kifejlett egyedek viszont már tüdővel is rendelkeznek, amelyet kiegészítő bőrlégzés egészít ki - ez utóbbi teszi szükségessé a bőr folyamatos nedvességét.',
                  'Anyagszállító rendszerük szíve háromüregű: két pitvarból és egy kamrából áll. Ez lehetővé teszi a kettős vérkör (kis, azaz tüdő-vérkör és nagy, azaz test-vérkör) kialakulását, bár a kamrában - mivel nincs teljes válaszfal - még keveredik az oxigénben gazdag és szegény vér.',
                  'Szaporodásuk ivaros, jellemzően vízben lerakott ikrával és külső megtermékenyítéssel, bár néhány fajnál belső megtermékenyítés is előfordul. Érzékszerveik közül kiemelendő a pillás szemhéjjal védett szem és a dobhártyával rendelkező hallószerv, amelyek már a szárazföldi érzékeléshez is alkalmazkodtak.',
                ],
              },
              {
                heading: 'Az átalakulásos egyedfejlődés',
                paragraphs: [
                  'A kétéltűek egyedfejlődésére jellemző az átalakulásos fejlődés (metamorfózis): a vízben kikelő, kopoltyúval és farokúszóval rendelkező lárva (pl. ebihal) fokozatosan alakul át tüdővel és négy végtaggal rendelkező, szárazföldön is életképes kifejlett egyeddé - eközben a kopoltyú eltűnik, a tüdő kialakul, és a végtagok megjelennek.',
                  'Ez az elv - hogy az egyedfejlődés radikális testfelépítés-váltással jár - más állatcsoportoknál is megjelenik: a korábban (Rovarok fejezet) megismert teljes átalakulás (pete-lárva-báb-imágó) hasonlóan gyökeres átépülést jelent, mint ahogy az Előgerinchúrosok fejezetben megismert zsákállatok lárva-felnőtt átalakulása is.',
                ],
              },
              {
                heading: 'Kétlaki életmód és környezeti kapcsolat',
                paragraphs: [
                  'A "kétéltű" elnevezés arra utal, hogy ezek az állatok életük során két közeghez is kötődnek: a szaporodás és a lárvakor jellemzően vízhez kötött (az ikra kiszáradna szárazon), míg a kifejlett egyedek már szárazföldön is élhetnek, bár a nedves bőr miatt a száraz élőhelyeket továbbra is kerülik.',
                  'Érzékeny, nedves bőrük miatt a kétéltűek a környezetszennyezés és az élőhelyváltozások kiváló jelzőfajai (bioindikátorok): populációik gyors csökkenése gyakran a vízminőség vagy az élőhely romlását jelzi.',
                  'Bőrük nyálkamirigyei mellett sok fajnál mérgező váladékot termelő mirigyek is találhatók, amelyek a ragadozók elleni védekezést szolgálják - a hazai fajok közül például a foltos szalamandra bőre enyhén mérgező váladékot bocsát ki, míg trópusi rokonaik (nyílméregbékák) közt rendkívül erős mérgeket termelő fajok is akadnak. Hazánkban él például a zöld levelibéka és az erdei béka is, mindkettő jól példázza a kétéltűekre jellemző, vízhez kötött szaporodást.',
                ],
              },
            ],
            keyTerms: ['Kétéltűek osztálya', 'bőrlégzés', 'átalakulásos egyedfejlődés', 'bioindikátor'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a kétéltűek testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert csontos halakhoz képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a csontos halakhoz képest',
                paragraphs: [
                  'A legjelentősebb evolúciós újítás a páros végtagok megjelenése: a csontos halak úszóit ízelt csontokból felépülő, a testsúlyt is megtartani képes végtagok váltják fel, amelyek elengedhetetlenek a szárazföldi mozgáshoz.',
                  'A tüdő megjelenése szintén alapvető újítás: ez teszi lehetővé a levegőből történő oxigénfelvételt, ami a szárazföldi élet előfeltétele. A kétéltűek tüdeje azonban még egyszerű felépítésű, viszonylag kis belső felülettel, ezért önmagában nem elegendő a teljes oxigénigény fedezésére - ez magyarázza, miért maradt fenn kiegészítésként a bőrlégzés.',
                  'A háromüregű szív és a kettős vérkör megjelenése az első lépés a csontos halak egyszerű, egykörös keringéséhez képest: a tüdő-vérkör és a test-vérkör elkülönülése hatékonyabb oxigénellátást tesz lehetővé, ugyanakkor a kamrában történő vérkeveredés még korlátozza ennek hatékonyságát - ez a probléma a későbbi (Hüllők, Madarak, Emlősök fejezetekben tárgyalt) gerinces csoportoknál fokozatosan oldódik meg a kamra teljes kettéválásával.',
                  'A kétéltűek szaporodása azonban még jelentős korlátba ütközik: ikrájuk nem rendelkezik magzatburokkal (amnionnal) és szilárd burokkal, ezért kiszáradna a szárazföldön - emiatt a szaporodás és a lárvakor továbbra is vízhez kötött marad. Ez a korlátozás csak a Hüllők fejezetben tárgyalt, magzatburokkal védett (amniota) tojás megjelenésével oldódik meg, amely lehetővé teszi a szaporodás teljes függetlenedését a víztől.',
                ],
              },
            ],
            keyTerms: ['kettős vérkör', 'háromüregű szív', 'tüdő', 'amnion'],
          },
        },
      },
      {
        id: 'hullok',
        title: 'Hüllők',
        order: 22,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Kétéltűek', 'Hüllők'],
          rows: [
            ['Kültakaró', 'csupasz, nyálkás bőr', 'száraz, szaruréteggel borított pikkelyek'],
            ['Légzés', 'tüdő + bőrlégzés', 'kizárólag tüdő'],
            ['Szaporodás/tojás', 'vízhez kötött ikra, nincs magzatburok', 'szárazföldi, amniota tojás magzatburokkal és héjjal'],
            ['Szív', 'háromüregű, jelentős vérkeveredés', 'háromüregű, részlegesen elkülönült kamra (krokodiloknál négyüregű)'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Kétéltűek fejezet) megismert, még vízhez kötött szaporodású csoport után a hüllőkkel a Gerincesek altörzsének azt az osztályát ismerjük meg, amely már teljesen függetlenedett a víztől, és a szárazföld minden élőhelyét képes volt meghódítani.',
            sections: [
              {
                heading: 'Rendszertani hely és testfelépítés',
                paragraphs: [
                  'A hüllők (Reptilia) a Gerincesek altörzsének osztálya. Testük fejre, törzsre, farokra és jellemzően két pár végtagra tagolódik, bár egyes csoportoknál (pl. kígyók) a végtagok az evolúció során visszafejlődtek, és a mozgást testhullámzással oldják meg.',
                  'Kültakarójuk száraz, szaruréteggel (keratinnal) borított pikkelyekből áll, amely a korábban (Kétéltűek fejezet) megismert csupasz, nyálkás bőrrel szemben szinte teljesen vízzáró - ez teszi lehetővé, hogy a hüllők a legszárazabb élőhelyeken (pl. sivatagokban) is megéljenek anélkül, hogy kiszáradnának.',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'Mozgásukat a négy végtag (kúszás, futás) vagy - végtagok hiányában - a testhullámzás biztosítja. Táplálkozásuk túlnyomórészt ragadozó jellegű (rovarok, kisebb gerincesek elfogyasztása), bár egyes csoportoknál (pl. egyes teknősfajoknál) növényevés is előfordul.',
                  'Légzésük - a kétéltűekkel ellentétben - kizárólag tüdővel történik, hiszen a szaruréteg miatt a bőrön keresztül már nem lehetséges a gázcsere; ezt a szaruréteg okozta hátrányt a korábbinál fejlettebb, nagyobb belső felületű tüdő ellensúlyozza.',
                  'Anyagszállító rendszerük szíve háromüregű, de a kamrában már részleges válaszfal található, amely csökkenti (bár nem szünteti meg teljesen) az oxigénben gazdag és szegény vér keveredését a korábban (Kétéltűek fejezet) megismert állapothoz képest; a krokodiloknál a válaszfal már teljes, így szívük gyakorlatilag négyüregű.',
                  'Szaporodásuk ivaros, belső megtermékenyítéssel, és jellegzetes szárazföldi, amniota tojással történik: a magzatburok (amnion) és a szilárd, mészhéjú vagy bőrszerű héj együtt védi az embriót a kiszáradástól, így a tojás - a kétéltűek ikrájával ellentétben - szárazföldön is fejlődőképes. Érzékszerveik közül kiemelendő a jól fejlett szem, egyes csoportoknál (pl. kígyóknál) a nyelvvel és a szájpadláson lévő Jacobson-szervvel történő kémiai érzékelés, valamint egyes fajoknál (pl. csörgőkígyók) a hőérzékelő szerv.',
                ],
              },
              {
                heading: 'Környezeti kapcsolat és testhőmérséklet-szabályozás',
                paragraphs: [
                  'A hüllők - a kétéltűekhez és a halakhoz hasonlóan - változó testhőmérsékletűek (ektotermek): testhőmérsékletük a környezeti hőmérséklettől függ, ezért gyakran napoznak a testhőmérséklet emelése, illetve árnyékba húzódnak a hűtés érdekében.',
                  'A vízzel való takarékos gazdálkodást kiválasztásuk is szolgálja: a korábban (Szervetlen molekulák fejezet) megismert kiválasztási típusok közül a hüllők az urikotelikus utat követik, azaz bomlástermékeiket jellemzően kevés vizet igénylő, szilárd húgysav formájában ürítik, ami tovább csökkenti a szervezet vízveszteségét - ez is hozzájárul ahhoz, hogy száraz élőhelyeken is megéljenek.',
                  'A szárazságtűrő bőr és az amniota tojás együttesen tették lehetővé, hogy a hüllők a Föld szinte minden szárazföldi élőhelyét meghódítsák, a sivatagoktól a trópusi esőerdőkig, és közülük egyes csoportok (pl. tengeri teknősök, krokodilok) másodlagosan vízi életmódra is áttértek.',
                ],
              },
              {
                heading: 'Sokféleségük',
                paragraphs: [
                  'A hüllők közé tartoznak a pikkelyes hüllők (gyíkok, kígyók), a teknősök (páncéllal védett testű, fogatlan, szarukávával táplálkozó csoport) és a krokodilok (a hüllők legfejlettebb keringési rendszerével rendelkező, vízi ragadozó életmódú csoport) - mindegyik csoport jól példázza a szaruréteg és az amniota tojás közös, ám a testfelépítésben és életmódban igen sokféle megvalósulását.',
                ],
              },
            ],
            keyTerms: ['Hüllők osztálya', 'szaruréteg', 'ektoterm szabályozás', 'Jacobson-szerv'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a hüllők testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert kétéltűekhez képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a kétéltűekhez képest',
                paragraphs: [
                  'A legjelentősebb evolúciós újítás az amniota tojás megjelenése: a magzatburok (amnion) és a szilárd héj együttesen megszüntetik azt a korlátot, amely a korábban (Kétéltűek fejezet) megismert kétéltűek szaporodását még a vízhez kötötte. Ez a fejlemény tette lehetővé, hogy a gerincesek evolúciója során a szaporodás - és ezáltal az egész életciklus - teljesen függetlenedjen a víztől.',
                  'A száraz, szaruréteggel borított bőr szintén alapvető újítás: a kétéltűek nedves, kiegészítő légzésre is használt bőréhez képest ez a bőrtípus már nem alkalmas gázcserére, cserébe viszont sokkal hatékonyabban gátolja a párolgást - ez a csere (bőrlégzés elvesztése a jobb vízzáró képességért) tette lehetővé a száraz élőhelyek meghódítását.',
                  'A szív felépítésében is továbblépés történik: a kamra részleges (krokodiloknál teljes) válaszfala csökkenti az oxigénben gazdag és szegény vér keveredését a kétéltűek háromüregű szívéhez képest, hatékonyabb oxigénellátást biztosítva - ez a folyamat a későbbi (Madarak, Emlősök fejezetekben tárgyalt) csoportoknál a kamra teljes kettéválásával és a négyüregű szív kialakulásával fejeződik be.',
                  'A kiválasztás átalakulása is a víztől való függetlenedést szolgálja: a kétéltűek (és a legtöbb vízi állat) a mérgező ammóniát nagy mennyiségű vízzel hígítva, vagy kevésbé mérgező, de vízoldékony karbamid formájában ürítik, ami folyamatos vízhozzáférést igényel. A hüllők ezzel szemben szilárd, alig oldódó húgysavat választanak ki, amely az amniota tojáson belül is biztonságosan felhalmozható anélkül, hogy mérgezné a fejlődő embriót - ez az anyagcsere-átalakulás elengedhetetlen előfeltétele volt mind a szárazföldi felnőtt életmódnak, mind a szárazföldi tojásrakásnak.',
                ],
              },
            ],
            keyTerms: ['amniota tojás', 'részlegesen elkülönült kamra', 'húgysav'],
          },
        },
      },
      {
        id: 'madarak',
        title: 'Madarak',
        order: 23,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Hüllők', 'Madarak'],
          rows: [
            ['Testhőmérséklet', 'változó (ektoterm)', 'állandó (endoterm)'],
            ['Szív', 'háromüregű, részlegesen elkülönült kamra', 'négyüregű, teljesen elkülönült vérkörök'],
            ['Légzés', 'tüdő', 'tüdő + légzsákok (kettős légzés)'],
            ['Kültakaró', 'szaruréteges pikkelyek', 'tollazat'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Hüllők fejezet) megismert, még változó testhőmérsékletű csoport után a madarakkal a Gerincesek altörzsének azt az osztályát ismerjük meg, amely a repülésre specializálódott, és elsőként alakított ki állandó testhőmérsékletet.',
            sections: [
              {
                heading: 'Rendszertani hely és testfelépítés',
                paragraphs: [
                  'A madarak (Aves) a Gerincesek altörzsének osztálya. Testük a repülésre specializálódott: elülső végtagjaik szárnnyá alakultak, csontjaik nagy része üreges (pneumatikus), ami jelentősen csökkenti a testsúlyt repülés közben. Állkapcsukból hiányoznak a fogak, helyette könnyű, szaru anyagú csőr alakult ki.',
                  'Kültakarójuk a hüllők szaruréteges pikkelyeiből módosult, ám azoknál sokkal összetettebb szerkezetű tollazat, amely egyszerre biztosítja a repülési felületet (evezőtollak, faroktollak) és a hatékony hőszigetelést (pehelytollak).',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'Mozgásuk elsődlegesen a repülés, amelyet az erős mellizomzat és a mellcsonton található, izomtapadási felületet növelő szegycsonttaréj tesz lehetővé; egyes csoportok (pl. strucc, pingvin) másodlagosan elvesztették a repülőképességüket, és futásra vagy úszásra specializálódtak.',
                  'Táplálkozásuk rendkívül sokféle (magevő, rovarevő, ragadozó, halevő), csőrük alakja szorosan illeszkedik a táplálék típusához; mivel foguk nincs, a táplálékot zúzógyomrukban - gyakran lenyelt kavicsok segítségével - őrlik meg.',
                  'Légzésük egyedülálló: tüdejükhöz légzsákok kapcsolódnak, amelyek egyirányú levegőáramlást biztosítanak a tüdőn keresztül (kettős légzés) - ez a korábban megismert gerinces csoportoknál tapasztaltnál is hatékonyabb gázcserét tesz lehetővé, ami a repüléshez szükséges magas anyagcsere-igény fedezéséhez elengedhetetlen.',
                  'Anyagszállító rendszerük szíve négyüregű, két pitvarral és két, teljesen elkülönült kamrával: ez - a korábban (Hüllők fejezet) megismert részleges elkülönüléssel szemben - teljesen megakadályozza az oxigénben gazdag és szegény vér keveredését. Szaporodásuk ivaros, belső megtermékenyítéssel és kemény mészhéjú amniota tojással történik, amelyet a szülők jellemzően fészekben költenek ki, és sok fajnál kiterjedt szülői gondoskodás (etetés, védelem) kíséri.',
                  'Érzékszerveik közül a látás a legfejlettebb: sok fajnál kiváló élességű, színlátásra is képes szem jellemző (a ragadozó madaraknál különösen éles látással), míg a szaglásuk a legtöbb csoportnál kevésbé fejlett.',
                ],
              },
              {
                heading: 'Állandó testhőmérséklet és környezeti kapcsolat',
                paragraphs: [
                  'A madarak - a korábban megismert halakkal, kétéltűekkel és hüllőkkel ellentétben - állandó testhőmérsékletűek (endotermek): testük a környezeti hőmérséklettől függetlenül, anyagcseréjük hőtermelésével tartja fenn a magas, állandó testhőmérsékletet. Ez a tulajdonság teszi lehetővé, hogy hideg élőhelyeken (pl. sarkvidéken) is aktívan mozogjanak, ám cserébe folyamatos, intenzív táplálékfelvételt igényel.',
                  'Kiválasztásuk - a korábban (Hüllők fejezet) megismert urikotelikus úthoz hasonlóan - húgysav formájában történik, amely alig igényel vizet; ez az ürülékükben jól látható fehér, pépes rész, amely elkülönül a béltartalom sötétebb, emészthetetlen maradékától.',
                  'A repülőképesség és az állandó testhőmérséklet együttesen tették lehetővé, hogy a madarak a Föld szinte minden élőhelyét meghódítsák, és sok fajuk hosszú távú vonulásra is képes legyen az évszakos táplálékkínálat változásainak követésére.',
                ],
              },
              {
                heading: 'Sokféleségük és gyakorlati jelentőségük',
                paragraphs: [
                  'A madarak igen sokféle csoportot alkotnak: vannak közöttük kiváló repülők (fecskék, sólymok), futásra specializálódott, repülésképtelen futómadarak (strucc), és úszásra alkalmazkodott, szintén repülésképtelen csoportok (pingvinek) is - jól mutatva, hogy az osztály közös bélyegei (tollazat, endotermia, amniota tojás) mellett igen változatos életmódok alakultak ki.',
                  'A madarak gyakorlati jelentősége is jelentős: sok rovarevő faj természetes rovarirtóként segíti a mezőgazdaságot, a húsevő gyümölcsöket fogyasztó fajok pedig fontos szerepet játszanak a magterjesztésben, ahogy azt a korábban (Zárvatermők fejezet) megismert magterjesztési stratégiáknál is láttuk. Egyes háziasított fajok (pl. tyúk, kacsa) pedig az emberi élelmezés (hús, tojás) fontos forrásai.',
                ],
              },
            ],
            keyTerms: ['Madarak osztálya', 'tollazat', 'légzsák', 'zúzógyomor'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a madarak testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert hüllőkhöz képest.',
            sections: [
              {
                heading: 'Evolúciós újítások a hüllőkhöz képest',
                paragraphs: [
                  'A legjelentősebb evolúciós újítás az állandó testhőmérséklet (endotermia) kialakulása: a korábban (Hüllők fejezet) megismert ektoterm szabályozáshoz képest ez teljesen függetleníti az állat aktivitását a környezeti hőmérséklettől, cserébe azonban jóval magasabb energiaigénnyel jár, amelyet a fokozott táplálékfelvétel és a hatékonyabb anyagcsere fedez.',
                  'A négyüregű szív és a teljesen elkülönült két vérkör a hüllők részlegesen elkülönült kamrájához képest jelent továbblépést: így a tüdőből visszaérkező, oxigénben gazdag vér egyáltalán nem keveredik az oxigénszegény vérrel, ami az endotermiához szükséges magas anyagcsere-szint fenntartásához elengedhetetlen.',
                  'A légzsákos, kettős légzésű tüdő szintén az endotermia magas oxigénigényét szolgálja: az egyirányú levegőáramlás biztosítja, hogy a tüdőben mindig friss, oxigéndús levegő legyen jelen, szemben a hüllők (és a legtöbb korábbi gerinces csoport) tüdejének kétirányú, kevésbé hatékony légzésével.',
                  'A csontozat üregesedése (pneumatikus csontok) a testsúly csökkentését szolgálja, ami a repülés energetikai feltétele; ez a jelenség jól mutatja, hogy egy evolúciós újítás (repülés) hogyan hat vissza több szervrendszer (váz, légzés, anyagcsere) egyidejű átalakulására.',
                  'A tollazat evolúciós eredete is jól illusztrálja a fokozatos átalakulás elvét: a toll fejlődéstanilag a hüllők szaruréteges pikkelyéből módosult, egyre bonyolultabb szerkezetű képletként alakult ki - a ma élő madarak elődei egyes húsevő dinoszaurusz-csoportokból származnak, amelyeknél a tollazat feltehetően eredetileg hőszigetelő szerepet töltött be, és csak később, a szárny kialakulásával együtt vált alkalmassá a repülésre is - ezt a fokozatos átalakulást számos, tollazat lenyomatát is megőrző kövület (pl. az Archaeopteryx) támasztja alá.',
                ],
              },
            ],
            keyTerms: ['endotermia', 'négyüregű szív', 'kettős légzés'],
          },
        },
      },
      {
        id: 'emlosok',
        title: 'Emlősök',
        order: 24,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Kloákások', 'Erszényesek', 'Méhlepényesek'],
          rows: [
            ['Szaporodás', 'tojásrakó', 'elevenszülő, méhlepény nélkül', 'elevenszülő, méhlepénnyel (placentával)'],
            ['Utódfejlődés', 'tojásban, majd tejjel táplálva', 'erszényben fejeződik be', 'méhen belül teljesen kifejlődve'],
            ['Példa', 'kacsacsőrű emlős', 'kenguru', 'ember, kutya, bálna'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Madarak fejezet) megismert, endoterm és négyüregű szívű csoport után az emlősökkel a Gerincesek altörzsének utolsó, ma élő nagy osztályát ismerjük meg - ez az az osztály, amelybe az ember is tartozik.',
            sections: [
              {
                heading: 'Rendszertani hely és testfelépítés',
                paragraphs: [
                  'Az emlősök (Mammalia) a Gerincesek altörzsének osztálya. Testüket szőrzet borítja, amely - a madarak tollazatához hasonlóan, de attól függetlenül kialakulva - elsősorban hőszigetelő szerepet tölt be.',
                  'Fogazatuk differenciált (heterodont): metsző-, szem- és zápfogakra tagolódik, szemben a korábban megismert gerinces csoportok egyöntetű vagy hiányzó fogazatával. Ez lehetővé teszi a táplálék szájban történő alapos, mechanikai előfeldolgozását (rágást), ami hatékonyabbá teszi az emésztést.',
                ],
              },
              {
                heading: 'Életműködések',
                paragraphs: [
                  'Mozgásuk rendkívül változatos: a legtöbb csoportnál négy végtaggal történő járás/futás jellemző, de egyes csoportok végtagjai úszásra (pl. bálnák uszonya) vagy repülésre (pl. denevérek szárnya) módosultak.',
                  'Táplálkozásuk a differenciált fogazatnak köszönhetően jól specializálódhat: húsevő, növényevő és mindenevő csoportok egyaránt kialakultak, mindegyik a saját táplálékához illeszkedő fogazattal.',
                  'Légzésüket - a korábbi gerinces csoportoknál nem tapasztalt - izmos rekeszizom (diafragma) segíti, amely a mellüreg térfogatának változtatásával hatékony szellőztetést biztosít a tüdőben.',
                  'Anyagszállító rendszerük szíve - a madarakhoz hasonlóan - négyüregű, teljesen elkülönült vérkörökkel, és ők is állandó testhőmérsékletűek (endotermek).',
                  'Szaporodásuk ivaros, belső megtermékenyítéssel; a legtöbb emlős elevenszülő, az embrió az anya méhében, méhlepényen (placentán) keresztül táplálkozva fejlődik ki. Minden emlősre jellemző a tejmirigyek általi táplálás - erről kapta az osztály a nevét is (Mammalia, a "mamma", azaz emlő szóból).',
                  'Érzékszerveik közül kiemelkedik a fejlett agy, amelynek nagyagykérge a többi gerinces csoportnál tapasztaltnál jóval fejlettebb, lehetővé téve az összetett viselkedést és a tanulást. Sok fajnál kiemelkedően fejlett a szaglás és a hallás (utóbbit gyakran mozgatható külső fülkagyló is segíti), és számos csoportnál (pl. ragadozóknál) tapintószőrök (bajusz) is kiegészítik az érzékelést.',
                ],
              },
              {
                heading: 'Sokféleségük és környezeti kapcsolat',
                paragraphs: [
                  'Az emlősök szaporodási módja szerint három nagy csoportra oszthatók: a kloákások (pl. a kacsacsőrű emlős) még tojást raknak, az erszényesek (pl. a kenguru) méhlepény nélkül, korán megszülik utódaikat, akik ezután az erszényben fejeznek be a fejlődésüket, míg a méhlepényesek (pl. az ember, a kutya, a bálna) utódai a méhben, méhlepényen keresztül táplálkozva, teljesen kifejlődve születnek meg.',
                  'Az endotermia, a szőrzet és a fejlett agy együttesen tették lehetővé, hogy az emlősök a Föld szinte minden élőhelyét (szárazföld, víz, levegő) meghódítsák, a sarkvidéktől a sivatagokig. Az ember (Homo sapiens) is ebbe az osztályba tartozó, méhlepényes emlős faj, amelynek szervrendszerei ugyanazokat az alapelveket követik, mint a fejezetben tárgyalt többi emlősé.',
                  'Az emlősök gyakorlati jelentősége kiemelkedő: számos háziasított fajuk (pl. szarvasmarha, kecske, kutya, macska) évezredek óta szorosan összefonódik az emberi társadalommal, élelmiszer- (hús, tej), munkaerő- és társ-forrásként egyaránt.',
                ],
              },
            ],
            keyTerms: ['Emlősök osztálya', 'szőrzet', 'heterodont fogazat', 'rekeszizom', 'tejmirigy'],
          },
          emeltExtra: {
            intro: 'Emelt szinten az emlősök testfelépítésében és életműködéseiben megjelenő evolúciós újításokat kell azonosítani és elemezni a korábban megismert madarakhoz képest, kiemelt figyelmet fordítva arra, hogy egyes hasonlóságok (pl. endotermia, négyüregű szív) a két csoportnál egymástól függetlenül, konvergens evolúcióval alakultak ki.',
            sections: [
              {
                heading: 'Evolúciós újítások a madarakhoz képest',
                paragraphs: [
                  'Bár mind az emlősök, mind a korábban (Madarak fejezet) megismert madarak endoterm szabályozásúak és négyüregű szívvel rendelkeznek, ez a két csoportnál egymástól függetlenül, konvergens evolúcióval alakult ki - a hüllő ősöktől elágazva, két különböző fejlődési vonalon jutottak hasonló megoldásra.',
                  'A méhlepényen (placentán) keresztüli, méhen belüli fejlődés a méhlepényes emlősöknél a legfejlettebb szaporodási stratégia a gerincesek között: az embrió az anya szervezetében, annak védelme alatt fejlődik ki, szemben a korábban megismert tojásrakó (hüllők, madarak) vagy vízhez kötött (kétéltűek) szaporodási módokkal. Ez nagyobb energiabefektetést igényel az anyától, cserébe azonban jelentősen megnöveli az utódok túlélési esélyét. A kloákások és az erszényesek fennmaradása jól mutatja, hogy ez a stratégia fokozatosan, köztes formákon át alakult ki.',
                  'A differenciált (heterodont) fogazat és a rágás - szemben a madarak fogatlan csőrével és zúzógyomrával - lehetővé teszi a táplálék hatékony, szájban történő mechanikai előfeldolgozását, ami gyorsabb és teljesebb emésztést eredményez.',
                  'A nagyagykéreg jelentős fejlődése olyan evolúciós újítás, amely a korábbi gerinces csoportoknál tapasztaltnál összetettebb viselkedést (tanulás, szociális együttműködés) tesz lehetővé - ez az emlősök (különösen az ember) evolúciós sikerének egyik kulcstényezője.',
                  'Az emlősökkel lezárul a Gerincesek altörzsének ebben a fejezetsorozatban tárgyalt öt osztálya (csontos halak, kétéltűek, hüllők, madarak, emlősök). Végigkövetve a sorozatot jól látható egy közös evolúciós tendencia: a víztől való fokozatos függetlenedés (kopoltyú → tüdő, ikra → amniota tojás → méhlepényes fejlődés) és a keringési rendszer egyre hatékonyabbá válása (egykörös, kétüregű szív → kettős vérkör, háromüregű szív → négyüregű szív, teljesen elkülönült vérkörök) - ezek az újítások együttesen tették lehetővé egyre nagyobb testméretű, egyre aktívabb életmódú állatok kialakulását, egyre szélesebb körű élőhelyeken.',
                ],
              },
            ],
            keyTerms: ['méhlepény (placenta)', 'kloákások', 'erszényesek', 'nagyagykéreg'],
          },
        },
      },
      {
        id: 'novenyi-szovetek',
        title: 'Növényi szövetek',
        order: 25,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Fatest (xilém)', 'Háncsrész (floém)'],
          rows: [
            ['Szállított anyag', 'víz és oldott ásványi anyagok', 'szerves tápanyagok (elsősorban cukrok)'],
            ['Irány', 'egy irányba, felfelé (gyökértől a levelekig)', 'mindkét irányba, az igény szerint'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Harasztok fejezet) megismert, valódi szövetekkel rendelkező növénycsoportok után ebben a fejezetben azt vizsgáljuk meg részletesen, milyen szövettípusok épülnek fel a növények testében, és ezek hogyan szolgálják a növény működését.',
            sections: [
              {
                heading: 'Osztódószövet',
                paragraphs: [
                  'Az osztódószövet (más néven merisztéma) sejtjei folyamatosan osztódnak, ezáltal biztosítva a növény egész életén át tartó növekedését - ez alapvető különbség az állatokhoz képest, amelyeknél a növekedés jellemzően egy életszakaszra korlátozódik.',
                  'Az osztódószövet a növény meghatározott pontjain, például a gyökér- és a hajtáscsúcsban található (csúcsi osztódószövet), és ez felelős a növény hossznövekedéséért; egyes növényeknél (pl. fás szárúaknál) emellett oldalirányú osztódószövet is kialakul, amely a szár és a gyökér vastagodását teszi lehetővé.',
                ],
              },
              {
                heading: 'Állandósult szövetek',
                paragraphs: [
                  'Az osztódószövet sejtjeiből az osztódási képesség elvesztésével, meghatározott alakra és funkcióra differenciálódva jönnek létre az állandósult szövetek: a bőrszövet, a tápanyagkészítő alapszövet és a szállítószövet.',
                  'A bőrszövet a növény felszínét borítja, és elsődleges szerepe a védelem: megakadályozza a kiszáradást és a kórokozók bejutását. Sejtjei szorosan illeszkednek egymáshoz, felszínüket gyakran vízzáró viaszréteg (kutikula) fedi. A bőrszövetben található apró nyílások, a gázcserenyílások (sztómák) teszik lehetővé a szabályozott gázcserét és páraleadást a növény belseje és a külvilág között - ezek működését a következő (Növényi anyagszállítás) fejezetben ismerjük meg részletesen.',
                  'A tápanyagkészítő (asszimilációs) alapszövet sejtjei tartalmazzák a fotoszintézishez szükséges klorofillt - ez a szövet végzi a korábban (Fotoszintézis fejezet) megismert fotoszintézis folyamatát, elsősorban a levelekben és a fiatal, zöld hajtásokban.',
                  'A szállítószövet a víz és a tápanyagok szállítását végzi a növény különböző részei között, és két, eltérő irányban működő részből áll: a fatest (xilém) a gyökér által felvett vizet és az oldott ásványi anyagokat szállítja felfelé, a levelek felé, míg a háncsrész (floém) a levelekben termelt szerves tápanyagokat (elsősorban cukrokat) juttatja el a növény minden részéhez, akár felfelé, akár lefelé. Ez a szövettípus a korábban (Harasztok fejezet) megismertek szerint először a harasztoknál jelenik meg, kialakulása révén tudtak a haraszt-ősök a mohák egyszerű testfelépítéséhez képest jóval nagyobbra nőni.',
                ],
              },
              {
                heading: 'A szövetek mikroszkópos vizsgálata',
                paragraphs: [
                  'A növényi szövetek fénymikroszkóppal jól tanulmányozhatók: egy egyszerű, otthon is elkészíthető preparátum a hagyma alsó (húsos) leveléről lehúzott, egyetlen sejtrétegből álló bőrszövet-nyúzat, amelyen jól megfigyelhető a bőrszövet sejtjeinek szorosan illeszkedő, szabálytalan alakja, valamint - kedvező metszetben - a gázcserenyílások felépítése is.',
                  'Egyes növényi sejtekben mikroszkóp alatt jól látható kristályzárványok (jellemzően kalcium-oxalát kristályok) figyelhetők meg, amelyek a növény anyagcseréjének melléktermékeként halmozódnak fel a sejtekben, gyakran jellegzetes, tűs vagy csillag alakú formában. Egyes növényeknél (pl. a sóskánál vagy a rebarbaránál) a kristályzárványokat felépítő oxálsav olyan nagy mennyiségben halmozódik fel, hogy ez adja e növények jellegzetes savanykás ízét is.',
                ],
              },
              {
                heading: 'A szövetek és a növényi szervek kapcsolata',
                paragraphs: [
                  'A négy szövettípus (osztódószövet, bőrszövet, alapszövet, szállítószövet) minden növényi szervben - a következő fejezetben tárgyalt gyökérben, szárban és levélben egyaránt - megtalálható, csak eltérő arányban és elrendezésben épülnek fel belőlük: a szervek felépítésének és működésének megértéséhez éppen ezért elengedhetetlen az alkotó szövetek ismerete.',
                ],
              },
            ],
            keyTerms: ['osztódószövet', 'bőrszövet', 'alapszövet', 'szállítószövet', 'kutikula', 'kristályzárvány'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a kristályzárványok biológiai szerepét, valamint az osztódószövetek két típusa közötti funkcionális különbséget érdemes mélyebben megismerni.',
            sections: [
              {
                heading: 'A kristályzárványok védelmi szerepe és az osztódószövetek két típusa',
                paragraphs: [
                  'A növényi sejtekben felhalmozódó kalcium-oxalát kristályzárványoknak nemcsak anyagcsere-melléktermék szerepük van, hanem védelmi funkciót is betöltenek: a kristályok éles, szúrós szerkezete és az oxálsav enyhén maró hatása visszatartja a növényevő állatokat a szövet elfogyasztásától, így a kristályzárvány egyfajta kémiai-mechanikai védekezési stratégiának is tekinthető.',
                  'Az osztódószövetek két típusa eltérő növekedési irányt szolgál: a csúcsi (elsődleges) osztódószövet a hajtás- és gyökércsúcsban működik, és a növény hossznövekedéséért felel, míg az oldalirányú (másodlagos) osztódószövet - amelyet kambiumnak is neveznek - a szár és a gyökér átmérőjének (vastagságának) növelését teszi lehetővé. Ez utóbbi tevékenysége áll a fás szár kialakulása mögött, amelyet a következő (Gyökér, szár, levél) fejezetben ismerünk meg részletesen - ott azt is látni fogjuk, hogy a kambium tevékenysége az évszakok változásával összhangban szezonálisan ingadozik, ami a fatörzsben jellegzetes, évente egy rétegként megjelenő gyűrűzöttséget (évgyűrűket) eredményez.',
                  'Az osztódószövet sejtjeinek további különleges tulajdonsága a totipotencia: megfelelő körülmények között akár egyetlen ilyen sejtből is regenerálódhat egy teljes, önálló növény. Ez az elv áll a kertészetben és a növénynemesítésben alkalmazott szövettenyésztéses klónozás hátterében is, amelyet a (Növényi szaporodás és növekedésszabályozás) fejezetben ismerünk meg részletesebben.',
                  'Ez a tulajdonság jelentősen eltér attól, amit a legtöbb állati sejtnél tapasztalunk: a korábban megismert állatcsoportok (pl. gerincesek) legtöbb kifejlett szövetének sejtjei már véglegesen differenciálódtak, és elvesztették azt a képességüket, hogy önmagukból egy teljesen új egyedet hozzanak létre - ez az egyik legfontosabb szervezeti különbség a növényi és az állati szövetek működése között, és részben magyarázza, hogy a növények miért képesek ilyen könnyen regenerálódni sérülés vagy metszés után.',
                ],
              },
            ],
            keyTerms: ['kambium', 'totipotencia'],
          },
        },
      },
      {
        id: 'gyoker-szar-level',
        title: 'Gyökér, szár, levél',
        order: 26,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Lágy szár', 'Fás szár'],
          rows: [
            ['Kambium működése', 'nincs vagy csak korlátozott', 'folyamatos, évről évre'],
            ['Vastagodás', 'nincs másodlagos vastagodás', 'másodlagos vastagodás (évgyűrűk)'],
            ['Szilárdító szövet', 'kevés, a szár lágy, hajlékony', 'sok, a szár kemény, fás'],
            ['Példa', 'fűfélék, egynyári dísznövények', 'fák, cserjék'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Növényi szövetek fejezet) megismert négy szövettípusból (osztódószövet, bőrszövet, alapszövet, szállítószövet) épül fel a növény három alapvető vegetatív szerve: a gyökér, a szár és a levél - ebben a fejezetben ezek felépítését és alapfunkcióit ismerjük meg.',
            sections: [
              {
                heading: 'A gyökér, a szár és a levél alapfunkciói',
                paragraphs: [
                  'A gyökér elsődleges feladata a növény rögzítése a talajban, valamint a víz és az oldott ásványi anyagok felvétele; egyes növényeknél a gyökér tartalék tápanyagok raktározására is szolgál.',
                  'A szár a növény tengelye, amely összeköti a gyökeret a levelekkel: biztosítja a növény mechanikai tartását, és a benne futó szállítószöveten keresztül közvetíti a víz és a tápanyagok áramlását a gyökér és a levelek között.',
                  'A levél a növény fő fotoszintetizáló szerve - itt zajlik a korábban (Fotoszintézis fejezet) megismert folyamat -, emellett a levél felszínén található gázcserenyílásokon keresztül történik a gázcsere és a párologtatás (transzspiráció) is.',
                ],
              },
              {
                heading: 'A gyökér felépítése',
                paragraphs: [
                  'A gyökér hosszmetszetén jól elkülöníthető a gyökércsúcsot védő gyökérsüveg, mögötte az osztódó sejtekből álló zóna, majd a megnyúlási zóna, végül a gyökérszőrös zóna, ahol a gyökér felszínét beborító, a korábban (Zárvatermők fejezet) megismert gyökérszőrök jelentősen megnövelik a felszívó felületet.',
                  'A gyökér keresztmetszetében kívülről befelé haladva a bőrszövet, majd az alapszövet, legbelül pedig a szállítószövet (fatest és háncsrész) helyezkedik el - ez az elrendezés biztosítja, hogy a gyökérszőrökön felvett víz gyorsan eljusson a szállítószövetbe.',
                ],
              },
              {
                heading: 'A szár felépítése: lágy szár és fás szár',
                paragraphs: [
                  'A lágy szárú növényeknél (pl. a legtöbb egynyári dísznövénynél, fűféléknél) nincs jelentős másodlagos vastagodás, a szár rugalmas és hajlékony marad egész életében. Keresztmetszetükben a szállítónyalábok (amelyekben a fatest és a háncsrész is megtalálható) jellemzően szórtan vagy egy körben elrendezve helyezkednek el, folyamatos kambiumgyűrű nélkül.',
                  'A fás szárú növényeknél (fák, cserjék) a korábban (Növényi szövetek fejezet) megismert kambium egész életen át folyamatosan új szállítószövetet termel, ami a szár fokozatos vastagodásához (másodlagos vastagodáshoz) vezet. Mivel a kambium tavasszal-nyár elején nagyobb, laza szerkezetű, ősszel-télen pedig kisebb, sűrűbb sejteket hoz létre, ez a szezonális különbség adja a fatest jellegzetes, évente egy-egy gyűrűt alkotó rétegződését (évgyűrűk) - ezek megszámolásával megbecsülhető a fa kora. A fás szár keresztmetszetében kívülről befelé haladva a védő kéreg (bőrszövet), majd a háncsrész, ezt követően a folyamatosan osztódó, vékony kambiumgyűrű, majd a legnagyobb térfogatú farész (fatest, benne az évgyűrűkkel), legbelül pedig a szár közepén elhelyezkedő bél következik.',
                ],
              },
              {
                heading: 'A levél felépítése',
                paragraphs: [
                  'A lomblevél jellemzően levéllemezből és levélnyélből áll, a levéllemezt behálózó levélerek (amelyek a szállítószövet folytatásai) biztosítják a víz és a tápanyagok szállítását, egyúttal mechanikai támasztékot is adnak a levélnek.',
                  'A lomblevél keresztmetszetében felül és alul egy-egy bőrszövet-réteg található, közöttük az alapszövet két rétegre tagolódik: a felső, oszlopos alapszövetben zajlik a fotoszintézis nagy része (itt a legtöbb a klorofill), az alsó, lazább, sejtközötti járatokkal átszőtt szivacsos alapszövet pedig a gázok (szén-dioxid, oxigén, vízgőz) áramlását segíti a levélen belül.',
                ],
              },
              {
                heading: 'A felépítés és a működés összefüggése',
                paragraphs: [
                  'Mindhárom szerv felépítése jól tükrözi a betöltött funkciót: a gyökér elágazó, nagy felületű, gyökérszőrökkel sűrűn borított szerkezete a hatékony víz- és tápanyagfelvételt szolgálja; a szár szállítószövetének folytonossága biztosítja a gyökér és a levelek közötti zavartalan anyagáramlást; a levél lapos, kiterített formája pedig a lehető legnagyobb felületet biztosítja a fényelnyeléshez és a gázcseréhez.',
                ],
              },
            ],
            keyTerms: ['gyökérsüveg', 'gyökérszőrös zóna', 'lágy szár', 'fás szár', 'évgyűrű', 'levéllemez', 'oszlopos alapszövet', 'szivacsos alapszövet'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a gyökér, a szár és a levél felépítésének környezethez való anatómiai alkalmazkodását, valamint az e szervek módosulásából kialakuló, speciális funkciójú képleteket kell megismerni.',
            sections: [
              {
                heading: 'Anatómiai alkalmazkodás a környezethez',
                paragraphs: [
                  'A száraz élőhelyeken élő növények (xerofiták) anatómiája a vízveszteség csökkentésére rendezkedik be: vastagabb kutikula, kisebb levélfelület (esetenként tövissé módosult levél), valamint mélyre hatoló vagy éppen a talaj felszínén szélesen szétterülő gyökérzet jellemzi őket.',
                  'A vízben élő növények (hidrofiták) ezzel szemben gyakran vékony kutikulával és kevés gázcserenyílással rendelkeznek (hiszen a víz felől nincs kiszáradási veszély), szöveteikben pedig nagy légjáratok biztosítják a levegő eljutását a víz alatti részekhez is; gyökérzetük emellett gyakran kevésbé fejlett, hiszen a vízfelvétel a test felszínén keresztül is megtörténhet.',
                ],
              },
              {
                heading: 'Módosult szervek',
                paragraphs: [
                  'A gyökér, a szár és a levél az evolúció során gyakran különleges, a törzsfejlődés során kialakult, eltérő funkciót ellátó módosult szervvé alakult: a gyökér módosulhat raktározó gyökérré (pl. répa, cékla - tartalék tápanyagot halmoz fel) vagy léggyökérré (egyes trópusi, nagy páratartalmú esőerdőkben élő növényeknél, amelyek fákra kapaszkodva nőnek, a levegőből is képes nedvességet felvenni).',
                  'A szár módosulhat föld alatti raktározó gumóvá (pl. a burgonya szárgumója), amely tartalék tápanyagot (keményítőt) halmoz fel, vagy indává, amely a vegetatív szaporodást segíti elő. A levél is módosulhat: a kaktuszok tövissé alakult levele csökkenti a párolgást és egyben védelmet is nyújt, míg egyes rovarfogó növényeknél a levél a tápanyagszegény élőhelyen való túlélést segítő csapdává alakult. A hagyma húsos, tápanyagraktározó rétegei szintén módosult levelek, amelyeket egy rövid, korong alakú módosult szár (a hagymatő) tart össze - ez a példa is jól mutatja, hogy egy adott szerv módosulása gyakran több szomszédos szerv (itt: szár és levél) együttes átalakulásával jár.',
                ],
              },
            ],
            keyTerms: ['xerofita', 'hidrofita', 'léggyökér', 'szárgumó'],
          },
        },
      },
      {
        id: 'novenyi-anyagszallitas',
        title: 'Növényi anyagszállítás',
        order: 27,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Nyitott gázcserenyílás', 'Zárt gázcserenyílás'],
          rows: [
            ['Zárósejtek állapota', 'vízzel telt (nagy turgornyomás)', 'vizet vesztett (kis turgornyomás)'],
            ['Gázcsere', 'szabad', 'akadályozott'],
            ['Párologtatás mértéke', 'nagy', 'lecsökkent'],
            ['Jellemző körülmény', 'napközben, jó vízellátás mellett', 'szárazság, erős napsütés, éjszaka'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Gyökér, szár, levél fejezet) megismert szervek felépítése alapozza meg, hogyan jut el a víz a talajtól egészen a levelek gázcserenyílásáig - ebben a fejezetben ezt az anyagszállítási folyamatot vizsgáljuk meg közelebbről.',
            sections: [
              {
                heading: 'A gázcserenyílás felépítése és működése',
                paragraphs: [
                  'A gázcserenyílás (sztóma) a korábban (Növényi szövetek fejezet) megismert bőrszövet két, sajátos alakú zárósejtje által közrefogott apró nyílás, amely elsősorban a levelek alsó felszínén, nagy számban helyezkedik el.',
                  'A zárósejtek vízfelvétele (turgornyomásuk változása) szabályozza a nyílás méretét: ha a zárósejtek megszívják magukat vízzel, a nyílás kinyílik, ha vizet vesztenek, összezáródik. Ez a mechanizmus teszi lehetővé, hogy a növény a fényviszonyoktól és a vízellátástól függően szabályozza a gázcsere és a párologtatás mértékét.',
                  'A legtöbb szárazföldi növénynél a gázcserenyílások túlnyomó többsége a levél alsó felszínén helyezkedik el, nem pedig a felsőn: ez csökkenti a közvetlen napsugárzásnak kitett felső felszínen történő túlzott vízvesztést, miközben a gázcsere így is zavartalanul zajlik.',
                  'A gázcserenyílások szabályozása különösen fontos szárazság idején: ha a növény nem tudná időben bezárni a nyílásokat, a túlzott párologtatás miatt gyorsan kiszáradna - ez a szabályozás tehát nemcsak a gázcserét, hanem a növény vízháztartásának egyensúlyát is védi.',
                ],
              },
              {
                heading: 'A víz útjának megfigyelése',
                paragraphs: [
                  'A víz növényen belüli szállítása egyszerű kísérlettel is megfigyelhető: ha egy fehér virágú növény (pl. szegfű) elvágott szárát színes tintával kevert vízbe állítjuk, a festék felszívódik a szárban futó szállítószöveten keresztül, és néhány óra alatt megszínezi a szár ereit, majd a virág szirmait is.',
                  'Ez a kísérlet bizonyítja, hogy a víz a szárban egy meghatározott, jól elkülöníthető szöveten keresztül, folyamatosan, alulról felfelé áramlik - ezt a folyamatos vízáramot nevezzük vízszállításnak, a levelek gázcserenyílásain keresztüli vízgőz-leadást pedig párologtatásnak (transzspirációnak).',
                ],
              },
              {
                heading: 'A szerves tápanyagok szállítása',
                paragraphs: [
                  'Amíg a fatest (xilém) kizárólag a talajból felvett vizet és ásványi anyagokat szállítja, alulról felfelé, addig a korábban (Növényi szövetek fejezet) megismert háncsrész (floém) a levelekben a fotoszintézis során termelt szerves tápanyagokat (elsősorban cukrokat) juttatja el a növény minden olyan részéhez, ahol azokra szükség van - ez lehet felfelé (pl. a növekvő hajtáscsúcs) vagy lefelé (pl. a raktározó gyökér) is, a pillanatnyi igényektől függően.',
                ],
              },
              {
                heading: 'Az anyagszállítás jelentősége',
                paragraphs: [
                  'A hatékony anyagszállítás nélkülözhetetlen ahhoz, hogy a növény minden sejtje - még a gyökértől távol eső levelek és hajtáscsúcsok is - folyamatosan hozzájusson a szükséges vízhez, ásványi anyagokhoz és a fotoszintézis során termelt szerves tápanyagokhoz.',
                  'A korábban (Zárvatermők fejezet) megismertek szerint éppen a fejlett szállítószövet tette lehetővé, hogy egyes növények (pl. a tölgy, a bükk) rendkívül magasra nőjenek: minél magasabb a növény, annál nagyobb utat kell megtennie a víznek a gyökértől a lombkorona csúcsáig, ami csak egy jól működő, folyamatos vízoszlopot fenntartó szállítórendszerrel lehetséges.',
                  'Ha az anyagszállítás bármilyen okból (pl. tartós szárazság, gyökérkárosodás) akadozik, a növény hervadni, fonnyadni kezd: a sejtek elveszítik a turgornyomásukat fenntartó vizet, ami a levelek és a hajtások lekonyulásában is jól látható - ez a jelenség önmagában is bizonyítja, mennyire létfontosságú a folyamatos vízutánpótlás.',
                ],
              },
            ],
            keyTerms: ['gázcserenyílás', 'zárósejt', 'transzspiráció'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a víz növényen belüli szállítását hajtó kémiai és fizikai erőket, valamint a felvett víz- és szén-dioxid-molekulák sorsát kell megismerni és értelmezni.',
            sections: [
              {
                heading: 'A vízszállítás hajtóerői',
                paragraphs: [
                  'A víz növényen belüli, gyökértől a levelekig tartó szállítását négy, egymást kiegészítő hajtóerő teszi lehetővé. A gyökérnyomás a gyökérsejtek aktív, ozmózissal történő anyagfelvételéből ered: a gyökérsejtekben a talajénál nagyobb az oldott anyagok koncentrációja, ezért víz áramlik befelé, ami alulról enyhe nyomást fejt ki a szállítószövetre.',
                  'A kapillaritás a korábban (Szervetlen molekulák fejezet) megismert kohézió és adhézió együttes hatásából ered: a szállítószövet rendkívül vékony csövecskéiben a vízmolekulák egymáshoz (kohézió) és a cső falához (adhézió) is tapadnak, ami a vizet felfelé "húzza" a csövekben.',
                  'A legfontosabb hajtóerő a párologtatás (transzspiráció): a levelek gázcserenyílásain keresztül elpárolgó víz szívóhatást (ozmotikus szívóerőt) hoz létre, amely a szállítószövet vízoszlopán keresztül egészen a gyökérig érvényesül, és ez húzza fel a vizet a legmagasabb fák csúcsáig is. Minél nagyobb a párologtatás (pl. száraz, meleg, szeles időben), annál erősebb ez a felfelé húzó hatás.',
                ],
              },
              {
                heading: 'A víz- és a szén-dioxid-molekula sorsa a növényben',
                paragraphs: [
                  'A talajból a gyökérszőrökön felvett vízmolekula a gyökér szállítószövetébe jutva a szárban felfelé áramlik, majd a levélbe érve kétféle sorsra juthat: egy része a gázcserenyíláson keresztül elpárolog (párologtatás), másik része pedig a korábban (Fotoszintézis fejezet) megismert fényszakaszban hasad szét - hidrogénje szerves anyagba épül, oxigénje pedig oxigéngázként távozik a levegőbe.',
                  'A levegőből a gázcserenyíláson bejutó szén-dioxid-molekula a szivacsos alapszöveten át az oszlopos alapszövet sejtjeibe jut, ahol a fotoszintézis korábban (Fotoszintézis fejezet) megismert sötétszakaszában (Calvin-ciklusban) szerves anyag (szőlőcukor) épül fel belőle.',
                  'A korábban bemutatott színes tintás kísérlet is jól értelmezhető ezen ismeretek fényében: mivel a festék kizárólag a szállítószövetben, alulról felfelé terjed, a kísérlet egyértelműen bizonyítja, hogy a vízszállítás iránya a gyökértől a levelek felé mutat, és hogy erre a folyamatra kizárólag a fatest (nem pedig a háncsrész) alkalmas - ha ugyanis a háncsrész is részt venne a víz felfelé szállításában, a festéknek a szár belsejében, a fatesttől eltérő helyen is meg kellene jelennie, ezt azonban a kísérlet nem mutatja.',
                ],
              },
            ],
            keyTerms: ['gyökérnyomás', 'kapillaritás', 'ozmotikus szívóerő'],
          },
        },
      },
      {
        id: 'virag-es-termes',
        title: 'Virág és termés',
        order: 28,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Egylaki növény', 'Kétlaki növény'],
          rows: [
            ['Hím és nő virágok helye', 'ugyanazon az egyeden', 'külön-külön egyedeken'],
            ['Az egyes virágok típusa', 'egyivarú (hím vagy nő)', 'egyivarú (hím vagy nő)'],
            ['Példa', 'kukorica, uborka', 'fűzfa, kender'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Zárvatermők fejezet) megismert virágot - amely a takarólevelekből, a bibéből és a zárt magházból áll - ebben a fejezetben az ivarszervek szempontjából vizsgáljuk meg részletesebben, és megismerjük, hogy a virágok milyen eltérő módokon szerveződhetnek egy-egy növényfajon belül.',
            sections: [
              {
                heading: 'A virág biológiai szerepe és részei',
                paragraphs: [
                  'A virág biológiai szerepe a zárvatermők szaporodásának biztosítása: ivarszerveket hordoz, és sok esetben - a korábban (Zárvatermők fejezet) megismertek szerint - feltűnő megjelenésével a beporzást végző rovarokat is vonzza. A virág hímivarszerve a porzó, amely a portokból (ahol a pollen termelődik) és az azt tartó porzószálból áll. A virág nőivarszerve a termő, amely a korábban megismert bibéből, az azt a magházhoz kapcsoló bibeszálból és a magházból épül fel.',
                  'Egy adott hajtáson a virágok elhelyezkedhetnek egyesével, vagy jellegzetes csoportokba (virágzatokba) rendeződve is - ez utóbbira példa a kukorica szárának végén található bugavirágzat, amely önmagában sok apró hímvirágból áll.',
                ],
              },
              {
                heading: 'Egyivarú és kétivarú virág',
                paragraphs: [
                  'Ha egyetlen virágban mind a porzók, mind a termő megtalálhatók, kétivarú virágról beszélünk - a legtöbb ismert virágos növény (pl. a legtöbb gyümölcsfa) ilyen virágot fejleszt.',
                  'Ha egy virágban csak porzók (hímvirág) vagy csak termő (nővirág) van jelen, egyivarú virágról van szó - ezt figyelhetjük meg például a kukoricánál, amelynek a szárán elhelyezkedő bugavirágzata hímvirágokból, a csövön ülő "selyme" pedig a nővirágokhoz tartozó bibeszálakból áll.',
                  'A megkülönböztetés gyakorlati szempontból egyszerű: egy adott virágot megvizsgálva azt kell eldönteni, hogy tartalmaz-e egyszerre porzókat és termőt is (ekkor kétivarú), vagy csak az egyiket (ekkor egyivarú, és el kell dönteni, hím- vagy nővirágról van-e szó).',
                ],
              },
              {
                heading: 'Egylaki és kétlaki növény',
                paragraphs: [
                  'Ha egy növényfaj egyedei egyivarú virágokat fejlesztenek, további megkülönböztetés szükséges: az egylaki növényeknél mind a hím-, mind a nővirágok ugyanazon az egyeden találhatók (pl. a kukorica, az uborka vagy a dió esetében), csak a növény különböző részein.',
                  'A kétlaki növényeknél ezzel szemben a hím- és a nővirágok külön-külön egyeden fejlődnek: vannak "hím" és "nő" egyedek is a fajon belül - ilyen például a fűzfa, a kender vagy a spenót, ahol egy adott növényen csak hímvirágok, egy másikon csak nővirágok találhatók.',
                  'A kétlaki jelleg gyakorlati jelentőséggel is bír: kertészeti vagy mezőgazdasági termesztésnél oda kell figyelni arra, hogy hím és nő egyedek is jelen legyenek egymás közelében, különben a nővirágok nem termékenyülnek meg, és a növény nem hoz termést.',
                  'Összefoglalva: a virágok szerveződése (egyivarú vagy kétivarú, egylaki vagy kétlaki) fajonként eltérő stratégiát képvisel ugyanarra a célra - a sikeres megtermékenyítés biztosítására -, és ez a sokféleség jól mutatja, hogy a zárvatermők evolúciója többféle, egymással versengő megoldást is kitermelt ugyanannak az alapproblémának a megoldására.',
                ],
              },
            ],
            keyTerms: ['porzó', 'termő', 'virágzat', 'egyivarú virág', 'kétivarú virág', 'egylaki növény', 'kétlaki növény'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a nappalhosszúság virágzásra gyakorolt hatását, valamint a virág és a termés részei közötti pontos megfelelést kell megismerni.',
            sections: [
              {
                heading: 'A nappalhosszúság szerepe a virágzásban',
                paragraphs: [
                  'Sok növényfaj virágzását nem (csak) a hőmérséklet, hanem a nappal hossza (pontosabban az éjszaka hossza) szabályozza - ezt a jelenséget fotoperiodizmusnak nevezzük. A rövidnappalos növények csak akkor virágoznak, ha a nappal egy kritikus hossznál rövidebb (jellemzően ősszel), a hosszúnappalos növények csak akkor, ha a nappal ennél hosszabb (jellemzően tavasszal-nyáron), míg egyes fajok nappalhossz-semlegesek, virágzásukat más tényezők (pl. a növény kora) határozzák meg.',
                  'A fotoperiodizmus különösen fontossá válik honosításkor, amikor egy növényt az eredeti élőhelyétől eltérő földrajzi szélességre (és ezáltal eltérő éves nappalhossz-mintázatú területre) telepítenek át: az áttelepített növény virágzási időzítése összezavarodhat, ha az új helyszín nappalhossz-ritmusa jelentősen eltér attól, amihez a faj eredetileg alkalmazkodott - például egy alacsonyabb szélességről (ahol a nappalok egész évben kevésbé ingadoznak) magasabb szélességre telepített, rövidnappalos növény könnyen "elkésik" a virágzással, mielőtt a tél beállna.',
                ],
              },
              {
                heading: 'A virág és a termés részei közötti kapcsolat',
                paragraphs: [
                  'A megtermékenyítés után a virág egyes részei jellegzetes átalakuláson mennek keresztül: a magkezdeményből mag lesz, a magházfalból pedig a termésfal (a termés húsos vagy szilárd, a magot körülvevő része) fejlődik.',
                  'Egyes növényeknél azonban nem (kizárólag) a magházfal alakul termésfallá, hanem más virágrészek (pl. a vacok, a virág alapját alkotó, kiszélesedett szártag) is részt vesznek a termés kialakításában - az így létrejövő képletet áltermésnek nevezzük. Az almánál például a húsos, ehető rész nagy része a vackból fejlődik, a valódi (magházból származó) termésfal csak a mag körüli, porhanyós "mag ház" belső részét adja. Hasonlóan érdekes eset az eper is: a húsos, piros, ehető rész szintén a vackból alakul ki, míg az apró, magnak tűnő felszíni képletek valójában önálló, apró termések - vagyis botanikai értelemben a magok maguk sem a "gyümölcs" belsejében, hanem annak felszínén helyezkednek el.',
                ],
              },
            ],
            keyTerms: ['fotoperiodizmus', 'rövidnappalos növény', 'hosszúnappalos növény', 'termésfal', 'áltermés', 'vacok'],
          },
        },
      },
      {
        id: 'novenyi-szaporodas-novekedesszabalyozas',
        title: 'Növényi szaporodás és növekedésszabályozás',
        order: 29,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Ivaros szaporodás', 'Ivartalan (vegetatív) szaporodás'],
          rows: [
            ['Utódok genetikai állománya', 'változatos (a szülőkétől eltérő)', 'azonos az anyanövényével'],
            ['Sebesség, megbízhatóság', 'lassabb, kevésbé kiszámítható', 'gyors, megbízható'],
            ['Alkalmazkodóképesség', 'nagyobb (változatosság miatt)', 'kisebb (nincs genetikai változatosság)'],
            ['Példa', 'mag-, termésképzés', 'tősarj, dugványozás, oltás, szemzés, klónozás'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Virág és termés fejezet) megismert virágos szaporodás mellett a növények egy egészen más stratégiával, testrészeikből is képesek új egyedet létrehozni - ebben a fejezetben ezt a kétféle szaporodási stratégiát, valamint a csírázást és a növényi hormonok szerepét ismerjük meg.',
            sections: [
              {
                heading: 'A virágos növények fajfenntartó működései',
                paragraphs: [
                  'A virágos növények kétféleképpen tarthatják fenn fajukat: ivaros úton, a korábban (Virág és termés fejezet, illetve Kettős megtermékenyítés fejezet) megismert mag- és termésképzéssel, vagy ivartalan úton, vegetatív szervekkel (gyökérrel, szárral, levéllel) történő szaporodással, amelynek során a szülő növény egy darabjából - megtermékenyítés nélkül - fejlődik ki egy új, önálló egyed.',
                ],
              },
              {
                heading: 'Ivaros és ivartalan szaporítás összehasonlítása',
                paragraphs: [
                  'Az ivaros szaporodás előnye, hogy az utódok genetikailag változatosak (a két szülő tulajdonságainak új kombinációit hordozzák), ami hosszú távon nagyobb alkalmazkodóképességet biztosít a változó környezeti feltételekhez - hátránya viszont, hogy lassabb, energiaigényesebb, és a megtermékenyítés sikere sem garantált.',
                  'Az ivartalan (vegetatív) szaporodás előnye a gyorsaság és a megbízhatóság: az utód genetikailag azonos az anyanövénnyel, így annak minden - akár gazdaságilag is értékes - tulajdonsága biztosan öröklődik. Hátránya, hogy a genetikai változatosság hiánya miatt az egész állomány egyformán érzékeny lehet egy adott kórokozóra vagy kedvezőtlen környezeti változásra - éppen ezért a kertészetben és a mezőgazdaságban gyakran tudatosan kombinálják a kétféle szaporítási módot, hogy a gazdaságilag értékes tulajdonságokat megőrizzék, miközben a génállomány sem szegényedik el teljesen.',
                ],
              },
              {
                heading: 'A növények ivartalan szaporítási módjai',
                paragraphs: [
                  'A tősarjas szaporodás során az anyanövény tövéből új hajtás nő ki, amely előbb-utóbb önálló gyökérzetet fejleszt (pl. sok gyümölcsfajta természetes szaporodása). A dugványozás során egy levágott szár- vagy levéldarabot gyökereztetnek meg, amelyből teljes új növény fejlődik.',
                  'Az oltás során egy értékes tulajdonságú fajta ágát (nemes ág) egy másik, ellenállóbb gyökérzetű növénybe (alany) illesztik be, míg a szemzés hasonló elven működik, de csak egyetlen rügyet ültetnek át az alanyba. A klónozás a korábban (Növényi szövetek fejezet) megismert totipotencia elvét használja ki: a növény osztódó szövetének akár egyetlen sejtjéből is szövettenyésztéssel felnevelhető egy, az eredetivel genetikailag megegyező új egyed - ez az eljárás teszi lehetővé, hogy egy különösen értékes, ritka tulajdonságú egyedi növényből nagy tömegben, egységesen jó minőségű utódokat állítsanak elő.',
                ],
              },
              {
                heading: 'A csírázás feltételei',
                paragraphs: [
                  'A mag csírázásához külső feltételekre (megfelelő hőmérséklet, elegendő víz és oxigén, egyes fajoknál fény jelenléte vagy hiánya) és belső feltételekre (életképes embrió, valamint a mag nyugalmi állapotának megszűnése) egyaránt szükség van - ezek hiányában a mag akár évekig is csírázás nélkül, nyugalmi állapotban maradhat.',
                  'Egy egyszerű csírázási kísérlettel jól vizsgálható ezeknek a feltételeknek a szükségessége: ha azonos fajtájú magvakat (pl. babszemeket) nedves vattán, de eltérő körülmények között (pl. eltérő hőmérsékleten, vagy vízhiányos, illetve oxigénelzárt környezetben) csíráztatunk, összehasonlítható, hogy az egyes feltételek hiánya hogyan gátolja vagy lassítja a csírázást.',
                ],
              },
              {
                heading: 'Hormonális hatásra bekövetkező növényi életműködések',
                paragraphs: [
                  'A növények életműködéseinek jelentős részét hormonok szabályozzák: ilyen hormonális hatásra következik be például a gyümölcsérés, a növekedés üteme, valamint a nyugalmi állapotba lépés (pl. a lombhullás előtti rügy-nyugalom) és az abból való kilépés is - ezek konkrét molekuláris hátterét (pl. az auxinok szerepét) emelt szinten ismerjük meg részletesebben.',
                ],
              },
            ],
            keyTerms: ['vegetatív szaporodás', 'tősarj', 'dugványozás', 'oltás', 'szemzés', 'klónozás', 'csírázás', 'nyugalmi állapot'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a növényi hormonok közül az auxinok általános szerepét kell megismerni a növények életében.',
            sections: [
              {
                heading: 'Az auxinok szerepe a növények életében',
                paragraphs: [
                  'Az auxinok a növényi hormonok egyik legfontosabb csoportja, amelyek elsősorban a hajtáscsúcsban termelődnek, és a növény egész testében kifejtik hatásukat. Az auxinok tartják fenn a hajtáscsúcs-dominanciát: a csúcsi rügyben termelődő auxin gátolja az oldalrügyek kihajtását, ezért ha a csúcsi rügyet eltávolítjuk (pl. metszéskor), az oldalrügyek felszabadulnak a gátlás alól, és a növény bokrosabban kezd nőni.',
                  'Az auxinok egyenlőtlen eloszlása áll a növény fény és nehézségi erő irányába történő növekedési válaszai (tropizmusok) mögött is: a fénnyel ellentétes oldalon felhalmozódó auxin ott gyorsabb sejtmegnyúlást okoz, ezért a hajtás a fény felé hajlik (fototropizmus); hasonló elven, a gravitáció hatására egyenlőtlenül eloszló auxin irányítja a gyökér lefelé, illetve a hajtás felfelé növekedését (geotropizmus).',
                  'Az auxinok gyökeresedést serkentő hatását a gyakorlatban is kihasználják: a korábban megismert dugványozásnál és oltásnál alkalmazott gyökereztető szerek jellemzően mesterséges auxin-tartalmú vegyületeket tartalmaznak, amelyek felgyorsítják az új gyökerek kialakulását a levágott növényi részeken.',
                  'Az auxinszint változása a korábban (középszinten) említett gyümölcsérés és -leválás hátterében is szerepet játszik: amíg a fejlődő magban és a fiatal termésben magas az auxinszint, a termés erősen kapcsolódik a növényhez, az auxintermelés csökkenésével azonban a termés (és ősszel a lombhullás során a levél is) leválik a növényről - ez mutatja, hogy ugyanaz a hormon a növény életének több, egymástól látszólag távoli folyamatát (növekedés, tropizmus, leválás) is képes összehangoltan szabályozni - ez a fajta, egyetlen molekulával megvalósuló, sokrétű szabályozás a növényi hormonok egyik legfontosabb, általános jellemzője.',
                ],
              },
            ],
            keyTerms: ['auxin', 'hajtáscsúcs-dominancia', 'fototropizmus', 'geotropizmus'],
          },
        },
      },
      {
        id: 'allati-szovetek',
        title: 'Állati szövetek',
        order: 30,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Növényi szövetek', 'Állati szövetek'],
          rows: [
            ['Típusok száma', '4 típus (osztódó-, bőr-, alap-, szállítószövet)', '4 típus (hám-, izom-, kötő-, idegszövet)'],
            ['Regenerációs képesség', 'nagy (totipotens osztódószövet)', 'jellemzően kisebb (a legtöbb sejt véglegesen differenciálódott)'],
            ['Mozgásra specializált szövet', 'nincs önálló mozgásszövet', 'izomszövet'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Növényi szövetek fejezet) megismert négyféle növényi szövettel szemben az állatok teste is négy alapvető szövettípusból épül fel - ezeket a szöveteket ebben a fejezetben ismerjük meg részletesen, a bennük rejlő funkció és a felépítésük közötti összefüggésre fókuszálva.',
            sections: [
              {
                heading: 'Hámszövet',
                paragraphs: [
                  'A hámszövet a test felszínét és a testüregeket, valamint a belső szervek felszínét borítja. Működés szerint megkülönböztetünk védőhámszövetet (amely a mechanikai sérülésekkel és a kórokozókkal szembeni védelmet látja el) és mirigyhámszövetet (amely anyagok - pl. nyál, verejték, hormonok - elválasztására specializálódott). A korábban (Emlősök fejezet) megismert tejmirigy is mirigyhámszövetből épül fel.',
                  'Felépítés szerint a hámszövet lehet egyrétegű (egyetlen sejtsor alkotja, jellemzően ott, ahol az anyagok gyors átjutása a cél, pl. a tüdő léghólyagocskáiban) vagy többrétegű (több sejtréteg egymáson, ott alkalmazzák, ahol nagyobb mechanikai védelemre van szükség, pl. a bőr felszínén). A bőr felszínét borító többrétegű elszarusodott laphám jellegzetes felépítése (a felszíni sejtrétegek elszarusodása, majd folyamatos leválása) kiválóan tükrözi ezt a védő funkciót.',
                ],
              },
              {
                heading: 'Izomszövet',
                paragraphs: [
                  'Az izomszövet sejtjei összehúzódásra képesek, ez a szövettípus felelős az állatok mozgásáért - mind a testrészek egymáshoz képesti elmozdulásáért, mind a belső szervek (pl. az emésztőrendszer) működéséért.',
                  'A vázizom (harántcsíkolt izom) a csontvázhoz kapcsolódva biztosítja az akaratlagos mozgást (pl. a végtagok mozgatását); rostjai mikroszkópban jellegzetes, harántirányú csíkolatot mutatnak, amely a szabályosan rendezett összehúzódó fehérjéknek köszönhető.',
                ],
              },
              {
                heading: 'Kötőszövet',
                paragraphs: [
                  'A kötőszövet a szervezet szerveit összekapcsoló, azokat védő és gyakran tápanyagot is raktározó szövettípus - ide tartozik például a korábban megismert zsírszövet is. A kötőszövet sejtjei jellemzően nagy mennyiségű sejtközötti állományt (mátrixot) termelnek, amelynek összetétele határozza meg az adott kötőszövet-típus tulajdonságait.',
                  'A csontszövet mátrixa ásványi anyagokkal (elsősorban kalcium-sókkal) átitatott, ezért rendkívül szilárd - ez teszi alkalmassá a testtartás és a belső szervek védelmére. Meglepő módon az emberi vér is kötőszövet: sejtjei (vörösvértestek, fehérvérsejtek) folyékony sejtközötti állományban (vérplazmában) úsznak, és a vér is a szervezet részei közötti anyagszállítást (összekapcsolást) végzi.',
                  'A kötőszövet családjába tartoznak továbbá az inak (amelyek az izmokat a csontokhoz rögzítik) és a szalagok (amelyek a csontokat kötik össze egymással az ízületeknél) is - ezek rostos szerkezete nagy szakítószilárdságot biztosít, ami elengedhetetlen a mozgás közben fellépő erők elviseléséhez.',
                ],
              },
              {
                heading: 'Idegszövet',
                paragraphs: [
                  'Az idegszövet az ingerület felvételét és vezetését végzi: sejtjei (idegsejtek) hosszú nyúlványaikkal képesek elektromos jeleket gyorsan továbbítani a szervezet távoli pontjai között, ezáltal biztosítva az érzékelés és a mozgásszabályozás összehangolását. Az idegsejtek mellett az idegszövetben ún. gliasejtek is találhatók, amelyek az idegsejteket táplálják, védik és szigetelik, önmaguk azonban nem vezetnek ingerületet.',
                ],
              },
              {
                heading: 'A funkció és a felépítés kapcsolata',
                paragraphs: [
                  'Mind a négy szövettípusnál jól látható, hogy a sejtek alakja, elrendeződése és a köztük lévő anyag mennyisége szorosan tükrözi a betöltött funkciót: a hámszövet sejtjei szorosan illeszkednek (védelem), az izomszövet sejtjei megnyúltak és összehúzódásra képesek (mozgás), a kötőszövet sejtjei köré bőséges sejtközötti anyag rakódik (összekötés, raktározás), az idegszövet sejtjei pedig hosszú nyúlványokkal rendelkeznek (gyors jeltovábbítás).',
                ],
              },
            ],
            keyTerms: ['hámszövet', 'izomszövet', 'kötőszövet', 'idegszövet', 'vázizom', 'csontszövet'],
          },
          emeltExtra: {
            intro: 'Emelt szinten további szövettípusokat kell felismerni, és a látott struktúrák szerepét a szövet működésével összefüggésben kell értelmezni.',
            sections: [
              {
                heading: 'További szövettípusok: simaizom, szívizom, csillós hám, üvegporc',
                paragraphs: [
                  'A simaizom - a vázizommal ellentétben - akaratlanul (a tudatos irányítástól függetlenül) húzódik össze, és a belső szervek (pl. a bélcsatorna vagy az erek fala) mozgatásáért felelős; mikroszkópban nem mutat harántcsíkolatot, mert összehúzódó fehérjéi kevésbé szabályosan rendezettek, mint a vázizomban.',
                  'A szívizom a vázizom és a simaizom tulajdonságait egyesíti: harántcsíkolt (mint a vázizom), de akaratlanul, önállóan, ritmikusan húzódik össze (mint a simaizom) - ezt a saját ritmust a szívizomsejtek különleges, egymást gyorsan ingerlő kapcsolatai teszik lehetővé - ez teszi lehetővé, hogy a szív a szervezet idegi vezérlésétől függetlenül is folyamatosan, ütemesen dobogjon.',
                  'A csillós hám sejtjeinek felszínét apró, mozgásra képes csillók borítják, amelyek összehangolt mozgással anyagokat (pl. nyálkát, benne porszemcséket) képesek továbbítani a hám felszínén - ez a szerkezet jellemzi például a légutak belső felszínét, ahol a becsípődött porszemcséket és baktériumokat a nyálkával együtt a garat felé továbbítja.',
                  'Az üvegporc sima, rugalmas, de nyomásra ellenálló kötőszövet-típus, amelynek mátrixa nem tartalmaz látható rostokat - ez a szerkezet teszi alkalmassá az ízületi felszínek súrlódásmentes mozgatására és a légutak (pl. a légcső) rugalmas, de formatartó megtámasztására.',
                  'Jól látható tehát, hogy mind a négy itt tárgyalt szövet a középszinten megismert alap-szövettípusok (izomszövet, hámszövet, kötőszövet) egy-egy speciális, funkciójában eltérő változata: a simaizom és a szívizom az izomszövet, a csillós hám a hámszövet, az üvegporc pedig a kötőszövet családjába tartozik - ez is jól mutatja, hogy egy adott szövettípuson belül is nagy szerkezeti-funkcionális sokféleség alakulhat ki.',
                ],
              },
            ],
            keyTerms: ['simaizom', 'szívizom', 'csillós hám', 'üvegporc'],
          },
        },
      },
      {
        id: 'allati-szaporodas-egyedfejlodes',
        title: 'Szaporodás és egyedfejlődés',
        order: 31,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Külső megtermékenyítés', 'Belső megtermékenyítés'],
          rows: [
            ['Helyszín', 'a testen kívül, vízben', 'a nőivarú egyed testében'],
            ['Utódszám', 'jellemzően nagy (kis túlélési esély/utód)', 'jellemzően kisebb (nagyobb túlélési esély/utód)'],
            ['Ivadékgondozás', 'jellemzően kevés vagy nincs', 'gyakran kiterjedt'],
            ['Példa', 'csontos halak', 'hüllők, madarak, emlősök'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban megismert állatcsoportok (szivacsoktól az emlősökig) szaporodási módjainak sokfélesége mögött néhány alapvető fogalom és összefüggés húzódik meg - ebben a fejezetben ezeket rendszerezzük, és megvizsgáljuk, hogyan függ össze az állatok szaporodási stratégiája az életkörülményeikkel.',
            sections: [
              {
                heading: 'Alapfogalmak: ivarsejtek és zigóta',
                paragraphs: [
                  'A petesejt a nőivarú egyed ivarsejtje: jellemzően nagyméretű, mozdulatlan, és tartalék tápanyagot (szikanyagot) raktároz, amely a korai egyedfejlődést táplálja. A hímivarsejt ezzel szemben apró, jellemzően ostorral rendelkező, mozgékony sejt, amelynek egyetlen "feladata" a petesejt elérése és megtermékenyítése.',
                  'A megtermékenyítés során a hímivarsejt és a petesejt sejtmagja egyesül, létrehozva a zigótát - ez az új egyed első, még osztatlan sejtje, amelyből az egyedfejlődés minden további lépése kiindul.',
                ],
              },
              {
                heading: 'Hímnősség és váltivarúság',
                paragraphs: [
                  'Egyes állatfajoknál egyetlen egyed mindkét ivarsejttípust (petesejtet és hímivarsejtet is) képes termelni - ezt hímnősségnek nevezzük. Ilyenek például a korábban megismert szivacsok, a földigiliszta (Gyűrűsférgek fejezet) és a csigák nagy része - esetükben azonban a megtermékenyítéshez jellemzően ekkor is két egyed szükséges, amelyek kölcsönösen megtermékenyítik egymást.',
                  'A legtöbb állatfajnál ezzel szemben az egyedek ivarilag elkülönültek (váltivarúak): egy adott egyed vagy kizárólag petesejtet, vagy kizárólag hímivarsejtet termel - ez jellemzi a korábban megismert gerinces csoportok (csontos halak, kétéltűek, hüllők, madarak, emlősök) mindegyikét.',
                ],
              },
              {
                heading: 'Ivari kétalakúság',
                paragraphs: [
                  'Sok váltivarú fajnál a hím és a nő egyedek külső megjelenésükben is jelentősen eltérnek egymástól - ezt a jelenséget ivari kétalakúságnak (nemi dimorfizmusnak) nevezzük. Jellegzetes példa a pávakakas feltűnő, díszes tollazata a jóval szerényebb megjelenésű pávatyúkhoz képest, vagy az oroszlánhím jellegzetes sörénye - ezek a különbségek jellemzően a partnerválasztásban (a másik nem vonzásában) játszanak szerepet.',
                ],
              },
              {
                heading: 'Embrionális és posztembrionális fejlődés',
                paragraphs: [
                  'Az egyedfejlődés embrionális szakasza a megtermékenyítéstől a születésig (vagy a tojásból/ikrából történő kikelésig) tart, ez alatt alakulnak ki az egyed alapvető szervrendszerei. A posztembrionális fejlődés a születés (kikelés) utáni időszakot jelenti, amely alatt az egyed eléri a kifejlett állapotot - ez lehet fokozatos (ahogy a legtöbb gerincesnél), vagy magában foglalhat radikális átalakulást is, ahogy azt a korábban (Kétéltűek fejezet) megismert átalakulásos egyedfejlődésnél (metamorfózisnál) láttuk.',
                ],
              },
              {
                heading: 'Az életkörülmények és a szaporodási mód kapcsolata',
                paragraphs: [
                  'A megtermékenyítés helyszíne szorosan összefügg az állat élőhelyével: a vízi élőhelyű fajoknál (pl. a korábban megismert csontos halaknál) gyakori a külső megtermékenyítés, amikor mindkét ivarsejt a vízbe kerül, és ott egyesül. A szárazföldi (illetve másodlagosan szárazföldi életmódú) fajoknál - pl. a hüllőknél, madaraknál, emlősöknél - ezzel szemben a belső megtermékenyítés a jellemző, hiszen az ivarsejtek szárazföldön történő egyesülése kiszáradás nélkül csak a nőivarú egyed testében védetten valósulhat meg.',
                  'Szoros összefüggés figyelhető meg az utódszám és az ivadékgondozás mértéke között is: a külső megtermékenyítésű fajok jellemzően rendkívül sok utódot (pl. ikrát) hoznak létre, mivel ezek túlélési esélye egyenként alacsony és nincs szülői gondoskodás, míg a belső megtermékenyítésű, kiterjedt ivadékgondozást nyújtó fajok (pl. az emlősök) jellemzően kevesebb utódot hoznak világra, de azok túlélési esélye egyedenként jóval nagyobb.',
                ],
              },
              {
                heading: 'Ivartalan szaporodás és regeneráció az állatvilágban',
                paragraphs: [
                  'Az állatvilágban az ivaros szaporodás mellett ivartalan szaporodás is előfordul, amelynek során az utód egyetlen szülőtől, ivarsejtek egyesülése nélkül jön létre - ilyen a korábban (Csalánozók fejezet) megismert bimbózás, amelynek során a polipformájú egyed testén egy kis kinövés fejlődik önálló egyeddé.',
                  'Az ivartalan szaporodással rokon jelenség a regeneráció: egyes állatok képesek elvesztett testrészeiket újranöveszteni, vagy akár egy leszakadt testrészből egy teljes, új egyedet regenerálni. Erre a legjobb példa a korábban (Laposférgek fejezet) megismert planária, amely testében szétszórtan elhelyezkedő, differenciálatlan neoblasztjai révén akár egyetlen levágott testdarabból is teljes, új egyeddé képes regenerálódni.',
                ],
              },
            ],
            keyTerms: ['petesejt', 'hímivarsejt', 'zigóta', 'hímnősség', 'váltivarúság', 'ivari kétalakúság', 'embrionális fejlődés', 'posztembrionális fejlődés', 'regeneráció'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni az ivaros és az ivartalan szaporodás határterületén álló, különleges jelenséget, a parthenogenezist (szűznemzést).',
            sections: [
              {
                heading: 'Parthenogenezis (szűznemzés)',
                paragraphs: [
                  'A parthenogenezis olyan szaporodási mód, amelynek során a petesejtből megtermékenyítés (hímivarsejttel való egyesülés) nélkül fejlődik ki új egyed - ez formálisan ivarsejtből indul ki (mint az ivaros szaporodás), de a folyamathoz csak egyetlen szülő szükséges (mint az ivartalan szaporodásnál).',
                  'A méheknél a parthenogenezis a nemek meghatározásának alapja: a megtermékenyített (diploid) petesejtekből dolgozók vagy anyakirálynők, a megtermékenyítetlen (haploid) petesejtekből pedig hímek (herék) fejlődnek - ez azt jelenti, hogy a hím méheknek nincs apjuk, csak anyjuk.',
                  'Egyes levéltetű-fajoknál szezonálisan váltakozik a szaporodási mód: nyáron, kedvező körülmények között parthenogenezissel gyorsan szaporodnak (ezzel rövid idő alatt hatalmas populációt hozva létre), ősszel viszont áttérnek az ivaros szaporodásra, amely a genetikai változatosság és a télállóbb, megtermékenyített peték létrehozása miatt előnyösebb a kedvezőtlen évszak túlélésére. Egyes gyíkfajoknál pedig olyan populációk is léteznek, amelyek kizárólag parthenogenezissel szaporodó nőstényekből állnak, hím egyedek nélkül.',
                ],
              },
            ],
            keyTerms: ['parthenogenezis'],
          },
        },
      },
    ],
  },
  {
    id: 'allati-viselkedes',
    title: 'Etológia',
    description: 'Öröklött és tanult magatartásformák, önfenntartás, fajfenntartás, motiváció.',
    icon: 'Brain',
    color: 'from-teal-500 to-cyan-600',
    chapters: [
      {
        id: 'oroklott-tanult-magatartas',
        title: 'Öröklött és tanult magatartásformák',
        order: 1,
        isFree: true,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Öröklött magatartás', 'Tanult magatartás'],
          rows: [
            ['Kialakulás', 'genetikailag kódolt, tapasztalat nélkül is megjelenik', 'egyedi tapasztalat, tanulás alapján alakul ki'],
            ['Változékonyság', 'fajon belül egységes, nem változik az egyed életében', 'egyedenként eltérhet, az élet során módosulhat'],
            ['Rugalmasság', 'kicsi - változó körülményekhez nehezen alkalmazkodik', 'nagy - a környezethez igazítható'],
            ['Kialakulás sebessége/megbízhatósága', 'azonnal rendelkezésre áll, megbízható', 'időt és gyakorlást igényel, hibázhat'],
          ],
        },
        content: {
          kozep: {
            intro: 'Ebben a fejezetben - a korábban megismert állatcsoportok testfelépítése és életműködései után - az állatok viselkedésével kezdünk foglalkozni: azt vizsgáljuk meg, hogyan alakul ki egy adott magatartásforma, és milyen fő típusokba sorolhatók az állatok viselkedésformái.',
            sections: [
              {
                heading: 'Öröklött (veleszületett) magatartásformák',
                paragraphs: [
                  'Az öröklött magatartásformák genetikailag kódoltak: tanulás vagy előzetes tapasztalat nélkül is megjelennek, és az adott faj minden egyedénél hasonlóan, kiszámítható módon zajlanak le. Jellegzetes példa a keresztes pók hálószövése: a pók - amely az Ízeltlábúak törzsébe tartozik, ahogy azt korábban (Rovarok fejezet) már érintettük, a rovaroktól eltérően azonban a Pókszabásúak osztályát alkotja - korábbi tapasztalat vagy megfigyelés nélkül, első alkalommal is képes a fajára jellemző, bonyolult mintázatú hálót megszőni.',
                  'Hasonlóan öröklött magatartás a lazacok szülőhelyükre (ahol ők maguk is kikeltek) történő visszavándorlása ívás céljából: ezt az utat korábbi tapasztalat nélkül, kizárólag genetikailag meghatározott mechanizmusok (pl. szaglási emlékek és mágneses tájékozódás) alapján teszik meg. Az öröklött magatartásformák jellemzően a túléléshez (pl. táplálékszerzés, menekülés) vagy a szaporodáshoz kapcsolódó, a faj számára létfontosságú helyzetekben jelennek meg, ahol a hibázás túl nagy kockázattal járna.',
                ],
              },
              {
                heading: 'Tanult magatartásformák',
                paragraphs: [
                  'A tanult magatartásformák egyedi tapasztalat vagy környezeti hatás eredményeként alakulnak ki, ezért egyedenként eltérhetnek, és az egyed élete során módosulhatnak, finomodhatnak. Jellegzetes példa a kutyák betanítása egyszerű parancsokra (pl. "ül"), amely ismételt gyakorlás és megerősítés (jutalmazás) hatására alakul ki.',
                  'A csimpánzoknál megfigyelhető szerszámhasználat (pl. faágak felhasználása termeszek "kihalászására") szintén tanult magatartás: a fiatal egyedek a csoport tapasztaltabb tagjainak megfigyelésével sajátítják el ezt a technikát, és a technika részletei populációnként eltérhetnek.',
                  'A macskák egerészési technikája is jó példa a tanulásra: a kölyökmacska ösztönösen ragadozó, de a hatékony vadászati technikát (leselkedés, lopakodás, pontosan időzített ugrás) az anyjától eltanulva finomítja - azok a kölykök, amelyek nem figyelhetik meg élő zsákmány elejtését, jellemzően kevésbé hatékony vadászokká válnak.',
                ],
              },
              {
                heading: 'Az öröklött és a tanult magatartás összehasonlítása',
                paragraphs: [
                  'Az öröklött magatartásformák előnye, hogy azonnal, gyakorlás nélkül is megbízhatóan rendelkezésre állnak - ez különösen fontos olyan helyzetekben, ahol nincs idő tanulásra (pl. egy ragadozó elől menekülésnél). Hátrányuk viszont, hogy rugalmatlanok: ha a környezet a fajra jellemző mintától eltérően változik meg, az öröklött magatartás nem, vagy csak korlátozottan tud alkalmazkodni hozzá.',
                  'A tanult magatartásformák ezzel szemben rugalmasak, a változó környezeti feltételekhez igazíthatók, ugyanakkor kialakításuk időt és gyakorlást igényel, és a tanulási folyamat közben hibák is előfordulhatnak - ezért azoknál a fajoknál a leghasznosabbak, amelyek hosszú élettartamúak, és így "megtérül" a tanulásba fektetett idő és energia.',
                  'Ez a különbség magyarázza, hogy a rövid élettartamú, gyorsan szaporodó fajoknál (pl. a rovaroknál) a viselkedés jelentős része öröklött - egyszerűen nincs elég idejük a tanulásra -, míg a hosszú élettartamú, fejlett idegrendszerű fajoknál (pl. az emlősöknél, különösen a főemlősöknél) a tanult magatartásformák aránya jóval nagyobb. Ez utóbbi hátterében a korábban (Emlősök fejezet) megismert, kiemelkedően fejlett nagyagykéreg áll, amely - ahogy azt ott is láttuk - éppen az összetett viselkedés és a tanulás alapja.',
                ],
              },
            ],
            keyTerms: ['öröklött magatartásforma', 'tanult magatartásforma'],
          },
          emeltExtra: {
            intro: 'Emelt szinten azt kell megérteni, hogy a tanult magatartásformák sem függetlenek teljesen az öröklött tényezőktől - a kettő gyakran szorosan összefonódik.',
            sections: [
              {
                heading: 'A tanult magatartásformák öröklött háttere',
                paragraphs: [
                  'Bár a tanult magatartásformák konkrét tartalma egyedi tapasztalat eredménye, a tanulási képesség maga, valamint az, hogy egy adott faj MIT képes megtanulni, gyakran öröklött korlátok közé szorul. Jellegzetes példa erre az énekesmadarak énektanulása: a fiatal hím madár a saját faja jellegzetes énekmintázatát csak egy genetikailag meghatározott, korlátozott időszakban (kritikus periódusban) képes elsajátítani, és kizárólag a saját fajára jellemző alapmintázatot képes megtanulni - más faj énekét hallva sem sajátítja el azt.',
                  'Ez azt mutatja, hogy az öröklött és a tanult magatartás nem éles ellentétek, hanem egy folyamatos átmenet két végpontja: a legtöbb valós magatartásforma mindkét tényező (az öröklött "kész keret" és az egyedi tanulási tapasztalat) együttes hatására alakul ki.',
                  'Hasonló jelenség figyelhető meg a méheknél is: a fiatal dolgozóméhek a táplálékforrás irányát és távolságát jelző, jellegzetes "táncnyelv" alapmozdulatait öröklötten ismerik, ám a tánc pontosságát megfigyeléssel és gyakorlással tovább finomítják - itt is egy öröklött váz épül ki tanult finomhangolással - ez a kettős mechanizmus biztosítja, hogy a méhek kommunikációja egyszerre legyen megbízható és egyre pontosabb.',
                  'Az öröklött tényezők azt is befolyásolják, hogy egy faj MIT képes könnyen megtanulni: rhesusmajmokkal végzett kísérletek szerint az állatok sokkal könnyebben (akár egyetlen megfigyelés alapján) tanulnak meg félni a kígyóktól, mint a virágoktól, még akkor is, ha mindkettőt semleges tárgyként mutatják be nekik - ez arra utal, hogy az evolúció során veszélyt jelentő ingerekkel (pl. kígyók) szembeni félelem tanulására a fajnak öröklött, "előkészített" hajlama van, míg más, biológiailag közömbös ingerekkel szemben nincs ilyen segítség - ezt a jelenséget a viselkedéstudomány "előkészítettségnek" (preparedness) nevezi - ez is jó példa arra, hogy az evolúció nemcsak a konkrét viselkedést, hanem a tanulási képesség irányultságát is alakíthatja.',
                ],
              },
            ],
            keyTerms: ['kritikus periódus'],
          },
        },
      },
      {
        id: 'onfenntartasi-viselkedesek',
        title: 'Önfenntartással kapcsolatos viselkedések',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Batesi mimikri', 'Müller-féle mimikri'],
          rows: [
            ['Résztvevők', 'egy védtelen és egy védett faj', 'két (vagy több) egyaránt védett faj'],
            ['A hasonlóság oka', 'a védtelen faj "csal": utánozza a védett fajt', 'kölcsönösen erősítik egymás jelzését'],
            ['Példa', 'egyes lepkefajok a méhek/darazsak mintázatát utánozzák', 'több egymással rokon, mérgező pillangófaj hasonló mintázata'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Öröklött és tanult magatartásformák fejezet) megismert alapfogalmak után az önfenntartással kapcsolatos viselkedéseket vizsgáljuk meg: azokat a magatartásformákat, amelyek közvetlenül az egyed túlélését szolgálják, jellemzően négy nagy csoportba sorolva (tájékozódás, táplálkozási magatartás, menekülés, védekezés).',
            sections: [
              {
                heading: 'Tájékozódás',
                paragraphs: [
                  'A tájékozódási viselkedés lehetővé teszi, hogy az állatok megtalálják az útjukat élőhelyükön, táplálékforrásukhoz vagy vissza a fészkükhöz. A galambok kiemelkedő tájékozódási képességgel rendelkeznek: több száz kilométerről is haza tudnak találni, feltehetően a Föld mágneses mezejének érzékelése, a nap helyzete és tájékozódási pontok kombinációja alapján.',
                  'A mézelő méhek a nap helyzetét iránytűként használva tájékozódnak, és képesek a "táncnyelvvel" a táplálékforrás pontos irányát és távolságát is közölni fajtársaikkal - ennek öröklött és tanult összetevőit korábban (Öröklött és tanult magatartásformák fejezet emelt kiegészítése) már részletesebben is megvizsgáltuk.',
                  'A vándorló madarak (pl. a fecskék) hosszú távú vonulásukat több forrás kombinált használatával oldják meg: a csillagok és a nap állása, a Föld mágneses mezeje, valamint - fiatal madaraknál a szülők vezetésével szerzett - tapasztalat egyaránt hozzájárul a helyes útvonal megtalálásához. Ez is jó példa arra, hogy egy önfenntartással kapcsolatos viselkedés ötvözheti az öröklött és a tanult elemeket.',
                ],
              },
              {
                heading: 'Táplálkozási magatartás',
                paragraphs: [
                  'A táplálkozási magatartás a táplálékkeresés, -elfogás és -feldolgozás módjait foglalja magába. A farkasok csoportos (falkában történő) vadászata lehetővé teszi, hogy náluk jóval nagyobb testű zsákmányt (pl. jávorszarvast) is el tudjanak ejteni, mint amire egyetlen egyed önmagában képes lenne.',
                  'A mókusok ősszel táplálékot (pl. makkot, mogyorót) rejtenek el számos különböző helyen, majd télen memóriájukra és térbeli tájékozódási képességükre támaszkodva keresik meg újra ezeket a raktárakat - ez a viselkedés jelentősen növeli a téli túlélési esélyüket.',
                  'A pókok hálószövése is táplálkozási magatartás: a háló passzív csapdaként szolgál, amellyel a pók energiabefektetés nélkül, folyamatosan foghat táplálékot, szemben az aktív vadászattal, amely minden egyes alkalommal energiát igényel.',
                ],
              },
              {
                heading: 'Menekülés',
                paragraphs: [
                  'A menekülési viselkedés a ragadozók elől való elmenekülést szolgálja. A gazellák és más patás állatok kiemelkedő futási sebessége és kitartása közvetlen menekülési stratégia, míg a halrajok összehangolt, hirtelen irányváltásokkal teli mozgása megzavarja a ragadozót, megnehezítve egyetlen egyed kiválasztását és üldözését.',
                  'Egyes fajok a "tettető" halál (thanatózis) stratégiáját alkalmazzák: az oposszum veszély esetén mozdulatlanná dermed, és olyan hitelesen imitálja az elhullott állat állapotát (nyitott szájjal, kilógó nyelvvel), hogy sok ragadozó elveszti érdeklődését az ilyen, számára haszontalannak tűnő zsákmány iránt - ez a stratégia azért működik, mert sok ragadozó kizárólag friss, saját maga ejtette zsákmányt fogyaszt, elkerülve a már elhullott, esetleg megromlott tetemeket.',
                ],
              },
              {
                heading: 'Védekezés',
                paragraphs: [
                  'A védekezési viselkedések és testi adaptációk rendkívül sokfélék: a teknősök páncélja és a sünök tüskéi passzív, mechanikai védelmet nyújtanak, míg a skorpiók fullánkja és a méhek csípése aktív, mérget bevető védekezési eszköz.',
                  'A bűzösborz és a görény erős szagú váladékot bocsát ki védekezésül, amely elriasztja a ragadozókat. Más fajok álcázással (pl. a levélbogár testalakja és színe a levelekhez hasonlít) vagy mimikrivel (más, veszélyes faj utánzásával) védekeznek a felfedezés, illetve a támadás ellen. A kaméleonok színváltoztató képessége is szolgálhat védekezési célt, bár elsősorban a testhőmérséklet-szabályozásban és a hangulati, illetve társas jelzésekben van ennél is fontosabb szerepe.',
                ],
              },
            ],
            keyTerms: ['tájékozódási viselkedés', 'táplálkozási magatartás', 'menekülési viselkedés', 'thanatózis', 'védekező viselkedés', 'álcázás'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes mélyebben megismerni a mimikri két fő típusát, amelyek jól mutatják, hogy a védekező viselkedés és a testfelépítés hogyan fonódik össze az evolúció során.',
            sections: [
              {
                heading: 'A mimikri két típusa: Batesi és Müller-féle mimikri',
                paragraphs: [
                  'A Batesi mimikri esetén egy védtelen (pl. nem mérgező, fullánk nélküli) faj egy védett (pl. mérgező vagy fullánkkal rendelkező) faj külsejét utánozza - ezzel a ragadozókat "megtéveszti", akik elkerülik, mert összetévesztik a veszélyesnek vélt fajjal. Több lepkefaj (pl. egyes lepketrücskök) színezete és mintázata méhekre vagy darazsakra hasonlít, holott ezek a lepkék teljesen ártalmatlanok.',
                  'A Müller-féle mimikri (amelyet Fritz Müller német természettudósról neveztek el) ezzel szemben két (vagy több), egymástól függetlenül is védett (pl. mindkettő mérgező) faj hasonló megjelenését jelenti: mivel mindkét faj valóban veszélyes vagy kellemetlen ízű, a hasonló, jól felismerhető mintázat kölcsönösen erősíti a tanulási hatást a ragadozóknál - a ragadozónak elég egyetlen fajjal rossz tapasztalatot szereznie ahhoz, hogy mindkét, hasonló megjelenésű fajt elkerülje, ami mindkét faj hosszú távú túlélése szempontjából is előnyös.',
                  'A két mimikri-típus közötti kulcskülönbség tehát az, hogy a Batesi mimikrinél az egyik faj "csal" (valójában nem veszélyes), a Müller-féle mimikrinél viszont mindkét (vagy minden) résztvevő faj ténylegesen védett - ezért az utóbbi esetben a hasonlóság kölcsönösen, egymást erősítve előnyös, nem pedig kizárólag az egyik fél rovására valósul meg.',
                ],
              },
            ],
            keyTerms: ['Batesi mimikri', 'Müller-féle mimikri'],
          },
        },
      },
      {
        id: 'fajfenntartasi-viselkedesek',
        title: 'Fajfenntartással kapcsolatos viselkedések',
        order: 3,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'A korábban (Önfenntartással kapcsolatos viselkedések fejezet) megismert, az egyed túlélését szolgáló viselkedések után most azokat a magatartásformákat vizsgáljuk meg, amelyek a faj fennmaradását, azaz a sikeres szaporodást és az utódok túlélését szolgálják.',
            sections: [
              {
                heading: 'A partner felkeresése és az udvarlás-nász',
                paragraphs: [
                  'A partnerkeresés és az udvarlás fő célja a megfelelő, szaporodásra alkalmas partner megtalálása és a párzási hajlandóság kölcsönös jelzése. Az énekesmadarak hímjei jellegzetes énekükkel egyszerre jelzik territóriumukat és vonzzák a nőstényeket - ennek tanulási hátterét (a kritikus periódust) korábban (Öröklött és tanult magatartásformák fejezet emelt kiegészítése) már megismertük.',
                  'A pávakakas feltűnő tollazatának bemutatása is az udvarlás része, ahogy azt korábban (Szaporodás és egyedfejlődés fejezet) az ivari kétalakúság kapcsán már érintettük. A szentjánosbogarak sajátos módon, fénnyel jelzik magukat: a nőstények jellegzetes fénymintázattal jelzik a hímeknek a párzási készenlétet.',
                  'A gólyák és sok más madárfaj esetében az udvarlás gyakran a fészek közös építésével vagy díszítésével jár együtt - ez a közös tevékenység egyszerre erősíti a párkapcsolatot, és jelzi a partnernek a leendő szülő elkötelezettségét és alkalmasságát az ivadékgondozásra.',
                ],
              },
              {
                heading: 'Párzás',
                paragraphs: [
                  'A párzás magához a megtermékenyítéshez vezető viselkedés, amelyet gyakran versengés előz meg a hímek között a párzási lehetőségért - a szarvasbikák agancsviadala klasszikus példa erre: a küzdelem győztese szerzi meg a jogot a nőstényekkel való párzásra, ezáltal az erősebb, egészségesebb egyedek génjei nagyobb eséllyel kerülnek át a következő nemzedékbe.',
                  'A megtermékenyítés konkrét, tényleges módja (külső vagy belső) fajonként eltérő, ahogy azt korábban (Szaporodás és egyedfejlődés fejezet) az élőhely és a szaporodási mód kapcsolatánál részletesen tárgyaltuk - a párzási viselkedés is szorosan ehhez a mechanizmushoz igazodik: a belső megtermékenyítésű fajoknál a párzás jellemzően közelebbi, hosszabb testi kontaktust igényel, mint a külső megtermékenyítésű fajok egyszerű ivarsejt-kibocsátása.',
                ],
              },
              {
                heading: 'Ivadékgondozás',
                paragraphs: [
                  'Az ivadékgondozás a szülők utódaik túlélési esélyét jelentősen növelő viselkedése, amelynek mértéke fajonként igen eltérő. Jó példa erre a korábban (Madarak fejezet) megismert, repülésképtelen pingvinek esete: sok pingvinfajnál a két szülő felváltva jár táplálékért, míg a másik a fiókát melegíti és őrzi - ez a munkamegosztás jelentősen növeli a zord élőhelyen a fióka túlélési esélyét. Az emlősöknél a korábban (Emlősök fejezet) megismert tejmirigyek általi táplálás önmagában is kiterjedt, hosszú ideig tartó szülői gondoskodást feltételez.',
                ],
              },
              {
                heading: 'Önzetlenség (altruizmus)',
                paragraphs: [
                  'Az önzetlen (altruista) viselkedés során az egyed a saját érdekeit tudatosan háttérbe szorítva, akár saját túlélési esélyét is kockáztatva segít a rokonain. A korábban (Rovarok fejezet) megismert méheknél a dolgozók lemondanak saját szaporodásukról, és egész életüket a kaptár (vagyis közeli rokonaik) fenntartásának szentelik.',
                  'A mókusok és a prérikutyák vészjelzést adnak ragadozó észlelésekor, amivel felhívják magukra a figyelmet, és ezzel megnövelik saját elkapásuk kockázatát - cserébe viszont a csoport (jellemzően rokon) tagjai időben elmenekülhetnek, ami az egyed rövid távú kockázata ellenére hosszú távon előnyös lehet a rokonai számára.',
                ],
              },
              {
                heading: 'Agresszió',
                paragraphs: [
                  'A fajtársak közötti agresszió jellemzően a korlátozott, hozzáférhető erőforrásokért (táplálék, territórium, partner) folyó versengésből fakad. A farkasfalkákban kialakuló rangsor (dominanciahierarchia) szabályozza a hozzáférést az erőforrásokhoz és a szaporodási lehetőségekhez, és jellemzően a nyílt, súlyos sérüléssel járó összecsapások helyett rituális fenyegető testtartásokkal dől el - ez azért is előnyös, mert a rituális küzdelem jóval kisebb sérülési kockázattal jár mindkét fél számára, mint egy komolyabb, akár halálos kimenetelű harc.',
                ],
              },
            ],
            keyTerms: ['udvarlás', 'párzás', 'ivadékgondozás', 'altruizmus', 'agresszió', 'dominanciahierarchia'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni azt az evolúciós elméletet, amely megmagyarázza, hogyan alakulhatott ki egyáltalán az önzetlen (altruista) viselkedés a természetes szelekció során.',
            sections: [
              {
                heading: 'Rokonszelekció',
                paragraphs: [
                  'Első pillantásra ellentmondásosnak tűnhet, hogy a természetes szelekció - amely elvben a saját túlélést és szaporodást előnyben részesítő egyedeket "jutalmazza" - hogyan hozhatott létre olyan viselkedést, amely az egyed saját túlélési esélyét csökkenti mások javára. A megoldást a rokonszelekció elmélete adja: mivel a közeli rokonok genetikailag hasonlóak (pl. egy testvér átlagosan a gének felét örökli a másik testvérrel közösen), egy rokon megsegítése - még ha az egyed saját túlélését veszélyezteti is - közvetve a közös génállomány továbbörökítését szolgálhatja.',
                  'A korábban (Rovarok fejezet) megismert méheknél ez a jelenség szélsőségesen érvényesül: a dolgozók egymással még szorosabb genetikai rokonságban állnak, mint amilyenben egy szülővel és utóddal állnának, ami tovább erősíti a rokonok (a kaptár) érdekében történő önfeláldozó viselkedés evolúciós "kifizetődését". Ennek hátterében a korábban (Szaporodás és egyedfejlődés fejezet emelt kiegészítése) megismert parthenogenezis áll: mivel a méhkirálynő megtermékenyítetlen petéiből haploid herék, megtermékenyített petéiből pedig diploid nőstények (dolgozók) fejlődnek, a nőstény testvérek (dolgozók) egymással genetikailag szorosabb kapcsolatban állnak, mint amilyenben egy hagyományos, kétszülős szaporodású fajnál a testvérek vagy akár egy szülő és utódja lennének. Ez az egyik legfontosabb magyarázat arra, hogy a rovarok között éppen a hártyásszárnyúaknál (méhek, hangyák) alakult ki a legfejlettebb társas életmód.',
                  'A mókusok vészjelzésénél hasonló elv érvényesül: a jelzést adó egyed közeli rokonait (a saját génjeit hordozó utódokat és testvéreket) menti meg, ami hosszú távon, sok nemzedéken keresztül nézve a jelzésre "hajlamosító" gének elterjedését segíti elő, még akkor is, ha az adott pillanatban az egyed saját túlélési esélye csökken.',
                ],
              },
            ],
            keyTerms: ['rokonszelekció'],
          },
        },
      },
      {
        id: 'veleszuletett-magatartasformak',
        title: 'Veleszületett magatartásformák',
        order: 4,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Feltétlen reflex', 'Öröklött mozgásmintázat'],
          rows: [
            ['Válasz jellege', 'egyszerű, azonnali izom- vagy mirigyválasz', 'összetett, több lépésből álló mozgássorozat'],
            ['Lefolyás', 'az inger fennállásáig tart', 'egyszer elindulva végig lefut, akkor is, ha az inger közben megszűnik'],
            ['Példa', 'térdreflex, pupillareflex', 'a lúd tojás-visszagörgetése'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Öröklött és tanult magatartásformák fejezet) általánosságban megismert öröklött magatartás három jellegzetes, egyre összetettebb típusát különböztetjük meg: a feltétlen reflexet, az irányított mozgást és az öröklött mozgásmintázatot - mindhárom közös jellemzője, hogy genetikailag kódolt, és tanulás nélkül, minden egyeden hasonló módon jelenik meg.',
            sections: [
              {
                heading: 'Feltétlen reflex',
                paragraphs: [
                  'A feltétlen reflex egy adott ingerre adott, veleszületett, gyors és egyszerű válasz, amely tanulás nélkül, minden egyeden azonos módon zajlik le. Emberben klasszikus példa a térdreflex (egy ütés hatására a lábszár automatikusan, akaratlanul előrelendül) vagy a pupillareflex (erős fényre a pupilla automatikusan összeszűkül).',
                  'A csecsemők szopóreflexe szintén feltétlen reflex: az újszülött már születésétől fogva, tanulás nélkül képes a szájába kerülő tárgyra szopó mozdulattal reagálni - ez a fontos reflex biztosítja a táplálékfelvétel azonnali működőképességét. Hasonlóan veleszületett a köhögési és a tüsszentési reflex is, amelyek a légutakba véletlenül bekerülő idegen anyagok gyors eltávolítását szolgálják.',
                ],
              },
              {
                heading: 'Irányított mozgás (taxis)',
                paragraphs: [
                  'Az irányított mozgás (taxis) során az egész állat egy adott ingerforrás felé (pozitív taxis) vagy attól elfelé (negatív taxis) mozog. Az ászkarákok jellemzően a nedvesebb helyek felé mozognak (pozitív higrotaxis), ezáltal elkerülve a kiszáradás veszélyét, míg a legtöbb, korábban (Rovarok fejezet) megismert éjjeli lepkefaj a fényforrások felé repül (pozitív fototaxis) - ez utóbbi teszi lehetővé, hogy éjszaka a mesterséges fényforrások (pl. lámpák) köré gyűljenek.',
                  'A korábban (Gyűrűsférgek fejezet) megismert földigiliszták a talajban jellemzően lefelé mozognak (pozitív geotaxis), ami segít nekik a felszín kiszáradó, veszélyesebb rétegeit elkerülni, míg egyes baktériumok a tápanyag-koncentráció növekedésének irányába úsznak (pozitív kemotaxis) - a taxis tehát nem csak az állatvilágban, hanem az egysejtű szervezeteknél is jól megfigyelhető, alapvető viselkedésforma.',
                ],
              },
              {
                heading: 'Öröklött mozgásmintázat',
                paragraphs: [
                  'Az öröklött mozgásmintázat (más néven rögzített akcióminta) egy összetett, több lépésből álló, sztereotip mozgássorozat, amelyet egy adott kulcsinger indít el, de amely egyszer elindulva a maga teljességében lezajlik, akkor is, ha az azt eredetileg kiváltó inger időközben megszűnik.',
                  'Klasszikus, Konrad Lorenz és Niko Tinbergen etológusok által leírt példa a lúd tojás-visszagörgető mozdulata: ha egy kikelt tojás kigördül a fészekből, a lúd nyakát a tojás felé nyújtva, csőrével azt visszagörgeti a fészekbe. Ha kísérletben menet közben eltávolítják a tojást, a lúd akkor is befejezi a teljes görgető mozdulatsort, mintha a tojás még mindig ott lenne - ez bizonyítja, hogy a mozgásmintázat egyszer elindulva önállóan, az eredeti inger nélkül is végigfut.',
                  'A három bemutatott magatartásforma egyre nagyobb összetettséget mutat: a feltétlen reflex egyetlen izom vagy mirigy egyszerű válasza, az irányított mozgás az egész test elmozdulását igényli, az öröklött mozgásmintázat pedig ezeknél is bonyolultabb, több lépésből álló, időben elhúzódó cselekvéssor - mindhárom azonban közös vonása, hogy genetikailag kódolt, tanulás nélkül is megjelenő viselkedés.',
                ],
              },
              {
                heading: 'Gyakorlati felismerés',
                paragraphs: [
                  'A gyakorlatban a három típus jól elkülöníthető egymástól annak alapján, hogy mekkora testrész vesz részt a válaszban, és mennyi ideig tart: ha csak egyetlen izom vagy mirigy reagál azonnal, feltétlen reflexről van szó; ha az egész állat elmozdul egy inger irányába vagy azzal ellentétes irányba, irányított mozgásról beszélünk; ha pedig egy hosszabb, több lépésből álló, önmagában is összetett cselekvéssor zajlik le, azt öröklött mozgásmintázatnak nevezzük.',
                ],
              },
            ],
            keyTerms: ['feltétlen reflex', 'irányított mozgás', 'öröklött mozgásmintázat'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni a feltétlen reflexek idegrendszeri hátterét, a reflexívet, hiszen ez ad magyarázatot arra, miért olyan gyorsak és megbízhatóak ezek a reakciók.',
            sections: [
              {
                heading: 'A reflexív',
                paragraphs: [
                  'A feltétlen reflexek idegrendszeri alapja a reflexív: az inger felvételét végző érzékszerv (a receptor) által keltett ingerület egy érző idegsejten keresztül jut el a gerincvelőbe (vagy egyes esetekben az agytörzsbe), ahol - gyakran egy vagy akár több köztes idegsejt közbeiktatásával - egy megfelelő mozgató idegsejtre tevődik át, amely aztán a választ ténylegesen végrehajtó izmot vagy mirigyet (az effektort) ingerli.',
                  'A reflexív egyik legfontosabb jellegzetessége, hogy a válasz kialakításához nincs szükség az agykéreg (a tudatos feldolgozás) bevonására - ez teszi lehetővé, hogy a reflexek rendkívül gyorsan, sok esetben már azelőtt lezajoljanak, hogy az egyed tudatosan érzékelné az ingert (pl. a forró tárgytól való kéz-visszahúzás reflexe).',
                  'Ez a "megkerülő" működés evolúciós szempontból is előnyös: azoknál a helyzeteknél, ahol a válasz sebessége létfontosságú (pl. sérülés elkerülése), a tudatos feldolgozás beiktatása felesleges késleltetést jelentene - a reflexív ezt a késleltetést küszöböli ki azáltal, hogy a döntést gyakorlatilag már a gerincvelő szintjén meghozza, az agy ilyenkor csak utólag, a reflex teljes lezajlása után "értesül" a történtekről - ez az elrendezés jól illusztrálja, hogy az idegrendszer nem minden döntést a legmagasabb szinten (az agyban) hoz meg, hanem a sürgős, egyszerű válaszokat evolúciósan kiszervezi az alacsonyabb, gyorsabban reagáló idegrendszeri szintekre.',
                ],
              },
            ],
            keyTerms: ['reflexív', 'effektor'],
          },
        },
      },
      {
        id: 'tanult-magatartasformak',
        title: 'Tanult magatartásformák',
        order: 5,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Megszokás (habituáció)', 'Érzékenyítés (szenzitizáció)'],
          rows: [
            ['Az inger jellege', 'ismétlődő, veszélytelen inger', 'ismétlődő, erős vagy veszélyes inger'],
            ['A válasz változása', 'fokozatosan csökken, majd megszűnik', 'fokozatosan erősödik'],
            ['Adaptív jelentősége', 'energiatakarékosság (felesleges válaszok kiszűrése)', 'fokozott éberség valódi veszély esetén'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Veleszületett magatartásformák fejezet) megismert öröklött típusok után most azokat a magatartásformákat vizsgáljuk meg, amelyek egyedi tapasztalat, azaz tanulás eredményeként alakulnak ki.',
            sections: [
              {
                heading: 'Bevésődés és érzékenyítés',
                paragraphs: [
                  'A bevésődés (imprinting) során egy fiatal állat egy korai, genetikailag meghatározott kritikus periódusban - amelynek fogalmát korábban (Öröklött és tanult magatartásformák fejezet emelt kiegészítése) már megismertük - tartósan rögzíti egy adott inger (jellemzően a szülő) képét, és ehhez kötődik. Konrad Lorenz klasszikus kísérletében a frissen kikelt lúdfiókák az első mozgó tárgyat (esetenként magát Lorenzt) rögzítették szülőként, és attól kezdve mindenhová követték.',
                  'A bevésődés kizárólag ebben a szigorúan korlátozott időszakban alakulhat ki - ha a kritikus periódus alatt nem volt jelen a megfelelő inger, később már nem, vagy csak jóval nehezebben pótolható, ez pedig jól mutatja, hogy a tanulási képesség maga is öröklötten meghatározott korlátok között működik.',
                  'Az érzékenyítés (szenzitizáció) során egy ismételten előforduló, erős vagy veszélyes inger hatására az állat válaszkészsége fokozatosan erősödik: minél többször tapasztalja meg az ingert, annál intenzívebben reagál rá, akár egy egyébként enyhébb ingerre is felerősödött válasszal reagálva ezután. A korábban (Csigák fejezet) megismert Puhatestűek törzsébe tartozó tengeri csigáknál (pl. az Aplysia fajnál) jól tanulmányozható jelenség, hogy ismételt fájdalmas inger hatására az állat kopoltyú-visszahúzó válasza egyre erősebbé válik, akár egy egyébként enyhe érintésre is - ez a viszonylag egyszerű idegrendszerű állat az egyik legfontosabb modellszervezet az érzékenyítés sejtszintű mechanizmusának kutatásában.',
                ],
              },
              {
                heading: 'Megszokás és feltételes reflex',
                paragraphs: [
                  'A megszokás (habituáció) az érzékenyítés pontos ellentéte: egy ismétlődő, veszélytelennek bizonyuló inger hatására az állat válaszkészsége fokozatosan csökken, majd meg is szűnhet. A madárijesztőt kezdetben elkerülő madarak idővel megszokják annak jelenlétét, és megtanulják, hogy az nem jelent valódi veszélyt - éppen ezért a kertészek időnként áthelyezik vagy megváltoztatják a madárijesztő kinézetét, hogy a megszokás ne csökkentse a hatását.',
                  'A feltételes reflex (klasszikus kondicionálás) során egy eredetileg semleges inger és egy feltétlen inger ismételt együttes bemutatása után a semleges inger önmagában is kiváltja a feltétlen reflexhez hasonló választ. Ivan Pavlov klasszikus kísérletében a kutyák eredetileg csak a táplálékra nyáladzottak (feltétlen reflex), de miután a táplálék megjelenését rendszeresen egy csengőhang előzte meg, a kutyák idővel már magára a csengőhangra is nyáladzani kezdtek. Ha a csengőhangot ezután hosszabb ideig táplálék nélkül ismétlik, a tanult válasz fokozatosan elhalványul (kioltódik) - ez mutatja, hogy a feltételes reflex, ellentétben a feltétlen reflexszel, folyamatos "megerősítést" igényel a fennmaradásához.',
                ],
              },
              {
                heading: 'Operáns és belátásos tanulás',
                paragraphs: [
                  'Az operáns tanulás során az állat saját cselekvésének következménye (jutalom vagy büntetés) határozza meg, hogy a jövőben milyen gyakran ismétli meg az adott viselkedést. B. F. Skinner kísérleteiben a patkányok megtanulták, hogy egy kar lenyomásával táplálékot kapnak, ezért egyre gyakrabban nyomták le a kart - ez az elv áll a háziállatok (pl. kutyák) jutalomalapú betanításának hátterében is, ahogy azt korábban (Öröklött és tanult magatartásformák fejezet) a "ül" parancs betanításánál már érintettük. A viselkedést követő jutalom (pl. táplálék) növeli, a büntetés (pl. kellemetlen inger) pedig csökkenti a viselkedés jövőbeli előfordulásának valószínűségét.',
                  'A belátásos tanulás a legösszetettebb tanulási forma: az állat a problémát nem próba-szerencse alapon, fokozatosan oldja meg, hanem hirtelen, korábbi tapasztalatok kombinálásával, mintegy "felismerve" a megoldást. A német pszichológus, Wolfgang Köhler csimpánzokkal végzett híres kísérleteiben az állatok - hosszabb megfigyelés után, minden előzetes próbálkozás nélkül - hirtelen rájöttek, hogy egymásra pakolt ládákkal elérhetik a magasban lógó banánt. Ez a fajta tanulás a fejlett idegrendszerű, elsősorban a főemlősöknél és néhány más magas intelligenciájú fajnál (pl. hollóknál, delfineknél) figyelhető meg leginkább.',
                ],
              },
            ],
            keyTerms: ['bevésődés', 'érzékenyítés', 'megszokás', 'feltételes reflex', 'operáns tanulás', 'belátásos tanulás'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni egy további tanulási formát, a megfigyeléses tanulást, valamint azt, hogy a megszokás és az érzékenyítés miért éppen ellentétes irányban működik.',
            sections: [
              {
                heading: 'Megfigyeléses tanulás és a válaszkészség adaptív szűrése',
                paragraphs: [
                  'A megfigyeléses tanulás (más néven szociális tanulás) során az állat mások (jellemzően fajtársak) viselkedésének megfigyelésével, saját próbálkozás nélkül sajátít el új viselkedésformákat - ezt korábban (Öröklött és tanult magatartásformák fejezet) a csimpánzok szerszámhasználatánál és a macskák vadászati technikájánál már konkrét példákon keresztül megismertük, anélkül hogy magát a tanulási formát megneveztük volna. A megfigyeléses tanulás előnye, hogy az egyed elkerülheti a próba-szerencse tanulással (pl. operáns tanulással) járó kockázatokat és időveszteséget, hiszen közvetlenül mások sikeres (vagy sikertelen) próbálkozásaiból profitálhat.',
                  'A korábban bemutatott megszokás és érzékenyítés látszólag teljesen ellentétes iránya valójában egyazon adaptív elvet szolgálja: az idegrendszer folyamatosan "szűri" a bejövő ingereket biológiai jelentőségük szerint. A veszélytelen, jelentéktelen ingerekre adott válasz csökkentése (megszokás) energiát takarít meg, míg a valóban veszélyes ingerekre adott válasz erősítése (érzékenyítés) a túlélési esélyt növeli - a kettő együtt biztosítja, hogy az állat idegrendszere a ténylegesen fontos ingerekre koncentráljon.',
                ],
              },
            ],
            keyTerms: ['megfigyeléses tanulás'],
          },
        },
      },
      {
        id: 'motivacio-kulcsinger',
        title: 'Motiváció és kulcsinger',
        order: 6,
        isFree: false,
        estimatedMinutes: 12,
        comparisonTable: {
          headers: ['Szempont', 'Motiváció', 'Kulcsinger'],
          rows: [
            ['Eredet', 'belső (fiziológiai állapot)', 'külső (a környezetből érkező inger)'],
            ['Szerepe', 'meghatározza a válaszkészséget', 'kiváltja magát a viselkedést'],
            ['Példa', 'éhségérzet', 'a sirálycsőrön lévő piros folt'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Öröklött és tanult magatartásformák, Veleszületett magatartásformák és Tanult magatartásformák fejezetek) megismert magatartásformák mindegyikének kialakulásában két alapvető, egymással szorosan összefüggő fogalom játszik kulcsszerepet: a motiváció és a kulcsinger.',
            sections: [
              {
                heading: 'Motiváció',
                paragraphs: [
                  'A motiváció az állat belső fiziológiai állapota, amely befolyásolja, hogy egy adott inger mennyire váltja ki a rá jellemző viselkedést, illetve hogy az állat mennyire aktívan keresi az adott ingert. Egy éhes állat sokkal intenzívebben keres táplálékot, és sokkal erősebben reagál a táplálékot jelző ingerekre, mint egy jóllakott állat, amely akár teljesen figyelmen kívül is hagyhatja ugyanazt a táplálékforrást - a táplálékkeresési motiváció tehát a belső, fiziológiai éhségérzettel szoros arányban változik.',
                  'Hasonlóan, a szaporodási motiváció (amelyet gyakran hormonális változások indítanak el) határozza meg, hogy egy állat mikor és mennyire aktívan keres párzási partnert - ezt korábban (Fajfenntartással kapcsolatos viselkedések fejezet) az udvarlási viselkedéseknél már érintettük, anélkül hogy a mögöttes motivációs állapotot külön kiemeltük volna.',
                  'A motiváció szintje idővel változhat: minél tovább nem elégül ki egy szükséglet (pl. minél régebben nem evett az állat), a motiváció jellemzően annál magasabb szintre emelkedik, ami egyre alacsonyabb ingerküszöböt (egyre gyengébb ingerekre is választ) és egyre intenzívebb viselkedést eredményez. Miután a szükséglet kielégült (pl. az állat jóllakott), a motiváció szintje jellemzően csökken, és a hozzá kapcsolódó viselkedés is visszaszorul - amíg a szükséglet a szervezet működése miatt ismét fel nem merül.',
                ],
              },
              {
                heading: 'Kulcsinger',
                paragraphs: [
                  'A kulcsinger egy adott inger azon specifikus, jellegzetes tulajdonsága, amely önmagában, más részletektől függetlenül is képes kiváltani egy adott, jellemzően öröklött viselkedést. Niko Tinbergen klasszikus kísérletében a sirályfiókák a szülő csőrén lévő piros foltra csipegetnek, ami kiváltja a szülő táplálék-felöklendezését - Tinbergen kimutatta, hogy a fiókák egy egyszerű, sematikus modellen is ugyanúgy reagálnak a piros foltra, még akkor is, ha a modell egyébként egyáltalán nem hasonlít egy valódi sirályfejre.',
                  'A kulcsinger tehát nem a teljes, összetett, valós ingert (pl. a teljes szülőmadarat), hanem annak egyetlen, kiugróan feltűnő jellemzőjét (pl. egy adott színfoltot) jelenti - ez az egyszerűsítés teszi lehetővé, hogy az öröklött magatartásformák gyorsan és megbízhatóan aktiválódjanak, anélkül hogy az idegrendszernek a teljes, összetett ingerhelyzetet fel kellene dolgoznia.',
                ],
              },
              {
                heading: 'Motiváció és kulcsinger együttes szerepe',
                paragraphs: [
                  'A motiváció és a kulcsinger együttesen határozzák meg egy viselkedés tényleges megjelenését: ugyanaz a kulcsinger eltérő erősségű választ válthat ki attól függően, hogy az állat éppen milyen motivációs állapotban van. Egy jóllakott állat gyengébben (vagy egyáltalán nem) reagál egy táplálékot jelző kulcsingerre, mint egy éhes állat, még akkor is, ha a kulcsinger fizikailag pontosan ugyanaz.',
                  'Ez a kettősség magyarázza, hogy ugyanaz az állat ugyanarra a helyzetre miért reagálhat különbözőképpen az idő múlásával: nem a környezet vagy az inger változik meg, hanem az állat belső, motivációs állapota - ezért a viselkedés magyarázatához mindig mindkét tényezőt (a kiváltó ingert és a belső állapotot) egyszerre kell figyelembe venni.',
                ],
              },
            ],
            keyTerms: ['motiváció', 'kulcsinger'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni azt a meglepő jelenséget, amikor egy mesterségesen eltúlzott kulcsinger az eredetinél is erősebb választ vált ki.',
            sections: [
              {
                heading: 'A szuperinger jelensége',
                paragraphs: [
                  'A szuperinger (szupernormális inger) egy olyan, mesterségesen létrehozott vagy a természetben ritkán előforduló inger, amely a kulcsinger jellemző tulajdonságait eltúlzott mértékben tartalmazza, ezért az eredeti, természetes ingernél is erősebb választ vált ki. Tinbergen kísérleteiben egyes madarak (pl. bizonyos partimadárfajok) a saját, valódi tojásuknál nagyobb, feltűnőbb foltozású műtojást előnyben részesítették a kotlásra, sőt, esetenként még a saját tojásukat is elhagyták a "szuperinger" tojás mellett - hiába volt a mesterséges tojás egyértelműen "irreális" méretű, a madár öröklött felismerő mechanizmusa egyszerűen a nagyobb, feltűnőbb ingerre reagált erősebben.',
                  'A szuperinger jelensége rávilágít arra, hogy az öröklött magatartásformákat kiváltó kulcsingerek felismerése egy viszonylag egyszerű, néhány jellemzőre (pl. méret, szín, mintázat) épülő mechanizmuson alapul, amely bizonyos, mesterségesen előidézett körülmények között "becsapható" - ez a jelenség egyben magyarázatot ad arra is, hogy egyes emberi ingerek (pl. rikítóan élénk színű, feltűnő csomagolású élelmiszerek) miért képesek a szükségesnél erősebb reakciót kiváltani.',
                  'A jelenség evolúciós szempontból is tanulságos: mivel a természetben a szuperingerhez hasonló, eltúlzott jellemzőjű ingerek rendkívül ritkán fordulnak elő, az öröklött felismerő mechanizmus "egyszerűsítése" (csak néhány kulcsjellemzőre való hagyatkozás) a valós körülmények között tökéletesen megbízható stratégia volt - a probléma csak akkor jelentkezik, amikor egy mesterséges, ember alkotta inger (pl. a Tinbergen-féle műtojás) váratlanul, a természetes szelekció "felkészülése" nélkül jelenik meg - erre a fajta öröklött, egyszerűsített felismerésre a lassú, sok nemzedéken át zajló evolúció egyszerűen nem tudott megoldást kifejleszteni.',
                ],
              },
            ],
            keyTerms: ['szuperinger'],
          },
        },
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
        comparisonTable: {
          headers: ['Szempont', 'Külső elválasztás (exokrin)', 'Belső elválasztás (endokrin)'],
          rows: [
            ['A váladék útja', 'testfelszínre vagy testüregbe (pl. bélcsőbe) ürül', 'közvetlenül a vérbe kerül'],
            ['Váladék neve', 'pl. verejték, nyál, emésztőnedv', 'hormon'],
            ['Példa mirigy', 'verejtékmirigy, nyálmirigy', 'pajzsmirigy'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Az élet jellemzői fejezet emelt kiegészítése) röviden már megismert homeosztázis fogalmát ebben a fejezetben mélyítjük el, és megismerjük azt is, hogyan függ össze a kiválasztással, valamint milyen gyakorlati tudás (önvizsgálat, elsősegély) épül erre az alapfogalomra.',
            sections: [
              {
                heading: 'A homeosztázis fogalma és jelentősége',
                paragraphs: [
                  'A homeosztázis a szervezet belső környezetének (pl. testhőmérséklet, vércukorszint, a testfolyadékok pH-ja és ozmotikus koncentrációja) dinamikus egyensúlyban tartása, a külső környezet folyamatos változásai ellenére is. A homeosztázis fenntartása létfontosságú: a szervezet sejtjei, szövetei csak egy viszonylag szűk határértékek közötti belső környezetben képesek megfelelően működni.',
                  'A homeosztázis fenntartásában több szervrendszer is közreműködik: az idegrendszer és a hormonrendszer szabályozó jelekkel hangolja össze a szervek működését, a kiválasztó szervek eltávolítják a felesleges anyagokat, a légző- és keringési rendszer pedig biztosítja a sejtek folyamatos oxigén- és tápanyagellátását - ezekkel a szervrendszerekkel a modul következő fejezeteiben ismerkedünk meg részletesen. A homeosztázis fenntartása jellemzően negatív visszacsatolás elvén működik: ha egy paraméter (pl. a testhőmérséklet) eltér a normál tartománytól, a szervezet olyan folyamatokat indít el, amelyek az eltérést csökkentik, visszatérítve azt a kívánt tartományba. Túl magas testhőmérséklet esetén például izzadás és a bőr felszíni érhálózatának kitágulása fokozza a hőleadást, míg túl alacsony testhőmérséklet esetén a remegés (izomösszehúzódás) és az érszűkület a hőtermeléssel, illetve a hőveszteség csökkentésével ellensúlyozza az eltérést - mindkét esetben a válasz éppen az eredeti eltéréssel ellentétes irányba hat, ezért nevezzük negatív visszacsatolásnak.',
                ],
              },
              {
                heading: 'Kiválasztás, külső és belső elválasztás',
                paragraphs: [
                  'A kiválasztás a szervezet anyagcseréje során keletkező, felesleges vagy káros bomlástermékek (salakanyagok) eltávolítását jelenti a szervezetből - ez a folyamat is a homeosztázis fenntartását szolgálja, hiszen a salakanyagok felhalmozódása felborítaná a belső egyensúlyt.',
                  'A mirigyek váladéka kétféleképpen távozhat: külső elválasztás (exokrin működés) esetén a váladék a testfelszínre vagy egy testüregbe (pl. a bélcsőbe) ürül, mint például a verejtékmirigy vagy a nyálmirigy esetében. Belső elválasztás (endokrin működés) esetén a mirigy váladéka, a hormon közvetlenül a vérbe kerül, és onnan jut el a célszervekhez - ezt a fajta jelátvitelt korábban (A sejtműködések vezérlése fejezet emelt kiegészítése) endokrin jelátvitelként már megismertük.',
                  'Egyes mirigyek (pl. a hasnyálmirigy) mindkét működési formát egyesítik: emésztőnedvet választanak ki külső elválasztással a bélbe, ugyanakkor hormonokat (pl. inzulint) is termelnek, amelyeket belső elválasztással közvetlenül a vérbe juttatnak.',
                ],
              },
              {
                heading: 'Szűrővizsgálatok és önvizsgálat',
                paragraphs: [
                  'A rendszeres orvosi szűrővizsgálatok és az önvizsgálat (pl. anyajegyek rendszeres ellenőrzése, emlő-önvizsgálat) kiemelten fontosak, mert sok betegség (köztük daganatos megbetegedések) korai, még tünetmentes szakaszban történő felismerése jelentősen javítja a gyógyulási esélyeket. Az önvizsgálat lényege, hogy az egyén maga is képes legyen felismerni a saját testén megjelenő, aggodalomra okot adó elváltozásokat (pl. egy anyajegy méretének, alakjának vagy színének megváltozását), és ezek esetén időben orvoshoz forduljon.',
                ],
              },
              {
                heading: 'Alapfokú újraélesztés',
                paragraphs: [
                  'Az alapfokú újraélesztés (elsősegélynyújtás) lépései a következők:',
                  '1. Az eszméletlenség és a légzés hiányának (vagy szabálytalan légzésnek) felismerése: szólítsuk meg és rázzuk meg óvatosan a sérültet, majd ellenőrizzük a légzését.',
                  '2. Segélyhívás: azonnal hívjuk a mentőket (Magyarországon a 112-es vagy a 104-es számon), és lehetőség szerint kérjünk segítséget másoktól is.',
                  '3. A mellkaskompressziók (szívmasszázs) megkezdése: a mellkas közepén, erőteljes, ritmusos nyomásokkal, jellemzően 30 kompresszió és 2 lélegeztetés váltakozó ritmusában.',
                  '4. Az újraélesztés folyamatos, megszakítás nélküli folytatása egészen addig, amíg a sérült magához nem tér, vagy amíg a szakszerű segítség (mentőszolgálat) meg nem érkezik és át nem veszi az ellátást.',
                  'Az újraélesztés lényege, hogy a mellkaskompressziókkal mesterségesen fenntartjuk a vér áramlását, ezáltal az agy és a többi életfontosságú szerv továbbra is kap valamennyi oxigént - a szívmegállás utáni percek kritikusak, hiszen az oxigénhiány néhány percen belül visszafordíthatatlan agyi károsodáshoz vezethet, ezért a laikusok által is elvégezhető azonnali beavatkozás életmentő lehet. Az elsősegélynyújtás alapjainak ismerete ezért nem csak egészségügyi szakembereknek fontos, hanem minden állampolgár számára hasznos, mindennapi élethelyzetekben is alkalmazható tudás.',
                ],
              },
            ],
            keyTerms: ['homeosztázis', 'negatív visszacsatolás', 'kiválasztás', 'külső elválasztás', 'belső elválasztás', 'önvizsgálat', 'újraélesztés'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a homeosztázis-összetevők határértékeinek változékonyságát, valamint a homeosztázis és az egészség kapcsolatát kell megérteni.',
            sections: [
              {
                heading: 'A homeosztázis határértékei és az egészség kapcsolata',
                paragraphs: [
                  'A homeosztázis-összetevők (pl. testhőmérséklet, vércukorszint) határértékei nem rögzítettek, hanem az adott élettani állapottól függően megváltozhatnak: testmozgás közben például a testhőmérséklet és a szívfrekvencia normálisan is jóval magasabb tartományban mozog, mint teljes nyugalomban, terhesség alatt pedig számos élettani paraméter (pl. az anyagcsere-sebesség) átmenetileg egy más "normál" tartományba kerül. Ezért egy adott mérőérték (pl. a szívfrekvencia) önmagában, a pontos helyzet és körülmények ismerete nélkül nem feltétlenül árulja el, hogy az adott pillanatban egészséges vagy éppen kóros állapotról van-e szó.',
                  'Az egészség a homeosztázis tartós, hatékony fenntartásának képessége: a betegség éppen ennek a szabályozásnak a felborulásaként, illetve a szervezet azon képtelenségeként értelmezhető, hogy a belső környezetet a megváltozott, esetenként szélsőséges körülmények között is a szükséges határértékek között tartsa. Ez a szemlélet magyarázza, hogy miért törekszik a modern orvostudomány gyakran nem csupán egyetlen tünet kezelésére, hanem a szervezet egészének egyensúlyi állapotát figyelembe véve gyógyítani.',
                  'A homeosztázis fogalma abban is segít megérteni az egészséget, hogy rávilágít: a szervezet folyamatosan, aktívan "dolgozik" az egyensúly fenntartásáért - ez a folyamat energiát igényel, és ha a szabályozó mechanizmusok (pl. az idegrendszer vagy a hormonrendszer) valamiért nem működnek megfelelően, az egyensúly felborulhat annak ellenére is, hogy a szervezet külső körülményei egyáltalán nem változtak meg jelentősen.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'bor',
        title: 'Bőr',
        order: 2,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Felhám (epidermisz)', 'Irha (dermisz)'],
          rows: [
            ['Szövettípus', 'hámszövet', 'kötőszövet'],
            ['Vastagság', 'vékonyabb', 'vastagabb'],
            ['Tartalma', 'elszarusodó sejtrétegek, festéksejtek', 'erek, receptorok, mirigyek, szőrtüszők'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Homeosztázis fejezet) megismert, a szervezet belső egyensúlyát fenntartó mechanizmusok után a bőrrel az első olyan szervet ismerjük meg részletesen, amely ebben az egyensúly-fenntartásban (pl. a hőszabályozásban) is kulcsszerepet játszik.',
            sections: [
              {
                heading: 'A bőr funkciói',
                paragraphs: [
                  'A bőr elsődleges funkciója a védelem: mechanikai sérülésekkel, a kórokozókkal és az ultraibolya sugárzással szemben egyaránt gátat képez. Emellett a bőr kulcsszerepet játszik a hőszabályozásban is - ahogy azt korábban (Homeosztázis fejezet) a negatív visszacsatolásnál már megismertük, az izzadás és a bőr felszíni érhálózatának tágulása/szűkülése szabályozza a hőleadás mértékét.',
                  'A bőr emellett kiterjedt érzékszerv is: receptorai a fájdalom, a tapintás, a nyomás és a hőingerek (hideg, meleg) érzékelésére specializálódtak - ezek a funkciók szorosan összefüggenek a bőr rétegzett felépítésével, hiszen a különböző típusú receptorok jellemzően a bőr különböző mélységében helyezkednek el.',
                  'Ez a három fő funkció (védelem, hőszabályozás, érzékelés) szorosan összefügg egymással: a bőr rétegzett, sokféle sejttípust és mirigyet tartalmazó felépítése teszi lehetővé, hogy egyetlen szerv egyszerre lássa el mindhárom, egymástól igen eltérő jellegű feladatot.',
                ],
              },
              {
                heading: 'A bőr szöveti szerkezete',
                paragraphs: [
                  'A bőr három fő rétegből épül fel. A felhám (epidermisz) a korábban (Állati szövetek fejezet) megismert többrétegű elszarusodott laphám egyik konkrét megvalósulása, amely a testet a külvilágtól elválasztja. Alatta helyezkedik el az irha (dermisz), amely kötőszövetből áll, és amelyben az erek, az idegvégződések (receptorok), a mirigyek és a szőrtüszők találhatók.',
                  'Az irha alatt a bőr alatti kötőszövet (hypodermisz) helyezkedik el, amelynek jelentős részét a korábban (Lipidek fejezet) megismert zsírszövet alkotja - ez hőszigetelő és energiaraktározó szerepet tölt be, emellett mechanikai párnázást is biztosít a mélyebben fekvő szövetek számára. A három réteg vastagsága testtájanként jelentősen eltér: a talpon és a tenyéren például a felhám és az irha is vastagabb, mint a szemhéjon, ahol a bőrnek rendkívül vékonynak és rugalmasnak kell maradnia.',
                ],
              },
              {
                heading: 'A bőr mirigyei',
                paragraphs: [
                  'A bőrben két fő mirigytípus található. A verejtékmirigyek vizes, sótartalmú váladékot (verejtéket) választanak ki, amely elpárolgásával hűti a testet, emellett kisebb mennyiségű salakanyagot (pl. karbamidot) is eltávolít a szervezetből - ez a korábban (Homeosztázis fejezet) megismert külső elválasztás egyik konkrét példája.',
                  'A faggyúmirigyek zsíros váladékot (faggyút) termelnek, amely a bőr és a szőrszálak felszínét vékony, védő, vízzáró réteggel vonja be, csökkentve a kiszáradást és rugalmasabbá téve a bőrt. A korábban (Emlősök fejezet) megismert tejmirigy is a bőr mirigyeiből, egy módosult verejtékmirigyből fejlődött ki az evolúció során, ez is jól mutatja a bőr mirigyeinek sokféle funkcióra való alkalmazkodóképességét.',
                ],
              },
              {
                heading: 'A hám megújulása',
                paragraphs: [
                  'A felhám legalsó rétegében a sejtek folyamatosan osztódnak; az újonnan keletkező sejtek fokozatosan a felszín felé tolódnak, eközben elszarusodnak (a sejt belsejét egyre inkább a szívós keratin fehérje tölti ki), majd a felszínen elhalt, elszarusodott állapotban leválnak - ez a folyamatos megújulás biztosítja, hogy a bőr védőfunkciója a mindennapi kopás ellenére is fennmaradjon.',
                ],
              },
              {
                heading: 'Festéksejtek és a bőrszín',
                paragraphs: [
                  'A felhámban elhelyezkedő festéksejtek (melanociták) termelik a melanin nevű bőrpigmentet, amely elnyeli az ultraibolya sugárzás egy részét, ezáltal védi a mélyebb bőrrétegeket és a bennük lévő sejtek genetikai állományát a károsodástól.',
                  'Az emberi faj bőrszín-skálája (a világos bőrtől a sötét bőrig) a melanin mennyiségének genetikailag meghatározott különbségeiből adódik, és a biológiai sokféleség (variabilitás) egyik jól látható példája: a bőrszín az evolúció során az adott földrajzi terület napsugárzás-intenzitásához igazodó alkalmazkodásként alakult ki, nem pedig valamiféle rangsorolható tulajdonságként értelmezendő.',
                ],
              },
            ],
            keyTerms: ['felhám', 'irha', 'verejtékmirigy', 'faggyúmirigy', 'melanocita', 'melanin'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni a napbarnulás mögötti sejtszintű mechanizmust, valamint a bőr tapintóreceptorainak sokféleségét.',
            sections: [
              {
                heading: 'A bőr tapintóreceptorainak sokfélesége',
                paragraphs: [
                  'A bőr érzékelő funkciója valójában több, egymástól eltérő szerkezetű receptortípus együttes munkájának eredménye: egyes receptorok a folyamatos nyomásra, mások a rezgésre vagy éppen a finom érintésre érzékenyek leginkább, míg a fájdalomérző receptorok (szabad idegvégződések formájában) a bőr szinte teljes felszínén sűrűn megtalálhatók, hiszen a fájdalomérzet a szervezet sérülés elleni riasztórendszereként létfontosságú.',
                  'A receptorok eloszlása testtájanként jelentősen eltér: az ujjbegyeken és az ajkakon például sokkal sűrűbben helyezkednek el a tapintóreceptorok, mint a hát bőrén, ami magyarázza, hogy miért sokkal érzékenyebb és pontosabb a tapintásunk ezeken a testtájakon.',
                ],
              },
              {
                heading: 'A napbarnulás mechanizmusa',
                paragraphs: [
                  'Az ultraibolya sugárzás hatására a melanociták fokozott melanintermelésbe kezdenek - ez a folyamat (a napbarnulás) tulajdonképpen a bőr védekező válasza a további UV-károsodás ellen, hiszen a nagyobb mennyiségű melanin hatékonyabban nyeli el a káros sugárzást.',
                  'Ez a válasz azonban csak korlátozott védelmet nyújt: a napbarnulás megjelenése önmagában is jelzi, hogy a bőrt már érte bizonyos mértékű UV-károsodás, ezért a rendszeres, védelem nélküli napozás hosszú távon növeli a bőrrák kialakulásának kockázatát, még akkor is, ha a bőr közben egyre barnábbá válik.',
                  'A melanin mennyisége mellett a bőr UV-érzékenysége azt is meghatározza, hogy egy adott egyed mennyi ideig tartózkodhat biztonságosan közvetlen napsütésben - ez az összefüggés áll a bőrtípusok (a világostól a sötét bőrtípusig) elkülönítésének hátterében is, amelyeket a bőrgyógyászati gyakorlatban a napvédelmi ajánlások megalapozására használnak.',
                ],
              },
            ],
            keyTerms: ['tapintóreceptor'],
          },
        },
      },
      {
        id: 'bor-gondozasa-vedelme',
        title: 'A bőr gondozása, védelme',
        order: 3,
        isFree: false,
        estimatedMinutes: 12,
        comparisonTable: {
          headers: ['Szempont', 'Vízhólyag', 'Vérhólyag'],
          rows: [
            ['Kiváltó ok', 'súrlódás vagy enyhébb égés', 'mélyebb, nyomó jellegű sérülés'],
            ['Tartalma', 'szövetnedv (savó)', 'vér'],
            ['Érintett réteg', 'felhám rétegei válnak el egymástól', 'az irha erei is megsérülnek'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Bőr fejezet) megismert felépítés és működés után ebben a fejezetben azt vizsgáljuk meg, hogyan óvhatjuk meg a bőr egészségét, és milyen gyakori bőrelváltozásokkal, sérülésekkel találkozhatunk a mindennapokban.',
            sections: [
              {
                heading: 'A napsugárzás hatása és a védekezés',
                paragraphs: [
                  'A napsugárzás ultraibolya (UV) összetevője a korábban (Bőr fejezet emelt kiegészítése) megismert napbarnulást váltja ki, ugyanakkor túlzott, védelem nélküli napozás esetén tartósan károsítja a bőrsejtek genetikai állományát, ami idő előtti bőröregedéshez és a bőrrák kialakulásának jelentősen megnövekedett kockázatához vezethet.',
                  'A hatékony védekezés eszközei közé tartozik a napvédő krém rendszeres használata, a megfelelő (a bőrt eltakaró) öltözet, a napszemüveg, valamint a déli, legerősebb sugárzású órákban a közvetlen napsütés kerülése, illetve az árnyék keresése - ezek az intézkedések különösen fontosak világos bőrű, kevesebb melanint termelő egyéneknél, akiknél a bőr UV-károsodás elleni természetes védelme eleve alacsonyabb.',
                ],
              },
              {
                heading: 'Bőrápolás és hajápolás',
                paragraphs: [
                  'A rendszeres, de nem túlzott tisztálkodás eltávolítja a bőr felszínéről a szennyeződéseket és a felesleges faggyút, ugyanakkor a bőr természetes védőrétegének (a faggyúnak) a teljes eltávolítása kiszáradáshoz és irritációhoz vezethet, ezért a bőrápolásnál a kímélő tisztálkodás és a szükség szerinti hidratálás egyaránt fontos. A hajápolás hasonló elveket követ: a hajszálakat és a fejbőrt is óvni kell a túlzott vegyi és mechanikai igénybevételtől, hiszen a fejbőr is a bőr része, amelyre ugyanazok az általános bőrápolási elvek érvényesek.',
                ],
              },
              {
                heading: 'A bőr baktériumflórája',
                paragraphs: [
                  'A bőr felszínén természetes módon nagy számban élnek baktériumok (a bőr normál flórája), amelyek a legtöbb esetben nem okoznak betegséget, sőt védelmet is nyújtanak: elfoglalják a bőrfelszín "élettereit" és tápanyagforrásait, ezzel megnehezítve a valódi kórokozók megtelepedését és elszaporodását. Ez a fajta hasznos együttélés a korábban (Egysejtű eukarióták fejezet emelt kiegészítése) megismert szimbiózis egyik példája - a bőr baktériumflórája cserébe stabil, tápanyagban gazdag élőhelyet kap.',
                ],
              },
              {
                heading: 'Gyakori bőrelváltozások',
                paragraphs: [
                  'Az anyajegy a festéksejtek (melanociták) helyi felszaporodásából keletkező, jellemzően jóindulatú bőrelváltozás, amelyet éppen ezért érdemes a korábban (Homeosztázis fejezet) megismert önvizsgálat keretében rendszeresen ellenőrizni: a méret, az alak vagy a szín hirtelen megváltozása orvosi vizsgálatot indokol. A szemölcs vírusfertőzés (humán papillomavírus) által okozott, jóindulatú, de fertőző bőrelváltozás, amely közvetlen érintkezéssel terjedhet egyik testrészről a másikra, vagy akár egyik személyről a másikra is.',
                  'A mitesszer a faggyúmirigy nyílásának elhalt hámsejtekkel és faggyúval történő eltömődéséből alakul ki; ha ehhez baktériumok elszaporodása és gyulladás is társul, pattanás jön létre - ez különösen a serdülőkorban gyakori, amikor a hormonális változások fokozzák a faggyúmirigyek működését. A vízhólyag (pl. dörzsölés vagy enyhébb égés hatására) a felhám rétegeinek egymástól való elválásából és a köztük felgyülemlő szövetnedvből keletkezik, míg a vérhólyag ennél mélyebb, az irha ereit is érintő sérülésnél alakul ki, ilyenkor a hólyag tartalma vér.',
                ],
              },
              {
                heading: 'Égési sérülések és ellátásuk',
                paragraphs: [
                  'Az égési sérülés azért veszélyes, mert a bőr - amely a korábban (Bőr fejezet) megismert védő funkciót látja el - a sérülés helyén elveszti a kórokozók elleni védekező képességét, emellett a kiterjedt égés jelentős folyadékveszteséggel is járhat, ami súlyos esetben a keringést is veszélyeztetheti. Minél kiterjedtebb a sérült bőrfelület, annál nagyobb ez a kockázat, ezért a nagy kiterjedésű égési sérülések - a fájdalom mértékétől függetlenül is - mindig azonnali szakorvosi ellátást igényelnek.',
                  'Kisebb égési sérülés ellátásának lépései a következők:',
                  '1. Azonnali, hosszan tartó hűtés hűvös (nem jéghideg) folyó vízzel, amely csökkenti a fájdalmat és mérsékli a szövetkárosodás mértékét.',
                  '2. A sérült területről az ékszerek, szoros ruhadarabok eltávolítása, mielőtt a terület esetleg megduzzadna.',
                  '3. A kialakuló hólyag érintetlenül hagyása - felszakítása megnyitná az utat a fertőzések előtt.',
                  '4. A sérült terület tiszta, steril kötszerrel történő fedése, majd - kiterjedtebb vagy mélyebb sérülés esetén - orvosi ellátás igénybevétele.',
                ],
              },
            ],
            keyTerms: ['anyajegy', 'szemölcs', 'mitesszer', 'pattanás', 'vízhólyag', 'vérhólyag', 'égési sérülés'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni az ultraibolya sugárzás két fő típusa közötti különbséget.',
            sections: [
              {
                heading: 'UVA- és UVB-sugárzás',
                paragraphs: [
                  'A napfény ultraibolya összetevője két fő típusra osztható: az UVA-sugárzás sokkal mélyebbre hatol a bőrbe, és elsősorban a bőr korai öregedéséért (ráncosodásáért) felelős, míg az UVB-sugárzás a felhám szintjén fejti ki a hatását, és elsősorban a napégésért és a bőrsejtek genetikai károsodásáért felelős, ezáltal nagyobb szerepet játszik a bőrrák kialakulásában. A felhő és az üveg az UVB-sugárzás nagy részét megszűri, de az UVA-sugárzást jóval kevésbé - ez az oka annak, hogy borult időben vagy ablakon keresztül is érheti a bőrt jelentős, öregedést okozó UV-károsodás, még akkor is, ha látható napégés nem alakul ki.',
                  'A hatékony napvédő szerek mindkét sugárzástípus ellen védelmet nyújtanak (ún. "széles spektrumú" védelem) - ez fontosabb, mint kizárólag a napégés (UVB) elleni védelemre koncentrálni, hiszen az UVA-sugárzás károsító hatása hosszú távon, látható napégés nélkül is felhalmozódhat. A szolárium (mesterséges UV-fényforrás) használata ugyanezen okból kockázatos: a mesterségesen kiváltott barnulás ugyanúgy a bőrsejtek genetikai károsodásán keresztül jön létre, mint a természetes napsugárzás okozta barnulás.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'vazrendszer',
        title: 'Vázrendszer',
        order: 4,
        isFree: false,
        estimatedMinutes: 18,
        comparisonTable: {
          headers: ['Szempont', 'Varratos és porcos kapcsolódás', 'Ízületes kapcsolódás'],
          rows: [
            ['Mozgathatóság', 'nincs vagy csak kismértékű', 'szabad mozgás'],
            ['Példa', 'koponyavarratok, borda-szegycsont kapcsolat', 'könyök-, térd-, csípőízület'],
            ['Szerkezet', 'közvetlen csontos vagy porcos összeköttetés', 'ízületi tok, ízületi porc, ízületi folyadék'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban megismert gerinces csoportok (pl. a Csontos halak fejezetben tárgyalt gerincoszlop) után az emberi vázrendszert ismerjük meg részletesen - azt a csontos-porcos szerkezetet, amely a testet tartja, védi és a mozgást lehetővé teszi.',
            sections: [
              {
                heading: 'A csontváz funkciói',
                paragraphs: [
                  'A csontváz több biológiai funkciót is ellát egyszerre: mechanikai tartást biztosít a testnek, az izmokkal együttműködve lehetővé teszi a mozgást, védi a létfontosságú belső szerveket (pl. a koponya az agyat, a mellkas a szívet és a tüdőt), emellett a csontvelőben vérsejtek képződnek, a csontállomány pedig ásványi anyagok (elsősorban kalcium) raktáraként is szolgál.',
                ],
              },
              {
                heading: 'A koponya csontjai',
                paragraphs: [
                  'A koponya két fő részre osztható: az agykoponya az agyat védő, közvetlenül egymáshoz illeszkedő lapos csontokból áll, míg az arckoponya csontjai (pl. az orrcsont, a járomcsont, valamint a felső és az alsó állcsont) az arc formáját és a rágás szervi hátterét adják. Az alsó állcsont az egyetlen mozgatható koponyacsont, ez teszi lehetővé a rágást és a beszédet.',
                ],
              },
              {
                heading: 'A gerincoszlop, a csigolya és a kétlábon járás',
                paragraphs: [
                  'A korábban (Csontos halak fejezet) megismert gerincoszlop az emberi testben is a gerinchúr helyét foglalja el, egymáshoz kapcsolódó csigolyákból épül fel, amelyek mindegyike egy tömör csigolyatestből, egy azt hátulról körülölelő csigolyaívből (amely a gerincvelőt védi) és a csigolyaívről hátrafelé kiálló tövisnyúlványból áll. A gerincoszlop szakaszai (tájékai) a nyaki, a háti, az ágyéki, a keresztcsonti és a farkcsonti szakasz.',
                  'Az emberi gerincoszlop jellegzetes, kettős S-alakú görbülete szorosan összefügg a kétlábon járással: ez a rugalmas, hullámos forma egyenletesebben osztja el a felsőtest súlyát és a járás közben fellépő rázkódásokat, mint egy egyenes gerincoszlop tenné - ez az emberi mozgási szervrendszer egyik legjellegzetesebb sajátossága a más gerinces csoportokhoz képest.',
                ],
              },
              {
                heading: 'A mellkas csontjai',
                paragraphs: [
                  'A mellkast a háti csigolyákhoz kapcsolódó bordapár és az elülső oldalon található szegycsont alkotja - ez a csontos "kosár" védi a benne elhelyezkedő szívet és tüdőt, ugyanakkor a bordák rugalmas, ízületes-porcos kapcsolódása lehetővé teszi a légzéshez szükséges mellkasi térfogatváltozást is.',
                ],
              },
              {
                heading: 'A csont kémiai összetétele és az életkor hatása',
                paragraphs: [
                  'A csont két fő alkotórészből épül fel: a szerves alkotók (elsősorban a korábban - Fehérjék fejezet - vázanyagként már megismert kollagén nevű rostos fehérje) rugalmasságot adnak a csontnak, míg a szervetlen alkotók (elsősorban kalcium-sók) a szilárdságáért felelősek. E kettő aránya az életkorral változik: gyermekkorban a szerves alkotók aránya magasabb, ezért a gyermekek csontja rugalmasabb, és ritkábban törik el teljesen (gyakoribb az ún. "zöldgally-törés"), időskorban viszont a szervetlen alkotók aránya nő meg relatíve, a csont rugalmassága csökken, ami miatt az idősek csontjai könnyebben és súlyosabban törnek el.',
                ],
              },
              {
                heading: 'Csontok szerkezete: lapos és hosszú csöves csont',
                paragraphs: [
                  'A lapos csontok (pl. a koponyacsontok, a lapocka) nagy felületet biztosítanak akár védelemre, akár izomtapadásra, szerkezetük két tömör csontréteg közé zárt, szivacsos csontállományból áll. A hosszú csöves csontok (pl. a combcsont) belsejében üreg található, amelyben a csontvelő helyezkedik el; ez a csőszerű felépítés viszonylag kis anyagfelhasználás mellett is nagy szilárdságot és hajlítással szembeni ellenállást biztosít, ami a mozgás és a testsúly tartása szempontjából egyaránt előnyös.',
                ],
              },
              {
                heading: 'Csontkapcsolódások és az ízület felépítése',
                paragraphs: [
                  'A csontok többféleképpen kapcsolódhatnak egymáshoz: a varratos kapcsolódásnál (pl. a koponyacsontok között) a csontok szorosan, mozgás nélkül illeszkednek egymáshoz; a porcos kapcsolódásnál (pl. a bordák és a szegycsont között) porcszövet biztosít kismértékű, rugalmas elmozdulást; az ízületes kapcsolódásnál (pl. a könyök- vagy a térdízületben) a csontvégek szabadon mozgathatók egymáshoz képest. Egyes csontok az egyedfejlődés során teljesen összenőnek egymással: a keresztcsontot alkotó öt csigolya például felnőttkorra egyetlen, egységes csonttá olvad össze, a koponyavarratok pedig időskorra fokozatosan elcsontosodnak, ezzel a korábban még mozgó kapcsolódás mozdulatlanná válik.',
                  'Az ízület felépítése jól tükrözi a szabad mozgás biztosításának feladatát: az ízületi tok zárja körbe és rögzíti az ízületet, a csontvégeket borító ízületi porc csökkenti a súrlódást, az ízületi folyadék (amelyet az ízületi tok belső rétege termel) pedig kenőanyagként és tápanyagforrásként szolgál a súrlódásmentes mozgáshoz.',
                ],
              },
              {
                heading: 'A végtagok csontjai és a függesztőövek',
                paragraphs: [
                  'A végtagokat a törzshöz a függesztőövek kapcsolják: a felső végtagot a vállöv (kulcscsont és lapocka), az alsó végtagot a medenceöv (csípőcsont) rögzíti a törzshöz. Mindkét végtag felépítése a szárazföldi gerincesekre jellemző ötujjú végtagtípus emberi megvalósulása: a felső végtagon a felkarcsont, majd az orsócsont és a singcsont, végül a kéztőcsontok, a kézközépcsontok és az ujjperecek követik egymást; az alsó végtagon ennek megfelelője a combcsont, a sípcsont és a szárkapocscsont, majd a lábtőcsontok, a lábközépcsontok és a lábujjperecek.',
                  'A férfi és a női medence felépítése jellegzetesen eltér: a női medence szélesebb és nyitottabb, ami a szülés során a magzat szülőcsatornán történő áthaladását teszi lehetővé, míg a férfi medence keskenyebb és zártabb felépítésű.',
                ],
              },
            ],
            keyTerms: ['csontváz', 'agykoponya', 'arckoponya', 'gerincoszlop', 'csigolya', 'ízület', 'kollagén', 'vállöv', 'medenceöv'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni a csontritkulás (oszteoporózis) hátterét, valamint az emberi kétlábon járás evolúciós jelentőségét.',
            sections: [
              {
                heading: 'Csontritkulás és az emberi kétlábon járás evolúciós háttere',
                paragraphs: [
                  'A csontritkulás (oszteoporózis) olyan állapot, amelyben a csontok ásványianyag-tartalma és sűrűsége kórosan lecsökken, ezáltal a csontok törékennyé válnak - ez a jelenség szorosan összefügg a korábban (középszinten) megismert, életkorral változó csontösszetétellel, és különösen a nőknél gyakori a menopauza utáni hormonális változások miatt, amelyek felgyorsítják a csontállomány lebontását.',
                  'Az emberi kétlábon járás (bipedális mozgás) kialakulása jelentős evolúciós átalakulással járt az emberelődök vázrendszerében: a gerincoszlop kettős S-alakú görbülete, a medence átalakult formája és a lábfej boltozatos szerkezete mind ehhez a mozgásformához igazodva fejlődött ki, lehetővé téve a kezek felszabadulását más feladatokra (pl. eszközhasználatra) a mozgás közben.',
                ],
              },
            ],
            keyTerms: ['oszteoporózis'],
          },
        },
      },
      {
        id: 'izomrendszer',
        title: 'Izomrendszer',
        order: 5,
        isFree: false,
        estimatedMinutes: 18,
        comparisonTable: {
          headers: ['Szempont', 'Hajlító izmok', 'Feszítő izmok'],
          rows: [
            ['Hatás', 'csökkentik az ízületi szöget', 'növelik az ízületi szöget'],
            ['Példa', 'kétfejű karizom (bicepsz)', 'háromfejű karizom (tricepsz)'],
            ['Együttműködés', 'egymással ellentétesen (antagonistán) működnek', 'egymással ellentétesen (antagonistán) működnek'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Vázrendszer fejezet) megismert csontváz önmagában mozdulatlan - a mozgást a hozzá kapcsolódó izmok összehúzódása teszi lehetővé. Ebben a fejezetben az emberi izomrendszer felépítését és néhány jellegzetes izmát ismerjük meg.',
            sections: [
              {
                heading: 'Az emberi test néhány jellegzetes izma',
                paragraphs: [
                  'A gyűrű alakú záróizmok (pl. a szájnyílás vagy a végbélnyílás körül) az adott testnyílás szűkítésére, elzárására szolgálnak. A mimikai izmok az arc bőrébe tapadnak, összehúzódásuk hozza létre az arckifejezéseket - ez megkülönbözteti őket a legtöbb más vázizomtól, amelyek jellemzően két csonthoz kapcsolódnak.',
                  'A bordaközi izmok a bordák mozgatásával, a rekeszizom pedig a mellüreg és a hasüreg közötti, kupola alakú elválasztó izomként vesz részt a légzésben - ezekkel a modul egy későbbi fejezetében foglalkozunk majd részletesebben.',
                  'A mellizom és a hasizmok a törzs és a felső végtag mozgatásában vesznek részt (pl. a hasizmok a törzs előrehajlításában), a gátizmok a medencefenéket alkotják, a fejbiccentő izom a fej fordítását és hajlítását végzi. A végtagok hajlító és feszítő izmai (pl. a kar hajlító kétfejű és feszítő háromfejű izma) párban, egymással ellentétesen (antagonistán) működnek: amikor az egyik összehúzódik, a másik ellazul, ez teszi lehetővé az ízületek mindkét irányú mozgatását.',
                  'Ez az antagonista elrendeződés minden, a korábban (Vázrendszer fejezet) megismert ízületnél megfigyelhető: az izmok soha nem "tolják vissza" önmagukat, csak összehúzódni képesek, ezért minden mozgásirányhoz szükség van egy ellentétes hatású izomra, amely a visszamozdulást végzi.',
                ],
              },
              {
                heading: 'A vázizom felépítése',
                paragraphs: [
                  'A korábban (Állati szövetek fejezet) megismert vázizomszövet hierarchikus szerkezetű: az egyedi izomsejtek (más néven izomrostok) izomkötegekbe tömörülnek, több izomköteg alkotja magát az izompályát (a szabad szemmel is látható, teljes izmot), amelyet mindkét végén ínak rögzítenek a csontvázhoz.',
                  'Ez a rétegzett felépítés (sejt → köteg → teljes izom) minden szinten kötőszöveti hártyákkal van körülvéve, amelyek védik és rendezett szerkezetben tartják az izomrostokat, miközben lehetővé teszik, hogy az egyes rostok összehúzódási ereje összeadódva az egész izomra átterjedjen.',
                ],
              },
              {
                heading: 'Bemelegítés és izomláz',
                paragraphs: [
                  'A bemelegítés célja az izmok, ízületek fokozatos felkészítése a terhelésre: a vérkeringés és az izomhőmérséklet emelésével csökkenti a sérülések (pl. izomhúzódás) kockázatát, és javítja az izmok teljesítőképességét. Az izomláz megszüntetésének leghatékonyabb módja a könnyű, fokozatos mozgás és a nyújtás, valamint a megfelelő pihenés - a teljes mozgáshiány éppúgy nem segít, mint a további túlterhelés. Az izomláz jellemzően pár nap alatt magától is elmúlik, ahogy az apró izomsérülések begyógyulnak.',
                ],
              },
              {
                heading: 'Az izomtónus szerepe',
                paragraphs: [
                  'Az izomtónus az izom nyugalmi állapotban is fennálló, enyhe feszülési állapota, amely alapvető szerepet játszik a testtartás fenntartásában (enélkül a test összeroskadna a gravitáció hatására) és a mozgások előkészítésében, hiszen egy már enyhén feszes izom gyorsabban és hatékonyabban tud teljes összehúzódásba lépni, mint egy teljesen ellazult izom. Az izomtónust az idegrendszer folyamatosan, akaratlanul szabályozza, még alvás közben is - ez különbözteti meg a tudatosan, akaratlagosan kiváltott, teljes izomösszehúzódástól.',
                ],
              },
            ],
            keyTerms: ['vázizom', 'izomköteg', 'izompálya', 'ín', 'izomtónus'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a mozgási szervrendszer működését fizikai (emelő-elv), biokémiai (aktin, miozin, ATP) és élettani szempontból is meg kell érteni.',
            sections: [
              {
                heading: 'A mozgás fizikai háttere: az emelő-elv',
                paragraphs: [
                  'A csontok, az ízületek és az izmok együttese fizikai értelemben emelőrendszerként működik: a csont az emelőkar, az ízület a forgáspont, az izom összehúzódása pedig a ható mozgatóerő. Az erőkar (az erő hatásvonala és a forgáspont közötti távolság) hossza határozza meg, hogy mekkora erő szükséges egy adott mozgás létrehozásához: rövidebb erőkar esetén nagyobb erőt kell kifejteni, de a végtag távolabbi pontja gyorsabban és arányaiban nagyobb távolságot mozdul el, mint hosszabb erőkar esetén.',
                ],
              },
              {
                heading: 'Az izomösszehúzódás biokémiai háttere',
                paragraphs: [
                  'A korábban (Fehérjék fejezet) megismert összehúzékony fehérjerendszerek konkrét példájaként a vázizomszövet sejtjeiben két fő összehúzódó fehérje, az aktin és a miozin egymáson való elcsúszása hozza létre az izom megrövidülését. Ehhez a folyamathoz elengedhetetlenül szükség van kalciumionokra (Ca²⁺), amelyek az idegi ingerület hatására szabadulnak fel, és teszik lehetővé az aktin és a miozin kapcsolódását.',
                  'Az izom összehúzódásának közvetlen energiaforrása az ATP, amelynek nagyon gyors pótlását egy saját energiatároló molekula, a kreatin-foszfát segíti, míg az oxigén rövid távú tárolását az izomban a mioglobin nevű fehérje végzi - ez utóbbi felelős a vázizom jellegzetes vörös színéért is, és lehetővé teszi, hogy az izom rövid ideig oxigénhiányos körülmények között is hatékonyan működjön.',
                ],
              },
              {
                heading: 'Az izomláz kialakulásának oka',
                paragraphs: [
                  'Az izomláz a szokatlan vagy különösen intenzív terhelés hatására az izomrostokban kialakuló apró, mikroszkopikus sérülésekből és az ezt követő gyulladásos folyamatból ered - ez a magyarázat pontosítja azt az elterjedt, de téves nézetet, amely szerint az izomlázat a tejsav felhalmozódása okozná: a tejsav valójában már órákkal az edzés befejezése után lebomlik, az izomláz fájdalma pedig jellemzően csak 1-2 nappal később jelentkezik.',
                ],
              },
            ],
            keyTerms: ['aktin', 'miozin', 'kreatin-foszfát', 'mioglobin'],
          },
        },
      },
      {
        id: 'mozgasi-rendszer-egeszsegtana',
        title: 'A mozgási rendszer egészségtana',
        order: 6,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Ficam', 'Rándulás'],
          rows: [
            ['Mi történik', 'az ízületi felszínek átmenetileg kimozdulnak egymáshoz képest', 'az ízületi szalagok átmenetileg túlnyúlnak, esetleg kisebb részük megszakad'],
            ['Csontelmozdulás', 'igen, jellemzően látható deformitással jár', 'nincs, a csontok a helyükön maradnak'],
            ['Jellemző tünet', 'erős fájdalom, deformitás, mozgásképtelenség', 'fájdalom, duzzanat, korlátozott mozgás'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Vázrendszer és Izomrendszer fejezetek) megismert csontok, ízületek és izmok együttműködésén alapuló mozgási rendszer épsége könnyen sérülékeny - ebben a fejezetben azt vizsgáljuk meg, hogyan óvhatjuk meg ezt a rendszert, és milyen gyakori sérülésekkel, elváltozásokkal találkozhatunk a mindennapokban, illetve a sportolás során.',
            sections: [
              {
                heading: 'A mozgási rendszer épségét szolgáló alapelvek',
                paragraphs: [
                  'A helyes testtartás megőrzése (pl. egyenes hátú ülés, megfelelő emelési technika) csökkenti a gerincoszlopra és az ízületekre nehezedő egyenlőtlen terhelést, ezáltal megelőzi a hosszú távú károsodásokat. A rendszeres, mértékletes testedzés erősíti az izmokat, javítja az ízületek mozgástartományát, és - ahogy azt korábban (Vázrendszer fejezet) a csont kémiai összetételénél érintettük - a csontokra ható mechanikai terhelés fenntartja, sőt növelheti a csontsűrűséget, csökkentve a csontritkulás kockázatát.',
                  'Fontos ugyanakkor a fokozatosság elve is: a hirtelen, túlzott terhelés éppen azokat a sérüléseket okozhatja (pl. rándulást, izomhúzódást), amelyek megelőzésére a rendszeres testmozgás egyébként szolgálna - ezért a terhelés fokozatos növelése és a megfelelő pihenőidők beiktatása egyaránt szükséges a mozgási rendszer épségének megőrzéséhez.',
                ],
              },
              {
                heading: 'Törés, gerincsérülés, ficam, csípőficam',
                paragraphs: [
                  'A törés a korábban (Vázrendszer fejezet) megismert csont folytonosságának megszakadása, jelei jellemzően az erős fájdalom, a duzzanat, a deformitás (rendellenes testhelyzet) és a mozgásképtelenség. A gerincsérülés különösen veszélyes, mert a gerincoszlopon belül futó gerincvelő is károsodhat - ennek jele lehet az érzészavar vagy akár a bénulás is, ezért gerincsérülés gyanúja esetén a sérültet lehetőleg egyáltalán nem szabad mozgatni a szakszerű ellátás megérkezéséig.',
                  'A ficam az ízületi felszínek átmeneti, kóros kimozdulása egymáshoz képest, amelyet erős fájdalom, látható deformitás és mozgásképtelenség kísér. A csípőficam a csípőízület kóros helyzete, amely lehet veleszületett fejlődési rendellenesség (ez csecsemőknél viszonylag gyakori, ezért szűrik is), vagy sérülés következménye; jelei lehetnek a láb aszimmetrikus hossza, a csípőízület korlátozott mozgathatósága (pl. nehezített széttárhatóság), illetve mozgatáskor jelentkező kattanó hang. A veleszületett csípőficam korai felismerése és kezelése kiemelten fontos, mert kezeletlenül tartós mozgászavarhoz és a csípőízület idő előtti kopásához vezethet.',
                ],
              },
              {
                heading: 'Rándulás, lúdtalp, gerincferdülés',
                paragraphs: [
                  'A rándulás az ízületet stabilizáló, korábban (Állati szövetek fejezet) megismert szalagok átmeneti túlnyúlása, esetleg kisebb mértékű szakadása, amelynél - a ficammal ellentétben - a csontok nem mozdulnak el tartósan a helyükről; jellemző tünete a fájdalom, a duzzanat és az érintett ízület korlátozott mozgathatósága.',
                  'A lúdtalp a lábboltozat kóros belapulása (a talp normál esetben boltozatos formájának elvesztése), amely a lábfej terhelés-elosztását teszi kedvezőtlenné, és hosszú távon a boka, a térd, sőt akár a gerincoszlop terhelésében is komoly problémákat okozhat.',
                  'A gerincferdülés (scoliosis) a gerincoszlop oldalirányú elgörbülése - ez eltér a korábban (Vázrendszer fejezet) megismert, normális, előre-hátra irányú kettős S-alaktól, amely a kétlábon járáshoz szükséges egyenletes teherelosztást szolgálja.',
                ],
              },
              {
                heading: 'Táplálék-kiegészítők káros hatásai testépítésnél',
                paragraphs: [
                  'A testépítés (izomtömeg-növelés) során egyes sportolók szakszerűtlenül alkalmazott táplálék-kiegészítőket (pl. túlzott fehérjebevitelt) vagy tiltott, hormonális hatású szereket (pl. anabolikus szteroidokat) használnak. Ez utóbbiak súlyos, akár visszafordíthatatlan károsodásokat okozhatnak: felboríthatják a szervezet teljes hormonális egyensúlyát, terhelik a májat és a vesét, fiatalkorban pedig korai csontnövekedés-leálláshoz is vezethetnek, mivel a nemi hormonok szintjének mesterséges megemelése a csontok hosszanti növekedési zónáinak idő előtti záródását idézheti elő.',
                  'Éppen ezért a serdülőkorú, még növésben lévő fiatalok esetében a szakszerűtlen táplálék-kiegészítés és a hormonális hatású szerek használata különösen kockázatos: a rövid távú, látványos izomtömeg-növekedés hosszú távon akár a végleges testmagasság csökkenéséhez és egyéb, tartós egészségkárosodáshoz is vezethet.',
                ],
              },
            ],
            keyTerms: ['törés', 'gerincsérülés', 'ficam', 'csípőficam', 'rándulás', 'lúdtalp', 'gerincferdülés', 'anabolikus szteroid'],
          },
          emeltExtra: {
            intro: 'Ehhez az alponthoz a hivatalos érettségi követelmény nem ír elő külön emelt szintű tudást - mégis érdemes megismerni a gerincferdülés osztályozásának alapjait.',
            sections: [
              {
                heading: 'A gerincferdülés típusai',
                paragraphs: [
                  'A gerincferdülés kialakulhat funkcionálisan (pl. tartósan rossz testtartás, egyoldalú terhelés miatt, amely még visszafordítható) vagy strukturálisan (a csigolyák tartós, szerkezeti elváltozásával járó, nehezebben kezelhető formában). A korai felismerés és a rendszeres iskolai vagy háziorvosi szűrővizsgálat - ahogy azt korábban (Homeosztázis fejezet) az önvizsgálat és a szűrővizsgálatok jelentőségénél már megismertük - kiemelten fontos, mert a funkcionális elváltozások időben történő, tudatos korrekciója gyakran megelőzheti a súlyosabb, végleges strukturális elváltozások kialakulását.',
                  'A funkcionális és a strukturális forma megkülönböztetése azért is fontos, mert eltérő kezelési stratégiát igényelnek: a funkcionális elváltozás jellemzően rendszeres testtartás-korrekcióval, célzott gyógytornával kezelhető, míg a kifejezett strukturális elváltozás esetén súlyosabb esetben ortopédiai fűző viselése vagy akár műtéti beavatkozás is szükségessé válhat.',
                ],
              },
              {
                heading: 'Az izomrendszer és a vázrendszer sérüléseinek megelőzése',
                paragraphs: [
                  'A legtöbb, ebben a fejezetben bemutatott sérülés (rándulás, ficam, egyes törések) kockázata jelentősen csökkenthető megfelelő bemelegítéssel, a korábban (Izomrendszer fejezet) megismert fokozatos terheléssel, valamint a mozgásformához illő, megfelelő felszereléssel (pl. sportcipő) - ez is jól mutatja, hogy a vázrendszer és az izomrendszer épsége szorosan összefügg egymással, hiszen egy erős, jól bemelegített izomzat is jelentős, kiegészítő védelmet nyújt az ízületeknek és a csontoknak, tompítva a mozgás közben rájuk ható erőket.',
                ],
              },
            ],
            keyTerms: [],
          },
        },
      },
      {
        id: 'taplalkozas',
        title: 'Táplálkozás',
        order: 7,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (A mozgási rendszer egészségtana fejezet) lezárt mozgási rendszer után ebben a modulban most a táplálkozási (emésztő-) rendszert kezdjük megismerni: ez a fejezet a táplálkozás alapfogalmait és a szervrendszer felépítését tekinti át, a következő fejezetek (Emésztés, Felszívódás, A táplálkozás szabályozása, Táplálkozás egészségtana) pedig ezt az alapot bontják ki részletesen.',
            sections: [
              {
                heading: 'A táplálkozás jelentősége és fő folyamatai',
                paragraphs: [
                  'A táplálkozás a szervezet számára szükséges energia és építőanyag biztosítását szolgálja: a felvett tápanyagokból nyert energia fedezi például a korábban (Izomrendszer fejezet) megismert izomösszehúzódáshoz szükséges ATP-termelést, az építőanyagok pedig a szövetek folyamatos megújulásához és növekedéséhez szükségesek.',
                  'A táplálkozás fő folyamatai a rágás (a táplálék mechanikai aprítása és nyállal való összekeverése, amely megnöveli a táplálék felületét és ezzel megkönnyíti a későbbi kémiai bontást), a nyelés (a lenyelt falat garaton, majd nyelőcsövön át történő továbbítása a gyomorba), valamint a bélperisztaltika, azaz a bélcsatorna falában lévő izomzat hullámszerű összehúzódása, amely a táplálékot a tápcsatornán végig továbbmozgatja.',
                ],
              },
              {
                heading: 'Táplálék és tápanyag',
                paragraphs: [
                  'Fontos megkülönböztetni a táplálék és a tápanyag fogalmát: a táplálék a szervezetbe felvett étel, amely még emésztésre vár, míg a tápanyag a tápláléknak az az emésztés révén felszabadított alkotórésze (szénhidrát, fehérje, zsír, vitamin, ásványi anyag, víz), amelyet a szervezet ténylegesen fel tud szívni és hasznosítani tud.',
                  'A víz és az ásványi anyagok különleges helyzetű tápanyagok, mert emésztés nélkül, változatlan formában is felszívódnak - ezzel szemben a szénhidrátoknak, a fehérjéknek és a zsíroknak előbb a következő fejezetben (Emésztés) tárgyalt kémiai lebontáson kell átesniük ahhoz, hogy a szervezet hasznosítani tudja őket.',
                ],
              },
              {
                heading: 'A tápanyagok energiatartalma és a testtömegindex',
                paragraphs: [
                  'A tápanyagok fajlagos energiatartalma eltérő: a szénhidrátok és a fehérjék energiatartalma kb. 17 kJ/g (kb. 4 kcal/g), a zsíroké ennek több mint kétszerese, kb. 38 kJ/g (kb. 9 kcal/g) - egy egyszerű számítási példával: 20 g zsír elfogyasztása kb. 760 kJ energiát biztosít a szervezetnek, míg ugyanennyi szénhidrát csak kb. 340 kJ-t.',
                  'A testtömegindex (BMI = testtömeg (kg) / testmagasság² (m²)) egy tájékozódásra alkalmas, de nem tökéletes mutató: a szokásos tájékoztató beosztás szerint 18,5 alatt alultápláltságról, 18,5-25 között normál testtömegről, 25 felett túlsúlyról beszélünk, ez a beosztás azonban nem veszi figyelembe a testösszetételt (az izom- és zsírszövet arányát). Éppen ezért a BMI normálértéke valójában a nemtől, az életkortól és a testösszetételtől is függ - például egy nagy izomtömegű sportolónál a BMI tévesen a túlsúly kategóriájába eshet, hiszen az izomszövet nehezebb, mint az azonos térfogatú zsírszövet.',
                ],
              },
              {
                heading: 'A táplálkozási szervrendszer áttekintése',
                paragraphs: [
                  'A táplálkozási szervrendszer fő szervei - a táplálék útját követve - a szájüreg (fogak, nyelv, nyálmirigyek), a garat, a nyelőcső, a gyomor, a vékonybél és a vastagbél, majd a végbél; ehhez kapcsolódik két fontos mirigyes szerv, a máj (epehólyaggal) és a hasnyálmirigy, amelyek emésztőnedveiket a vékonybél elejébe (nyombélbe) ürítik.',
                  'A teljes tápcsatorna hossza felnőtt embernél összecsavarodott állapotban is eléri a 8-9 métert - ez a jelentős hossz biztosítja, hogy a táplálék elegendő ideig érintkezzen az emésztőnedvekkel és a felszívó felületekkel. Az egyes szervek pontos szerepét (fogazat, emésztőnedvek, felszívódás) a következő fejezetek részletezik.',
                ],
              },
            ],
            keyTerms: ['táplálék', 'tápanyag', 'bélperisztaltika', 'testtömegindex'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'emesztes',
        title: 'Emésztés',
        order: 8,
        isFree: false,
        estimatedMinutes: 14,
        content: {
          kozep: {
            intro: 'A korábban (Táplálkozás fejezet) áttekintett táplálkozási szervrendszer felépítése után ebben a fejezetben azt vizsgáljuk meg, hogyan zajlik a táplálék mechanikai és kémiai lebontása - ez utóbbi ugyanazt a hidrolízis elvet követi, amelyet korábban (a szénhidrátok fejezetben) az amiláz enzim keményítőbontásánál már megismertünk.',
            sections: [
              {
                heading: 'Fogazat és a szájüreg egészsége',
                paragraphs: [
                  'A fog részei a korona (a látható, a legkeményebb testszövetnek számító zománccal borított rész), az alatta lévő fogcsont (dentin), a fog belsejében található, ereket és idegeket tartalmazó fogbél (pulpa), valamint az állcsontban rögzítő gyökér. Az emberi (felnőtt) fogképlet negyedenként 2 metszőfogat, 1 szemfogat, 2 kisőrlőt és 3 nagyőrlőt tartalmaz, összesen 32 fogat - ez a korábban (Emlősök fejezet) megismert differenciált, heterodont fogazat egy konkrét, emberre jellemző megvalósulása.',
                  'A száj higiéniája (rendszeres fogmosás, fogselyem használata, rendszeres fogorvosi szűrővizsgálat) kiemelten fontos, mert megelőzi a fogszuvasodást (káriészt) és az ínygyulladást, amelyek kezeletlenül akár fogvesztéshez is vezethetnek.',
                ],
              },
              {
                heading: 'Az emésztőnedvek és az emésztés folyamata',
                paragraphs: [
                  'Az emésztés a szájban kezdődik, ahol a rágás mechanikai hatása mellett a nyál amiláz enzime megkezdi a keményítő bontását; a nyál termeléséért három pár nyálmirigy (fültőmirigy, állkapocs alatti és nyelv alatti mirigy) felel. A megrágott, nyállal átitatott falatot a nyelv a garat felé továbbítja, ahonnan a nyelés reflexes mozgássorozata juttatja tovább a nyelőcsőbe. A nyelőcső ezután pusztán szállító szerv: benne emésztés nem történik, kizárólag a bélperisztaltikához hasonló hullámzó izomösszehúzódás továbbítja a lenyelt falatot a gyomorba.',
                  'A gyomorban a gyomornedv sósavtartalma erősen savas kémhatást (kb. pH 2) hoz létre, amely a fehérjebontó pepszin enzim működéséhez optimális, emellett elpusztítja a táplálékkal bejutó kórokozók jelentős részét is. A gyomor izmos fala a savas gyomornedvet a táplálékkal folyamatosan összekeveri, ezzel folytatva a mechanikai aprítást; a gyomor falát pedig egy vastag nyákréteg védi attól, hogy a szervezet saját magát emésztő nedve károsítsa.',
                  'A hasnyálmirigy (amelynek - ahogy azt korábban a Homeosztázis fejezetben már megismertük - egyszerre van külső elválasztású, emésztőnedvet termelő és belső elválasztású, hormontermelő szerepe is) által termelt, lúgos kémhatású hasnyál egyszerre semlegesíti a gyomorból érkező savas béltartalmat, és mind a négy fő tápanyagcsoport (fehérjék, szénhidrátok, zsírok, valamint a nukleinsavak) bontásához tartalmaz enzimeket. A máj által termelt, majd az epehólyagban tárolt epe nem enzim, hanem a zsírok emulgeálásával (apró cseppekre bontásával) segíti azok hatékonyabb, nagyobb felületen történő bontását.',
                ],
              },
              {
                heading: 'Kísérleti értelmezés: az enzimek optimális kémhatása',
                paragraphs: [
                  'Ha egy kísérletben a gyomornedvet (vagy a hasnyálat) a természetestől eltérő kémhatásúra állítjuk be, az adott emésztőnedv enzimeinek hatása lecsökken vagy leáll: a gyomornedv pepszinje csak erősen savas közegben, a hasnyál enzimei pedig csak semleges-lúgos közegben fejtik ki hatásukat - ez azt mutatja, hogy minden enzim működéséhez egy adott, optimális kémhatás szükséges, amelytől eltérve az enzim hatékonysága romlik, akár teljesen meg is szűnhet.',
                  'Ez a jelenség jól szemlélteti, miért van szükség a tápcsatorna mentén többféle, egymástól eltérő kémhatású emésztőnedvre: egyetlen enzimkészlet nem lenne képes hatékonyan működni a gyomor erősen savas, majd a vékonybél inkább semleges-lúgos közegében is - a szervezet ehelyett minden szakaszhoz a helyi kémhatáshoz optimálisan illeszkedő enzimeket termel.',
                ],
              },
            ],
            keyTerms: ['fogképlet', 'pepszin', 'amiláz', 'hasnyál', 'epe'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'felszivodas',
        title: 'Felszívódás',
        order: 9,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (Emésztés fejezet) tárgyalt kémiai lebontás után ebben a fejezetben azt nézzük meg, hova és hogyan kerülnek be a lebontott tápanyagok a szervezetbe, illetve mi történik velük ezután.',
            sections: [
              {
                heading: 'A bélbolyhok és a tápanyagok felszívódása',
                paragraphs: [
                  'A vékonybél belső falát beborító bélbolyhok apró, ujjszerű nyúlványok, amelyek hatalmasra növelik a felszívó felületet; a bélbolyhok felszínén elhelyezkedő sejteken további mikroszkopikus nyúlványok, a mikrobolyhok találhatók, amelyek tovább sokszorozzák a felszívó felület nagyságát. Minden egyes bélbolyhban sűrű hajszálér-hálózat és egy központi nyirokér (tejér) fut, ez biztosítja a felszívódott anyagok elszállítását.',
                  'Itt szívódnak fel a végső bontási termékek: a monoszacharidok és az aminosavak a hajszálereken keresztül közvetlenül a vérbe jutnak, míg a zsírsavak és a glicerin jellemzően a nyirokereken (tejereken) át szívódnak fel, és csak ezután kerülnek be a vérkeringésbe. A felszívódás egy része passzívan (a koncentrációkülönbség mentén, energiafelhasználás nélkül), más része energiaigényes, aktív folyamatokkal zajlik - hasonlóan ahhoz az elvhez, amelyet korábban (Membránok szerepe fejezet) a passzív és az aktív szállítás megkülönböztetésénél már megismertünk.',
                  'A bélbolyhok kiterjedt felszíne, sűrű érhálózata és a bennük zajló szüntelen mozgás (a bélbolyhok folyamatosan, lassú hullámmozgással "keverednek" a béltartalommal) együttesen biztosítja, hogy a naponta elfogyasztott táplálék tápanyagtartalmának túlnyomó része hatékonyan felszívódjon, mire a béltartalom eléri a vastagbelet.',
                ],
              },
              {
                heading: 'A vastagbél és a végbél szerepe',
                paragraphs: [
                  'A vékonybélből a fel nem szívódott, emészthetetlen anyagok (pl. a növényi rostok) a vastagbélbe kerülnek, amelynek fő feladata a bélsárból még kivonható víz és ásványi anyagok visszaszívása - ez tömöríti a béltartalmat széklet formájúvá. A vastagbélben élő, hatalmas számú baktérium (bélflóra) egy része hasznos, mutualista kapcsolatban él a szervezettel: egyes vitaminokat (pl. K-vitamint) is termel, amelyeket a szervezet fel tud szívni, cserébe a bélflóra tápanyagot és védett élőhelyet kap a vastagbélben - ez az együttélési forma tehát mindkét fél számára előnyös.',
                  'A végbél a kialakult széklet ideiglenes tárolására és az ürítés (defekáció) lebonyolítására szolgál; az ürítés tudatosan is késleltethető, mivel a végbélnyílást körülvevő záróizomzat egy része akaratlagosan is irányítható. Ez a rendszer együttesen biztosítja, hogy a tápcsatorna elején lezajló emésztés és felszívódás után a fel nem használt maradék szabályozottan, a szervezet számára megfelelő időpontban távozzon.',
                ],
              },
              {
                heading: 'A máj szerepe a felszívott tápanyagok feldolgozásában',
                paragraphs: [
                  'A bélből felszívódó, vérbe jutó tápanyagok elsőként a májon haladnak át, amely sokrétű szerepet tölt be: fehérjéket, glükózt és glikogént szintetizál (a felesleges glükózból glikogént raktároz, majd éhezéskor ezt bontja vissza glükózzá, ezzel puffereli a vércukorszintet - ez, ahogy azt a Homeosztázis fejezetben már megismertük, a negatív visszacsatolás elvén alapuló szabályozás egyik konkrét példája); raktároz egyes vitaminokat és a vasat; valamint méregteleníti a szervezetbe kerülő káros anyagokat (pl. az alkoholt vagy a gyógyszerek egy részét).',
                  'A máj emellett igen jelentős regenerációs képességgel rendelkezik: szövetének akár jelentős részének elvesztése után is képes visszanöveszteni eredeti méretét, ami kiemeli, mennyire létfontosságú szerv a felszívódott tápanyagok feldolgozásában. Éppen ezért a máj tartós károsodása (pl. hosszú távú túlzott alkoholfogyasztás következtében) rendkívül súlyos, az egész szervezet anyagcseréjét felborító következményekkel jár.',
                ],
              },
            ],
            keyTerms: ['bélbolyh', 'vastagbél', 'máj', 'glikogén', 'bélflóra'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'taplalkozas-szabalyozasa',
        title: 'A táplálkozás szabályozása',
        order: 10,
        isFree: false,
        estimatedMinutes: 10,
        content: {
          kozep: {
            intro: 'A korábban (Felszívódás fejezet) megismert folyamatok - hogy a tápanyagok hogyan jutnak be a szervezetbe és hogyan hasznosulnak - után ebben a fejezetben azt vizsgáljuk meg, mi váltja ki magát az étkezési késztetést, és hogyan szabályozza a szervezet a tápcsatorna működését.',
            sections: [
              {
                heading: 'Az éhség- és a szomjúságérzet kiváltása',
                paragraphs: [
                  'Az éhségérzetet jellemzően a vércukorszint csökkenése és a gyomor kiürülése váltja ki, míg a szomjúságérzetet a testfolyadékok ozmotikus koncentrációjának (a víztartalom csökkenése miatti) megemelkedése idézi elő. Mindkét érzetet az agy egy erre specializálódott központja, a hipotalamusz dolgozza fel, amely folyamatosan érzékeli a vér összetételének változásait, és ezek alapján váltja ki a megfelelő késztetést.',
                  'Az étkezés befejeztével a jóllakottság érzete alakul ki: a gyomor megtelése (feszülése) és a felszívódó tápanyagok hatására megemelkedő vércukorszint egyaránt jelzést küld a hipotalamusznak, amely ennek hatására csökkenti, majd megszünteti az éhségérzetet - ez az éhség és a jóllakottság folyamatos, egymást kiegyensúlyozó váltakozása biztosítja a rendszeres táplálékfelvételt.',
                ],
              },
              {
                heading: 'A tápcsatorna reflexes folyamatai',
                paragraphs: [
                  'A tápcsatorna számos reflexes folyamata tudatos befolyásolás nélkül, automatikusan zajlik le: a nyelés egy összetett, részben tudatos, részben reflexes mozgássorozat, a hányás pedig a szervezetbe jutott károsanyagok eltávolítását szolgáló védekező reflex.',
                  'Különösen érdekes, hogy a táplálék puszta látványa vagy illata már önmagában megindíthatja a nyál- és a gyomornedvtermelést, még mielőtt a táplálék ténylegesen a szájba kerülne - ez a jelenség lényegében ugyanazon az elven alapul, mint a korábban (Tanult magatartásformák fejezet) megismert feltételes reflex (klasszikus kondicionálás): a szervezet a táplálék látványát/illatát idővel összekapcsolja magával az étkezéssel, és erre a "jelzőingerre" is reagálni kezd.',
                  'Ezek a reflexes folyamatok jól mutatják, hogy a tápcsatorna működése nem várja meg a táplálék tényleges megérkezését az adott szervbe, hanem "előre felkészül" rá - ezzel gyorsítva és hatékonyabbá téve az emésztés megindulását, amint a táplálék ténylegesen megérkezik. A nyelés reflexe egyben védekező szerepet is betölt: garantálja, hogy a lenyelt falat mindig a helyes irányba, a nyelőcső felé haladjon, ne a szomszédos légutak felé.',
                ],
              },
              {
                heading: 'Minőségi és mennyiségi éhezés',
                paragraphs: [
                  'Fontos megkülönböztetni a minőségi éhezést (amikor a táplálék mennyisége elegendő, de valamely tápanyag - jellemzően a fehérje - tartósan hiányzik belőle) a mennyiségi éhezéstől (amikor általánosan, tartósan túl kevés az elfogyasztott táplálék energiatartalma). Mindkét forma tartós fennállása súlyos, akár visszafordíthatatlan egészségkárosodáshoz vezethet: a hosszan tartó fehérjehiány (minőségi éhezés) jellemzően duzzanatokkal (ödémával) is jár, míg a tartós, súlyos mennyiségi éhezés a szervezet teljes leépüléséhez, végső esetben halálhoz vezethet.',
                  'A két éhezésforma gyakran együtt is előfordulhat, hiszen az egyoldalú, kevés táplálék jellemzően nemcsak energiában, hanem egyes tápanyagokban (pl. fehérjében, vitaminokban) is szegény - ez különösen a fejlődő országokban, illetve szélsőséges élethelyzetekben (pl. éhínség, tartós betegség) okoz súlyos, sokrétű egészségkárosodást, amelynek felismerése és kezelése komplex, orvosi felügyeletet igényel.',
                  'Fontos megjegyezni, hogy az éhezés nemcsak szegénység vagy élelmiszerhiány következménye lehet: bizonyos evészavarok (pl. az önmegtartóztató étkezési magatartás) esetén az érintett tudatosan korlátozza a táplálékfelvételét annak ellenére, hogy a táplálék rendelkezésre áll - ez is a mennyiségi éhezés egyik, orvosi-pszichológiai kezelést igénylő formája.',
                ],
              },
            ],
            keyTerms: ['éhségérzet', 'szomjúságérzet', 'minőségi éhezés', 'mennyiségi éhezés'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'taplalkozas-egeszsegtana',
        title: 'Táplálkozás egészségtana',
        order: 11,
        isFree: false,
        estimatedMinutes: 16,
        comparisonTable: {
          headers: ['Szempont', 'Alultápláltság', 'Túltápláltság'],
          rows: [
            ['Ok', 'elégtelen energia- és/vagy tápanyagbevitel', 'tartósan a szükségletnél nagyobb energiabevitel'],
            ['Jellemző következmény', 'legyengült immunrendszer, fejlődési elmaradás, vitaminhiány-betegségek', 'elhízás, cukorbetegség és szív-érrendszeri betegségek fokozott kockázata'],
            ['Jellemző kiváltó háttér', 'szegénység, étkezési zavarok, felszívódási zavarok', 'mozgásszegény életmód, energiadús, de tápanyagszegény étrend'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (A táplálkozás szabályozása fejezet) megismert éhség-szabályozás után ebben a záró fejezetben - hasonlóan ahhoz, ahogy a mozgási rendszernél is külön fejezetet szenteltünk az egészségtannak (A mozgási rendszer egészségtana fejezet) - azt tekintjük át, hogyan függ össze a táplálkozás az egészséggel, és milyen kockázatokra érdemes figyelni.',
            sections: [
              {
                heading: 'Tápanyagforrások és a vitaminok élettani jelentősége',
                paragraphs: [
                  'A fehérjék, szénhidrátok, zsírok, növényi rostok és ásványi anyagok (nyomelemek) természetes forrásai (pl. hús, gabona, olajos magvak, zöldségek, gyümölcsök) mellett ismerni kell hiányuk és túlzott fogyasztásuk kockázatait is: a tartós fehérjehiány izomvesztéshez és duzzanatokhoz (ödémához) vezet, a rostszegény étrend székrekedést és a vastagbél megbetegedéseinek fokozott kockázatát okozhatja, a túlzott zsírfogyasztás pedig elhízáshoz és szív-érrendszeri betegségekhez vezethet.',
                  'A D-vitamin (amely napfény hatására a bőrben is képződik) hiánya a kalcium felszívódásának zavara miatt csontlágyuláshoz (angolkórhoz) vezet; az A-vitamin hiánya a recehártya fényérzékeny pigmentjének károsodása miatt szürkületi vakságot (farkasvakságot) okoz; a B12-vitamin hiánya a vörösvértestek képzésének zavara miatt vérszegénységhez vezet; a C-vitamin hiánya - mivel a kollagén nélkülözhetetlen alkotóeleme - skorbutot okoz; a folsav hiánya pedig különösen terhesség alatt veszélyes, mert magzati idegcső-záródási rendellenességet okozhat.',
                ],
              },
              {
                heading: 'Élelmiszer-biztonság és életmódhoz igazodó étrend',
                paragraphs: [
                  'Az étrendi elvárások a tevékenységtől, a kortól, a nemtől és az adott élettani állapottól (pl. terhesség, szoptatás) függően jelentősen változnak: egy intenzíven sportoló, növésben lévő fiatalnak jelentősen nagyobb energia- és fehérjebevitelre van szüksége, mint egy ülő életmódot folytató felnőttnek, a várandósság és a szoptatás időszaka pedig fokozott energia- és tápanyagigénnyel (pl. megnövekedett folsav- és vasszükséglettel) jár.',
                  'Az élelmiszerek tartósításának alapelvei (pl. hűtés, fagyasztás, szárítás, tartósítószerek alkalmazása) egyaránt a mikroorganizmusok szaporodásának gátlásán alapulnak, ezáltal lassítva az élelmiszerek romlását - ezért is fontos az élelmiszerek csomagolásán feltüntetett összetevők, illetve az eltarthatósági idő tudatos figyelembevétele. A helytelenül tárolt vagy lejárt élelmiszerekben elszaporodó mikroorganizmusok (illetve az általuk termelt méreganyagok) súlyos ételmérgezést okozhatnak, ami jól mutatja, hogy az élelmiszer-biztonság nem csak elméleti, hanem gyakorlati, mindennapi jelentőségű kérdés. Az életkorhoz igazodó étrend jó példája a csecsemőkori táplálás is, amikor az anyatej összetétele az adott fejlődési szakasz igényeihez igazodik, majd a táplálás fokozatosan egészül ki egyéb, szilárd táplálékkal.',
                ],
              },
              {
                heading: 'A tápcsatorna megbetegedéseinek kockázati tényezői és a megelőzés',
                paragraphs: [
                  'A tápcsatorna megbetegedéseinek kialakulását veleszületett hajlamosító tényezők mellett életviteli kockázati tényezők is elősegíthetik: a nem megfelelő szájhigiéné a fogszuvasodás és az ínygyulladás kockázatát növeli, a fokozott stressz fokozhatja a gyomorsav-túltermelést (ezáltal a gyomorfekély kockázatát), a túlzott alkohol- és gyógyszerfogyasztás pedig károsítja a májat és a gyomor nyálkahártyáját; ide sorolható még az egyoldalú, nem megfelelő táplálkozás, valamint egyes kedvezőtlen környezeti hatások (pl. szennyezett élelmiszer vagy ivóvíz) is.',
                  'Éppen ezért egy kiegyensúlyozott, változatos étrend mellett érdemes érvelni: ez biztosítja mind a hiánybetegségek, mind az elhízással összefüggő betegségek (pl. cukorbetegség, szív-érrendszeri betegségek) alacsonyabb kockázatát, és hosszú távon hozzájárul a szervezet minden szervrendszerének - így a korábban (Vázrendszer, Izomrendszer fejezetek) megismert mozgási rendszernek is - az egészséges, hosszú távú működéséhez.',
                ],
              },
            ],
            keyTerms: ['vitaminhiány', 'alultápláltság', 'túltápláltság', 'élelmiszer-tartósítás'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'legcsere',
        title: 'Légcsere',
        order: 12,
        isFree: false,
        estimatedMinutes: 14,
        comparisonTable: {
          headers: ['Szempont', 'Mellkasi légzés', 'Hasi légzés'],
          rows: [
            ['Domináns izom', 'elsősorban a bordaközti izmok', 'elsősorban a rekeszizom'],
            ['Mellkas/has mozgása', 'a mellkas jól láthatóan kitágul, "emelkedik"', 'a mellkas kevésbé mozog, inkább a has domborodik előre'],
            ['Jellemző előfordulás', 'megerőltető légzéskor, illetve terhesség alatt (amikor a megnagyobbodott méh gátolja a rekeszizom lesüllyedését) felerősödik', 'nyugalmi légzéskor jellemzően ez a hatékonyabb, kevesebb energiát igénylő forma'],
          ],
        },
        content: {
          kozep: {
            intro: 'A korábban (Táplálkozás egészségtana fejezet) lezárt táplálkozási rendszer után ebben a fejezetben a légzőrendszert ismerjük meg: a korábban (Emlősök fejezet) megismert rekeszizom (diafragma) - amely az emlősöket az addig tanult gerinces csoportoktól megkülönbözteti - és a Madarak fejezetben megismert légzsákos, egyirányú kettős légzéssel szemben az emberi (és általában az emlős) légzésben a levegő nem egyirányban, hanem oda-vissza (be- és kilégzéssel) áramlik.',
            sections: [
              {
                heading: 'A légzőrendszer felépítése',
                paragraphs: [
                  'A légzőrendszer legfontosabb funkciói a szervezet oxigénellátásának biztosítása, a sejtlégzés során keletkező szén-dioxid eltávolítása, valamint a hangképzés. A belélegzett levegő útja: orrüreg (illetve szükség esetén szájüreg) → garat → gégefő → légcső → hörgők → a tüdőben egyre finomabban elágazó légutak (hörgőcskék), amelyek végül a léghólyagocskákban (alveolusokban) végződnek. A jobb tüdő három, a bal tüdő - a szomszédos szív helyet igénylő elhelyezkedése miatt - csak két lebenyre tagolódik.',
                  'A tüdőt kettős hártya, a mellhártya (pleura) veszi körül: a tüdő felszínéhez tapadó és a mellkas belső falát borító lemez között egy vékony, folyadékkal kitöltött rés húzódik, amely a légzőmozgások során a tüdő súrlódásmentes csúszását teszi lehetővé a mellkasfalon, egyúttal "összetapasztja" a tüdőt a mellkasfallal, ami a légzőmozgások hatékony átvitele szempontjából elengedhetetlen.',
                ],
              },
              {
                heading: 'A légzési mozgások: belégzés és kilégzés',
                paragraphs: [
                  'A belégzést és a kilégzést elsősorban a rekeszizom és a bordaközti izmok összehangolt működése biztosítja: a rekeszizom összehúzódásakor lelapul, ezáltal megnöveli a mellüreg (és így a tüdő) térfogatát, ami a levegő beáramlását (belégzés) idézi elő; ellazulásakor a mellüreg térfogata csökken, ez okozza a kilégzést. A bordaközti izmok összehúzódása a bordákat megemeli, tovább növelve a mellüreg térfogatát belégzéskor.',
                  'Nehézlégzés (megerőltető légzés, pl. intenzív testmozgás közben) esetén további, ún. légzési segédizmok (pl. a nyaki és a vállövi izmok egy része) is bekapcsolódnak, hogy még nagyobb mellüreg-térfogatváltozást tegyenek lehetővé.',
                ],
              },
              {
                heading: 'Légzési mutatók: vitálkapacitás és légzésszám',
                paragraphs: [
                  'A vitálkapacitás a maximális erőltetett belégzést követő maximális erőltetett kilégzéssel kifújható levegő térfogata; a légzési perctérfogat pedig a percenkénti légzésszám és az egy légvételre jutó levegőmennyiség (légzési térfogat) szorzata. Az aktívan sportoló fiatalok vitálkapacitása jellemzően nagyobb, mint a nem sportolóké, mivel a rendszeres, intenzív testmozgás fejleszti a légzőizomzatot és a tüdő rugalmasságát, ezáltal hatékonyabb gázcserét és jobb terhelhetőséget biztosít. A fiúk vitálkapacitása azonos edzettségi szint mellett is jellemzően nagyobb, mint a lányoké, mivel átlagosan nagyobb testméretük nagyobb tüdőtérfogattal és fejlettebb légzőizomzattal párosul.',
                  'A légzésszám nyugalomban jellemzően alacsonyabb, mint munkavégzés (testmozgás) után: a fokozott izomműködés megnöveli a szövetek oxigénigényét és szén-dioxid-termelését, ami a légzésszám (és a légzési térfogat) növekedését váltja ki.',
                  'A légzési teljesítmény és a szervezet energiafelhasználása szorosan összefügg: minél nagyobb a szervezet pillanatnyi energiaigénye (pl. intenzív testmozgás közben), annál több oxigénre van szükség a sejtlégzéshez, ez pedig csak a légzés fokozásával (nagyobb légzési térfogattal és/vagy nagyobb légzésszámmal) biztosítható.',
                ],
              },
            ],
            keyTerms: ['léghólyagocska', 'mellhártya', 'rekeszizom', 'vitálkapacitás', 'légzési perctérfogat'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'gazcsere',
        title: 'Gázcsere',
        order: 13,
        isFree: false,
        estimatedMinutes: 8,
        content: {
          kozep: {
            intro: 'A korábban (Légcsere fejezet) megismert légzőmozgások biztosítják, hogy friss levegő jusson a tüdőbe - ebben a rövid fejezetben azt nézzük meg, mi történik ott a levegővel, és hogyan kapcsolódik ez a korábban (Lebontó folyamatok fejezet) részletesen tárgyalt sejtlégzéshez.',
            sections: [
              {
                heading: 'Légcsere, gázcsere és sejtlégzés - három egymásra épülő fogalom',
                paragraphs: [
                  'Fontos megkülönböztetni három, egymásra épülő fogalmat: a légcsere a levegő be- és kiáramlását jelenti a tüdőbe, illetve onnan kifelé; a gázcsere az oxigén és a szén-dioxid kicserélődése a léghólyagocskák és a vér, illetve a szövetek és a vér között; a sejtlégzés pedig a sejteken belül, elsősorban a mitokondriumban lezajló, energiatermelő folyamat, amely oxigént használ fel és szén-dioxidot termel - ezt a folyamatot a korábbi (Lebontó folyamatok fejezet) mutatta be részletesen.',
                  'A három folyamat szorosan összefügg, akár egy szállítási láncként is elképzelhető: a légcsere biztosítja a gázcseréhez szükséges friss levegőt, a gázcsere pedig a sejtlégzéshez szükséges oxigént juttatja el a sejtekhez, illetve távolítja el az ott képződő szén-dioxidot. Ha bármelyik láncszem sérül (pl. a légcsere elakad, vagy a gázcsere felülete lecsökken egy tüdőbetegség miatt), az a sejtek oxigénellátását és így végső soron a sejtlégzést is veszélyezteti.',
                ],
              },
              {
                heading: 'A gázcsere helyszíne: a léghólyagocskák',
                paragraphs: [
                  'A gázcsere a tüdő legmélyebb légúti egységeiben, a léghólyagocskákban (alveolusokban) zajlik, amelyek falát rendkívül sűrű hajszálér-hálózat veszi körül. A léghólyagocskák nagy száma és vékony fala összességében hatalmas felületet biztosít a gázcseréhez - hasonlóan ahhoz, ahogy korábban (a bélbolyhoknál, a Felszívódás fejezetben) a felszívó felület megnövelésének elvét már megismertük -, a vékony fal pedig azt is biztosítja, hogy a levegő és a vér között a gázok gyorsan és hatékonyan kicserélődhessenek.',
                  'A léghólyagocskákból a vérbe jutó oxigént a vörösvértestekben található hemoglobin nevű fehérje köti meg és szállítja tovább a szövetekhez, a szövetekben keletkező szén-dioxid pedig jórészt a vérplazmában oldva jut vissza a tüdőbe - ezt a szállítási folyamatot a következő fejezetekben, az anyagszállítás témakörében ismerjük meg részletesebben.',
                  'A gázcsere iránya mindkét helyszínen (a tüdőben és a szövetekben) a koncentrációkülönbségtől függ: a tüdőben a belélegzett levegőben magas az oxigénkoncentráció, ezért az oxigén a levegőből a vérbe áramlik, míg a szövetekben - ahol a sejtlégzés folyamatosan fogyasztja az oxigént és termeli a szén-dioxidot - éppen fordított irányú koncentrációkülönbség alakul ki, ezért ott az oxigén a vérből a sejtek felé, a szén-dioxid pedig a sejtekből a vér felé áramlik.',
                  'Ez a kettős, de egymással ellentétes irányú gázcsere - a tüdőben oxigénfelvétel és szén-dioxid-leadás, a szövetekben oxigénleadás és szén-dioxid-felvétel - biztosítja, hogy a szervezet minden sejtje folyamatosan hozzájusson a sejtlégzéshez szükséges oxigénhez, és megszabaduljon az anyagcsere során keletkező szén-dioxidtól. Ha ez a folyamatos körforgás bármelyik ponton megszakad (pl. a légcsere elakad, vagy a szállítást végző vér mennyisége lecsökken), a sejtek oxigénellátása percek alatt veszélybe kerülhet - ez mutatja, hogy a légcsere, a gázcsere és a sejtlégzés valójában egyetlen, megszakítás nélkül működő rendszerként biztosítja a szervezet energiaellátását.',
                ],
              },
            ],
            keyTerms: ['gázcsere', 'sejtlégzés', 'léghólyagocska', 'hemoglobin'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'hangkepzes',
        title: 'Hangképzés',
        order: 14,
        isFree: false,
        estimatedMinutes: 8,
        content: {
          kozep: {
            intro: 'A korábban (Gázcsere fejezet) megismert gázcsere mellett a légzőrendszernek egy másik, egészen más jellegű funkciója is van: ebben a fejezetben a hangképzésben kulcsszerepet játszó gégét és a hangszalagokat ismerjük meg.',
            sections: [
              {
                heading: 'A gége felépítése',
                paragraphs: [
                  'A gégefő (gége) három, ábrán is jól azonosítható része a pajzsporc (ez alkotja a gége elülső, kiemelkedő részét, a "ádámcsutkát"), a gégefedő és a hangszalagok. A gégefő a légcső és a garat találkozásánál helyezkedik el, így minden belélegzett, illetve nyelés során továbbított anyag áthalad rajta.',
                  'A gégefedő nyeléskor reflexesen lezárja a légutat, megakadályozva, hogy táplálék vagy folyadék kerüljön a légcsőbe. Ha ez a védekező mechanizmus meghibásodik (pl. beszéd közbeni nyeléskor), a szervezet egy heves köhögési reflexszel próbálja a légutakba tévedt anyagot kilökni - ez a mindennapi életben is jól ismert "félrenyelés" jelensége.',
                  'A hangszalagok közötti rés (a hangrés) mérete a légzés és a hangképzés során eltérő: nyugodt légzéskor tágra nyílik, hogy a levegő akadálytalanul áramolhasson a tüdőbe és onnan kifelé, hangképzéskor viszont beszűkül, hogy a rajta átáramló levegő rezgésbe tudja hozni a hangszalagokat.',
                  'A gégét kívülről tapintható porcvázas szerkezete védi a mechanikai sérülésektől, ugyanakkor rugalmasan mozgatható is: nyeléskor és hangképzéskor egésze felfelé-lefelé, illetve előre-hátra is elmozdulhat, ez a mozgás jól megfigyelhető és tapintható a nyakon (pl. nyeléskor a pajzsporc jellegzetes "fel-le" mozgásaként).',
                ],
              },
              {
                heading: 'A hangképzés folyamata',
                paragraphs: [
                  'A hangképzés során a kilégzett levegő a hangszalagok közötti szűk résen áramlik át, és ezáltal rezgésbe hozza a hangszalagokat - ez az alaphang forrása. A hangszalagok feszülésének és a rajtuk átáramló levegő mennyiségének változtatásával alakítható a hang magassága és erőssége; az így keletkező alaphangot a garat, a szájüreg és az orrüreg üregei rezonátorterekként tovább alakítják.',
                  'A hangképzés - a beszéd és az ének alapjaként - az emberi kommunikáció egyik nélkülözhetetlen biológiai feltétele. Serdülőkorban a gége és a hangszalagok mérete (különösen fiúknál) jelentősen megnövekszik, ami a jól ismert hangváltozáshoz (mutációhoz), azaz a hang átmeneti tisztátalanná válásához, majd tartós mélyüléséhez vezet.',
                  'A hangszalagok hosszabb, folyamatos, kíméletlen igénybevétele (pl. túlzott kiabálás, helytelen éneklési technika) átmeneti berekedéshez, tartósan pedig a hangszalagok gyulladásához vagy akár apró csomók kialakulásához is vezethet, ami a hang minőségének tartós romlását okozhatja - ezért a hangképző szervek kímélete is a légzőrendszer egészségtanának fontos, gyakorlati vonatkozású része.',
                  'A hangképzés minősége nem csak a hangszalagok állapotától függ: egy megfázás vagy torokgyulladás okozta duzzanat, illetve a légutakban felgyülemlő váladék szintén megváltoztathatja a hang jellegzetes csengését (ezt nevezzük köznyelvben "berekedt" hangnak) - ez jól mutatja, hogy a hangképzés a teljes légzőrendszer pillanatnyi állapotát tükrözi, nem csak a gége működését.',
                  'A hangképzéshez a korábban (Légcsere fejezet) megismert légzési térfogat is szorosan kapcsolódik: minél nagyobb levegőmennyiséget tudunk egy kilégzés során a hangszalagokon átáramoltatni, annál hosszabb ideig, illetve annál erőteljesebben tudunk beszélni vagy énekelni - ez az egyik oka annak, hogy az éneklés és a fúvós hangszeres játék egyaránt tudatos légzéstechnikát igényel.',
                ],
              },
            ],
            keyTerms: ['gégefő', 'pajzsporc', 'gégefedő', 'hangszalag'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'legzes-szabalyozasa',
        title: 'A légzés szabályozása',
        order: 15,
        isFree: false,
        estimatedMinutes: 8,
        content: {
          kozep: {
            intro: 'A korábban (Hangképzés fejezet) megismert gége és hangszalagok után ebben a fejezetben azt nézzük meg, mi szabályozza a légzés mélységét és gyakoriságát - hasonlóan ahhoz, ahogy korábban (A táplálkozás szabályozása fejezet) az éhség- és szomjúságérzet szabályozását is megismertük.',
            sections: [
              {
                heading: 'A légzés szabályozásának alapelve',
                paragraphs: [
                  'A légzés mélységét és gyakoriságát elsősorban a vér szén-dioxid-koncentrációjának emelkedése szabályozza (nem elsősorban az oxigénszint csökkenése): ha a vérben megemelkedik a szén-dioxid mennyisége, az agytörzsben, a nyúltvelőben található légzőközpont ezt érzékelve idegi jeleket küld a rekeszizomhoz és a bordaközti izmokhoz, felgyorsítva és elmélyítve a légzést. Ez fokozott szén-dioxid-kiürüléshez, majd a koncentráció csökkenéséhez vezet - ez, ahogy azt a Homeosztázis fejezetben már megismertük, a negatív visszacsatolás elvén működő szabályozás egy újabb, konkrét példája.',
                  'Az, hogy elsősorban a szén-dioxid-koncentráció (és nem közvetlenül az oxigénhiány) váltja ki a légzés fokozódását, jól mutatja, hogy a szervezet a saját anyagcseréje által termelt "melléktermék" szintjét folyamatosan, érzékenyen figyeli, és ez alapján avatkozik be, még mielőtt az oxigénhiány ténylegesen veszélyessé válna.',
                  'A légzés részben akaratlagosan is befolyásolható: rövid ideig visszatarthatjuk a levegőt, vagy tudatosan szaporábban, mélyebben lélegezhetünk (ez utóbbira épül például a korábban, a Hangképzés fejezetben megismert beszéd és éneklés is, hiszen ezekhez a kilégzés hosszának és erősségének tudatos szabályozására van szükség). Ez a tudatos befolyásolás azonban csak korlátozott ideig tartható fenn, mert a vérben egyre emelkedő szén-dioxid-koncentráció végül felülírja az akaratlagos szándékot, és önműködően kikényszeríti a légvételt - ez is jól szemlélteti a negatív visszacsatolásos szabályozás erejét.',
                  'A rendszeres testmozgás hosszú távon a légzőközpont és a légzőizomzat összehangolt működését is fejleszti: az edzett szervezet ugyanakkora terhelés mellett hatékonyabban, kevesebb energiával tudja fenntartani a megfelelő vér-szén-dioxid-szintet, mint az edzetlen szervezet - ez az egyik oka annak, hogy a korábban (Légcsere fejezet) megismert vitálkapacitás is nagyobb a rendszeresen sportolóknál.',
                  'A légzésszabályozás tehát egy folyamatosan, öntudatlanul működő rendszer, amely csak szükség esetén enged teret a tudatos befolyásolásnak - ez biztosítja, hogy alvás közben, vagy amikor a figyelmünk máshova irányul, a légzés akkor is zavartalanul, a szervezet igényeihez igazodva folytatódjon.',
                  'A légzőközpont érzékenysége nem állandó: kisgyermekkorban és idős korban, illetve bizonyos betegségek (pl. súlyos tüdőbetegségek) esetén a légzőközpont a normálistól eltérően reagálhat a szén-dioxid-koncentráció változására, ami a légzésszabályozás zavarához, szélsőséges esetben légzéskimaradáshoz is vezethet - ez az egyik oka annak, hogy csecsemőknél és időseknél a légzés folyamatos megfigyelése különösen fontos.',
                  'A légzőközpont tehát folyamatosan "monitorozza" a szervezet anyagcseréjének állapotát, és ennek alapján, önműködően, tized másodperces pontossággal hangolja össze a rekeszizom és a bordaközti izmok munkáját - ez a finomhangolt, automatikus együttműködés teszi lehetővé, hogy a légzés a nap 24 órájában, tudatos odafigyelés nélkül is folyamatosan a szervezet aktuális igényeihez igazodjon.',
                ],
              },
            ],
            keyTerms: ['negatív visszacsatolás', 'légzőközpont', 'szén-dioxid'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      {
        id: 'legzorendszer-egeszsegtana',
        title: 'A légzés és a légzőrendszer egészségtana',
        order: 16,
        isFree: false,
        estimatedMinutes: 12,
        content: {
          kozep: {
            intro: 'A korábban (A légzés szabályozása fejezet) megismert szabályozási mechanizmus után, ebben a záró fejezetben - hasonlóan ahhoz, ahogy a táplálkozási rendszernél is külön fejezetet szenteltünk az egészségtannak (Táplálkozás egészségtana fejezet) - a légzőrendszer egészségtanát tekintjük át.',
            sections: [
              {
                heading: 'Az orron át történő légzés jelentősége',
                paragraphs: [
                  'Az orron át történő belégzés előnyösebb a szájon át történőnél, mert az orrüregben a levegő megszűrődik (a szennyeződések, kórokozók egy része kiszűrődik), felmelegszik és páratartalmat nyer, mielőtt eléri a mélyebb légutakat - ez védi a tüdőt a kiszáradástól és a károsító hatásoktól. A szájon át történő légzés (pl. eldugult orr esetén) ezt a védelmet megkerüli, ezért ilyenkor a légutak nagyobb eséllyel száradnak ki és fertőződnek.',
                ],
              },
              {
                heading: 'A légzőrendszert károsító tényezők és gyakori betegségek',
                paragraphs: [
                  'A légzőrendszert leggyakrabban károsító tényezők közé tartozik a dohányzás, a légszennyezettség és az allergének; ezek hozzájárulnak a légzőrendszer gyakori megbetegedéseihez, amelyek lehetnek fertőzéses eredetűek (pl. tüdőgyulladás, hörghurut) vagy daganatos jellegűek (pl. tüdőrák), illetve idetartozik az asztma is. A tüdőgyulladás során a léghólyagocskák meggyulladnak és folyadékkal telítődnek, ami jelentősen lecsökkenti a gázcserére alkalmas felületet, ezért a betegség jellegzetes tünete a nehézlégzés. Az asztma a hörgők átmeneti, allergiás vagy egyéb ingerre bekövetkező összeszűkülése, amely szintén nehezített, jellegzetesen sípoló légzést okoz.',
                  'A torokgyulladás gyakran jár együtt középfülgyulladással, mert a garatot és a középfület összekötő fülkürtön (Eustach-kürtön) keresztül a fertőzés könnyen átterjedhet az egyik szervről a másikra - gyermekeknél ez különösen gyakori, mivel náluk a fülkürt rövidebb és vízszintesebb lefutású, ami megkönnyíti a kórokozók átjutását.',
                ],
              },
              {
                heading: 'A dohányzás kockázatai',
                paragraphs: [
                  'A dohányzás különösen súlyos kockázatot jelent: a cigarettafüst károsítja a légutak belső falát borító csillós hámsejteket, amelyek egészséges esetben a beszippantott szennyeződéseket és nyákot folyamatosan kifelé mozgatnák a légutakból - ezek károsodása miatt a szennyeződések és kórokozók tovább maradnak a légutakban, ami jelentősen megnöveli a légzőrendszeri daganatos és fertőzéses megbetegedések, valamint a szív-érrendszeri betegségek kockázatát is.',
                  'Éppen ezért fontos a dohányzás elkerülése, illetve a leszokás mellett érvelni: a dohányzás abbahagyása után a légutak öntisztuló képessége (a csillós hámsejtek működése) idővel részlegesen helyreállhat, és a súlyos megbetegedések kockázata is fokozatosan csökken - minél korábban történik a leszokás, annál nagyobb ez az egészségnyereség.',
                  'A dohányzás nemcsak a dohányzó személy légzőrendszerét károsítja: a passzív dohányzás, azaz mások cigarettafüstjének belélegzése ugyanazokat a károsító hatásokat idézheti elő, ráadásul a gyermekek légzőrendszere - mivel még fejlődésben van - különösen érzékeny erre a hatásra, ami tovább erősíti a dohányzás elleni érvelés jogosságát.',
                  'Összességében a légzőrendszer egészségének megőrzése - hasonlóan ahhoz, ahogy azt korábban (Táplálkozás egészségtana fejezet) a tápcsatornánál is láttuk - nagyrészt tudatos, mindennapi döntéseken (dohányzás elkerülése, tiszta levegőjű környezet, megfelelő testmozgás) múlik, nem csupán a betegségek utólagos kezelésén.',
                ],
              },
            ],
            keyTerms: ['asztma', 'dohányzás', 'középfülgyulladás', 'fülkürt'],
          },
          emeltExtra: { comingSoon: true },
        },
      },
      { id: 'anyagszallitas', title: 'Az anyagszállítás (vér, keringés)', order: 17, isFree: false, estimatedMinutes: 22,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'kivalasztas', title: 'A kiválasztás', order: 18, isFree: false, estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'szabalyozas', title: 'A szabályozás (idegrendszer, hormonrendszer, immunrendszer)', order: 19, isFree: false, estimatedMinutes: 30,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } } },
      { id: 'szaporodas-egyedfejlodes', title: 'Szaporodás és egyedfejlődés', order: 20, isFree: false, estimatedMinutes: 18,
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
    extraDiagramId: extra.diagramId,
  };
};
