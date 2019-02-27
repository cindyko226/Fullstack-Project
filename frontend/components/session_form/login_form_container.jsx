import {connect } from 'react-redux';
import SessionForm from './session_from';
import {login} from '../../actions/session_actions';
import React from 'react';
import {openModal, closeModal} from '../../actions/modal_actions';


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

export default connect(msp, mdp)(SessionForm);