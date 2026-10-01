import React, { useEffect, useState } from 'react';
import App from './App';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';

export default function Router() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#mentions-legales') {
    return <Legal />;
  }

  if (hash === '#politique-confidentialite') {
    return <Privacy />;
  }

  return <App />;
}
