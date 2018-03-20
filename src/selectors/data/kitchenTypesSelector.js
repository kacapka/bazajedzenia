import { createSelector } from 'reselect';
import { filterKitchenTypes } from 'utils/bj_filters';

const getCorners = state => state.data.corners;
export const getKitchenTypes = createSelector(
    getCorners, 
    corners => {
        const kitchenTypes = filterKitchenTypes(corners);
        
        return kitchenTypes.map(type => {
            return {
                value: type,
                label: type
            }
        })
    }
)