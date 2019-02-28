import {connect } from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session_actions';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';
import {withRouter } from 'react-router-dom';

const msp = (state) => {
    return({
        errors: state.errors,
        formType: "Log In"
    })
}

const mdp = (dispatch) => {
    return({
        processForm: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    })
}

export default withRouter(connect(msp, mdp)(SessionForm));