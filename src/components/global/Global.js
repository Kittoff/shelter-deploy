import React from 'react';

import Nav from '../header/Nav'
import Header from '../header/Header'
import About from '../about/About'
import Pets from '../pets/Pets'
import Help from '../help/Help'
import Donation from '../donation/Donation'
import Footer from '../footer/Footer'
import OurPets from '../ourPets/OurPets';


function Global() {
    return (
        //   <Router>

        <div className="App">
            {/* <Nav /> */}
            <Header />
            <About />
            <Pets />
            <Help />
            <Donation />
            {/* <Route path="/pets" exact component={OurPets} /> */}
            {/* <Footer /> */}
        </div>
        //   </Router>
    );
}

export default Global;
