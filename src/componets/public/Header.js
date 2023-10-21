import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'


const Header = () => {
    return (
        //<div>

            
        <header className='mainHeader'>
            
            <nav className='mainNavegation'>
               <img src="img/LOGOKSA.png"/>
                <ul>
                    <li><Link to="/home">Accueil</Link></li>
                    <li><Link to="/apropos">A Propos</Link></li>
                </ul>
            </nav>
        </header>

        // </div>
    );
};

export default Header;