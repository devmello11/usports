import React from 'react';
import '../styles/landing.css';

export default function UnderConstruction({ title }) {
  return (
    <div className="landing-container" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <div>
        {title && <h1 style={{ marginBottom: '1rem' }}>{title}</h1>}
        <p style={{ fontSize: '1.25rem' }}>Esta página está em construção.</p>
      </div>
    </div>
  );
}
