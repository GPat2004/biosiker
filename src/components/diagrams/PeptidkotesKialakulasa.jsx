// Sematikus, saját készítésű ábra a peptidkötés (amidkötés) kialakulásáról:
// egy aminosav karboxil-csoportja (-COOH) egy másik aminosav amino-csoportjával
// (-NH2) reagál, víz kilépése mellett, létrehozva a -CO-NH- peptidkötést.

const AminosavDoboz = ({ x, y, cimke }) => (
  <g transform={`translate(${x},${y})`}>
    <rect width="150" height="56" rx="10" className="fill-current text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="1.5" />
    <text x="75" y="24" textAnchor="middle" className="fill-current text-[11px] font-mono font-bold">
      H₂N–CH(R)–COOH
    </text>
    <text x="75" y="44" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
      {cimke}
    </text>
  </g>
);

const PeptidkotesKialakulasa = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      A peptidkötés kialakulása két aminosav kondenzációjával
    </p>
    <svg viewBox="0 0 700 220" className="w-full h-auto max-w-2xl mx-auto" role="img" aria-label="A peptidkötés kialakulása két aminosav kondenzációjával, víz kilépésével">
      <AminosavDoboz x={10} y={20} cimke="1. aminosav" />
      <text x={185} y={55} textAnchor="middle" className="fill-current text-xl font-bold text-slate-400">+</text>
      <AminosavDoboz x={210} y={20} cimke="2. aminosav" />

      <g transform="translate(400,48)">
        <line x1="0" y1="0" x2="70" y2="0" stroke="currentColor" strokeWidth="2.5" className="text-slate-400" />
        <polygon points="70,0 58,-6 58,6" className="fill-current text-slate-400" />
        <text x="35" y="-14" textAnchor="middle" className="fill-current text-[11px] font-bold text-emerald-600">kondenzáció</text>
        <text x="35" y="20" textAnchor="middle" className="fill-current text-[11px] text-slate-400">(−H₂O)</text>
      </g>

      <g transform="translate(500,20)">
        <rect width="190" height="56" rx="10" className="fill-current text-slate-100 dark:text-slate-800" stroke="currentColor" strokeWidth="1.5" />
        <text x="95" y="24" textAnchor="middle" className="fill-current text-[10px] font-mono font-bold">
          H₂N–CH(R)–CO–NH–CH(R&apos;)–COOH
        </text>
        <text x="95" y="44" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
          dipeptid
        </text>
      </g>

      <g transform="translate(583,95)">
        <rect x="-30" y="0" width="46" height="22" rx="6" className="fill-current text-emerald-500" />
        <text x="-7" y="16" textAnchor="middle" className="fill-white text-[10px] font-bold">
          CO–NH
        </text>
        <line x1="-7" y1="22" x2="-7" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-emerald-500" />
        <text x="-7" y="66" textAnchor="middle" className="fill-current text-[11px] font-bold text-emerald-600">
          peptidkötés
        </text>
      </g>
    </svg>
  </div>
);

export default PeptidkotesKialakulasa;
