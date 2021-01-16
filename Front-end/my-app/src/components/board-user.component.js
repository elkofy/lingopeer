import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserService from "../services/user.service";
import './apresConn.css';

export default class BoardUser extends Component {
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

  render() {
    if (this.state.content=="User Content."){
    return (
      <div>
           <div class="globaldiv">
            
            <div id="b1">
                <h1>Trouver une conversation</h1>
                <p>Lancer une roulette pour trouver un utilisateur avec qui avoir une conversation dans la langue de votre choix</p>
            <Link to="./ParamConv">
                <button class="big-button" type="button">
                    Commencer
                </button>
            </Link>
            </div>
            <div id="b2">
                <h1>Creer une conversation</h1>
                <p>Creer une conversation avec un amis a vous avec qui avoir une conversation dans la langue de votre choix</p>
                <Link to="./ParamConvA">
                <button class="big-button" type="button">
                    Commencer
                </button>
                </Link>
            </div>
            
        </div>
        
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