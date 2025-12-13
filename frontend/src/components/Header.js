import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/img-logo.png";
import "../styles/header.css";

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [userSearch, setUserSearch] = useState("");
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const closeOnOutside = (e) => {
            const dropdown = document.querySelector(".partners-container");
            if (dropdown && !dropdown.contains(e.target)) {
                setPartnersOpen(false);
            }
        };
        document.addEventListener("click", closeOnOutside);
        return () => document.removeEventListener("click", closeOnOutside);
    }, []);

    function Search() {
        setShowSearch((prev) => !prev);
    }

    function searchKeydown(e) {
        if (e.key === "Enter" && userSearch.trim() !== "") {
            navigate(`/search?q=${encodeURIComponent(userSearch.trim())}`);
            setUserSearch("");
        }
    }

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
                <Link to="/orcamento" className="cta-link" onClick={() => setMobileMenuOpen(false)}>
                    Faça um orçamento
                </Link>
            </nav>

            <div className="search-and-partners">
                {/* Busca (mantida comentada) */}
                {showSearch && (
                    <input
                        id="searchInput"
                        type="text"
                        placeholder="Buscar..."
                        className="search-input"
                        value={userSearch}
                        onChange={(e) => setUserSearch(e.target.value)}
                        onKeyDown={searchKeydown}
                    />
                )}

                {showSearch ? (
                    <span
                        className="material-symbols-outlined close"
                        id="search-btn"
                        onClick={Search}
                    >
                        close
                    </span>
                ) : (
                    <span
                        className="material-symbols-outlined search"
                        id="search-btn"
                        onClick={Search}
                    >
                        search
                    </span>
                )}

                <div className="partners-container">
                    <button
                        className="partners-btn"
                        type="button"
                        onClick={() => setPartnersOpen((v) => !v)}
                        aria-expanded={partnersOpen}
                        aria-controls="partners-list"
                    >
                        Parceiros
                    </button>

                    {partnersOpen && (
                        <div id="partners-list" className="partners-list" role="menu">
                            <Link to="/cbfs" className="partners-item">
                                CBFS
                            </Link>
                            <Link to="/lff" className="partners-item">
                                LFF
                            </Link>
                            <Link to="/adef" className="partners-item">
                                ADEF
                            </Link>
                            <Link to="/sub17" className="partners-lastitem">
                                SUB 17
                            </Link>
                        </div>
                    )}
                </div>
            </div>

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
                        <Link to="/orcamento" className="cta-link" onClick={() => setMobileMenuOpen(false)}>Faça um orçamento</Link>
                    </div>
                </>
            )}
        </header>
    );
}