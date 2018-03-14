import TYPES from 'actions/action_types';
import { createComment } from './selectors';
import { addCommentDB, getCommentsDB } from '../../../firebase';

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
    dispatch(saveComment(comment, id));
    
};

const saveComment = (comment, id) => {
    
    return (dispatch) => {
        addCommentDB(comment, id)
            .then(res => {
                dispatch({
                    type: 'COMMENT_ADDED'
                })
            })
            .catch(error => {
                dispatch({
                    type: 'COMMENT_ERROR'
                })
            })
    }
    
}

export const fetchComments = id => {
    
    return (dispatch) => {
        getCommentsDB(id).on('value', comments => {
            dispatch({
                type: TYPES.FETCH_COMMENTS,
                payload: comments.val()
            })
        })
    }
    
}