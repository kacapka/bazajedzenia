import TYPES from './action_types';

export const toggleView = (view) => (dispatch, getState) => {
    
    const status = getState().mobile[view];
    const type = (view === 'isMap') ? 'TOGGLE_VIEW' : (view === 'isFilters') ? 'TOGGLE_FILTERS' : (view === 'isNav') ? 'TOGGLE_NAV' : 'TOGGLE_TOP';
    
    dispatch({
        type: TYPES[type],
        payload: !status
    })
    
}
