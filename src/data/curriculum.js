// A BioSiker tananyag-struktúrája.
//
// Minden modul egy nagyobb érettségi témakört fed le, ami fejezetekre (chapter)
// bomlik. Minden modul első fejezete ingyenesen elérhető ízelítőként — a többi
// előfizetéshez kötött (lásd: UserDataContext -> canAccessChapter).
//
// Új modul/fejezet hozzáadásához NEM kell máshol kódot módosítani, elég ide
// felvenni egy új objektumot. A `content` mező egyelőre részben placeholder —
// ez egy külön, folyamatos tartalom-fejlesztési munka.

export const CURRICULUM = [
  {
    id: 'biokemia',
    title: 'Biokémia',
    description: 'A sejtek kémiai felépítése: biogén elemek, víz, makromolekulák.',
    icon: 'FlaskConical',
    color: 'from-emerald-500 to-teal-500',
    chapters: [
      {
        id: 'biogen-elemek',
        title: 'Biogén elemek és szervetlen vegyületek',
        order: 1,
        isFree: true,
        estimatedMinutes: 12,
        content: {
          intro: 'A biogén elemek azok a kémiai elemek, amelyek nélkülözhetetlenek az élő szervezetek felépítésében és működésében.',
          sections: [
            {
              heading: 'Makroelemek',
              paragraphs: [
                'A szervezet tömegének 95-99%-át hat elem adja: szén (C), hidrogén (H), oxigén (O), nitrogén (N), foszfor (P) és kén (S). Ezek alkotják a szerves molekulák (fehérjék, szénhidrátok, lipidek, nukleinsavak) vázát.',
                'Emellett fontos makroelemek még a kalcium (Ca), kálium (K), nátrium (Na), klór (Cl) és magnézium (Mg) — ezek elsősorban ionos formában, az anyagcsere-folyamatok szabályozásában játszanak szerepet.',
              ],
            },
            {
              heading: 'Mikroelemek',
              paragraphs: [
                'Jóval kisebb mennyiségben, de éppolyan nélkülözhetetlenül vannak jelen olyan elemek, mint a vas (Fe, a hemoglobin része), a jód (I, a pajzsmirigyhormonok alkotója), a cink (Zn) és a réz (Cu), amelyek számos enzim működéséhez szükségesek.',
              ],
            },
          ],
          keyTerms: ['biogén elem', 'makroelem', 'mikroelem', 'nyomelem'],
        },
      },
      {
        id: 'viz-es-sok',
        title: 'Víz és sók biológiai szerepe',
        order: 2,
        isFree: false,
        estimatedMinutes: 15,
        content: { comingSoon: true },
      },
      {
        id: 'szenhidratok',
        title: 'Szénhidrátok',
        order: 3,
        isFree: false,
        estimatedMinutes: 18,
        content: { comingSoon: true },
      },
      {
        id: 'lipidek',
        title: 'Lipidek (zsírok)',
        order: 4,
        isFree: false,
        estimatedMinutes: 15,
        content: { comingSoon: true },
      },
      {
        id: 'feherjek',
        title: 'Fehérjék',
        order: 5,
        isFree: false,
        estimatedMinutes: 20,
        content: { comingSoon: true },
      },
      {
        id: 'nukleinsavak',
        title: 'Nukleinsavak (DNS, RNS)',
        order: 6,
        isFree: false,
        estimatedMinutes: 20,
        content: { comingSoon: true },
      },
    ],
  },
  {
    id: 'sejtbiologia',
    title: 'Sejtbiológia',
    description: 'A sejt felépítése, működése és osztódása.',
    icon: 'Microscope',
    color: 'from-blue-500 to-indigo-500',
    chapters: [
      {
        id: 'prokariota-eukariota',
        title: 'Prokarióta és eukarióta sejtek',
        order: 1,
        isFree: true,
        estimatedMinutes: 14,
        content: {
          intro: 'Minden élőlény sejtes felépítésű. A sejtek két nagy csoportba sorolhatók a belső felépítésük alapján.',
          sections: [
            {
              heading: 'Prokarióta sejtek',
              paragraphs: [
                'A prokarióta sejtekben (baktériumok, archeák) nincs valódi, hártyával határolt sejtmag — a genetikai állomány a citoplazmában, egy körkörös DNS-molekula formájában található. Membránnal határolt sejtszervecskéik sincsenek.',
              ],
            },
            {
              heading: 'Eukarióta sejtek',
              paragraphs: [
                'Az eukarióta sejtekben (növények, állatok, gombák, protiszták) valódi, kettős membránnal határolt sejtmag található, benne a DNS kromoszómákba rendeződve. Az eukarióta sejtekben ezen kívül számos membránnal határolt sejtszervecske (organellum) is van, pl. mitokondrium, endoplazmatikus retikulum, Golgi-készülék.',
              ],
            },
          ],
          keyTerms: ['prokarióta', 'eukarióta', 'sejtmag', 'organellum'],
        },
      },
      {
        id: 'sejtmembran',
        title: 'Sejtmembrán és anyagszállítás',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        content: { comingSoon: true },
      },
      {
        id: 'sejtorganellumok',
        title: 'Sejtorganellumok',
        order: 3,
        isFree: false,
        estimatedMinutes: 18,
        content: { comingSoon: true },
      },
      {
        id: 'mitozis',
        title: 'Sejtosztódás - Mitózis',
        order: 4,
        isFree: false,
        estimatedMinutes: 15,
        content: { comingSoon: true },
      },
      {
        id: 'meiozis',
        title: 'Sejtosztódás - Meiózis',
        order: 5,
        isFree: false,
        estimatedMinutes: 18,
        content: { comingSoon: true },
      },
    ],
  },
  {
    id: 'genetika',
    title: 'Genetika',
    description: 'Öröklődési szabályok, molekuláris genetika, mutációk.',
    icon: 'Dna',
    color: 'from-purple-500 to-pink-500',
    chapters: [
      {
        id: 'mendeli-oroklodes',
        title: 'Mendeli öröklődés alapjai',
        order: 1,
        isFree: true,
        estimatedMinutes: 16,
        content: {
          intro: 'Gregor Mendel borsónövényeken végzett kísérletei alapozták meg a modern genetika törvényszerűségeit.',
          sections: [
            {
              heading: 'Az uralkodás elve (dominancia)',
              paragraphs: [
                'Ha egy egyed egy adott tulajdonságra nézve két különböző allélt hordoz (heterozigóta), a domináns allél által meghatározott tulajdonság jelenik meg a fenotípusban, míg a recesszív allél hatása rejtve marad.',
              ],
            },
            {
              heading: 'Az egyeduralkodás törvénye',
              paragraphs: [
                'Két homozigóta, egymástól különböző szülő keresztezésekor az F1 generáció minden egyede egyforma, a domináns tulajdonságot mutatja.',
              ],
            },
          ],
          keyTerms: ['allél', 'domináns', 'recesszív', 'genotípus', 'fenotípus'],
        },
      },
      {
        id: 'kapcsolt-oroklodes',
        title: 'Kapcsolt öröklődés és rekombináció',
        order: 2,
        isFree: false,
        estimatedMinutes: 18,
        content: { comingSoon: true },
      },
      {
        id: 'molekularis-genetika',
        title: 'Molekuláris genetika - DNS-replikáció',
        order: 3,
        isFree: false,
        estimatedMinutes: 20,
        content: { comingSoon: true },
      },
      {
        id: 'feherjeszintezis',
        title: 'Fehérjeszintézis',
        order: 4,
        isFree: false,
        estimatedMinutes: 22,
        content: { comingSoon: true },
      },
      {
        id: 'mutaciok',
        title: 'Mutációk',
        order: 5,
        isFree: false,
        estimatedMinutes: 15,
        content: { comingSoon: true },
      },
    ],
  },
  {
    id: 'ember-keringes-legzes',
    title: 'Emberi szervezet - Keringés és légzés',
    description: 'A szív, az érrendszer és a légzőrendszer működése.',
    icon: 'HeartPulse',
    color: 'from-red-500 to-orange-500',
    chapters: [
      {
        id: 'sziv-felepitese',
        title: 'A szív felépítése és működése',
        order: 1,
        isFree: true,
        estimatedMinutes: 14,
        content: {
          intro: 'A szív egy izmos szerv, amely a vérkeringést tartja fenn folyamatos, ritmikus összehúzódásokkal.',
          sections: [
            {
              heading: 'A szív üregei',
              paragraphs: [
                'Az emberi szív négyüregű: két pitvarból és két kamrából áll. A jobb szívfél vénás (oxigénszegény), a bal szívfél artériás (oxigéndús) vért szállít.',
              ],
            },
          ],
          keyTerms: ['pitvar', 'kamra', 'szívbillentyű', 'szívciklus'],
        },
      },
      {
        id: 'verkeringes',
        title: 'Vérkeringés (kis és nagy vérkör)',
        order: 2,
        isFree: false,
        estimatedMinutes: 16,
        content: { comingSoon: true },
      },
      {
        id: 'legzorendszer',
        title: 'A légzőrendszer felépítése',
        order: 3,
        isFree: false,
        estimatedMinutes: 15,
        content: { comingSoon: true },
      },
      {
        id: 'gazcsere',
        title: 'Gázcsere és légzésszabályozás',
        order: 4,
        isFree: false,
        estimatedMinutes: 18,
        content: { comingSoon: true },
      },
    ],
  },
  {
    id: 'okologia',
    title: 'Ökológia',
    description: 'Populációk, életközösségek és globális ökológiai kérdések.',
    icon: 'Leaf',
    color: 'from-lime-500 to-green-600',
    chapters: [
      {
        id: 'populaciok',
        title: 'Populációk és életközösségek',
        order: 1,
        isFree: true,
        estimatedMinutes: 13,
        content: {
          intro: 'Az ökológia az élőlények egymással és környezetükkel való kapcsolatát vizsgálja.',
          sections: [
            {
              heading: 'Populáció',
              paragraphs: [
                'Populációnak nevezzük egy adott faj egyedeinek egy meghatározott területen, egy időben élő, egymással szaporodó közösségét.',
              ],
            },
            {
              heading: 'Életközösség (biocönózis)',
              paragraphs: [
                'Az életközösség egy adott élőhelyen együtt élő, egymással kölcsönhatásban lévő különböző populációk összessége.',
              ],
            },
          ],
          keyTerms: ['populáció', 'életközösség', 'élőhely', 'ökológiai niche'],
        },
      },
      {
        id: 'anyag-energiaforgalom',
        title: 'Anyag- és energiaforgalom az ökoszisztémákban',
        order: 2,
        isFree: false,
        estimatedMinutes: 17,
        content: { comingSoon: true },
      },
      {
        id: 'globalis-okologia',
        title: 'Globális ökológiai problémák',
        order: 3,
        isFree: false,
        estimatedMinutes: 15,
        content: { comingSoon: true },
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
