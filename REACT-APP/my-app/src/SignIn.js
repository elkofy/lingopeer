import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return(
    <div>
      <div class="Title">
        <h2>Rejoins LingoPeer!</h2>
      </div>
      <div class="Connect">
        <fieldset>
            <legend>Se Connecter</legend>
            <label for="Prenom">Prénom :</label>
            <input type="text" id="Prenom" name="Prenom"></input><br></br>
            <label for="Nom">Nom :</label>
            <input type="text" id="Nom" name="Nom"></input><br></br>
            <label for="Email">Adresse Email :</label>
            <input type="text" id="Email" name="Email"></input><br></br>
            <label for="MDP">Mots De Passe :</label>
            <input type="text" id="mdp" name="mdp"></input><br></br>
            <label for="MDPverif">Verification Mots De Passe :</label>
            <input type="text" id="mdpverif" name="mdpverif"></input><br></br>
            <div class="selects">
              <select class="Langue1" name="Langue1">
                <option selected disabled>Langue 1</option>
                <option value="1">français</option>
                <option value="2">Anglais</option>
                <option value="3">Allemand</option>
                <option value="4">Espagnol</option>
                <option value="5">Italien</option>
              </select>
              <select class="Langue2" name="Langue2">
                <option selected disabled>Langue 2</option>
                <option value="1">français</option>
                <option value="2">Anglais</option>
                <option value="3">Allemand</option>
                <option value="4">Espagnol</option>
                <option value="5">Italien</option>
              </select>
            </div>
            <button type="conn" name="conn">Se Connecter</button>
        </fieldset>
    </div>
    </div>
    );
}

export default SignIn;