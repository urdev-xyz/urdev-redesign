import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    constructor(props){
        super(props)
        this.state = {
            color: this.props.color ? this.props.color : 'var(--purple)',
        }
    }

  render() {
    return (
      <button style={{background: this.state.color,}} className="Button">
        {this.props.children}
      </button>
    );
  }
}

export default Button;