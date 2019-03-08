import {fetchSpots} from '../actions/spots_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";

const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter,
    value: value
});

const clearFilters = () => ({
    type: CLEAR_FILTER,
})

export function updateFilter(filter, value) {
    // debugger
    return (dispatch, getState) => {
        dispatch(changeFilter(filter, value));
        return dispatch(fetchSpots(getState().ui.filters));
    }
}

export function resetFilters(filter, value) {
    return(dispatch, getState) => {
        dispatch(clearFilters(filter, value));
        return dispatch(fetchSpots(getState().ui.filters));
    }
}

