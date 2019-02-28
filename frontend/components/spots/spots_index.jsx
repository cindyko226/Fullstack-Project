import React from 'react';
import {withRouter} from 'react-router-dom';


class SpotsIndex extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div className="home-page-greeting">
            <p className="welcome">Hello, {this.props.currentUser.username}</p>
            <button onClick={this.props.logout} className="home-logout" >Logout</button>
          </div>
           
        )
    }


}

export default withRouter(SpotsIndex);