import { useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

// Pakli létrehozása/szerkesztése - név, opcionális leírás, opcionális
// "Tantárgy" címke (ez utóbbi szerint csoportosítjuk a paklikat a
// Tanulókártyák főoldalon).
const DeckFormModal = ({ initial, onSave, onClose, title = 'Új pakli' }) => {
  const [name, setName] = useState(initial?.name ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [subject, setSubject] = useState(initial?.subject ?? '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSave({ name: name.trim(), description: description.trim(), subject: subject.trim() });
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
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-lg">{title}</p>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <label className="block text-xs font-bold text-slate-500 mb-1">Név</label>
        <input
          type="text"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="pl. Sejtbiológia alapfogalmak"
          className="w-full mb-3 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

        <label className="block text-xs font-bold text-slate-500 mb-1">Leírás (opcionális)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="w-full mb-3 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
        />

        <label className="block text-xs font-bold text-slate-500 mb-1">Tantárgy (opcionális)</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="pl. Biológia"
          className="w-full mb-4 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />

        <button
          type="submit"
          disabled={!name.trim()}
          className="w-full px-4 py-2.5 rounded-xl bg-primary-600 text-white font-bold text-sm hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Mentés
        </button>
      </form>
    </div>,
    document.body
  );
};

export default DeckFormModal;
