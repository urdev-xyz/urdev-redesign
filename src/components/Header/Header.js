import React, { Component } from 'react';
import hero from '../../hero.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className={'Header-split Header-text'}>
            <h1>Development Made Simple.</h1>
            <p>At urdev we use a combination of the latest technologies and development practices to deliver fast, easy-to-use, and scalable applications.</p>
        </div>
        <div className={'Header-split Header-image'}>
            <img src={ hero }/>
        </div>
      </div>
    );
  }
}

export default Header;