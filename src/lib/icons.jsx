import {
  FlaskConical,
  Microscope,
  Dna,
  HeartPulse,
  Leaf,
  Sparkle,
  Brain,
  BookOpen,
  Cat,
  Bird,
  Fish,
  Rabbit,
  Turtle,
  Squirrel,
  Ghost,
  Rocket,
} from 'lucide-react';

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

// Anonim, semleges illusztrált profil-avatarok - NEM valós fénykép,
// kizárólag előre elkészített ikon+szín kombinációk közül választhat a
// felhasználó (lásd AvatarPickerModal).
export const AVATAR_ICONS = {
  Cat,
  Bird,
  Fish,
  Rabbit,
  Turtle,
  Squirrel,
  Ghost,
  Rocket,
};

export const AvatarIcon = ({ name, className }) => {
  const Icon = AVATAR_ICONS[name] ?? Cat;
  return <Icon className={className} />;
};
