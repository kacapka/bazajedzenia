import { createSelector } from 'reselect';

const getCorners = state => state.userCorners;
export const getCornersId = createSelector(getCorners, corners => corners.map(corner => corner.id));

 
    