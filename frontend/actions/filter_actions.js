import {fetchSpots} from '../actions/spots_actions';

export const UPDATE_FILTER = "FILTER";

const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter,
    value: value
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchSpots(getState().ui.filters)(dispatch);
};

