import React from 'react';
import {Link} from 'react-router-dom';



export default ({currentUser, logout, openModal}) => {

    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout} >Logout</button>
        </div>
    ) : (
        <div className="home-page-button">
            <button onClick={() => openModal('login')} className="home-login">Log In</button>
            <button onClick={() => openModal('signup')} className="home-signup" >Sign Up</button>
        </div>
    )

    return(
        <div className='home-page'>
            <h1 className="app-name">Take Me Home</h1>
            {display}
        </div>
    )


}