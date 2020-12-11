import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './App.css';


const Header = () => {
    const navStyle = {
        color: 'white'
    }
  return(
      <div class="Header">
            <h1>Lingo<span>Peer</span></h1>
            <nav>
                <ul>
                  <Link to="/">
                  <li>Home</li>
                  </Link>
                  <Link to="/Conn">
                  <li>AboutUs</li>
                  </Link>
                  <Link to="/Profile">
                  <li>CréeCompte</li>
                  </Link>
                </ul>
            </nav>
            <button>Contact Us</button>
      </div>

    );
}
export default Header;