import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from '../../util/map_settings';

const google = window.google;

class Map extends Component {
    
    shouldComponentUpdate() {
        return false;
    }
    
    componentDidMount() {
        //init map
        this.map = new google.maps.Map(
            this.refs.map, 
            settings.mapOpt
        );
        
        //create marker for address
        this.markerAddress = new google.maps.Marker({
            position: null, 
            map: this.map, 
            icon: settings.addressIcon
        });
    }
    
    componentWillReceiveProps(nextProps) {
        if(this.props.address !== nextProps.address) {
            this.map.panTo(nextProps.address);
            this.markerAddress.setPosition(nextProps.address);
        }
    }
    
    render() {
        return (
            <div className="map" ref="map" />
        );
    }
}

function mapStateToProps(state) {
    return {
        address: state.address
    }
}

export default connect(mapStateToProps)(Map);