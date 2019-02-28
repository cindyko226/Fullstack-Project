import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import SpotsIndexContainer from './spots/spots_index_container';

import { Redirect, Switch} from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            <GreetingContainer />
        </header>

        <Switch>
            <ProtectedRoute exact path='/spots' component={SpotsIndexContainer}/>
            <Redirect to="/" />
        </Switch>


    </div>
)

export default App;