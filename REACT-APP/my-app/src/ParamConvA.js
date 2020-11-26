import React from 'react';
import './ParamConv.css';


const ParamConv2A = () => {
    return(
        <div>
            <div class='Title'>
                <h1>Conversation avec un ami</h1>
            </div>
                <div class='globalContainer'>
                    <div class='Langues'>
                    <h2>Choisit une langue !</h2>
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
                        <h2>Choisit un thème !</h2>
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
                    <div class='Amis'>
                        <h2>Invite ton ami !</h2>
                        <p>Amis : </p>
                        <select class="Amis_s" name="Amis">
                        <option selected disabled>Amis</option>
                        <option value="1">ami1</option>
                        <option value="2">ami2</option>
                        <option value="3">ami3</option>
                        <option value="4">ami4</option>
                        <option value="5">ami5</option>
                        </select>
                    </div>
                </div>
                <button class="lancerConv" type="button">
                    Lancer la conversation
                </button>
            </div>
    );
}

export default ParamConv2A;