import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      scrollState: null,
    }
  }



  componentDidMount(){
    window.addEventListener('scroll', (event) => {
      let myclass;
       if(window.scrollY < 15){
           myclass = null;
       }else{
           myclass = 'raise';
       }
       this.setState({
          scrollState: myclass
       })
    });
  }

  generatePageLinks(pageNames) {
    let listItems = pageNames.map((pageNames) =>
      <li>{pageNames.name}</li>
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

            <ul className='navbar-links'>
              {this.generatePageLinks(this.props.pages)}
            </ul>

        </div>
      </div>
    );
  }
}

export default Navbar;