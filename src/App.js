import React from 'react';
import './App.css';

// import header

import Header from './Header'

// import Home

import Home from './Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
      </header>
    </div>
  );
}

export default App;
