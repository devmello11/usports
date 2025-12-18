import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img-logo.png";
import "../styles/header.css";

export default function Header() {
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const closeOnOutside = (e) => {
            const containers = document.querySelectorAll('.partners-container');
            let inside = false;
            containers.forEach((el) => { if (el && el.contains(e.target)) inside = true; });
            if (!inside) { setPartnersOpen(false); }
        };
        document.addEventListener("click", closeOnOutside);
        return () => document.removeEventListener("click", closeOnOutside);
    }, []);

    

    return (
        <header className="header">
            <div className="logo-container">
                <Link to="/" aria-label="Ir para Home" className="logo-link">
                    <img src={logo} className="logo" alt="Usports logo" />
                </Link>
            </div>

            <button
                className="mobile-menu-btn"
                aria-label="Abrir menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((v) => !v)}
            >
                <span className={`mm-bar ${mobileMenuOpen ? 'open' : ''}`} />
                <span className={`mm-bar ${mobileMenuOpen ? 'open' : ''}`} />
                <span className={`mm-bar ${mobileMenuOpen ? 'open' : ''}`} />
            </button>

            <nav className="menu-container" aria-label="Menu principal">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/fabricacao" onClick={() => setMobileMenuOpen(false)}>Fabricação</Link>
                <Link
                    to={{ pathname: '/', hash: '#clubs-group-9' }}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Clubes
                </Link>
                <Link to="/orcamento/" className="cta-link" onClick={() => setMobileMenuOpen(false)}>
                    Simulador
                </Link>
            </nav>

            {/* Menu de parceiros desativado a pedido: manter comentado */}
            {false && (
                <div className="search-and-partners">
                    <div className="partners-container">
                        <button
                            className="partners-btn"
                            type="button"
                            onClick={() => setPartnersOpen((v) => !v)}
                            aria-expanded={partnersOpen}
                            aria-controls="partners-list"
                            data-open={partnersOpen}
                        >
                            <span>Parceiros</span>
                            <svg className="chevron" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill="currentColor" d="M7 10l5 5 5-5z" />
                            </svg>
                        </button>
                        {partnersOpen && (
                            <div id="partners-list" className="partners-list" role="menu">
                                <Link to="/cbfs" className="partners-item">CBFS</Link>
                                <Link to="/lff" className="partners-item">LFF</Link>
                                <Link to="/adef" className="partners-item">ADEF</Link>
                                <Link to="/sub17" className="partners-lastitem">SUB 17</Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {mobileMenuOpen && (
                <>
                    <div
                        className="mobile-menu-backdrop"
                        aria-hidden="true"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                    <div className="mobile-menu-panel" role="dialog" aria-modal="true">
                        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <Link to="/fabricacao" onClick={() => setMobileMenuOpen(false)}>Fabricação</Link>
                        <Link to={{ pathname: '/', hash: '#clubs-group-9' }} onClick={() => setMobileMenuOpen(false)}>Clubes</Link>
                        <Link to="/orcamento/" className="cta-link" onClick={() => setMobileMenuOpen(false)}>Simulador</Link>
                    </div>
                </>
            )}
        </header>
    );
}