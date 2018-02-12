import React, { Component } from 'react';
import AddressSearchbar from './types_address';
import KitchenInput from './types_kitchen';
import DetailsFilter from './types_details';
import Button from '../../../reuse/button';


class FiltersTypes extends Component {
    render() {
        return (
            <div className="filters-column filters-column--line">
                <div className="filters-column__filters">
                    <AddressSearchbar />
                    <KitchenInput />
                    <DetailsFilter />
                </div>
                <div className="filters-column__button">
                    <Button className='button--green'
                        name='Szukaj'
                        icon='ion-android-search'
                    />
                </div>
            </div>
        );
    }
}

export default FiltersTypes;