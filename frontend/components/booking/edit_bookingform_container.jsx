import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createBooking, updateBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import EditBookingForm from './booking_index_item';

const msp = (state, ownProps) => {
    // debugger
    return ({
        booking: state.entities.booking[ownProps.match.params.bookingId],
        // bookings: Object.values(state.entities.bookings),
        currentUser: state.entities.users[state.session.id],
        // spotId: ownProps.spot.id
    })
};

const mdp = dispatch => {
    return ({
        updateBooking: (booking) => dispatch(updateBooking(booking)),
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        // fetchBookings: () => dispatch(fetchBookings())
    })
}

export default withRouter(connect(msp, mdp)(BookingForm));