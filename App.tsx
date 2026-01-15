import React, { useState, useEffect } from 'react';
import { GameState, SceneId } from './types';
import { INITIAL_GAME_STATE, SCENES } from './constants';
import { Layout } from './components/Layout';
import { CharacterCard } from './components/CharacterCard';
import { Inventory } from './components/Inventory';
import { ActionPanel } from './components/ActionPanel';
import { Typewriter } from './components/Typewriter';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [isTextTyping, setIsTextTyping] = useState(false);

  // Current scene data
  const currentScene = SCENES[gameState.currentSceneId];

  const handleChoice = (nextSceneId: SceneId, requiredItemId?: string) => {
    // Basic requirement check
    if (requiredItemId) {
      const hasItem = gameState.inventory.some(item => item.id === requiredItemId);
      if (!hasItem) {
        alert("Vous n'avez pas l'objet requis pour faire ça.");
        return;
      }
    }

    setGameState(prev => ({
      ...prev,
      currentSceneId: nextSceneId,
      history: [...prev.history, prev.currentSceneId]
    }));
  };

  const handleTypingComplete = () => {
    setIsTextTyping(false);
  };

  return (
    <Layout title={currentScene.location}>
      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full max-w-7xl mx-auto p-4">
        
        {/* Left Column: Characters & Stats */}
        <div className="lg:col-span-3 space-y-6">
          {gameState.party.map(char => (
            <CharacterCard key={char.id} character={char} />
          ))}
          <div className="hidden lg:block">
            <Inventory items={gameState.inventory} />
          </div>
        </div>

        {/* Center Column: Narrative & Action */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Narrative Box */}
          <div className="bg-journal-dark border-2 border-stone-800 p-6 shadow-2xl min-h-[300px] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blood to-transparent opacity-50"></div>
            
            <div className="prose prose-invert prose-p:font-serif prose-p:text-lg prose-p:leading-relaxed text-stone-300">
               {/* Scene Title */}
               <h2 className="font-mono text-blood text-xl mb-4 tracking-widest uppercase border-b border-stone-800 pb-2">
                 {currentScene.title}
               </h2>

               {/* Dynamic Text */}
               <Typewriter 
                  text={currentScene.description} 
                  speed={25} 
                  onComplete={handleTypingComplete}
               />
            </div>
          </div>

          {/* Action Area */}
          <ActionPanel 
            choices={currentScene.choices} 
            onChoiceSelect={handleChoice} 
            disabled={isTextTyping}
          />
        </div>

        {/* Right Column: Inventory (Mobile) / Journal / Status */}
        <div className="lg:col-span-3 space-y-6">
           {/* Mobile Inventory View */}
           <div className="lg:hidden">
              <Inventory items={gameState.inventory} />
           </div>

           {/* The Hunter's Journal (Log) */}
           <div className="bg-stone-900 border border-stone-700 p-4 shadow-inner transform rotate-1">
              <h3 className="font-mono text-sm text-stone-500 mb-2 border-b border-stone-700 uppercase tracking-widest">
                Journal du Chasseur
              </h3>
              <div className="text-xs font-serif text-stone-400 italic space-y-2">
                <p>"Le journal de Papa ne dit rien là-dessus... on navigue à l'aveugle, Sammy."</p>
                <div className="h-px w-1/2 bg-stone-800 mx-auto my-2"></div>
                <p>Objectif : Enquêter à {currentScene.location}</p>
              </div>
           </div>

           {/* Audio / Atmosphere Placeholder */}
           <div className="border border-stone-800 p-4 text-center opacity-70">
              <p className="font-mono text-xs text-blood mb-1">EN LECTURE</p>
              <p className="font-serif text-stone-300 italic">"Carry On Wayward Son" - Kansas</p>
           </div>
        </div>

      </div>
    </Layout>
  );
};

export default App;