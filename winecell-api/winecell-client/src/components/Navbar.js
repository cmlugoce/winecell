import React from 'react';
import { Link } from "react-router-dom";
import './components.css';
const Navbar = () => {
    return (
        <nav className="navbar is-fixed-top" id="nav">
        <div className="nav-title">WINECELL</div>

      <div className="container">
        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            
            <Link className="navbar-item" to="/">
              home
            </Link>
            <Link className="navbar-item" to="/wines">
              all wines
            </Link>
            <Link className="navbar-item" to="/wine/new">
              add wine
            </Link>
            <Link className="navbar-item" to="/winebasics">
              wine 101
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
    )
};

export default Navbar;