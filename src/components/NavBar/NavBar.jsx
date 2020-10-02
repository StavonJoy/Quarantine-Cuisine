import React from 'react';
import './NavBar.css'

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav>
          <div className="nav-wrapper">
              <a href=" " className="btn btn-info">Welcome, {user.name}</a>
              <a href=" " className="btn btn-info" onClick={handleLogout}>Log Out</a>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
              <a href="/login" className="btn btn-info">Log In</a>
              <a href="/signup" className="btn btn-info">Sign Up</a>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
