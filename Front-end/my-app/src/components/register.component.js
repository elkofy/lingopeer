import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
const vlangue = value => {
  if (value==="langue") {
    return (
      <div className="alert alert-danger" role="alert">
        selectionner une langue 
      </div>
    );
  }
};
const vlvl = value => {
  if (value==="lvl") {
    return (
      <div className="alert alert-danger" role="alert">
        selectionner un niveau 
      </div>
    );
  }
};
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLangue1 = this.onChangeLangue1.bind(this);
    this.onChangeLvl1 = this.onChangeLvl1.bind(this);
    this.onChangeLangue2 = this.onChangeLangue2.bind(this);
    this.onChangeLvl2 = this.onChangeLvl2.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      langue1:"",
      lvl1:"",
      langue2:"",
      lvl2:"",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeLangue1(e) {
    this.setState({
      langue1: e.target.value
    });
  }

  onChangeLvl1(e) {
    this.setState({
      lvl1: e.target.value
    });
  }

  onChangeLangue2(e) {
    this.setState({
      langue2: e.target.value
    });
  }

  onChangeLvl2(e) {
    this.setState({
      lvl2: e.target.value
    });
  }
  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.langue1,
        this.state.lvl1,
        this.state.langue2,
        this.state.lvl2,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <select 
                  
                  class="Langue" 
                 
                  name="langue1" 
                
                  onChange={this.onChangeLangue1} 
                  validations={[required, vlangue]}>
                    <option  selected disabled>Langue 1</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Italien">Italien</option>
                  </select>
                
                  <select class="Niveau" 
                 
                  name="lvl1" 
                 

                  onChange={this.onChangeLvl1} 
                  validations={[required, vlvl]} >
                    <option selected disabled>Niveau 1</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Expert">Expert</option>
                    
                  </select>
                  
                  <select class="Langue" 
             

                 
                  name="langue2"
                  onChange={this.onChangeLangue2} 
                  validations={[required, vlangue]} >
                    <option selected disabled>Langue 2</option>
                    <option value="Français">Français</option>
                    <option value="Anglais">Anglais</option>
                    <option value="Allemand">Allemand</option>
                    <option value="Espagnol">Espagnol</option>
                    <option value="Italien">Italien</option>
                  </select>

                  <select 
                               
                  class="Niveau"
                  
                   name="lvl2" 
                   onChange={this.onChangeLvl2} 
                  validations={[required, vlangue]} >
                    <option selected disabled>Niveau 2</option>
                    <option value="Débutant">Débutant</option>
                    <option value="Intermédiaire">Intermédiaire</option>
                    <option value="Expert">Expert</option>
                    
                  </select>
                  <div className="form-group">
                    <p>En vous connectant votre email,nom d'utilsateur et vos préférence linguistiques
                       seront sauvegardé</p>
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                  <p>Cliquez sur login pour vous connecter !</p>
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}