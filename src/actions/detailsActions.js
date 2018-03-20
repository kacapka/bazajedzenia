import TYPES from 'actions/action_types';
import { createComment } from 'selectors/details/detailsSelector';
import { addCommentDB, fetchCommentsDB } from '../firebase';

export const updateInput = value => ({
    type: TYPES.UPDATE_INPUT,
    payload: value
});

export const updateRates = value => {
    
    return {
        type: TYPES.UPDATE_RATES,
        payload: value
    }
};

export const commentFormValidate = (element, value) => {
    
    let error = !value ? 'on' : '';
 
    return {
        type: TYPES.VALIDATE_COMMENT,
        payload: { [element]: error }
    }
    
}

export const resetCommentForm = () => (dispatch) => {
    
    dispatch(updateInput(''));
    dispatch(updateRates(null));
    dispatch({type: TYPES.VALIDATE_RESET})
    
}

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
        fetchCommentsDB(id).on('value', comments => {
            dispatch({
                type: TYPES.FETCH_COMMENTS,
                payload: comments.val()
            })
        })
    }
    
}

