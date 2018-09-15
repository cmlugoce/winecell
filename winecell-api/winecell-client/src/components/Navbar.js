import React from 'react';
import { Link } from "react-router-dom";
import './components.css';
const Navbar = () => {
    return (
        <nav class="navbar is-fixed-top" id="nav">
        <div class="nav-title">WINECELL</div>

      <div class="container">
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            
            <Link class="navbar-item" to="/">
              home
            </Link>
            <Link class="navbar-item" to="/about">
              about
            </Link>
            <Link class="navbar-item" to="/new">
              add wine
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
    )
};

export default Navbar;