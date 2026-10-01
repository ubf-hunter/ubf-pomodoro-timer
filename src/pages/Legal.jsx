import React from 'react';

export default function Legal() {
  return (
    <div
      className="container"
      style={{ maxWidth: '800px', padding: 'var(--space-xl) var(--space-md)' }}
    >
      <header className="header">
        <a href="/" className="logo" style={{ textDecoration: 'none' }}>
          <div className="logo-icon">🍅</div>
          <h1>Mentions Légales</h1>
        </a>
        <p className="tagline">Informations réglementaires</p>
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
              color: 'var(--accent-work)',
            }}
          >
            1. Éditeur du site
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Le site <strong>Ubf Pomodoro</strong> (accessible à l'adresse{' '}
            <code>https://pomodoro.uwayo-beni.com/</code>) est édité et géré par{' '}
            <strong>Uwayo Beni</strong>, développeur web et designer.
            <br />
            Domaine principal et portfolio professionnel :{' '}
            <a
              href="https://uwayo-beni.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--accent-work)',
                textDecoration: 'underline',
              }}
            >
              uwayo-beni.com
            </a>
            .
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-lg)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: 'var(--space-xs)',
              color: 'var(--accent-work)',
            }}
          >
            2. Hébergement
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Ce site est hébergé par la plateforme Vercel / GitHub Pages. Pour
            toute question technique relative à l'hébergement, veuillez vous
            référer aux documentations officielles des fournisseurs de services
            respectifs.
          </p>
        </section>

        <section style={{ marginBottom: 'var(--space-lg)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              marginBottom: 'var(--space-xs)',
              color: 'var(--accent-work)',
            }}
          >
            3. Propriété intellectuelle
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            L'ensemble de ce site (code source, design, charte graphique
            néo-brutaliste, structure) relève de la législation internationale
            sur le droit d'auteur et la propriété intellectuelle. Toute
            reproduction ou représentation totale ou partielle sans
            l'autorisation expresse de Uwayo Beni est interdite.
          </p>
        </section>

        <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
          <a
            href="#"
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
