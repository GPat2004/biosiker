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
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'zarvatermok',
        title: 'Zárvatermők',
        order: 9,
        isFree: false,
        estimatedMinutes: 16,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'kettos-megtermekenyites',
        title: 'Kettős megtermékenyítés',
        order: 10,
        isFree: false,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'szivacsok',
        title: 'Szivacsok',
        order: 11,
        isFree: false,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'csalanozok',
        title: 'Csalánozók',
        order: 12,
        isFree: false,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'laposfergek',
        title: 'Laposférgek',
        order: 13,
        isFree: false,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'gyurusfergek',
        title: 'Gyűrűsférgek',
        order: 14,
        isFree: false,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'rovarok',
        title: 'Rovarok',
        order: 15,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'csigak',
        title: 'Csigák',
        order: 16,
        isFree: false,
        estimatedMinutes: 12,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'csontos-halak',
        title: 'Csontos halak',
        order: 17,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'ketelt-uek',
        title: 'Kétéltűek',
        order: 18,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'hullok',
        title: 'Hüllők',
        order: 19,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'madarak',
        title: 'Madarak',
        order: 20,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'emlosok',
        title: 'Emlősök',
        order: 21,
        isFree: false,
        estimatedMinutes: 14,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'novenyi-szovetek-szervek',
        title: 'A növények szövetei, szervei',
        order: 22,
        isFree: false,
        estimatedMinutes: 26,
        content: { kozep: { comingSoon: true }, emeltExtra: { comingSoon: true } },
      },
      {
        id: 'allati-szovetek-szaporodas-viselkedes',
        title: 'Az állatok szövetei, szaporodása, viselkedése',
        order: 23,
        isFree: false,
        estimatedMinutes: 28,
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
    extraDiagramId: extra.diagramId,
  };
};
