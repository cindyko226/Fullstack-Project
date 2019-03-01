import React from 'react';
import {withRouter} from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import NavBarContainer from '../nav-bar/nav_bar_container';
import {Link} from 'react-router-dom';

class SpotsIndex extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchSpots();
    }

    render(){
        return(
        <div className="spots-index-page">
            <div className="home-page-greeting">
              <Link to="/" ><div className="logo-png" ></div></Link>
              <div className="welcome-top" >
              <NavBarContainer/>
               {/* <GreetingContainer/> */}
              {/* <button onClick={this.props.logout} className="home-logout" >Logout</button> */}
              </div>
            </div>

            <div className="index-page-container">
                <div className="main-container">
                    {/* <p className="welcome">Start planning your trip, {this.props.currentUser.username}</p> */}
                    <p className="index-title">Where to stay</p>
                    <div>
                        <h1 className="index-title">Homes in San Francisco</h1>
                    </div>

                    <div>
                        <h1 className="index-title">Homes in Los Angeles</h1>
                    </div>

                    <div>
                        <h1 className="index-title" >Homes in San Diego</h1>
                    </div>

                    <div>
                        <h1 className="index-title" >Homes in San Jose</h1>
                    </div>
                </div>

                <div className="index-map">
                    <h1>Map Here</h1>
                </div>

            </div>

        </div>
           
        )
    }


}

export default withRouter(SpotsIndex);