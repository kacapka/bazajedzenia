import { createSelector } from 'reselect';

//DELIVERY FILTER
const getCorners = state => state.data.corners;
const getDelivery = state => state.filter.checkbox.delivery;

const getDate = state => state.filter.checkbox.chooseDate;
const getOpenNow = state => state.filter.checkbox.openNow;

const getInputTime = state => state.filter.time;
const getDay = state => state.filter.day;

export const filterByDelivery = createSelector(
    [ getCorners, getDelivery ],
    (corners, delivery) => {
        
        if(!delivery) return corners;
        
        const userCorners = corners.filter(corner => {
            if(!corner.dayRanges) return;
            
            if(openNow) {
                
            } else if(chooseDate) {
                
            } else {
                return corner.dayRanges.some(day => {
                    return day.type === 2;
                })   //it is ok normal, but try to filter corners by delivery and check if any onf checkbox is selected then delivery works with delivery hours not only opening hours + delivery any time  
            }
            
               
        });
        
        console.log(userCorners)
        
        return userCorners;
        
    }
);