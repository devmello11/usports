import React from 'react';
import '../../styles/landing.css';

export default function Landing() {
    return (
        <section className="landing-container" style={{ paddingTop: 120, minHeight: '100vh' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px', textAlign: 'center' }}>
                <h1>Apresentação</h1>
                <p>Bem-vindo à nossa página de apresentação.</p>
            </div>
        </section>
    );
}