import React from 'react';
import './Conn.css';

const Conn = () => {
    return(
    <div>
        <div class="Title">
            <h2>Connecte toi à LingoPeer!</h2>
        </div>
        <div class="Connect">
            <fieldset>
                <legend>Se Connecter</legend>
                    <form>
                        <div class="FirstInputs">
                        <div class="selects">
                        <label for="Email">Email :</label>
                        <input placeholder='Email' /><br />
                        <label for="MDP">Mots De Passe :</label>
                        <input type="password" placeholder='Mot de passe'/><br/>
                        </div>
                        <button type="conn" name="conn"> Se Connecter</button>
                        </div>
                    </form>
            </fieldset>
            <fieldset>
                <legend>Continuer sans se Connecter</legend>
                <div class="SecondInputs">
                    <form>
                        <label for="Nom">Nom :</label>
                        <input placeholder='Nom'/><br/>
                    </form>
                    <form>
                    <div class="selects">
                        <select class="Langue" name="Langue1">
                            <option selected disabled>Langue 1</option>
                            <option value="1">français</option>
                            <option value="2">Anglais</option>
                            <option value="3">Allemand</option>
                            <option value="4">Espagnol</option>
                            <option value="5">Italien</option>
                        </select>
                        <select class="Langue" name="Langue2">
                            <option selected disabled>Langue 2</option>
                            <option value="1">français</option>
                            <option value="2">Anglais</option>
                            <option value="3">Allemand</option>
                            <option value="4">Espagnol</option>
                            <option value="5">Italien</option>
                        </select>
                        </div>
                            <button type="conn" name="conn"> Se Connecter</button>
                        </form>
                        </div>
            </fieldset>
            </div>
      </div>

    );
}

export default Conn;