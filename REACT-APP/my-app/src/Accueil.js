import React from 'react';



import { Link } from 'react-router-dom';

import './viewDebut.css';

import img1 from './images/imgl1.png';
import img2 from './images/imgl.jpg';
import img3 from './images/imgl2.jpg';



const Accueil = () => {
    return(
    <div>
        <h3>Bienvenue sur LingoPeer</h3>  
        <div id="slideshow">
            <ul id="sContent">
                <li><img src={img1} alt="langues 1" /></li>
                <li><img src={img2} alt="blleu 2" /></li>
                <li><img src={img3} alt="gros blo 3" /></li> 
            </ul>
        </div>
        <div id="connexion">
            <Link to="./signIn">
                <button class="seconnect" type="button">
                    Se connecter
                </button>   
            </Link>
            <button class="creercompte" type="button">
                Créer un compte
            </button>
        </div>
    </div>
    );
}

export default Accueil;

