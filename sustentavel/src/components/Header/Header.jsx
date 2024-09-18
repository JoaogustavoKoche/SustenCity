import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";

export const Header = () => {
  return (
    <div className="containerHeader">
        
        <div className="logotype">
            <h1>SustenCity</h1>
        </div>

        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/tips">Dicas</Link>
          <Link to="/about">Sobre Nós</Link>
        </div>
    </div>
  )
}

export default Header;