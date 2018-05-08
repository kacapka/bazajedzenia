import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilterBox from 'reuse/filter_box';
import AddressInput from './types_address_input';

import { getMyLocation } from 'actions/filterActions';

import 'styles/address_input.css';

class AddressSearchbar extends Component {
    
    constructor(props) {
        super(props);
        
        this.onLocationClick = this.onLocationClick.bind(this);
    }
    
    onLocationClick() {
        this.props.getMyLocation();
    }
    
    render() {
        const isMobile = this.props.isMobile;
        
        return (
            <FilterBox title="Podaj adres" line>
                <AddressInput />
                {!isMobile &&
                    <div className="address-locate" 
                        onClick={this.onLocationClick}
                        onTouchEnd={this.onLocationClick}
                    >
                        <i className="ion-android-locate address-locate__icon"></i>
                        <span className="address-locate__text">
                            szukaj dla obecnej lokalizacji
                        </span>
                    </div>
                }
            </FilterBox>
        );
    }
}

const mapStateToProps = (state) => ({
    isMobile: state.isMobile
})
        
export default connect(mapStateToProps, { getMyLocation })(AddressSearchbar);