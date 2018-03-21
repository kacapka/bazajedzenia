import TYPES from './action_types';
import { isAddressInWarsaw, getUserLocation } from 'utils/bj_location';
import { getCornerById } from 'selectors/data/cornerSelector';

const google = window.google;

//get addres from searchbar input
//check user location
//if out of Warsaw ask for continue
export const getAddress = (place) => {   
   
    const isInWarsaw = isAddressInWarsaw(place);
    if (!isInWarsaw) return {type: 'ACTION_CANCEL'};

    return {
        type: TYPES.GET_ADDRESS,
        payload: place.geometry.location
    }
    
}

//get user location based on async action
export const getMyLocation = () => (dispatch) => {
    getUserLocation(data => {
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

//set values in input kitechn types
//get user's choice of all kitchen types
export const setValue = (value) => ({
    
    type: TYPES.SET_VALUE,
    payload: value
    
})

//select checkbox in filter details section
export const checkboxSelect = (input) => {
     
    if (input.chooseDate) input.openNow = false;
    if (input.openNow) input.chooseDate = false;
    
    return {
        type: TYPES.CHECKBOX_SELECT,
        payload: input
    }
}

//select and get user choice of day of week in details filter
export const selectDay = (id) => ({
    
    type: TYPES.SELECT_DAY,
    payload: id
    
})

//select and get user time in details filter
export const getTime = (value) => ({
    
    type: TYPES.GET_TIME,
    payload: value
    
})

//select and get corner from user input in cornerssearchbar section
export const selectCorner = id => (dispatch, getState)  => {
    
    if(!id) { dispatch({type: TYPES.SELECT_CORNER_NULL}) }
    else {
        let corner = getCornerById(id)(getState());

        dispatch({
            type: TYPES.SELECT_CORNER,
            payload: { label: corner.name, street: corner.street, id }
        }); 
    }
}

//set result of user choices to render list of corners in filter list section
export const setUserCorners = (corners) => ({
    
    type: TYPES.SET_USER_CORNERS,
    payload: corners
    
})

//set results title for corners list
export const setResultsTitle = (title) => ({
    
    type: TYPES.SET_RESULTS_TITLE,
    payload: title
    
})

//show clciked corner on map - map.panTo()
export const showCornerOnMap = (id) => {
    
    const random = Math.random();
 
    return {
        type: TYPES.SHOW_CORNER_ON_MAP,
        payload: [parseInt(id, 10), random]
    }
    
}
