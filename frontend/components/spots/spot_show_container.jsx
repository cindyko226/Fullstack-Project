import {connect} from 'react-redux';
import {fetchSpot, clearErrors} from '../../actions/spots_actions';
import SpotShow from './spot_show';
import {openModal} from '../../actions/modal_actions';
import {fetchReviews} from '../../actions/review_actions';


const msp = (state, ownProps) => {
//   debugger
    return({
        spot: state.entities.spots[ownProps.match.params.spotId],
        currentUserId: state.session.currentUserId,
        
    })
   
}


const mdp = (dispatch) => ({
    fetchSpot: id => dispatch(fetchSpot(id)),
    openModal: () => dispatch(openModal()),
    clearErrors: () => dispatch(clearErrors()),
    fetchReviews: () => dispatch(fetchReviews())
})


export default connect(msp, mdp)(SpotShow);