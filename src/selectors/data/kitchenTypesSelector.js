import { createSelector } from 'reselect';
import bjFilters from 'utils/bj_filters';

const getCorners = state => state.data.corners;
export const getKitchenTypes = createSelector(
    getCorners, 
    corners => {
        const kitchenTypes = bjFilters.getKitchenTypes(corners);
        
        return kitchenTypes.map(type => {
            return {
                value: type,
                label: type
            }
        })
    }
)