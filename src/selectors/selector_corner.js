import { createSelector } from 'reselect';
import bjFilters from '../utils/bj_filters';

const getCorners = state => state.corners;
export const getCornerById = id => createSelector(getCorners, corners => {
    let corner = corners.filter(corner => corner.id === parseInt(id,10)).pop();
    if(!corner) return;
    
    let open = [];
    let delivery = [];
    
    corner.dayRanges.forEach(day => {
        day.type === 1 ? open.push(day) : delivery.push(day);
    });
    
    let openingHours = bjFilters.getOpeningHours(open);
    let deliveryHours = bjFilters.getOpeningHours(delivery);
    let hours = {
        pon: [1, openingHours.pon, deliveryHours.pon],
        wt: [2, openingHours.wt, deliveryHours.wt],
        sr: [3, openingHours.sr, deliveryHours.sr],
        czw: [4, openingHours.czw, deliveryHours.czw],
        pt: [5, openingHours.pt, deliveryHours.pt],
        so: [6, openingHours.so, deliveryHours.so],
        nd: [0, openingHours.nd, deliveryHours.nd],
    }
     
    return {
        corner,
        hours
    }
});

