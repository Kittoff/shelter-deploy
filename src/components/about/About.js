import React from 'react';
import petsAbout from './img/pets-about.png'
import { Link } from 'react-scroll';

function About() {
    return (
        <section className="section">
            <div className="l-container">
                <div className="section-about" id="about">
                    <div className="pets-about">
                        <img src={petsAbout} alt="" />
                    </div>
                    <div className="section-title">
                        <h1>
                            About the shelter <br />
                “Cozy House”
              </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                            efficitur blandit condimentum. Proin accumsan lorem vel gravida
                            fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.
                <br />
                            <br />
                Donec consectetur, diam in porta tempus, urna ligula vestibulum
                nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis
                ultrices pharetra. Morbi tempus at ante sit amet tristique.
                Maecenas dignissim justo orci, in laoreet urna dapibus nec.
                Praesent quis tortor faucibus, tristique ante vitae, dignissim
                lorem. Sed at ligula et sem mattis gravida ac vel erat.
              </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
