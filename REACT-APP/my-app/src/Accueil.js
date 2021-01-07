import React from 'react';

import earth from './images/planet-earth-svgrepo-com.svg';

import { Link } from 'react-router-dom';

import './viewDebut.css';




const Accueil = () => {
    return(
    <div class="maxS">
        
    <div class="principal">

        <div class="gauche" >
            <img src={earth} className="App-logo" alt="svgEarth" />
        </div>       
        
        <div class="droite" >
        <div class="blabla">
        <h1>Avec LingoPeer devenez le meilleur en langues</h1>
        <p>Totalement gratuit et facile d'utilisation, conversez avec des gens du monde entier, démarrez maintenant.
        </p>
        </div>
        <div class="connexion">
            <div>
        <Link to="./Conn">
        <button class="seconnect" type="button">
            Se connecter
        </button> 
        </Link>
            </div> 
            <div>
        <Link to="./SignIn">

            <button class="creercompte" type="button">
                Créer un compte
            </button>
        </Link>
        </div>
        </div>

        </div> 
    </div> 

        
    </div>
    );
}

export default Accueil;

