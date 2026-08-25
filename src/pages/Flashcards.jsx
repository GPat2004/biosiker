import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Layers, Trash2 } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { isDue } from '../lib/flashcardUtils';
import DeckFormModal from '../components/DeckFormModal';

const NO_SUBJECT = 'Nincs tantárgy megadva';

const DeckCard = ({ deck, cardCount, dueCount, onDelete }) => (
  <div className="relative group">
    <Link
      to={`/flashcards/${deck.id}`}
      className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-primary-500 transition-colors shadow-sm"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="h-10 w-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
          <Layers className="h-5 w-5" />
        </div>
        {dueCount > 0 && (
          <span className="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-xs font-bold">
            {dueCount} esedékes
          </span>
        )}
      </div>
      <p className="font-bold truncate pr-6">{deck.name}</p>
      {deck.description && (
        <p className="text-sm text-slate-500 mt-1 line-clamp-2">{deck.description}</p>
      )}
      <p className="text-xs text-slate-400 mt-3">{cardCount} kártya</p>
    </Link>
    <button
      onClick={(e) => {
        e.preventDefault();
        onDelete(deck.id);
      }}
      className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 opacity-0 group-hover:opacity-100 transition-all"
      title="Pakli törlése"
    >
      <Trash2 className="h-4 w-4" />
    </button>
  </div>
);

const Flashcards = () => {
  const { getDecks, getDeckCards, createDeck, deleteDeck } = useUserData();
  const [showCreate, setShowCreate] = useState(false);
  const decks = getDecks();

  const grouped = useMemo(() => {
    const bySubject = new Map();
    for (const deck of decks) {
      const key = deck.subject || NO_SUBJECT;
      if (!bySubject.has(key)) bySubject.set(key, []);
      bySubject.get(key).push(deck);
    }
    const subjects = [...bySubject.keys()].filter((s) => s !== NO_SUBJECT).sort((a, b) => a.localeCompare(b, 'hu'));
    if (bySubject.has(NO_SUBJECT)) subjects.push(NO_SUBJECT);
    return subjects.map((subject) => ({ subject, decks: bySubject.get(subject) }));
  }, [decks]);

  const handleDelete = (deckId) => {
    if (window.confirm('Biztosan törlöd ezt a paklit? A benne lévő kártyák is elvesznek.')) {
      deleteDeck(deckId);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold mb-2">Tanulókártyák</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Saját paklik, térbeli ismétléssel - gyakorold, amit fontosnak jelöltél.
          </p>
        </div>
        <button
          onClick={() => setShowCreate(true)}
          className="shrink-0 flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-primary-500/20 transition-all"
        >
          <Plus className="h-5 w-5 mr-2" />
          Új pakli
        </button>
      </div>

      {decks.length === 0 ? (
        <div className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
          <Layers className="h-10 w-10 mx-auto mb-4 text-slate-300 dark:text-slate-700" />
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Még nincs egyetlen paklid sem. Hozz létre egyet, vagy egy fejezet olvasása közben egy
            kiemelt fogalom mellett a "Hozzáadás a tanulókártyákhoz" gombbal is indíthatod.
          </p>
          <button
            onClick={() => setShowCreate(true)}
            className="px-5 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors"
          >
            Első pakli létrehozása
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {grouped.map(({ subject, decks: subjectDecks }) => (
            <div key={subject}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-4">
                {subject}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subjectDecks.map((deck) => {
                  const cards = getDeckCards(deck.id);
                  return (
                    <DeckCard
                      key={deck.id}
                      deck={deck}
                      cardCount={cards.length}
                      dueCount={cards.filter((c) => isDue(c)).length}
                      onDelete={handleDelete}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {showCreate && (
        <DeckFormModal title="Új pakli" onSave={(data) => createDeck(data)} onClose={() => setShowCreate(false)} />
      )}
    </div>
  );
};

export default Flashcards;
