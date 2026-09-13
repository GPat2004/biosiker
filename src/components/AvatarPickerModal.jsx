import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { AVATARS } from '../lib/gamificationUtils';
import { AvatarIcon } from '../lib/icons';

// Anonim, semleges illusztrált avatarok közüli választás - NEM valós
// fénykép-feltöltés.
const AvatarPickerModal = ({ currentAvatarId, onSelect, onClose }) =>
  createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <p className="font-bold text-lg">Válassz avatart</p>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {AVATARS.map((avatar) => (
            <button
              key={avatar.id}
              onClick={() => {
                onSelect(avatar.id);
                onClose();
              }}
              className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${avatar.color} flex items-center justify-center text-white transition-transform hover:scale-105 ${
                currentAvatarId === avatar.id ? 'ring-4 ring-primary-500 ring-offset-2 dark:ring-offset-slate-900' : ''
              }`}
            >
              <AvatarIcon name={avatar.icon} className="h-8 w-8" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );

export default AvatarPickerModal;
