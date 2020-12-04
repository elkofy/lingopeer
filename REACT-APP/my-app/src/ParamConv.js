import React from 'react';


import './ParamConv.css';


const ParamConv1 = () => {
    

    return(
        <div>
            <div class='Title'>
                <h1>Parametrage de la conversation</h1>
            </div>
                <div class='globalContainer'>
                    <div class='Langues'>
                    <h1>Choisit une langue !</h1>
                    <p>Langues : </p>
                        <select class="Langue_s" name="Langues">
                        <option selected disabled>Langues</option>
                        <option value="1">français</option>
                        <option value="2">Anglais</option>
                        <option value="3">Allemand</option>
                        <option value="4">Espagnol</option>
                        <option value="5">Italien</option>
                        </select>
                    </div>
                    <div class='Theme'>
                        <h1>Choisit un thème !</h1>
                        <p>Thèmes : </p>
                        <select class="Theme_s" name="Themes">
                        <option selected disabled>Themes</option>
                        <option value="1">Voyages</option>
                        <option value="2">Jeux videos</option>
                        <option value="3">Culture</option>
                        <option value="4">Cuisine</option>
                        <option value="5">Party</option>
                        </select>
                    </div>
                </div>
                
                <button class="lancerConv" type="submit">
                    Lancer la conversation
                </button>
                
            </div>
    );
}

export default ParamConv1;