import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoLingoPeer from './images/lingoPeerLogo.png';


const Header = () => {
  return(
    <div class="header">
    <div class="inner_header">
      <div class="logo_container">
        <img src={logoLingoPeer} alt=""></img>
        <h1>Lingo<span>Peer</span></h1>
      </div>
      <Link to="/">
        <button>Return to home</button>  
      </Link>
    </div>
    </div>
    );
}

export default Header;