// Sematikus, sajat keszitesu abra: ket vizmolekula dipolus jellege
// (reszleges toltesek) es a kozottuk kialakulo hidrogenkotes.

const VizMolekula = ({ x, y }) => (
  <g transform={`translate(${x},${y})`}>
    <circle cx="0" cy="0" r="14" className="fill-current text-sky-500" />
    <text x="0" y="4" textAnchor="middle" className="fill-white text-[11px] font-bold">O</text>
    <text x="0" y="-20" textAnchor="middle" className="fill-current text-[10px] font-bold text-sky-600">δ−</text>

    <circle cx="-22" cy="20" r="8" className="fill-current text-slate-300 dark:text-slate-600" />
    <text x="-22" y="24" textAnchor="middle" className="fill-current text-[9px] font-bold">H</text>
    <text x="-30" y="42" textAnchor="middle" className="fill-current text-[10px] font-bold text-amber-600">δ+</text>

    <circle cx="22" cy="20" r="8" className="fill-current text-slate-300 dark:text-slate-600" />
    <text x="22" y="24" textAnchor="middle" className="fill-current text-[9px] font-bold">H</text>
    <text x="30" y="42" textAnchor="middle" className="fill-current text-[10px] font-bold text-amber-600">δ+</text>

    <line x1="0" y1="0" x2="-22" y2="20" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
    <line x1="0" y1="0" x2="22" y2="20" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
  </g>
);

const VizDipolus = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      A víz dipólus jellege és a hidrogénkötés két vízmolekula között
    </p>
    <svg viewBox="0 0 320 160" className="w-full h-auto max-w-sm mx-auto" role="img" aria-label="Két vízmolekula dipólus jellege és a köztük lévő hidrogénkötés">
      <VizMolekula x={80} y={60} />
      <VizMolekula x={230} y={90} />
      <line x1="110" y1="81" x2="216" y2="89" stroke="currentColor" strokeDasharray="4 4" strokeWidth="1.5" className="text-emerald-500" />
      <text x="163" y="70" textAnchor="middle" className="fill-current text-[10px] font-bold text-emerald-600">
        hidrogénkötés
      </text>
    </svg>
  </div>
);

export default VizDipolus;
