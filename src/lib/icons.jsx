import { FlaskConical, Microscope, Dna, HeartPulse, Leaf, Sparkle, Brain, BookOpen } from 'lucide-react';

export const MODULE_ICONS = {
  FlaskConical,
  Microscope,
  Dna,
  HeartPulse,
  Leaf,
  Sparkle,
  Brain,
};

// Dedikált komponens a dinamikus ikon-feloldáshoz, hogy sehol ne kelljen
// render közben lokális változóba tenni egy komponens-referenciát
// (az a React Compiler eslint szabálya szerint instabil mintának számít).
export const ModuleIcon = ({ name, className }) => {
  const Icon = MODULE_ICONS[name] ?? BookOpen;
  return <Icon className={className} />;
};
