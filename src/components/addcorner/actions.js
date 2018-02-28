import TYPES from 'actions/action_types';

export const setStep = status  => (dispatch, getState) => {
    
    let step = getState().addCorner.step;
    
    switch(status) {
        case 'back':
            step --;
            break;
        case 'forward':
            step ++;
            break;    
        default:
            step = 1;
    
    } 
     
    dispatch({
        type: TYPES.SET_STEP,
        payload: step
    })
    
}