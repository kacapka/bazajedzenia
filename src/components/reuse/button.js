import React, { Component } from 'react';
import 'styles/button.css';

class Button extends Component {
    render() {
        const { className, onClick, name, icon } = this.props;
        return (
            <div className={`button ${className}`}
                onClick={onClick}
            >
                <span className='button__name'>{name}</span>
                <div className='button__icon'>
                    <i className={icon} />
                </div>
            </div>
        );
    }
}

export default Button;