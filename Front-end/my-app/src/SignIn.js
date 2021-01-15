import React from "react";
import './SignIn.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

 export default class SignIn extends React.Component {



  render ()  {
 
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
                <form  class="form" type="color"  >
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
                  <input   type="email" placeholder="batou@gmail.com"  name="email" onChange={e => this.email =e.target.value} ></input><br></br> 
                  </div>

                  <div className ="form-group">
                    <label for="Motdepasse">Mot de passe :</label>
                  <input   type="password" placeholder="Mot de passe"  name="password" onChange={e => this.motdepasse =e.target.value}></input><br></br> 
                  </div>

                  <div className ="form-group">
                    <label for="Motdepasse">Confirmation :</label>
                  <input   type="Confirmation" placeholder="Confirmation"  className ="form-control" onChange={e => this.conf =e.target.value} ></input><br></br> 
                  </div>
                  
                
              
                
                <div className ="form-group" >
                  <select class="Langue" name="Langue1" onChange={e => this.Langue1 =e.target.value} >
                    <option value ="langue" selected disabled>Langue 1</option>
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
              

                    

            
                  <button className="btn "  type="submit" name="conn" /*onClick={click}*/>Se Connecter</button>
         
              </form> 
              </div> 
              </div>

              
      </fieldset>
  </div>
  </div>)
  
}
}
