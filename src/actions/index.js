import bj from '../components/util/bj';

export const GET_ADDRESS = 'get_address';

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
    
    bj.getUserLocation((data) => {
        console.log(data);
        return {
            type: GET_ADDRESS,
            payload: data.coords
        }
    });
    
}