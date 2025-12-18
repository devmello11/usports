// src/pages/Home/index.js
import React, { useRef, useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser'; 

import bannerUsports from '../../assets/bannerUsports.png';
import animacaoPaginaContato from '../../assets/contact-animation.gif';

import BannerFiveImages from '../../components/BannerFiveImages.js';
import ClubsLinksGallery from '../../components/ClubsLinksGallery.js';
import ProductGrid from '../../components/ProductGrid.js';
import '../../styles/home2.css';
import '../../styles/home.css';
import '../../styles/contact.css';

function Home() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location && location.hash === '#clubs-group-9') {
      const el = document.getElementById('clubs-group-9');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        (result) => {
          setStatus("Mensagem enviada com sucesso!");
          formRef.current.reset();
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error("Erro do EmailJS:", error.text);
          setStatus(`Ocorreu um erro ao enviar. Tente novamente.`);
        }
      );
  };

  return (
    <>
      {/* --- BANNER ESTÁTICO --- */}
      <section className="home-container-base">
        <div className="home-banner">
          <img
            src={bannerUsports}
            alt="Banner Usports - Design exclusivo"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* --- FAIXA COM 5 IMAGENS --- */}
        <BannerFiveImages/>

        {/* --- GALERIA DE LOGOS (Group 9) --- */}
        <ClubsLinksGallery/>

  {/* --- GRID DE PRODUTOS (Group 10) --- */}
  <ProductGrid/>

        {/* partners-bottom-menu removido a pedido */}
      </section>

      {/* --- SEÇÃO DE CONTATO --- */}
      <section className="contact-section">
        <div className='form-container'>
          <h2>ENTRE EM CONTATO:</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nome" className="input-label">Nome</label>
              <input type="text" id="nome" name="nome" className="input-field" maxLength={50} required />
            </div>
            <div className="input-group">
              <label htmlFor="celular" className="input-label">Celular</label>
              <input type="tel" id="celular" name="celular" className="input-field" maxLength={15} required />
            </div>
            <div className="input-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input type="email" id="email" name="email" className="input-field" maxLength={50} required />
            </div>
            <div className="input-group textarea-container">
              <label htmlFor="mensagem" className="input-label">Mensagem</label>
              <textarea id="mensagem" name="mensagem" className="textarea-field" maxLength={1000} required />
              <button type="submit" className="btn-send-icon" aria-label="Enviar Mensagem" disabled={status === 'Enviando...'}>
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>

            {status && <p style={{ marginTop: '15px', color: '#fff', textAlign: 'center' }}>{status}</p>}
          </form>
        </div>
        <div className='contact-page-img'>
          <img src={animacaoPaginaContato} alt='Animação decorativa da página de contato' />
        </div>
      </section>
    </>
  );
}

export default Home;