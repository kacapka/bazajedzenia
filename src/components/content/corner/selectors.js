import { createSelector } from 'reselect';

const getReviews = state => state.reviews;
const getUser = state => state.user;
export const createComment = id => createSelector(
    [ getReviews, getUser ],
    (reviews, user) => ({
        id,
        rate: reviews.rate, 
        content: reviews.input,
        userName: user.displayName.split(' ')[0],
        userPhoto: user.photoURL
    })
); 