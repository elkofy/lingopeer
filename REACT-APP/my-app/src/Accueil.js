import React from 'react';



import { Link } from 'react-router-dom';

import './viewDebut.css';





const Accueil = () => {
    return(
    <div>
        
        <h1>Bienvenue sur LingoPeer</h1>         
        
        <div id="connexion">
        <Link to="./Conn">
        <button class="seconnect" type="button">
            Se connecter
        </button>   
        </Link>
        <Link to="./SignIn">

            <button class="creercompte" type="button">
                Créer un compte
            </button>
        </Link>
        </div>

        
    </div>
    );
}

export default Accueil;

