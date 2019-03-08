import {connect} from 'react-redux';
import Search from './search';
import { logout } from '../../actions/session_actions';
import { fetchSpots } from '../../actions/spots_actions';
import { updateFilter, resetFilters} from '../../actions/filter_actions';

const msp = (state) => {
    // debugger
    return ({
        spots: Object.values(state.entities.spots),
        bounds: Object.values(state.ui.filters.bounds),
        rate: state.ui.filters.rate,
    })
}

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchSpots: () => dispatch(fetchSpots()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter,value)),
    resetFilters: () => dispatch(resetFilters())

})

export default connect(msp, mdp)(Search);