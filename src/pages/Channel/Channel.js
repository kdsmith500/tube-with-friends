import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, onSnapshot, collection, addDoc, querySnapshot, snapshot } from "firebase/firestore";

import styles from './Channel.module.css';

import NavBar from '../../components/NavBar';
import { db } from '../../firebase';
import { UserContext } from "../../providers/userProvider";
import { collectIdsAndDocs } from "../../utilities";

const initialState = {
  channelName: '',
  chat: [],
  createdAt: new Date(),
  description: '',
  queue: [],
  user: {}
}

const Channel = () => {  
  const [channel, setChannel] = useState(initialState);
  const [newChat, setNewChat] = useState('');
  const [chat, setChat] = useState([]);
  const user = useContext(UserContext);

  const urlParams = useParams();
  const docRef = doc(db, 'channels', urlParams.id);
  const chatRef = collection(docRef, "chat");

  const unsubscribeFromChannelRef = useRef(null);
  const unsubscribeFromChatRef = useRef(null);

  useEffect(() => {
    const handleChannelChange = async () => {
      unsubscribeFromChannelRef.current = onSnapshot(docRef, (snapshot) => {   
        const data = snapshot.data(); 

        setChannel(data);
      })
    };

    handleChannelChange();

    const cleanup = () => {
      unsubscribeFromChannelRef.current = null;
    };

    return cleanup;
  }, []);

  useEffect(() => {
    const handleChatChange = async () => {
      unsubscribeFromChatRef.current = onSnapshot(chatRef, (querySnapshot) => {
        const c = querySnapshot.docs.map(collectIdsAndDocs);

        // const sortedChat = c.sort((a, b) => {
        //   return a.createdAt.toDate() - b.createdAt.toDate();
        // }) 

        // return setChat(sortedChat);
        return setChat(c);
      })
    };

    handleChatChange();

    const cleanup = () => {
      unsubscribeFromChatRef.current = null;
    };

    return cleanup;
  }, []);

  const handleNewChat = event => {
    event.preventDefault();

    return addDoc(chatRef, {
      newChat,
      user
    })
    .then(() => setNewChat(''))
    .catch(error => console.error(error));
  }

  const handleChange = event => {
    // should always have just one input
    setNewChat(event.target.value);
  }

  return <div>
    <NavBar />
    <article className={styles.channel}>
      <aside className={styles.users}>left</aside>
      <section className={styles.video}>video</section>
      <aside className={styles.queue}>right</aside>
      <section className={styles.chat}>
        <div className={styles.chatLog}>
          {chat.map((c, idx) => {
            return <div className={styles.chatLine} key={idx}>{c.newChat}</div>
          })}
        </div>
        <form className={styles.newChatForm} onSubmit={handleNewChat}>
          <input
            type="text"
            name="newChat"
            value={newChat}
            onChange={handleChange}
          ></input>
          <input
            className="button"
            type="submit"
            value="Send"
            // onClick={}
          ></input>
        </form>
      </section>
    </article>
  </div>;
};

export default Channel;
