import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
              <a href=" " >Welcome, {user.name}</a>
              <a href=" " onClick={handleLogout}>Log Out</a>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
              <p>Have an account?</p>
              <a href="/login" >Log In</a>
              <a href="/signup" >Sign Up</a>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
