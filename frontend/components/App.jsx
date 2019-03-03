import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import SpotsIndexContainer from './spots/spots_index_container';
import SearchContainer from './search/search_container';
import { Redirect, Switch, Route} from 'react-router-dom';
import SpotShowContainer from './spots/spot_show_container';

const App = () => (
    <div>
        <Modal />
       
        <Switch>
            <Route exact path='/' component={GreetingContainer} />
            <Route exact path='/spots/:spotId' component={SpotShowContainer} />
            <Route exact path='/spots' component={SearchContainer}/>
            <Redirect to="/" />
        </Switch>


    </div>
)

export default App;