import React from 'react';
import '../../styles/contact.css';

export default function Orcamento() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Faça um orçamento</h1>
        <p>Preencha o formulário ou entre em contato pelo WhatsApp para solicitar seu orçamento personalizado.</p>
        <div className="contact-actions">
          <a className="whatsapp-btn" href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="email-btn" href="mailto:contato@usportsbr.com">contato@usportsbr.com</a>
        </div>
        {/* Se quiser reutilizar o formulário da Landing, podemos importá-lo aqui ou criar um novo formulário simplificado. */}
      </div>
    </section>
  );
}
