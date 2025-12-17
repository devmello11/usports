import React from 'react';
import '../../styles/fabricacao.css';

import imgTshirt from '../../assets/img-tshirt.png';
import imgMan from '../../assets/img-man.png';
import imgWoman from '../../assets/img-woman.png';

export default function Fabricacao(){
    return(
        <section className="fabricacao-section">
            <header className="fabricacao-header">
                <h1>Fabricação</h1>
                <p>Conheça alguns de nossos modelos</p>
            </header>

            <div className="fabricacao-grid">
                <div className="fabricacao-card">
                    <img src={imgMan} alt="Modelo masculino" />
                    <span className="fabricacao-caption">Linha Masculina</span>
                </div>
                <div className="fabricacao-card">
                    <img src={imgTshirt} alt="Camiseta técnica" />
                    <span className="fabricacao-caption">Camiseta Técnica</span>
                </div>
                <div className="fabricacao-card">
                    <img src={imgWoman} alt="Modelo feminino" />
                    <span className="fabricacao-caption">Linha Feminina</span>
                </div>
            </div>
        </section>
    );
}