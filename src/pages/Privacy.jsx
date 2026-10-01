import React from 'react';

export default function Privacy() {
  return (
    <div
      className="container"
      style={{ maxWidth: '800px', padding: 'var(--space-xl) var(--space-md)' }}
    >
      <header className="header">
        <a href="/" className="logo" style={{ textDecoration: 'none' }}>
          <div className="logo-icon">🍅</div>
          <h1>Politique de Confidentialité</h1>
        </a>
        <p className="tagline">Protection de vos données</p>
      </header>

      <main
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: 'var(--space-xl)',
          lineHeight: '1.6',
        }}
      >
        <section style={{ marginBottom: 'var(--space-lg)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: 'var(--space-xs)',
              color: 'var(--accent-break)',
            }}
          >
            1. Collecte des données locales
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            L'application <strong>Ubf Pomodoro</strong> fonctionne
            principalement en local au sein de votre navigateur. Vos préférences
            de minuterie et configurations de sessions peuvent être stockées
            localement via le stockage de votre navigateur (LocalStorage) et ne
            sont en aucun cas revendues.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-lg)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: 'var(--space-xs)',
              color: 'var(--accent-break)',
            }}
          >
            2. Outils de mesure d'audience
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Ce site intègre des outils d'analyse de trafic (tels que Google
            Analytics 4 et Microsoft Clarity) afin d'améliorer l'expérience
            utilisateur, de comprendre l'utilisation de l'application et
            d'optimiser ses performances. Ces outils peuvent utiliser des
            cookies techniques conformément aux réglementations en vigueur.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-lg)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: 'var(--space-xs)',
              color: 'var(--accent-break)',
            }}
          >
            3. Contact
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Pour toute question concernant la protection de vos données
            personnelles, vous pouvez contacter directement l'auteur,{' '}
            <strong>Uwayo Beni</strong>, via son{' '}
            <a
              href="https://uwayo-beni.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent-break)',
                textDecoration: 'underline',
              }}
            >
              portfolio principal
            </a>
            .
          </p>
        </section>

        <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
          <a
            href="/"
            className="mode-btn active"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              padding: 'var(--space-sm) var(--space-lg)',
            }}
          >
            <span>← Retour au Timer</span>
          </a>
        </div>
      </main>
    </div>
  );
}
