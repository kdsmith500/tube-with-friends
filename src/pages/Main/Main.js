import React from 'react';

import './Main.css';

import NavBar from '../../components/NavBar';

const user = false; //will pass in user from auth to determine logged in status

const Main = () => {  
  return <div>{user ? 
    <div>
      <NavBar />
      <section className="main-logged-in">
        'logged in'
      </section>
    </div>
    :
    <div>
      <NavBar />
      <section className="main-logged-out">
        <div className="main-logged-out-header">
          <div className="main-logged-out-header-top">Watch stuff</div>
          <div className="main-logged-out-header-bottom">together</div>
          <p>All of youTube's content. With some of your buddies.</p>
        </div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
        <div className="circle-three"></div>
      </section>

    </div>
  }</div>;
};

export default Main;
