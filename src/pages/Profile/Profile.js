import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';

import NavBar from '../../components/NavBar';
import { UserContext } from '../../providers/userProvider';

const Profile = () => {  
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/');
  }, [])

  return <article>
    <NavBar />
    <section className="profile">
      <img className="profile-image" src={user && user.photoURL || 'http://placekitten.com/300/300'} alt="User profile." />
      <h1 className="profile-display-name">{user && user.displayName}</h1>
      <p className="profile-email">{user && user.email}</p>
      <div className="profile-created-at">{`Member since ${user && user.createdAt.toDate()}`}</div>
    </section>
  </article>;
};

export default Profile;
