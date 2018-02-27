import _ from 'underscore';
import { createSelector } from 'reselect';
import { filterByKitchen } from './selector_kitchen';
import { filterByDelivery } from './selector_delivery';
import { filterByOpenNow } from './selector_opennow';
import { filterByDate } from './selector_date';


//if certain filter is empty -not selected- skip filtering 
//and return all corners
//this way when user didn't select a filter - it will not be used
export const getUserCorners = createSelector(
    [filterByKitchen, filterByDelivery, filterByOpenNow, filterByDate],
    (kitchen, delivery, openNow, date) => {
               
        return _.intersection(kitchen, delivery, openNow, date);
        
    }
);