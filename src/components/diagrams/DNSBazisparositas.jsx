// Sematikus, saját készítésű ábra: az A-T és G-C bázispárok közötti eltérő
// számú hidrogénkötés (Chargaff-szabály illusztrálása).

const BazisPar = ({ y, bal, jobb, kotesSzam }) => (
  <g>
    <rect x="20" y={y - 18} width="70" height="36" rx="8" className="fill-current text-primary-500" />
    <text x="55" y={y + 5} textAnchor="middle" className="fill-white text-sm font-bold">{bal}</text>

    <rect x="330" y={y - 18} width="70" height="36" rx="8" className="fill-current text-emerald-500" />
    <text x="365" y={y + 5} textAnchor="middle" className="fill-white text-sm font-bold">{jobb}</text>

    {Array.from({ length: kotesSzam }).map((_, i) => {
      const offset = (i - (kotesSzam - 1) / 2) * 14;
      return (
        <line
          key={i}
          x1="90"
          y1={y + offset}
          x2="330"
          y2={y + offset}
          stroke="currentColor"
          strokeDasharray="4 4"
          strokeWidth="1.5"
          className="text-slate-400"
        />
      );
    })}

    <text x="210" y={y - 28} textAnchor="middle" className="fill-current text-[10px] font-bold text-slate-500">
      {kotesSzam} hidrogénkötés
    </text>
  </g>
);

const DNSBazisparositas = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      A DNS bázispárosodása: mindig purin párosodik pirimidinnel
    </p>
    <svg viewBox="0 0 420 200" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="A DNS bázispárosodása: adenin-timin két, guanin-citozin három hidrogénkötéssel">
      <BazisPar y={60} bal="Adenin" jobb="Timin" kotesSzam={2} />
      <BazisPar y={150} bal="Guanin" jobb="Citozin" kotesSzam={3} />
    </svg>
  </div>
);

export default DNSBazisparositas;
