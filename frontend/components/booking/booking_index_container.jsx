import BookingIndex from './booking_index';
import {connect} from 'react-redux';
import {fetchBookings, deleteBooking} from '../../actions/booking_actions';
import {fetchSpots} from '../../actions/spots_actions';
import {withRouter} from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const msp = (state) => {
        
    return({
        currentUser: state.entities.users[state.session.id],
        bookings: Object.values(state.entities.bookings),
        spots: state.entities.spots
    })
}

const mdp = (dispatch) => {
    return({
        fetchBookings: () => dispatch(fetchBookings()),
        deleteBooking: (id) => dispatch(deleteBooking(id)),
        fetchSpots: () => dispatch(fetchSpots()),
        openModal: modal => dispatch(openModal(modal)),

    })
}

export default withRouter(connect(msp, mdp)(BookingIndex));