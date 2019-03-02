import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (
        <div className="home-page-greeting">
            <div className="spots-logo-png" ></div>
            <div className="welcome-top" >
               <div>
                <p className="welcome">Hello, {currentUser.username}</p>
               </div>
               <div>
                <button onClick={logout} className="home-logout" >Logout</button>
               </div>
            </div>
        </div>
    ) : (
            <div className="home-page-button">
                <div className="index-logo-search" >
                    <div className="spots-logo-png"></div>
                    <div>
                        <div className="index-page-search">
                            <div className="index-search-icon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <input className="index-search-input" type="text" placeholder='Try San Francisco' />
                            </div>
                        </div>
                    </div>
                 </div>
                <div className="home-nav" >
                    <div className="nav-login">
                        <button onClick={() => openModal('login')} className="nav-login-button">Log In</button>
                    </div>

                    <div className="nav-signup">
                        <button onClick={() => openModal('signup')} className="nav-signup-button" >Sign Up</button>
                    </div>
                </div>
            </div>
        )

    return (
        <div>
            {display}
        </div>

    )

}