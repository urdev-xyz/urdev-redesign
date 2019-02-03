import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className={"Navbar-inner"}>
            <a className={'logo'} href='/#'>urdev</a>
        </div>
      </div>
    );
  }
}

export default Navbar;