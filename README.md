<div align="center">

# 🍅 UBF Pomodoro Timer

**Un timer Pomodoro élégant, moderne et responsive**
**An elegant, modern, responsive Pomodoro timer**

[![Licence : MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg?logo=react&logoColor=white)](https://react.dev/)
[![CSS](https://img.shields.io/badge/CSS-Pure-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Live](https://img.shields.io/badge/live-ubf--pomodoro--timer.vercel.app-black.svg)](https://ubf-pomodoro-timer.vercel.app)

🇫🇷 **Français** · [🇬🇧 English](#-english)

</div>

---

## 🇫🇷 Présentation

Timer Pomodoro construit avec **React** et du **CSS pur** — pas de framework CSS, pas de dépendance UI. Esthétique néo-brutaliste, palette sombre, typographies modernes.

🌐 **Démo en ligne : [ubf-pomodoro-timer.vercel.app](https://ubf-pomodoro-timer.vercel.app)**

## ✨ Fonctionnalités

- ⏱️ **3 modes** — Focus (25 min), Pause courte (5 min), Pause longue (15 min)
- 🔵 **Progression visuelle** — anneau animé synchronisé avec le compte à rebours
- 📈 **Compteur de sessions** — suivi de productivité au fil de la journée
- 🔔 **Notification sonore** — signal à la fin de chaque session
- ⚙️ **Paramètres personnalisables** — durées, nombre de sessions avant la pause longue
- 📱 **Responsive** — desktop, tablette, mobile
- 🪟 **Titre dynamique** — le temps restant s'affiche dans l'onglet du navigateur

## 🚀 Installation & lancement

### Prérequis

- **Node.js 14+**
- **npm** ou **yarn**

### Étapes

```bash
git clone https://github.com/ubf-hunter/ubf-pomodoro-timer.git
cd ubf-pomodoro-timer
npm install
npm start                # http://localhost:3000
```

Pour la production :

```bash
npm run build            # bundle optimisé dans build/
```

## 🎯 Utilisation

1. **Sélectionnez un mode** — Focus, Short Break ou Long Break
2. **Play** pour démarrer le compte à rebours
3. **Pause / Reset** selon vos besoins
4. **⚙️** pour ouvrir les paramètres

## ⚙️ Personnalisation

Dans le panneau de paramètres :

| Réglage | Plage | Défaut |
|---|---|---|
| Durée du focus | 1 – 120 min | 25 min |
| Durée de la pause courte | 1 – 60 min | 5 min |
| Durée de la pause longue | 1 – 60 min | 15 min |
| Sessions avant pause longue | 1 – 10 | 4 |

## 🎨 Design

Esthétique **néo-brutaliste** :

- Palette sombre avec accents colorés
- Typographies **Syne** + **Space Mono**
- Animations fluides et micro-interactions
- Effets de lumière et gradients subtils

## 🗂️ Structure

```
ubf-pomodoro-timer/
├── public/
│   └── index.html
├── src/
│   ├── App.js         # composant principal (logique du timer)
│   ├── index.js       # point d'entrée React
│   └── index.css      # styles globaux
├── package.json
└── README.md
```

## 🤝 Contribuer

Bugs, améliorations UI, idées de nouveaux modes (long-break intelligent, statistiques persistées, thèmes clairs) : voir [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 Licence

Sous licence **MIT** — voir [LICENSE](LICENSE).

---

## 🇬🇧 English

### Overview

A Pomodoro timer built with **React** and **pure CSS** — no CSS framework, no UI library. Neo-brutalist look, dark palette, modern typography.

🌐 **Live demo: [ubf-pomodoro-timer.vercel.app](https://ubf-pomodoro-timer.vercel.app)**

### Features

- ⏱️ **3 modes** — Focus (25 min), Short Break (5 min), Long Break (15 min)
- 🔵 **Visual progress** — animated ring synced with the countdown
- 📈 **Session counter** — track productivity throughout the day
- 🔔 **Sound notification** — signal at the end of each session
- ⚙️ **Customizable settings** — durations, sessions before long break
- 📱 **Responsive** — desktop, tablet, mobile
- 🪟 **Dynamic title** — remaining time shown in the browser tab

### Install & run

**Requirements**: Node.js 14+, npm or yarn.

```bash
git clone https://github.com/ubf-hunter/ubf-pomodoro-timer.git
cd ubf-pomodoro-timer
npm install
npm start                # http://localhost:3000
```

Production build:

```bash
npm run build            # optimized bundle in build/
```

### Usage

1. **Pick a mode** — Focus, Short Break, or Long Break
2. **Play** to start the countdown
3. **Pause / Reset** as needed
4. **⚙️** to open settings

### Customization

| Setting | Range | Default |
|---|---|---|
| Focus length | 1 – 120 min | 25 min |
| Short break | 1 – 60 min | 5 min |
| Long break | 1 – 60 min | 15 min |
| Sessions before long break | 1 – 10 | 4 |

### Contributing

Bugs, UI improvements, new mode ideas (smart long break, persisted stats, light themes): see [CONTRIBUTING.md](CONTRIBUTING.md).

### License

**MIT** — see [LICENSE](LICENSE).

---

<div align="center">

Made with ❤️ and React — by **Béni Uwayo** · [@ubf-hunter](https://github.com/ubf-hunter)

</div>
