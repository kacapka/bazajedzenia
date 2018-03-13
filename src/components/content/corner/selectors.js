import { createSelector } from 'reselect';

const getComments = state => state.comments;
const getUser = state => state.user;
export const createComment = id => createSelector(
    [ getComments, getUser ],
    (comments, user) => ({
        id,
        rate: comments.rate, 
        content: comments.input,
        userName: user.displayName,
        userPhoto: user.photoURL
    })
); 