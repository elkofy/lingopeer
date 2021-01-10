import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header2 extends Component {


render() {
  
  


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
 
