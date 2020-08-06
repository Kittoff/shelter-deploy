import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
function Nav() {
    return (
        <>
            <div className="header-title">
                <a href="/">
                    <h3 className="header-title-nav-2">Cozy House</h3>
                    <span className="header-subtitle-2">Shelter for pets in Boston</span>
                </a>
            </div>

            <nav className="menu menu-2">
                <HashLink smooth to="/#abouts" className="menu-item menu-item-2 under">About the shelter</HashLink>
                <HashLink smooth to="/#pets" className="menu-item menu-item-2 is-active under">Our pets</HashLink>
                <HashLink smooth to="/#help" className="menu-item menu-item-2 under">To help the shelter</HashLink>
                <HashLink smooth to="/#contact" className="menu-item menu-item-2 under">Contacts</HashLink>

                <div className="cb"></div>
            </nav>
        </>
    );
}

export default Nav;
