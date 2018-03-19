import { createSelector } from 'reselect';
import moment from 'moment';
import bjTime from 'utils/bj_time';
import bjFilters from 'utils/bj_filters';

//OPEN NOW FILTER
const getCorners = state => state.data.corners;
const getOpenNow = state => state.filter.checkbox.openNow;

export const filterByOpenNow = createSelector(
    [ getCorners, getOpenNow ],
    (corners, openNow) => {
        
        if(!openNow) return corners;
        
        //get current time and day
        const nowInSec = bjTime.getSec(moment());
        const nowDayId = bjTime.getDayId(moment());
        
        const userCorners = bjFilters.filterByTime(corners, nowInSec, nowDayId);
    
        return userCorners;
    
    }
);