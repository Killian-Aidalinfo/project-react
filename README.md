# Atelier — Projet React

Application React multi-vues minimale, construite avec **Vite** et **React Router**.
Projet réalisé dans le cadre de CESI INF83.

## Vues

- **Accueil** — présentation + sections animées
- **Travaux** — grille de cartes
- **Services** — éventail de prestations
- **Équipe** — présentation des membres
- **FAQ** — accordéon interactif
- **À propos** — texte + statistiques
- **Contact** — formulaire avec gestion d'état
- **404** — page non trouvée (catch-all)

## Stack

- React 19
- Vite
- React Router DOM

## Démarrer en local

```bash
npm install
npm run dev
```

L'application est disponible sur l'URL affichée (par défaut http://localhost:5173).

## Build de production

```bash
npm run build
npm run preview
```

## Structure

```
src/
├── main.jsx          # point d'entrée + routeur
├── index.css         # tokens de design
├── App.css           # styles des composants
├── components/
│   └── Layout.jsx    # nav + footer partagés
└── pages/            # une vue par fichier
```
