// Sematikus, saját készítésű ábra: a passzív és az aktív szállítás
// összehasonlítása a koncentráció-grádiens iránya és az energiaigény alapján.

const Sejtmembran = ({ y }) => (
  <g>
    {Array.from({ length: 14 }).map((_, i) => (
      <line
        key={i}
        x1={30 + i * 24}
        y1={y - 10}
        x2={30 + i * 24}
        y2={y + 10}
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        className="text-slate-300 dark:text-slate-600"
      />
    ))}
  </g>
);

const PasszivAktivSzallitas = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      Passzív és aktív szállítás a sejtmembránon át
    </p>
    <svg viewBox="0 0 380 260" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Passzív és aktív szállítás összehasonlítása">
      <text x="190" y="20" textAnchor="middle" className="fill-current text-[11px] font-bold text-primary-600">PASSZÍV SZÁLLÍTÁS</text>
      <text x="60" y="45" textAnchor="middle" className="fill-current text-[10px] text-slate-500">sok anyag</text>
      <Sejtmembran y={70} />
      <text x="320" y="45" textAnchor="middle" className="fill-current text-[10px] text-slate-500">kevés anyag</text>
      <line x1="90" y1="70" x2="290" y2="70" stroke="currentColor" strokeWidth="2.5" className="text-primary-500" />
      <polygon points="290,70 280,64 280,76" className="fill-current text-primary-500" />
      <text x="190" y="95" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        koncentráció-különbség mentén, energia nélkül
      </text>

      <text x="190" y="150" textAnchor="middle" className="fill-current text-[11px] font-bold text-emerald-600">AKTÍV SZÁLLÍTÁS</text>
      <text x="60" y="175" textAnchor="middle" className="fill-current text-[10px] text-slate-500">kevés anyag</text>
      <Sejtmembran y={200} />
      <text x="320" y="175" textAnchor="middle" className="fill-current text-[10px] text-slate-500">sok anyag</text>
      <line x1="90" y1="200" x2="290" y2="200" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />
      <polygon points="290,200 280,194 280,206" className="fill-current text-emerald-500" />
      <circle cx="190" cy="200" r="14" className="fill-current text-amber-400" />
      <text x="190" y="204" textAnchor="middle" className="fill-white text-[9px] font-bold">ATP</text>
      <text x="190" y="230" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        koncentráció-különbséggel szemben, ATP-energiával
      </text>
    </svg>
  </div>
);

export default PasszivAktivSzallitas;
