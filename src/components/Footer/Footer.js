import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }


    generatePageLinks(pageNames) {
        let listItems = pageNames.map((pageNames) =>
          <a href='/#'><li>{pageNames.name}</li></a>
        );
        return (
          listItems
        )
      }

    render () {
        return (
            <div className='Footer-outer'>
            <div className='Footer'>
                <div className='Footer-Section Footer-Info'>
                <h1>urdev</h1>
                <ul>
                        {this.generatePageLinks(this.props.pages)}
                    </ul>
                </div>
                <div className='Footer-Section Footer-Links'>
                <h1>Links</h1>
                    <ul>
                        {this.generatePageLinks(this.props.pages)}
                    </ul>
                </div>
                <div className='Footer-Section Footer-Info'>
                <h1>Follow Us</h1>
                <ul>
                        {this.generatePageLinks(this.props.pages)}
                </ul>
                </div>
            </div>
            <span>Copyright 2019</span>
            </div>
        );
    }
}

export default Footer;