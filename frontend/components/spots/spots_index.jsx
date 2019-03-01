import React from 'react';
import {withRouter} from 'react-router-dom';


class SpotsIndex extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <div className="home-page-greeting">
              <div className="logo-png" ></div>
              <div className="welcome-top" >
              
              <button onClick={this.props.logout} className="home-logout" >Logout</button>
              </div>
            </div>

            <div>
                <div className="main-container">
                    <p className="welcome">Start planning your trip, {this.props.currentUser.username}</p>
                    <p className="index-title">Where to stay</p>
                    <div>
                        <h1 className="index-title">Homes in San Francisco</h1>
                    </div>

                    <div>
                        <h1 className="index-title">Homes in Los Angeles</h1>
                    </div>

                    <div>
                        <h1 className="index-title" >Home in San Diego</h1>
                    </div>

                    <div>
                        <h1 className="index-title" >Home in San Jose</h1>
                    </div>
                </div>

            </div>

        </div>
           
        )
    }


}

export default withRouter(SpotsIndex);