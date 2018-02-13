import axios from 'axios';
import bjLocation from '../utils/bj_location';
import bjFilters from '../utils/bj_filters';
const google = window.google;

export const FETCH_CORNERS = 'fetch_corners';
export const SET_KITCHEN_TYPES = 'set_kitchen_types';
export const GET_ADDRESS = 'get_address';
export const SET_VALUE = 'set_value';
export const CHECKBOX_SELECT = 'checkbox_select';
export const SELECT_DAY = 'select_day';
export const GET_TIME = 'get_time';
export const SELECT_CORNER = 'select_corner';
export const SET_USER_CORNERS = 'set_user_corners';

//get all corners from JSON file
export function fetchCorners() {
   
    return (dispatch) => {
        const DATA_URL = 'JSON/baza.json';
        axios.get(DATA_URL).then(response => {
            dispatch(
                {
                    type: FETCH_CORNERS,
                    payload: response.data
                }
            );
            dispatch(setKitchenTypes(response.data));
        })    
    }   
}

//every time app is open get all kitchen types from corners base
//even when new type is added it will be shown in kitchen input filters section
//getKitchenTypes function returns array of kitchen types 
export function setKitchenTypes(data) {
    
    if (!data) return { type: 'CANCEL_ACTION'};
    
    const types = bjFilters.getKitchenTypes(data);
    
    return {
        type: SET_KITCHEN_TYPES,
        payload: types
    }
    
}

//get addres from searchbar input
//check user location
//if out of Warsaw ask for continue
export function getAddress(place) {   
   
    const isInWarsaw = bjLocation.isAddressInWarsaw(place);
    if (!isInWarsaw) return {type: 'ACTION_CANCEL'};

    return {
        type: GET_ADDRESS,
        payload: place.geometry.location
    }
    
}

//get user location based on async action
export function getMyLocation() {
    
    return (dispatch) => {
        bjLocation.getUserLocation(data => {
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
//get user's choice of all kitchen types
export function setValue(value) {
    
    return {
        type: SET_VALUE,
        payload: value
    }
    
}

//select checkbox in filter details section
export function checkboxSelect(input) {
     
    if (input.chooseDate) input.openNow = false;
    if (input.openNow) input.chooseDate = false;
    
    return {
        type: CHECKBOX_SELECT,
        payload: input
    }
}

//select and get user choice of day of week in details filter
export function selectDay(id) {
    
    return {
        type: SELECT_DAY,
        payload: id
    }
    
}

//select and get user time in details filter
export function getTime(value) {
    
    return {
        type: GET_TIME,
        payload: value
    }
    
}

//select and get corner from user input in cornerssearchbar section
export function selectCorner(corner) {
    
    return {
        type: SELECT_CORNER,
        payload: corner
    }
    
}

//set result of user choices to render list of corners in filter list section
export function setUserCorners(corners) {
    
    return {
        type: SET_USER_CORNERS,
        payload: corners
    }
    
}