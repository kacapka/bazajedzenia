import React, { Component } from 'react';

class FilterBox extends Component {
    render() {
        return (
            <div className="filter-box">
                <h3 className="filter-box__title">
                    {this.props.title}
                </h3>
                {this.props.children}
            </div>
        );
    }
}

export default FilterBox;