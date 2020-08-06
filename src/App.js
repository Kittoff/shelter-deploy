import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Components 
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
