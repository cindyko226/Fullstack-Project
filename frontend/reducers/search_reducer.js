import {RECEIVE_SEARCH} from '../actions/search_actions';


const SearchReducer = (oldState = {} , action) => {
    Object.freeze(oldState);
   
    switch (action.type) {
        case RECEIVE_SEARCH:
            return Object.assign({}, oldState, action.searchResult);
        default:
            return oldState;
    }

}

export default SearchReducer;