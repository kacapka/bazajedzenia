import { createSelector } from 'reselect';

//KITCHEN TYPES FILTER
const getCorners = (state) => state.corners;
const getKitchen = (state) => state.kitchen;

export const filterByKitchen = createSelector(
    [ getCorners, getKitchen ],
    (corners, kitchen) => {
        
        if(kitchen.length === 0) return corners;
        
        const userKitchen = kitchen.map(type => {
            return type.value;
        });
        
        const userCorners = corners.filter(corner => {
            return corner.cornerTypes.some(type => {
                if(userKitchen.includes(type.foodType.name)) {
                    return corner;
                }         
            });
        });
        
        return userCorners;  
    }
);



