import {connect} from 'react-redux';
import SpotsIndex from './spots_index';
import { logout } from '../../actions/session_actions';
import {fetchSpots} from '../../actions/spots_actions';

const msp = (state, ownProps) => {
    // debugger
    const sf = Object.values(state.entities.spots).filter(spot => spot.city === 'San Francisco').slice(0, 2);
    return({
        currentUser: state.entities.users[state.session.id],
        spots: Object.values(ownProps.spots),
        sf
    })
}


const mdp = (dispatch) => {
    return({
        logout: () => dispatch(logout()),
        fetchSpots: () => dispatch(fetchSpots())
    })
}


export default connect(msp, mdp)(SpotsIndex);