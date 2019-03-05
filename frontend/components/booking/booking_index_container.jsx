import BookingIndex from './booking_index';
import {connect} from 'react-redux';
import {fetchBookings, deleteBooking} from '../../actions/booking_actions';
import {fetchSpots} from '../../actions/spots_actions';
import {withRouter} from 'react-router-dom';



const msp = (state) => {
    return({
        bookings: Object.values(state.entities.bookings),
        spots: state.entities.spots
    })
}

const mdp = (dispatch) => {
    return({
        fetchBookings: () => dispatch(fetchBookings()),
        fetchSpots: () => dispatch(fetchSpots()),
        deleteBooking: (id) => dispatch(deleteBooking(id))
    })
}

export default withRouter(connect(msp, mdp)(BookingIndex));