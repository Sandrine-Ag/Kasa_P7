import React from "react";
import { Link } from "react-router-dom";
import logoNavbar from "../assets/logo.svg";
import "../styles/navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-img" src= {logoNavbar} alt ="logo" /> 
            </div>
            <nav className="linkt">
                <Link to="/" className="linkts">Accueil</Link>
                <Link to="/apropos" className="linkta">A propos</Link>
            </nav>
        </div>
    )
}

export default Navbar ;