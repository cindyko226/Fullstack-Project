import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

export default ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (
        <div className="home-page-greeting">
            <div className="index-page-greeting-nav">
 
                
                <div className="spots-logo-png" ></div>
                
                <div >
                    <div className="index-page-search">
                    <SearchBar />
                        {/* <div className="index-search-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input className="index-search-input" type="text" placeholder='Try San Francisco' />
                        </div> */}
                    </div>
               </div>
               

            </div>
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
                    <Link to="/"><div className="spots-logo-png"></div></Link>
                    <div>
                        <div className="index-page-search">
                            <SearchBar />
                            {/* <div className="index-search-icon">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <input className="index-search-input" type="text" placeholder='Try San Francisco' />
                            </div> */}
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