// src/pages/Home/index.js
import React, { useRef, useState } from 'react'; 
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'; 

import bannerUsports from '../../assets/bannerUsports.png';
import animacaoPaginaContato from '../../assets/contact-animation.gif';
import logoLFF from '../../assets/LFF.png';
import logoCBFS from '../../assets/CBFS_logo-07.png';
import logoADEF from '../../assets/ADEF.png';
import logoFutsal from '../../assets/SUB_17.png';

import PartnersBottomBtn from '../../components/PartnersBottomBtn.js';
import '../../styles/home2.css';
import '../../styles/home.css';
import '../../styles/contact.css';

function Home() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');

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

        <PartnersBottomBtn/>

        <section className='partners-bottom-menu page-section'>
          <div className="clientes-mobile">
            <button className="btn-clientes-mobile">NOSSOS CLIENTES</button>
            <div className="logos-clientes">
              <Link to="/lff"><img className="logo-lff" src={logoLFF} alt="Logo LFF" /></Link>
              <Link to="/cbfs"><img className="logo-cbfs" src={logoCBFS} alt="Logo CBFS" /></Link>
              <Link to="/adef"><img className="logo-adef" src={logoADEF} alt="Logo ADEF" /></Link>
              <Link to="/sub17"><img className="logo-futsal" src={logoFutsal} alt="Logo Futsal Sub17" /></Link>
            </div>
          </div>
        </section>
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