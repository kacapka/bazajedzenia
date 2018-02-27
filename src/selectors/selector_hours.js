import { createSelector } from 'reselect';
import { getCornerById } from './selector_corner';

export const getHours = id => createSelector(getCornerById, corner => {
    
    //if(!corner) return;
    
    //console.log(corner);
    
   /* let open = [];
    let delivery = [];
    
    corner.dayRanges.forEach(day => {
        (day.type === 1) ? open.push(day) : delivery.push(day);
    });
    
    return {
        open,
        delivery
    }*/
    
    console.log(corner);
    
});