import React, { Component } from "react";
import earth from '../images/planet-earth-svgrepo-com.svg';
import './home.css';

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div class="maxS">
        
      <div class="principal">

        <div class="gauche" >
            <img src={earth} className="App-logo" alt="svgEarth" />
        </div>       
        
        <div class="droite" >
          <div class="blabla">
            <h1>Avec LingoPeer devenez le meilleur en langues</h1>
            <p>Totalement gratuit et facile d'utilisation, conversez avec des gens du monde entier, 
            démarrez maintenant.
            </p>
          </div>
        </div> 

      </div> 
        
    </div>
    );
  }
}