import { RECEIVE_SPOTS, RECEIVE_SPOT} from '../actions/spots_actions';
import merge from 'lodash/merge';

const spotsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_SPOTS:
          return action.spots;
        case RECEIVE_SPOT:
          newState = merge({}, state, {[action.spot.id]:action.spot});
            return newState;
        default:
          return state;
    }
}

export default spotsReducer;