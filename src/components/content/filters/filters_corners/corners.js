import React, { Component } from 'react';

import CornersInput from './corners_input';
import CornersList from './corners_list';

class FiltersCorners extends Component {
    render() {
                
        return (
            <div className="filters-column filters-column--corners">
                <CornersInput />
                <CornersList />
            </div>
        );
    }
}

export default FiltersCorners;