import React from 'react';
import { Link } from 'react-router-dom';
import UserService from "../services/user.service";

import './ParamConv.css';


export default class  ParamConv1 extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          content: ""
        };
      }
    
      componentDidMount() {
        UserService.getUserBoard().then(
          response => {
            this.setState({
              content: response.data
            });
          },
          error => {
            this.setState({
              content:
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString()
            });
          }
        );
      }
    render (){
        if (this.state.content=="User Content."){
    return(
        <div>
            <div class='HautTitle'>
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
                <Link to="./Room">
                <button class="lancerConv" type="submit">
                    Lancer la conversation
                </button>
                </Link>
            </div>
    );
}
return (
    <div>
      <header className="jumbotron">
        <h3>Connectez-vous pour acceder à ce contenu !</h3>
      </header>
      
    </div>
    
  )
}
}

