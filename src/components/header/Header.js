import React from 'react';
import { Link as Scroll } from 'react-scroll';
import { Link } from 'react-router-dom'
import NavMenu from './Nav'
function Nav() {
    return (
        <header className="header">
            <div className="l-container">
                <NavMenu />
                <div className="cb"></div>
                <div className="header-baselisne">
                    <div className="header-baseline-l header-baseline-l1">
                        Not only people <br />
              need a house
                    </div>
                    <div className="header-baseline-l header-baseline-l2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                        gravida est in porttitor porttitor. Duis sodales elementum ipsum,
                        vehicula condimentum erat fringilla et.
            </div>
                </div>
                <p>
                    <Scroll to="pets" smooth={true} duration={1200} className="btn">Make a friend</Scroll>
                </p>
            </div>
        </header>
    );
}

export default Nav;