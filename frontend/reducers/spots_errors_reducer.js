import { RECEIVE_SPOTS_ERRORS, CLEAR_SPOTS_ERRORS} from '../actions/spots_actions';

const spotsErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SPOTS_ERRORS:
          return action.errors;
        case CLEAR_SPOTS_ERRORS: 
          return [];
        default:
          return state;
    }
}

export default spotsErrorsReducer;