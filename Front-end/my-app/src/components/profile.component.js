import React, { Component } from "react";
import AuthService from "../services/auth.service";
import './Prof.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="fullPage">
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>Profil de {currentUser.username}</strong> 
          </h3>
        </header>
        
        <p>
          <strong>Id:</strong>{" "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <p STYLE="padding:0 0 0 20px;">
          <strong>Première Langue:</strong>{" "}{currentUser.langue1} <strong>Niveau:</strong> {currentUser.lvl1}
        </p>
        <p STYLE="padding:0 0 0 20px;">
          <strong>Seconde Langue:</strong>{" "}
          {currentUser.langue2}<strong>Niveau:</strong> {currentUser.lvl2}
        </p>
        
        
        <strong>Rôle:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
      </div>
      </div>
    );
  }
}