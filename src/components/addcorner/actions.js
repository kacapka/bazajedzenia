import TYPES from 'actions/action_types';
import { getItemData } from './selectors';

export const setStep = status  => (dispatch, getState) => {
    
    let step = getState().addCorner.step;
    
    switch(status) {
        case 'back':
            step --;
            break;
        case 'forward':
            step ++;
            break; 
        case 'close':
            step = 0;
            break;
        default:
            step = 0;
    
    } 
     
    dispatch({
        type: TYPES.SET_STEP,
        payload: step
    })
    
}

export const updateStep = data => (dispatch, getState) => {

    let step = getState().addCorner.step;
    let update = getItemData(data)(getState());
   
    dispatch({
        type: TYPES.UPDATE_STEP,
        payload: {
            step,
            update
        }
    })
    
}