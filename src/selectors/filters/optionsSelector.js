import { createSelector } from 'reselect';

const getCorners = state => state.data.corners;
export const getOptions = createSelector(
    getCorners, 
    corners => corners.map(corner => {
        let district = corner.district ? corner.district.name : '';
        return {
            label: `${corner.name}  -  ${district}`,
            street: corner.street,
            id: corner.id,
            className: 'select__type--corners'
        }
    })
)