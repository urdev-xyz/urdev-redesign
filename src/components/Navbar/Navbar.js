import React, { Component } from 'react';
import './Navbar.css';
import Hamburger from 'react-hamburgers';
import './Hamburgers.css'
import { ScrollTo } from 'react-scroll-to';
import Contact from '../Contact/Contact';


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
    let getPageY = function(name) {
        if (name != 'Home') {
          let item = document.querySelector('#' + name);

          let rect = item.getBoundingClientRect();
  
          console.log(Math.abs(rect.top) + window.pageYOffset)
  
          return rect.top + window.pageYOffset;
        }
        else {
          return 0;
        }

    }
    let listItems = pageNames.map((pageNames, pageY) =>
      <ScrollTo>
        {({ scrollTo }) => (
          <a onClick={() => scrollTo({y: getPageY(pageNames.name), smooth: true })}><li>{pageNames.name}</li></a>
        )}
      </ScrollTo>
    );
    return (
      listItems
    )
  }

  render() {
    return (
      <div id={'Home'} className={`Navbar ${ this.state.scrollState}`}>
        <div className={"Navbar-inner"}>
            <a className={'logo'} href='/#'>urdev</a>

            <ul className='desktop navbar-links'>
              {this.generatePageLinks(this.props.pages, this.props.pagesY)}
            </ul>
            
            <div className='mobile'>
              <Hamburger
              active={this.state.active}
              type="vortex"
              onClick={() => this.setState({ active: !this.state.active })}
              />
              <div className={`slideout ${ this.state.active ? 'slideout-active' : null}`}>
                <ul className='navbar-links'>
                  {this.generatePageLinks(this.props.pages)}
                </ul>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Navbar;