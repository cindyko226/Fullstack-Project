import {connect } from 'react-redux';
import SessionForm from './session_form';
import {login, clearErrors} from '../../actions/session_actions';
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
            <button className="form-signup-button" onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: ()=>dispatch(clearErrors())
    })
}

export default withRouter(connect(msp, mdp)(SessionForm));