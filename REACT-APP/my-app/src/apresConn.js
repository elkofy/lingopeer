import React from 'react';
import './apresConn.css';

const Apresco = () => {
    return(
        <div className="globaldiv">
            <div id="b1">
                <button class="trouverConv" type="button">
                    X
                </button>
                <h1>Trouver une conversation</h1>
                <p>Lancer une roulette pour trouver un utilisateur aléatoire avec qui avoir une conversation dans la langue de votre choix</p>
            </div>
            <div id="b2">
                <button class="creerConv" type="button">
                    X
                </button>
                <h1>Creer une conversation</h1>
                <p>Creer une conversation avec un amis a vous avec qui avoir une conversation dans la langue de votre choix</p>
            </div>
            <div id="b3">
                <button class="filAct" type="button">
                    X
                </button>
                <h1>Fil d'actualité</h1>
                <p>Pas encore implementé</p>
            </div>
        </div>
    );
}

export default Apresco;