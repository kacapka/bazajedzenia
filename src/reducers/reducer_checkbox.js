import { CHECKBOX_SELECT} from 'actions/index';

const initialState = {
    delivery: false,
    openNow: false,
    chooseDate: false
}

export default function(state = initialState, action) {
    
    switch(action.type) {
        case CHECKBOX_SELECT: 
            return {...state, ...action.payload}
        default:
            return state;
    }
}