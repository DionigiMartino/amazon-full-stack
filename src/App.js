import React from 'react';
import './App.css';

// import header

import Header from './Header'

// import Home

import Home from './Home'

// import Router

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// import Checkout

import Checkout from './Checkout'

// import Login

import Login from './Login'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
    
  );
}

export default App;
