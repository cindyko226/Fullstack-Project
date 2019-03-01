import {connect} from 'react-redux';
import SpotsIndex from './spots_index';
import { logout } from '../../actions/session_actions';
import {fetchSpots} from '../../actions/spots_actions';

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id],
        spots: Object.values(state.entities.spots)
    })
}


const mdp = (dispatch) => {
    return({
        logout: () => dispatch(logout()),
        fetchSpots: () => dispatch(fetchSpots())
    })
}


export default connect(msp, mdp)(SpotsIndex);