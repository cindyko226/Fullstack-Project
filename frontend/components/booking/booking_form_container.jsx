import {connect} from 'react-redux';
import BookingForm from './booking_form';
import {createBooking} from '../../actions/booking_actions';
import {openModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

const msp =(state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.id],
        spotId: ownProps.spot.id
    })
};

const mdp = dispatch => {
    return({
        createBooking: (booking) => dispatch(createBooking(booking)),
        openModal: (modal) => dispatch(openModal(modal))
    })
}

export default withRouter(connect(msp, mdp)(BookingForm));