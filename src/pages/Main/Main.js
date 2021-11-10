import React from 'react';

import './Main.css';

import NavBar from '../../components/NavBar';
import ChannelList from '../../components/ChannelList';

const user = true; //will pass in user from auth to determine logged in status

const Main = () => {  
  return <div>{user ? 
    <article>
      <NavBar />
      <section className="main-logged-in">
        <aside className="channel-list">
          <ChannelList />
        </aside>
        <section className="youtube-content">
          youTube content, popular vids or recents or some cheap query...
        </section>
      </section>
    </article>
    :
    <article>
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

    </article>
  }</div>;
};

export default Main;
