import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Rightbar from './Rightbar';
import Burger from './Burger';
function Nav() {
    return (
        <>
            <div className="header-title">
                <a href="#">
                    <h3>Cozy House</h3>
                    <span className="header-subtitle">Shelter for pets in Boston</span>
                </a>
            </div>

            <div className="cb"></div>
            <Burger />

        </>
    );
}

export default Nav;
