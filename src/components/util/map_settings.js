import markerAddress from '../../images/markers/marker_address.png';

const mapSettings = {
    mapOpt: {
        center: { lat: 52.2276985, lng: 21.0131939 },
        zoom: 13,
        clickableIcons: false,
        styles: [
            {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]}   
        ]
    },
    autocompleteOpt: {
        types: ['address']
    },
    addressIcon: {
        url: markerAddress
    }
}

export default mapSettings;