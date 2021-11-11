import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChannelsContext } from '../../providers/channelsProvider';

import './ChannelList.css';

const ChannelList = () => { 
  const channels = useContext(ChannelsContext);

    console.log(channels)
  return <section className="channel-list">
    {channels.map(channel => {
      return <Link
        className="channel"
        key={channel.id}
        to={`/channel/${channel.id}`}
      >
        {channel.channelName}
      </Link>
    })}
  </section>;
};

export default ChannelList;