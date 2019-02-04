import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import './App.css';
import './misc.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className='big-circle-bg'></div>
        <div className='small-circle-bg'></div>
        <div className="Content">
          <Header/>
          <div className="join-newsletter">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
