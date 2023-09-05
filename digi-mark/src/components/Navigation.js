import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./hero-banner.png";

function Navigation() {
    return (
        <section className="navContainer">
            <img className="img" alt="logo" height={68} width={70} src={logo}></img>
            <h3 className="heading"><span className="highlight">Digi</span>-Mark</h3>
            <nav className="nav">
            <NavLink className="title" to={'/'}>Home</NavLink> {' '}
            <NavLink className="title" to={'/AboutUs'}>AboutUs</NavLink> {' '}
            <NavLink className="title" to={'/Service'}>Service</NavLink> {' '}
            <NavLink className="title" to={'/Portfolio'}>Portfolio</NavLink> {' '}
            <NavLink className="title" to={'/contact'}>Contact</NavLink>
            </nav>
        </section>
    )
}

export default Navigation;