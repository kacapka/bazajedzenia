import { createSelector } from 'reselect';

export const getCorners = state => state.data.corners;
export const getResultCorners = state => state.data.resultCorners;
export const getUser = state => state.data.user;
const getPhotos = state => state.data.images;

export const getCornerPhotos = id => createSelector(getPhotos, photos => photos.byHash[id]);
