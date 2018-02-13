import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from '../../../../utils/map_settings';
import { getAddress } from 'actions/index';

const google = window.google;

class AddressInput extends Component {
    
    constructor(props) {
        super(props);
        
        this.showAddressOnMap = this.showAddressOnMap.bind(this);
    }
    
    shouldComponentUpdate() {
        return false;
    }
     
    componentDidMount() {
        this.searchbar = new google.maps.places.Autocomplete(
            this.refs.addressInput, 
            settings.autocompleteOpt
        );
        
        google.maps.event.addDomListener(
            this.searchbar, 
            'place_changed', 
            this.showAddressOnMap
        );
    }
    
    showAddressOnMap() {
        let place = this.searchbar.getPlace();
        this.props.getAddress(place);
    }
    
    render() {
        return (
            <input className="address-input"
                placeholder="np. Grójecka 40"
                ref="addressInput" />
        );
    }
}

export default connect(null, { getAddress })(AddressInput);