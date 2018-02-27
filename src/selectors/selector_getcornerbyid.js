import { createSelector } from 'reselect';

const getCorners = state => state.corners;
export const getCornerById = id => createSelector(getCorners, corners => corners.filter(corner => corner.id == id).pop());