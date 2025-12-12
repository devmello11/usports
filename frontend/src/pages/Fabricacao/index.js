import React from 'react';
import '../../styles/fabricacao.css';

import imgTshirt from '../../assets/img-tshirt.png';
import imgMan from '../../assets/img-man.png';
import imgWoman from '../../assets/img-woman.png';

export default function Fabricacao(){
    return(
        <section className="fabricacao-section">
            <div className="fabricacao-header">
                
                <p>
                    Produzimos peças com alta qualidade, controle de materiais e acabamento profissional.
                    Veja alguns exemplos abaixo:
                </p>
            </div>

            <div className="fabricacao-grid">
                <div className="fabricacao-card">
                    <img src={imgTshirt} alt="Camiseta" />
                    <span className="fabricacao-caption">Camisetas</span>
                </div>
                <div className="fabricacao-card">
                    <img src={imgMan} alt="Modelo masculino" />
                    <span className="fabricacao-caption">Modelagem Masculina</span>
                </div>
                <div className="fabricacao-card">
                    <img src={imgWoman} alt="Modelo feminino" />
                    <span className="fabricacao-caption">Modelagem Feminina</span>
                </div>
            </div>
        </section>
    )
}