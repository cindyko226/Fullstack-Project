import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, clearErrors} from '../../actions/session_actions';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';
const msp = (state) => {
    return({
        errors: state.errors,
        formType: "Sign Up"
    })
}

const mdp = (dispatch) => {
    return({
        processForm: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="form-login-button" onClick={() => dispatch(openModal('login'))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())

    })
}

export default withRouter(connect(msp, mdp)(SessionForm));