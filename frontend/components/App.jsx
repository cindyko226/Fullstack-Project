import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';


import { Switch, Route} from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>

        <Switch>
            {/* <Route path='/spots' component={SpotsIndexContainer} ></Route> */}
        </Switch>


    </div>
)

export default App;