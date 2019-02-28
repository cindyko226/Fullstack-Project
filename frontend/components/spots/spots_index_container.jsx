import {connect} from 'react-redux';
import SpotsIndex from './spots_index';
import { logout } from '../../actions/session_actions';

const msp = (state) => {
    return({
        currentUser: state.entities.users[state.session.id]
    })
}


const mdp = (dispatch) => {
    return({
        logout: () => dispatch(logout())
    })
}


export default connect(msp, mdp)(SpotsIndex);