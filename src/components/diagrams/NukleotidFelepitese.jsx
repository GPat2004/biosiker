// Sematikus, saját készítésű ábra: egy nukleotid három alkotórészének
// (foszfátcsoport, cukor, nitrogéntartalmú bázis) kapcsolódása.

const NukleotidFelepitese = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      Egy nukleotid felépítése
    </p>
    <svg viewBox="0 0 420 180" className="w-full h-auto max-w-md mx-auto" role="img" aria-label="Egy nukleotid felépítése: foszfátcsoport, cukor és nitrogéntartalmú bázis">
      {/* Foszfat */}
      <circle cx="70" cy="90" r="34" className="fill-current text-amber-500" />
      <text x="70" y="86" textAnchor="middle" className="fill-white text-[11px] font-bold">foszfát</text>
      <text x="70" y="100" textAnchor="middle" className="fill-white text-[9px]">csoport</text>

      <line x1="104" y1="90" x2="146" y2="90" stroke="currentColor" strokeWidth="2.5" className="text-slate-400" />

      {/* Cukor - otszog */}
      <polygon
        points="210,54 240,72 228,106 192,106 180,72"
        className="fill-current text-primary-500"
      />
      <text x="210" y="82" textAnchor="middle" className="fill-white text-[11px] font-bold">cukor</text>
      <text x="210" y="95" textAnchor="middle" className="fill-white text-[8px]">(ribóz / dezoxiribóz)</text>

      <line x1="240" y1="80" x2="282" y2="80" stroke="currentColor" strokeWidth="2.5" className="text-slate-400" />

      {/* Bazis */}
      <rect x="284" y="50" width="110" height="60" rx="12" className="fill-current text-emerald-500" />
      <text x="339" y="76" textAnchor="middle" className="fill-white text-[11px] font-bold">nitrogéntartalmú</text>
      <text x="339" y="92" textAnchor="middle" className="fill-white text-[11px] font-bold">bázis</text>

      <text x="210" y="150" textAnchor="middle" className="fill-current text-[10px] text-slate-500">
        Sok nukleotid egymáshoz kapcsolódva alkotja a nukleinsavláncot.
      </text>
    </svg>
  </div>
);

export default NukleotidFelepitese;
