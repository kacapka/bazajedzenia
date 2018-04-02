import TYPES from './action_types';

export const toggleView = (view) => (dispatch, getState) => {
    
    const status = getState().mobile[view];
    const type = (view === 'isFilters') ? 'TOGGLE_FILTERS' : (view === 'isMap') ? 'TOGGLE_VIEW' : 'TOGGLE_TOP';
    
    dispatch({
        type: TYPES[type],
        payload: !status
    })
    
}
