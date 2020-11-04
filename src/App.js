import React, {useEffect} from 'react';
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

// import Auth

import {auth} from './firebase'

// import the dispatch and the stateValue 

import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // it will start only once, when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('USER >>>', authUser)

      if(authUser){
        // if the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    // onAuthStateChanged, it'll control any change provided from the
    // auth
  }, [])

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
