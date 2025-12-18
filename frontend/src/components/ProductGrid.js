// src/components/ProductGrid.js
import React from 'react';
import products from '../data/products';
import tshirtImg from '../assets/img-tshirt.png';

// Carrega imagens do diretório de assets para resolver por nome com fallback
let assetsCtx;
try {
  // Webpack: cria contexto de todos os arquivos de imagem em src/assets
  assetsCtx = require.context('../assets', false, /\.(png|jpe?g|svg)$/);
} catch (e) {
  assetsCtx = null;
}

const resolveImage = (imageName, directImage) => {
  if (directImage) return directImage;
  if (assetsCtx && imageName) {
    const key = `./${imageName}`;
    const keys = assetsCtx.keys ? assetsCtx.keys() : [];
    if (keys.includes(key)) {
      try {
        return assetsCtx(key);
      } catch (e) {
        // fallback abaixo
      }
    }
  }
  return tshirtImg; // fallback padrão
};

/**
 * Grid de produtos padrão: imagem fixa, título e descrição pequena.
 * Usa dados de src/data/products.js e preenche imagem/descrição padrão quando ausentes.
 */
export default function ProductGrid() {
  const items = (products || []).map((p, idx) => ({
    id: p.id ?? idx,
    title: p.name ?? 'Produto',
    desc: p.description ?? p.category ?? 'Produto personalizado Usports',
    image: resolveImage(p.imageName, p.image),
  }));

  return (
    <section className="product-grid-section" aria-label="Produtos">
      <div className="product-grid-container">
        {items.map((item) => (
          <article key={item.id} className="product-card">
            <div className="product-image-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <h4 className="product-title">{item.title}</h4>
            <p className="product-desc">{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
