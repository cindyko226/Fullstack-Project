import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {AuthRoute} from '../util/route_util';

import { Switch} from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>Take Me Home</h1>
            <GreetingContainer />
        </header>

        <Switch>
          <AuthRoute exact path='/login' component={LoginFormContainer} />
          <AuthRoute exact path='/signup' component={SignupFormContainer} />
        </Switch>


    </div>
)

export default App;