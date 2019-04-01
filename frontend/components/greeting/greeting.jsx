import {Link} from 'react-router-dom';
import GreetingSearchBar from './greeting_search_bar';
import React from 'react';


export default ({currentUser, logout, openModal}) => {

    const display = currentUser ? (
      <div className="home-page-greeting-splash">
             <div className="logo-png" ></div>
        <div className="welcome-top">
          <p className="welcome-splash">Hello, {currentUser.username}</p>
          <button onClick={logout} className="home-logout-splash">
            Logout
          </button>
        </div>
      </div>
    ) : (
      <div className="home-page-button-greeting">
        <div className="logo-png" />
        <div className="home-nav">
          <div className="nav-login">
            <button
              onClick={() => openModal("login")}
              className="home-login"
            >
              Log In
            </button>
          </div>

          <div className="nav-signup">
            <button
              onClick={() => openModal("signup")}
              className="home-signup"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
    
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
                        <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
                       
                  </div>
              </div>


            </div>

              <footer className="social-midia">
                    <div className="linkin">
                        <a target="_blank" href="https://www.linkedin.com/in/cindy-ke/"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="github">
                        <a target="_blank" href="https://github.com/cindyko226/Fullstack-Project"><i className="fab fa-github"></i></a>
                    </div>
              </footer>
            
        </div>
    

    )
}