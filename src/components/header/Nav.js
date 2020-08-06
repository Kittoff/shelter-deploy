import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
function Nav() {
    return (
        <>
            <div className="header-title">
                <a href="#">
                    <h3>Cozy House</h3>
                    <span className="header-subtitle">Shelter for pets in Boston</span>
                </a>
            </div>

            <nav className="menu">
                {/* <HashLink to={'/#about'}> */}

                {/* <HashLink to="/#about" className="menu-item under">About the shelter</HashLink> */}
                {/* </HashLink> */}
                {/* <Scroll to="pets" smooth={true} duration={1200} className="menu-item under">Our pets</Scroll>
                    <Scroll to="help" smooth={true} duration={1200} className="menu-item under">To help the shelter</Scroll>
                    <Scroll to="contact" smooth={true} duration={1200} className="menu-item under">Contacts</Scroll> */}

                <HashLink smooth to="/#abouts" className="menu-item under">About the shelter</HashLink>
                <HashLink smooth to="/#pets" className="menu-item under">Our pets</HashLink>
                <HashLink smooth to="/#help" className="menu-item under">To help the shelter</HashLink>
                <HashLink smooth to="/#contact" className="menu-item under">Contacts</HashLink>

                <div className="cb"></div>
            </nav>
        </>
    );
}

export default Nav;
