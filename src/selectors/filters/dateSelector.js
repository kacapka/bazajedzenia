import { createSelector } from 'reselect';
import { filterByTime } from 'utils/bj_filters';

//DATE FILTER
const getCorners = state => state.data.corners;
const getDate = state => state.filter.checkbox.chooseDate;
const getDelivery = state => state.filter.checkbox.delivery;
export const getInputTime = state => state.filter.time;
const getDay = state => state.filter.day;

export const filterByDate = createSelector(
    [ getCorners, getDate, getInputTime, getDay, getDelivery ],
    (corners, date, time, day, delivery) => {
        
        if(!date) return corners;
        
        const dayId = (day === 0) ? 7 : day;
        
        //according to corners data last parameter is 1 wich is day type(1 - open hours, 2 - delivery hours)
        //this way when delivery checkbox is marked we only search for delivery hours
        const dayType = delivery ? 2 : 1;
        
        const userCorners = filterByTime(corners, time, dayId, dayType);
        
        return userCorners;
    
    }
);