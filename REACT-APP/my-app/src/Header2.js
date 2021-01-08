import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import app from './firebase'

export default class Header2 extends Component {

state = {};
componentDidMount(){

const config = {
headers :{
  Authorization:'Bearer ' + localStorage.getItem('token')
}
};

Axios.get('user',config,{withCredentials: true}).then(
  res => {
this.setState({
  user:res.data
});
 },
  err => {
    console.log(err);
  }
)

}

render() {
  if (this.state.user) {
    return (
    <div class="Header">
    <h1>Lingo<span>Peer</span></h1>
    <nav>
        <ul>
          <Link to="/apresConn">
          <li>Home</li>
          </Link>
          <Link to="/Conn">
          <li>AboutUs</li>
          </Link>
          <Link to="/Conn">
          <li>Contact Us</li>
          </Link>
        </ul>
    </nav>
    <Link to="/Profile">
    <button id="utilisateurBTN"  /*onClick={( )}*/>{this.state.user.data}</button>

    </Link>
    
  
</div>)
  }


  return(
    <div class="Header">
          <h1>Lingo<span>Peer</span></h1>
          <nav>
              <ul>
                <Link to="/apresConn">
                <li>Home</li>
                </Link>
                <Link to="/Conn">
                <li>AboutUs</li>
                </Link>
                <Link to="/Conn">
                <li>Contact Us</li>
                </Link>
              </ul>
          </nav>
          <Link to="/Profile">
          <button id="utilisateurBTN" ></button>
          </Link>
        
    </div>

  )
}

}
 
