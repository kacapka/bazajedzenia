import { SET_RESULTS_TITLE } from 'actions/index';

const initialValue = 'Polecane restauracje';

export default function(state = initialValue, action) {
    
    switch(action.type) {
        case SET_RESULTS_TITLE:
            return action.payload;
        default:
            return state;
    }
    
}