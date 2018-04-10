import { createSelector } from 'reselect';
import moment from 'moment';
import { getSec, getDayId }  from 'utils/bj_time';
import { filterByTime } from 'utils/bj_filters';

moment.locale('pl');

//OPEN NOW FILTER
const getCorners = state => state.data.corners;
const getOpenNow = state => state.filter.checkbox.openNow;
const getDelivery = state => state.filter.checkbox.delivery;

export const filterByOpenNow = createSelector(
    [ getCorners, getOpenNow, getDelivery ],
    (corners, openNow, delivery) => {
        
        if(!openNow) return corners;
        
        //get current time and day
        const nowInSec = getSec(moment());
        const nowDayId = getDayId(moment());
        
        //according to corners data last parameter is 1 wich is day type(1 - open hours, 2 - delivery hours)
        //this way when delivery checkbox is marked we only search for delivery hours
        const dayType = delivery ? 2 : 1;
        
        console.log(dayType);
        console.log(nowInSec);
        //console.log(nowInSec);
            
        const userCorners = filterByTime(corners, nowInSec, nowDayId, dayType);
    
        return userCorners;
    
    }
);