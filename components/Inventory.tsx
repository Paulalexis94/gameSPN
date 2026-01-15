import React from 'react';
import { Item } from '../types';

interface InventoryProps {
  items: Item[];
}

export const Inventory: React.FC<InventoryProps> = ({ items }) => {
  return (
    <div className="bg-stone-900/80 border border-stone-700 p-4 backdrop-blur-sm">
      <h3 className="font-mono text-sm text-stone-500 mb-4 border-b border-stone-700 pb-1 uppercase tracking-widest flex justify-between">
         <span>Coffre de l'Impala</span>
         <span>[I]</span>
      </h3>
      
      {items.length === 0 ? (
          <p className="text-stone-600 italic text-sm">Le coffre est vide.</p>
      ) : (
          <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.id} className="flex items-center justify-between group p-1 hover:bg-stone-800 cursor-help transition-colors rounded">
                    <div className="flex items-center gap-3">
                        <span className="text-xl filter grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                        <div>
                            <p className="text-stone-300 font-serif text-sm leading-none">{item.name}</p>
                            <p className="text-stone-600 text-[10px] font-mono mt-0.5">{item.type}</p>
                        </div>
                    </div>
                    <span className="font-mono text-xs text-stone-500">x{item.quantity}</span>
                </li>
            ))}
          </ul>
      )}
    </div>
  );
};