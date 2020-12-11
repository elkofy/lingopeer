import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Axios from 'axios';

const SignIn = () => {
  const [registerUsername,setRegisterUsername]=useState("");
const [registerPassword,setRegisterPassword]=useState("");

const register = ()=>{Axios({

  method: "POST",
data: {
  username:registerUsername,
  password: registerPassword,
},withCredentials:true,
url:"http://localhost:4000/register",
}).then((res)=> console.log(res));

};


    return(
    <div>
      <div class="Title">
        <h2>Rejoins LingoPeer!</h2>
      </div>
      <div class="Connect">
        <fieldset>
            <legend>Données Personnelles</legend>
            <div class="FirstInputs">
            <form>
              <label for="Prenom">Prénom :</label>
              <input placeholder='Prenom' onChange={e => setRegisterUsername(e.target.value)}></input><br></br>
              <label for="Nom">Nom :</label>
              <input placeholder='nom'></input><br></br>
              <label for="Email">Adresse Email :</label>
              <input placeholder='Email' ></input><br></br>
              <label for="MDP">Mots De Passe :</label>
              <input type="password" placeholder='Mot de passe' onChange={e => setRegisterPassword(e.target.value)}></input><br></br>
              <label for="MDPverif">Verification Mots De Passe :</label>
              <input type="password" placeholder='Verification mdp'></input><br></br>
            </form>   
            </div>   
            <div class="selects">
              <select class="Langue" name="Langue1">
                <option selected disabled>Langue 1</option>
                <option value="1">français</option>
                <option value="2">Anglais</option>
                <option value="3">Allemand</option>
                <option value="4">Espagnol</option>
                <option value="5">Italien</option>
              </select>
             
              <select class="Niveau" name="Niveau1">
                <option selected disabled>Niveau 1</option>
                <option value="1">Débutant</option>
                <option value="2">Intermédiaire</option>
                <option value="3">Expert</option>
                
              </select>
              
              <select class="Langue" name="Langue2">
                <option selected disabled>Langue 2</option>
                <option value="1">français</option>
                <option value="2">Anglais</option>
                <option value="3">Allemand</option>
                <option value="4">Espagnol</option>
                <option value="5">Italien</option>
              </select>

              <select class="Niveau" name="Niveau2">
                <option selected disabled>Niveau 2</option>
                <option value="1">Débutant</option>
                <option value="2">Intermédiaire</option>
                <option value="3">Expert</option>
                
              </select>
            </div>
            <Link to="/apresConn">
                <button class="ButtonCenter"  type="conn" name="conn" onClick={register}>Se Connecter</button>
            </Link>
        </fieldset>
    </div>
    </div>
    );
}

export default SignIn;