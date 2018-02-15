import _ from 'underscore';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from '../../../utils/map_settings';

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
        
        //create empty array for markers
        this.markers = [];
    }
    
    componentWillReceiveProps(nextProps) {
        const { address, corners } = nextProps;
        
        if(this.props.address !== address) {
            this.map.panTo(address);
            this.markerAddress.setPosition(address);
        };
        
        if(this.props.corners !== corners) {
            
            this.markers.forEach(marker => {
                marker.setMap(null);
            });
            
            this.markers = [];
            
            corners.forEach(corner => {
                
                let lat, lng, latLng, markerOpt;
                lat = corner.latLng.lat;
                lng = corner.latLng.lng;
                latLng = new google.maps.LatLng(lat, lng);
                markerOpt = {
                    position: latLng,
                    map: this.map,
                    icon: settings.cornerIcon
                }
                
                const marker = new google.maps.Marker(markerOpt);
                marker.id = corner.id;
                this.markers.push(marker);
                
            });
        };
        
       
    }
    
    render() {
        console.log(this);
        return (
            <div className="map" ref="map" />
        );
    }
}

function mapStateToProps(state) {
    return {
        address: state.address,
        corners: state.userCorners
    }
}

export default connect(mapStateToProps)(Map);