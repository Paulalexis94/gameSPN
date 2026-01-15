import { GameState, Scene, Character, Item } from './types';

// --- DONNÉES INITIALES ---

const DEAN: Character = {
  id: 'dean',
  name: 'Dean Winchester',
  class: 'Chasseur',
  stats: { hp: 100, maxHp: 100, combat: 9, lore: 4 },
  status: 'En Forme',
};

const SAM: Character = {
  id: 'sam',
  name: 'Sam Winchester',
  class: 'Homme de Lettres',
  stats: { hp: 100, maxHp: 100, combat: 5, lore: 9 },
  status: 'En Forme',
};

const INITIAL_INVENTORY: Item[] = [
  { id: 'rock_salt', name: 'Gros Sel', description: 'Repousse les fantômes et les démons.', type: 'Consommable', quantity: 3, icon: '🧂' },
  { id: 'fake_ids', name: 'Badges FBI', description: 'Agents Plant et Page.', type: 'Clé', quantity: 2, icon: '🆔' },
  { id: 'emf', name: 'Détecteur EMF', description: 'Détecte les fréquences électromagnétiques.', type: 'Clé', quantity: 1, icon: '📟' },
  { id: 'colt_1911', name: 'Colt 1911 A1', description: 'Le préféré de Dean.', type: 'Arme', quantity: 1, icon: '🔫' },
];

export const INITIAL_GAME_STATE: GameState = {
  party: [DEAN, SAM],
  inventory: INITIAL_INVENTORY,
  currentSceneId: 'intro_impala',
  history: [],
};

// --- SCÉNARIO : LE DINER DES MURMURES ---

export const SCENES: Record<string, Scene> = {
  'intro_impala': {
    id: 'intro_impala',
    title: 'La Route Jusqu\'ici',
    location: 'I-70, Kansas',
    description: "L'Impala de 67 rugit sur l'autoroute sombre, seule source de lumière à des kilomètres. Le ronronnement du moteur est votre seul réconfort depuis des jours. Dean tape sur le volant au rythme du rock classique. Sam dort sur le siège passager, une carte étalée sur les genoux. Un bruit statique interrompt soudain la musique à la radio.",
    choices: [
      { id: 'c1', text: 'Réveiller Sam. Ce grésillement ressemble à un message.', nextSceneId: 'wake_sam', type: 'dialogue' },
      { id: 'c2', text: 'S\'arrêter au prochain Diner. Café d\'abord.', nextSceneId: 'diner_exterior', type: 'movement' },
    ]
  },
  'wake_sam': {
    id: 'wake_sam',
    title: 'Phénomène de Voix Électronique',
    location: 'Dans "Baby"',
    description: "Vous donnez un coup de coude à Sam. Il se réveille en sursaut, la main cherchant instantanément le couteau dans la portière. 'Doucement, tigre,' dit Dean. 'Écoute la radio.' À travers les parasites, une voix murmure : ...aide... cimetière... saule...\n\nSam se frotte les yeux. 'On dirait un PVE de classe A. Il faut trouver d'où vient ce signal.'",
    choices: [
      { id: 'c1', text: 'Vérifier la carte pour des cimetières proches.', nextSceneId: 'map_check', type: 'investigation' },
      { id: 'c2', text: 'Ignorer. On a un boulot à St. Louis.', nextSceneId: 'game_over_ignored', type: 'movement' },
    ]
  },
  'diner_exterior': {
    id: 'diner_exterior',
    title: 'Repas de Minuit',
    location: 'Joe\'s All-Night Diner',
    description: "L'enseigne au néon grésille de façon inquiétante : 'CHEZ JOE'. Vous garez l'Impala. Le parking est vide à l'exception d'un vieux pick-up rouillé. En sortant, vous ressentez une chute brutale de température. Vous pouvez voir votre buée dans l'air, alors qu'on est en plein juillet.",
    choices: [
      { id: 'c1', text: 'Scanner la zone avec le détecteur EMF.', nextSceneId: 'diner_emf', type: 'investigation', requiredItemId: 'emf' },
      { id: 'c2', text: 'Entrer et commander de la tarte.', nextSceneId: 'diner_inside', type: 'movement' },
    ]
  },
  'map_check': {
    id: 'map_check',
    title: 'Cartographie',
    location: 'Bande d\'arrêt d\'urgence I-70',
    description: "Sam trace une ligne sur la carte. 'Il y a un vieux cimetière de pionniers à environ cinq kilomètres à l'est. Blackwood Grove. Il y a un énorme saule pleureur au centre.' Dean vérifie son arme. 'Le Saule des Murmures. Allons voir ça.'",
    choices: [
      { id: 'c1', text: 'Conduire vers Blackwood Grove.', nextSceneId: 'graveyard_gate', type: 'movement' },
    ]
  },
  'diner_emf': {
    id: 'diner_emf',
    title: 'Zone Rouge',
    location: 'Joe\'s All-Night Diner',
    description: "Vous sortez l'EMF. Il s'allume instantanément en rouge et émet un sifflement strident. L'aiguille est bloquée au max. Peu importe ce qui est ici, c'est en colère, et c'est juste derrière vous.",
    choices: [
      { id: 'c1', text: 'Se retourner et saler le sol !', nextSceneId: 'combat_start_ghost', type: 'combat', requiredItemId: 'rock_salt' },
      { id: 'c2', text: 'Courir vers l\'Impala !', nextSceneId: 'intro_impala', type: 'movement' },
    ]
  },
  'graveyard_gate': {
    id: 'graveyard_gate',
    title: 'Terre Consacrée',
    location: 'Cimetière Blackwood Grove',
    description: "Les portes en fer sont rouillées et fermées. Le brouillard s'accroche au sol, tourbillonnant autour des pierres tombales. Au centre, un saule massif oscille dans la nuit sans vent. Vous apercevez une silhouette debout dessous, vêtue d'une robe blanche.",
    choices: [
       { id: 'c1', text: 'Approcher prudemment.', nextSceneId: 'woman_in_white', type: 'investigation' },
    ]
  },
   'woman_in_white': {
    id: 'woman_in_white',
    title: 'La Dame Blanche',
    location: 'Sous le Saule',
    description: "Fin de la Démo V0.1. Dans la version complète, un combat s'engagerait ici en utilisant le système de statistiques.",
    choices: [
       { id: 'c1', text: 'Relancer la Démo', nextSceneId: 'intro_impala', type: 'movement' },
    ]
  },
  'diner_inside': {
      id: 'diner_inside',
      title: 'Plus de Tarte',
      location: 'Intérieur du Diner',
      description: "Vous entrez. Le cuisinier fixe le mur. Il se tourne lentement, ses yeux sont complètement noirs. Un démon. 'Winchesters,' siffle-t-il. Il claque des doigts.",
      choices: [
          { id: 'c1', text: 'Se battre !', nextSceneId: 'woman_in_white', type: 'combat' } // boucle vers la fin pour la démo
      ]
  },
  'game_over_ignored': {
      id: 'game_over_ignored',
      title: 'Mauvaise Fin',
      location: 'La Route',
      description: "Vous passez votre chemin. Plus tard, aux infos, vous apprenez qu'un couple a disparu près de cette borne kilométrique. Sauver des gens, ça veut dire suivre les signes. Réessayez.",
      choices: [
          { id: 'c1', text: 'Recommencer', nextSceneId: 'intro_impala', type: 'movement' }
      ]
  }
};