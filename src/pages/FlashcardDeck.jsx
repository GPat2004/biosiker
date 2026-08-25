import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft, Pencil, Plus, Shuffle, Trash2, Zap } from 'lucide-react';
import { useUserData } from '../context/UserDataContext';
import { canUseQuizMode, isDue } from '../lib/flashcardUtils';
import DeckFormModal from '../components/DeckFormModal';
import CardFormModal from '../components/CardFormModal';

const BOX_LABELS = { 1: '1. doboz', 2: '2. doboz', 3: '3. doboz', 4: '4. doboz', 5: '5. doboz' };

const FlashcardDeck = () => {
  const { deckId } = useParams();
  const { getDecks, getDeckCards, updateDeck, createCard, updateCard, deleteCard } = useUserData();
  const deck = getDecks().find((d) => d.id === deckId);
  const cards = getDeckCards(deckId);

  const [showEditDeck, setShowEditDeck] = useState(false);
  const [showAddCard, setShowAddCard] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  const dueCount = useMemo(() => cards.filter((c) => isDue(c)).length, [cards]);
  const quizModeAvailable = useMemo(() => canUseQuizMode(cards), [cards]);

  if (!deck) return <Navigate to="/flashcards" replace />;

  const handleDeleteCard = (cardId) => {
    if (window.confirm('Biztosan törlöd ezt a kártyát?')) {
      deleteCard(cardId);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        to="/flashcards"
        className="inline-flex items-center text-sm text-slate-500 hover:text-primary-600 mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" /> Vissza: Tanulókártyák
      </Link>

      <div className="flex items-start justify-between mb-2">
        <div>
          <h1 className="text-3xl font-extrabold">{deck.name}</h1>
          {deck.subject && (
            <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold">
              {deck.subject}
            </span>
          )}
        </div>
        <button
          onClick={() => setShowEditDeck(true)}
          className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
          title="Pakli szerkesztése"
        >
          <Pencil className="h-4 w-4" />
        </button>
      </div>
      {deck.description && <p className="text-slate-600 dark:text-slate-400 mt-2">{deck.description}</p>}

      {cards.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
          <Link
            to={`/flashcards/${deckId}/gyakorlas?mode=flip`}
            className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-primary-600 to-blue-600 text-white shadow-lg hover:shadow-primary-500/20 transition-all"
          >
            <span>
              <span className="flex items-center font-bold mb-1">
                <Zap className="h-5 w-5 mr-2" /> Klasszikus mód
              </span>
              <span className="text-xs text-white/80">
                {dueCount > 0 ? `${dueCount} esedékes kártya` : 'Nincs esedékes kártya'}
              </span>
            </span>
          </Link>
          <Link
            to={quizModeAvailable ? `/flashcards/${deckId}/gyakorlas?mode=quiz` : '#'}
            onClick={(e) => !quizModeAvailable && e.preventDefault()}
            className={`flex items-center justify-between p-5 rounded-2xl border shadow-sm transition-all ${
              quizModeAvailable
                ? 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-500'
                : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 opacity-50 cursor-not-allowed'
            }`}
          >
            <span>
              <span className="flex items-center font-bold mb-1">
                <Shuffle className="h-5 w-5 mr-2" /> Felismerés (kvíz)
              </span>
              <span className="text-xs text-slate-500">
                {quizModeAvailable ? 'Feleletválasztós gyakorlás' : 'Legalább 4 kártya szükséges hozzá'}
              </span>
            </span>
          </Link>
        </div>
      )}

      <div className="flex items-center justify-between mt-10 mb-4">
        <h2 className="text-lg font-bold">Kártyák ({cards.length})</h2>
        <button
          onClick={() => setShowAddCard(true)}
          className="flex items-center px-4 py-2 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-1.5" /> Új kártya
        </button>
      </div>

      {cards.length === 0 ? (
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-600 dark:text-slate-400">
            Ez a pakli még üres. Adj hozzá egy kártyát, vagy egy fejezet olvasása közben egy kiemelt
            fogalomból is hozzáadhatsz ide.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              <div className="flex-grow min-w-0">
                <p className="font-bold truncate">{card.front}</p>
                <p className="text-sm text-slate-500 truncate">{card.back}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {BOX_LABELS[card.srsBox] || '1. doboz'} · {isDue(card) ? 'esedékes' : 'nem esedékes'}
                </p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => setEditingCard(card)}
                  className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title="Kártya szerkesztése"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteCard(card.id)}
                  className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  title="Kártya törlése"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showEditDeck && (
        <DeckFormModal
          title="Pakli szerkesztése"
          initial={deck}
          onSave={(data) => updateDeck(deckId, data)}
          onClose={() => setShowEditDeck(false)}
        />
      )}
      {showAddCard && (
        <CardFormModal onSave={(data) => createCard(deckId, data)} onClose={() => setShowAddCard(false)} />
      )}
      {editingCard && (
        <CardFormModal
          initial={editingCard}
          onSave={(data) => updateCard(editingCard.id, data)}
          onClose={() => setEditingCard(null)}
        />
      )}
    </div>
  );
};

export default FlashcardDeck;
