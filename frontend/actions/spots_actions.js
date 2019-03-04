import * as spotsApiUtil from "../util/spots_api_util";

export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_SPOTS_ERRORS = "RECEIVE_SPOTS_ERRORS";
export const CLEAR_SPOTS_ERRORS = "CLEAR_SPOTS_ERRORS";


const receiveSpots = spots => ({
    type: RECEIVE_SPOTS,
    spots: spots
})

const recieveSpot = spot => ({
    type: RECEIVE_SPOT,
    spot: spot 
})


const receiveErrors = errors =>({
    type: RECEIVE_SPOTS_ERRORS,
    errors: errors
})

export const clearErrors = () => ({
    type: CLEAR_SPOTS_ERRORS
})


export const fetchSpots = (filters) => dispatch => (
    spotsApiUtil.fetchSpots(filters)
    .then(spots => dispatch(receiveSpots(spots)),
        errors => dispatch(receiveErrors(errors))
    ) 
)

export const fetchSpot = id => dispatch => (
    spotsApiUtil.fetchSpot(id)
    .then(spot => dispatch(recieveSpot(spot)),
      errors => dispatch(receiveErrors(errors))
    )
)

