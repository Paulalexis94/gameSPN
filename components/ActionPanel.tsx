import React from 'react';
import { Choice, SceneId } from '../types';

interface ActionPanelProps {
  choices: Choice[];
  onChoiceSelect: (sceneId: SceneId, requiredItemId?: string) => void;
  disabled: boolean;
}

export const ActionPanel: React.FC<ActionPanelProps> = ({ choices, onChoiceSelect, disabled }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => onChoiceSelect(choice.nextSceneId, choice.requiredItemId)}
          disabled={disabled}
          className={`
            relative p-4 border text-left transition-all duration-300 group
            ${disabled 
                ? 'border-stone-800 text-stone-600 cursor-not-allowed opacity-50' 
                : 'border-stone-600 bg-stone-900/50 hover:bg-stone-800 hover:border-stone-400 hover:shadow-[0_0_15px_rgba(138,3,3,0.3)]'
            }
          `}
        >
          {/* Decorative Corner */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-500 group-hover:border-blood transition-colors"></span>
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-500 group-hover:border-blood transition-colors"></span>
          
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg text-stone-200 group-hover:text-white">
                {choice.text}
            </span>
            {choice.type === 'combat' && <span className="text-xl">⚔️</span>}
            {choice.type === 'investigation' && <span className="text-xl">🔍</span>}
            {choice.type === 'movement' && <span className="text-xl">🚗</span>}
          </div>
          
          {choice.requiredItemId && (
              <div className="mt-2 text-xs font-mono text-red-900 uppercase flex items-center gap-1">
                  <span>🔒 Objet Requis</span>
              </div>
          )}
        </button>
      ))}
    </div>
  );
};