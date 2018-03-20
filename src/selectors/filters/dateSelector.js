import { createSelector } from 'reselect';
import { filterByTime } from 'utils/bj_filters';

//DATE FILTER
const getCorners = state => state.data.corners;
const getDate = state => state.filter.checkbox.chooseDate;
const getTime = state => state.filter.time;
const getDay = state => state.filter.day;

export const filterByDate = createSelector(
    [ getCorners, getDate, getTime, getDay ],
    (corners, date, time, day) => {
        
        if(!date) return corners;
        
        const dayId = (day === 0) ? 7 : day;
        
        const userCorners = filterByTime(corners, time, dayId);
        
        return userCorners;
    
    }
);