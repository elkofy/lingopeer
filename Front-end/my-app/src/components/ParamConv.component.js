import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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
        <div className="card card-container">
        <h5>Parametrage de la conversation: </h5>
            <div className="form-group">
              <label htmlFor="username">Choisit une langue !  </label>
              <p>
              <select class="Langue_s" name="Langues">
                        <option selected disabled>Langues</option>
                        <option value="1">français</option>
                        <option value="2">Anglais</option>
                        <option value="3">Allemand</option>
                        <option value="4">Espagnol</option>
                        <option value="5">Italien</option>
                </select>
              </p>

            </div>
            <div className="form-group">
              <label htmlFor="password">Choisit un thème ! </label>
              <p>
              <select class="Theme_s" name="Themes">
                        <option selected disabled>Themes</option>
                        <option value="1">Voyages</option>
                        <option value="2">Jeux videos</option>
                        <option value="3">Culture</option>
                        <option value="4">Cuisine</option>
                        <option value="5">Party</option>
                </select>
              </p>
              
            </div>

            <Link to="./Room">
                <button className="btn btn-primary btn-block" type="submit">
                <span>Lancer la conversation</span>
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

