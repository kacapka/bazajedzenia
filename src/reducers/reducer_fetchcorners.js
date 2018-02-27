import TYPES from 'actions/action_types';;

export default function(state = [], action) {
    
    switch(action.type) {
        case TYPES.FETCH_ALL_CORNERS: 
            return action.payload;
        default: 
            return state;
    }
    
}