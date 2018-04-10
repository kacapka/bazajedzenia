import TYPES from 'actions/action_types';

//save active markers to store - persistedstate when map component is mounting
export const setActiveMarkers = (markers) => {
    
    return {
        type: TYPES.SET_ACTIVE_MARKERS,
        payload: markers
    }
    
}