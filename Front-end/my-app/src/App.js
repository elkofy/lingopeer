import './App.css';
import React, { Component } from "react";

import Chatrooms from './components/chatroom.component';

//import Profile from './Profile';

import Room from './components/Room.component';
//import Friends from './friends';
import ParamConv1 from './components/ParamConv.component';
import ParamConv2A from './components/ParamConvA.component';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import Aboutus from "./components/Aboutus.component";

import Chat from "./components/Chat/Chat";


export default  class App extends Component  {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        
        <nav className="navbar navbar-expand navbar-custom navbar-dark  navbar-default navbar-custom">
          <Link to={"/"} className="navbar-brand">
            LingoPeer
          </Link>
          <div className="navbar-nav mr">
            <li className="nav-item">
              <Link to={"/aboutus"} className="nav-link">
                About us
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Conversation
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="contain">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/aboutus" component={Aboutus}/>
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/ParamConv" component={ParamConv1}/>
          <Route path="/ParamConvA" component={ParamConv2A}/>
          <Route path="/Chatrooms" component={Chatrooms}/>
          <Route path="/Room" component={Room}/>
          <Route path="/Chat" component={Chat}/>
          </Switch>
        </div>
      </div>
    );
  }
  /*return (
    <div>
    <Router>
        <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/apresConn" component={ApresConn}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/Conn" component={Connect}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Friends" component={Friends}/>
          <Route path="/Room" component={Room}/>
          <Route path="/ParamConv" component={ParamConv1}/>
          <Route path="/ParamConvA" component={ParamConv2A}/>
          <Route path="/Chatrooms" component={Chatrooms}/>
        </Switch>
    </Router>
      
    </div>

  );*/
}


