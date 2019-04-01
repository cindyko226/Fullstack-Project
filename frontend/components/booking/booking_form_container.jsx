import {connect} from 'react-redux';
import BookingForm from './booking_form';
import { createBooking, fetchBookings} from '../../actions/booking_actions';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const msp =(state, ownProps) => {
    return({
        form: {check_in: null,
        check_out: null,
        guest_number: 1,
        focusedInput: null,
        spotId: ownProps.spot.id},
        currentUser: state.entities.users[state.session.id],
        spotId: ownProps.spot.id,
        formType: "Request to Book"
        
    })
};

const mdp = dispatch => {
    return({
        formAction: (booking) => dispatch(createBooking(booking)),
        openModal: (modal) => dispatch(openModal(modal)),
    })
}

export default withRouter(connect(msp, mdp)(BookingForm));