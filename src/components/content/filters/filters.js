import React, { Component } from 'react';

import FiltersTypes from './filters_types/filters_types';
import FiltersCorners from './filters_corners/filters_corners';

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