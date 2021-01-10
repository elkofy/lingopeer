import React from 'react';
import './apresConn.css';
import { Link } from 'react-router-dom';

const Apresco = () => {
    return(
        <div>
        <div class="globaldiv">
            
            <div id="b1">
                <h1>Trouver une conversation</h1>
                <p>Lancer une roulette pour trouver un utilisateur avec qui avoir une conversation dans la langue de votre choix</p>
            <Link to="./ParamConv">
                <button class="big-button" type="button">
                    Commencer
                </button>
            </Link>
            </div>
            <div id="b2">
                <h1>Creer une conversation</h1>
                <p>Creer une conversation avec un amis a vous avec qui avoir une conversation dans la langue de votre choix</p>
                <Link to="./ParamConvA">
                <button class="big-button" type="button">
                    Commencer
                </button>
                </Link>
            </div>
            
        </div>
        </div>
    );
}

export default Apresco;