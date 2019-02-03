import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import hero from './hero.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
