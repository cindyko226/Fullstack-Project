import React from 'react';
import {Link} from 'react-router-dom';
import GreetingSearchBar from './greeting_search_bar';


export default ({currentUser, logout, openModal}) => {

    const display = currentUser ? (
        <div className="home-page-greeting">
            <div className="logo-png" ></div>
            <div className="welcome-top" >
            <p className="welcome">Hello, {currentUser.username}</p>
            <button onClick={logout} className="home-logout" >Logout</button>
            </div>
        </div>
    ) : (
        <div className="home-page-button-greeting">
            <div className="logo-png" ></div>
            <div className="home-nav" >
                <div className="nav-login">
                <button onClick={() => openModal('login')} className="home-login">Log In</button>
                </div>

                <div className="nav-signup">
                <button onClick={() => openModal('signup')} className="home-signup" >Sign Up</button>
                </div>
            </div>
        </div>
    )
    
    return(
        <div className='home-page'>
            {display}
            <div className="splash-container" >

              <div> 
                  <h1 className="app-name">Plan your next trip</h1>
              </div>

              <div>
                  <div className="home-page-search">
                        <GreetingSearchBar />
                        {/* <div className="home-icon">
                        <i className="fa fa-search" aria-hidden="true"></i>

                        <input className="search-input" type="text" placeholder='Try San Francisco' />
                        
                    
                        </div> */}
                      
                        <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
                      
                  </div>
              </div>
            </div>
            
        </div>
    

    )
}