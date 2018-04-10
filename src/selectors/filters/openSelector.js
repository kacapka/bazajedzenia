import { createSelector } from 'reselect';
import moment from 'moment';
import { getSec, getDayId }  from 'utils/bj_time';
import { filterByTime } from 'utils/bj_filters';

//OPEN NOW FILTER
const getCorners = state => state.data.corners;
const getOpenNow = state => state.filter.checkbox.openNow;

export const filterByOpenNow = createSelector(
    [ getCorners, getOpenNow ],
    (corners, openNow) => {
        
        if(!openNow) return corners;
        
        //get current time and day
        const nowInSec = getSec(moment());
        const nowDayId = getDayId(moment());
            
        const userCorners = filterByTime(corners, nowInSec, nowDayId);
    
        return userCorners;
    
    }
);