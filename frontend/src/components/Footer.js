import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css';

export default function Footer(){
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-columns">
          <section className="footer-col">
            <h3 className="footer-title">Categorias</h3>
            <ul>
              <li><Link to="#">Todos os Produtos</Link></li>
              <li><Link to="#">Novidades</Link></li>
              <li><Link to="#">Papelaria</Link></li>
            </ul>
          </section>

          <section className="footer-col">
            <h3 className="footer-title">Links Úteis</h3>
            <ul>
              <li><Link to="#">Termos e Condições de Compra</Link></li>
              <li><Link to="#">Política de Frete Grátis</Link></li>
              <li><Link to="#">Perguntas frequentes</Link></li>
              <li><Link to="#">Sobre nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="#">Regulamento do Programa de Pontos UniClub</Link></li>
              <li><Link to="#">Política de Pré-Venda</Link></li>
            </ul>
          </section>

          <section className="footer-col">
            <h3 className="footer-title">Entre em contato</h3>
            <address className="footer-contact">
              <a href="tel:+5561982555095">(061) 98255 5095</a>
              <a href="mailto:bsb@unipaperbsb.com">bsb@unipaperbsb.com</a>
              <p>Vicente Pires, Brasília - DF, 72005-080 (EPTG KM 7.2 em frente ao viaduto Israel Pinheiro)</p>
            </address>
            <div className="footer-social" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram" className="icon-btn" title="Instagram">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6.25-4.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="icon-btn" title="Facebook">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M13 22v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H6v4h3v8z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="icon-btn" title="TikTok">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M21 8.5a6.5 6.5 0 0 1-4.5-1.8V16a6 6 0 1 1-6-6 6.1 6.1 0 0 1 1 .09V13a2.8 2.8 0 1 0 0 5.6A2.8 2.8 0 0 0 14.3 16V2.5h2.2A6.5 6.5 0 0 0 21 5.8z"/></svg>
              </a>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <div className="payments">
            <span className="caption">Meios de pagamento</span>
            <ul className="payment-list">
              <li className="badge">VISA</li>
              <li className="badge">MASTERCARD</li>
              <li className="badge">AMEX</li>
              <li className="badge">ELO</li>
              <li className="badge">PIX</li>
            </ul>
          </div>
          <div className="shipping">
            <span className="caption">Meios de envio</span>
            <ul className="payment-list">
              <li className="badge">Correios</li>
              <li className="badge">Transportadora</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
