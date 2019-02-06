import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import './App.css';
import './misc.css'
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

class App extends Component {
  constructor(props){
     super(props);
     
     this.state = {
       pages: [
         {name: 'Home'},
         {name: 'Services'},
         {name: 'Products'},
         {name: 'About'},
         {name: 'Contact'}
       ],
     }

  }


  render() {
    return (
      <div className="App">
        <Navbar pages={this.state.pages}/>
        <div className='big-circle-bg'></div>
        <div className='small-circle-bg'></div>
        <div className='small-circle-bg-two'></div>
        <div className='background-el'></div>
        <div className="Content">
          <Header/>
          <Services/>
          <Products/>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}

export default App;
