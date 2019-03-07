import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import SpotsIndexContainer from './spots/spots_index_container';
import SearchContainer from './search/search_container';
import { Redirect, Switch, Route} from 'react-router-dom';
import SpotShowContainer from './spots/spot_show_container';
import "react-dates/initialize";
import 'react-dates/lib/css/_datepicker.css';
import BookingIndexContainer from '../components/booking/booking_index_container';
import ReviewFormContainer from '../components/reviews/reviewform_container';

const App = () => (
    <div>
        <Modal />
       
        <Switch>
            <ProtectedRoute exact path="/bookings" component={BookingIndexContainer} />
            <ProtectedRoute exact path="/reviews" component={ReviewFormContainer} />

            <Route exact path='/' component={GreetingContainer} />
            <Route exact path='/spots/:spotId' component={SpotShowContainer} />
            <Route path='/search' component={SearchContainer} />
            <Redirect to="/" />
        </Switch>


    </div>
)

export default App;