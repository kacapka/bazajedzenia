import { createSelector } from 'reselect';

export const getCorners = state => state.data.corners;
export const getResultCorners = state => state.data.resultCorners;
export const getUser = state => state.data.user;

const getPhotos = state => state.data.images;

export const getCornerPhotos = id => createSelector(getPhotos, photos => photos.byHash[id]);

export const getBool = state => state.data.load.isMore;
const getSize = state => state.data.load.size;

export const getCornersToLoad = createSelector(
    [getResultCorners, getBool, getSize],
    (corners, isMore, size) => {
        let newItems
        
        if(isMore){
            newItems = corners.slice(0, size);
        } else {
            newItems = corners;
        }
        
        return newItems;
    }
)
