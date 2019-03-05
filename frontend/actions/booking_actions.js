import * as bookingApiUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";


const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings,
})

const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking,
})

const removeBooking = bookingId => ({
    type: DELETE_BOOKING,
    bookingId,
})

const receiveErrors = errors => ({
    type: RECEIVE_BOOKING_ERRORS,
    errors,
})

export const clearErrors = () => ({
    type: CLEAR_BOOKING_ERRORS,
})

export const fetchBookings = () => dispatch => {
    return bookingApiUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
}

export const createBooking = (booking) => dispatch => {
    return bookingApiUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
    
}

export const updateNBooking = (booking) => dispatch => {
    return bookingApiUtil.updateBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteBooking = id => dispatch => {
    // debugger
    return bookingApiUtil.deleteBooking(id)
    .then(id=> dispatch(removeBooking(id)))
}