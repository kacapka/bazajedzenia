import TYPES from 'actions/action_types';

//save active markers to store - persistedstate when map component is mounting
export const setActiveMarkers = (markers) => {
    
    return {
        type: TYPES.SET_ACTIVE_MARKERS,
        payload: markers
    }
    
}

//show clciked corner on map - map.panTo()
export const showCornerOnMap = (id) => {
    
    const random = Math.random();
 
    return {
        type: TYPES.SHOW_CORNER_ON_MAP,
        payload: [parseInt(id, 10), random]
    }
    
}