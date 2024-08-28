import React from 'react'
import "./Header.css";

export const Header = () => {
  return (
    <div className="containerHeader">
        
        <div className="logotype">
            <h1>SustenCity</h1>
        </div>

        <div className="nav-links">
            <a href='www.google.com' target='_blank'>Home</a>
            <a href='www.google.com' target='_blank'>Dicas</a >
            <a href='www.google.com' target='_blank'>Sobre nos</a>
        </div>
    </div>
  )
}
