import { createSelector } from 'reselect';

const getCorners = state => state.data.resultCorners;
export const getCornersId = createSelector(getCorners, corners => {
    return corners.map(corner => {
        if(!corner) return;
        return corner.id;
    })
});

export const getAddress = state => state.map.address;
export const getMarker = state => state.map.corner;
export const getActiveMarkers = state => state.map.activeMarkers;