import markerAddress from '../images/markers/marker_address.png';
import markerCorner from '../images/markers/marker_corner_normal.png';
import markerCornerSpecial from '../images/markers/marker_corner_special.png';
import markerMultiple from '../images/markers/marker_corner_multiple.png';

const mapSettings = {
    mapOpt: {
        center: { lat: 52.2276985, lng: 21.0131939 },
        zoom: 13,
        clickableIcons: false,
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        gestureHandling: 'greedy',
        styles: [
            {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.park","elementType": "all","stylers": [{"visibility": "on"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]}   
        ]
    },
    autocompleteOpt: {
        types: ['address']
    },
    addressIcon: {
        url: markerAddress
    },
    cornerIcon: {
        url: markerCorner
    },
    cornerIconSpecial: {
        url: markerCornerSpecial
    },
    clusterOpt: {
        imagePath: markerMultiple,
        gridSize: 1
    }
    
}

export default mapSettings;