import React, { Component } from 'react';
import './Navbar.css';
import Hamburger from 'react-hamburgers';
import './Hamburgers.css'


class Navbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      scrollState: null,
      isActive: false,
    }
  }



  componentDidMount(){
    window.addEventListener('scroll', (event) => {
      let myclass;
       if(window.scrollY < 15){
           myclass = null;
       }else{
           myclass = 'raise hamburgered';
       }
       this.setState({
          scrollState: myclass
       })
    });
  }

  generatePageLinks(pageNames) {
    let listItems = pageNames.map((pageNames) =>
      <a href='/#'><li>{pageNames.name}</li></a>
    );
    return (
      listItems
    )
  }

  render() {
    return (
      <div className={`Navbar ${ this.state.scrollState}`}>
        <div className={"Navbar-inner"}>
            <a className={'logo'} href='/#'>urdev</a>

            <ul className='desktop navbar-links'>
              {this.generatePageLinks(this.props.pages)}
            </ul>
            
            <div className='mobile'>
              <Hamburger
              active={this.state.active}
              type="slider"
              onClick={() => this.setState({ active: !this.state.active })}
              />
              <ul className='navbar-links'>
                {this.generatePageLinks(this.props.pages)}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default Navbar;