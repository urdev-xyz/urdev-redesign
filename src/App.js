import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import './App.css';
import './misc.css'
import Services from './components/Services/Services';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props){
     super(props);
     
     this.state = {
       pages: [
         {name: 'Home', pageY: 0, mobilePageY: 0},
         {name: 'Services', pageY: 775, mobilePageY: 0},
         {name: 'Products' ,pageY: 1400, mobilePageY: 1700} ,
         {name: 'About' ,pageY: 0, mobilePageY: 0},
         {name: 'Contact' ,pageY: 1920, mobilePageY: 2600}
       ],
     }

  }


  render() {
    return (
      <div className='outer'>
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
          <Footer pages={this.state.pages}/>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
