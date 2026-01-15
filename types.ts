export type CharacterId = 'dean' | 'sam';
export type SceneId = string;

export interface Character {
  id: CharacterId;
  name: string;
  class: 'Chasseur' | 'Homme de Lettres';
  stats: {
    hp: number;
    maxHp: number;
    combat: number; // Pour la baston
    lore: number;   // Pour les recherches/exorcismes
  };
  status: 'En Forme' | 'Blessé' | 'Possédé';
  avatarUrl?: string;
}

export interface Item {
  id: string;
  name: string;
  description: string;
  type: 'Arme' | 'Consommable' | 'Clé';
  quantity: number;
  icon: string;
}

export interface Choice {
  id: string;
  text: string;
  nextSceneId: SceneId;
  requiredItemId?: string;
  type: 'combat' | 'investigation' | 'movement' | 'dialogue';
}

export interface Scene {
  id: SceneId;
  title: string;
  location: string;
  description: string;
  choices: Choice[];
  bgImage?: string;
}

export interface GameState {
  party: Character[];
  inventory: Item[];
  currentSceneId: SceneId;
  history: SceneId[];
}