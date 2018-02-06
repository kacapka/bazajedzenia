import { GET_ADDRESS } from 'actions/index';

export default function(state = null, action) {
        
    switch(action.type) {
        case GET_ADDRESS: 
            return action.payload;
        default:
            return state;
    }   
}