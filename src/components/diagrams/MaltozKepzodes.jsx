// Sematikus, sajat keszitesu abra: ket glukozgyuru kondenzacioval maltozza
// kapcsolodik, viz kilepese mellett.
//
// A ket gyuru kozotti kotest most mar KEMIAILAG FELISMERHETO modon
// abrazoljuk: nem egy egyszeru vonal koti ossze oket, hanem egy explicit
// hidoxigen-atom (a valodi alfa-1,4-glikozidos kotes lenyege) az egyik
// gyuru 1-es (anomer) szenatomja es a masik gyuru 4-es szenatomja kozott.
// A gyurukon belul a "gyuru-oxigen" (O) is jelolve van, hogy tenyleg
// cukorgyurunek nezzen ki, ne csak egy altalanos hatszognek.

const CukorGyuru = ({ x, y, cimke }) => {
  // Hatszog csucsai (oramutato jarasaval megegyezoen, felso csucstol indulva)
  const r = 32;
  const pontok = [0, 60, 120, 180, 240, 300].map((deg) => {
    const rad = (Math.PI / 180) * deg;
    return [x + r * Math.sin(rad), y - r * Math.cos(rad)];
  });
  const polyPoints = pontok.map((p) => p.join(',')).join(' ');

  return (
    <g>
      <polygon points={polyPoints} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-500" />
      {/* Gyuru-oxigen jeloles a felso csucson */}
      <circle cx={pontok[0][0]} cy={pontok[0][1]} r="10" className="fill-current text-white dark:text-slate-900" stroke="currentColor" strokeWidth="2" />
      <text x={pontok[0][0]} y={pontok[0][1] + 4} textAnchor="middle" className="fill-current text-[10px] font-bold text-primary-600">
        O
      </text>
      <text x={x} y={y + 4} textAnchor="middle" className="fill-current text-[11px] font-bold">
        {cimke}
      </text>
    </g>
  );
};

const MaltozKepzodes = () => (
  <svg viewBox="0 0 760 240" className="w-full h-auto max-w-2xl mx-auto" role="img" aria-label="A maltóz képződése két glükóz molekula kondenzációjával, α-1,4-glikozidos kötéssel">
    {/* Bal oldal: ket kulon glukoz */}
    <CukorGyuru x={70} y={80} cimke="Glükóz" />
    <text x={135} y={90} textAnchor="middle" className="fill-current text-2xl font-bold text-slate-400">+</text>
    <CukorGyuru x={200} y={80} cimke="Glükóz" />

    {/* Nyil */}
    <g transform="translate(300,80)">
      <line x1="0" y1="0" x2="90" y2="0" stroke="currentColor" strokeWidth="2.5" className="text-slate-400" />
      <polygon points="90,0 78,-6 78,6" className="fill-current text-slate-400" />
      <text x="45" y="-14" textAnchor="middle" className="fill-current text-[11px] font-bold text-emerald-600">kondenzáció</text>
      <text x="45" y="20" textAnchor="middle" className="fill-current text-[11px] text-slate-400">(−H₂O)</text>
    </g>

    {/* Jobb oldal: maltoz - a ket gyuru kozott explicit hidoxigennel */}
    <g transform="translate(460,0)">
      <CukorGyuru x={70} y={80} cimke="Glükóz (C1)" />

      {/* Hidoxigen a ket gyuru kozott: C1 -> O -> C4 */}
      <line x1="100" y1="95" x2="150" y2="110" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />
      <circle cx="155" cy="112" r="11" className="fill-current text-emerald-500" />
      <text x="155" y="116" textAnchor="middle" className="fill-white text-[10px] font-bold">O</text>
      <line x1="160" y1="112" x2="200" y2="95" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />

      <CukorGyuru x={230} y={80} cimke="Glükóz (C4)" />

      <text x="150" y="150" textAnchor="middle" className="fill-current text-[11px] font-bold text-emerald-600">
        α-1,4-glikozidos kötés
      </text>
      <text x="150" y="200" textAnchor="middle" className="fill-current text-[13px] font-bold">
        Maltóz
      </text>
    </g>
  </svg>
);

export default MaltozKepzodes;
