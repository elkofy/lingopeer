import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';




const Header = () => {
    
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
                  <Link to="/Conn">
                  <li>Contact Us</li>
                  </Link>
                  
                </ul>
            </nav>
            <button class="btn" id="darkTrigger">Mode sombre</button>
      </div>

    );
}
export default Header;