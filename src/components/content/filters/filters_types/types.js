import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddressSearchbar from './types_address';
import KitchenInput from './types_kitchen';
import DetailsFilter from './types_details';
import Button from 'reuse/button';

import { setUserCorners, setResultsTitle } from 'actions/filterActions';
import { setInfiniteLoadOn } from 'actions/dataActions';
import { toggleView } from 'actions/mobileActions';
import { getUserCorners } from 'selectors/filters/filterResultSelector';


class FiltersTypes extends Component {
    
    constructor(props) {
        super(props);
        
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    
    onButtonClick() {
        const {isMobile, toggleView, setInfiniteLoadOn, setUserCorners, setResultsTitle, userCorners } = this.props; 
        setInfiniteLoadOn();
        isMobile && toggleView('isFilters');
        
        if(userCorners.length > 400) {
            let con = this.allowToShowCorners();
            if(con) {
                setUserCorners(userCorners);
                setResultsTitle('Wyniki wyszukiwania');    
            }
        } else {
            setUserCorners(userCorners);
            setResultsTitle('Wyniki wyszukiwania');  
        }
    }
    
    allowToShowCorners() {
        return window.confirm(`Znaleziono ${this.props.userCorners.length} lokali. Zalecamy stosowanie wielu filtrów. Przy tak dużej ilości wyników obsługa widoku mapy może być nieczytelna oraz utrudniona. Czy mimo to chcesz kontynuować?`)
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
    userCorners: getUserCorners(state),
    isMobile: state.isMobile
})

export default connect(mapStateToProps,
    { setUserCorners, setResultsTitle, setInfiniteLoadOn, toggleView }
)(FiltersTypes);