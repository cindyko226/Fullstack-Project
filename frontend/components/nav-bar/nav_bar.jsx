import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

export default ({ currentUser, logout, openModal, receiveSearch }) => {
    



    const display = currentUser ? (
      <div className="home-page-greeting">
        <div className="index-page-greeting-nav">
          <Link to="/">
            <div className="spots-logo-png" />
          </Link>
          <div>
            <div className="index-page-search">
              <SearchBar receiveSearch={receiveSearch} />
            </div>
          </div>
        </div>
        <div className="welcome-top">
          <Link to="/bookings">
            <div className="trip">Trips</div>
          </Link>
          <div>
            <p className="welcome">Hello, {currentUser.username}</p>
          </div>
          <div>
            <button onClick={logout} className="home-logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className="home-page-button">
        <div className="index-logo-search">
          <Link to="/">
                <div className="spots-logo-png" />
          </Link>
          
          <div>
            <div className="index-page-search">
              <SearchBar receiveSearch={receiveSearch} />
            </div>
          </div>
        </div>
        <div className="home-nav">
          <div className="nav-login">
            <button
              onClick={() => openModal("login")}
              className="nav-login-button"
            >
              Log In
            </button>
          </div>

          <div className="nav-signup">
            <button
              onClick={() => openModal("signup")}
              className="nav-signup-button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );

    return (
        <div>
            {display}
        </div>

    )

}