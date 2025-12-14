# 🍅 Pomodoro Timer

Un timer Pomodoro élégant et moderne construit avec React et CSS pur.

![Pomodoro Timer](https://img.shields.io/badge/React-18.2-blue) ![CSS](https://img.shields.io/badge/CSS-Pure-orange)

## ✨ Fonctionnalités

- **3 modes de timer** : Focus (25 min), Pause courte (5 min), Pause longue (15 min)
- **Progression visuelle** avec un anneau animé
- **Compteur de sessions** pour suivre votre productivité
- **Son de notification** à la fin de chaque session
- **Paramètres personnalisables** pour ajuster les durées
- **Design responsive** qui s'adapte à tous les écrans
- **Titre dynamique** qui affiche le temps restant dans l'onglet

## 🚀 Installation et lancement

### Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

### Étapes

1. **Ouvrez le dossier dans VS Code**

   ```bash
   cd pomodoro-timer
   code .
   ```

2. **Installez les dépendances**

   Ouvrez le terminal dans VS Code (`Ctrl + ù` ou `Cmd + ù`) et exécutez :

   ```bash
   npm install
   ```

3. **Lancez l'application**

   ```bash
   npm start
   ```

4. **Ouvrez votre navigateur**

   L'application s'ouvrira automatiquement à l'adresse : `http://localhost:3000`

## 🎯 Comment utiliser

1. **Sélectionnez un mode** : Focus, Pause, ou Long Break
2. **Appuyez sur Play** pour démarrer le timer
3. **Pause/Reset** : Utilisez les boutons de contrôle selon vos besoins
4. **Paramètres** : Cliquez sur l'icône ⚙️ pour personnaliser les durées

## ⚙️ Personnalisation

Dans le panneau de paramètres, vous pouvez modifier :

- Durée du focus (1-120 minutes)
- Durée de la pause courte (1-60 minutes)
- Durée de la pause longue (1-60 minutes)
- Nombre de sessions avant la pause longue (1-10)

## 🛠️ Structure du projet

```
pomodoro-timer/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # Composant principal avec la logique
│   ├── index.js       # Point d'entrée React
│   └── index.css      # Styles CSS
├── package.json
└── README.md
```

## 🎨 Design

Le design utilise une esthétique néo-brutaliste avec :

- Palette de couleurs sombres avec accents colorés
- Typographies modernes (Syne + Space Mono)
- Animations fluides et micro-interactions
- Effets de lumière et gradients subtils

## 📱 Responsive

L'application est entièrement responsive et fonctionne parfaitement sur :
- Desktop
- Tablette
- Mobile

---

Fait avec ❤️ et React
