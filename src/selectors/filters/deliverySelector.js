import { createSelector } from 'reselect';

//DELIVERY FILTER
const getCorners = state => state.data.corners;
const getDelivery = state => state.filter.checkbox.delivery;

export const filterByDelivery = createSelector(
    [ getCorners, getDelivery ],
    (corners, delivery) => {
        
        if(!delivery) return corners;
        
        const userCorners = corners.filter(corner => {
            if(!corner.dayRanges) return;
            return corner.dayRanges.some(day => {
                return day.type === 2;
            })    
        });
        
        return userCorners;
        
    }
);