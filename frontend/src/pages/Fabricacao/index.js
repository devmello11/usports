import React from 'react';
import UnderConstruction from '../../components/UnderConstruction';
import '../../styles/fabricacao.css';

import imgTshirt from '../../assets/img-tshirt.png';
import imgMan from '../../assets/img-man.png';
import imgWoman from '../../assets/img-woman.png';

export default function Fabricacao(){
    return(
        <section className="fabricacao-section">
            <UnderConstruction title="Fabricação" />
        </section>
    );
}