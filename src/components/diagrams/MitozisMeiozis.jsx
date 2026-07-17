// Sematikus, saját készítésű ábra: a mitózis és a meiózis eredményének
// összehasonlítása (sejtszám és kromoszómaszám).

const Sejt = ({ x, y, kromoszoma, szin }) => (
  <g transform={`translate(${x},${y})`}>
    <circle r="24" className={`fill-current ${szin} opacity-15`} stroke="currentColor" strokeWidth="2" />
    <text y="5" textAnchor="middle" className={`fill-current text-[12px] font-bold ${szin}`}>
      {kromoszoma}
    </text>
  </g>
);

const MitozisMeiozis = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      Mitózis és meiózis: hány sejt keletkezik, és hány kromoszómával?
    </p>
    <svg viewBox="0 0 480 340" className="w-full h-auto max-w-lg mx-auto" role="img" aria-label="Mitózis és meiózis eredményének összehasonlítása">
      {/* MITOZIS */}
      <text x="60" y="24" textAnchor="middle" className="fill-current text-[11px] font-bold text-slate-500">MITÓZIS</text>
      <Sejt x={60} y={65} kromoszoma="46" szin="text-primary-600" />
      <line x1="88" y1="65" x2="145" y2="65" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="145,65 136,60 136,70" className="fill-current text-slate-400" />
      <Sejt x={185} y={42} kromoszoma="46" szin="text-primary-600" />
      <Sejt x={185} y={88} kromoszoma="46" szin="text-primary-600" />
      <text x="240" y="65" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        1 osztódás → 2 testi sejt,
      </text>
      <text x="240" y="80" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        változatlan kromoszómaszám
      </text>

      <line x1="10" y1="120" x2="470" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-200 dark:text-slate-700" />

      {/* MEIOZIS */}
      <text x="60" y="150" textAnchor="middle" className="fill-current text-[11px] font-bold text-slate-500">MEIÓZIS</text>
      <Sejt x={60} y={190} kromoszoma="46" szin="text-emerald-600" />

      <line x1="88" y1="190" x2="135" y2="190" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="135,190 126,185 126,195" className="fill-current text-slate-400" />

      <Sejt x={170} y={165} kromoszoma="23" szin="text-emerald-600" />
      <Sejt x={170} y={215} kromoszoma="23" szin="text-emerald-600" />

      <line x1="196" y1="165" x2="245" y2="145" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <line x1="196" y1="165" x2="245" y2="185" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <line x1="196" y1="215" x2="245" y2="195" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <line x1="196" y1="215" x2="245" y2="235" stroke="currentColor" strokeWidth="2" className="text-slate-400" />

      <Sejt x={280} y={140} kromoszoma="23" szin="text-emerald-600" />
      <Sejt x={280} y={180} kromoszoma="23" szin="text-emerald-600" />
      <Sejt x={280} y={220} kromoszoma="23" szin="text-emerald-600" />
      <Sejt x={280} y={260} kromoszoma="23" szin="text-emerald-600" />

      <text x="390" y="192" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        2 osztódás → 4 ivarsejt,
      </text>
      <text x="390" y="207" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        felezett kromoszómaszám
      </text>
    </svg>
  </div>
);

export default MitozisMeiozis;
