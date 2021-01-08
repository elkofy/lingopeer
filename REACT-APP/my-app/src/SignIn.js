import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import Axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import app from './firebase'
export default class Signin extends Component {

state = {
  title:Signin
}

handleSubmit= e => {

e.preventDefault();

const data ={
  username:this.nom,
  email :this.email,
  password:this.motdepasse,
  passwordCheck:this.conf,
  langue1:this.Langue1,
  lvl1:this.Niveau1,
  langue2:this.Langue2,
  lvl2:this.Niveau2,

};
Axios.post('register',data,{withCredentials: true}).then(

res => {
  console.log(res);
}
).catch(

  err=> {
    console.log(err);
  }
)
console.log(data);

}

render() {
  

  return    (<div>
    <div class="Title">
      <h2>Rejoins LingoPeer!</h2>
    </div>

    <div class="Connect">

      <fieldset>
      <div class="card ">
      <div class="card-header">
              <legend>Données Personnelles</legend>
              </div>
              <div class="FirstInputs">
                <form  class="form" onSubmit={this.handleSubmit} type="color"  >
                  <div className ="form-group">
                    <label for="Prenom">Prénom :</label>
                  <input   type="text" placeholder="Prenom"  className ="form-control"  onChange={e => this.prenom =e.target.value}></input><br></br> 
                  </div>
                  <div className ="form-group">
                    <label for="Nom">Nom :</label>
                  <input   type="text" placeholder="Nom"  className ="form-control"onChange={e => this.nom =e.target.value}></input><br></br> 
                  </div>
                  <div className ="form-group">
                    <label for="E-mail">Email :</label>
                  <input   type="email" placeholder="batou@gmail.com"  className ="form-control" onChange={e => this.email =e.target.value} ></input><br></br> 
                  </div>

                  <div className ="form-group">
                    <label for="Motdepasse">Mot de passe :</label>
                  <input   type="password" placeholder="Mot de passe"  className ="form-control" onChange={e => this.motdepasse =e.target.value}></input><br></br> 
                  </div>

                  <div className ="form-group">
                    <label for="Motdepasse">Confirmation :</label>
                  <input   type="Confirmation" placeholder="Confirmation"  className ="form-control" onChange={e => this.conf =e.target.value} ></input><br></br> 
                  </div>
                  
                
              
                
                <div className ="form-group" >
                  <select class="Langue" name="Langue1" onChange={e => this.Langue1 =e.target.value} >
                    <option selected disabled>Langue 1</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Italien">Italien</option>
                  </select>
                
                  <select class="Niveau" name="Niveau1" onChange={e => this.Niveau1 =e.target.value} >
                    <option selected disabled>Niveau 1</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Expert">Expert</option>
                    
                  </select>
                  
                  <select class="Langue" name="Langue2" onChange={e => this.Langue2 =e.target.value} >
                    <option selected disabled>Langue 2</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Italien">Italien</option>
                  </select>

                  <select class="Niveau" name="Niveau2" onChange={e => this.Niveau2 =e.target.value} >
                    <option selected disabled>Niveau 2</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Expert">Expert</option>
                    
                  </select>
                  

              </div>
              

                    

            
                  <button className="btn "  type="conn" name="conn" /*onClick={click}*/>Se Connecter</button>
         
              </form> 
              </div> 
              </div>

              
      </fieldset>
  </div>
  </div>)
  
}
}