import React from 'react';
import contactMail from './img/envelope.svg'
import contactTelephone from './img/telephone.svg'
import pin from './img/pin.svg'

function Footer() {
    return (
        <section className="footer">
            <div className="l-container">
                <div className="section-contact" id="contact">
                    <div className="section-contact-contact">
                        <h2 className="section-contact-contact-title">
                            For questions <br /> and suggestions
                        </h2>

                        <div className="section-contact-mail-wrapper">

                            <span className="section-contact-contact-mail">
                                <img src={contactMail} alt="mail contact" />
                                <span className="section-contact-text-info">email@shelter.com</span>
                            </span>
                        </div>
                        <div className="section-contact-mail-wrapper">

                            <span className="section-contact-contact-mail">
                                <img src={contactTelephone} alt="mail contact" />
                                <span className="section-contact-text-info">+13 674 567 75 54</span>
                            </span>
                        </div>
                    </div>
                    <div className="section-contact-location">
                        <h2 className="section-contact-contact-title">
                            We are waiting <br /> for your visit
                        </h2>

                        <div className="section-contact-mail-wrapper">

                            <span className="section-contact-contact-mail">
                                <img src={pin} alt="mail contact" />
                                <span className="section-contact-text-info">Boston, Central Street, 1st <br />
(Entrance from the store)</span>
                            </span>
                        </div>
                        <div className="section-contact-mail-wrapper location">

                            <span className="section-contact-contact-mail">
                                <img src={pin} alt="mail contact" />
                                <span className="section-contact-text-info">London, South Park, 18st</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
