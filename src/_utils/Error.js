import React from 'react';
import { Link } from 'react-router-dom';
import './errorStyle.scss'

const Error = () => {
    return (
        <div className='errorWrap'>
            <p className='bigNumber'>404</p>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home">Retourner sur la page d’accueil</Link>
           
        </div>
    );
};

export default Error;