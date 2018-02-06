import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterBox from '../filter_box';
import AddressInput from './address_input';
import { getMyLocation } from 'actions/index';

class AddressSearchbar extends Component {
    render() {
        return (
            <FilterBox title="podaj adres">
                <AddressInput />
                <button onClick={()=> this.props.getMyLocation()}>
                    szukaj dla obecnej lokalizacji
                </button>
            </FilterBox>
        );
    }
}
        
export default connect(null, { getMyLocation })(AddressSearchbar);