import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components 
import Nav from './components/header/Nav'
// import Header from './components/header/Header'
// import About from './components/about/About'
// import Pets from './components/pets/Pets'
// import Help from './components/help/Help'
// import Donation from './components/donation/Donation'
import Footer from './components/footer/Footer'
import OurPets from './components/ourPets/OurPets';
import Global from './components/global/Global';

function App() {
  return (
    <Router>

      <div className="App">

        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={Global} />
          <Route path="/pets" exact component={OurPets} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
