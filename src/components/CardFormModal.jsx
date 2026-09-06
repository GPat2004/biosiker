import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

// Egy kártya (elülső/hátulsó oldal) létrehozása vagy szerkesztése.
const CardFormModal = ({ initial, onSave, onClose }) => {
  const [front, setFront] = useState(initial?.front ?? '');
  const [back, setBack] = useState(initial?.back ?? '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!front.trim() || !back.trim()) return;
    onSave({ front: front.trim(), back: back.trim() });
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-lg">{initial ? 'Kártya szerkesztése' : 'Új kártya'}</p>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <label className="block text-xs font-bold text-slate-500 mb-1">Elülső oldal (kérdés/fogalom)</label>
        <textarea
          autoFocus
          value={front}
          onChange={(e) => setFront(e.target.value)}
          rows={2}
          className="w-full mb-3 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
        />

        <label className="block text-xs font-bold text-slate-500 mb-1">Hátulsó oldal (válasz/definíció)</label>
        <textarea
          value={back}
          onChange={(e) => setBack(e.target.value)}
          rows={3}
          className="w-full mb-4 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
        />

        <button
          type="submit"
          disabled={!front.trim() || !back.trim()}
          className="w-full px-4 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Mentés
        </button>
      </form>
    </div>,
    document.body
  );
};

export default CardFormModal;
