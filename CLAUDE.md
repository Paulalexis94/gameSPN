# L'Héritage Winchester — Contexte Projet

## Présentation
RPG textuel narratif fan-made dans l'univers de Supernatural. Le joueur incarne les frères Winchester et prend des décisions qui font avancer l'histoire. Actuellement en v0.1 (démo jouable).

**URL en ligne :** https://paulalexis94.github.io/gameSPN/
**Dépôt GitHub :** https://github.com/Paulalexis94/gameSPN

## Stack technique
- React 18 + TypeScript
- Vite (build + dev server)
- Tailwind CSS (via CDN dans index.html)
- GitHub Actions → GitHub Pages (déploiement automatique sur chaque push sur `main`)

## Structure des fichiers
```
index.html          # Point d'entrée HTML (Tailwind CDN, fonts Google)
index.tsx           # Montage React
App.tsx             # Composant racine, gestion de l'état du jeu
types.ts            # Interfaces TypeScript (Character, Item, Scene, GameState, Choice)
constants.ts        # Données du jeu : personnages, inventaire initial, toutes les scènes
components/
  Layout.tsx        # Header, footer, fond de page
  CharacterCard.tsx # Carte de stats d'un personnage (HP bar, combat/lore)
  Inventory.tsx     # Affichage du coffre de l'Impala
  ActionPanel.tsx   # Boutons de choix (avec icônes par type)
  Typewriter.tsx    # Effet machine à écrire pour les textes narratifs
```

## Commandes utiles
```bash
npm install       # Installer les dépendances
npm run dev       # Lancer le serveur local
npm run build     # Build de production (tsc + vite build)
```

## État actuel du jeu (v0.1)
- Scénario : "Le Diner des Murmures" — intro jouable avec plusieurs embranchements
- Personnages jouables : Dean Winchester (Chasseur) et Sam Winchester (Homme de Lettres)
- Inventaire de départ : Gros Sel, Badges FBI, Détecteur EMF, Colt 1911
- Système de prérequis d'objets fonctionnel (ex : EMF requis pour scanner)
- La démo se termine sur la scène `woman_in_white`

## Ce qui reste à faire (pistes)
- Système de combat au tour par tour (utiliser les stats combat/lore)
- Ajout/retrait d'objets dans l'inventaire selon les événements
- Sauvegarde locale (localStorage)
- Davantage de scénarios et de lieux
- Effets sonores / musique
- Portraits/avatars pour Dean et Sam

## Conventions
- Tout le contenu narratif est en **français**
- Les scènes sont définies dans `constants.ts` — c'est là qu'on ajoute du contenu
- Les nouveaux types vont dans `types.ts`
- TypeScript strict : pas de `any`, pas d'imports inutilisés (`noUnusedLocals: true`)
