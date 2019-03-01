import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import spotsErrorsReducer from './spots_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    spots: spotsErrorsReducer
})

export default errorsReducer;