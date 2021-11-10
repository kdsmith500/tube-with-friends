import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './NavBar.css';

import { signOutAuth } from '../../firebase';
import { UserContext } from '../../providers/userProvider';

const NavBar = () => { 
  const user = useContext(UserContext);
  let navigate = useNavigate();

  const handleSignOut = () => {
    signOutAuth();
    navigate('/');
  }

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
            <summary>Hey, Buddy</summary>
            <Link className="details-option" to="/profile">Profile</Link>
            <div className="details-option-bottom" onClick={handleSignOut}>Sign Out</div>
          </details>
          <img className="right-first" src="https://placekitten.com/50/50" alt="profile avatar"/>
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