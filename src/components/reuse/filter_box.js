import React, { Component } from 'react';

class FilterBox extends Component {
    render() {
        const horizontalLine = this.props.line ? 'filter-box--line' : '';
        
        return (
            <div className={`filter-box ${horizontalLine}`}>
                <h3 className="filter-box__title">
                    {this.props.title}
                </h3>
                {this.props.children}
            </div>
        );
    }
}

export default FilterBox;