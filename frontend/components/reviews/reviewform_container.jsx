import {connect} from 'react-redux';
import ReviewForm from './review_form';
import {createReview} from '../../actions/review_actions';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const msp = (state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.id],
        spotId: ownProps.spot.id
    })

}

const mdp = dispatch => {
    return({
        createReview: (review) => dispatch(createReview(review)),
        openModal: modal => dispatch(openModal(modal)),
    })
}


export default withRouter(connect(msp, mdp)(ReviewForm));