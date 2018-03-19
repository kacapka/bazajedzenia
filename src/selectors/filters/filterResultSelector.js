import _ from 'underscore';
import { createSelector } from 'reselect';

import { filterByKitchen } from './kitchenSelector';
import { filterByDelivery } from './deliverySelector';
import { filterByOpenNow } from './openSelector';
import { filterByDate } from './dateSelector';


//if certain filter is empty -not selected- skip filtering 
//and return all corners
//this way when user didn't select a filter - it will not be used
export const getUserCorners = createSelector(
    [filterByKitchen, filterByDelivery, filterByOpenNow, filterByDate],
    (kitchen, delivery, openNow, date) => {
               
        return _.intersection(kitchen, delivery, openNow, date);
        
    }
);