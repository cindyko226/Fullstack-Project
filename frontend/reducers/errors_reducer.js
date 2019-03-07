import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import spotsErrorsReducer from './spots_errors_reducer';
import bookingsErrorsReducer from './bookings_errors_reducer';
import reviewsErrorsReducer from './reviews_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    spots: spotsErrorsReducer,
    bookings: bookingsErrorsReducer,
    reviews: reviewsErrorsReducer
})

export default errorsReducer;