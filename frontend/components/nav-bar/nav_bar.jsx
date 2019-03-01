import React from 'react';

export default ({ currentUser, logout, openModal }) => {

    const display = currentUser ? (
        <div className="home-page-greeting">
            {/* <div className="logo-png" ></div> */}
            <div className="welcome-top" >
                <p className="welcome">Hello, {currentUser.username}</p>
                <button onClick={logout} className="home-logout" >Logout</button>
            </div>
        </div>
    ) : (
            <div className="home-page-button">
                {/* <div className="logo-png" ></div> */}
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