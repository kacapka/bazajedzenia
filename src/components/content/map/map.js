import React, { Component } from 'react';
import { connect } from 'react-redux';
import settings from '../../../utils/map_settings';
import { getCornersId } from 'selectors/selector_map';
import InfoWindow from './map_info_window';
import MultipleInfoWindow from './map_multiple_info_window';
import { selectCorner, showCornerOnMap } from 'actions/index';

import 'styles/info_window.css';

import { MarkerClusterer } from '../../../utils/markerclusterer';

const google = window.google;

class Map extends Component {
         
    shouldComponentUpdate() {return false;}
    
    componentDidMount() {
    
        //init map
        this.map = new google.maps.Map(
            this.refs.map, 
            settings.mapOpt
        );
        google.maps.event.addDomListener(this.map, 'zoom_changed', () => {
            this.resetMapView();
        });
        
        //create marker for address
        this.markerAddress = new google.maps.Marker({
            position: null, 
            map: this.map, 
            icon: settings.addressIcon
        });
        
        this.markers = [];
        this.activeOpenInfo = null;
        this.markerCluster = new MarkerClusterer(this.map, null, settings.clusterOpt);
        this.markerCluster.onClickZoom = (cluster) => this.openMultipleInfoWindow(cluster);
        
    }
    
    openInfoWindow(name, street, marker) {
        if(!marker.infoWindow) marker.infoWindow = new InfoWindow(name, street, marker.position);
        marker.infoWindow.setMap(this.map);
    }
    
    closeInfoWindow(marker) {
        marker.infoWindow.setMap(null);
    }
     
    openMultipleInfoWindow(cluster) {   
        let markers = cluster.markers_;
        if(cluster.infoWindow) {
            cluster.infoWindow.isOpen === false ? cluster.infoWindow.setMap(this.map) : cluster.infoWindow.setMap(null);   
        } else {
            cluster.infoWindow = new MultipleInfoWindow(markers, this.props.selectCorner);
            this.activeOpenInfo = cluster.infoWindow;
            cluster.infoWindow.setMap(this.map)
        }
    }
    
    resetMapView() {
        let isOpen = this.activeOpenInfo;
        if(isOpen) isOpen.setMap(null);
    }
     
    componentWillReceiveProps(nextProps) {
        const { address, allCorners, cornersId, markerToShow } = nextProps;
        
        //update address marker
        if(this.props.address !== address) {
            this.map.panTo(address);
            this.map.setZoom(15);
            this.markerAddress.setPosition(address);
        }
        
        //set marker for every corner, print reccomended corners,
        //because allCorners wont change do it once after geting data 
        if(this.props.allCorners !== allCorners) {
             
            allCorners.forEach(corner => {
                let lat, lng, latLng, markerOpt, marker;
                if(!corner.latLng) return;
                if(!corner.name) return;
                lat = corner.latLng.lat;
                lng = corner.latLng.lng;
                latLng = new google.maps.LatLng(lat, lng);
                markerOpt = {
                    position: latLng,
                    name: corner.name,
                    info: corner.locationInfo,
                    map: null,
                    icon: settings.cornerIcon
                }
                
                marker = new google.maps.Marker(markerOpt);
                marker.id = corner.id;
                this.markers.push(marker);
                
                google.maps.event.addDomListener(marker, 'mouseover', () => {
                    this.openInfoWindow(corner.name, corner.street, marker);
                });  
                google.maps.event.addDomListener(marker, 'mouseout', () => {
                    this.closeInfoWindow(marker);
                });
                google.maps.event.addDomListener(marker, 'click', () => {
                    this.props.selectCorner(marker.id);
                    this.props.showCornerOnMap(marker.id);
                });
            })
                         
        }
        
        //deal with user choice, print (if not printed yet) user corners on map 
        if(this.props.cornersId !== cornersId) {
            
            this.resetMapView();
            this.markerCluster.clearMarkers();
            let markers = this.markers.filter(marker => cornersId.includes(marker.id));
            this.markerCluster.addMarkers(markers, false);
            
        } 
        
        //show selected corner on map 
        if(this.props.markerToShow !== markerToShow) {
            const markerOld = this.props.markerToShow;
            if(markerOld) {
                this.markers.find(marker => marker.id === markerOld[0]).setIcon(settings.cornerIcon.url);    
            }
            
            const marker = this.markers.find(marker => marker.id === markerToShow[0]);
            if(marker.map === null) marker.setMap(this.map);
            marker.setIcon(settings.cornerIconSpecial.url);
            this.map.panTo(marker.position);             
        }
              
    }
    
    render() {
    
        return (
            <div className="map" ref="map" />
        );
    }
}

const mapStateToProps = (state) => ({
    address: state.address,
    allCorners: state.corners,
    cornersId: getCornersId(state),
    markerToShow: state.showOnMap
})

export default connect(mapStateToProps, { selectCorner, showCornerOnMap })(Map);