// Sematikus, saját készítésű ábra: az aldózok és ketózok közötti különbség
// szemléltetése a karbonilcsoport (C=O) lánc menti helyzete alapján.
// A cél a BESOROLÁSI ELV megértése, nem a pontos molekulaszerkezet.

const SzenLanc = ({ y, karbonilIndex, cimke, szin }) => {
  const atomSzam = 5;
  const spacing = 60;
  const startX = 30;

  return (
    <g>
      <text x="0" y={y + 5} className="fill-current text-xs font-bold" textAnchor="start">
        {cimke}
      </text>
      {Array.from({ length: atomSzam }).map((_, i) => {
        const cx = startX + i * spacing + 90;
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
            <circle cx={cx} cy={y} r="14" className={isKarbonil ? `fill-current ${szin}` : 'fill-current text-slate-300 dark:text-slate-600'} />
            <text x={cx} y={y + 4} textAnchor="middle" className="fill-white text-[10px] font-bold">
              {isKarbonil ? 'C=O' : 'C'}
            </text>
          </g>
        );
      })}
    </g>
  );
};

const AldozKetoz = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      Aldóz és ketóz: a karbonilcsoport (C=O) helyzete a szénláncon
    </p>
    <svg viewBox="0 0 420 140" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Aldóz és ketóz megkülönböztetése a karbonilcsoport helyzete alapján">
      <SzenLanc y={35} karbonilIndex={0} cimke="Aldóz" szin="text-primary-500" />
      <SzenLanc y={100} karbonilIndex={1} cimke="Ketóz" szin="text-emerald-500" />
    </svg>
    <p className="text-[11px] text-slate-500 text-center mt-2">
      Aldóznál a karbonilcsoport a lánc végén, ketóznál a lánc belsejében (jellemzően a 2. szénatomon) található.
    </p>
  </div>
);

export default AldozKetoz;
