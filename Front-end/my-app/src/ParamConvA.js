import React, { Component } from 'react';
import './ParamConv.css';
import UserService from "./services/user.service";

import { Link } from 'react-router-dom';

export default class ParamConv2A extends Component {
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

    
    render () {
    return(
      <div className="card card-container">
      <h5>Parametrage de la conversation: </h5>
          <div className="form-group">
            <label>Choisit une langue !  </label>
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
            <label>Choisit un thème ! </label>
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
          <div className="form-group">
            <label> Invite ton ami ! </label>
            <p>
            <select class="Amis_s" name="Amis">
                        <option selected disabled>Amis</option>
                        <option value="1">ami1</option>
                        <option value="2">ami2</option>
                        <option value="3">ami3</option>
                        <option value="4">ami4</option>
                        <option value="5">ami5</option>
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
}}
