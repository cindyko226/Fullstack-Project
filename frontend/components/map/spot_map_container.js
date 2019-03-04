import { connect } from 'react-redux';
import SpotMap from './spot_map';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { updateFilter } from '../../actions/filter_actions';

const msp = (state, ownProps) => {
    // debugger
    return ({
        spots: Object.values(state.entities.spots)
    });
}

const mdp = (dispatch) => {
    return ({
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
    })
}

export default connect(msp, mdp)(SpotMap);