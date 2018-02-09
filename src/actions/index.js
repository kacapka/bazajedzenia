import bj from '../components/util/bj';
const google = window.google;

export const GET_ADDRESS = 'get_address';
export const SET_VALUE = 'set_value';

//get addres from searchbar input
export function getAddress(place) {   
    //check user location
    //if out of Warsaw ask for continue
    const isInWarsaw = bj.isAddressInWarsaw(place);
    if (!isInWarsaw) return {type: 'ACTION_CANCEL'};

    return {
        type: GET_ADDRESS,
        payload: place.geometry.location
    }
    
}

//get user location 
export function getMyLocation() {
    
    return (dispatch) => {
        bj.getUserLocation(data => {
            const latLng = new google.maps.LatLng(
                data.coords.latitude,
                data.coords.longitude
            );
            const address = new google.maps.Geocoder();
            address.geocode(
                {location: latLng},
                (result, status) => {
                    if(status === 'OK') {
                        if (result[0]) {
                            dispatch(getAddress(result[0]));
                        } else {
                            alert('nie znaleziono adresu');
                        }
                    } else {
                        alert(`przeglądarka nie może ustalić Twojego położenia. ERROR: ${status}`);
                    }
                }
            )
            
        });    
    }  
}

//set values in input kitechn types
export function setValue(value) {
    
    return {
        type: SET_VALUE,
        payload: value
    }
    
}