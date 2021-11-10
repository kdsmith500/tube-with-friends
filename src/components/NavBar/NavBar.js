import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const user = true; // might wrap the app in a userProvider, otherwise it will be passed here

const NavBar = () => {  
  return <header className="NavBar-wrapper">
    <div className="NavBar">
      <Link className="left" to="/">
          <div className="left-icon-outer">
            <div className="left-icon-inner"></div>
          </div>
          <div className="left-name">tubeWithFriends</div>
      </Link>

      <div>{user ?
        <div className="right">
          <details className="right-second">
            <summary>Hey, Bill</summary>
            <Link className="details-option" to="/profile">Profile</Link>
            <div className="details-option-bottom">Sign Out</div>
          </details>
          <img className="right-first" src="https://www.fillmurray.com/50/50" alt="profile avatar"/>
        </div>
        :
        <nav className="right">
          <Link className="right-second" to="/signUp">
            <div>Sign up</div>
          </Link>
          <Link className="right-first" to="/signIn">
            <div>Sign in</div>
          </Link>
        </nav>
      }</div>
    </div>
  </header>
};

export default NavBar;