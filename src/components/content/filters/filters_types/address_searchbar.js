import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'styles/address_input.css';

import FilterBox from '../filter_box';
import AddressInput from './address_input';
import { getMyLocation } from 'actions/index';

class AddressSearchbar extends Component {
    
    render() {
        const { getMyLocation } = this.props;
        
        return (
            <FilterBox title="Podaj adres">
                <AddressInput />
                <div className="address-locate" 
                    onClick={getMyLocation}>
                    
                    <i className="ion-android-locate address-locate__icon"></i>
                    
                    <span className="address-locate__text">
                        szukaj dla obecnej lokalizacji
                    </span>
                </div>
            </FilterBox>
        );
    }
}
        
export default connect(null, { getMyLocation })(AddressSearchbar);