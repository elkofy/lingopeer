import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Axios from 'axios';


const SignIn = () => {
  

  const [registerUsername,setRegisterUsername]=useState("");
const [registerPassword,setRegisterPassword]=useState("");
const [registerL1,setregisterL1]=useState("");
const [registerLVL1,setregisterLVL1]=useState("");
const [registerL2,setregisterL2]=useState("");
const [registerLVL2,setregisterLVL2]=useState("");
const [data, setData] = useState(null);

const register = ()=>{Axios({

  method: "POST",
data: {
  username: registerUsername,
  password: registerPassword,
  langue1: registerL1,
  lvl1: registerLVL1,
  langue2: registerL2,
  lvl2: registerLVL2,
},withCredentials:true,
url:"http://localhost:4000/register",
}).then((res)=> console.log(res));

};

const getUser = () => {
 
  Axios({
    method: "GET",
    withCredentials: true,
    url: "http://localhost:4000/user",
  }).then((res) => {
    setData(res.data);
    console.log(res.data);
  });
};

const click =() => {
  getUser();
  register();

}

    return(
    <div>
      <div class="Title">
        <h2>Rejoins LingoPeer!</h2>
      </div>
      <div class="Connect">
        <fieldset>
            <legend>Données Personnelles</legend>
            <div class="FirstInputs">
            <form >
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
              <select class="Langue" name="Langue1" onChange={e => setregisterL1(e.target.value)} >
                <option selected disabled>Langue 1</option>
                <option value="Français">Français</option>
                <option value="Anglais">Anglais</option>
                <option value="Allemand">Allemand</option>
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
              </select>
             
              <select class="Niveau" name="Niveau1" onChange={e => setregisterLVL1(e.target.value)} >
                <option selected disabled>Niveau 1</option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Expert">Expert</option>
                
              </select>
              
              <select class="Langue" name="Langue2" onChange={e => setregisterL2(e.target.value)}>
                <option selected disabled>Langue 2</option>
                <option value="Français">Français</option>
                <option value="Anglais">Anglais</option>
                <option value="Allemand">Allemand</option>
                <option value="Espagnol">Espagnol</option>
                <option value="Italien">Italien</option>
              </select>

              <select class="Niveau" name="Niveau2" onChange={e => setregisterLVL2(e.target.value)} >
                <option selected disabled>Niveau 2</option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Expert">Expert</option>
                
              </select>
            </div>
            <Link to="/apresConn">
                <button class="ButtonCenter"  type="conn" name="conn" onClick={click}>Se Connecter</button>
            </Link>
            <div>
      </div>
        </fieldset>
    </div>
    </div>
    );
}

export default SignIn;