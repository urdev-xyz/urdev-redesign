import React, { Component } from 'react';
import hero from '../../hero.svg';
import Button from '../Button/Button'
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 'auto',
    }

  }
  
  componentDidMount() {
    this.setState(
      {headerHeight: window.innerHeight}
    )
  }

  render() {
    return (
      <section>
      <div style={{height: this.state.headerHeight - 180}} className="Header">
        <div className={'Header-split Header-text'}>
            <h1>Development Made Simple.</h1>
            <p>At urdev we use a combination of the latest technologies and development practices to deliver fast, easy-to-use, and scalable applications.</p>
            <div className="button-container">
                <Button>View Services</Button>
                <Button>View Products</Button>
            </div>
        </div>
        <div className={'Header-split Header-image'}>
            <img src={ hero }/>
        </div>
      </div>
      <div className='arrow-container'>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" width="60px" height="60px" viewBox="0 0 960 560" enable-background="new 0 0 960 560">
      <g id="Rounded_Rectangle_33_copy_4_1_">
        <path d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937   c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937   c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
      </g>
      </svg>
    </div>
    </section>
    );
  }
}

export default Header;