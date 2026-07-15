// Sematikus, sajat keszitesu abra: az aldozok es ketozok kozotti kulonbseg
// szemleltetese a karbonilcsoport (C=O) lanc menti helyzete alapjan.
// Celzottan magyarazo jellegu (szamozott szenatomok, -OH jelolesek), hogy
// olyan diak is ertse, aki meg nem talalkozott szenlanc-abrazolassal.

const SzenLanc = ({ y, karbonilIndex, cimke, szin, magyarazat }) => {
  const atomSzam = 5;
  const spacing = 70;
  const startX = 60;

  return (
    <g>
      <rect x="0" y={y - 30} width="120" height="60" rx="10" className={`fill-current ${szin} opacity-10`} />
      <text x="60" y={y + 6} textAnchor="middle" className={`fill-current text-sm font-extrabold ${szin}`}>
        {cimke}
      </text>

      {Array.from({ length: atomSzam }).map((_, i) => {
        const cx = startX + i * spacing + 150;
        const isKarbonil = i === karbonilIndex;
        return (
          <g key={i}>
            {i > 0 && (
              <line
                x1={cx - spacing}
                y1={y}
                x2={cx}
                y2={y}
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-400"
              />
            )}
            <circle cx={cx} cy={y} r="18" className={isKarbonil ? `fill-current ${szin}` : 'fill-current text-slate-300 dark:text-slate-600'} strokeWidth="0" />
            <text x={cx} y={y - 26} textAnchor="middle" className="fill-current text-[10px] text-slate-400">
              C{i + 1}
            </text>
            <text x={cx} y={y + 5} textAnchor="middle" className="fill-white text-[11px] font-bold">
              {isKarbonil ? 'C=O' : 'C'}
            </text>
            {!isKarbonil && (
              <text x={cx} y={y + 34} textAnchor="middle" className="fill-current text-[10px] text-slate-400">
                -OH
              </text>
            )}
          </g>
        );
      })}

      <text x={startX + karbonilIndex * spacing + 150} y={y - 45} textAnchor="middle" className={`fill-current text-[11px] font-bold ${szin}`}>
        {magyarazat}
      </text>
    </g>
  );
};

const AldozKetoz = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-1 text-center">
      Aldóz és ketóz: a karbonilcsoport (C=O) helyzete a szénláncon
    </p>
    <p className="text-[11px] text-slate-400 text-center mb-4">
      Minden monoszacharid szénatomjaihoz -OH csoport kapcsolódik, KIVÉVE azt az egyet, amelyiken a karbonilcsoport (C=O) található.
    </p>
    <svg viewBox="0 0 620 220" className="w-full h-auto max-w-lg mx-auto" role="img" aria-label="Aldóz és ketóz megkülönböztetése a karbonilcsoport helyzete alapján">
      <SzenLanc y={65} karbonilIndex={0} cimke="Aldóz" szin="text-primary-500" magyarazat="itt: aldehidcsoport (lánc vége)" />
      <SzenLanc y={165} karbonilIndex={1} cimke="Ketóz" szin="text-emerald-500" magyarazat="itt: ketocsoport (2. szénatom)" />
    </svg>
    <p className="text-[11px] text-slate-500 text-center mt-2">
      Példa aldózra: a glükóz. Példa ketózra: a fruktóz.
    </p>
  </div>
);

export default AldozKetoz;
