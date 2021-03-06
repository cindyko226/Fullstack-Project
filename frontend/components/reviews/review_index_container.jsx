import ReviewIndex from './review_index';
import { connect } from 'react-redux';
import { fetchReviews, deleteReview} from '../../actions/review_actions';
import {fetchSpots} from '../../actions/spots_actions';
import {withRouter} from 'react-router-dom';


const msp = (state, ownProps) => {
    const reviews = Object.values(state.entities.reviews).filter(
      review => review.spotId === parseInt(ownProps.match.params.spotId)
    );
    // debugger
    return({
       
        currentUser: state.entities.users[state.session.id],
        reviews,
        spots: state.entities.spots
    })
}


const mdp = (dispatch) => {
    return({
        fetchReviews: () => dispatch(fetchReviews()),
        deleteReview: (id) => dispatch(deleteReview(id)),
        fetchSpots: () => dispatch(fetchSpots())
    })
}


export default withRouter(connect(msp, mdp)(ReviewIndex));