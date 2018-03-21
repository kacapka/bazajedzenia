import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddressSearchbar from './types_address';
import KitchenInput from './types_kitchen';
import DetailsFilter from './types_details';
import Button from 'reuse/button';

import { setUserCorners, setResultsTitle } from 'actions/filterActions';
import { setInfiniteLoadOn } from 'actions/dataActions';
import { getUserCorners } from 'selectors/filters/filterResultSelector';


class FiltersTypes extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    onButtonClick() {
        this.props.setInfiniteLoadOn();
        this.props.setUserCorners(this.props.userCorners);
        this.props.setResultsTitle('Wyniki wyszukiwania');
    }
    
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
                        onClick={this.onButtonClick}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    userCorners: getUserCorners(state)
})

export default connect(mapStateToProps,
    { setUserCorners, setResultsTitle, setInfiniteLoadOn }
)(FiltersTypes);