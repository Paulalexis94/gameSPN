import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  // Correction: Vérification basée sur le type français défini dans types.ts
  const isHealthy = character.status === 'En Forme';
  
  return (
    <div className="bg-stone-900 border border-stone-700 shadow-lg p-4 relative overflow-hidden group hover:border-stone-500 transition-colors">
      {/* Decorative blood splatter effect on damage (CSS-only for now) */}
      {!isHealthy && <div className="absolute top-0 right-0 w-20 h-20 bg-blood opacity-20 rounded-full blur-xl translate-x-10 -translate-y-10"></div>}

      <div className="flex justify-between items-start mb-3">
        <div>
            <h3 className="font-serif text-xl font-bold text-stone-200">{character.name}</h3>
            <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">{character.class}</span>
        </div>
        <div className={`px-2 py-0.5 text-xs border ${isHealthy ? 'border-green-900 text-green-700' : 'border-red-900 text-red-700'} font-mono uppercase`}>
            {character.status}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="space-y-3">
        {/* HP Bar */}
        <div className="w-full bg-stone-950 h-2 border border-stone-800">
            <div 
                className="bg-blood h-full transition-all duration-500" 
                style={{ width: `${(character.stats.hp / character.stats.maxHp) * 100}%` }}
            ></div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm font-mono text-stone-400">
            <div className="flex justify-between border-b border-stone-800 pb-1">
                <span>CBT</span>
                <span className="text-stone-200">{character.stats.combat}</span>
            </div>
            <div className="flex justify-between border-b border-stone-800 pb-1">
                <span>SAV</span>
                <span className="text-stone-200">{character.stats.lore}</span>
            </div>
        </div>
      </div>
    </div>
  );
};