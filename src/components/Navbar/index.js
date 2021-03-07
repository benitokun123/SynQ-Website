import React from 'react';
import './index.scss'
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <header className="Navbar">
            <div className="Title">NUS DJ Collective</div>
            <div className="Menu">
                <NavLink exact to="/" className="Link">About</NavLink>
                <NavLink exact to="/SignUp" className="Link">Sign Up</NavLink>
                <NavLink exact to="/FAQ" className="Link">FAQ</NavLink>
            </div>
        </header>
    )
}

export default Navbar