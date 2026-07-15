import { useState } from 'react';

// Egy szövegben megjelenő kulcsfogalom: asztali gépen rámutatásra (hover),
// mobilon/érintőn kattintásra jeleníti meg a definíciót.
const DefinedTerm = ({ term, definition, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block group">
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="underline decoration-dotted decoration-primary-400 underline-offset-2 font-semibold text-primary-700 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 cursor-help focus:outline-none"
      >
        {children}
      </button>

      <span
        role="tooltip"
        className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 max-w-[75vw] p-3 rounded-xl bg-slate-900 dark:bg-slate-700 text-white text-xs leading-relaxed shadow-xl transition-opacity duration-150 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none group-hover:opacity-100'
        }`}
      >
        <span className="block font-bold mb-1">{term}</span>
        {definition}
        <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700" />
      </span>
    </span>
  );
};

export default DefinedTerm;
