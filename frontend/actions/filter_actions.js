import {fetchSpots} from '../actions/spots_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter,
    value: value
});

export function updateFilter(filter, value) {
    // debugger
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return dispatch(fetchSpots(getState().ui.filters));
    }
}

