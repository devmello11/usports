// src/components/BannerFiveImages.js
import React from 'react';

import img1 from '../assets/banner2Img1.png';
import img2 from '../assets/banner2Img2.png';
import img3 from '../assets/banner2Img3.png';
import img4 from '../assets/banner2Img4.png';
import img5 from '../assets/banner2Img5.png';

import '../styles/home2.css';

export default function BannerFiveImages() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="five-images-section">
      <div className="five-images-container">
        {images.map((src, i) => (
          <div key={i} className="five-image-card">
            <img src={src} alt={`Banner ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
