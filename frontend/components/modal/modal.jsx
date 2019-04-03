import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewFormContainer from '../reviews/reviewform_container';
import EditBookingFromContainer from '../booking/edit_booking_form_container';
import PriceFilterContainer from '../search/price_filter_container';

function Modal({ modal, closeModal }) {


    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'booking':
            component = <EditBookingFromContainer />; 
            break;
        case 'price':
            component = <PriceFilterContainer />;
            break;
        default:
            return null;
    }
    
    let className;
    if (component === <PriceFilterContainer />) {
        className = "modal-test"
    }else {
        className = "modal-chil"
    }

    
   

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className={className} onClick={e => e.stopPropagation()}>
                {component}
            </div>
           
           

        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);