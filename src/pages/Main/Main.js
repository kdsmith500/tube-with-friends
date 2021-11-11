import React, { useState,useContext } from 'react';

import './Main.css';

import NavBar from '../../components/NavBar';
import ChannelList from '../../components/ChannelList';
import { UserContext } from '../../providers/userProvider';
import CreateChannelModal from '../../components/CreateChannelModal/CreateChannelModal';


const Main = () => {  
  const user = useContext(UserContext);
  const [showCreateChannelModal, toggleCreateChannel] = useState(false);

  const handleCreateChannelModal = () => {
    toggleCreateChannel(!showCreateChannelModal)
  }

  return <div>{user ? 
    <article>
      <NavBar />
      <section className="main-logged-in">
        <aside className="channel-list">
          <ChannelList />
          <div onClick={handleCreateChannelModal}>button thingy</div>
        </aside>
        <section className="youtube-content">
          youTube content, popular vids or recents or some cheap query...
        </section>
      </section>
      {showCreateChannelModal ? null : <CreateChannelModal toggle={() => handleCreateChannelModal()} />}
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
