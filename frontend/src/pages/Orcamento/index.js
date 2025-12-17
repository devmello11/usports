import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Orcamento() {
  const location = useLocation();
  const navigate = useNavigate();

  // Canonicaliza para /orcamento/ quando necessário (evita paths relativos quebrados)
  useEffect(() => {
    if (location.pathname === '/orcamento') {
      navigate('/orcamento/', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <section style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 16px' }}>
        <h1 style={{ marginBottom: 12 }}>Simulador de Orçamento</h1>
        {/* Espaço para o simulador. Substitua por seu componente/iframe quando disponível. */}
        <div id="simulador" style={{ minHeight: 400, border: '1px dashed #ccc', borderRadius: 8 }} />
      </div>
    </section>
  );
}
