import React, { Component } from 'react';
import AddressSearchbar from './address_searchbar';

class FiltersTypes extends Component {
    render() {
        return (
            <div className="filters-column">
                <AddressSearchbar />
            </div>
        );
    }
}

export default FiltersTypes;