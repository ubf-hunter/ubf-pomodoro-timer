# Politique d'utilisation & Guide de contribution

> **English version below** — see [Usage Policy & Contribution Guide](#usage-policy--contribution-guide).

Merci de l'intérêt que vous portez à **UBF Pomodoro Timer**. Ce document réunit les règles d'utilisation et la marche à suivre pour contribuer.

---

## 1. Politique d'utilisation

### 1.1 Licence

Code sous **licence MIT** — voir [LICENSE](LICENSE). Vous pouvez :

- l'utiliser à des fins personnelles ou commerciales ;
- le modifier, le redistribuer, le forker ;
- l'intégrer à d'autres projets ouverts ou propriétaires.

À condition de conserver la mention de copyright et le texte de la licence dans toute redistribution du code source.

### 1.2 Absence de garantie

Le logiciel est fourni **« tel quel »**, sans garantie d'aucune sorte. L'auteur ne peut être tenu responsable des dommages, pertes de données ou dysfonctionnements résultant de son utilisation.

### 1.3 Usage attendu

- **Usage éthique** : ne pas utiliser ce projet pour porter atteinte à autrui ou violer des lois en vigueur.
- **Pas de représentation frauduleuse** : ne pas présenter une version modifiée comme la version officielle maintenue par l'auteur.

### 1.4 Signalement de vulnérabilité

Pour toute faille de sécurité, contactez directement l'auteur — **ne créez pas d'issue publique**.

---

## 2. Guide de contribution

Toutes les contributions sont les bienvenues : bugs, améliorations UI, nouveaux modes de timer, documentation.

### 2.1 Avant de commencer

- **Ouvrez une issue** pour toute modification importante — cela évite les efforts en double.
- **Cherchez dans les issues existantes** pour vérifier que le sujet n'est pas déjà traité.
- Pour un simple correctif (typo, petit bug CSS), une pull request directe est acceptée.

### 2.2 Workflow

1. **Forkez** le dépôt.
2. Créez une **branche dédiée** :
   ```bash
   git checkout -b feat/nom-court
   ```
   - `feat/…` — nouvelle fonctionnalité
   - `fix/…` — correctif
   - `docs/…` — documentation
   - `refactor/…` — refactoring sans changement de comportement
3. **Committez** avec des messages clairs à l'impératif :
   ```
   feat: ajoute un thème clair
   fix: corrige la reprise du timer après pause
   docs: précise la plage des paramètres
   ```
4. **Poussez** votre branche et **ouvrez une pull request** vers `main`.
5. Décrivez le **contexte**, la **motivation** et la **façon de tester** dans la PR.

### 2.3 Style de code

- **React 18** — composants fonctionnels + hooks (pas de classes).
- **CSS pur** — pas d'ajout de framework CSS (Tailwind, Bootstrap, etc.) sans discussion préalable.
- Respectez la palette et les typographies existantes (Syne + Space Mono).
- Un fichier `.css` par composant si les styles deviennent conséquents.

### 2.4 Idées de contributions bienvenues

- 🎨 Thèmes clairs / personnalisables
- 📊 Statistiques persistées (localStorage)
- 🔔 Notifications système (Web Notifications API)
- 🌍 Internationalisation (i18n)
- 🎵 Sons de notification alternatifs
- ♿ Accessibilité (ARIA, contraste, navigation clavier)

### 2.5 Code de conduite

**Respect mutuel.** Aucune forme de harcèlement, discrimination ou attaque personnelle ne sera tolérée dans les issues, les PR ou les discussions. Les retours doivent porter sur le code, jamais sur les personnes.

### 2.6 Contact

- **Auteur** : Béni Uwayo — [@ubf-hunter](https://github.com/ubf-hunter)
- **Issues** : [github.com/ubf-hunter/ubf-pomodoro-timer/issues](https://github.com/ubf-hunter/ubf-pomodoro-timer/issues)

---

# Usage Policy & Contribution Guide

Thanks for your interest in **UBF Pomodoro Timer**. This document gathers the usage rules and the steps to follow to contribute.

---

## 1. Usage Policy

### 1.1 License

Code under the **MIT License** — see [LICENSE](LICENSE). You may:

- use it for personal or commercial purposes;
- modify, redistribute, fork it;
- integrate it into other open or proprietary projects.

Provided you keep the copyright notice and license text in any source code redistribution.

### 1.2 No warranty

The software is provided **"as is"**, without warranty of any kind. The author cannot be held liable for damages, data loss or malfunctions resulting from its use.

### 1.3 Expected use

- **Ethical use**: do not use this project to harm others or violate applicable laws.
- **No misrepresentation**: do not present a modified version as the official version maintained by the author.

### 1.4 Reporting a vulnerability

For any security flaw, contact the author directly — **do not open a public issue**.

---

## 2. Contribution Guide

All contributions are welcome: bugs, UI improvements, new timer modes, documentation.

### 2.1 Before you start

- **Open an issue** for any significant modification — this avoids duplicated effort.
- **Search existing issues** to check the topic isn't already covered.
- For a simple fix (typo, small CSS bug), a direct pull request is accepted.

### 2.2 Workflow

1. **Fork** the repository.
2. Create a **dedicated branch**:
   ```bash
   git checkout -b feat/short-name
   ```
   - `feat/…` — new feature
   - `fix/…` — bug fix
   - `docs/…` — documentation
   - `refactor/…` — refactor without behavior change
3. **Commit** with clear, imperative messages:
   ```
   feat: add a light theme
   fix: correct timer resume after pause
   docs: clarify the settings range
   ```
4. **Push** your branch and **open a pull request** to `main`.
5. Describe the **context**, **motivation** and **how to test** in the PR.

### 2.3 Code style

- **React 18** — functional components + hooks (no classes).
- **Pure CSS** — no CSS framework addition (Tailwind, Bootstrap, etc.) without prior discussion.
- Respect the existing palette and typography (Syne + Space Mono).
- One `.css` file per component if styles become substantial.

### 2.4 Welcome contribution ideas

- 🎨 Light / customizable themes
- 📊 Persisted stats (localStorage)
- 🔔 System notifications (Web Notifications API)
- 🌍 Internationalization (i18n)
- 🎵 Alternative notification sounds
- ♿ Accessibility (ARIA, contrast, keyboard navigation)

### 2.5 Code of conduct

**Mutual respect.** No form of harassment, discrimination or personal attack will be tolerated in issues, PRs or discussions. Feedback must be about the code, never about individuals.

### 2.6 Contact

- **Author**: Béni Uwayo — [@ubf-hunter](https://github.com/ubf-hunter)
- **Issues**: [github.com/ubf-hunter/ubf-pomodoro-timer/issues](https://github.com/ubf-hunter/ubf-pomodoro-timer/issues)
