import React, { Component } from 'react';
import AddressSearchbar from './address_searchbar';
import KitchenFilter from './kitchen_filter';
import DetailsFilter from './details_filter';


class FiltersTypes extends Component {
    render() {
        return (
            <div className="filters-column">
                <AddressSearchbar />
                <KitchenFilter />
                <DetailsFilter />
            </div>
        );
    }
}

export default FiltersTypes;