import React from 'react';
import {Link} from 'react-router-dom';



export default ({currentUser, logout, openModal}) => {

    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={logout} >Logout</button>
        </div>
    ) : (
        <div>
            <button onClick={() => openModal('login')}>Log In</button>
            <button onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    )

    return(
        <div>
            {display}
        </div>
    )


}