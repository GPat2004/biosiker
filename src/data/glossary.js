// Fogalomtár: a fejezetek `keyTerms` mezőiben szereplő kifejezésekhez tartozó
// tankönyvi jellegű, pontos definíciók. A kulcs mindig kisbetűs, hogy a
// kereséskor case-insensitive módon illeszkedjen a szövegben talált szóra.
//
// Új fejezet írásakor: minden keyTerms-ben szereplő kifejezéshez legyen itt
// bejegyzés, különben a szövegben nem lesz kattintható/hover-elhető.

export const GLOSSARY = {
  'faj': 'Azon egyedek csoportja, amelyek természetes körülmények között egymással szaporodva termékeny utódot hoznak létre; a biológiai rendszerezés alapegysége.',
  'taxonómia': 'Az élőlények tudományos rendszerezésével, csoportosításával foglalkozó tudományág.',
  'rendszerezés': 'Az élőlények közös jellemzők alapján történő csoportosítása egyre tágabb kategóriákba (faj, nem, család, rend, osztály, törzs, ország).',
  'fénymikroszkóp': 'Látható fény segítségével a szabad szemmel nem látható struktúrákat felnagyító optikai eszköz.',
  'nagyítás': 'A mikroszkóp által létrehozott kép és az eredeti tárgy méretének aránya; kiszámítása az objektív és az okulár nagyításának szorzata.',
  'objektív': 'A mikroszkóp tárgyhoz közelebb eső lencserendszere, amely az elsődleges nagyítást végzi.',
  'okulár': 'A mikroszkóp szemhez közelebb eső lencserendszere, amelyen keresztül a megnagyított képet szemléljük.',
  'molekuláris törzsfa': 'A fajok közötti rokonsági viszonyokat a DNS- vagy fehérjeszekvenciák hasonlósága alapján ábrázoló fejlődéstörténeti ábra.',
  'hipotézis': 'Egy jelenségre adott, még nem igazolt, de logikusan megalapozott tudományos magyarázat (feltevés).',
  'elmélet': 'Egy jelenségkört magyarázó, sokszorosan tesztelt és széles körben elfogadott tudományos magyarázó rendszer (teória).',
  'kísérleti változó': 'Az a tényező, amelyet egy kísérletben tudatosan változtatunk, hogy hatását megfigyelhessük.',
  'elektronmikroszkóp': 'Elektronsugárral működő, a fénymikroszkópnál lényegesen nagyobb nagyítást és felbontást biztosító mikroszkóp.',
  'szerveződési szint': 'Az élő rendszerek felépítésének hierarchikus szintje, a molekuláktól a bioszféráig.',
  'populáció': 'Egy faj egyedeinek egy adott területen, egy időben élő, egymással szaporodó közössége.',
  'társulás': 'Egy adott élőhelyen együtt élő, egymással kölcsönhatásban lévő különböző populációk összessége (életközösség, biocönózis).',
  'biom': 'Nagy kiterjedésű, jellegzetes éghajlati és növényzeti adottságokkal rendelkező életközösség-típus (pl. trópusi esőerdő, sztyeppe).',
  'bioszféra': 'A Föld egészének élettel benépesített rétege, a legátfogóbb szerveződési szint.',
  'nyílt rendszer': 'Olyan rendszer, amely folyamatosan anyagot és energiát cserél a környezetével - minden élő rendszer ilyen.',
  'homeosztázis': 'Az élő szervezet belső környezetének viszonylagos állandóságát fenntartó szabályozási folyamat.',
  'sejtciklus': 'A sejt osztódásának egymást követő szakaszai, az egyik osztódástól a következőig.',
  'aszpektus': 'Egy életközösség évszakonként ismétlődő, jellegzetes megjelenési formája.',
  'diffúzió': 'Az anyagok nagyobb koncentrációjú helyről a kisebb koncentrációjú hely felé történő, energiabefektetés nélküli mozgása.',
  'ozmózis': 'A víz mozgása egy féligáteresztő hártyán át, a kisebb oldott anyag-koncentrációjú oldatból a nagyobb koncentrációjú felé.',
  'adszorpció': 'Anyagok felületen történő megkötődése; biológiai jelentősége van például az enzimműködésben és a talajkolloidoknál.',
  'aktiválási energia': 'Az a minimális energiamennyiség, amely egy kémiai reakció beindításához szükséges.',
  'katalizátor': 'Olyan anyag, amely csökkenti a kémiai reakció aktiválási energiáját, ezáltal felgyorsítja azt, miközben maga nem alakul át.',
  'enzim': 'Fehérje természetű biológiai katalizátor, amely a szervezetben zajló kémiai reakciókat gyorsítja fel.',
  'ozmotikusan aktív anyag': 'Olyan oldott anyag (pl. vérfehérje), amely ozmotikus nyomást hoz létre, és ezáltal befolyásolja a víz mozgását a szervezetben.',
  'kromatográfia': 'A keverékek komponenseinek egy álló és egy mozgó fázis közötti eltérő megoszláson alapuló szétválasztási módszere.',
  'atp-szintézis': 'Az ATP (adenozin-trifoszfát) sejten belüli előállítása, amely a mitokondriumban jellemzően az egyenlőtlen ioneloszláson alapul.',
  'na-k pumpa': 'A sejtmembránban működő fehérje, amely ATP felhasználásával aktívan szállít nátrium- és káliumionokat a membrán két oldala között.',
  'k-na-pumpa': 'A sejtmembránban működő fehérje, amely ATP felhasználásával aktívan szállít nátrium- és káliumionokat a membrán két oldala között.',
  'biogén elem': 'Olyan kémiai elem, amely nélkülözhetetlen szerepet tölt be az élő szervezetek felépítésében és működésében.',
  'lipid': 'Vízben nem, de szerves oldószerekben jól oldódó szerves molekulák csoportja (pl. zsírok, foszfatidok).',
  'szénhidrát': 'Szén, hidrogén és oxigén atomokból felépülő szerves molekulák csoportja, amelyek energiaforrásként és építőanyagként is szolgálnak.',
  'fehérje': 'Aminosavakból, peptidkötésekkel felépülő makromolekula, amely a szervezet szinte minden funkciójában szerepet játszik.',
  'dns': 'Dezoxiribonukleinsav; az örökítő anyag, amely az élőlények genetikai információját hordozza.',
  'α- és β-glükóz': 'A glükóz két izomer formája, amelyek a molekula gyűrűs szerkezetében az 1-es szénatomon lévő -OH csoport térállásában térnek el.',
  'peptidkötés': 'Két aminosav közötti kovalens kötés, amely a fehérjék elsődleges szerkezetét (a peptidláncot) hozza létre.',
  'harmadlagos szerkezet': 'A fehérjelánc térbeli feltekeredése, amelyet az oldalláncok közötti kölcsönhatások alakítanak ki.',
  'fototróf': 'Olyan szervezet, amely a fényenergiát hasznosítja energiaforrásként.',
  'kemotróf': 'Olyan szervezet, amely kémiai energiát (szervetlen vagy szerves vegyületek energiáját) hasznosítja.',
  'autotróf': 'Olyan szervezet, amely szervetlen szénforrásból (pl. szén-dioxidból) képes felépíteni szerves anyagait.',
  'heterotróf': 'Olyan szervezet, amely szerves szénforrásra szorul a felépítő anyagcseréjéhez.',
  'fotoszintézis': 'A növények és egyes más szervezetek által végzett folyamat, amely során fényenergia felhasználásával szervetlen anyagokból szerves anyag (glükóz) képződik.',
  'glikolízis': 'A glükóz lebontásának első, oxigént nem igénylő szakasza, amely a sejt citoplazmájában zajlik.',
  'hidrolízis': 'Kémiai reakció, amelynek során víz felvételével egy molekula két (vagy több) részre bomlik.',
  'kondenzáció': 'Kémiai reakció, amelynek során két molekula víz kilépése mellett kapcsolódik össze.',
  'citrátkör': 'A mitokondriumban zajló körfolyamat, amelynek során a szerves molekulák szénváza szén-dioxiddá alakul, a felszabaduló hidrogén szállítómolekulára kerül.',
  'citromsavciklus': 'A mitokondriumban zajló körfolyamat, amelynek során a szerves molekulák szénváza szén-dioxiddá alakul, a felszabaduló hidrogén szállítómolekulára kerül (más néven citrátkör).',
  'exocitózis': 'Az a folyamat, amelynek során a sejt anyagokat hólyagocskák (vezikulák) segítségével juttat ki a sejten kívülre.',
  'membrán': 'Lipid kettősrétegből és fehérjékből felépülő biológiai hártya, amely elhatárolja a sejtet, illetve a sejten belüli tereket.',
  'passzív szállítás': 'Anyagok koncentráció-különbség mentén, energiabefektetés nélkül történő mozgása a sejtmembránon át.',
  'aktív szállítás': 'Anyagok koncentráció-különbséggel szemben, ATP-energia felhasználásával történő szállítása a sejtmembránon át.',
  'mitózis': 'Számtartó sejtosztódás, amely során a keletkező sejtek genetikai állománya megegyezik az eredeti sejtével; a testi sejtek osztódási módja.',
  'meiózis': 'Számfelező sejtosztódás, amely az ivarsejtek keletkezésekor megfelezi a kromoszómaszámot, és genetikai változatosságot hoz létre.',
  'lizoszóma': 'A sejtbe bejutó, illetve a sejten belüli felesleges anyagok lebontását végző, emésztőenzimeket tartalmazó sejtalkotó.',

  // 2. modul, 12. fejezet: Osztódás (részletesen)
  'g1-szakasz': 'Az interfázis első szakasza, amelyben a sejt növekszik és fehérjéket termel.',
  's-szakasz': 'Az interfázis szintézis szakasza, amelyben megkettőződik a sejt DNS-állománya.',
  'g2-szakasz': 'Az interfázis utolsó szakasza, amelyben a sejt közvetlenül felkészül az osztódásra.',
  'nemleválás': 'A meiózis során előforduló hiba (nondiszjunkció), amikor egy kromoszómapár nem válik szét megfelelően - ez a Down-szindróma egyik lehetséges genetikai háttere.',
  'homológ kromoszóma': 'Egymáshoz hasonló, de nem teljesen egyező kromoszómapár egyik tagja - az egyik anyai, a másik apai eredetű, ugyanazokat a géneket hordozzák, de gyakran eltérő allélokkal.',
  'független szétválás': 'A meiózis I során a homológ kromoszómapárok véletlenszerű, egymástól független szétválása az utódsejtek között - a genetikai változatosság egyik fő forrása.',
  'kromatida': 'A megkettőződött DNS-t tartalmazó kromoszóma egyik "fele" - egy osztódás előtti kromoszóma két, egymással megegyező kromatidából áll.',
  'centromér': 'A kromoszóma összeszűkülő pontja, amely a két testvérkromatidát összekapcsolja, és amelyhez az osztódási orsó fonalai kapcsolódnak.',
  'kapcsoltsági csoport': 'Egy adott kromoszómán elhelyezkedő gének összessége, amelyek - mivel fizikailag ugyanahhoz a DNS-molekulához tartoznak - együtt öröklődnek.',
  'interfázis': 'A sejtciklus osztódás közötti szakasza, amely alatt a sejt növekszik, felkészül, és megkettőződik a DNS-e.',
  'profázis': 'A mitózis első szakasza, amelyben a DNS kromoszómákká tömörödik, és kialakul az osztódási orsó.',
  'metafázis': 'A mitózis szakasza, amelyben a kromoszómák a sejt egyenlítői síkjában rendeződnek el.',
  'anafázis': 'A mitózis szakasza, amelyben a testvérkromatidák szétválnak és a sejt ellentétes pólusai felé húzódnak.',
  'telofázis': 'A mitózis utolsó szakasza, amelyben kialakul a két új sejtmag, majd a citoplazma is kettéválik.',

  // 3. modul, 2. fejezet: Baktériumok
  'kokkusz': 'Gömb alakú baktériumsejt.',
  'bacilus': 'Pálcika alakú baktériumsejt.',
  'spirillum': 'Csavarodott alakú baktériumsejt.',

  // 3. modul, 2. fejezet emelt kiegészítés: anyagcsere-/ökológiai típusok, fertőtlenítés, endoszimbióta elmélet
  'termelő': 'Olyan élőlény (pl. fotoautotróf vagy kemoautotróf baktérium), amely szerves anyagot állít elő, amelyet más élőlények felhasználhatnak.',
  'lebontó': 'Olyan élőlény (pl. egyes baktériumok), amely elhalt szerves anyagot bont le, ezzel zárva az anyagforgalom körforgását.',
  'kórokozó': 'Olyan mikroorganizmus (pl. egyes baktériumok, vírusok), amely más élőlények kárára szaporodva betegséget okoz.',
  'szimbionta': 'Olyan élőlény (pl. a bélflóra baktériumai), amely egy másik fajjal kölcsönösen előnyös, tartós együttélésben (szimbiózisban) él.',
  'timindimer': 'Az UV-sugárzás által a DNS-ben okozott kóros kötés két szomszédos timinbázis között, amely megakadályozza a DNS helyes megkettőződését és leolvasását.',

  // 3. modul, 3. fejezet: Egysejtű eukarióták
  'protiszták országa': 'A rendszertan egyik országa, amelybe az egysejtű, valódi sejtmaggal rendelkező (eukarióta) élőlények tartoznak, pl. az óriás amőba, a papucsállatka és a zöld szemesostoros.',
  'gyökérlábúak': 'A Protiszták országának törzse, amelynek tagjai (pl. az óriás amőba) állábak segítségével mozognak és táplálkoznak.',
  'csillósok': 'A Protiszták országának törzse, amelynek tagjai (pl. a papucsállatka) egész testüket borító csillókkal mozognak.',
  'ostorosok': 'A Protiszták országának törzse, amelynek tagjai (pl. a zöld szemesostoros) egy vagy több ostorral mozognak.',
  'fagocitózis': 'Az endocitózis egyik formája, amelynek során a sejt szilárd táplálékrészecskét kebelez be, körülvéve azt a sejtmembránjával.',
  'mixotróf': 'Olyan szervezet (pl. a zöld szemesostoros), amely fény jelenlétében fotoautotróf, fény hiányában viszont heterotróf módon táplálkozik.',
  'lüktető vacuolum': 'Egysejtű élőlények (pl. amőba, papucsállatka) sejtszervecskéje, amely a sejtbe ozmózissal beáramló fölösleges vizet gyűjti össze és rendszeresen kiüríti.',

  // 3. modul emelt kiegészítés: vírus-állapotok, litikus/lizogén ciklus
  'természetes szelekció': 'Az evolúció egyik alapmechanizmusa: a környezethez jobban alkalmazkodó egyedek nagyobb eséllyel maradnak életben és szaporodnak, ezáltal az előnyös tulajdonságok gyakorisága nő a populációban.',
  'virion': 'A sejten kívül létező, önálló, fertőzőképes vírusrészecske - a vírus "nyugvó", sejten kívüli formája.',
  'vegetatív vírus': 'A gazdasejtbe jutott, aktívan szaporodó vírus állapota, amikor genetikai anyaga irányítja új vírusalkotó elemek szintézisét.',
  'litikus ciklus': 'A fágszaporodás olyan formája, amelynél a fág azonnal új vírusrészecskéket termel, majd a gazdasejt lízisével szabadulnak ki.',
  'lizogén ciklus': 'A fágszaporodás olyan formája, amelynél a fág DNS-e beépül a gazdasejt genomjába, és profágként, a gazdasejt osztódásaival együtt öröklődik tovább.',
  'profág': 'A gazdasejt genomjába beépült fág-DNS - a lizogén ciklus "rejtőzködő" állapota, amely stresszhatásra kiléphet és litikus ciklusba kezdhet.',
  'temperáns fág': 'Olyan bakteriofág, amely képes a lizogén ciklust követni (a virulens fágokkal ellentétben, amelyek mindig litikus ciklust követnek).',
  'burkos vírus': 'Olyan vírus, amelynek kapszidját egy külső, lipid membránból álló burok veszi körül (pl. influenzavírus, HIV, koronavírusok) - jellemzően sarjadzással hagyja el a gazdasejtet.',

  // 3. modul: Az egyed szerveződési szintje
  'retrovírus': 'Olyan RNS-vírus (pl. a HIV), amely szaporodása során saját RNS-ét DNS-sé írja át, és beépíti a gazdasejt DNS-állományába.',
  'lízis': 'A sejt szétesése, elpusztulása - a vírusszaporodás során ez teszi lehetővé az újonnan összeszerelt vírusrészecskék kiszabadulását a gazdasejtből.',
  'dns-vírus': 'DNS-t hordozó vírustípus (pl. himlővírus, herpeszvírus, hepatitis B vírus) - a DNS hatékony hibajavító mechanizmusai miatt lassabban mutálódik, mint az RNS-vírusok.',
  'rns-vírus': 'RNS-t hordozó vírustípus (pl. influenzavírus, HIV, koronavírusok) - hatékony hibajavítás hiányában gyorsabban mutálódik, mint a DNS-vírusok.',
  'bakteriofág': 'Baktériumot fertőző vírus - egyszerű, jól elkülöníthető szerkezete (fehérjefej + DNS, fehérjefarok) tette lehetővé a DNS örökítő szerepének bizonyítását (Hershey-Chase kísérlet).',
  'inkubációs idő': 'A kórokozóval való fertőződés és a tünetek megjelenése közötti lappangási idő.',
  'védőoltás': 'Olyan eljárás, amely a szervezet immunrendszerét egy adott kórokozó felismerésére "tanítja meg", mielőtt valódi fertőzés érné.',
  'vírus': 'Nem sejtes szerveződésű biológiai rendszer, amely csak élő sejtekben, azok anyagcsere-gépezetét felhasználva képes szaporodni.',
  'kapszid': 'A vírus örökítőanyagát körülvevő fehérjeburok.',
  'fertőzés': 'A kórokozó szervezetbe jutása, amely nem feltétlenül jár azonnal tünetekkel.',
  'járvány': 'Egy fertőző betegség egy adott területen, rövid idő alatt nagyszámú embert érintő terjedése.',
  'fág': 'Baktériumot fertőző vírus (bakteriofág).',
  'prion': 'Kizárólag rendellenesen feltekeredett fehérjéből álló, nukleinsavat nem tartalmazó fertőző ágens.',
  'prokarióta': 'Olyan sejt, amelyben nincs valódi, hártyával határolt sejtmag (pl. baktériumok).',
  'eukarióta': 'Olyan sejt, amelyben valódi, hártyával határolt sejtmag található (pl. növények, állatok, gombák sejtjei).',
  'antibiotikum-rezisztencia': 'A kórokozók ellenálló képessége az antibiotikumokkal szemben, amely gyakran a felelőtlen antibiotikum-használat következménye.',
  'fertőtlenítés': 'Kórokozók számának csökkentésére szolgáló eljárás, amely nem feltétlenül pusztítja el az összes mikroorganizmust.',
  'sterilizálás': 'Eljárás, amely egy tárgyat vagy anyagot minden élő mikroorganizmustól (baktériumtól, vírustól, spórától) mentesít.',
  'heterotróf baktérium': 'Olyan baktérium, amely szerves anyagból nyeri energiáját és építőanyagait.',
  'fotoautotróf': 'Olyan szervezet, amely fényenergia felhasználásával szervetlen anyagokból állítja elő szerves anyagait.',
  'kemoautotróf': 'Olyan szervezet, amely szervetlen vegyületek kémiai energiáját hasznosítva állítja elő szerves anyagait.',
  'endoszimbióta elmélet': 'Az elmélet, amely szerint a mitokondrium és a színtest egykor önállóan élő prokarióta szervezetekből alakult ki egy ősi eukarióta sejttel való szimbiózis során.',
  'differenciálódás': 'A sejtek szerkezeti és működésbeli specializálódása egy adott feladat ellátására.',
  'sejttársulás': 'Önállóan is életképes sejtek laza kapcsolódásából álló, még nem valódi többsejtű szerveződési forma (pl. egyes zöldmoszatoknál).',
  'sejtfonal': 'Egy sorban, egymáshoz kapcsolódó sejtekből álló, fonalszerű testfelépítés (pl. egyes zöldmoszatoknál, fonalas gombáknál).',
  'teleptest': 'Szövetekre még nem tagolódó, de az egysejtű szerveződésnél bonyolultabb testforma (pl. moszatoknál, gombáknál).',
  'zuzmó': 'Egy gomba és egy alga (vagy cianobaktérium) szimbiózisából létrejövő szervezet, amely érzékeny a levegőszennyezésre.',
  'bioindikátor': 'Olyan élőlény (pl. zuzmó, kétéltűek), amelynek jelenléte, gyakorisága vagy állapota megbízhatóan jelzi a környezet (pl. a levegő vagy a víz) minőségét.',
  'parazita': 'Élő szervezeten vagy annak belsejében élősködő élőlény, amely a gazdaszervezet kárára táplálkozik.',
  'sütőélesztő': 'Egysejtű gombafaj, amelynek erjedéses anyagcseréje (a keletkező szén-dioxid) teszi lehetővé a kenyértészta megkelesztését.',
  'gyilkos galóca': 'Halálosan mérgező gombafaj, amelynek felismerése alapvető biztonsági ismeret.',
  'haploid szakasz': 'Az egyedfejlődésnek az a szakasza, amelyben a sejtek egyszeres kromoszómakészlettel rendelkeznek.',
  'diploid szakasz': 'Az egyedfejlődésnek az a szakasza, amelyben a sejtek kettős (páros) kromoszómakészlettel rendelkeznek.',
  'generációváltakozás': 'A növények többségére jellemző életciklus, amelyben egy hosszú, önálló haploid és egy hosszú, önálló diploid életszakasz váltja egymást.',
  'spóraképzés': 'A diploid szakasz sejtjeinek meiózisával létrejövő haploid spórák képzése, amelyekből - az ivarsejtekkel ellentétben - megtermékenyítés nélkül is új egyed fejlődhet.',
  'ivarsejtképzés': 'Az ivarsejtek (petesejt, hímivarsejt) létrejöttének folyamata - állatoknál közvetlenül meiózissal, a legtöbb növénynél a haploid egyed mitózisával.',

  // 3. modul, 5. fejezet: Sejtfonalak
  'gombák országa': 'A rendszertan egyik országa, amelybe a heterotróf, kitines sejtfallal rendelkező, jellemzően testükön kívül emésztő élőlények tartoznak.',
  'hifa': 'A fonalas gombák testét felépítő vékony, elágazó fonál.',
  'micélium': 'A gombafonalak (hifák) összessége, amely a gomba test nagy részét, gyakran láthatatlanul, a táptalajban vagy a tápanyagforrás belsejében alkotja.',
  'peronoszpóra': 'Növénykórokozó fonalas gomba, amely elsősorban a szőlő és a burgonya leveleit támadja meg.',
  'fejespenész': 'Fonalas gomba (más néven kenyérpenész), amelyet a hifák végén ülő, gömb alakú spóratokok ("fejek") jellemeznek.',
  'ecsetpenész': 'Fonalas gomba, amelynek spóratartói ecsetszerűen elágaznak - erről a gombanemzetségről nevezték el a penicillin antibiotikumot.',
  'penicillin': 'Az ecsetpenészből (Penicillium) származó antibiotikum, amelyet Alexander Fleming fedezett fel véletlenül.',
  'cönocitikus felépítés': 'Sejthatárokkal nem (vagy csak pórusos keresztfalakkal) tagolt, sok sejtmagot tartalmazó, közös citoplazmájú testfelépítés, amely a legtöbb gombafonalra jellemző.',
  'csúcsnövekedés': 'A gombafonál (hifa) növekedési módja, amelynél kizárólag a fonál csúcsán zajlik az anyagszállítás és a sejtfalépítés.',
  'petespóra': 'A peronoszpóra és néhány más gomba vastag falú, ellenálló ivaros spórája, amely két eltérő hifa találkozásakor keletkezik, és akár évekig is életképes maradhat.',

  // 3. modul, 6. fejezet: Teleptest és álszövet
  'álszövet': 'Összefonódott hifákból álló, szövetszerű, de nem valódi, egységes eredetű, differenciálódott sejtekből álló felépítés (pl. a kalapos gombák termőtestében).',
  'rizoid': 'A mohák egyszerű, gyökérszerű rögzítőképlete, amely - a valódi gyökérrel ellentétben - elsősorban nem a vízfelvételt, hanem a talajhoz rögzítést szolgálja.',
  'szivacsok törzse': 'Az Állatok országának törzse, amelynek tagjai (a szivacsok) pórusos testfelépítésűek, és nem rendelkeznek valódi szövetekkel.',
  'gametofiton': 'A növények (pl. mohák) haploid, ivarszerveket termelő nemzedéke a generációváltakozás során.',
  'sporofiton': 'A növények (pl. mohák) diploid, meiózissal spórákat termelő nemzedéke a generációváltakozás során.',
  'archegónium': 'A mohák (és más spórás növények) petesejtet termelő, női ivarszerve.',
  'antheridium': 'A mohák (és más spórás növények) ostoros hímivarsejtet termelő, hím ivarszerve.',
  'gallérsejt': 'A szivacsok testfalát bélelő, ostoros sejt, amely a vízáramlást kelti és a táplálékrészecskéket fagocitózissal bekebelezi.',
  'vázsejt': 'A szivacsok testének alakját fenntartó, mésztűket, kovatűket vagy rugalmas fehérjerostokat kiválasztó sejt.',
  'amőboid sejt': 'A szivacsokban előforduló, alakváltoztató mozgásra képes sejt, amely a tápanyagokat szállítja a test különböző pontjaira.',

  // 3. modul, 7. fejezet: Harasztok
  'szállítószövet': 'Növényi szövet, amely a vizet és a tápanyagokat szállítja a növény különböző részei között - a harasztoknál jelenik meg elsőként.',
  'páfrány': 'Nagy levelű, szövetekkel és szervekkel rendelkező, spórával szaporodó haraszt-csoport.',
  'zsurló': 'Ízelt, tagolt szárú, spórával szaporodó haraszt-csoport.',
  'korpafű': 'Apró levelű, spórával szaporodó haraszt-csoport.',
  'előtenyész': 'A harasztok apró, rövid életű, haploid gametofiton nemzedéke, amely a kicsírázott spórából fejlődik ki, és az ivarszerveket hordozza.',

  // 3. modul, 8. fejezet: Nyitvatermők
  'mag': 'Védőburokkal és tartalék tápanyaggal ellátott embriót tartalmazó szaporítóképlet, amely a nyitvatermőknél jelenik meg először.',
  'toboz': 'A nyitvatermők (pl. fenyők) szaporítóképlete - a hímtobozban pollen, a nőtobozban magkezdemény termelődik.',
  'pollen': 'A magvas növények hímivarsejtet tartalmazó, szél vagy rovarok által terjesztett szaporítóképlete.',
  'szélbeporzás': 'A pollen szél általi terjedése, amely lehetővé teszi a víztől független megtermékenyítést.',
  'heterospória': 'Két, egymástól méretben és funkcióban eltérő spóratípus (mikrospóra, megaspóra) képzése - a nyitvatermőknél és a zárvatermőknél jellemző jelenség.',
  'mikrospóra': 'A heterospória kisebb spóratípusa, amelyből a hím gametofiton (végül a pollenszem) fejlődik ki.',
  'megaspóra': 'A heterospória nagyobb spóratípusa, amelyből a nő gametofiton fejlődik ki - ez marad a magkezdeményen belül, védett környezetben.',

  // 3. modul, 9. fejezet: Zárvatermők
  'virág': 'A zárvatermők szaporítóképlete, amely takarólevelekből, ivarszervekből (bibe, porzó) épül fel - elsőként a zárvatermőknél jelenik meg.',
  'takarólevél': 'A virág csésze- és sziromleveleiből álló része, amely védi a fejlődő ivarszerveket, és sok esetben beporzó rovarokat vonz.',
  'bibe': 'A virág termőjének felső, ragadós felszíne, amely megköti a ráhulló pollent.',
  'zárt magház': 'A zárvatermők magkezdeményét körülvevő, védő szövet, amely a megtermékenyítés után termésse alakul.',
  'termés': 'A zárvatermők megtermékenyített, átalakult magháza, amely a magok védelmét és terjesztését szolgálja.',
  'szállítócső': 'A zárvatermők fejlett szállítószövetének eleme, amely hatékonyan juttatja el a vizet és a tápanyagokat a növény minden részéhez.',
  'gyökérszőr': 'A gyökér felszínét beborító apró sejtnyúlvány, amely megnöveli a gyökér felszínét, ezáltal hatékonyabbá téve a vízfelvételt.',
  'egyszikű': 'Zárvatermő növénycsoport, amelynek embriója egy sziklevelet tartalmaz, levelei párhuzamos erezetűek, gyökérzete szárgyökérrendszer (pl. gabonafélék, liliomfélék).',
  'kétszikű': 'Zárvatermő növénycsoport, amelynek embriója két sziklevelet tartalmaz, levelei hálózatos erezetűek, gyökérzete jellemzően karógyökér (pl. hüvelyesek, gyümölcsfák).',
  'sziklevél': 'A növényi embrió első, tartalék tápanyagot felhasználó levélkéje - száma alapján különíthetők el az egyszikű és a kétszikű zárvatermők.',

  // 3. modul, 10. fejezet: Kettős megtermékenyítés
  'pollentömlő': 'A kicsírázott pollenszemből növekvő képlet, amely a bibeszálon át a magkezdeményig szállítja a két spermasejtet.',
  'embriózsák': 'A zárvatermők magkezdeményében található, redukált nő gametofiton, amely a petesejtet és a két poláris magot tartalmazó központi sejtet foglalja magába.',
  'poláris mag': 'Az embriózsák központi sejtjének két haploid sejtmagja, amelyek a második spermasejttel egyesülve hozzák létre a triploid endospermium-sejtmagot.',
  'endospermium': 'A zárvatermők magjának hármas (triploid) kromoszómakészletű tápanyag-raktározó szövete, amely a második megtermékenyítési eseményből jön létre, és az embriót táplálja.',
  'triploid': 'Hármas (3n) kromoszómakészletű - a zárvatermők endospermiumára jellemző állapot, amely egy haploid spermasejt és két haploid poláris mag egyesüléséből jön létre.',

  // 3. modul, 11. fejezet: Szivacsok
  'spongocoel': 'A szivacsok testének belsejében található központi üreg, amelybe a pórusokon átszűrt víz áramlik be.',
  'oscŭlum': 'A szivacsok testének tetején lévő nagyobb nyílás, amelyen keresztül a megszűrt víz kilövell a spongocoelből.',
  'szesszilis': 'Helyhez kötött, önálló mozgásra nem képes életmód (pl. a felnőtt szivacsoké).',
  'hímnős': 'Olyan élőlény (pl. sok szivacsfaj), amelynek egyetlen egyede mindkét ivarsejttípust (hím- és petesejtet is) termeli.',
  'mészszivacs': 'Mésztűkből felépülő vázzal rendelkező szivacscsoport.',
  'üvegszivacs': 'Kovatűkből felépülő vázzal rendelkező szivacscsoport.',
  'szarúszivacs': 'Rugalmas fehérjerostokból (spongin) felépülő vázzal rendelkező szivacscsoport (pl. mosdószivacs).',
  'archeocita': 'A szivacsok differenciálatlan sejtje, amely bármelyik specializált sejttípussá (gallérsejtté, vázsejtté, amőboid sejtté) átalakulhat - a kiemelkedő regenerációs képesség sejtszintű alapja.',
  'parazoa': 'A szivacsokat magába foglaló állatcsoport, amelynek tagjai nem rendelkeznek valódi, differenciálódott szövetekkel.',
  'eumetazoa': 'A valódi szövetekkel és idegrendszerrel rendelkező állatok gyűjtőneve - minden állattörzs ide tartozik a szivacsok kivételével.',

  // 3. modul, 12. fejezet: Csalánozók (kiegészítő, nem hivatalos tananyag)
  'csalánozók törzse': 'Az Állatok országának törzse, amelynek tagjai (pl. hidra, medúzák, korallok) diploblasztikus, sugarasan szimmetrikus testfelépítésűek, és csalánsejtekkel rendelkeznek.',
  'csalánsejt': 'A csalánozók tapogatóin található, méreganyaggal töltött, spirálisan feltekeredett tűt tartalmazó sejt (nematociszta), amely érintésre kilövell.',
  'polip': 'A csalánozók helyhez kötött testformája (pl. hidra, tengeri rózsa, korall).',
  'medúza': 'A csalánozók szabadon úszó testformája (pl. tűzmedúza).',
  'bélüreg': 'A csalánozók egyetlen nyílással (száj- és végbélnyílás egyben) rendelkező, emésztést végző testüregre (gastrovascularis üreg).',
  'ektoderma': 'A csalánozók testfalának külső sejtrétege.',
  'entoderma': 'A csalánozók testfalának belső sejtrétege.',
  'diploblasztikus': 'Két csíralemezből (ektoderma, entoderma) felépülő testfelépítés, amely a csalánozókra jellemző.',
  'ideghálózat': 'Az egész testet behálózó, nem központosított idegsejt-rendszer, amely a csalánozóknál jelenik meg elsőként az állatvilágban.',
  'sugaras szimmetria': 'Olyan testszimmetria, amelynél a test középpontján átmenő bármely tengely mentén egyforma félre osztható (pl. a csalánozóknál).',

  // 3. modul, 13. fejezet: Laposférgek
  'laposférgek törzse': 'Az Állatok országának törzse, amelynek tagjai (pl. planária, mételyek, galandférgek) lapított, kétoldalian szimmetrikus, bőrizomtömlővel rendelkező testfelépítésűek.',
  'kétoldali szimmetria': 'Olyan testszimmetria, amelynél a test csak egyetlen síkban osztható két egyforma (tükörképi) félre - a laposférgeknél jelenik meg elsőként.',
  'bőrizomtömlő': 'A bőr és az alatta lévő izomrétegek egybefonódásából álló testfal, amely lehetővé teszi a test összehúzódását és a mozgást.',
  'parenchima': 'A laposférgek testében a szervek közötti teret kitöltő laza kötőszövet, amely a valódi testüreg hiányát pótolja.',
  'láng-sejt': 'A laposférgek kiválasztószervét (protonefridium) alkotó sejt, amely a fölösleges anyagok összegyűjtésében és kiürítésében vesz részt.',
  'planária': 'Szabadon élő, csillós kúszással mozgó laposféreg-faj, kiemelkedő regenerációs képességgel.',
  'galandféreg': 'Bélrendszer nélküli, a gazdaszervezet bélcsatornájában élősködő laposféreg, amely a testfelületén keresztül szívja fel a tápanyagot.',
  'neoblaszt': 'A laposférgek (pl. planária) testében szétszórtan elhelyezkedő, differenciálatlan sejt, amely bármelyik szövettípussá átalakulhat - a kiemelkedő regenerációs képesség sejtszintű alapja.',
  'mezoderma': 'A harmadik csíralemez, amely a laposférgeknél jelenik meg először - belőle fejlődik ki a valódi izomszövet és számos belső szerv.',
  'triploblasztikus': 'Három csíralemezből (ektoderma, mezoderma, entoderma) felépülő testfelépítés, amely a laposférgeknél jelenik meg először.',
  'cephalizáció': 'Az érzékszervek és az idegi irányítás (agydúc, idegkötegek) koncentrálódása a test elülső végén - a kétoldali szimmetriájú állatoknál jelenik meg.',

  // 3. modul, 14. fejezet: Gyűrűsférgek
  'gyűrűsférgek törzse': 'Az Állatok országának törzse, amelynek tagjai (pl. földigiliszta, piócák) szelvényezett testfelépítésűek, valódi testüreggel és zárt keringési rendszerrel rendelkeznek.',
  'szelvényezettség': 'A test ismétlődő, egymáshoz hasonló felépítésű gyűrűkből (szelvényekből) való felépülése - a gyűrűsférgeknél jelenik meg elsőként.',
  'testüreg': 'A mezoderma két rétege között kialakuló, folyadékkal telt üreg (coeloma), amely hidrosztatikus vázként funkcionál - a gyűrűsférgeknél jelenik meg elsőként.',
  'serte': 'A gyűrűsférgek testszelvényein található apró, tüskeszerű képlet, amely a mozgás során a talajban vagy az aljzatban való megkapaszkodást segíti.',
  'zárt keringési rendszer': 'Olyan keringési rendszer, amelyben a vér mindig erekben áramlik, nem szabadon a testüregben - a gyűrűsférgeknél jelenik meg elsőként.',
  'metanefridium': 'A gyűrűsférgek szelvényenként megismétlődő kiválasztószerve.',
  'nyeregöv': 'A hímnős gyűrűsférgek (pl. földigiliszta) testén található duzzanat (clitellum), amely a szaporodáshoz szükséges váladékot termeli.',
  'acoelomata': 'Valódi testüreg nélküli testfelépítés, amelynél a szervek közötti teret parenchima tölti ki (pl. a laposférgeknél).',

  // 3. modul, 15. fejezet: Rovarok
  'rovarok osztálya': 'Az Ízeltlábúak törzsének osztálya, amelynek tagjait kitines külső váz, három testtag (fej, tor, potroh) és három pár ízelt láb jellemzi.',
  'exoszkeleton': 'Kitinből álló, kemény, merev külső váz, amely a rovarok (és más ízeltlábúak) testét borítja - védelmet ad, de vedlést igényel a növekedéshez.',
  'trachea': 'A rovarok légzőrendszerének elágazó légzőcsöve, amely a légzőnyílásokon (stigmákon) keresztül közvetlenül a szövetekhez, sejtekhez szállítja az oxigént.',
  'nyílt keringési rendszer': 'Olyan keringési rendszer, amelyben a vér (hemolimfa) nem csak erekben, hanem szabadon a testüregben is áramlik - a rovarokra jellemző.',
  'malpighi-edény': 'A rovarok kiválasztószerve, amely a salakanyagokat közvetlenül a bélbe üríti.',
  'teljes átalakulás': 'Egyedfejlődési forma, amelynél a pete-lárva-báb-imágó szakaszok különülnek el (pl. lepkéknél).',
  'kevésbé teljes átalakulás': 'Egyedfejlődési forma, amelynél a pete-lárva-imágó szakaszok különülnek el, báb nélkül (pl. sáskáknál).',

  // 3. modul, 16. fejezet: Csigák
  'puhatestűek törzse': 'Az Állatok országának törzse, amelynek tagjait (pl. csigák, kagylók) lágy test, jellemzően köpeny és héj jellemzi.',
  'csigák osztálya': 'A Puhatestűek törzsének osztálya, amelynek tagjai fej-láb-zsigerzacskó testfelépítésűek, jellemzően csavart héjjal.',
  'köpeny': 'A puhatestűek zsigerzacskóját beborító szövet, amely a héjat elválasztja (kiválasztja), és köpenyüreget képez.',
  'köpenyüreg': 'A köpeny alatt kialakuló üreg, amely vízi csigáknál a kopoltyút, szárazföldi csigáknál egy tüdőként funkcionáló felületet rejt.',
  'radula': 'A csigák kitines, apró fogacskákkal borított táplálkozási szerve (reszelőnyelv), amellyel a táplálékot lekaparják vagy feldarabolják.',
  'torzió': 'A csigák egyedfejlődése során bekövetkező jelenség, amelynek során a zsigerzacskó és a köpenyüreg mintegy 180 fokban elcsavarodik a fej-láb tengelyhez képest.',
  'detorzió': 'Egyes csigacsoportoknál (pl. tengeri meztelen csigáknál) másodlagosan végbemenő részleges visszacsavarodás a torzióhoz képest, amely higiéniai hátrányokat csökkent.',

  // 3. modul, 17. fejezet: Kagylók
  'kagylók osztálya': 'A Puhatestűek törzsének osztálya, amelynek tagjait két, zsanérral összekapcsolt mészhéj, redukált fej és szűrögető táplálkozás jellemzi.',
  'zsanérszalag': 'A kagylók két héjlemezét összekötő rugalmas szalag, amely a záróizmok elernyedésekor nyitja szét a teknőket.',
  'szűrögető táplálkozás': 'A kagylókra jellemző táplálkozási mód, amelynek során a kopoltyún átáramló vízből szűrik ki a lebegő planktont és szerves törmeléket.',
  'veliger lárva': 'A kagylók (és más puhatestűek) szabadon úszó lárvaformája.',

  // 3. modul, 18. fejezet: Előgerinchúrosok
  'gerinchúrosok törzse': 'Az Állatok országának törzse (Chordata), amelynek tagjait - legalább egyedfejlődésük egy szakaszában - gerinchúr, háti csöves idegrendszer, kopoltyúrések és farok jellemzi.',
  'gerinchúr': 'A gerinchúrosok hát menti, rugalmas támasztóeleme (notochord), amely legalább az egyedfejlődés egy szakaszában minden tagnál megjelenik.',
  'neurális cső': 'A gerinchúrosokra jellemző, háti elhelyezkedésű, cső alakú idegrendszer.',
  'kopoltyúrés': 'A gerinchúrosok garatjában található nyílás, amely legalább az egyedfejlődés egy szakaszában minden tagnál megjelenik.',
  'tunikás': 'Az előgerinchúrosok másik neve, amely a kifejlett egyedet körülvevő, tunicin nevű anyagból álló köpenyre (tokra) utal.',

  // 3. modul, 19. fejezet: Fejgerinchúrosok
  'fejgerinchúrosok': 'A Gerinchúrosok törzsének csoportja (Cephalochordata, pl. a lándzsahal), amelynek tagjai egész életükben megőrzik mind a négy chordata-bélyeget.',
  'lándzsahal': 'A fejgerinchúrosok jellemző képviselője (Amphioxus), kis, áttetsző, lándzsa alakú testű, tengerfenéki, szűrve táplálkozó állat.',
  'miotóm': 'A fejgerinchúrosok (és a gerincesek) testében található, szelvényekre tagolt izomköteg, amely a hullámzó úszómozgást teszi lehetővé.',

  // 3. modul, 20. fejezet: Csontos halak
  'gerincesek altörzse': 'A Gerinchúrosok törzsének altörzse (Vertebrata), amelynek tagjainál a gerinchúrt csontos vagy porcos gerincoszlop váltja fel.',
  'csontos halak osztálya': 'A Gerincesek altörzsének osztálya (Osteichthyes), amelynek tagjait csontos pikkelyek, kopoltyú és úszóhólyag jellemzi.',
  'oldalvonal-szerv': 'A halak egyedi érzékszerve, amely a vízben terjedő rezgéseket és áramlásokat érzékeli.',
  'úszóhólyag': 'A csontos halak gázzal töltött szerve, amellyel a hal szabályozza a felhajtóerejét, és energiabefektetés nélkül lebeghet egy adott mélységben.',
  'porcos halak': 'A halak másik nagy csoportja (Chondrichthyes, pl. cápák, rájak), amelyeknek vázuk porcból épül fel, és nincs úszóhólyaguk.',
  'gerincoszlop': 'Egymáshoz kapcsolódó csontos (vagy porcos) elemekből (csigolyákból) álló, a gerinchúrt felváltó támasztóelem, amely a gerincesekre jellemző.',
  'csigolya': 'A gerincoszlopot felépítő, egymáshoz kapcsolódó csontos (vagy porcos) elem.',

  // 3. modul, 21. fejezet: Kétéltűek
  'kétéltűek osztálya': 'A Gerincesek altörzsének osztálya (Amphibia), amelynek tagjaira a kettős légzés, a háromüregű szív és az átalakulásos egyedfejlődés jellemző.',
  'bőrlégzés': 'A kétéltűek nedves, csupasz bőrén keresztül történő kiegészítő gázcsere, amely a tüdőlégzést egészíti ki.',
  'átalakulásos egyedfejlődés': 'Olyan egyedfejlődés, amelynek során a lárva radikális testfelépítés-váltással (metamorfózissal) alakul át kifejlett egyeddé, pl. az ebihal békává.',
  'kettős vérkör': 'Két, egymástól elkülönülő keringési kör (tüdő-vérkör és test-vérkör) megléte, amely a kétéltűeknél jelenik meg először a gerincesek sorában.',
  'háromüregű szív': 'A kétéltűekre jellemző szívtípus, amely két pitvarból és egy kamrából áll; a kamrában még keveredik az oxigénben gazdag és szegény vér.',
  'tüdő': 'A levegőből történő gázcserét végző légzőszerv, amely a kétéltűeknél jelenik meg először a gerincesek sorában, a bőrlégzést kiegészítve.',
  'amnion': 'Az embriót körülvevő magzatburok, amely a hüllők, madarak és emlősök tojásában/méhében véd a kiszáradástól; a kétéltűek ikrájából ez még hiányzik.',

  // 3. modul, 22. fejezet: Hüllők
  'hüllők osztálya': 'A Gerincesek altörzsének osztálya (Reptilia), amelynek tagjaira a száraz, szaruréteges bőr, a kizárólagos tüdőlégzés és az amniota tojás jellemző.',
  'szaruréteg': 'A hüllők bőrét borító, keratinból álló, vízzáró réteg, amely megakadályozza a kiszáradást, de gátolja a bőrlégzést.',
  'ektoterm szabályozás': 'Olyan testhőmérséklet-szabályozás, amelynél az állat testhőmérséklete a környezeti hőmérséklettől függ (pl. hüllőknél, kétéltűeknél, halaknál).',
  'jacobson-szerv': 'A szájpadláson elhelyezkedő kémiai érzékszerv, amelyet egyes hüllők (pl. kígyók) a nyelvükkel gyűjtött illatanyagok érzékelésére használnak.',
  'amniota tojás': 'Magzatburokkal (amnionnal) és szilárd héjjal védett tojás, amely a hüllőknél jelenik meg először, és lehetővé teszi a szaporodás teljes függetlenedését a víztől.',
  'részlegesen elkülönült kamra': 'A hüllők szívkamráját részben kettéosztó válaszfal, amely csökkenti (de nem szünteti meg) az oxigénben gazdag és szegény vér keveredését.',
  'húgysav': 'Szilárd, alig vízoldékony nitrogéntartalmú bomlástermék, amelyet a hüllők (és a madarak) választanak ki; kevesebb vizet igényel, mint az ammónia vagy a karbamid kiválasztása.',

  // 3. modul, 23. fejezet: Madarak
  'madarak osztálya': 'A Gerincesek altörzsének osztálya (Aves), amelynek tagjaira a repülésre specializálódott testfelépítés, a tollazat, az állandó testhőmérséklet és a négyüregű szív jellemző.',
  'tollazat': 'A madarak szaruból (keratinból) felépülő, módosult pikkelyekből kialakult kültakarója, amely a repülési felületet és a hőszigetelést egyaránt biztosítja.',
  'légzsák': 'A madarak tüdejéhez kapcsolódó, levegővel telt hártyás zsákrendszer, amely az egyirányú levegőáramlást (kettős légzést) teszi lehetővé.',
  'zúzógyomor': 'A madarak fogatlansága miatt kialakult gyomorszakasz, amely gyakran lenyelt kavicsok segítségével őrli meg a táplálékot.',
  'endotermia': 'Az állandó, magas testhőmérséklet fenntartása a szervezet saját anyagcseréje (hőtermelése) révén, függetlenül a környezeti hőmérséklettől; a madaraknál jelenik meg először a gerincesek sorában.',
  'négyüregű szív': 'Két pitvarból és két, teljesen elkülönült kamrából álló szívtípus, amely teljesen megakadályozza az oxigénben gazdag és szegény vér keveredését; a madaraknál jelenik meg először.',
  'kettős légzés': 'A madarak légzsákos tüdejére jellemző, egyirányú levegőáramlást biztosító légzési mód, amely hatékonyabb gázcserét tesz lehetővé, mint a kétirányú tüdőlégzés.',

  // 3. modul, 24. fejezet: Emlősök
  'emlősök osztálya': 'A Gerincesek altörzsének osztálya (Mammalia), amelynek tagjaira a szőrzet, a tejmirigy, a differenciált fogazat és (a kloákások kivételével) az elevenszülés jellemző.',
  'szőrzet': 'Az emlősök keratinból felépülő, hőszigetelő szerepű szálas kültakarója; a madarak tollazatával konvergens módon, attól függetlenül alakult ki.',
  'heterodont fogazat': 'Metsző-, szem- és zápfogakra tagolódó, differenciált fogazat, amely lehetővé teszi a táplálék szájban történő mechanikai előfeldolgozását (rágást); az emlősökre jellemző.',
  'rekeszizom': 'Az emlősök mellüreget a hasüregtől elválasztó izmos lemeze, amely összehúzódásával hatékony tüdőszellőzést biztosít.',
  'tejmirigy': 'Az emlősök bőrmirigyekből kialakult szerve, amely az utódok táplálására szolgáló tejet termeli; erről kapta nevét az osztály (Mammalia).',
  'méhlepény (placenta)': 'Az anya és a magzat közötti anyagcserét biztosító szerv a méhlepényes emlősök méhében, amelyen keresztül az embrió táplálékot és oxigént kap.',
  'kloákások': 'Tojásrakó emlősök csoportja (pl. kacsacsőrű emlős), amelyeknél a szaporodás még a hüllőkéhez hasonló, de utódaikat tejjel táplálják.',
  'erszényesek': 'Méhlepény nélkül szaporodó emlősök csoportja (pl. kenguru), amelyeknél az utód korán megszületik, és fejlődését az anya erszényében fejezi be.',
  'nagyagykéreg': 'Az emlősagy legfejlettebb, redőzött felszínű része, amely az összetett viselkedést, tanulást és érzékelést teszi lehetővé.',

  // 3. modul, 25. fejezet: Növényi szövetek
  'bőrszövet': 'A növény felszínét borító állandósult szövet, amely védelmet nyújt a kiszáradás és a kórokozók ellen; sejtjeit gyakran viaszos kutikula fedi.',
  'alapszövet': 'A növény tápanyagkészítő (asszimilációs) állandósult szövete, amelynek sejtjei klorofillt tartalmaznak, és fotoszintézist végeznek.',
  'kutikula': 'A növényi bőrszövet felszínét borító, vízzáró viaszréteg, amely csökkenti a párolgást és védi a szövetet a kiszáradástól.',
  'kristályzárvány': 'Növényi sejtekben felhalmozódó, jellemzően kalcium-oxalátból álló kristályos képződmény, amely anyagcsere-melléktermékként keletkezik, és védelmi szerepet is betölthet.',
  'kambium': 'Oldalirányú (másodlagos) osztódószövet, amely a szár és a gyökér vastagságnövekedéséért felelős, és a fás szár kialakulásának alapja.',
  'totipotencia': 'Az osztódószövet sejtjeinek azon képessége, hogy megfelelő körülmények között egyetlen sejtből is teljes, önálló növény regenerálódhat; a szövettenyésztéses klónozás alapja.',

  // 3. modul, 26. fejezet: Gyökér, szár, levél
  'gyökérsüveg': 'A gyökércsúcs osztódószövetét védő szövetréteg, amely a talajban történő növekedés közben véd a mechanikai sérülésektől.',
  'gyökérszőrös zóna': 'A gyökér azon szakasza, ahol a gyökérszőrök a legsűrűbben helyezkednek el, jelentősen megnövelve a víz- és tápanyagfelvételre alkalmas felületet.',
  'lágy szár': 'Olyan növényi szár, amelynél nincs (vagy csak korlátozott) másodlagos vastagodás, ezért rugalmas és hajlékony marad egész életében.',
  'fás szár': 'Olyan növényi szár, amelynél a kambium folyamatos működése másodlagos vastagodást (évgyűrűk kialakulását) eredményez.',
  'évgyűrű': 'A fás szárban a kambium szezonálisan eltérő aktivitása miatt kialakuló, évente egy rétegként megjelenő gyűrűzet, amelyből a fa kora megbecsülhető.',
  'levéllemez': 'A lomblevél lapos, kiszélesedett része, amely a fotoszintézis fő helyszíne.',
  'oszlopos alapszövet': 'A levél felső részén elhelyezkedő, klorofillban gazdag alapszövet-típus, amelyben a fotoszintézis nagy része zajlik.',
  'szivacsos alapszövet': 'A levél alsó részén elhelyezkedő, sejtközötti járatokkal átszőtt alapszövet-típus, amely a gázok levélen belüli áramlását segíti.',
  'xerofita': 'Száraz élőhelyekhez anatómiailag alkalmazkodott növény (pl. vastag kutikula, csökkent levélfelület), amely csökkenti a vízveszteséget.',
  'hidrofita': 'Vízi élőhelyekhez anatómiailag alkalmazkodott növény, amelyre vékony kutikula, kevés gázcserenyílás és nagy légjáratok jellemzők.',
  'léggyökér': 'Módosult gyökér, amely a levegőből is képes nedvességet felvenni; egyes trópusi növényekre jellemző.',
  'szárgumó': 'Módosult, föld alatti szár, amely tartalék tápanyagot (jellemzően keményítőt) halmoz fel, pl. a burgonyánál.',

  // 3. modul, 27. fejezet: Növényi anyagszállítás
  'gázcserenyílás': 'Két zárósejt által közrefogott apró nyílás a növény bőrszövetén (elsősorban a levél alsó felszínén), amely a gázcserét és a párologtatást szabályozza.',
  'zárósejt': 'A gázcserenyílást körülvevő, turgornyomás-változással a nyílás méretét szabályozó növényi sejt.',
  'transzspiráció': 'A víz gázcserenyíláson keresztüli elpárologtatása a levél felszínéről; a vízszállítás egyik legfontosabb hajtóereje.',
  'gyökérnyomás': 'A gyökérsejtek aktív, ozmotikus anyagfelvételéből eredő nyomás, amely alulról segíti a víz felfelé áramlását a szállítószövetben.',
  'kapillaritás': 'A vízmolekulák kohéziójából és adhéziójából eredő jelenség, amely a szállítószövet vékony csövecskéiben felfelé húzza a vizet.',
  'ozmotikus szívóerő': 'A párologtatás által a szállítószövet vízoszlopában keltett szívóhatás, amely a víz gyökértől a levelekig tartó szállításának legfontosabb hajtóereje.',

  // 3. modul, 28. fejezet: Virág és termés
  'porzó': 'A virág hímivarszerve, amely a pollent termelő portokból és az azt tartó porzószálból áll.',
  'termő': 'A virág nőivarszerve, amely a bibéből, a bibeszálból és a magházból épül fel.',
  'virágzat': 'Egy hajtáson jellegzetes elrendezésben csoportosuló virágok összessége, pl. a kukorica bugavirágzata.',
  'egyivarú virág': 'Olyan virág, amely csak porzókat (hímvirág) vagy csak termőt (nővirág) tartalmaz.',
  'kétivarú virág': 'Olyan virág, amelyben mind a porzók, mind a termő megtalálható.',
  'egylaki növény': 'Olyan növényfaj, amelynek hím- és nővirágai ugyanazon az egyeden, csak eltérő helyen találhatók (pl. kukorica, uborka).',
  'kétlaki növény': 'Olyan növényfaj, amelynek hím- és nővirágai külön-külön egyedeken fejlődnek (pl. fűzfa, kender).',
  'fotoperiodizmus': 'A nappal (illetve az éjszaka) hosszának hatása a növény életműködéseire, elsősorban a virágzás időzítésére.',
  'rövidnappalos növény': 'Olyan növény, amely csak akkor virágzik, ha a nappal egy kritikus hossznál rövidebb (jellemzően ősszel).',
  'hosszúnappalos növény': 'Olyan növény, amely csak akkor virágzik, ha a nappal egy kritikus hossznál hosszabb (jellemzően tavasszal-nyáron).',
  'termésfal': 'A magházfalból fejlődő, a magot körülvevő termésrész.',
  'áltermés': 'Olyan termés, amelynek kialakításában a magházfalon kívül más virágrész (pl. a vacok) is részt vesz, pl. az alma esetében.',
  'vacok': 'A virág alapját alkotó, kiszélesedett szártag, amely egyes növényeknél (pl. alma) a termés kialakításában is részt vesz.',

  // 3. modul, 29. fejezet: Növényi szaporodás és növekedésszabályozás
  'vegetatív szaporodás': 'Ivartalan szaporodási mód, amelynek során a szülő növény egy testrészéből (gyökér, szár, levél) - megtermékenyítés nélkül - fejlődik ki egy új, genetikailag azonos egyed.',
  'tősarj': 'Az anyanövény tövéből kinövő, önálló gyökérzetet fejlesztő hajtás, amely a vegetatív szaporodás egyik természetes formája.',
  'dugványozás': 'Ivartalan szaporítási mód, amelynek során egy levágott szár- vagy levéldarabot gyökereztetnek meg, hogy abból teljes új növény fejlődjön.',
  'oltás': 'Ivartalan szaporítási mód, amelynek során egy értékes fajta ágát (nemes ág) egy másik, ellenállóbb gyökérzetű növénybe (alany) illesztik be.',
  'szemzés': 'Az oltáshoz hasonló ivartalan szaporítási mód, amelynek során egyetlen rügyet ültetnek át az alany növénybe.',
  'klónozás': 'A totipotencia elvét kihasználó szaporítási eljárás, amelynek során a növény osztódó szövetének egyetlen sejtjéből szövettenyésztéssel genetikailag azonos új egyed nevelhető fel.',
  'csírázás': 'A mag fejlődésének megindulása, amelyhez külső (hőmérséklet, víz, oxigén, fény) és belső (életképes embrió, a nyugalmi állapot megszűnése) feltételek egyaránt szükségesek.',
  'nyugalmi állapot': 'Olyan időszak, amikor a mag vagy a rügy nem fejlődik tovább, annak ellenére, hogy a külső körülmények egyébként kedvezőek lehetnének; hormonálisan szabályozott állapot.',
  'auxin': 'A növények egyik legfontosabb hormoncsoportja, amely a hajtáscsúcs-dominanciát, a tropizmusokat és a gyökeresedést szabályozza.',
  'hajtáscsúcs-dominancia': 'Az a jelenség, amikor a hajtáscsúcsban termelődő auxin gátolja az oldalrügyek kihajtását.',
  'fototropizmus': 'A növény fény irányába történő növekedési válasza, amelyet az auxin egyenlőtlen eloszlása okoz.',
  'geotropizmus': 'A növény gyökerének és hajtásának a nehézségi erő irányához igazodó növekedési válasza, amelyet az auxin egyenlőtlen eloszlása okoz.',

  // 3. modul, 30. fejezet: Állati szövetek
  'vázizom': 'Harántcsíkolt izomszövet-típus, amely a csontvázhoz kapcsolódva az akaratlagos mozgást biztosítja.',
  'csontszövet': 'Ásványi anyagokkal átitatott, rendkívül szilárd kötőszövet-típus, amely a testtartást és a belső szervek védelmét szolgálja.',
  'simaizom': 'Akaratlanul összehúzódó, harántcsíkolatot nem mutató izomszövet-típus, amely a belső szervek (pl. bélcsatorna, erek) mozgatásáért felelős.',
  'szívizom': 'Harántcsíkolt, de akaratlanul, önállóan és ritmikusan összehúzódó izomszövet-típus, amely kizárólag a szívben található.',
  'csillós hám': 'Csillókkal borított hámszövet-típus, amely a csillók összehangolt mozgásával anyagokat továbbít a felszínén (pl. a légutakban).',
  'üvegporc': 'Sima, rugalmas, nyomásra ellenálló kötőszövet-típus, amely rostokat nem tartalmazó mátrixból épül fel, pl. az ízületi felszíneken.',

  // 3. modul, 31. fejezet: Szaporodás és egyedfejlődés
  'petesejt': 'A nőivarú egyed ivarsejtje: nagyméretű, mozdulatlan, tartalék tápanyagot (szikanyagot) raktároz.',
  'hímivarsejt': 'A hímivarú egyed ivarsejtje: apró, jellemzően ostoros, mozgékony sejt, amely a petesejt megtermékenyítésére specializálódott.',
  'zigóta': 'A megtermékenyítés során a hímivarsejt és a petesejt egyesüléséből létrejövő, osztatlan sejt - az új egyed egyedfejlődésének kiindulópontja.',
  'hímnősség': 'Az a jelenség, amikor egyetlen egyed mindkét ivarsejttípust (petesejtet és hímivarsejtet is) képes termelni, pl. a földigilisztánál vagy a csigák nagy részénél.',
  'váltivarúság': 'Az a jelenség, amikor egy adott egyed csak az egyik ivarsejttípust termeli, azaz az egyedek ivarilag elkülönültek.',
  'ivari kétalakúság': 'A hím és a nő egyedek külső megjelenésében (pl. szín, méret, dísz) megnyilvánuló különbség (nemi dimorfizmus).',
  'embrionális fejlődés': 'Az egyedfejlődés megtermékenyítéstől a születésig (kikelésig) tartó szakasza, amely alatt kialakulnak az alapvető szervrendszerek.',
  'posztembrionális fejlődés': 'Az egyedfejlődés születés (kikelés) utáni szakasza, amely alatt az egyed eléri a kifejlett állapotot.',
  'regeneráció': 'Elvesztett testrész újranövesztésének, vagy akár egy leszakadt testrészből teljes új egyed kialakulásának képessége.',
  'parthenogenezis': 'Szaporodási mód, amelynek során a petesejtből megtermékenyítés nélkül fejlődik ki új egyed (szűznemzés).',

  // Állati viselkedés modul, 1. fejezet: Öröklött és tanult magatartásformák
  'öröklött magatartásforma': 'Genetikailag kódolt, tanulás nélkül is megjelenő, fajra jellemző, kiszámítható lefolyású viselkedésforma.',
  'tanult magatartásforma': 'Egyedi tapasztalat vagy környezeti hatás eredményeként kialakuló, egyedenként eltérő, az élet során módosulható viselkedésforma.',
  'kritikus periódus': 'Az egyedfejlődés genetikailag meghatározott, korlátozott időszaka, amely alatt egy adott tanulási folyamat (pl. az énekmintázat elsajátítása) végbemehet.',

  // Állati viselkedés modul, 2. fejezet: Önfenntartással kapcsolatos viselkedések
  'tájékozódási viselkedés': 'Az állat útkeresését, élőhelyén és táplálékforrásaihoz vagy fészkéhez való eligazodását szolgáló magatartásforma.',
  'táplálkozási magatartás': 'A táplálékkeresést, -elfogást és -feldolgozást szolgáló viselkedésformák összessége.',
  'menekülési viselkedés': 'A ragadozók elől való elmenekülést szolgáló magatartásforma.',
  'thanatózis': 'Az elhullott állat állapotát imitáló, "tettető halál" védekezési stratégia, amellyel egyes fajok (pl. az oposszum) elveszik a ragadozó érdeklődését.',
  'védekező viselkedés': 'A ragadozókkal vagy más veszélyforrásokkal szembeni testi és viselkedésbeli védekezési stratégiák összessége.',
  'álcázás': 'Az állat testfelépítésének vagy színezetének a környezethez való hasonlítása, amely megnehezíti a ragadozók (vagy a zsákmány) általi felismerést.',
  'batesi mimikri': 'Olyan mimikri, amelynél egy védtelen faj egy védett faj külsejét utánozza, ezzel megtévesztve a ragadozókat.',
  'müller-féle mimikri': 'Olyan mimikri, amelynél két vagy több, egymástól függetlenül is védett faj hasonló megjelenése kölcsönösen erősíti a ragadozók tanulási hatását.',

  // Állati viselkedés modul, 3. fejezet: Fajfenntartással kapcsolatos viselkedések
  'udvarlás': 'A partnerkeresést és a párzási hajlandóság kölcsönös jelzését szolgáló magatartásforma.',
  'párzás': 'A megtermékenyítéshez vezető viselkedés, amelyet gyakran a hímek közötti versengés előz meg.',
  'ivadékgondozás': 'A szülők utódaik túlélési esélyét növelő viselkedése, amelynek mértéke fajonként igen eltérő.',
  'altruizmus': 'Önzetlen viselkedés, amelynek során az egyed saját érdekeit (akár túlélési esélyét) háttérbe szorítva segít rokonain.',
  'agresszió': 'A fajtársak közötti, jellemzően korlátozott erőforrásokért (táplálék, territórium, partner) folyó versengésből fakadó magatartásforma.',
  'dominanciahierarchia': 'Egy csoporton belüli rangsor, amely szabályozza az erőforrásokhoz és a szaporodási lehetőségekhez való hozzáférést.',
  'rokonszelekció': 'Evolúciós elmélet, amely szerint az önzetlen viselkedés azért alakulhatott ki, mert a rokonok megsegítése a közös génállomány továbbörökítését szolgálja.',

  // Állati viselkedés modul, 4. fejezet: Veleszületett magatartásformák
  'feltétlen reflex': 'Egy adott ingerre adott, veleszületett, gyors és egyszerű válasz, amely tanulás nélkül, minden egyeden azonos módon zajlik le.',
  'irányított mozgás': 'Az egész állat ingerforrás felé (pozitív taxis) vagy attól elfelé (negatív taxis) történő mozgása.',
  'öröklött mozgásmintázat': 'Összetett, több lépésből álló, sztereotip mozgássorozat, amely egy kulcsinger hatására elindulva a maga teljességében lezajlik, akkor is, ha a kiváltó inger időközben megszűnik.',
  'reflexív': 'A feltétlen reflexek idegrendszeri alapja: az érző idegsejttől a gerincvelőn (vagy agytörzsön) át a mozgató idegsejtig, majd az effektorig vezető ingerületi útvonal.',
  'effektor': 'A választ ténylegesen végrehajtó szerv (izom vagy mirigy) egy reflexívben.',

  // Állati viselkedés modul, 5. fejezet: Tanult magatartásformák
  'bevésődés': 'Fiatal állatnál egy korai, kritikus periódusban kialakuló, tartós kötődés egy adott ingerhez (jellemzően a szülőhöz).',
  'érzékenyítés': 'Ismétlődő, erős vagy veszélyes inger hatására a válaszkészség fokozatos erősödése.',
  'megszokás': 'Ismétlődő, veszélytelen inger hatására a válaszkészség fokozatos csökkenése, akár megszűnése.',
  'feltételes reflex': 'Egy eredetileg semleges inger és egy feltétlen inger ismételt együttes bemutatása után kialakuló, tanult inger-válasz kapcsolat (klasszikus kondicionálás).',
  'operáns tanulás': 'Olyan tanulási forma, amelynél a viselkedés következménye (jutalom vagy büntetés) határozza meg a viselkedés jövőbeli gyakoriságát.',
  'belátásos tanulás': 'A legösszetettebb tanulási forma, amelynél az állat egy problémát próba-szerencse nélkül, korábbi tapasztalatok hirtelen kombinálásával old meg.',
  'megfigyeléses tanulás': 'Olyan tanulási forma, amelynél az állat mások viselkedésének megfigyelésével, saját próbálkozás nélkül sajátít el új viselkedésformákat.',

  // Állati viselkedés modul, 6. fejezet: Motiváció és kulcsinger
  'motiváció': 'Az állat belső fiziológiai állapota, amely befolyásolja, hogy egy adott inger mennyire váltja ki a rá jellemző viselkedést.',
  'kulcsinger': 'Egy inger azon specifikus, jellegzetes tulajdonsága, amely önmagában is képes kiváltani egy adott, jellemzően öröklött viselkedést.',
  'szuperinger': 'Mesterségesen létrehozott vagy ritkán előforduló inger, amely a kulcsinger jellemzőit eltúlzott mértékben tartalmazva az eredetinél is erősebb választ vált ki.',

  // 4. modul, 1. fejezet: Homeosztázis
  'negatív visszacsatolás': 'Szabályozási elv, amelynél egy mért paraméter (pl. testhőmérséklet) normál tartománytól való eltérése olyan folyamatokat indít el, amelyek az eltérést csökkentik.',
  'kiválasztás': 'A szervezet anyagcseréje során keletkező, felesleges vagy káros bomlástermékek (salakanyagok) eltávolítása a szervezetből.',
  'külső elválasztás': 'Mirigyműködési forma (exokrin), amelynél a váladék a testfelszínre vagy egy testüregbe ürül, pl. a verejtékmirigynél vagy a nyálmirigynél.',
  'belső elválasztás': 'Mirigyműködési forma (endokrin), amelynél a váladék (hormon) közvetlenül a vérbe kerül, és onnan jut el a célszervekhez.',
  'önvizsgálat': 'Az egyén által rendszeresen végzett, betegségek (pl. daganatos elváltozások) korai felismerését célzó vizsgálat, pl. az anyajegyek ellenőrzése.',
  'újraélesztés': 'Az eszméletlen, nem lélegző személynél alkalmazott alapfokú elsősegélynyújtási eljárás, amelynek része a segélyhívás és a mellkaskompressziók végzése.',

  // 4. modul, 2. fejezet: Bőr
  'felhám': 'A bőr külső rétege (epidermisz), amely többrétegű elszarusodott laphámból épül fel, és a testet a külvilágtól választja el.',
  'irha': 'A bőr középső rétege (dermisz), amely kötőszövetből áll, és amelyben az erek, receptorok, mirigyek és szőrtüszők találhatók.',
  'verejtékmirigy': 'A bőr mirigye, amely vizes, sótartalmú váladékával (verejtékkel) hűti a testet és kisebb mennyiségű salakanyagot is eltávolít.',
  'faggyúmirigy': 'A bőr mirigye, amely zsíros váladékával (faggyúval) vékony, védő, vízzáró réteget von a bőr és a szőrszálak felszínére.',
  'melanocita': 'A felhámban elhelyezkedő festéksejt, amely a melanin nevű bőrpigmentet termeli.',
  'melanin': 'A melanociták által termelt bőrpigment, amely elnyeli az ultraibolya sugárzás egy részét, védve a mélyebb bőrrétegeket.',
  'tapintóreceptor': 'A bőrben elhelyezkedő, nyomásra, rezgésre vagy finom érintésre érzékeny érzékelő szerkezet.',

  // 4. modul, 3. fejezet: A bőr gondozása, védelme
  'anyajegy': 'A festéksejtek (melanociták) helyi felszaporodásából keletkező, jellemzően jóindulatú bőrelváltozás.',
  'szemölcs': 'Humán papillomavírus (HPV) fertőzés által okozott, jóindulatú, de fertőző bőrelváltozás.',
  'mitesszer': 'A faggyúmirigy nyílásának elhalt hámsejtekkel és faggyúval történő eltömődéséből kialakuló bőrelváltozás.',
  'pattanás': 'Gyulladásossá vált mitesszer, amely baktériumok elszaporodása miatt alakul ki.',
  'vízhólyag': 'A felhám rétegeinek elválásából és a köztük felgyülemlő szövetnedvből keletkező bőrelváltozás, pl. dörzsölés vagy enyhébb égés hatására.',
  'vérhólyag': 'Az irha ereit is érintő, mélyebb sérülésnél kialakuló, vérrel telt hólyag.',
  'égési sérülés': 'A bőr hő hatására bekövetkező sérülése, amely megszünteti a bőr védőfunkcióját és jelentős folyadékvesztéssel járhat.',

  // 4. modul, 4. fejezet: Vázrendszer
  'csontváz': 'A test csontos-porcos vázrendszere, amely tartást, védelmet, mozgást, vérképzést és ásványianyag-raktározást biztosít.',
  'agykoponya': 'A koponya azon része, amely az agyat védő, közvetlenül egymáshoz illeszkedő lapos csontokból áll.',
  'arckoponya': 'A koponya azon része, amelynek csontjai (pl. orrcsont, járomcsont, állcsontok) az arc formáját és a rágás szervi hátterét adják.',
  'ízület': 'Két vagy több csont szabad mozgást lehetővé tevő kapcsolódási pontja, amelyet ízületi tok, ízületi porc és ízületi folyadék épít fel.',
  'kollagén': 'Rostos szerkezetű fehérje, amely a csont (és más kötőszövetek) rugalmasságáért felelős.',
  'vállöv': 'A felső végtagot a törzshöz kapcsoló függesztőöv, amelyet a kulcscsont és a lapocka alkot.',
  'medenceöv': 'Az alsó végtagot a törzshöz kapcsoló függesztőöv, amelyet a csípőcsont alkot.',
  'oszteoporózis': 'Csontritkulás: olyan állapot, amelyben a csontok ásványianyag-tartalma és sűrűsége kórosan lecsökken, ezáltal törékennyé válnak.',

  // 4. modul, 5. fejezet: Izomrendszer
  'izomköteg': 'Több izomrostot (izomsejtet) összefogó egység a vázizom felépítésében.',
  'izompálya': 'Több izomköteg együttese, amely a szabad szemmel is látható, teljes izmot alkotja.',
  'ín': 'Az izmot a csonthoz rögzítő, szívós kötőszöveti képlet.',
  'izomtónus': 'Az izom nyugalmi állapotban is fennálló, enyhe feszülési állapota, amely a testtartás fenntartásában és a mozgások előkészítésében játszik szerepet.',
  'aktin': 'A vázizomsejtekben található, a miozinnal együtt az izomösszehúzódásért felelős fehérje.',
  'miozin': 'A vázizomsejtekben található, az aktinnal együtt az izomösszehúzódásért felelős fehérje.',
  'kreatin-foszfát': 'Az izomsejtek saját energiatároló molekulája, amely az ATP gyors pótlását segíti.',
  'mioglobin': 'Az izomsejtek oxigéntároló fehérjéje, amely a vázizom jellegzetes vörös színéért is felelős.',

  // 4. modul, 6. fejezet: A mozgási rendszer egészségtana
  'törés': 'A csont folytonosságának megszakadása, amelyet erős fájdalom, duzzanat, deformitás és mozgásképtelenség kísér.',
  'gerincsérülés': 'A gerincoszlop sérülése, amely veszélyes, mert a benne futó gerincvelő is károsodhat, érzészavart vagy bénulást okozva.',
  'ficam': 'Az ízületi felszínek átmeneti, kóros kimozdulása egymáshoz képest, amelyet erős fájdalom, deformitás és mozgásképtelenség kísér.',
  'csípőficam': 'A csípőízület kóros helyzete, amely lehet veleszületett fejlődési rendellenesség vagy sérülés következménye; jelei közé tartozik az aszimmetrikus lábhossz és a csípő korlátozott mozgathatósága.',
  'rándulás': 'Az ízületet stabilizáló szalagok átmeneti túlnyúlása vagy kisebb szakadása, tartós csontelmozdulás nélkül.',
  'lúdtalp': 'A lábboltozat kóros belapulása, amely kedvezőtlenné teszi a lábfej terhelés-elosztását.',
  'gerincferdülés': 'A gerincoszlop kóros, oldalirányú elgörbülése (scoliosis).',
  'anabolikus szteroid': 'Hormonális hatású, tiltott teljesítményfokozó szer, amelynek szakszerűtlen használata súlyos, akár visszafordíthatatlan károsodásokat okozhat.',

  // 4. modul, 7. fejezet: Táplálkozás
  'táplálék': 'A szervezetbe felvett étel, amely még emésztésre vár, mielőtt a szervezet ténylegesen fel tudná használni alkotórészeit.',
  'tápanyag': 'A táplálék emésztés révén felszabadított alkotórésze (szénhidrát, fehérje, zsír, vitamin, ásványi anyag, víz), amelyet a szervezet fel tud szívni és hasznosítani tud.',
  'bélperisztaltika': 'A bélcsatorna falában lévő izomzat hullámszerű összehúzódása, amely a táplálékot a tápcsatornán végig továbbmozgatja.',
  'testtömegindex': 'A testtömeg (kg) és a testmagasság négyzetének (m²) hányadosa; tájékoztató jellegű mutató, amely nem veszi figyelembe a testösszetételt.',
  'alapanyagcsere': 'A szervezet teljes nyugalmi állapotban is elhasznált legkisebb energiamennyisége, amely az alapvető élettani működések fenntartásához szükséges.',

  // 4. modul, 8. fejezet: Emésztés
  'fogképlet': 'A fogak típusát és számát negyedenként megadó jelölés; felnőtt embernél negyedenként 2 metsző-, 1 szem-, 2 kis- és 3 nagyőrlőfog.',
  'pepszin': 'A gyomorban termelődő, fehérjebontó enzim, amely erősen savas kémhatáson fejti ki hatását.',
  'pepszinogén': 'A pepszin inaktív előanyaga, amelyet a gyomor sósava aktivál.',
  'amiláz': 'A nyálmirigyekben és a hasnyálmirigyben termelődő enzim, amely a keményítőt bontja.',
  'hasnyál': 'A hasnyálmirigy által termelt, lúgos kémhatású emésztőnedv, amely mind a négy fő tápanyagcsoport bontásához tartalmaz enzimeket.',
  'epe': 'A máj által termelt, az epehólyagban tárolt váladék, amely nem enzim, hanem a zsírok emulgeálásával segíti azok bontását.',
  'laktáz': 'A vékonybél nyálkahártyájában termelődő enzim, amely a tejcukrot (laktózt) glükózra és galaktózra bontja.',
  'lipáz': 'A hasnyálmirigyben termelődő enzim, amely az emulgeált zsírokat (trigliceridek) zsírsavakra és glicerinre bontja.',
  'nukleáz': 'A hasnyálmirigyben termelődő enzim, amely a nukleinsavakat (DNS, RNS) kisebb egységekre bontja.',
  'tripszin': 'A hasnyálmirigyben inaktív előanyagként termelődő, a vékonybélben aktiválódó enzim, amely a fehérjebontást folytatja az aminosavakig.',

  // 4. modul, 9. fejezet: Felszívódás
  'bélbolyh': 'A vékonybél belső falát beborító, ujjszerű nyúlvány, amely hatalmasra növeli a felszívó felületet.',
  'vastagbél': 'A tápcsatorna azon szakasza, amely a fel nem szívódott anyagokból visszaszívja a vizet és az ásványi anyagokat, tömörítve a székletet.',
  'máj': 'Sokrétű szerepű mirigyes szerv: emésztőnedvet (epét) termel, fehérjét, glükózt és glikogént szintetizál, tápanyagokat raktároz, és méregtelenít.',
  'bélflóra': 'A vastagbélben élő, hatalmas számú baktérium, amelyek egy része mutualista kapcsolatban él a szervezettel (pl. K-vitamint termel).',
  'dezaminálás': 'Az aminosavak feleslegének a májban történő lebontása, amely során a nitrogéntartalmú rész karbamiddá alakul.',
  'bilirubin': 'A lebontott vörösvértestekből származó festékanyag, amelyet a máj dolgoz fel és választ ki az epével.',
  'sárgaság': 'A bőr és a szemfehérje sárgás elszíneződése, amelyet a vérben felhalmozódó bilirubin okoz, jellemzően a máj működési zavara miatt.',

  // 4. modul, 10. fejezet: A táplálkozás szabályozása
  'éhségérzet': 'A vércukorszint csökkenése és a gyomor kiürülése által kiváltott érzet, amely táplálékfelvételre ösztönöz.',
  'szomjúságérzet': 'A testfolyadékok ozmotikus koncentrációjának megemelkedése által kiváltott érzet, amely folyadékfelvételre ösztönöz.',
  'minőségi éhezés': 'Olyan éhezési forma, amikor a táplálék mennyisége elegendő, de valamely tápanyag (pl. fehérje, vitamin) tartósan hiányzik belőle.',
  'mennyiségi éhezés': 'Olyan éhezési forma, amikor általánosan, tartósan túl kevés az elfogyasztott táplálék energiatartalma.',
  'ghrelin': 'A gyomor által üres állapotban termelt hormon, amely a hipotalamuszra hatva éhségérzetet vált ki.',
  'leptin': 'A zsírszövet által termelt hormon, amely a jóllakottság érzetét erősíti, csökkentve a táplálékfelvétel iránti igényt.',

  // 4. modul, 11. fejezet: Táplálkozás egészségtana
  'vitaminhiány': 'Egy adott vitamin tartós, elégtelen bevitele vagy felszívódása miatt kialakuló állapot, amely jellegzetes hiánytünetekkel jár.',
  'alultápláltság': 'Elégtelen energia- és/vagy tápanyagbevitel miatt kialakuló állapot, amely legyengült immunrendszerhez és fejlődési elmaradáshoz vezethet.',
  'túltápláltság': 'Tartósan a szükségletnél nagyobb energiabevitel miatt kialakuló állapot, amely elhízáshoz és anyagcsere-betegségekhez vezethet.',
  'élelmiszer-tartósítás': 'Az élelmiszerek eltarthatóságát növelő eljárások (pl. hűtés, fagyasztás, szárítás), amelyek a mikroorganizmusok szaporodását gátolják.',
  'e-vitamin': 'Zsírban oldódó vitamin, amely antioxidánsként védi a sejtmembránok zsírsavait a károsító oxidációtól.',
  'k-vitamin': 'Zsírban oldódó vitamin, amely nélkülözhetetlen a véralvadási folyamatban részt vevő fehérjék előállításához.',
  'b1-vitamin': 'Vízben oldódó vitamin (tiamin), amely a szénhidrát-anyagcsere egyik kulcsfontosságú koenzimjének alkotórésze.',
  'b6-vitamin': 'Vízben oldódó vitamin, amely az aminosav-anyagcsere számos lépésében vesz részt koenzimként.',
  'zsírban oldódó vitamin': 'Olyan vitamin (D, A, E, K), amely a zsírokkal együtt szívódik fel, és a szervezet raktározni képes.',
  'vízben oldódó vitamin': 'Olyan vitamin (B-vitaminok, C-vitamin), amely nem, vagy csak korlátozottan raktározható, a fölöslege a vizelettel ürül.',

  // 4. modul, 12. fejezet: Légcsere
  'léghólyagocska': 'A tüdő legmélyebb légúti egységei (alveolusok), amelyek falát sűrű hajszálér-hálózat veszi körül; itt zajlik a gázcsere.',
  'mellhártya': 'A tüdőt körülvevő kettős hártya (pleura), amely a légzőmozgások során a tüdő súrlódásmentes csúszását teszi lehetővé.',
  'vitálkapacitás': 'A maximális erőltetett belégzést követő maximális erőltetett kilégzéssel kifújható levegő térfogata.',
  'légzési perctérfogat': 'A percenkénti légzésszám és az egy légvételre jutó levegőmennyiség (légzési térfogat) szorzata.',
  'intrapleurális nyomás': 'A mellhártya két lemeze közötti résben uralkodó, normál esetben negatív nyomás, amely a tüdőt tágra húzva tartja.',
  'alveoláris nyomás': 'A léghólyagocskákban uralkodó nyomás, amely belégzéskor a légköri nyomás alá csökken, kilégzéskor fölé emelkedik.',
  'donders-modell': 'Klasszikus fizikai szemléltető eszköz (harang-modell), amely gumimembránnal és léggömbökkel szemlélteti a légzőmozgások mechanizmusát.',

  // 4. modul, 13. fejezet: Gázcsere
  'gázcsere': 'Az oxigén és a szén-dioxid diffúzión alapuló kicserélődése a léghólyagocskák és a vér, illetve a szövetek és a vér között.',
  'sejtlégzés': 'A sejteken belül, elsősorban a mitokondriumban lezajló, energiatermelő folyamat, amely oxigént használ fel és szén-dioxidot termel.',
  'hemoglobin': 'A vörösvérsejtekben található, négy alegységből álló fehérje, amely megköti és szállítja az oxigént.',
  'parciális nyomás': 'Egy gázkeverék egyik alkotó gázának a teljes nyomáshoz való hozzájárulása; a gázcsere iránya a parciális nyomáskülönbségtől függ.',

  // 4. modul, 14. fejezet: Hangképzés
  'gégefő': 'A légcső és a garat találkozásánál elhelyezkedő szerv, amely a pajzsporcból, a gégefedőből és a hangszalagokból épül fel.',
  'pajzsporc': 'A gége elülső, kiemelkedő porca (az "ádámcsutka"), amely védi a gége belső részeit.',
  'gégefedő': 'A gégefő azon része, amely nyeléskor reflexesen lezárja a légutat, megakadályozva, hogy táplálék kerüljön a légcsőbe.',
  'hangszalag': 'A gégefőben elhelyezkedő szalagpár, amely a rajta átáramló levegő hatására rezgésbe jön, ez kelti a hangot.',
  'kannaporc': 'A gége hátsó részén elhelyezkedő, elmozdítható porcpár, amelyhez a hangszalagok hátsó vége rögzül.',
  'hangrés': 'A hangszalagok közötti rés, amely nyugodt légzéskor tágra nyílik, hangképzéskor beszűkül.',
  'rezonátortér': 'A garat, a szájüreg és az orrüreg mint üreg, amely az alaphang egyes felharmonikusait felerősítve alakítja ki a hangszínt.',
  'felharmonikus': 'Az alaphangnál magasabb frekvenciájú összetevő, amelynek relatív erőssége meghatározza a hangszínt.',

  // 4. modul, 15. fejezet: A légzés szabályozása
  'légzőközpont': 'Az agytörzsben, a nyúltvelőben található idegi központ, amely a vér szén-dioxid-koncentrációja alapján szabályozza a légzés mélységét és gyakoriságát.',
  'szén-dioxid': 'A sejtlégzés végterméke, amelynek vérbeli koncentrációja elsődlegesen szabályozza a légzés ütemét.',
  'kemoreceptor': 'Kémiai ingerekre (pl. a vér szén-dioxid-koncentrációjára) érzékeny érzékelő sejt, amely az agytörzsben és a nagyerek falában található.',
  'mechanoreceptor': 'Mechanikai ingerekre (pl. a tüdő tágulására) érzékeny érzékelő sejt, amely a tüdő falában található.',
  'hering-breuer-reflex': 'A tüdő nyúlásérzékelő receptorai által kiváltott reflex, amely a tüdő kellő kitágulásakor leállítja a belégzést.',

  // 4. modul, 16. fejezet: A légzés és a légzőrendszer egészségtana
  'asztma': 'A hörgők átmeneti, allergiás vagy egyéb ingerre bekövetkező összeszűkülése, amely nehezített, sípoló légzést okoz.',
  'dohányzás': 'A légzőrendszert súlyosan károsító szokás, amely tönkreteszi a légutak csillós hámsejtjeit és a léghólyagocskák felületi feszültségét szabályozó surfactant termelését.',
  'középfülgyulladás': 'A középfül gyulladása, amely gyakran a torokgyulladásból a fülkürtön át terjedő fertőzés következménye.',
  'fülkürt': 'A garatot és a középfület összekötő járat (Eustach-kürt), amelyen keresztül a fertőzés átterjedhet az egyik szervről a másikra.',
  'légmell': 'A mellhártyaűr negatív nyomásának megszűnése (pl. sérülés miatt bejutó levegő következtében), amely a tüdő összeeséséhez vezet.',
  'keszonbetegség': 'Víz alatti, magas nyomáson végzett munka utáni túl gyors felszínre emelkedéskor, a szövetekben feloldódott nitrogén gázbuborékként való felszabadulása miatt kialakuló állapot.',
  'felületi feszültség': 'A folyadékmolekulák közötti vonzóerő által létrehozott feszültség, amely a léghólyagocskák belső felszínén azok összeesésének irányába hatna.',
  'surfactant': 'A léghólyagocskák belső felszínét borító, felületaktív anyag, amely csökkenti a felületi feszültséget, megkönnyítve a léghólyagocskák nyitva tartását.',

  // 4. modul, 17. fejezet: A testfolyadékok
  'vérplazma': 'A vér folyékony állománya, amely vizet, fehérjéket, sókat, tápanyagokat, hormonokat és salakanyagokat tartalmaz.',
  'alakos elemek': 'A vér sejtes összetevői (vörösvérsejtek, fehérvérsejtek, vérlemezkék), amelyek a vérplazmában úsznak.',
  'szövetnedv': 'A hajszálerek faláról a szövetek közötti térbe kiszűrődő, a vérplazmához hasonló összetételű folyadék, amely körülveszi a testi sejteket.',
  'nyirok': 'A szövetnedv azon része, amelyet a hajszálerek nem tudnak visszaszívni, ezért a nyirokereken át jut vissza a vérkeringésbe.',
  'albumin': 'A vérplazma legnagyobb mennyiségben jelen lévő fehérjéje, amely az ozmotikus nyomás fenntartásáért felelős.',
  'fibrinogén': 'A vérplazmában oldott, a véralvadás során fibrinné alakuló fehérje.',
  'vércsoport': 'A vörösvérsejtek felszíni antigénjei alapján meghatározott csoportosítás (A, B, AB, 0), amely a vérátömlesztés összeférhetőségét szabja meg.',
  'antigén': 'A sejtfelszínen található molekula, amely alapján a szervezet immunrendszere felismeri a saját, illetve az idegen sejteket.',
  'agglutináció': 'Az idegen antigénű vörösvértestek összecsomósodása az ellenük irányuló antitestek hatására, amely összeférhetetlen vérátömlesztéskor életveszélyes reakciót okoz.',

  // 4. modul, 18. fejezet: A szöveti keringés
  'vörösvérsejt': 'A csontvelőben keletkező alakos elem, amelynek fő feladata az oxigén (és részben a szén-dioxid) szállítása.',
  'fehérvérsejt': 'A csontvelőben keletkező alakos elem, amely a szervezet védekezésében vesz részt, egyes típusai amőboid mozgásra is képesek.',
  'vérlemezke': 'A csontvelőben keletkező alakos elem (trombocita), amely a véralvadási folyamatban játszik kulcsszerepet.',
  'vérszegénység': 'Anémia; a vörösvérsejtek vagy a hemoglobin mennyiségének csökkenése, amely a szövetek oxigénellátásának romlásához vezet.',
  'trombózis': 'Kóros vérrögképződés az erek belsejében, amely elzárhatja az adott eret.',
  'nyirokcsomó': 'A nyirokerek mentén elhelyezkedő szerv, amely kiszűri a kórokozókat és részt vesz a fehérvérsejtek aktiválásában.',
  'hem': 'A hemoglobin nem fehérje természetű alkotórésze, amely négy nitrogéntartalmú gyűrűből és egy központi vasionból épül fel.',
  'globin': 'A hemoglobin fehérje természetű alkotórésze; a hemoglobin négy globinláncból és a hozzájuk kapcsolódó hem csoportokból áll.',
  'trombin': 'A véralvadás során aktiválódó enzim, amely a fibrinogént fibrinné alakítja.',
  'fibrin': 'A véralvadás során a fibrinogénből képződő, rostos, oldhatatlan fehérje, amely hálót képezve zárja le a sérülést.',

  // 4. modul, 19. fejezet: A szív és az erek
  'pitvar': 'A szív két felső ürege, amely a beérkező vért fogadja, majd a kamrákba továbbítja.',
  'kamra': 'A szív két alsó ürege, amely a vért a nagy erekbe (tüdőartéria, testi nagyartéria) löki ki.',
  'billentyű': 'A szív üregei, illetve a kamrák és a nagy erek között elhelyezkedő szerkezet, amely megakadályozza a vér visszaáramlását.',
  'koszorúér': 'A szívizom saját vérellátását biztosító ér; elzáródása a szívizom oxigénhiányát és elhalását (szívinfarktust) okozhatja.',
  'artéria': 'Verőér; a szívtől távolodó irányban, magas nyomású vért szállító, vastag falú, rugalmas ér.',
  'véna': 'Visszér; a szív felé alacsony nyomású vért szállító, billentyűkkel ellátott ér, amely megakadályozza a vér visszafolyását.',
  'ozmotikus nyomás': 'A plazmafehérjék által létrehozott, a folyadékot a vér felé "visszahúzó" nyomás, amely a hajszálér végén a szövetnedv visszaszívódását idézi elő.',
  'verőtérfogat': 'Az a vérmennyiség, amelyet a szív egyetlen összehúzódás (szisztolé) alkalmával kilök.',
  'perctérfogat': 'A verőtérfogat és a szívfrekvencia szorzata; az egy perc alatt a szív által kilökött vérmennyiség.',
  'izompumpa': 'A vázizmok összehúzódása által a vénákra és a nyirokerekre gyakorolt összenyomó hatás, amely elősegíti a vér és a nyirok szív felé áramlását.',

  // 4. modul, 20. fejezet: A keringés szabályozása
  'szívfrekvencia': 'A szív percenkénti összehúzódásainak száma.',
  'vérnyomás': 'Az artériákban uralkodó nyomás, amelynek felnőttkori normál értéke kb. 120/80 Hgmm.',
  'lép': 'A hasüregben elhelyezkedő szerv, amely az elhasználódott vörösvértesteket bontja le, vért raktároz, és immunológiai szerepet is betölt.',
  'érszűkület': 'Az erek falában lévő izomrostok összehúzódása, amely csökkenti az adott érszakaszon átáramló vér mennyiségét.',
  'értágulat': 'Az erek falában lévő izomrostok elernyedése, amely növeli az adott érszakaszon átáramló vér mennyiségét.',
  'szinuszcsomó': 'A jobb pitvar falában található, önmagát automatikusan gerjesztő szövet, amely a szív "saját ritmusadója" (pacemakere).',
  'pitvar-kamrai csomó': 'A szinuszcsomóból érkező ingerületet a pitvarokból a kamrák felé késleltetve továbbító szövet, amely biztosítja a pitvarok és a kamrák egymás utáni összehúzódását.',
  'pacemaker': 'A szív önmagát automatikusan, ritmikusan gerjesztő "saját ritmusadója"; elsődlegesen a szinuszcsomó tölti be ezt a szerepet.',

  // 4. modul, 21. fejezet: A keringési rendszer egészségtana
  'érelmeszesedés': 'Az érfal belső felszínén lerakódó zsíros anyagok (elsősorban koleszterin) miatt kialakuló, az ér átmérőjét szűkítő elváltozás.',
  'visszértágulat': 'A vénák (főként a lábakban) kóros kitágulása, amely a vénák billentyűinek elégtelen működésével jár együtt.',
  'magasvérnyomás': 'Hipertónia; a tartósan a normálérték felett maradó vérnyomás állapota, amely hosszú távon terheli a szívet és az érfalakat.',
  'szívinfarktus': 'A szívizom egy részének elhalása a koszorúér elzáródása miatt kialakuló oxigénhiány következtében.',
  'sokk': 'Súlyos vérveszteség vagy más ok miatt kialakuló, életveszélyes keringési elégtelenség, amelyet sápadtság, hidegverejték és szapora, gyenge pulzus jellemez.',
  'stroke': 'Agyi érkatasztrófa; egy agyi ér elzáródása vagy megrepedése miatt kialakuló, az agyszövet károsodásával járó állapot.',

  // 4. modul, 22. fejezet: A vizeletkiválasztó rendszer működése
  'vese': 'A vizeletkiválasztó rendszer fő szerve, amely a vér folyamatos szűrésével választja ki a vízoldékony salakanyagokat és a fölösleges vizet, sókat.',
  'húgyhólyag': 'A vizeletet ideiglenesen tároló szerv, amelybe a húgyvezetékek szállítják a vesékben képződött vizeletet.',
  'szűrletképzés': 'A vese kiválasztó működésének első lépése, amelynek során a vér egy része a hajszálér-gomolyagból a vesetestecske tokjába szűrődik.',
  'visszaszívás': 'A vese kiválasztó működésének második lépése, amelynek során a szervezet számára még hasznos anyagok (víz, glükóz, sók) nagy része visszakerül a szűrletből a vérbe.',
  'exkréció': 'A vese kiválasztó működésének harmadik lépése (kiválasztás), amelynek során egyes anyagok (pl. gyógyszerek, felesleges ionok) aktívan a keletkező vizeletbe kerülnek.',
  'vizelet': 'A vese kiválasztó működésének végterméke, amely vizet, karbamidot, nátrium-, kálium- és klorid-ionokat, valamint kisebb mennyiségben gyógyszereket és hormonokat tartalmaz.',
  'nefron': 'A vese működési alapegysége, amely a vesetestecskéből és az abból kiinduló, kanyargós csatornarendszerből épül fel.',
  'vesetestecske': 'A nefron azon része, amely egy kettős falú tokból (Bowman-tok) és az abba benyúló hajszálér-gomolyagból (glomerulus) épül fel; itt zajlik a szűrletképzés.',
  'bowman-tok': 'A vesetestecske kettős falú tokja, amely körülveszi a hajszálér-gomolyagot és felfogja a kiszűrődő szűrletet.',
  'glomerulus': 'A vesetestecskébe benyúló, sűrűn tekeredő hajszálér-gomolyag, amelynek falán át a szűrletképzés zajlik.',

  // 4. modul, 23. fejezet: A kiválasztás szabályozása
  'folyadékháztartás': 'A szervezet víz- és sóegyensúlyának állapota, amelyet a vese kiválasztó működése és hormonális szabályozás tart fenn.',
  'vazopresszin': 'Antidiuretikus hormon (ADH), amely a testfolyadékok töménységének emelkedésére választódik ki, és a vesében fokozza a víz visszaszívását.',
  'aldoszteron': 'Hormon, amely a vesében a nátrium visszaszívását fokozza, miközben a káliumion kiválasztását segíti; a szervezet sóháztartásának szabályozásában játszik kulcsszerepet.',

  // 4. modul, 24. fejezet: A kiválasztó szervrendszer egészségtana
  'proteinuria': 'Fehérje megjelenése a vizeletben, amely jellemzően a vese szűrő működésének károsodására utal.',
  'glükozúria': 'Glükóz megjelenése a vizeletben, amely jellemzően kezeletlen vagy rosszul beállított cukorbetegségre utal.',
  'hematuria': 'Vér megjelenése a vizeletben, amely sérülésre, vesekőre vagy fertőzésre utalhat.',
  'vesekő': 'A vizeletben oldott anyagok (pl. kalciumsók) kicsapódásából, kristályosodásából kialakuló szilárd képződmény, amely elzáródást és erős fájdalmat okozhat.',
  'művesekezelés': 'Dialízis; olyan eljárás, amely súlyos, tartós veseműködési zavar esetén egy gép segítségével pótolja a vese szűrő funkcióját.',
  'veseátültetés': 'Transzplantáció; egy működő donorvese beültetése, amely tartósan, rendszeres kezelés szükségessége nélkül pótolhatja a kiesett vesefunkciót.',

  'haraszt': 'Szövetekkel és valódi szervekkel (gyökér, szár, levél) rendelkező, spórával szaporodó növénycsoport.',
  'nyitvatermő': 'Magvas növénycsoport, amelynél a magkezdemény nincs zárt magházban.',
  'zárvatermő': 'Magvas növénycsoport, amelynél a magkezdemény zárt magházban fejlődik, és kettős megtermékenyítés jellemzi.',
  'osztódószövet': 'Növényi szövet, amelynek sejtjei folyamatosan osztódnak, biztosítva a növény növekedését.',
  'hámszövet': 'Az állati szervezet felszínét és üregeit borító, illetve mirigyes funkciót ellátó szövettípus.',
  'izomszövet': 'Összehúzódásra képes állati szövet, amely a mozgásért felelős.',
  'kötőszövet': 'Az állati szervezet szerveit összekötő, védő és tápanyagot raktározó szövettípus.',
  'idegszövet': 'Az ingerület felvételét és vezetését végző állati szövettípus.',
  // 2. modul, 13. fejezet emelt kiegészítés: jelátvitel mechanizmusa
  'enzimkapcsolt receptor': 'Receptortípus, amely a jelmolekula kötődésére saját maga válik enzimatikusan aktívvá, vagy egy hozzá kapcsolt enzimet aktivál.',
  'g-fehérjéhez kapcsolt receptor': 'Receptortípus, amely a jelmolekula kötődésekor egy közvetítő fehérjét (G-fehérjét) aktivál, amely aztán egy másik enzimet indít be.',
  'másodlagos hírvivő': 'A sejten belüli jelátvitelben szereplő molekula (pl. cAMP), amely a receptor aktiválódása után erősíti fel és továbbítja a jelet a sejten belül.',
  'camp': 'Ciklikus AMP; az adenilát-cikláz enzim által ATP-ből előállított másodlagos hírvivő molekula, amely a G-fehérjéhez kapcsolt receptorok jelátvitelében vesz részt.',
  'endokrin jelátvitel': 'Sejtek közötti kommunikáció, amelynél a jelmolekula (hormon) a véráramba jutva távoli sejtekhez is eljut.',
  'parakrin jelátvitel': 'Sejtek közötti kommunikáció, amelynél a jelmolekula csak a közeli sejtekre hat.',
  'autokrin jelátvitel': 'Sejtek közötti kommunikáció, amelynél a sejt saját maga által termelt jelmolekulára reagál.',
  'szinaptikus jelátvitel': 'Idegsejtekre jellemző, gyors és célzott jelátviteli forma, amelynél a jelmolekula egy szinapszison át jut a szomszédos sejthez.',

  // 2. modul, 13. fejezet: A sejtműködések vezérlése
  'jelátvitel': 'Az a folyamat, amelynek során egy jelmolekula receptorhoz kötődése sejten belüli válaszfolyamatot indít el, megváltoztatva a sejt működését.',

  // 2. modul, 12. fejezet emelt kiegészítés: crossing over, ivarsejt-képzés
  'szinapszis': 'Genetikai értelemben: a homológ kromoszómapárok szoros egymás mellé rendeződése a meiózis I elején, itt zajlik a crossing over. Idegrendszeri értelemben (lásd az Emberi szervezet modul azonos nevű fejezetét): két idegsejt, vagy egy idegsejt és egy izom-, illetve mirigysejt közötti érintkezési, jelátviteli hely.',
  'tetrád': 'Négy kromatidából álló szerkezet (bivalens), amely a szinapszis során, a homológ kromoszómapár összetapadásakor jön létre.',
  'kiazma': 'Az a pont, ahol a homológ kromatidák fizikailag elszakadnak és szakaszt cserélnek egymással a crossing over során.',
  'spermatogenezis': 'A hímivarsejt-képzés folyamata, amelynek során mind a négy meiózisból keletkező sejt működőképes spermiummá alakul.',
  'oogenezis': 'A női ivarsejt-képzés folyamata, amelynek során egyenlőtlen citoplazma-elosztással egyetlen nagy petesejt és három elpusztuló sarkitest keletkezik.',
  'sarkitest': 'Az oogenezis során keletkező, kis méretű, elpusztuló sejt (poláris test), amely nem válik petesejtté.',
  'ellenőrzőpont': 'A sejtciklus azon pontjai (checkpoint), ahol a sejt megvizsgálja, hogy az adott szakasz megfelelően zajlott-e le, mielőtt továbblépne.',

  // 2. modul, 10-14. fejezet: Sejtalkotók
  'ostoros mozgás': 'Az ostor (hosszú, csapkodó sejtfelszíni nyúlvány) mozgásával létrejövő mozgásforma, pl. a hímivarsejtnél.',
  'nekrózis': 'Nem programozott, sérülés vagy károsodás okozta sejthalál, amely - az apoptózissal ellentétben - gyulladásos reakciót válthat ki a környező szövetben.',

  // 2. modul, 7-9. fejezet: Az anyagcsere folyamatai
  'kemoheterotróf': 'Olyan szervezet, amely kémiai energiát hasznosít és szerves szénforrásra szorul - ide tartozik a legtöbb állat, gomba és baktérium.',
  'fotoheterotróf': 'Olyan szervezet, amely fényenergiát hasznosít, de szerves szénforrásra szorul - néhány különleges baktériumcsoportra jellemző, ritka kombináció.',
  'tejsavas erjedés': 'Oxigénhiányos körülmények között, jellemzően az izomsejtekben zajló erjedéstípus, amelynek végterméke a tejsav.',
  'alkoholos erjedés': 'Élesztőgombákra jellemző erjedéstípus, amely során a cukor etil-alkohollá és szén-dioxiddá bomlik.',

  // 2. modul, 8. fejezet emelt kiegészítés: Fotoszintézis mechanizmusa
  'fotorendszer': 'A tilakoidmembránban található fehérje-színanyag komplex (fotorendszer I és II), amely a fényenergia elnyeléséért és az elektronok "elindításáért" felelős.',
  'elektronszállító lánc': 'Egymást követő fehérjékből álló rendszer a membránban, amely a rajta áthaladó elektronok energiáját protongrádiens létrehozására használja fel.',
  'kemiozmózis': 'Az a mechanizmus, amelynek során egy membránon átívelő protongrádiens kiegyenlítődése, az ATP-szintáz enzimen keresztül, ATP termelését hajtja.',
  'atp-szintáz': 'Az az enzim, amely a membránon átáramló protonok energiáját felhasználva ATP-t állít elő.',

  // 2. modul, 10. fejezet emelt kiegészítés: szállítás hajtóerői
  'elektrokémiai grádiens': 'A koncentráció-különbség és az elektromos potenciálkülönbség együttes hatása, amely meghatározza egy ion mozgásának irányát a membránon át.',
  'feszültségfüggő csatorna': 'Olyan csatornafehérje, amely a membránpotenciál megváltozására nyílik ki - az idegi ingerületvezetés alapja.',
  'ligandfüggő csatorna': 'Olyan csatornafehérje, amely egy adott jelmolekula (ligand) megkötődésére nyílik ki.',
  'akvaporin': 'Kifejezetten víz szállítására specializálódott csatornafehérje, amely felgyorsítja a víz passzív átjutását a membránon.',

  // 2. modul, 10. fejezet: Membránok szerepe
  'megkönnyített diffúzió': 'Poláris molekulák vagy ionok passzív szállítása csatorna- vagy szállítófehérjéken keresztül - energiát nem igényel, de fehérje közreműködése szükséges hozzá.',
  'másodlagos aktív szállítás': 'Olyan aktív szállítási forma, amely nem közvetlenül ATP-t használ, hanem egy másik ion (jellemzően a nátrium) koncentráció-grádiensét "használja ki" az energiaigényes szállításhoz.',
  'csatornafehérje': 'Membránfehérje, amely pórust alkot, lehetővé téve meghatározott ionok vagy kisebb molekulák átjutását a membránon.',
  'receptorfehérje': 'Membránfehérje, amely külső jelmolekulákat (pl. hormonokat) ismer fel, és ennek hatására sejten belüli választ indít el.',

  // 2. modul, 9. fejezet emelt kiegészítés: citromsavciklus kulcsmolekulái
  'acetil-koa': 'A piruvát dekarboxileződése után keletkező, koenzim-A-hoz kapcsolt kétszénatomos molekula - a citromsavciklus "belépőjegye".',
  'oxálecetsav': 'A citromsavciklus négyszénatomos kiindulási és regenerálódó molekulája, amely egyesül a belépő acetil-KoA-val.',
  'citromsav': 'A citromsavciklus első, hatszénatomos terméke, amely az oxálecetsav és az acetil-KoA egyesüléséből keletkezik - erről kapta a nevét a ciklus.',
  'fadh₂': 'A citromsavciklusban keletkező hidrogénszállító molekula, amely - a NADH-hoz hasonlóan - a terminális oxidációhoz szállítja a hidrogént.',
  'terminális oxidáció': 'A sejtlégzés utolsó szakasza (más néven légzési lánc), amely során a NADH és a FADH₂ hidrogénje végül oxigénnel egyesül, víz és ATP keletkezik.',
  'légzési lánc': 'A terminális oxidáció másik elnevezése: a mitokondrium belső membránjában található elektronszállító lánc, amely a sejtlégzés energiatermelésének nagy részéért felelős.',

  // 2. modul, 9. fejezet: Lebontó folyamatok (részletesen)
  'piruvát': 'A glikolízis végterméke: háromszénatomos molekula, amely oxigén jelenlétében a mitokondriumba kerül és tovább bomlik, oxigén hiányában erjedésen megy keresztül.',
  'nadh': 'A glikolízis és a citromsavciklus során keletkező hidrogén- (elektron-) szállítómolekula, amelyet a végoxidáció használ fel ATP termelésére.',

  // 2. modul, 8. fejezet: Fotoszintézis (részletesen)
  'rubp': 'Ribulóz-1,5-biszfoszfát; a Calvin-ciklus öt szénatomos kiindulási molekulája, amelyhez a belépő szén-dioxid kötődik, és amely a ciklus végén regenerálódik.',
  'rubisco': 'A szén-dioxid RuBP-hez kötődését katalizáló enzim - a Föld legnagyobb mennyiségben előforduló fehérjéje.',
  '3-foszfoglicerát': 'A Calvin-ciklusban a szén-dioxid megkötése után elsőként keletkező, háromszénatomos stabil vegyület (PGA).',
  'g3p': 'Glicerinaldehid-3-foszfát; a Calvin-ciklusban az ATP és a NADPH felhasználásával keletkező vegyület, amelynek egy része glükózzá épül tovább, más része a RuBP regenerálására szolgál.',
  'fotolízis': 'A víz fényenergia hatására bekövetkező bomlása a fotoszintézis fényszakaszában - ennek eredménye a molekuláris oxigén.',
  'nadph': 'A fényszakaszban keletkező hidrogén- (elektron-) szállítómolekula, amelyet a sötétszakasz a szén-dioxid redukálásához használ fel.',
  'calvin-ciklus': 'A fotoszintézis sötétszakaszának ciklikusan ismétlődő reakciósorozata, amely során a szén-dioxid megkötődik és glükózzá alakul.',
  'klorofill-a': 'A fotoszintézis fő színanyaga, amely elsősorban a kék (kb. 430 nm) és a vörös (kb. 662 nm) fényt nyeli el a leghatékonyabban.',
  'klorofill-b': 'Kiegészítő fotoszintetikus színanyag, amely a klorofill-a-tól kissé eltérő hullámhossz-tartományban (kb. 453 nm és 642 nm) nyeli el hatékonyan a fényt, és az elnyelt energiát átadja a klorofill-a-nak.',

  // 2. modul, 7. fejezet emelt kiegészítés: Felépítés-lebontás
  'receptor-mediált endocitózis': 'Az endocitózis célzott formája, amelynél a sejtmembrán felszíni receptorfehérjéi ismernek fel és kötnek meg egy adott anyagot (pl. lipoproteint), mielőtt a sejt felvenné azt.',

  // 2. modul, 6. fejezet: Nukleinsavak, nukleotidok
  'rns': 'Ribonukleinsav; ribózt tartalmazó nukleinsav, amely jellemzően a genetikai információ felhasználásában (pl. fehérjeszintézisben) vesz részt.',
  'purin': 'Kétgyűrűs nitrogéntartalmú bázis-típus (adenin, guanin).',
  'pirimidin': 'Egygyűrűs nitrogéntartalmú bázis-típus (citozin, timin, illetve az RNS-ben az uracil).',
  'chargaff-szabály': 'Megfigyelés, amely szerint a DNS-ben az adenin mennyisége megegyezik a timinével, a guaniné pedig a citozinéval - ez a bázispárosodás alapja.',

  // 2. modul, 5. fejezet: Fehérjék
  'oldallánc': 'Az aminosav egyedi, aminosavtípusonként eltérő része (R-csoport), amely meghatározza az adott aminosav tulajdonságait és a fehérje térszerkezetének kialakításában betöltött szerepét.',
  'diszulfidhíd': 'Két kéntartalmú aminosav (cisztein) oldallánca között kialakuló kovalens kötés, amely stabilizálja a fehérjék térszerkezetét.',
  'másodlagos szerkezet': 'A fehérjelánc egyes szakaszainak jellegzetes, ismétlődő térbeli mintázata (pl. hélix, redő), amelyet a lánc gerince menti hidrogénkötések stabilizálnak.',

  // 2. modul, 4. fejezet: Szénhidrátok (kémiai osztályozással bővítve)
  'trióz': 'Három szénatomos egyszerű cukor (pl. glicerin-aldehid), amely az anyagcsere fontos köztes terméke.',
  'pentóz': 'Öt szénatomos egyszerű cukor (pl. ribóz, dezoxiribóz), amely a nukleinsavak építőköve.',
  'hexóz': 'Hat szénatomos egyszerű cukor (pl. glükóz, fruktóz, galaktóz).',
  'fruktóz': 'Hexóz cukor, a legédesebb ízű egyszerű cukor, jellemzően gyümölcsökben és mézben fordul elő; ketóz típusú molekula.',
  'glikozidos kötés': 'Két monoszacharid közötti kötés, amely kondenzációval (vízkilépéssel) jön létre.',
  'kitin': 'Nitrogéntartalmú poliszacharid, az ízeltlábúak külső vázának és a gombák sejtfalának szilárdító anyaga.',
  'aldóz': 'Olyan monoszacharid, amelynek karbonilcsoportja (C=O) a szénlánc végén, aldehidcsoportot alkotva helyezkedik el - például a glükóz.',
  'ketóz': 'Olyan monoszacharid, amelynek karbonilcsoportja (C=O) a szénlánc belsejében, ketocsoportot alkotva helyezkedik el - például a fruktóz.',
  'karbonilcsoport': 'Szén-oxigén kettős kötést (C=O) tartalmazó funkciós csoport, amely a monoszacharidok aldóz vagy ketóz jellegét meghatározza.',
  'glikozidos -oh csoport': 'A monoszacharid gyűrűs formájában található, a kötés kialakításában résztvevő -OH csoport, amelynek szabad vagy lekötött állapota határozza meg a diszacharid redukáló képességét.',
  'redukáló diszacharid': 'Olyan diszacharid, amelyben marad szabad glikozidos -OH csoport, így vizes oldatban a gyűrű felnyílhat és szabad aldehidcsoport alakulhat ki (pl. maltóz, laktóz).',
  'amilopektin': 'A keményítő erősen elágazó szerkezetű alkotórésze, amely a keményítőszemcsék felszínén helyezkedik el.',
  // 2. modul, 4. fejezet: Szénhidrátok
  'ribóz': 'Öt szénatomos egyszerű cukor, amely az RNS gerincének alkotórésze.',
  'dezoxiribóz': 'Öt szénatomos egyszerű cukor, amely a DNS gerincének alkotórésze.',
  'keményítő': 'Glükózegységekből (α-glükózból) felépülő, elágazó és nem elágazó láncokat is tartalmazó poliszacharid - a növények tartalék szénhidrátja.',
  'glikogén': 'Glükózegységekből felépülő, erősen elágazó poliszacharid - az állatok (és az ember) tartalék szénhidrátja, elsősorban a májban és az izmokban raktározódik.',
  'cellulóz': 'β-glükózegységekből felépülő poliszacharid, a növényi sejtfal fő alkotórésze - az emberi emésztőrendszer nem képes lebontani.',

  // 2. modul, 3. fejezet emelt kiegészítés: Lipidek
  'lipoprotein': 'Fehérjéből és lipidből felépülő szállító részecske, amely lehetővé teszi a vízben nem oldódó lipidek (pl. koleszterin, trigliceridek) szállítását a vérben.',

  // 2. modul, 3. fejezet: Lipidek
  'zsír': 'Glicerinből és három zsírsavból felépülő lipid, amely elsősorban energiaraktározásra szolgál.',
  'koleszterin': 'Szteránvázas lipid, amely a sejtmembránok fontos alkotórésze, és számos szteroid hormon kiindulási anyaga.',

  // 2. modul, 1. fejezet emelt kiegészítés: Elemek, ionok szabályozása
  'parathormon': 'A mellékpajzsmirigy által termelt hormon, amely csökkenő vér-kalciumszint esetén mozgósítja a kalciumot a csontokból, fokozza a vese kalcium-visszaszívását és aktiválja a D-vitamint.',
  'kalcitonin': 'A pajzsmirigy által termelt hormon, amely magas vér-kalciumszint esetén csökkenti a vér kalciumkoncentrációját - a parathormon ellentétes hatású párja.',
  'nyugalmi membránpotenciál': 'A sejtmembrán két oldala közötti elektromos potenciálkülönbség nyugalmi állapotban, amelyet elsősorban a Na⁺/K⁺-pumpa és az ionkoncentráció-különbségek tartanak fenn.',
  'transzferrin': 'A vérben a vasat szállító fehérje, amely megvédi a szervezetet a szabad vasionok károsító hatásától.',
  'ferritin': 'A sejteken belül vasat raktározó fehérje.',
  'pufferrendszer': 'Olyan kémiai rendszer (pl. a hidrogén-karbonát-puffer), amely sav vagy lúg hozzáadásakor is csak kis mértékben változtatja meg egy oldat (pl. a vér) pH-ját.',

  // 2. modul, 2. fejezet: Szervetlen molekulák
  'dipólus': 'Olyan molekula, amelyben a töltés egyenlőtlenül oszlik el, így a molekula egyik vége enyhén negatív, másik vége enyhén pozitív töltésű - ilyen a vízmolekula is.',
  'hidrogénkötés': 'Gyenge, de nagy számban jelentős kölcsönhatás, amely egy molekula pozitív részleges töltésű hidrogénje és egy másik molekula negatív részleges töltésű atomja között alakul ki - a vízmolekulák közötti hidrogénkötések felelősek a víz sok különleges tulajdonságáért.',
  'kohézió': 'A vízmolekulák egymáshoz tapadása a hidrogénkötések révén - ez a jelenség felelős például a víz felületi feszültségéért.',
  'adhézió': 'A vízmolekulák más anyagokhoz (pl. edény falához, növényi szövetekhez) való tapadása - a kapillaritás alapja.',
  'ammónia': 'A fehérjék és aminosavak lebontásakor keletkező, nitrogéntartalmú, mérgező melléktermék, amelyet a szervezet kevésbé mérgező formává (pl. karbamiddá) alakít.',
  'karbamid': 'Az ammóniánál kevésbé mérgező nitrogéntartalmú vegyület, amely az emberi szervezetben a vizelettel ürül (más néven urea).',
  'hidrogén-karbonát': 'A vérben szállított szén-dioxid egyik fő formája (HCO₃⁻ ion).',
  'karbamino-vegyület': 'A szén-dioxid hemoglobinhoz kötött szállítási formája a vérben.',
  'ammonotelikus': 'Olyan élőlény, amely a nitrogént közvetlenül ammónia formájában választja ki - jellemzően bőséges vízhez jutó, vízi szervezetekre igaz.',
  'ureotelikus': 'Olyan élőlény, amely a nitrogént karbamid formájában választja ki - például az emlősök és a kétéltűek.',
  'urikotelikus': 'Olyan élőlény, amely a nitrogént húgysav formájában választja ki, minimális vízveszteséggel - például a madarak, hüllők és rovarok.',
  'kettős megtermékenyítés': 'A zárvatermőkre jellemző folyamat, amelynek során az egyik hímivarsejt a petesejttel (embrió), a másik a központi sejttel (endospermium) egyesül.',
  'szén': 'A szerves molekulák vázát adó elem; négy kovalens kötést tud kialakítani, ezért hosszú láncokba és gyűrűkbe rendeződhet - minden szerves molekula alapja.',
  'hidrogén': 'A víz és a szerves molekulák alkotóeleme; a sejtlégzésben szállítómolekulákra kerülve vesz részt az energiatermelésben.',
  'oxigén': 'A víz alkotóeleme és a biológiai oxidáció (sejtlégzés) végső elektron- és hidrogénfelvevője.',
  'nitrogén': 'A fehérjék (aminosavak) és a nukleinsavak (bázisok) nélkülözhetetlen alkotóeleme.',
  'foszfor': 'A nukleinsavak, az ATP és a sejtmembrán foszfolipidjeinek alkotóeleme, valamint a csontok és fogak fő ásványi összetevője kalciummal együtt.',
  'kén': 'Egyes aminosavak (pl. cisztein) alkotóeleme; a kéntartalmú aminosavak közötti kötések (diszulfidhidak) a fehérjék térszerkezetét stabilizálják.',
  'kalcium': 'A csontok és fogak fő ásványi alkotóeleme; nélkülözhetetlen az izomösszehúzódásban, a véralvadásban és az idegi ingerületátvitelben.',
  'kálium': 'A sejten belüli tér fő kationja; kulcsszerepe van az idegi ingerületátvitelben és az izomműködésben.',
  'nátrium': 'A sejten kívüli tér fő kationja; szerepe van az idegi ingerületátvitelben és a szervezet vízháztartásának szabályozásában.',
  'klór': 'A sejten kívüli tér fő anionja; a gyomorsav (HCl) alkotóeleme.',
  'magnézium': 'Számos enzim működéséhez szükséges kofaktor; növényekben a klorofill molekula központi atomja.',
  'vas': 'A hemoglobin és a mioglobin oxigénszállító/-tároló fehérjék, valamint a sejtlégzésben szereplő citokróm fehérjék alkotóeleme.',
  'jód': 'A pajzsmirigyhormonok (pl. tiroxin) alkotóeleme, amelyek az anyagcserét szabályozzák.',
  'cink': 'Számos enzim működéséhez szükséges, és fontos szerepet játszik az immunrendszer működésében.',
  'réz': 'Több enzim - köztük sejtlégzésben szereplő enzimek - kofaktora.',
  'fluor': 'A fogzománcba épülve növeli annak ellenállóképességét a fogszuvasodással szemben.',
  'szilícium': 'Egyes élőlények (pl. kovamoszatok) sejtfalának, vázának felépítésében szerepet játszó elem.',
  'nitrát': 'A nitrogénforgalom egyik állomása (NO₃⁻); a talajban a nitrifikáló baktériumok termelik, a növények ebben a formában is felvehetik a nitrogént.',
  'citokróm': 'A sejtlégzés terminális oxidációjában (légzési láncban) elektronszállításban részt vevő, vastartalmú fehérjecsalád - a bennük lévő vasion Fe³⁺ és Fe²⁺ állapot között váltakozva adja tovább az elektronokat.',
  'makroelem': 'Az élő szervezet tömegének nagy részét adó kémiai elem (pl. C, H, O, N, P, S, Ca, K, Na, Cl, Mg).',
  'mikroelem': 'Kis mennyiségben, de nélkülözhetetlenül jelen lévő kémiai elem (pl. vas, jód, cink, réz) - más néven nyomelem.',
  'nyomelem': 'Kis mennyiségben, de nélkülözhetetlenül jelen lévő kémiai elem - más néven mikroelem.',
  'szilícium biológiai szerepe': 'Egyes élőlények (pl. kovamoszatok) vázának alkotórésze.',
  'nitrit': 'A nitrogénforgalomban szereplő ion (NO₂⁻).',
  'foszfát': 'A foszforforgalomban szereplő ion (PO₄³⁻), amely többek között a nukleinsavak és az ATP felépítésében is szerepet játszik.',
  'mészvízpróba': 'A szén-dioxid kimutatására szolgáló kísérlet: a szén-dioxid meszes vízben (mészvízben) rosszul oldódó kalcium-karbonát csapadékot képez, amitől a folyadék elhomályosodik.',
  'foszfatid': 'Glicerinből, zsírsavakból és foszforsavból felépülő lipid, amely a biológiai membránok fő alkotórésze.',
  'emulgeálás': 'Zsírok apró cseppekre bontása vizes közegben, ami elősegíti az emésztésüket - az epesavak segítségével valósul meg.',
  'zsírszövet': 'A szervezet energiaraktározásra, hőszigetelésre és mechanikai védelemre szolgáló kötőszövet-típusa.',
  'szteránváz': 'Négy gyűrűből álló jellegzetes molekulaváz, amely többek között a koleszterin alapszerkezete.',
  'konjugált kettőskötés': 'Váltakozó egyes és kettős kötésekből álló molekularész, amely felelős a karotinoidok fényelnyelő tulajdonságáért.',
  'rodopszin': 'A szem pálcikáiban található, A-vitamin-származékot tartalmazó fényérzékeny fehérje, amely a látás folyamatában vesz részt.',
  'glükóz': 'Egyszerű cukor (monoszacharid), a legfontosabb sejten belüli energiaforrás; összegképlete C₆H₁₂O₆.',
  'poliszacharid': 'Sok cukoregységből felépülő szénhidrát (pl. keményítő, glikogén, cellulóz).',
  'diszacharid': 'Két egyszerű cukoregységből felépülő szénhidrát (pl. maltóz, szacharóz, laktóz).',
  'lugol-próba': 'A keményítő kimutatására szolgáló kísérlet, amely során a keményítő-jód komplex jellegzetes kék-lila elszíneződést ad.',
  'maltóz': 'Két glükózegységből, kondenzációval felépülő diszacharid.',
  'α-glükóz': 'A glükóz egyik izomer formája, amelyben az 1-es szénatomon lévő -OH csoport meghatározott térállású; ebből épül fel például a keményítő.',
  'β-glükóz': 'A glükóz másik izomer formája, amelyből például a cellulóz épül fel.',
  'amilóz': 'A keményítő egyik alkotórésze, amely elágazás nélküli glükózláncból épül fel.',
  'peptidlánc': 'Aminosavak peptidkötésekkel összekapcsolt lánca, a fehérjék szerkezeti alapegysége.',
  'denaturáció': 'A fehérjék térszerkezetének hő, nehézfémsók vagy mechanikai hatásra bekövetkező, jellemzően visszafordíthatatlan megváltozása.',
  'eszenciális aminosav': 'Olyan aminosav, amelyet a szervezet nem képes előállítani, ezért kizárólag a táplálékkal vehető fel.',
  'antitest': 'Az immunrendszer által termelt fehérje, amely specifikusan felismeri és semlegesíti az idegen anyagokat (antigéneket).',
  'elsődleges szerkezet': 'A fehérjelánc aminosav-sorrendje.',
  'negyedleges szerkezet': 'Több fehérjelánc együttes, térbeli elrendeződése egy funkcionális fehérjekomplexben.',
  'stresszfehérje': 'Stresszhatásra (pl. hő) termelődő fehérje, amely a károsodott fehérjék helyreállításában vagy lebontásában segít.',
  'nukleotid': 'Cukorból, nitrogéntartalmú bázisból és foszfátcsoportból felépülő molekula, a nukleinsavak alapegysége.',
  'atp': 'Adenozin-trifoszfát; a sejt "energiapénze", amely a legtöbb energiaigényes folyamathoz szükséges energiát szállítja.',
  'transzformáció': 'Az a folyamat, amelynek során egy sejt idegen DNS-t vesz fel, és ez megváltoztatja a genetikai tulajdonságait.',
  'hershey-chase kísérlet': 'Radioaktívan jelölt bakteriofágokkal végzett kísérlet, amely bizonyította, hogy a vírusfertőzés során a DNS jut be a gazdasejtbe, nem a fehérjeburok.',
  'fényszakasz': 'A fotoszintézis első szakasza, amelyben a víz fényenergia hatására bomlik, oxigén és ATP keletkezik.',
  'sötétszakasz': 'A fotoszintézis második szakasza, amelyben a szén-dioxid redukálódik, és glükóz keletkezik.',
  'klorofill': 'A fotoszintézis fő színanyaga, amely a fényenergia elnyeléséért felelős.',
  'biológiai oxidáció': 'Oxigén jelenlétében zajló lebontási folyamat, amely jelentős mennyiségű ATP-t termel.',
  'erjedés': 'Oxigén nélkül zajló lebontási folyamat, amely kevesebb ATP-t termel, mint a biológiai oxidáció.',
  'végoxidáció': 'A sejtlégzés utolsó szakasza, amelynek során a hidrogén molekuláris oxigénnel egyesül, víz és ATP keletkezik.',
  'endocitózis': 'Az a folyamat, amelynek során a sejt anyagokat hólyagocska képzésével vesz fel a környezetéből.',
  'membráncsatorna': 'A sejtmembránban található fehérje-struktúra, amely lehetővé teszi anyagok átjutását a membránon.',
  'állábas mozgás': 'Az állábak (ideiglenes sejtnyúlványok) segítségével történő mozgás, pl. a fehérvérsejteknél.',
  'csillós mozgás': 'A sejtfelszíni csillók ütemes mozgásával létrejövő mozgásforma, pl. a légúti hámsejteknél.',
  'endoplazmatikus hálózat': 'A sejt belső hártyarendszere, amely fehérjék és lipidek szintézisében, valamint anyagok sejten belüli szállításában vesz részt.',
  'mitokondrium': 'A biológiai oxidáció helyszínéül szolgáló sejtalkotó, amely a sejt fő energiatermelő szervecskéje.',
  'kristák': 'A mitokondrium belső membránjának redői, amelyek megnövelik a biológiai oxidációhoz szükséges felületet.',
  'kromoszóma': 'A DNS és a hozzá kapcsolódó fehérjék tömör, sejtosztódáskor látható formája.',
  'rekombináció': 'A meiózis során a homológ kromoszómák közötti génkicserélődés, amely növeli a genetikai változatosságot.',
  'apoptózis': 'Programozott sejthalál, amely a szervezet számára hasznos, szabályozott folyamat.',

  // 4. modul, 25. fejezet: Sejtszintű folyamatok
  'idegsejt': 'Az idegrendszer alapvető sejtje (neuron), amelynek feladata az ingerület keletkezése, vezetése és más sejtekre való továbbadása.',
  'dendrit': 'Az idegsejt rövid, elágazó nyúlványa, amely a bejövő ingereket fogadja.',
  'axon': 'Az idegsejt hosszú nyúlványa, amely a kialakult ingerületet más sejtek felé továbbítja.',
  'ingerület': 'Az inger hatására a sejt membránján átmenetileg végigfutó, jellegzetes elektromos jelenség (akciós potenciál).',
  'ingerküszöb': 'Az a minimális ingererősség, amely már éppen kiváltja az ingerületet.',
  'lokális potenciál': 'A dendriteken és a sejttesten keletkező, térben korlátozottan terjedő és fokozatosan gyengülő potenciálváltozás.',
  'csúcspotenciál': 'A tovaterjedő akciós potenciál, amely az axoneredésnél az ingerküszöb elérésekor alakul ki, és csillapítatlanul, változatlan nagysággal terjed tovább.',
  'axoneredés': 'Az idegsejt sejtteste és axonja találkozásánál lévő terület, ahol a helyi potenciálok összegződése kiválthatja a tovaterjedő akciós potenciált.',

  // 4. modul, 26. fejezet: Szinapszis (a 'szinapszis' idegrendszeri jelentése a fenti, 2. modulbeli bejegyzésben is szerepel)
  'neurotranszmitter': 'Jelátvivő anyag, amelyet a preszinaptikus sejt szabadít fel a szinaptikus résbe, hogy ingerületet közvetítsen a következő sejt felé.',
  'szinaptikus rés': 'A pre- és a posztszinaptikus sejt közötti keskeny tér, amelyen át a jelátvivő anyag diffundál.',
  'preszinaptikus': 'A szinapszis azon oldala, amely az ingerületet szállítja és a jelátvivő anyagot felszabadítja.',
  'posztszinaptikus': 'A szinapszis azon oldala, amely a jelátvivő anyagot receptorral fogadja.',
  'reuptake': 'A jelátvivő anyag preszinaptikus sejtbe történő visszavétele, amely megszünteti annak hatását a szinaptikus résben.',
  'gliasejt': 'Az idegrendszer támogató sejtje, amely nem továbbít ingerületet, de táplálja az idegsejteket és részt vesz a velőshüvely kialakításában.',
  'velőshüvely': 'Az axonok körül kialakuló szigetelő réteg (mielinhüvely), amely jelentősen felgyorsítja az ingerület vezetési sebességét.',
  'szklerózis multiplex': 'Autoimmun eredetű betegség, amelyben a szervezet saját immunrendszere károsítja a velőshüvelyt, lassítva vagy megszakítva az ingerületvezetést.',

  // 4. modul, 27. fejezet: Az idegrendszer általános jellemzése
  'receptor': 'Egy inger felvételére specializálódott sejt vagy sejtrész.',
  'adekvát inger': 'Az az ingertípus, amelyre egy adott receptor a legérzékenyebb, a legalacsonyabb ingerküszöbbel reagál.',
  'központi idegrendszer': 'Az idegrendszer agyból és gerincvelőből álló része.',
  'környéki idegrendszer': 'Az idegrendszer testben mindenhová elágazó idegekből és dúcokból álló része.',
  'fehérállomány': 'A velőshüvelyes (ezért fehéres színű) axonokból álló idegszövet.',
  'szürkeállomány': 'Az idegsejttestekből és dendritekből (ezért szürkés színű) álló idegszövet.',
  'reflexkör': 'A reflexívnek egy visszacsatolási hurokkal kiegészített változata, amely lehetővé teszi a válasz finomítását.',
  'agykéreg': 'Az agy felszínén elhelyezkedő, idegsejttestekből álló réteg (szürkeállomány), amely a magasabb rendű idegi feldolgozást végzi.',
  'barázda': 'Az agykéreg felszínének befelé húzódó mélyedése, amely a tekervényekkel együtt megnöveli a kéreg összfelületét.',
  'tekervény': 'Az agykéreg felszínének kidudorodó redője, amely a barázdákkal együtt megnöveli a kéreg összfelületét.',

  // 4. modul, 28. fejezet: A gerincvelő és az agy
  'agy-gerincvelői folyadék': 'A központi idegrendszert körülvevő folyadék (liquor), amely párnázó, ütéscsillapító szerepet tölt be.',
  'agyhártya': 'A központi idegrendszert védő, több rétegű kötőszöveti burok.',
  'térdreflex': 'Izomeredetű gerincvelői reflex, amelyet az inas gyors megütésével lehet kiváltani, és amely az izomtónus fenntartásában segít.',
  'agytörzs': 'Az agy azon része (nyúltvelő, híd, középagy), amely az alapvető életfunkciók (pl. légzés, keringés) szabályozásáért felel.',
  'köztiagy': 'Az agy azon része, amely a talamuszból (érzőpályák átkapcsoló állomása) és a hipotalamuszból (homeosztázis, hormonrendszer irányítása) áll.',
  'kisagy': 'Az agy azon része, amely elsősorban a mozgások összehangolásáért (koordinációjáért) felelős.',
  'nagyagy': 'Az agy azon része, amely a magasabb rendű idegi működéseket (tudatos gondolkodás, érzékelés, mozgásirányítás) végzi.',
  'hálózatos állomány': 'Az agytörzsben elhelyezkedő szerkezet (retikuláris formáció), amely az éberségi szintet és az alvás-ébrenléti ciklust tartja fenn.',
  'agyfélteke': 'A nagyagy két fele, amelyek funkciói (nyelvi-logikai vs. téri-vizuális feldolgozás) nem teljesen egyenrangúak, de szorosan együttműködnek.',

  // 4. modul, 29. fejezet: Testérző rendszerek
  'elsődleges érzőkéreg': 'Az agykéreg azon területe, ahol a testérzékelés tudatosul; sérülése az adott testtájékról érkező érzékelés tudatosulásának kiesését okozza.',
  'mechanikai receptor': 'Nyomást, érintést és rezgést érzékelő receptortípus.',
  'fájdalomreceptor': 'A szöveti károsodást jelző, potenciálisan veszélyes ingerekre reagáló receptortípus.',
  'hőreceptor': 'A hideg és a meleg érzékelését lehetővé tevő receptortípus.',
  'szabad idegvégződés': 'Egyszerű felépítésű, gyakran fájdalom érzékelésére szolgáló receptor, amely nem kapcsolódik specializált érzékelő sejthez.',
  'kéreg alatti feldolgozás': 'Az érzőpályák kéreg alatti központjaiban (pl. a talamuszban) történő előzetes feldolgozás, mielőtt az információ elérné az agykérget.',

  // 4. modul, 30. fejezet: Érzékelés és látás
  'érzet': 'Egy inger agyi, szubjektív megélése, amely az ingerület agykéregben történő tudatosulásakor jön létre.',
  'illúzió': 'Egy valóban létező, fizikai inger téves, a valóságtól eltérő értelmezése.',
  'hallucináció': 'Olyan érzet, amely valós, külső inger nélkül keletkezik, mégis valóságosnak tűnik.',
  'retina': 'A szem ideghártyája, amelyben a fényérzékeny receptorok (csapok és pálcikák) helyezkednek el.',
  'vakfolt': 'A retina receptormentes pontja, ahol a látóideg elhagyja a szemet.',
  'akkomodáció': 'A szemlencse alakjának izmos szabályozás általi megváltoztatása, amely lehetővé teszi a közeli és távoli tárgyakra való éles fókuszálást.',
  'rövidlátás': 'Myopia; fénytörési hiba, amelynél a kép a retina elé fókuszálódik, ezért a távoli tárgyak elmosódottak.',
  'távollátás': 'Hyperopia; fénytörési hiba, amelynél a kép a retina mögé fókuszálódna, ezért a közeli tárgyak elmosódottak.',
  'zöldhályog': 'Glaukóma; a szem belnyomásának kóros emelkedése, amely kezeletlenül károsíthatja a látóideget és vaksághoz vezethet.',
  'csap': 'A retina fényérzékeny sejtje, amely erősebb megvilágítást igényel, de lehetővé teszi a színlátást.',
  'pálcika': 'A retina fényérzékeny sejtje, amely rendkívül fényérzékeny, ezért gyenge megvilágítás mellett is működik, de színek megkülönböztetésére nem képes.',
  'dúcsejt': 'A retina sejtje, amely a csapoktól és pálcikáktól érkező jeleket összegzi, mielőtt azok a látóidegen keresztül elhagynák a szemet.',

  // 4. modul, 31. fejezet: Hallás és egyensúlyérzés
  'dobhártya': 'A középfül azon része, amely a beérkező hanghullám hatására rezgésbe jön.',
  'hallócsontocska': 'A középfülben található apró csont (kalapács, üllő, kengyel), amely a hangrezgést mechanikusan erősíti és továbbítja.',
  'csiga': 'A belső fül hallásért felelős, csigavonalban tekeredő szerve, amelyben az alaphártya és a Corti-szerv található.',
  'tömlőcske': 'A belső fül egyensúlyérzékelő szerve, amely a fej egyenes vonalú gyorsulását és gravitációhoz viszonyított helyzetét érzékeli.',
  'zsákocska': 'A belső fül egyensúlyérzékelő szerve, amely a tömlőcskéhez hasonlóan a fej lineáris gyorsulását és helyzetét érzékeli.',
  'félkörös ívjárat': 'A belső fül három, egymásra merőleges egyensúlyérzékelő csatornája, amely a fej forgó irányú mozgásait érzékeli.',
  'alaphártya': 'A csigában húzódó szerkezet, amely a hang frekvenciájától függően más-más pontján rezeg maximálisan, ezáltal kódolva a hangmagasságot.',
  'corti-szerv': 'Az alaphártyán elhelyezkedő szerv, amely a hallás érzékelő sejtjeit, a szőrsejteket tartalmazza.',
  'szőrsejt': 'A belső fül mechanoreceptor sejtje, amely mechanikai rezgést vagy elmozdulást alakít át idegi ingerületté a hallásban és az egyensúlyérzékelésben.',
  'otolit': 'A tömlőcskében és a zsákocskában található apró kristály, amely a gravitáció vagy a gyorsulás hatására elmozdulva ingerli a szőrsejteket.',
  'izomorsó': 'Az izomban található receptor, amely az izom nyúlásának mértékét érzékeli.',
  'ínorsó': 'Az ínban található receptor, amely az ín feszülését érzékeli.',

  // 4. modul, 32. fejezet: Kémiai érzékelés
  'szaglóhám': 'Az orrüreg felső részén elhelyezkedő szövet, amely a szagérzékelő receptorsejteket tartalmazza.',
  'ízlelőbimbó': 'A nyelven elhelyezkedő érzékszervi egység, amely az öt alapízt (édes, sós, savanyú, keserű, umami) képes megkülönböztetni.',
  'alapíz': 'Az öt alapvető ízminőség egyike (édes, sós, savanyú, keserű, umami), amelyet az ízlelőbimbók megkülönböztetnek.',
  'retronazális szaglás': 'A szájüregből a garaton át az orrüregbe jutó illatanyagok érzékelése, amely az étel teljes íz-élményének nagy részéért felelős.',
  'kombinatorikus kódolás': 'Az az elv, amely szerint egy adott illatanyag több receptortípust is eltérő mértékben aktivál, és az agy ezt az egyedi mintázatot értelmezi jellegzetes illatként.',
  'szaglási adaptáció': 'Az a jelenség, amikor egy tartósan jelen lévő szag idővel egyre kevésbé tudatosul, majd eltűnik a tudatos érzékelésből.',

  // 4. modul, 33. fejezet: Testmozgató rendszerek
  'mozgatókéreg': 'Az agykéreg azon területe, amely az akaratlagos mozgások tervezését és kiváltását végzi.',
  'mozgatópálya': 'Az agykéregből induló idegpálya, amely a gerincvelőn és a mozgatóidegsejteken keresztül a vázizmokhoz juttatja el a mozgásparancsot.',
  'kereszteződés': 'A mozgatópályák nagy részének átkereszteződése az agytörzs szintjén, amely miatt az egyik agyfélteke az ellenkező oldali testfél mozgását irányítja.',
  'mozgáskoordináció': 'A mozgások időbeli és erősségbeli összehangolása, amelyet elsősorban a kisagy végez.',
  'bazális ganglionok': 'Kéreg alatti magvak, amelyek átkapcsolási pontként működve részt vesznek a jól begyakorolt, automatizált mozgások szabályozásában.',
  'automatizált mozgás': 'Sokat gyakorolt, jól begyakorolt mozgás, amelynek irányítása fokozatosan a kéreg alatti magvakra tevődik át, tudatos odafigyelés nélkül végrehajthatóvá válva.',

  // 4. modul, 34. fejezet: Vegetatív érző és mozgató rendszerek
  'vegetatív idegrendszer': 'Az idegrendszer azon része (más néven autonóm idegrendszer), amely a belső szervek akaratlan, önműködő szabályozásáért felelős.',
  'szimpatikus idegrendszer': 'A vegetatív idegrendszer azon része, amely a szervezetet megterhelést, veszélyt vagy fokozott aktivitást igénylő helyzetekre ("harcolj vagy menekülj") készíti fel.',
  'paraszimpatikus idegrendszer': 'A vegetatív idegrendszer azon része, amely a nyugalmi, "pihenés és emésztés" jellegű állapotot segíti elő.',
  'noradrenalin': 'A szimpatikus idegrendszer végződései által felszabadított jelátvivő anyag.',
  'acetilkolin': 'A paraszimpatikus idegrendszer végződései által felszabadított jelátvivő anyag.',

  // 4. modul, 35. fejezet: Öröklött magatartáselemek
  'szopóreflex': 'Az újszülöttnél már közvetlenül születés után, tanulás nélkül működő öröklött reflex, amely biztosítja az azonnali táplálékfelvételi képességet.',
  'evolúciós alap': 'Egy adott emberi viselkedésforma hátterében álló, öröklődés útján biztosított genetikai hajlam.',
  'ökológiai alap': 'Egy adott emberi viselkedésforma konkrét megvalósulását az adott környezeti feltételekhez (pl. éghajlat, elérhető erőforrások) igazító tényező.',
  'kulturális alap': 'Egy adott emberi viselkedésforma közösségi hagyományokon, normákon és tanult szokásokon keresztül alakuló összetevője.',

  // 4. modul, 36. fejezet: Tanult elemek és emlékezés
  'rövid távú memória': 'Korlátozott kapacitású, jellemzően csak néhány másodperctől percekig tartó információtárolásra képes memóriarendszer.',
  'hosszú távú memória': 'Gyakorlatilag korlátlan kapacitású memóriarendszer, amely az információt akár egész életen át képes megőrizni.',
  'megerősítés': 'Egy viselkedést követő kellemes következmény, amely növeli a viselkedés megismétlődésének valószínűségét.',
  'utánzásos tanulás': 'Mások viselkedésének puszta megfigyelésével, saját próbálkozás nélkül történő tanulási forma.',

  // 4. modul, 37. fejezet: Pszichés fejlődés
  'szocializáció': 'Az a folyamat, amelynek során az egyén elsajátítja a közösség alapvető társadalmi normáit, viselkedési mintáit és érzelemkifejezési módjait.',
  'érzelmi biztonság': 'A gondozóval kialakuló stabil, bizalmi kapcsolat által megalapozott állapot, amely elősegíti a gyermek nyitottságát és értelmi fejlődését.',
  'kötődés': 'A csecsemő és az elsődleges gondozó között kialakuló, tartós érzelmi kapcsolat, amely biztonságot nyújt a környezet felfedezéséhez.',

  // 4. modul, 38. fejezet: Az idegrendszer egészségtana
  'stresszbetegség': 'A tartósan magas stressz-szint által kiváltott vagy súlyosbított betegség (pl. tartós fejfájás, alvászavar, szorongásos tünetek).',
  'migrén': 'Jellemzően féloldali, lüktető fejfájás, amelyet gyakran fény- és hangérzékenység, illetve hányinger kísér, hátterében az agyhártyát ellátó erek átmeneti összehúzódása majd kitágulása áll.',
  'epilepszia': 'Az agy kóros, rohamszerű elektromos kisülése által kiváltott tünetegyüttes, jellegzetes megnyilvánulása a görcsroham.',
  'ortorexia': 'Az egészséges táplálkozás iránti túlzott, már károssá váló megszállottság.',
  'anorexia': 'Tudatos, súlyos éhezéssel járó táplálkozási zavar, amelyben a fogyás iránti vágy túlzott.',
  'bulímia': 'Falásrohamokkal jellemezhető táplálkozási zavar, amelyeket kompenzáló viselkedés (pl. hánytatás) követ.',
  'kémiai függőség': 'Egy anyaghoz (pl. drog, alkohol) kötődő függőség, amely tolerancia és elvonási tünetek kialakulásával jár.',
  'viselkedési függőség': 'Egy tevékenységhez (pl. szerencsejáték, túlzott internethasználat) kötődő függőség, amely a kémiai függőséghez hasonló mechanizmuson alapul.',
  'pszichoszomatikus betegség': 'Olyan testi betegség, amelynek kialakulásában vagy súlyosbodásában érzelmi-pszichés tényezők (pl. tartós stressz) is jelentős szerepet játszanak.',
  'alzheimer-kór': 'Fokozatosan súlyosbodó idegrendszeri betegség, amelynek jellemző tünetei a memóriazavar, a térbeli-időbeli tájékozódási nehézség és a mindennapi tevékenységek elvégzésének fokozatos elvesztése.',
  'parkinson-kór': 'Elsősorban mozgászavarokkal járó idegrendszeri betegség (nyugalmi remegés, izommerevség, mozgáslassulás), hátterében a bazális ganglionok egyes sejtjeinek pusztulása áll.',

  // 4. modul, 39. fejezet: Hormonális működések
  'hormon': 'A belső elválasztású mirigyek által termelt és közvetlenül a vérbe kiválasztott jelanyag, amely a célsejtek receptorain keresztül fejti ki hatását.',
  'belső elválasztású mirigy': 'Olyan mirigy, amely váladékát (hormonját) vezeték nélkül, közvetlenül a véráramba választja ki.',
  'célsejt': 'Az a sejt, amely rendelkezik egy adott hormonhoz illeszkedő receptorral, ezért az adott hormon rá fejti ki a hatását.',
  'glükokortikoid': 'A mellékvesekéreg által termelt hormoncsoport, amely többek között a vércukorszintet emeli és a stresszválaszban vesz részt.',
  'mineralokortikoid': 'A mellékvesekéreg által termelt hormoncsoport (pl. aldoszteron), amely a só- és vízháztartás szabályozásában vesz részt.',

  // 4. modul, 40. fejezet: Belső elválasztású mirigyek
  'agyalapi mirigy': 'Az agy alján, a hipotalamusz alatt elhelyezkedő mirigy (hipofízis), amely irányító hormonjaival számos más mirigy működését szabályozza.',
  'pajzsmirigy': 'A gégeporc alatt, a nyak elülső részén elhelyezkedő mirigy, amely a tiroxint termeli.',
  'mellékvese': 'A vesék felső pólusán elhelyezkedő mirigy, amelynek kérge (glükokortikoidok, mineralokortikoidok) és velőállománya (adrenalin) is hormontermelő.',
  'inzulin': 'A hasnyálmirigy szigetsejtjeiben termelődő hormon, amely csökkenti a vércukorszintet.',
  'tiroxin': 'A pajzsmirigyben termelődő hormon, amely a sejtek anyagcseréjének alapszintjét szabályozza.',
  'tesztoszteron': 'A herékben termelődő hormon, amely a másodlagos nemi jellegek kialakulásáért és a spermiumtermelésért felelős.',
  'oxitocin': 'Az agyalapi mirigy hátsó lebenyéből kiválasztódó hormon, amely a szülés során a méh összehúzódásait, szoptatáskor a tejleadási reflexet váltja ki, és szerepet játszik a kötődés kialakulásában.',
  'exokrin mirigy': 'Olyan mirigy, amely váladékát egy vezetéken keresztül a testfelszínre vagy egy testüregbe választja ki.',
  'hipotalamusz': 'Az agy azon területe, amely irányító hormonjaival szabályozza az agyalapi mirigy hormontermelését.',
  'ösztrogén': 'A petefészekben, elsősorban az érő tüszőkben termelődő hormon, amely a méhnyálkahártya felépülését segíti elő.',
  'progeszteron': 'A petefészek sárgatestje által termelt hormon, amely a méhnyálkahártyát a beágyazódásra készíti fel.',

  // 4. modul, 41. fejezet: A hormonrendszer egészségtana
  'cukorbetegség': 'A vércukorszint szabályozásának kóros zavara; 1-es típusban a hasnyálmirigy szigetsejtjeinek pusztulása, 2-es típusban inzulinrezisztencia áll a hátterében.',
  'inzulinrezisztencia': 'A szervezet sejtjeinek csökkent érzékenysége az inzulinra, ami miatt a hasnyálmirigynek egyre több inzulint kell termelnie.',
  'hypothyreosis': 'A pajzsmirigy alulműködése, amely lassult anyagcserét, fáradékonyságot és hidegérzékenységet okoz.',
  'növekedési hormon': 'Az agyalapi mirigy által termelt hormon, amelynek hiánya törpenövéshez, többlete óriásnövéshez vagy akromegáliához vezethet.',
  'akromegália': 'Felnőttkorban jelentkező növekedésihormon-többlet okozta állapot, amelyre a végtagok, az áll és az arccsontok jellegzetes megvastagodása jellemző.',

  // 4. modul, 42. fejezet: Immunitás
  'immunitás': 'A szervezet azon képessége, hogy ellenálljon a kórokozóknak és az általuk okozott betegségeknek.',
  'falósejt': 'Az immunrendszer sejtje, amely bekebelezi és lebontja a kórokozókat.',
  'limfocita': 'Nyiroksejt, amely az adaptív immunválaszért felelős, és antitesteket termel.',
  'memóriasejt': 'Egy kórokozóval való első találkozás után kialakuló immunsejt, amely biztosítja, hogy egy ismételt fertőzés esetén gyorsabb, hatékonyabb másodlagos immunválasz alakuljon ki.',
  'gyulladás': 'A szervezet védekező reakciója egy sérülés vagy fertőzés helyén, jellemző tünetei a bőrpír, a duzzanat, a melegségérzet és a fájdalom.',
  'immunglobulin': 'Antitest; olyan fehérje, amelyet az immunrendszer termel, és amely specifikusan felismeri és megköti az adott antigént.',
  'vérszérum': 'A véralvadás után visszamaradó folyadék, amely tartalmazza az antitesteket.',
  'autoimmun betegség': 'Olyan betegség, amelynek lényege, hogy az immunrendszer tévesen a szervezet saját sejtjei ellen fordul.',

  // 4. modul, 43. fejezet: Vércsoportok
  'vérátömlesztés': 'Súlyos vérveszteség esetén alkalmazott életmentő eljárás, amely csak összeférhető vércsoportú vérrel végezhető biztonságosan.',
  'véradás': 'Egészséges donorok önkéntes vérfelajánlása, amely a vérátömlesztéshez szükséges vérkészletek fenntartásához elengedhetetlen.',
  'rh-összeférhetetlenség': 'Az a jelenség, amikor egy Rh-negatív édesanya immunrendszere antitesteket termel egy Rh-pozitív magzat vörösvértestjei ellen.',
  'anti-d immunglobulin': 'Rh-negatív édesanyáknak szülés után adott injekció, amely megelőzi az Rh-összeférhetetlenség kialakulását egy következő terhesség során.',

  // 4. modul, 44. fejezet: Az immunrendszer egészségtana
  'láz': 'A testhőmérséklet szabályozott emelése, amely megnehezíti egyes kórokozók szaporodását és felgyorsítja az immunrendszer sejtjeinek működését.',
  'allergia': 'Az immunrendszer túlérzékenységi reakciója egy önmagában ártalmatlan anyaggal (allergénnel) szemben.',
  'allergén': 'Önmagában ártalmatlan anyag (pl. pollen, egyes ételek, poratka), amely allergiás reakciót válthat ki.',
  'kilökődés': 'Az átültetett szerv immunrendszer általi, idegenként való felismerése és megtámadása.',
  'immunszupresszió': 'Az immunrendszer működésének gyógyszeres gyengítése, amely a szervátültetés utáni kilökődés megelőzésére szolgál.',

  // 4. modul, 45. fejezet: Szaporítószervek
  'here': 'A férfi ivarmirigye, amely a hímivarsejteket és a tesztoszteront termeli.',
  'mellékhere': 'A here mögött elhelyezkedő szerv, amelyben a spermiumok tovább érnek és tárolódnak.',
  'ondóvezeték': 'A mellékherétől a húgycsőig vezető cső, amely a spermiumokat szállítja.',
  'dülmirigy': 'A prosztata magyar neve; a húgycső körül elhelyezkedő mirigy, amelynek váladéka az ondófolyadék részét képezi.',
  'petefészek': 'A női ivarmirigy, amelyben a petesejtek érnek, és amely az ösztrogént és a progeszteront termeli.',
  'petevezeték': 'A petefészket a méhhel összekötő cső, amelyben a megtermékenyítés is történik.',
  'méh': 'Izmos falú női szaporítószerv, amelynek belső rétegében (méhnyálkahártya) a magzat beágyazódik és fejlődik.',
  'hüvely': 'A méhet a testfelszínnel összekötő csatorna, amely a párzás és a szülés útjául is szolgál.',
  'kromoszomális nem': 'A biológiai nem meghatározottságának egyik szintje: az ivari kromoszómák (embernél XX vagy XY) összetétele.',
  'akroszóma': 'A hímivarsejt fejrészét beborító képlet, amely a petesejt burkát átható enzimeket tartalmazza.',

  // 4. modul, 46. fejezet: Egyedfejlődés
  'barázdálódás': 'A zigóta ismételt sejtosztódásai a petevezetékben, amelyek során a sejtszám gyorsan nő, a sejtek mérete viszont nem.',
  'beágyazódás': 'A barázdálódás eredményeként létrejövő hólyagszerű képlet megtapadása a méhnyálkahártyában, ami a terhesség tényleges kezdetét jelenti.',
  'magzatvíz': 'Az amnion magzatburok által körülzárt folyadék, amely mechanikai védelmet nyújt és mozgásteret biztosít a fejlődő magzatnak.',
  'köldökzsinór': 'A magzatot a méhlepénnyel összekötő képlet, amelyen keresztül az anyagcsere-kapcsolat megvalósul.',
  'klinikai halál': 'A légzés és a keringés leállása; rövid időn belül még visszafordítható állapot, mivel az agysejtek ekkor még nem pusztultak el véglegesen.',
  'biológiai halál': 'A sejtek, szövetek (elsősorban az agysejtek) visszafordíthatatlan pusztulása; végleges állapot.',

  // 4. modul, 47. fejezet: A szaporodás, fejlődés egészségtana
  'fogamzásgátlás': 'A nem kívánt terhesség megelőzését szolgáló módszerek összessége (pl. hormonális, mechanikai, természetes módszerek).',
  'terhességi teszt': 'Vizsgálat, amely a méhlepény által termelt hCG hormont mutatja ki a vizeletből vagy a vérből, jelezve a terhesség fennállását.',
  'meddőség': 'Az az állapot, amikor egy pár tartósan nem képes teherbe esni; hátterében állhat ivarsejttermelési zavar vagy hormonzavar.',
  'terhesgondozás': 'A terhesség alatti rendszeres orvosi ellenőrzés, amely lehetővé teszi a lehetséges szövődmények korai felismerését és kezelését.',
  'nemi úton terjedő betegség': 'Nemi érintkezés során terjedő fertőzés (pl. szifilisz, AIDS, egyes gombás fertőzések), amely gyakran tünetmentesen is terjedhet.',

  // 5. modul, 1. fejezet: Populáció
  'egyedsűrűség': 'Az egységnyi területre (vagy térfogatra) jutó egyedek száma egy populációban.',
  'koreloszlás': 'A populáció egyedeinek megoszlása a különböző korcsoportok között.',
  'térbeli eloszlás': 'Annak leírása, hogyan helyezkednek el egy populáció egyedei az adott területen belül (egyenletesen, csoportosan vagy véletlenszerűen).',
  'eltartóképesség': 'Az a maximális egyedszám, amelyet egy adott élőhely erőforrásai tartósan el tudnak tartani.',
  'exponenciális növekedés': 'Korlátlan, folyamatosan gyorsuló ütemű, "J" alakú populáció-növekedési modell, amely a valóságban csak rövid ideig figyelhető meg.',
  'logisztikus növekedés': 'Korlátozott, kezdetben gyors, majd az eltartóképesség közelítésével ellaposodó, "S" alakú populáció-növekedési modell.',

  // 5. modul, 2. fejezet: Környezeti kölcsönhatások
  'gradáció': 'Egy populáció létszámának hirtelen, robbanásszerű megnövekedése, amelyet jellemzően gyors összeomlás követ.',
  'környezet': 'Az élő szervezetet körülvevő élettelen (pl. hőmérséklet, fény, víz, talaj) és élő (pl. más fajok) tényezők összessége.',
  'tűrőképesség': 'Az a tartomány (minimum és maximum érték között), amelyen belül egy szervezet egy adott környezeti tényező mellett még életképes.',
  'szűk tűrés': 'Egy faj tűrőképességi tartományának keskeny volta egy adott környezeti tényezőre nézve, ami kevéssé alkalmazkodóképessé teszi.',
  'tág tűrés': 'Egy faj tűrőképességi tartományának széles volta egy adott környezeti tényezőre nézve, ami rugalmas alkalmazkodást tesz lehetővé.',
  'r-stratégista': 'Olyan faj, amely sok utódot hoz létre, gyorsan szaporodik, de kevés gondoskodást nyújt, és létszáma erősen ingadozhat.',
  'k-stratégista': 'Olyan faj, amely kevesebb utódot hoz létre, de azokról hosszan gondoskodik, és létszáma az élőhely eltartóképessége közelében stabilizálódik.',
  'korfa': 'Egy populáció koreloszlását ábrázoló grafikon, jellemzően nemenként elkülönítve; alakja (piramis, urna, téglalap) a populáció növekedési tendenciájára utal.',
  'niche': 'Az a többdimenziós "tér" (több környezeti tényező együttes hatása), amelyben egy faj életképes.',
  'gauze-elv': 'A versengési kizárás elve: két faj, amely pontosan ugyanazt az ökológiai niche-t foglalná el, tartósan nem élhet együtt ugyanazon a területen.',

  // 5. modul, 3. fejezet: Viselkedésbeli kölcsönhatások
  'tömörülés': 'Egy adott erőforrás körül alkalomszerűen kialakuló, laza állati csoportosulás.',
  'kolónia': 'Sok egyed tartós, szorosan együtt élő közössége (pl. hangyaboly, méhkaptár).',
  'monogám pár': 'Egy hím és egy nőstény tartós, kizárólagos párkapcsolata.',
  'hárem': 'Egy hím és több nőstény tartós társas csoportja.',
  'csoportos kohézió': 'A csoporthoz tartozás által nyújtott biztonságérzet, hatékonyabb védekezés és jobb erőforrás-hozzáférés, amely a társas vonzódás egyik magyarázata.',
  'behódolás': 'Egy alárendelt egyed jelzése, amellyel elkerüli a konfliktust egy magasabb rangú társsal.',

  // 5. modul, 4. fejezet: Ökológiai kölcsönhatások
  'szimbiózis': 'Két faj szoros, mindkét fél számára előnyös együttélése.',
  'asztalközösség': 'Kölcsönhatás, amelyben az egyik fél előnyt élvez, a másiknak pedig nem árt és nem is használ (kommenzalizmus).',
  'antibiózis': 'Kölcsönhatás, amelyben az egyik faj olyan anyagot termel, amely gátolja vagy elpusztítja a másik faj egyedeit.',
  'élősködés': 'Kölcsönhatás (parazitizmus), amelyben az egyik fél a másik kárára táplálkozik, jellemzően anélkül, hogy azonnal elpusztítaná azt.',
  'táplálkozási kölcsönhatás': 'Az egyik faj (ragadozó) másik faj (zsákmány) elfogyasztásán alapuló kölcsönhatás (predáció).',
};
