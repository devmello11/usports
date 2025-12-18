// src/components/ClubsLinksGallery.js
import React from 'react';

import l1 from '../assets/linksClubes01.png';
import l2 from '../assets/linksClubes02.png';
import l3 from '../assets/linksClubes03.png';
import l4 from '../assets/linksClubes04.png';
import l5 from '../assets/linksClubes05.png';

import '../styles/home2.css';

export default function ClubsLinksGallery() {
  const cards = [l1, l2, l3, l4, l5];

  return (
    <div className="clubs-group-9" id="clubs-group-9">
      {cards.map((src, idx) => (
        <div key={idx} className="clubs-card">
          <img src={src} alt={`Clube ${idx + 1}`} />
        </div>
      ))}
    </div>
  );
}
