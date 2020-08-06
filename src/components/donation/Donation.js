import React from 'react';
import petDonation from './img/pet-donation.png'
import creaditCard from './img/credit-card.svg'

function Donation() {
    return (
        <section className="section-donation">
            <div className="l-container">
                <div className="section-donation" id="donation">
                    <div className="pets-donation">
                        <img src={petDonation} alt="" />
                    </div>
                    <div className="section-title">
                        <h1>
                            In addition, you <br />
                can make a donation
              </h1>
                        <br />
                        <span>
                            Name of the bank / Type of bank account
                </span>
                        <div className="btn account-number">
                            <img src={creaditCard} alt="credit-card" />
                            8380 2880 8028 8791 7435
                </div>
                        <div className="legal-information">
                            Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
                            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum
                            et malesuada fames ac ante ipsum primis in faucibus.
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Donation;
