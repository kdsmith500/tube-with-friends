import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot, collection } from "firebase/firestore";

import styles from './Channel.module.css';

import NavBar from '../../components/NavBar';
import { db } from '../../firebase';

const initialState = {
  channelName: '',
  chat: [],
  createdAt: new Date(),
  description: '',
  queue: [],
  user: {}
}

const Channel = () => {  
  const [channel, setChannel] = useState(initialState)
  const urlParams = useParams();
  const docRef = doc(db, 'channels', urlParams.id);

  console.log('urlParams', urlParams.id)

  const unsubscribeFromChannelRef = useRef(null);

  useEffect(() => {
    // async in useEffect might be considered an anti-pattern
    const handleChannelChange = async () => {
      unsubscribeFromChannelRef.current = onSnapshot(docRef, (doc) => {        
        setChannel(doc.data());
      })
    };

    handleChannelChange();

    const cleanup = () => {
      unsubscribeFromChannelRef.current = null;
    };

    return cleanup;
  }, []);


  return <div>
    <NavBar />
    <article className={styles.channel}>
      <aside className={styles.users}>left</aside>
      <section className={styles.video}>video</section>
      <aside className={styles.queue}>right</aside>
      <section className={styles.chat}>chat</section>
    </article>
  </div>;
};

export default Channel;
