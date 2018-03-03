import { createSelector } from 'reselect';

const getData = state => state.addCorner.data;
const getStep = state => state.addCorner.step;
export const getStepData = createSelector(
    [getData, getStep],
    (data, step) => {
        return data[step].data;
    }
)

export const getItemData = (data) => createSelector(
    getStepData,
    stepData => ({
        ...stepData,
        [data.name]: {
            ...stepData[data.name],
            value: data.value
        }
    })
);
