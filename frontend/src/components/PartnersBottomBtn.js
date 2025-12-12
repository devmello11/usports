import { Link } from 'react-router-dom';

import logoLFF from '../assets/LFF.png';
import logoCBFS from '../assets/CBFS_logo-07.png';
import logoADEF from '../assets/ADEF.png';
import logoFutsal from '../assets/SUB_17.png';

import '../styles/partnersBottomBtn.css'

export default function PartnersBottomBtn(){
    return(
        <section className="partners-bottom-desktop">
            <div className="partners-bottom-container">
                <Link to="/lff"><img className='logoPartnersImages' id="logo-image-lff"   src={logoLFF}   alt="LFF"   /></Link>
                <Link to="/cbfs"><img className='logoPartnersImages' id="logo-image-cbfs"  src={logoCBFS}  alt="CBFS"  /></Link>
                <Link to="/adef"><img className='logoPartnersImages' id="logo-image-adef"  src={logoADEF}  alt="ADEF"  /></Link>
                <Link to="/sub17"><img className='logoPartnersImages' id="logo-image-futsal"src={logoFutsal}alt="Futsal"/></Link>
            </div>
        </section>
    )
}