import React from "react";
import { NavLink } from "react-router-dom";

import './Links.css';

const Links = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/' exact>ALL USERS</NavLink>
            </li>
            <li>
                <NavLink to='/u1/ratings'>MY RATINGS</NavLink>
            </li>
            <li>
                <NavLink to='/ratings/new'>RATE GAME</NavLink>
            </li>
            <li>
                <NavLink to='/auth'>LOGIN/SIGNUP</NavLink>
            </li>
        </ul>
    );
};

export default Links;