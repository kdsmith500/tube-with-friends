import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {  
  return <header className="NavBar-wrapper">
    <div className="NavBar">
      <Link className="left" to="/">
          <div className="left-icon-outer">
            <div className="left-icon-inner"></div>
          </div>
          <div className="left-name">tubeWithFriends</div>
      </Link>

      <div className="right">
        <Link className="right-second" to="/signUp">
          <div>Sign up</div>
        </Link>
        <Link className="right-first" to="/signIn">
          <div>Sign in</div>
        </Link>
      </div>
    </div>
  </header>
};

export default NavBar;