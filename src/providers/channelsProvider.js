import React, { createContext, useState, useEffect, useRef } from 'react';

import { channelsQ } from '../firebase';
import { onSnapshot } from 'firebase/firestore';
import { collectIdsAndDocs } from '../utilities';

export const ChannelsContext = createContext();

const ChannelsProvider = ( props ) => {
  const [channels, setChannels] = useState([]);

  const unsubscribeFromChannelsRef = useRef(null);

  useEffect(() => {
    // async in useEffect might be considered an anti-pattern
    const handleChannelsChange = async () => {
      unsubscribeFromChannelsRef.current = onSnapshot(channelsQ, (querySnapshot) => {
        const channels = querySnapshot.docs.map(collectIdsAndDocs);
        
        setChannels(channels)
      })
    }

    handleChannelsChange();

    const cleanup = () => {
      unsubscribeFromChannelsRef.current = null;
    };

    return cleanup;
  }, []);

  return (
    <ChannelsContext.Provider value={channels}>{props.children}</ChannelsContext.Provider>
  )
}

export default ChannelsProvider;