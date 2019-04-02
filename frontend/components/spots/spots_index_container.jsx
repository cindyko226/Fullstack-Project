import {connect} from 'react-redux';
import SpotsIndex from './spots_index';
import { logout } from '../../actions/session_actions';
import {fetchSpots} from '../../actions/spots_actions';
import {resetFilters} from '../../actions/filter_actions';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

const msp = (state, ownProps) => {
    // debugger
    const sf = Object.values(state.entities.spots).filter(spot => spot.city === 'San Francisco').slice(0, 6);
    const la = Object.values(state.entities.spots).filter(spot => spot.city === 'Los Angeles').slice(0, 6);
    const sd = Object.values(state.entities.spots).filter(spot => spot.city === 'San Diego').slice(0, 6);
    const sj = Object.values(state.entities.spots).filter(spot => spot.city === 'San Jose').slice(0, 6);
    return({
        currentUser: state.entities.users[state.session.id],
        spots: Object.values(ownProps.spots),
        sf,
        la,
        sd,
        sj,
        filters: state.ui.filters
    })
}


const mdp = (dispatch) => {
    return({
        logout: () => dispatch(logout()),
        fetchSpots: () => dispatch(fetchSpots()),
        resetFilters: () => resetFilters()
    });
}


export default connect(msp, mdp)(SpotsIndex);