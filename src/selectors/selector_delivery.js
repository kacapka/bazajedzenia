import { createSelector } from 'reselect';

//DELIVERY FILTER
const getCorners = (state) => state.corners;
const getDelivery = (state) => state.checkbox.delivery;

export const filterByDelivery = createSelector(
    [ getCorners, getDelivery ],
    (corners, delivery) => {
        
        if(!delivery) return corners;
        
        const userCorners = corners.filter(corner => {
            return corner.dayRanges.some(day => {
                return day.type === 2;
            })    
        });
        
        return userCorners;
        
    }
);