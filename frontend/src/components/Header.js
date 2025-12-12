import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from '../assets/img-logo.png';

import { ReactComponent as ArrowDown } from '../assets/arrow_drop_down.svg';

import '../styles/header.css';

export default function Header(){
    
    const [showSearch, setShowSearch] = useState(false);
    const [userSearch, setUserSearch] = useState('');
    const [showPartners, setShowPartners] = useState(false);

    const navigate = useNavigate();

    function Search(){
        setShowSearch(prev => !prev);
    }

    function searchKeydown(e){
        if (e.key === 'Enter' && userSearch.trim() !== ''){
            navigate(`/search?q=${encodeURIComponent(userSearch.trim())}`);
            setUserSearch('');
        }
    }

    function showPartnersBtn(){
        setShowPartners(prev => !prev);
    }

    return(
            <header className="header">
                <div className="logo-container">
                    <Link to='/'><img src={logo} className="logo" /></Link>
                </div>

                <div className="menu-container">
                    <Link to='/tecidos'>Tecidos<ArrowDown id='arrow-down-icon'/></Link>
                    <Link to='/fabricacao'>Fabricação<ArrowDown id='arrow-down-icon'/></Link>
                    <Link to='/design'>Design<ArrowDown id='arrow-down-icon'/></Link>
                    <Link to='/orcamento' className='cta-link'>Faça um orçamento</Link>
                </div>

                <div className='search-and-partners'>

                {/* BOTÃO DE PESQUISA COMENTADO

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
                        <span className="material-symbols-outlined close" id="search-btn" onClick={Search}>close</span>
                    ) : (
                        <span className="material-symbols-outlined search" id="search-btn" onClick={Search}>search</span>
                    )}
                    
                    */}

                    <div className='partners-container'>
                        <div className='partners-btn' onClick={showPartnersBtn}>
                            <span className='partners'>Parceiros</span>
                            <ArrowDown id='partnersArrow'/>
                        </div>

                        {showPartners && (
                                <div className="partners-list">
                                    <Link to="/adef" className="partners-item">ADEF</Link>
                                    <Link to="/cbfs" className="partners-item">CBFS</Link>
                                    <Link to="/sub17" className="partners-item">SUB 17</Link>
                                    <Link to="/lff" className="partners-lastitem">LFF</Link>
                                </div>
                            )}
                    </div>

                </div>

            </header>
    );
}