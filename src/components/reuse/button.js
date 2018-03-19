import React, { Component } from 'react';
import 'styles/button.css';

class Button extends Component {
    render() {
        const { className, onClick, name, icon } = this.props;
        return (
            <button className={className}
                onClick={onClick}>
                <span className='button__name'>{name}</span>
                <i className={`button__icon ${icon}`} />
            </button>
        );
    }
}

export default Button;