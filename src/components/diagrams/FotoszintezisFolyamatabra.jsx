// Sematikus, saját készítésű folyamatábra: a fotoszintézis fény- és
// sötétszakaszának be- és kimenetei.

const Doboz = ({ x, y, w, h, cim, szin }) => (
  <g transform={`translate(${x},${y})`}>
    <rect width={w} height={h} rx="12" className={`fill-current ${szin}`} />
    <text x={w / 2} y={h / 2 + 5} textAnchor="middle" className="fill-white text-[13px] font-bold">
      {cim}
    </text>
  </g>
);

const FotoszintezisFolyamatabra = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      A fotoszintézis fény- és sötétszakaszának be- és kimenetei
    </p>
    <svg viewBox="0 0 620 260" className="w-full h-auto max-w-xl mx-auto" role="img" aria-label="A fotoszintézis fény- és sötétszakaszának folyamatábrája">
      <text x="130" y="30" textAnchor="middle" className="fill-current text-[11px] text-slate-500">fényenergia + víz</text>
      <line x1="130" y1="38" x2="130" y2="58" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="130,58 124,48 136,48" className="fill-current text-slate-400" />

      <Doboz x={40} y={60} w={180} h={60} cim="Fényszakasz" szin="text-amber-500" />

      <text x="130" y="145" textAnchor="middle" className="fill-current text-[11px] text-slate-500">O₂ + ATP + H-szállítómolekula</text>
      <line x1="130" y1="120" x2="130" y2="160" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="130,160 124,150 136,150" className="fill-current text-slate-400" />

      <line x1="220" y1="90" x2="400" y2="90" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="400,90 390,84 390,96" className="fill-current text-slate-400" />
      <text x="310" y="80" textAnchor="middle" className="fill-current text-[10px] text-slate-400">ATP, H szállítása</text>

      <text x="490" y="30" textAnchor="middle" className="fill-current text-[11px] text-slate-500">szén-dioxid</text>
      <line x1="490" y1="38" x2="490" y2="58" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="490,58 484,48 496,48" className="fill-current text-slate-400" />

      <Doboz x={400} y={60} w={180} h={60} cim="Sötétszakasz" szin="text-emerald-600" />

      <text x="490" y="145" textAnchor="middle" className="fill-current text-[11px] text-slate-500">glükóz</text>
      <line x1="490" y1="120" x2="490" y2="160" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="490,160 484,150 496,150" className="fill-current text-slate-400" />

      <text x="310" y="220" textAnchor="middle" className="fill-current text-[11px] font-bold text-slate-600">
        Összegezve: 6 CO₂ + 6 H₂O + fényenergia → C₆H₁₂O₆ + 6 O₂
      </text>
    </svg>
  </div>
);

export default FotoszintezisFolyamatabra;
