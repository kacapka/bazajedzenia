import { createSelector } from 'reselect';

const getCorners = state => state.data.resultCorners;
export const getCornersId = createSelector(getCorners, corners => corners.map(corner => corner.id));

export const getAddress = state => state.map.address;
export const getMarker = state => state.map.corner;