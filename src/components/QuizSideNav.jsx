import { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { CURRICULUM } from '../data/curriculum';
import { ModuleIcon } from '../lib/icons';

// Bal szélen mindig látható, keskeny "fülecske" - asztali gépen hover-re,
// érintőképernyőn koppintásra csúsztatja be a modul-gyorsnavigátort.
// Kívülre kattintás/koppintás is bezárja, hogy touch eszközön (ahol nincs
// mouseleave) se ragadjon nyitva.
const QuizSideNav = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  // A tab gombon a kattintás előtt lezajlott pointerdown eseményből eltárolt
  // eszköztípus - így a rákövetkező onClick el tudja dönteni, hogy egérrel
  // (ahol a hover már megnyitotta, egy toggle itt visszazárná) vagy
  // érintéssel (ahol nincs hover, a koppintásnak kell nyitnia/zárnia)
  // történt-e az interakció.
  const lastPointerTypeRef = useRef('mouse');

  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  return (
    <div
      ref={navRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="fixed left-0 top-1/2 z-40 flex transition-transform duration-300 ease-out"
      style={{ transform: `translateY(-50%) translateX(${open ? '0' : 'calc(-100% + 2rem)'})` }}
    >
      <div className="w-64 max-h-[75vh] overflow-y-auto rounded-r-3xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-l-0 border-slate-200 dark:border-slate-800 shadow-2xl p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">Navigátor</p>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-4">Ugrás a fejezetekhez</p>
        <div className="space-y-1.5">
          {CURRICULUM.map((module) => (
            <button
              key={module.id}
              onClick={() => {
                onNavigate(module.id);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-2.5 py-2 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span
                className={`h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-white`}
              >
                <ModuleIcon name={module.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-tight">
                {module.title}
              </span>
            </button>
          ))}
        </div>
      </div>
      <button
        onPointerDown={(e) => {
          lastPointerTypeRef.current = e.pointerType;
        }}
        onClick={() => {
          if (lastPointerTypeRef.current === 'mouse') {
            setOpen(true);
          } else {
            setOpen((o) => !o);
          }
        }}
        aria-label={open ? 'Navigátor bezárása' : 'Navigátor megnyitása'}
        title="Ugrás a fejezetekhez"
        className="self-center h-16 w-8 shrink-0 rounded-r-2xl bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
      >
        <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export default QuizSideNav;
