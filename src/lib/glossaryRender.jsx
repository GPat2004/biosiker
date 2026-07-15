import DefinedTerm from '../components/DefinedTerm';
import { GLOSSARY } from '../data/glossary';

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// A hosszabb kifejezéseket előre soroljuk, hogy pl. "citromsavciklus" ne
// törjön szét egy rövidebb, benne foglalt kulcsszó miatt.
const TERMS_SORTED = Object.keys(GLOSSARY).sort((a, b) => b.length - a.length);

let COMBINED_PATTERN = null;
const getPattern = () => {
  if (!COMBINED_PATTERN && TERMS_SORTED.length > 0) {
    const alternatives = TERMS_SORTED.map(escapeRegExp).join('|');
    // Unicode-tudatos szóhatár (a magyar ékezetes betűket is figyelembe véve),
    // hogy ne vágjon bele hosszabb szavak közepébe (pl. "enzim" <> "enzimhiány").
    COMBINED_PATTERN = new RegExp(`(?<![\\p{L}])(${alternatives})(?![\\p{L}])`, 'giu');
  }
  return COMBINED_PATTERN;
};

// Egy sima szöveget alakít át React node-ok tömbjévé, ahol a szótárban
// szereplő kifejezések kattintható/hover-elhető DefinedTerm-ekké válnak.
export const renderWithGlossary = (text) => {
  const pattern = getPattern();
  if (!pattern || typeof text !== 'string') return text;

  const parts = text.split(pattern);
  return parts.map((part, i) => {
    const definition = GLOSSARY[part?.toLowerCase()];
    if (definition) {
      return (
        <DefinedTerm key={`${part}-${i}`} term={part} definition={definition}>
          {part}
        </DefinedTerm>
      );
    }
    return part;
  });
};
