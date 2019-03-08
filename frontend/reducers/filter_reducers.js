
import {UPDATE_FILTER, CLEAR_FILTER}  from '../actions/filter_actions';

const defaultFilters = {
    bounds: {},
    price: [1, 600],
    
}

const filtersReducer = (state = defaultFilters, action) => {
    // debugger 
    Object.freeze(state);
    switch(action.type){
        case UPDATE_FILTER:
          return Object.assign({}, state, {[action.filter] : action.value});
        case CLEAR_FILTER:
            return state;
        default:
          return state;
    }
}

export default filtersReducer;