// Sematikus savdiagram: az emberi szervezet kozelito tomeg szazalekos
// osszetetele a legfontosabb elemek szerint (kozismert, tankonyvi becsult
// ertekek - nem egyetlen konkret forrasbol szarmazo pontos meres).
const adatok = [
  { elem: 'Oxigén (O)', szazalek: 65, szin: '#0ea5e9' },
  { elem: 'Szén (C)', szazalek: 18, szin: '#22c55e' },
  { elem: 'Hidrogén (H)', szazalek: 10, szin: '#f59e0b' },
  { elem: 'Nitrogén (N)', szazalek: 3, szin: '#a855f7' },
  { elem: 'Kalcium (Ca)', szazalek: 1.5, szin: '#ef4444' },
  { elem: 'Foszfor (P)', szazalek: 1, szin: '#ec4899' },
  { elem: 'Egyéb (K, S, Na, Cl, Mg, Fe, I...)', szazalek: 1.5, szin: '#64748b' },
];

const ElemekMegoszlasa = () => {
  const maxSzazalek = 65;
  return (
    <div>
      <p className="text-xs font-bold text-slate-500 mb-4 text-center">
        Az emberi szervezet közelítő tömeg szerinti elemi összetétele
      </p>
      <svg viewBox="0 0 500 260" className="w-full h-auto max-w-lg mx-auto" role="img" aria-label="Az emberi szervezet elemi összetétele, sávdiagram">
        {adatok.map((d, i) => {
          const y = i * 34 + 10;
          const width = (d.szazalek / maxSzazalek) * 320;
          return (
            <g key={d.elem}>
              <text x="0" y={y + 14} className="fill-current text-[11px]">
                {d.elem}
              </text>
              <rect x="180" y={y} width={Math.max(width, 3)} height="18" rx="4" fill={d.szin} />
              <text x={180 + Math.max(width, 3) + 8} y={y + 14} className="fill-current text-[11px] font-bold">
                {d.szazalek}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ElemekMegoszlasa;
