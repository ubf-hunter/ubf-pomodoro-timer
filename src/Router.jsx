import React from 'react';
import App from './App';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

export default function Router() {
  const path = window.location.pathname;

  if (path === '/mentions-legales') {
    return <Legal />;
  }

  if (path === '/politique-confidentialite') {
    return <Privacy />;
  }

  // Par défaut, on retourne ton App.js d'origine inchangé
  return <App />;
}
