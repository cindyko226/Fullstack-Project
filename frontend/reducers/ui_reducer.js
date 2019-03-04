import {combineReducers} from 'redux';
import modal from './modal_reducer';
import filtersReducer from './filter_reducers';
import searchReducer from './search_reducer';

export default combineReducers({
    modal,
    filters: filtersReducer,
    search: searchReducer
});