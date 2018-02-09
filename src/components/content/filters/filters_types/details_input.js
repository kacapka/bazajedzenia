import React, { Component } from 'react';

class DetailsInput extends Component {
    render() {
        return (
            <div className="">
                <input className={` ${this.props.className}`}
                    type="checkbox"
                    id={this.props.id}
                    name={this.props.name} />
                <label className=""
                    htmlFor={this.props.id}>
                    {this.props.name}
                </label>
            </div>
        );
    }
}

export default DetailsInput;