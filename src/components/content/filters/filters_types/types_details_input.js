import React, { Component } from 'react';

class DetailsInput extends Component {
    render() {
        const { id, name, onChange, checked } = this.props;
        const className = `details-input ${this.props.className ? this.props.className : ''}`;
        
        return (
            <div className={className}>
                <input className="details-input__checkbox"
                    type="checkbox"
                    id={id}
                    name={name} 
                    onChange={onChange}
                    checked={checked} />
                <label className="details-input__label"
                    htmlFor={id}>
                    {name}
                </label>
            </div>
        );
    }
}

export default DetailsInput;