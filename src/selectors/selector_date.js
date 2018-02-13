import { createSelector } from 'reselect';
import bjFilters from '../utils/bj_filters';

//DATE FILTER
const getCorners = (state) => state.corners;
const getDate = (state) => state.checkbox.chooseDate;
const getTime = (state) => state.userTime;
const getDay = (state) => state.activeDay;

export const filterByDate = createSelector(
    [ getCorners, getDate, getTime, getDay ],
    (corners, date, time, day) => {
        
        if(!date) return corners;
        
        const dayId = (day === 0) ? 7 : day;
        
        const userCorners = bjFilters.filterByTime(corners, time, dayId);
        
        return userCorners;
    
    }
);