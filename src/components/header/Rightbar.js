import React from 'react'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const Ul = styled.nav`
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 8.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }
`;


const Rightbar = ({ open }) => {
    return (
        <Ul open={open}>

            <nav className="menu">
                <ul>

                    <HashLink smooth to="/#abouts" className="menu-item under">About the shelter</HashLink>
                    <HashLink smooth to="/#pets" className="menu-item under">Our pets</HashLink>
                    <HashLink smooth to="/#help" className="menu-item under">To help the shelter</HashLink>
                    <HashLink smooth to="/#contact" className="menu-item under">Contacts</HashLink>

                </ul>
                <div className="cb"></div>
            </nav>
        </Ul>
    )
}

export default Rightbar
