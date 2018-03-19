import { createSelector } from 'reselect';

const getCorners = state => state.data.corners;
export const getCornerById = id => createSelector(getCorners, corners => corners.filter(corner => corner.id == id).pop());