import {RECEIVE_BOOKINGS, RECEIVE_BOOKING, DELETE_BOOKING} from '../actions/booking_actions';


const bookingsReducer = (state ={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_BOOKINGS:
            return action.bookings;
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]:action.booking})
        case DELETE_BOOKING:
            const newBookings = Object.assign({}, state);
            delete newBookings[action.bookingId.id];
            return newBookings;
        default: 
            return state;
    }
}

export default bookingsReducer;