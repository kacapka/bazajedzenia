import TYPES from 'actions/action_types';
import { createComment } from './selectors';

export const updateInput = value => ({
    type: TYPES.UPDATE_INPUT,
    payload: value
});

export const updateRates = value => {
    
    if(!value) return {type: 'CANCEL'};
    
    return {
        type: TYPES.UPDATE_RATES,
        payload: value
    }
};

export const addComment = id => (dispatch, getState) => {
   
    const comment = createComment(id)(getState());
    console.log(comment);
    
    dispatch({
        type: 'CANCEL',
        payload: comment
    });
    
};