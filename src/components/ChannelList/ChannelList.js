import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChannelsContext } from '../../providers/channelsProvider';

import './ChannelList.css';

const ChannelList = () => { 
  const channels = useContext(ChannelsContext);

  channels.sort((a, b) => {
    return a.createdAt.toDate() - b.createdAt.toDate();
  })

  const handleHover = event => {
    return event.target.nextElementSibling.hidden = !event.target.nextElementSibling.hidden;
  }

  return <section className="channel-list">
    {channels.map(channel => {
      return <div className="channel">
        <Link
          className="channel-link"
          key={channel.id}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          to={`/channel/${channel.id}`}
        >
          {channel.channelName}
        </Link>
        <label htmlFor={channel.id} className="channel-list-label" hidden={true}>{channel.description}</label>
      </div>
    })}
  </section>;
};

export default ChannelList;