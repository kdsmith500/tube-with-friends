import { initializeApp } from "firebase/app";
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

export const storage = getStorage(firebaseApp);