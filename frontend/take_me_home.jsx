import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

import { logout, signup } from "./util/session_api_util";
import {login} from './actions/session_actions';
import configureStore from './store/store';
import { fetchSpots, fetchSpot } from './actions/spots_actions';
import {fetchBookings} from './actions/booking_actions';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
 
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id ]: window.currentUser}
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    ReactDOM.render(<Root store={store} />, root)

    //for testing 
    window.login = login; 
    window.logout = logout; 
    window.signup = signup; 
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchSpots = fetchSpots;
    window.fetchSpot = fetchSpot;
    window.fetchBookings = fetchBookings;

})