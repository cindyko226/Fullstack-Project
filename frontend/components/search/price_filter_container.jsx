import React from 'react';
import PriceFilter from './price_filter';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state) => {
    return ({
        minPrice: state.ui.filters.rate[0],
        maxPrice: state.ui.filters.rate[1],
    })
}

const mdp = dispatch => {

    return ({
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
        openModal: modal => dispatch(openModal(modal))
    })
}

export default connect(msp, mdp)(PriceFilter);
