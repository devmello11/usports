import React from 'react';
import '../../styles/contact.css';
// Usando a animação indicada pelo usuário
const contactAnimationSrc = "/static/media/contact-animation.d62f90ee7eba513bc5ed.gif";

export default function Orcamento() {
  return (
    <section className="contact-section">
      {/* layout lado a lado no desktop via CSS (min-width: 480px) */}
      <div className="form-container">
        <h2>Solicite seu orçamento</h2>
        <form>
          <div className="input-group">
            <label className="input-label" htmlFor="nome">Nome</label>
            <input className="input-field" type="text" id="nome" name="nome" placeholder="Seu nome" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="email">E-mail</label>
            <input className="input-field" type="email" id="email" name="email" placeholder="seu@email.com" />
          </div>
          <div className="input-group">
            <label className="input-label" htmlFor="telefone">Telefone</label>
            <input className="input-field" type="tel" id="telefone" name="telefone" placeholder="(11) 9 9999-9999" />
          </div>
          <div className="textarea-container">
            <label className="input-label" htmlFor="mensagem">Mensagem</label>
            <textarea className="textarea-field" id="mensagem" name="mensagem" placeholder="Descreva seu pedido"></textarea>
            <button type="button" className="btn-send-icon" aria-label="Enviar Mensagem">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </form>
      </div>

      <div className="contact-page-img">
        <img src={contactAnimationSrc} alt="Animação decorativa da página de contato" />
      </div>
    </section>
  );
}
