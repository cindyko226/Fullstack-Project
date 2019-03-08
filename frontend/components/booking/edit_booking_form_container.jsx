import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking, updateBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    // filter(spot => spot.city === 'San Francisco').slice(0, 6);
    // let booking = Object.values(state.entities.bookings).filter(booking => booking.spotId === ownProps.spot.id )[0];
    // debugger
    let booking = state.entities.bookings[ownProps.match.params.bookingId];
    return ({
        form: {
            id: booking.id,
            guest_number: booking.guestNumber, 
            focusedInput: null,
            spotId: ownProps.spot.id,
            oldCheckIn: booking.checkIn,
            oldCheckOut: booking.checkOut
        },
        currentUser: state.entities.users[state.session.id],
        formType: "Update",
        spotId: ownProps.spot.id,
        bookingId: ownProps.bookingId,

    })
};

const mdp = dispatch => {
    return ({
        formAction: (booking) => dispatch(updateBooking(booking)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        // fetchBookings: () => dispatch(fetchBookings())
    })
}

export default withRouter(connect(msp, mdp)(BookingForm));