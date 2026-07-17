// Sematikus, saját készítésű folyamatábra: a glükóz lebontásának lépései
// és helyszínei (citoplazma vs. mitokondrium).

const SejtlegzesFolyamatabra = () => (
  <div>
    <p className="text-xs font-bold text-slate-500 mb-4 text-center">
      A glükóz lebontásának lépései és helyszínei
    </p>
    <svg viewBox="0 0 680 220" className="w-full h-auto max-w-2xl mx-auto" role="img" aria-label="A glükóz lebontásának lépései: glikolízis a citoplazmában, citromsavciklus és végoxidáció a mitokondriumban">
      <rect x="10" y="20" width="200" height="180" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" className="text-slate-300 dark:text-slate-600" />
      <text x="110" y="40" textAnchor="middle" className="fill-current text-[10px] font-bold text-slate-400">CITOPLAZMA</text>

      <rect x="35" y="80" width="150" height="50" rx="10" className="fill-current text-primary-500" />
      <text x="110" y="100" textAnchor="middle" className="fill-white text-[12px] font-bold">Glikolízis</text>
      <text x="110" y="116" textAnchor="middle" className="fill-white text-[9px]">glükóz → piruvát</text>
      <text x="110" y="150" textAnchor="middle" className="fill-current text-[10px] font-bold text-slate-500">nettó: 2 ATP</text>

      <line x1="212" y1="105" x2="248" y2="105" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="248,105 238,99 238,111" className="fill-current text-slate-400" />

      <rect x="255" y="20" width="410" height="180" rx="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" className="text-slate-300 dark:text-slate-600" />
      <text x="460" y="40" textAnchor="middle" className="fill-current text-[10px] font-bold text-slate-400">MITOKONDRIUM</text>

      <rect x="280" y="80" width="150" height="50" rx="10" className="fill-current text-emerald-500" />
      <text x="355" y="100" textAnchor="middle" className="fill-white text-[12px] font-bold">Citromsavciklus</text>
      <text x="355" y="116" textAnchor="middle" className="fill-white text-[9px]">CO₂ + H-szállítás</text>

      <line x1="432" y1="105" x2="468" y2="105" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
      <polygon points="468,105 458,99 458,111" className="fill-current text-slate-400" />

      <rect x="475" y="80" width="150" height="50" rx="10" className="fill-current text-amber-500" />
      <text x="550" y="100" textAnchor="middle" className="fill-white text-[12px] font-bold">Végoxidáció</text>
      <text x="550" y="116" textAnchor="middle" className="fill-white text-[9px]">H + O₂ → H₂O</text>

      <text x="460" y="160" textAnchor="middle" className="fill-current text-[10px] font-bold text-slate-500">
        itt keletkezik a legtöbb ATP (kb. 30+ / glükóz)
      </text>
    </svg>
  </div>
);

export default SejtlegzesFolyamatabra;
