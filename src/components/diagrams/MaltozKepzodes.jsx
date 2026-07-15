// Sematikus, saját készítésű ábra: két glükóz molekula kondenzációval
// maltózzá kapcsolódik, víz kilépése mellett. A cél a FOLYAMAT (kondenzáció
// vs. hidrolízis) megértése, nem a pontos térszerkezet ábrázolása.
const MaltozKepzodes = () => (
  <svg viewBox="0 0 640 220" className="w-full h-auto max-w-xl mx-auto" role="img" aria-label="A maltóz képződése két glükóz molekula kondenzációjával">
    {/* Glükóz 1 */}
    <g transform="translate(40,40)">
      <polygon points="60,0 110,25 110,75 60,100 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-500" />
      <text x="60" y="55" textAnchor="middle" className="fill-current text-[13px] font-bold">Glükóz</text>
    </g>

    {/* + jel */}
    <text x="180" y="105" textAnchor="middle" className="fill-current text-2xl font-bold text-slate-400">+</text>

    {/* Glükóz 2 */}
    <g transform="translate(210,40)">
      <polygon points="60,0 110,25 110,75 60,100 10,75 10,25" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-500" />
      <text x="60" y="55" textAnchor="middle" className="fill-current text-[13px] font-bold">Glükóz</text>
    </g>

    {/* Nyíl */}
    <g transform="translate(360,90)">
      <line x1="0" y1="0" x2="80" y2="0" stroke="currentColor" strokeWidth="2.5" className="text-slate-400" />
      <polygon points="80,0 68,-6 68,6" className="fill-current text-slate-400" />
      <text x="40" y="-12" textAnchor="middle" className="fill-current text-[11px] font-bold text-emerald-600">kondenzáció</text>
      <text x="40" y="20" textAnchor="middle" className="fill-current text-[11px] text-slate-400">(−H₂O)</text>
    </g>

    {/* Maltóz */}
    <g transform="translate(470,40)">
      <polygon points="55,0 95,22 95,68 55,90 15,68 15,22" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />
      <line x1="95" y1="45" x2="140" y2="45" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />
      <polygon points="180,0 220,22 220,68 180,90 140,68 140,22" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-500" />
      <text x="117" y="115" textAnchor="middle" className="fill-current text-[13px] font-bold">Maltóz (két glükóz kapcsolódva)</text>
    </g>
  </svg>
);

export default MaltozKepzodes;
