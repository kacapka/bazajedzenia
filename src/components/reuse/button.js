import React, { Component } from 'react';
import 'styles/button.css';

class Button extends Component {
    render() {
        return (
            <button className={this.props.className}
                onClick={this.props.onClick}>
                <span className='button__name'>{this.props.name}</span>
                <i className={`button__icon ${this.props.icon}`} />
            </button>
        );
    }
}

export default Button;