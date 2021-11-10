import React, { createContext, useState, useEffect, useRef } from 'react';

import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from 'firebase/firestore';

import { auth, createUserProfileDocument } from '../firebase';

export const UserContext = createContext();

const UserProvider = ( props ) => {
  const [user, setUser] = useState(null);

  const unsubscribeFromAuthRef = useRef(null);

  useEffect(() => {
    // async in useEffect might be considered an anti-pattern
    const handleAuthChange = async () => {
      unsubscribeFromAuthRef.current = onAuthStateChanged(auth, async userAuth => {
        console.log(userAuth);

        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          onSnapshot(userRef, (snapshot) => {
            setUser({ uid: snapshot.id, ...snapshot.data() })
          });
        }
  
        setUser(userAuth);

        console.log(props)
      })
    }

    handleAuthChange();

    const cleanup = () => {
      unsubscribeFromAuthRef.current = null;
    };

    return cleanup;
  }, [props]);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider;