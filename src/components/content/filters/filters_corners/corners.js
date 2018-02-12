import React, { Component } from 'react';

import CornersInput from './corners_input';

class FiltersCorners extends Component {
    render() {
        return (
            <div className="filters-column filters-column--corners">
                <CornersInput />
            </div>
        );
    }
}

export default FiltersCorners;