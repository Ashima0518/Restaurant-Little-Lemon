import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
