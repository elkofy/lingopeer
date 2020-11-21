import React from 'react';
import './viewDebut.css';

import img1 from './images/imgl1.png';
import img2 from './images/imgl.jpg';
import img3 from './images/imgl2.jpg';

const Accueil = () => {
    return(
    <div>
            <h3>With lingo peer communicate better in an other language than your peers</h3>  
        <div id="slideshow">
            <ul id="sContent">
                <li><img src={img1} alt="langues 1" /></li>
                <li><img src={img2} alt="blleu 2" /></li>
                <li><img src={img3} alt="gros blo 3" /></li> 
            </ul>
        </div>
        <div id="connexion">
        <button class="seconnect" type="button">
            Se connecter
        </button>
        </div>
        <div id="creercompte">
                <a href="view.suivanteparencorecréer">Céer un compte</a>
        </div>
    </div>
    );
}

export default Accueil;