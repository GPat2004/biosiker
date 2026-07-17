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
        estimatedMinutes: 22,
        diagramId: 'elemek-megoszlasa',
        content: {
          kozep: {
            intro: 'Az élő szervezetek felépítésében viszonylag kevés kémiai elem vesz részt, ezek aránya és szerepe azonban rendkívül fontos - fontossági sorrendben végigvesszük, melyik elem miért nélkülözhetetlen.',
            sections: [
              {
                heading: 'A négy legfontosabb elem: szén, hidrogén, oxigén, nitrogén',
                paragraphs: [
                  'Ez a négy elem adja a szervezet tömegének döntő többségét, és ezek építik fel az összes szerves molekulát (szénhidrátokat, lipideket, fehérjéket, nukleinsavakat).',
                  'A szén (C) a szerves kémia alapja: egy szénatom négy kovalens kötést tud kialakítani, így hosszú láncokat és gyűrűket képezhet - emiatt válhat a szén az összes szerves molekula vázává. Gyakorlatilag nincs olyan élő szervezetben előforduló nagy molekula, amelynek ne a szén adná a "gerincét".',
                  'A hidrogén (H) a víz és szinte minden szerves molekula alkotórésze. Kiemelt szerepe van az energiaátadási folyamatokban is: a sejtlégzés során a hidrogén "szállítómolekulákra" (pl. NAD⁺) kerül, majd a végoxidáció során oxigénnel egyesülve víz és ATP keletkezik belőle.',
                  'Az oxigén (O) szintén a víz alkotóeleme, emellett a biológiai oxidáció (a sejtlégzés) végső elektron- és hidrogénfelvevője - enélkül a sejtek nem tudnák hatékonyan kinyerni az energiát a tápanyagokból. Az oxigén ezenkívül számos szerves molekula (cukrok, zsírsavak, aminosavak) építőeleme is.',
                  'A nitrogén (N) nélkülözhetetlen alkotóeleme a fehérjéknek (az aminosavak amino-csoportjában) és a nukleinsavaknak (a bázisokban). Nitrogén nélkül nem létezne sem DNS, sem fehérje - vagyis nem létezne örökítőanyag és enzim sem.',
                ],
              },
              {
                heading: 'További fontos makroelemek',
                paragraphs: [
                  'A foszfor (P) a nukleinsavak (DNS, RNS), az ATP és a sejtmembránt felépítő foszfolipidek nélkülözhetetlen alkotórésze, emellett - kalciummal együtt - a csontok és a fogak fő ásványi alkotóeleme.',
                  'A kén (S) egyes aminosavak (pl. a cisztein) alkotórésze; a kéntartalmú aminosavak közötti kötések (diszulfidhidak) fontos szerepet játszanak a fehérjék térszerkezetének kialakításában és stabilizálásában.',
                  'A kalcium (Ca) a csontok és a fogak fő ásványi alkotóeleme, emellett nélkülözhetetlen az izomösszehúzódásban, a véralvadási folyamatban és az idegi ingerületátvitelben is.',
                  'A kálium (K) a sejten belüli tér fő pozitív töltésű ionja (kationja); kulcsszerepe van az idegi ingerületátvitelben és az izomműködésben, a nátriummal együttműködve.',
                  'A nátrium (Na) a sejten kívüli tér fő kationja; a káliummal ellentétes irányú mozgása hozza létre azt az elektromos potenciálkülönbséget, amely az idegsejtek ingerületvezetésének alapja. Emellett meghatározó szerepe van a szervezet vízháztartásának szabályozásában is.',
                  'A klór (Cl) a sejten kívüli tér fő negatív töltésű ionja (anionja); a gyomorban termelődő sósav (HCl) alkotóeleme, amely az emésztésben és a kórokozók elpusztításában is szerepet játszik.',
                  'A magnézium (Mg) számos enzim működéséhez szükséges kísérő anyag (kofaktor), és a növényekben a klorofill molekula központi atomja is magnézium.',
                ],
              },
              {
                heading: 'Mikroelemek (nyomelemek)',
                paragraphs: [
                  'A mikroelemek jóval kisebb mennyiségben fordulnak elő a szervezetben, de hiányuk éppúgy súlyos zavarokhoz vezethet, mint a makroelemeké.',
                  'A vas (Fe) a hemoglobin (a vörösvértestek oxigénszállító fehérjéje) és a mioglobin (az izmok oxigéntároló fehérjéje) nélkülözhetetlen alkotóeleme, emellett a sejtlégzésben részt vevő egyes fehérjéknek is fontos alkotórésze.',
                  'A jód (I) a pajzsmirigyhormonok (pl. a tiroxin) alkotóeleme, amelyek az egész szervezet anyagcseréjét szabályozzák - emiatt vezettek be sok országban kötelező sójódozást a jódhiány (és az általa okozott golyva) megelőzésére.',
                  'A cink (Zn) számos enzim működéséhez szükséges, és fontos szerepet játszik az immunrendszer megfelelő működésében is.',
                  'A réz (Cu) szintén több enzim (pl. a sejtlégzésben szerepet játszó enzimek) kofaktora.',
                  'A fluor (F) beépülve a fogzománcba jelentősen növeli annak ellenállóképességét a fogszuvasodással szemben - ez áll a fogkrémek fluorozásának hátterében.',
                ],
              },
            ],
            keyTerms: ['szén', 'hidrogén', 'oxigén', 'nitrogén', 'foszfor', 'kén', 'kalcium', 'kálium', 'nátrium', 'klór', 'magnézium', 'vas', 'jód', 'cink', 'réz', 'fluor'],
          },
          emeltExtra: {
            intro: 'Emelt szinten további, ritkábban előforduló, de fontos elemeket és ionokat is ismerni kell, valamint mélyebben meg kell érteni néhány makroelem működési mechanizmusát.',
            sections: [
              {
                heading: 'További nyomelemek',
                paragraphs: [
                  'A szilícium (Si) egyes élőlényeknél (pl. kovamoszatoknál) a sejtfal, illetve a váz felépítésében játszik szerepet - ezek a szervezetek a vízből felvett szilícium-dioxidból építik fel jellegzetes, mintázott vázukat.',
                ],
              },
              {
                heading: 'További fontos ionok',
                paragraphs: [
                  'A nitrit (NO₂⁻) és a nitrát (NO₃⁻) a nitrogénforgalom fontos állomásai - a talajban élő baktériumok alakítják át egymásba ezeket a formákat, amelyeket a növények felvehetnek.',
                  'A foszfát (PO₄³⁻) ion nemcsak a csontok és fogak felépítésében játszik szerepet, hanem a nukleinsavak (DNS, RNS) és az ATP gerincét is ez alkotja - minden foszfátcsoport egy-egy "kapocs" a nukleotidláncban.',
                ],
              },
              {
                heading: 'Mélyebb összefüggések',
                paragraphs: [
                  'A vas nemcsak a hemoglobinban, hanem a sejtlégzés végoxidációjában szereplő citokróm fehérjékben is jelen van, ahol az elektronok szállításában vesz részt - ez az oka annak, hogy a vashiány nemcsak vérszegénységet, hanem energiahiányos állapotot is okozhat.',
                  'A kalcium szerepe a véralvadásban és az izomösszehúzódásban azon alapul, hogy koncentrációjának hirtelen megváltozása "jelként" működik, amely beindítja az adott folyamat fehérjéinek működését.',
                ],
              },
            ],
            keyTerms: ['szilícium', 'nitrát', 'citokróm'],
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
        estimatedMinutes: 20,
        content: {
          kozep: {
            intro: 'A lipidek (zsírszerű anyagok) sokféle biológiai szerepet töltenek be, oldódási tulajdonságuk és szerkezetük szorosan összefügg a funkciójukkal.',
            sections: [
              {
                heading: 'Oldódási tulajdonságok',
                paragraphs: [
                  'A lipidek vízben nem, szerves oldószerekben (pl. alkoholban, benzinben) viszont jól oldódnak - ez a hétköznapokban is megfigyelhető, például amikor az olaj nem elegyedik a vízzel, hanem külön rétegben úszik rajta.',
                  'A zsírban oldódó vitaminok (A, D, E, K) könnyen felhalmozódhatnak a zsírszövetben, ezért túladagolásuk veszélyesebb, mint a vízoldékony vitaminoké, amelyek fölöslege könnyebben kiürül a vizelettel.',
                ],
              },
              {
                heading: 'A zsírok és a foszfatidok szerkezete',
                paragraphs: [
                  'A zsírok glicerinből és zsírsavakból épülnek fel: egy glicerinmolekulához három zsírsav kapcsolódik.',
                  'A foszfatidok hasonló felépítésűek, de bennük a glicerinhez csak két zsírsav és egy foszforsav-egység kapcsolódik. Ez a szerkezeti különbség adja a foszfatidok kettős (poláris és apoláris) tulajdonságát.',
                ],
              },
              {
                heading: 'Biológiai szerep',
                paragraphs: [
                  'A zsírok és olajok fő biológiai szerepe az energiaraktározás, a hőszigetelés és a mechanikai védelem - ez összefügg azzal, hogy a zsírszövet jellemzően a bőr alatt és a belső szervek körül helyezkedik el.',
                  'A foszfatidok poláris fejcsoportja a vizes közeg felé, apoláris "farka" pedig egymás felé fordul - ez a tulajdonság teszi alkalmassá a foszfatidokat a biológiai membránok (sejthártyák) kettősréteges felépítésére.',
                  'Az epesav polaritása lehetővé teszi, hogy az epesavsók stabilizálják a zsírok vizes közegben történő apró cseppekre bontását (emulgeálását), ami elősegíti a zsírok hatékony emésztését a bélben.',
                ],
              },
            ],
            keyTerms: ['lipid', 'zsír', 'foszfatid', 'emulgeálás', 'zsírszövet'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szteránváz és a karotinoidok szerkezete, valamint fotokémiai szerepük is a követelmények közé tartozik.',
            sections: [
              {
                heading: 'Szteránváz',
                paragraphs: [
                  'A szteránváz négy összekapcsolódó gyűrűből álló, jellegzetes molekulaszerkezet, amely számos fontos biológiai molekula (pl. a koleszterin és az abból származó szteroid hormonok) alapváza.',
                ],
              },
              {
                heading: 'Karotinoidok és fotokémiai szerepük',
                paragraphs: [
                  'A karotinoidok molekulájában található konjugált kettőskötés-rendszer felelős a fény elnyeléséért.',
                  'Ez a tulajdonság áll a növényi karotinoidok (karotin, xantofill) fotoszintézisben betöltött szerepének hátterében: a klorofill mellett kiegészítő fényelnyelő pigmentként működnek, és védik a növényt a túl erős fénytől.',
                  'Az emberi szervezetben az A-vitamin (amely karotinoidból, például béta-karotinból alakul át) a rodopszin nevű fényérzékeny fehérje alkotórésze, amely a szem pálcikáiban a látás folyamatában vesz részt.',
                ],
              },
            ],
            keyTerms: ['szteránváz', 'koleszterin', 'konjugált kettőskötés', 'rodopszin'],
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
        estimatedMinutes: 20,
        diagramId: 'nukleotid-felepitese',
        content: {
          kozep: {
            intro: 'A nukleinsavak hordozzák és adják tovább az élőlények genetikai információját, a nukleotidok pedig - önállóan is - fontos szerepet töltenek be az anyagcserében.',
            sections: [
              {
                heading: 'A nukleotidok felépítése',
                paragraphs: [
                  'A nukleotidok és a nukleinsavak közös, általános szerkezeti váza cukor-bázis-foszfát egységekből épül fel: egy cukormolekulához egy nitrogéntartalmú bázis és egy foszfátcsoport kapcsolódik.',
                  'Sok nukleotid egymáshoz kapcsolódva alkotja a nukleinsavláncot - a lánc "gerincét" a cukor- és foszfátegységek váltakozása adja, a bázisok pedig erről a gerincről állnak ki.',
                ],
              },
              {
                heading: 'DNS és RNS - a két nukleinsav',
                paragraphs: [
                  'A DNS (dezoxiribonukleinsav) és az RNS (ribonukleinsav) abban különbözik, hogy melyik cukrot tartalmazzák: a DNS-ben dezoxiribóz, az RNS-ben ribóz található.',
                  'A DNS szerkezetében rejlik az információhordozó, önmegkettőződő (örökítő) szerep - ez teszi lehetővé, hogy a genetikai információ sejtosztódáskor pontosan átadódjon az utódsejteknek. Az RNS ezzel szemben jellemzően a genetikai információ "felhasználásában" (pl. a fehérjeszintézisben) vesz részt.',
                ],
              },
              {
                heading: 'Fontos önálló nukleotidok',
                paragraphs: [
                  'Nem minden nukleotid épül be nukleinsavba: az ATP önálló nukleotidként a sejt "energiapénzeként" működik, a legtöbb energiaigényes folyamathoz ez szolgáltatja az energiát.',
                  'A NAD⁺ és a NADP⁺ szintén önálló nukleotidok, amelyek a sejtlégzésben és a fotoszintézisben hidrogén- (és ezzel elektron-) szállítómolekulaként vesznek részt.',
                ],
              },
            ],
            keyTerms: ['nukleotid', 'DNS', 'RNS', 'ATP'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a DNS örökítő szerepét bizonyító klasszikus kísérleteket és a bázisok mennyiségi összefüggését is ismerni kell.',
            diagramId: 'dns-bazisparositas',
            sections: [
              {
                heading: 'A DNS örökítő szerepét bizonyító kísérletek',
                paragraphs: [
                  'Griffith és Avery kísérletei során kimutatták, hogy egy baktériumtörzs genetikai tulajdonságai átvihetők egy másik törzsbe (transzformáció), és Avery igazolta, hogy az átvitt anyag maga a DNS.',
                  'Hershey és Chase kísérlete radioaktívan jelölt bakteriofágok segítségével bizonyította, hogy a vírusfertőzés során a fertőző örökítőanyag a DNS jut be a gazdasejtbe, nem a fehérjeburok.',
                ],
              },
              {
                heading: 'A bázisok típusai és a Chargaff-szabály',
                paragraphs: [
                  'A nitrogéntartalmú bázisok két nagy csoportba sorolhatók: a purinok (adenin, guanin) kétgyűrűs, a pirimidinek (citozin, timin, illetve az RNS-ben a timint helyettesítő uracil) egygyűrűs vegyületek.',
                  'Chargaff megfigyelése szerint a DNS-ben az adenin mennyisége mindig megegyezik a timinével, a guaniné pedig a citozinéval - ez a szabályszerűség arra utal, hogy ezek a bázisok mindig párban fordulnak elő, méghozzá úgy, hogy egy purin mindig egy pirimidinnel párosodik.',
                  'Az adenin és a timin között két, a guanin és a citozin között három hidrogénkötés alakul ki - ez a különbség magyarázza, hogy a guanin-citozin gazdag DNS-szakaszok stabilabbak (nehezebben "nyílnak fel").',
                ],
              },
            ],
            keyTerms: ['purin', 'pirimidin', 'Chargaff-szabály'],
          },
        },
      },
      {
        id: 'felepites-lebontas-kapcsolata',
        title: 'Felépítés és lebontás kapcsolata',
        order: 7,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'Az élő szervezetek anyagcseréje felépítő (asszimilációs) és lebontó (disszimilációs) folyamatokból áll, amelyek szorosan összekapcsolódnak - a kettő együtt tartja fenn az élő rendszerek működését.',
            sections: [
              {
                heading: 'Energia- és szénforrás szerinti csoportosítás',
                paragraphs: [
                  'Energiaforrás szerint fototróf (fényenergiát hasznosító) és kemotróf (kémiai energiát hasznosító) szervezeteket különböztetünk meg; szénforrás szerint autotróf (szervetlen szénforrást használó) és heterotróf (szerves szénforrásra szoruló) élőlényeket.',
                  'Alapvető fizikai törvényszerűség, hogy minden anyagátépítés energiaveszteséggel jár - ezért nincs 100%-osan hatékony biológiai folyamat, a felszabaduló energia egy része mindig hő formájában távozik.',
                ],
              },
              {
                heading: 'Kondenzáció és hidrolízis',
                paragraphs: [
                  'A makromolekulák alapegységei kondenzációval (vízkilépéssel) kapcsolódnak össze - ilyen folyamat például, amikor két glükózból maltóz épül fel, vagy amikor aminosavakból peptidkötéssel fehérjelánc jön létre.',
                  'A hidrolízis (vízfelvétellel járó bontás) a kondenzáció fordítottja - ez zajlik például az emésztés során, amikor a nagy tápanyagmolekulák felszívható, kisebb egységekre bomlanak.',
                ],
              },
              {
                heading: 'Endocitózis és exocitózis',
                paragraphs: [
                  'Az endocitózis és az exocitózis folyamata teszi lehetővé nagyobb anyagmennyiségek sejtbe juttatását, illetve onnan történő kijuttatását - mindkettő a sejtmembrán hólyagocska-képződésén (vezikulázásán) alapul, és fontos szerepük van a felépítő és lebontó anyagcsere-folyamatok sejten belüli összehangolásában is.',
                ],
              },
            ],
            keyTerms: ['fototróf', 'kemotróf', 'autotróf', 'heterotróf', 'hidrolízis', 'kondenzáció', 'exocitózis'],
          },
          emeltExtra: {
            intro: 'Emelt szinten hasznos a fenti csoportosítási szempontokat kombinálva alkalmazni: egy élőlény egyszerre jellemezhető energiaforrás és szénforrás szerint is.',
            sections: [
              {
                heading: 'A négyféle anyagcsere-típus',
                paragraphs: [
                  'A fotoautotróf szervezetek (pl. a növények, algák, cianobaktériumok) fényenergiát használnak, és szervetlen szénforrásból (CO₂-ból) építik fel szerves anyagaikat.',
                  'A kemoautotróf szervezetek (pl. egyes talajbaktériumok, mint a nitrifikáló baktériumok) kémiai energiát hasznosítanak, de szintén szervetlen szénforrásból építkeznek.',
                  'A kemoheterotróf szervezetek (ide tartozik a legtöbb állat, gomba és baktérium, köztük az ember is) kémiai energiát nyernek, és szerves szénforrásra szorulnak.',
                  'A fotoheterotróf szervezetek (néhány különleges baktériumcsoport) fényenergiát hasznosítanak, de a szénforrásuk szerves eredetű - ez a legritkább kombináció a természetben.',
                ],
              },
            ],
            keyTerms: ['fotoautotróf', 'kemoautotróf', 'kemoheterotróf', 'fotoheterotróf'],
          },
        },
      },
      {
        id: 'fotoszintezis',
        title: 'Felépítő folyamatok: a fotoszintézis',
        order: 8,
        isFree: false,
        estimatedMinutes: 20,
        diagramId: 'fotoszintezis-folyamatabra',
        content: {
          kozep: {
            intro: 'A fotoszintézis a legfontosabb felépítő (asszimilációs) folyamat, amely a földi élet energiaellátásának alapja - ez teszi lehetővé, hogy a Napból érkező fényenergia a táplálékláncokon keresztül eljusson szinte minden élőlényhez.',
            sections: [
              {
                heading: 'Hely és jelentőség',
                paragraphs: [
                  'A fotoszintézis a növények, algák és egyes baktériumok színtestjeiben (kloroplasztiszaiban) zajlik.',
                  'A folyamat kettős jelentőségű: egyrészt ez a bioszféra elsődleges energiaforrása (szinte minden táplálékhálózat ezen a felépítő folyamaton alapul), másrészt ez tartja fenn a légkör oxigénkészletét is.',
                ],
              },
              {
                heading: 'Fényszakasz és sötétszakasz',
                paragraphs: [
                  'A fényszakaszban a víz fényenergia hatására bomlik, molekuláris oxigén keletkezik, a hidrogén szállítómolekulára kerül, és ATP képződik.',
                  'A sötétszakaszban a szén-dioxid redukálódik a hidrogén és az ATP segítségével, aminek eredményeként glükóz, majd más vegyületek keletkeznek. Ez a szakasz - a nevével ellentétben - nem feltétlenül sötétben zajlik, csak nincs közvetlen fényigénye, mert a fényszakaszból kapja a szükséges ATP-t és hidrogént.',
                  'A fotoszintézis egyszerűsített egyenlete: szén-dioxid és víz fényenergia jelenlétében glükózzá és oxigénné alakul (lásd az ábrát).',
                ],
              },
            ],
            keyTerms: ['fotoszintézis', 'fényszakasz', 'sötétszakasz'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a fotoszintetikus színanyagok típusait és molekulavázát, valamint az ATP-termelés hátterét is ismerni kell.',
            sections: [
              {
                heading: 'Fotoszintetikus színanyagok',
                paragraphs: [
                  'A fotoszintetikus színanyagok két fő típusa a klorofillok és a karotinoidok - mindkettő jellegzetes molekulavázzal rendelkezik, amelyet ábráról fel kell tudni ismerni, és mindkettő szerepet játszik a fényenergia elnyelésében.',
                  'A klorofill elsősorban a kék és a vörös fényt nyeli el, a zöld fényt visszaveri - ez adja a növények zöld színét.',
                ],
              },
              {
                heading: 'Az ATP keletkezésének háttere',
                paragraphs: [
                  'A fényszakaszban keletkező ATP hátterében az áll, hogy a víz bomlásakor felszabaduló elektronok egy elektronszállító láncon haladnak végig, aminek eredményeként a kloroplasztisz membránján át egy hidrogénion-grádiens (koncentráció-különbség) alakul ki - ennek a grádiensnek a "kiegyenlítődése" hajtja meg az ATP-t termelő enzimet.',
                ],
              },
            ],
            keyTerms: ['klorofill'],
          },
        },
      },
      {
        id: 'lebonto-folyamatok',
        title: 'Lebontó folyamatok',
        order: 9,
        isFree: false,
        estimatedMinutes: 22,
        diagramId: 'sejtlegzes-folyamatabra',
        content: {
          kozep: {
            intro: 'A lebontó (disszimilációs) folyamatok során a szerves molekulák lebontásával energia szabadul fel, amelyet a sejt ATP formájában tárol - ez a sejtlégzés lényege.',
            sections: [
              {
                heading: 'Glikolízis',
                paragraphs: [
                  'A glikolízis a sejt citoplazmájában zajló, oxigént nem igénylő lebontási folyamat, amely során egy glükózmolekulából két piruvátmolekula keletkezik, miközben nettó 2 ATP szabadul fel.',
                ],
              },
              {
                heading: 'Biológiai oxidáció és erjedés',
                paragraphs: [
                  'A biológiai oxidáció és az erjedés összehasonlítható biológiai funkciójuk, sejten belüli helyszínük és energiamérlegük alapján - a biológiai oxidáció oxigént igényel, a mitokondriumban zajlik, és lényegesen több ATP-t termel (glükózonként összesen mintegy 30 vagy annál is több ATP-t), mint az erjedés, amely oxigén hiányában, a citoplazmában zajlik, és csak a glikolízis 2 ATP-jét "hasznosítja".',
                  'Erjedés akkor zajlik, ha a sejt oxigénhez nem jut hozzá - például erős izommunka közben tejsavas erjedés indul be az izomsejtekben (ilyenkor keletkezik a tejsav, ami az izomfáradtság érzetét is okozhatja), míg az élesztőgombák alkoholos erjedéssel bontják a cukrot etil-alkohollá és szén-dioxiddá.',
                ],
              },
              {
                heading: 'Végoxidáció',
                paragraphs: [
                  'A végső oxidáció során a szállítómolekulához kötött hidrogén molekuláris oxigénnel egyesül, aminek eredményeként víz és ATP keletkezik - ez a lépés a mitokondriumban zajlik, és itt keletkezik a glükóz lebontása során felszabaduló energia nagy része.',
                ],
              },
            ],
            keyTerms: ['glikolízis', 'biológiai oxidáció', 'erjedés', 'tejsavas erjedés', 'alkoholos erjedés', 'végoxidáció'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a citrátkör (citromsavciklus) lépéseit és az aminosav-lebontás sorsát is ismerni kell.',
            sections: [
              {
                heading: 'A citrátkör',
                paragraphs: [
                  'A citrátkör a mitokondrium mátrixában zajlik: a szerves molekulák szénvázából szén-dioxid keletkezik, a felszabaduló hidrogén szállítómolekulára kerül.',
                  'A folyamat ciklikus jellegű: minden "kör" végén regenerálódik az a kiindulási molekula, amelyhez egy újabb belépő anyag kapcsolódhat - innen a "citromsavciklus" elnevezés.',
                ],
              },
              {
                heading: 'Az aminosavak lebontásának sorsa',
                paragraphs: [
                  'Az aminosavak lebomlásakor és átalakításakor a nitrogén ammónia, illetve karbamid formájában kiválasztódik, vagy más aminosavba épül be - az aminosav szénváza pedig bekapcsolódhat a citromsavciklusba, így az energiatermelésbe is.',
                ],
              },
            ],
            keyTerms: ['citrátkör'],
          },
        },
      },
      {
        id: 'elhatarolas',
        title: 'Elhatárolás',
        order: 10,
        isFree: false,
        estimatedMinutes: 18,
        diagramId: 'passziv-aktiv-szallitas',
        comparisonTable: {
          headers: ['Szempont', 'Passzív szállítás', 'Aktív szállítás'],
          rows: [
            ['Energiaigény', 'nincs', 'van (ATP)'],
            ['Irány', 'nagyobb → kisebb koncentráció felé', 'kisebb → nagyobb koncentráció felé'],
            ['Példa', 'diffúzió, ozmózis', 'Na-K pumpa'],
          ],
        },
        commonMistakes: [
          'Sokan azt hiszik, hogy minden sejtmembránon átjutó anyag passzívan mozog - valójában a koncentráció-különbséggel szemben történő szállítás mindig energiát (ATP-t) igényel.',
          'Az endocitózist és az exocitózist gyakran összekeverik: az endocitózis a sejtbe való, az exocitózis a sejtből kifelé irányuló anyagfelvétel/-leadás.',
        ],
        mnemonic: 'PASSZÍV = "Pihen" (nem fogyaszt energiát), AKTÍV = "Aktívan dolgozik" (ATP-t fogyaszt, ezért tud a koncentráció-különbséggel szemben szállítani.',
        summary: 'A sejtmembrán szabályozza az anyagforgalmat: a passzív szállítás energia nélkül, a koncentráció-grádiens mentén zajlik, az aktív szállítás ezzel szemben ATP-t igényel. Nagyobb anyagmennyiségek endo-, illetve exocitózissal jutnak be, illetve ki a sejtből.',
        content: {
          kozep: {
            intro: 'A sejtet határoló biológiai hártyák (membránok) nélkülözhetetlenek a sejt életének fenntartásához - ezek szabályozzák, mi juthat be és ki a sejtből.',
            sections: [
              {
                heading: 'A membránok szerepe és a szállítás típusai',
                paragraphs: [
                  'A biológiai hártyák (membránok) szerepe sokrétű: anyagforgalom, határolás, összekötés, jelölés, jelfogás.',
                  'A passzív szállítás energiabefektetés nélkül, koncentráció-különbség mentén zajlik; az aktív szállítás energiát igényel, mivel a koncentráció-különbséggel szemben történik.',
                  'Endocitózissal nagyobb anyagmennyiségek juttathatók a sejtbe, exocitózissal a sejtből - mindkét folyamat a sejtmembrán hólyagocska-képződésén (vezikulázásán) alapul.',
                ],
              },
            ],
            keyTerms: ['membrán', 'passzív szállítás', 'aktív szállítás', 'endocitózis'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a szállítás pontos végrehajtóit és hajtóerőit is ismerni kell.',
            sections: [
              {
                heading: 'A szállítás végrehajtói',
                paragraphs: [
                  'A passzív és az aktív szállítást a kettős lipidréteg, a membráncsatornák, a szállítók és a pumpák valósítják meg, különböző hajtóerők (pl. koncentráció-különbség, elektromos potenciál, ATP-energia) segítségével.',
                  'A membráncsatornák specifikusak: egy adott csatorna jellemzően csak egyfajta iont vagy molekulát enged át, ami lehetővé teszi a sejt számára az anyagforgalom finom szabályozását.',
                ],
              },
            ],
            keyTerms: ['membráncsatorna'],
          },
        },
      },
      {
        id: 'mozgas-a-sejtben',
        title: 'Mozgás',
        order: 11,
        isFree: false,
        estimatedMinutes: 10,
        commonMistakes: [
          'Diákok gyakran összekeverik, melyik emberi sejttípus milyen mozgásformát használ - érdemes konkrét példákhoz kötni: fehérvérsejt = állábas, hímivarsejt = ostoros, légúti hámsejt = csillós.',
        ],
        summary: 'A sejtek egy része önálló mozgásra képes: állábas mozgás (pl. fehérvérsejtek), ostoros mozgás (pl. hímivarsejt) és csillós mozgás (pl. légúti hámsejtek) - mindegyik specializált sejtfelszíni struktúrán alapul.',
        content: {
          kozep: {
            intro: 'A sejtek egy része önálló mozgásra is képes, amit specializált sejtfelszíni struktúrák tesznek lehetővé.',
            sections: [
              {
                heading: 'Mozgásformák az emberi szervezetben',
                paragraphs: [
                  'Az emberi szervezetben is találunk példát az állábas mozgásra (pl. a fehérvérsejtek, amelyek ezzel a mozgásformával jutnak el a fertőzés helyére), az ostoros mozgásra (pl. a hímivarsejt, amely az ostor csapkodásával halad előre) és a csillós mozgásra (pl. a légutak hámsejtjei, amelyek a csillók összehangolt mozgásával mozgatják a nyálkát és az abban megrekedt szennyeződéseket kifelé).',
                ],
              },
            ],
            keyTerms: ['állábas mozgás', 'csillós mozgás', 'ostoros mozgás'],
          },
          emeltExtra: { sections: [], keyTerms: [] },
        },
      },
      {
        id: 'sejt-anyagcsere',
        title: 'Anyagcsere (sejtszinten)',
        order: 12,
        isFree: false,
        estimatedMinutes: 16,
        commonMistakes: [
          'Sokan felcserélik a mitokondrium és a színtest szerepét: a mitokondrium a biológiai oxidáció (lebontás), a színtest a fotoszintézis (felépítés) helyszíne - ez a kettő ellentétes irányú folyamat.',
          'A lizoszóma szerepét néha összekeverik a sejtmag szerepével - a lizoszóma emésztő funkciójú, nem genetikai információt tárol.',
        ],
        summary: 'Az endoplazmatikus hálózat fehérje- és lipidszintézisben, a mitokondrium a biológiai oxidációban, a színtest a fotoszintézisben, a lizoszóma pedig a sejten belüli emésztésben vesz részt.',
        content: {
          kozep: {
            intro: 'A sejt egyes sejtalkotói (organellumai) meghatározott anyagcsere-funkciókat látnak el.',
            sections: [
              {
                heading: 'Sejtalkotók anyagcsere-szerepe',
                paragraphs: [
                  'A sejt belső hártyarendszere (endoplazmatikus hálózat) számos funkciót lát el: fehérjék és lipidek szintézisét, valamint anyagok szállítását a sejten belül.',
                  'A mitokondrium a biológiai oxidáció, a színtest a fotoszintézis helyszíne.',
                  'A lizoszóma a sejtbe bejutó, illetve a belső felesleges anyagok lebontását végzi emésztőenzimei segítségével.',
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
        order: 13,
        isFree: false,
        estimatedMinutes: 20,
        diagramId: 'mitozis-meiozis',
        comparisonTable: {
          headers: ['Szempont', 'Mitózis', 'Meiózis'],
          rows: [
            ['Osztódások száma', '1', '2'],
            ['Keletkező sejtek száma', '2', '4'],
            ['Kromoszómaszám', 'változatlan (pl. 46 → 46)', 'megfeleződik (pl. 46 → 23)'],
            ['Előfordulás', 'testi sejtekben', 'ivarsejt-képzéskor'],
            ['Genetikai változatosság', 'nem növeli', 'növeli (rekombináció)'],
          ],
        },
        commonMistakes: [
          'Gyakori hiba azt hinni, hogy a meiózis egyetlen osztódás - valójában két egymást követő osztódásból áll, ez adja a négy keletkező sejtet.',
          'Sokan elfelejtik, hogy a mitózis eredményeként keletkező sejtek kromoszómaszáma NEM csökken - csak a meiózisnál felezõdik.',
        ],
        mnemonic: 'MEIÓZIS = "kEttő" (két osztódás, négy sejt, felezett kromoszómaszám) - a "M"-hez kösd a "kEttőt".',
        summary: 'A mitózis egyetlen osztódással két, az eredetivel megegyező kromoszómaszámú testi sejtet hoz létre. A meiózis két egymást követő osztódással négy, felezett kromoszómaszámú ivarsejtet eredményez, és rekombináció révén genetikai változatosságot is teremt.',
        content: {
          kozep: {
            intro: 'A sejtosztódás biztosítja az élőlények növekedését, megújulását és szaporodását.',
            sections: [
              {
                heading: 'Számtartó és számfelező osztódás',
                paragraphs: [
                  'A számtartó osztódás (mitózis) a testi sejtek osztódásának módja, amely során a keletkező sejtek kromoszómaszáma megegyezik az eredeti sejtével.',
                  'A számfelező osztódás (meiózis) az ivarsejtek létrejöttében játszik szerepet: megfelezi a kromoszómaszámot, és biztosítja a genetikai sokféleséget.',
                  'Az emberi testi sejtek 46, az ivarsejtek 23 kromoszómát tartalmaznak.',
                ],
              },
            ],
            keyTerms: ['mitózis', 'meiózis', 'kromoszóma'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a sejtciklus szakaszait és a mitózis-meiózis részletes összehasonlítását is ismerni kell.',
            sections: [
              {
                heading: 'A sejtciklus és az osztódások összehasonlítása',
                paragraphs: [
                  'A sejtciklus jól elkülöníthető szakaszokra bontható: a növekedési szakaszokat (amikor a sejt felkészül az osztódásra és megkettőződik a DNS-e) az osztódás szakasza követi.',
                  'A mitózis és a meiózis összehasonlítható folyamataik, előfordulásuk, valamint a genetikai információ mennyiségi és minőségi változása alapján - a meiózis során rekombináció is történik, ami tovább növeli a genetikai változatosságot.',
                ],
              },
            ],
            keyTerms: ['sejtciklus', 'rekombináció'],
          },
        },
      },
      {
        id: 'sejtmukodesek-vezerlese',
        title: 'A sejtműködések vezérlése',
        order: 14,
        isFree: false,
        estimatedMinutes: 14,
        commonMistakes: [
          'Az apoptózist (programozott sejthalál) gyakran összekeverik a nekrózissal (nem programozott, sérülés okozta sejthalál) - a kettő oka és lefolyása is teljesen eltérő.',
        ],
        summary: 'A sejt külső és belső ingerekre koncentrációváltozással, alakváltozással, elválasztással vagy elektromos jellel válaszolhat. A K-Na-pumpa alapvető a sejtműködés szabályozásában, a sejthalál pedig lehet programozott (apoptózis) vagy nem programozott.',
        content: {
          kozep: {
            intro: 'A sejt folyamatosan reagál a külső és belső környezetéből érkező ingerekre.',
            sections: [
              {
                heading: 'Válasz az ingerekre és a sejthalál',
                paragraphs: [
                  'A sejt külső és belső ingerekre válaszolhat: koncentrációváltozással, alakváltozással, elválasztással vagy elektromos változással.',
                  'A K-Na-pumpa kulcsfontosságú a sejtműködés szabályozásában, mivel fenntartja a sejtmembrán két oldala közötti ionkoncentráció-különbséget.',
                  'Megkülönböztetünk programozott sejthalált (apoptózis), amely a szervezet számára hasznos, szabályozott folyamat, és nem programozott sejthalált (nekrózis), amely sérülés vagy károsodás következménye, és - az apoptózissal ellentétben - gyulladásos reakciót is kiválthat a környező szövetben.',
                ],
              },
            ],
            keyTerms: ['K-Na-pumpa', 'apoptózis', 'nekrózis'],
          },
          emeltExtra: { sections: [], keyTerms: [] },
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
        estimatedMinutes: 14,
        content: {
          kozep: {
            intro: 'A vírusok nem sejtes szerveződésű biológiai rendszerek, amelyek csak élő sejtekben képesek szaporodni - jelentős egészségügyi szerepük miatt megértésük kulcsfontosságú.',
            sections: [
              {
                heading: 'Felépítés és fertőzés',
                paragraphs: [
                  'A vírusok felépítése egyszerű: egy fehérjeburokban (kapszid) örökítőanyag (DNS vagy RNS) található. Önálló anyagcserét nem folytatnak, kizárólag a gazdasejt anyagcsere-gépezetét felhasználva szaporodnak.',
                  'A megfertőződés módjai sokfélék lehetnek: cseppfertőzés, közvetlen érintkezés, testnedvekkel történő átvitel, illetve rovarcsípés. Vírus okozta emberi megbetegedésre példa az influenza, a kanyaró vagy a HIV-fertőzés.',
                ],
              },
              {
                heading: 'Fertőzés, megbetegedés, járvány',
                paragraphs: [
                  'A fertőzés a kórokozó szervezetbe jutását jelenti, a megbetegedés a tünetek megjelenését, a járvány pedig egy fertőző betegség egy adott területen, rövid idő alatt nagyszámú embert érintő terjedését.',
                  'A megelőzés legfontosabb eszközei a védőoltás, a higiéniai szabályok betartása és a fertőzött egyedek elkülönítése.',
                ],
              },
            ],
            keyTerms: ['vírus', 'kapszid', 'fertőzés', 'járvány'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a vírusok eredetére vonatkozó elméleteket és a prionok jelenségét is ismerni kell.',
            sections: [
              {
                heading: 'A vírusok eredete és a fágfertőzés',
                paragraphs: [
                  'A vírusok kialakulására több elmélet is született - az egyik szerint korábban önálló, sejtes szervezetek redukálódtak nem sejtes formává, a másik szerint sejtekből "kiszabadult" genetikai elemekből alakultak ki.',
                  'A fágfertőzés (bakteriofágok baktériumot fertőző folyamata) jól modellezi a vírusfertőzés általános lépéseit: a fág a baktérium felszínéhez tapad, örökítőanyagát a sejtbe juttatja, majd a gazdasejt gépezetét felhasználva új vírusrészecskék épülnek fel.',
                ],
              },
              {
                heading: 'A prion',
                paragraphs: [
                  'A prion a vírusnál is egyszerűbb fertőző ágens: kizárólag egy rendellenesen feltekeredett fehérjéből áll, nukleinsavat nem tartalmaz. A prion a normál fehérjéket is a saját, kóros térszerkezetére "kényszeríti át", ami idegrendszeri betegségekhez (pl. kergemarhakór) vezethet.',
                ],
              },
            ],
            keyTerms: ['fág', 'prion'],
          },
        },
      },
      {
        id: 'onallo-sejtek',
        title: 'Önálló sejtek (baktériumok, egysejtű eukarióták)',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'Az önálló sejtek - a baktériumok és az egysejtű eukarióták - teljes életműködésüket egyetlen sejt keretein belül végzik.',
            sections: [
              {
                heading: 'Baktériumok',
                paragraphs: [
                  'A prokarióta sejtekben (baktériumok) nincs valódi, hártyával határolt sejtmag, míg az eukarióta sejtekben igen - ez a sejtszerveződés legalapvetőbb különbsége.',
                  'A baktériumok ökológiai szerep szerint lehetnek termelők, lebontók, kórokozók vagy szimbionták. Jelentőségük sokrétű: környezeti (anyagforgalom), evolúciós, ipari (pl. joghurtkészítés), mezőgazdasági (talajjavítás) és egészségügyi (fertőzések, de gyógyszergyártás is).',
                  'A felelőtlen antibiotikum-szedés (pl. idő előtti abbahagyás) hozzájárul a kórokozók antibiotikum-rezisztens (ellenálló) formáinak elterjedéséhez, ami komoly egészségügyi veszélyt jelent.',
                  'A fertőtlenítés és a sterilizálás a kórokozók elpusztítására vagy eltávolítására szolgáló eljárások, amelyek nélkülözhetetlenek az egészségügyben.',
                ],
              },
              {
                heading: 'Egysejtű eukarióták',
                paragraphs: [
                  'Az egysejtű eukarióták (pl. óriás amőba, papucsállatka, zöld szemesostoros) egyetlen sejten belül végzik el az emésztést, a mozgást és a víztartalom-szabályozást is.',
                  'Testszerveződésük változatos: az amőba állábakkal mozog és táplálkozik, a papucsállatka csillókkal, a zöld szemesostoros ostorral mozog, és fényben fotoszintézisre is képes.',
                ],
              },
            ],
            keyTerms: ['prokarióta', 'eukarióta', 'antibiotikum-rezisztencia', 'fertőtlenítés', 'sterilizálás'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a baktériumok anyagcsere-típusok szerinti azonosítását és az endoszimbióta elméletet is ismerni kell.',
            sections: [
              {
                heading: 'Baktériumok anyagcsere-típusai',
                paragraphs: [
                  'Életfolyamataik leírása alapján a baktériumok lehetnek heterotrófok (szerves anyagból élnek), fotoautotrófok (fényenergiával szintetizálnak szerves anyagot) vagy kemoautotrófok (szervetlen vegyületek energiáját hasznosítva).',
                  'A különböző fertőtlenítési eljárások (pl. hő, UV-sugárzás, vegyszerek) biológiai alapja mindig a kórokozók fehérjéinek vagy örökítőanyagának károsítása.',
                ],
              },
              {
                heading: 'Az endoszimbióta elmélet',
                paragraphs: [
                  'Az endoszimbióta elmélet szerint az eukarióta sejtek egyes organellumai (a mitokondrium és a színtest) egykor önállóan élő, prokarióta szervezetekből alakultak ki, amelyeket egy ősi eukarióta sejt bekebelezett, és a kapcsolat kölcsönösen előnyössé, majd elválaszthatatlanná vált.',
                  'Az elmélet mellett szóló érvek közé tartozik, hogy a mitokondriumnak és a színtestnek saját, körkörös DNS-e és saját riboszómái vannak, amelyek méretükben a baktériumokéhoz hasonlítanak.',
                ],
              },
            ],
            keyTerms: ['heterotróf baktérium', 'fotoautotróf', 'kemoautotróf', 'endoszimbióta elmélet'],
          },
        },
      },
      {
        id: 'tobbsejtuseg',
        title: 'Többsejtűség',
        order: 3,
        isFree: false,
        estimatedMinutes: 16,
        content: {
          kozep: {
            intro: 'A többsejtű szerveződés megjelenése alapvető fejlődéstörténeti lépés volt - a sejtek specializálódásával (differenciálódásával) új, összetettebb életformák jöttek létre.',
            sections: [
              {
                heading: 'A növények, gombák és állatok elkülönülése',
                paragraphs: [
                  'A növények, a gombák és az állatok testszerveződésük és anyagcsere-folyamataik alapján alkotnak külön országot az élővilág rendszerében.',
                  'A differenciálódás a sejtek szerkezeti és működésbeli specializálódását jelenti: a soksejtű szervezetben a sejtek egy adott feladatra "szakosodnak".',
                  'A zöldmoszatok példáján jól bemutatható az egysejtű szerveződés és a többsejtű, nem szövetes szerveződés típusai: a sejttársulás (laza kapcsolatban lévő sejtek csoportja), a sejtfonal (sorban egymáshoz kapcsolódó sejtek) és a teleptest (bonyolultabb, de szövetekre még nem tagolódó testforma).',
                ],
              },
              {
                heading: 'Fonalas és teleptestes gombák',
                paragraphs: [
                  'Fonalas testfelépítésű gombák például a peronoszpóra, a fejespenész és az ecsetpenész, valamint számos emberi megbetegedést okozó gombafaj. A gombák jellemzően spórákkal szaporodnak.',
                  'A teleptestes szerveződés megfigyelhető a vörös- és barnamoszatoknál, a zöldmoszatoknál, a kalapos gombáknál és a moháknál. A mohák egyedfejlődése kétszakaszos.',
                  'Fontos gyakorlati tudnivaló a halálosan mérgező gyilkos galóca felismerése és a gombaszedés-tárolás alapvető biztonsági szabályainak ismerete.',
                ],
              },
              {
                heading: 'Zuzmók és a gombák ökológiai szerepe',
                paragraphs: [
                  'A zuzmók egy gomba és egy alga (vagy cianobaktérium) szimbiózisából jönnek létre, és mivel érzékenyek a szennyezésre, a levegőszennyezés indikátorai (jelzőszervezetei) lehetnek.',
                  'A gombák ökológiai szerepe sokrétű: lehetnek lebontók, paraziták (élősködők) vagy szimbionták.',
                ],
              },
            ],
            keyTerms: ['differenciálódás', 'teleptest', 'zuzmó', 'gyilkos galóca'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a növények és állatok szaporodási stratégiáinak összehasonlítását, valamint a szivacsok testfelépítését is ismerni kell.',
            sections: [
              {
                heading: 'Növények és állatok összehasonlítása',
                paragraphs: [
                  'A növények és az állatok összehasonlíthatók az életszakaszok típusa, a haploid és a diploid szakasz hossza, valamint az ivarsejt- és spóraképzés módja alapján - a növényeknél jellemző a kétszakaszos (haploid és diploid szakaszt is tartalmazó) egyedfejlődés.',
                ],
              },
              {
                heading: 'A szivacsok testfelépítése',
                paragraphs: [
                  'A szivacsok testfelépítésének főbb jellemzői (pl. a vázat alkotó tűk, a vízáramlást biztosító pórusok) szoros kapcsolatban állnak a különböző sejttípusok specializált funkcióival.',
                ],
              },
            ],
            keyTerms: ['haploid szakasz', 'diploid szakasz'],
          },
        },
      },
      {
        id: 'szovetek-szervek',
        title: 'Szövetek, szervek, szervrendszerek, testtájak',
        order: 4,
        isFree: false,
        estimatedMinutes: 22,
        content: {
          kozep: {
            intro: 'A szövetek, szervek és szervrendszerek megjelenése tette lehetővé az élővilág legösszetettebb testfelépítésű csoportjainak - a magasabb rendű növényeknek és állatoknak - a kialakulását.',
            sections: [
              {
                heading: 'A növényvilág fejlődéstörténeti "újításai"',
                paragraphs: [
                  'A harasztoknál jelentek meg először valódi szövetek és szervek (pl. gyökér, szár, levél), ami hatékonyabb alkalmazkodást tett lehetővé a szárazföldi élethez.',
                  'A nyitvatermőknél megjelenő újítások (virág, mag, a víztől független szaporodás) tovább növelték az alkalmazkodóképességet.',
                  'A zárvatermőknél megjelenő újítások - takarólevelek, bibe, zárt magház, termés, szállítócsövek, gyökérszőrök - a szárazföldi élethez való még hatékonyabb alkalmazkodást, valamint a fényért és vízért folyó versengésben való helytállást szolgálják. A termés biológiai szerepe a magok védelme és terjesztése.',
                ],
              },
              {
                heading: 'Az állatvilág főbb csoportjai',
                paragraphs: [
                  'Az állatvilág főbb csoportjainál (szivacsok, laposférgek, gyűrűsférgek, rovarok, csigák, valamint a gerincesek nagy csoportjai: csontos halak, kétéltűek, hüllők, madarak, emlősök) a testfelépítés, az életműködések (kültakaró, mozgás, táplálkozás, légzés, anyagszállítás, szaporodás, érzékelés) és a környezet szoros kapcsolatban állnak egymással.',
                ],
              },
              {
                heading: 'Növényi és állati szövetek',
                paragraphs: [
                  'A növényi szövetek közül az osztódószövet a növekedésért felelős, míg az állandósult szövetek közé tartozik a bőrszövet (védelem), a táplálékkészítő alapszövet és a szállítószövet (anyagszállítás).',
                  'Az állati szövetek négy fő típusa: a hámszövet (határoló és mirigyes funkciók), az izomszövet (mozgás), a kötőszövet (összekötés, védelem, tápanyagraktározás) és az idegszövet (ingerület vezetése).',
                ],
              },
            ],
            keyTerms: ['haraszt', 'nyitvatermő', 'zárvatermő', 'osztódószövet', 'hámszövet', 'izomszövet', 'kötőszövet', 'idegszövet'],
          },
          emeltExtra: {
            intro: 'Emelt szinten a kétszakaszos egyedfejlődés részletei és a kettős megtermékenyítés folyamata is a követelmények közé tartozik.',
            sections: [
              {
                heading: 'Kétszakaszos egyedfejlődés',
                paragraphs: [
                  'A harasztok és a zárvatermők kétszakaszos egyedfejlődésében a haploid és a diploid szakaszok aránya jelentősen eltér: a zárvatermőknél a diploid szakasz dominál, ami fejlődéstörténeti szempontból előrelépést jelent.',
                ],
              },
              {
                heading: 'Kettős megtermékenyítés',
                paragraphs: [
                  'A zárvatermőkre jellemző kettős megtermékenyítés során az egyik hímivarsejt a petesejttel egyesül (ebből lesz az embrió), a másik pedig a központi sejttel (ebből lesz a tápláló szövet, az endospermium) - ez a folyamat kizárólag a zárvatermőknél fordul elő.',
                ],
              },
            ],
            keyTerms: ['kettős megtermékenyítés'],
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
