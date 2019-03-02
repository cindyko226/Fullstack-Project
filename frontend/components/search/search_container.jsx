import {connect} from 'react-redux';
import Search from './search';
import { logout } from '../../actions/session_actions';
import { fetchSpots } from '../../actions/spots_actions';

const msp = (state) => ({
    spots: Object.values(state.entities.spots)
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchSpots: () => dispatch(fetchSpots())
})

export default connect(msp, mdp)(Search);