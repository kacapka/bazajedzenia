import TYPES from 'actions/action_types';

const initialState = {
    delivery: false,
    openNow: false,
    chooseDate: false
}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case TYPES.CHECKBOX_SELECT: 
            return {...state, ...action.payload}
        default:
            return state;
    }
}