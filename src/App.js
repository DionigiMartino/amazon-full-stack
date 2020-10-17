import React from 'react';
import './App.css';

// import header

import Header from './Header'

// import Home

import Home from './Home'

// Import Router

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import Checkout

import Checkout from './Checkout'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />

          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
