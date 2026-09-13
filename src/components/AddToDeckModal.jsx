import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Plus, Check } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { FREE_MAX_CARDS_PER_DECK, FREE_MAX_DECKS } from '../lib/flashcardUtils';
import FreeLimitBanner from './FreeLimitBanner';

// Egy glosszárium-fogalomból ("term" + "definition") egy kattintással
// tanulókártyát hoz létre egy meglévő vagy újonnan létrehozott saját
// paklihoz. A DefinedTerm tooltipjéből nyílik meg.
const AddToDeckModal = ({ term, definition, onClose }) => {
  const { isPremium, getDecks, getDeckCards, createDeck, createCard } = useUserData();
  const decks = getDecks();
  const deckCardCounts = Object.fromEntries(decks.map((d) => [d.id, getDeckCards(d.id).length]));
  const deckLimitReached = !isPremium && decks.length >= FREE_MAX_DECKS;
  const availableDecks = decks.filter(
    (d) => isPremium || deckCardCounts[d.id] < FREE_MAX_CARDS_PER_DECK
  );

  const [selectedDeckId, setSelectedDeckId] = useState(availableDecks[0]?.id ?? '');
  const [creatingNew, setCreatingNew] = useState(availableDecks.length === 0 && !deckLimitReached);
  const [newDeckName, setNewDeckName] = useState('');
  const [added, setAdded] = useState(false);

  const noOptionsLeft = availableDecks.length === 0 && deckLimitReached;

  const handleAdd = () => {
    let deckId = selectedDeckId;
    if (creatingNew) {
      if (deckLimitReached || !newDeckName.trim()) return;
      deckId = createDeck({ name: newDeckName.trim() });
    } else if (!isPremium && (deckCardCounts[deckId] ?? 0) >= FREE_MAX_CARDS_PER_DECK) {
      return;
    }
    if (!deckId) return;
    createCard(deckId, { front: term, back: definition });
    setAdded(true);
    setTimeout(onClose, 900);
  };

  // Portal a document.body-ba: a modál egy inline <span> (DefinedTerm)
  // mélyéről nyílik, ami egy bekezdés <p>-ben van - egy fixed div/p-eket
  // tartalmazó felugró ablak közvetlen DOM-beágyazása érvénytelen HTML-t
  // (blokk-szintű elem <p>-n belül) és hidratálási hibát okozna.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Hozzáadás a tanulókártyákhoz
            </p>
            <p className="font-bold text-lg mt-1">{term}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {added ? (
          <div className="flex items-center gap-2 py-4 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
            <Check className="h-5 w-5" />
            Hozzáadva a paklihoz!
          </div>
        ) : noOptionsLeft ? (
          <FreeLimitBanner />
        ) : (
          <>
            <p className="text-xs font-bold text-slate-500 mb-2">Melyik paklihoz?</p>
            <div className="space-y-1.5 max-h-40 overflow-y-auto mb-3">
              {decks.map((deck) => {
                const isFull = !isPremium && deckCardCounts[deck.id] >= FREE_MAX_CARDS_PER_DECK;
                return (
                  <button
                    key={deck.id}
                    disabled={isFull}
                    onClick={() => {
                      setSelectedDeckId(deck.id);
                      setCreatingNew(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-sm font-bold border transition-colors ${
                      isFull
                        ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                        : !creatingNew && selectedDeckId === deck.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                          : 'border-slate-200 dark:border-slate-800 hover:border-primary-300'
                    }`}
                  >
                    {deck.name}
                    {isFull && ` (tele - ${FREE_MAX_CARDS_PER_DECK}/${FREE_MAX_CARDS_PER_DECK})`}
                  </button>
                );
              })}
              <button
                disabled={deckLimitReached}
                onClick={() => setCreatingNew(true)}
                className={`w-full flex items-center gap-1.5 text-left px-3 py-2 rounded-xl text-sm font-bold border transition-colors ${
                  deckLimitReached
                    ? 'border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                    : creatingNew
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400'
                      : 'border-slate-200 dark:border-slate-800 hover:border-primary-300'
                }`}
              >
                <Plus className="h-4 w-4" /> Új pakli{deckLimitReached && ` (limit elérve)`}
              </button>
            </div>

            {creatingNew && (
              <input
                type="text"
                autoFocus
                value={newDeckName}
                onChange={(e) => setNewDeckName(e.target.value)}
                placeholder="Új pakli neve"
                className="w-full mb-3 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            )}

            {!isPremium && (
              <p className="text-xs text-slate-400 mb-3">
                {decks.length}/{FREE_MAX_DECKS} pakli · ingyenes csomag
              </p>
            )}

            <button
              onClick={handleAdd}
              disabled={creatingNew ? !newDeckName.trim() : !selectedDeckId}
              className="w-full px-4 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Hozzáadás
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default AddToDeckModal;
