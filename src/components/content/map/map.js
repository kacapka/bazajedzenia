import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import InfoWindow from './map_info_window';
import MultipleInfoWindow from './map_multiple_info_window';
import { MarkerClusterer } from 'utils/markerclusterer';
import settings from 'utils/map_settings';

import { getCornersId, getAddress, getMarker, getActiveMarkers } from 'selectors/map/mapSelector';
import { getCorners } from 'selectors/data/dataSelector';
import { selectCorner } from 'actions/filterActions';
import { toggleView } from 'actions/mobileActions';
import { setActiveMarkers, showCornerOnMap } from 'actions/mapActions';

import 'styles/info_window.css';

const google = window.google;

class Map extends Component {
         
    shouldComponentUpdate() {
        return false;
    }
    
    componentDidMount() {
    
        //init map
        this.map = new google.maps.Map(
            this.mapDiv, 
            settings.mapOpt
        );
        google.maps.event.addDomListener(this.map, 'zoom_changed', () => {
            this.resetMapView();
        });
        google.maps.event.addDomListener(this.map, 'click', () => {
            this.resetMapView();
        });
        
        //create marker for address
        this.markerAddress = new google.maps.Marker({
            position: null, 
            map: this.map, 
            icon: settings.addressIcon,
            optimized: false
        });
        
        this.markers = [];
        this.clusterOpenInfo = null;
        this.markerOpenInfo = null;
        this.markerCluster = new MarkerClusterer(this.map, null, settings.clusterOpt);
        this.markerCluster.onClickZoom = (cluster) => this.openMultipleInfoWindow(cluster);
        
        this.selectCornerInfoWindow = this.selectCornerInfoWindow.bind(this);
    }
    
    openInfoWindow(name, street, marker) {
        if(!marker.infoWindow) marker.infoWindow = new InfoWindow(name, street, marker, this.selectCornerInfoWindow);
        marker.infoWindow.setMap(this.map);
    }
    
    closeInfoWindow(marker) {
        marker.infoWindow.setMap(null);
    }
     
    openMultipleInfoWindow(cluster) { 
        this.resetMapView();
        let markers = cluster.markers_;
        if(cluster.infoWindow) {
            cluster.infoWindow.isOpen === false ? cluster.infoWindow.setMap(this.map) : cluster.infoWindow.setMap(null);   
        } else {
            cluster.infoWindow = new MultipleInfoWindow(markers, this.selectCornerInfoWindow);
            this.clusterOpenInfo = cluster.infoWindow;
            cluster.infoWindow.setMap(this.map)
        }
    }
    
    resetMapView() {
        this.clusterOpenInfo && this.clusterOpenInfo.setMap(null);
        this.markerOpenInfo && this.markerOpenInfo.setMap(null);
    }
    
    selectCornerInfoWindow(id) {
        const { isMobile, selectCorner, toggleView, history } = this.props;
        selectCorner(id);
        if(isMobile) {
            history.push(`/${id}`); 
            toggleView('isMap');
        }
    }
     
    componentWillReceiveProps(nextProps) {
        const { address, allCorners, cornersId, markerToShow } = nextProps;
        
        //update address marker
        if(this.props.address !== address) {
            this.map.panTo(address);
            this.map.setZoom(15);
            this.markerAddress.setPosition(address);
        }
        
        //set marker for every corner
        //because allCorners wont change do it once after data is fetched
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
                    icon: settings.cornerIcon,
                    optimized: false
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
                    this.resetMapView();
                    this.openInfoWindow(corner.name, corner.street, marker);
                    this.markerOpenInfo = marker.infoWindow;
                });
            })
            
            //if there is persistedState for markers print on map
            if(this.props.activeMarkers) {
                let markers = this.markers.filter(marker => this.props.activeMarkers.includes(marker.id));   
                this.markerCluster.addMarkers(markers, false);
            } 
                         
        }
        
        //deal with user choice, print (if not printed yet) user corners on map 
        if(this.props.cornersId !== cornersId) {
            
            this.resetMapView();
            this.markerCluster.clearMarkers();
            let markers = this.markers.filter(marker => cornersId.includes(marker.id));
            this.markerCluster.addMarkers(markers, false);
            
            this.props.setActiveMarkers(cornersId);
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
            <div className="map" ref={ref => this.mapDiv = ref} />
        );
    }
}

const mapStateToProps = (state) => ({
    address: getAddress(state),
    allCorners: getCorners(state),
    cornersId: getCornersId(state),
    markerToShow: getMarker(state),
    activeMarkers: getActiveMarkers(state),
    isMobile: state.isMobile,
})

export default withRouter(connect(mapStateToProps, { selectCorner, showCornerOnMap, toggleView, setActiveMarkers })(Map));