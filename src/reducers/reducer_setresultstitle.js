import TYPES from 'actions/action_types';

const initialValue = 'Polecane restauracje';

export default function(state = initialValue, action) {
    
    switch(action.type) {
        case TYPES.SET_RESULTS_TITLE:
            return action.payload;
        default:
            return state;
    }
    
}