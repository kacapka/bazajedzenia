import { createSelector } from 'reselect';
import _ from 'underscore';

export const getReviews = state => state.reviews;
const getUser = state => state.data.user;
export const createComment = id => createSelector(
    [ getReviews, getUser ],
    (reviews, user) => ({
        id,
        uid: user.uid,
        rate: reviews.rate, 
        content: reviews.input,
        userName: user.displayName.split(' ')[0],
        userPhoto: user.photoURL
    })
); 

export const getComments = state => state.reviews.comments;
export const allowUserAddComment = createSelector(
    [ getUser, getComments ],
    (user, comments) => {
        let allow = false;
        _.map(comments, (value, key) => {
            if(value.uid === user.uid) allow = true;
        });
        
        return allow;
    }
)
