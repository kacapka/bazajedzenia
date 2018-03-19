import React, { Component } from 'react';

import FiltersTypes from './filters_types/types';
import FiltersCorners from './filters_corners/corners';

import 'styles/filters.css';
import 'styles/select_input.css';

class Filters extends Component {
    
    render() {    
        return (
            <div className="filters">
                <FiltersTypes />
                <FiltersCorners />
            </div>
        );
    }
}
        
export default Filters;