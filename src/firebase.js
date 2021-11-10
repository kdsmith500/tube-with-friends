import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCosrQ6ozfIHwkj55t5hJb4EbZRNi5r0KU",
  authDomain: "tube-with-friends.firebaseapp.com",
  projectId: "tube-with-friends",
  storageBucket: "tube-with-friends.appspot.com",
  messagingSenderId: "497333385145",
  appId: "1:497333385145:web:872af37fc7a91348b9e868",
  measurementId: "G-P8TYRY895Z"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

export const provider = new GoogleAuthProvider(auth);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
export const signInWithEmailAndPass = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signOutAuth = () => signOut(auth);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return; // if no user break function

  // get a reference to the place in the database where a user profile might be
  const userRef = await doc(db, 'users', user.uid);
  
  // go and fetch the document from that location
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      })
    } catch (error) {
    }
  }

  return getUserDocument(user.uid);
}

export const getUserDocument = async (uid) => {
  if (!uid) return null;

  try {
    return doc(db, 'users', uid);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
}

export default firebaseApp;