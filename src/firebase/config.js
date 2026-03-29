import { initializeApp } from 'firebase/app';
import { getAuth }       from 'firebase/auth';
import { getFirestore }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyXhQP4XPpKJm_5NREk0UtBBbn0Pbt348",
  authDomain: "face2learn-f4883.firebaseapp.com",
  projectId: "face2learn-f4883",
  storageBucket: "face2learn-f4883.firebasestorage.app",
  messagingSenderId: "242168409601",
  appId: "1:242168409601:web:596d862bcbb5182e485a00"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db   = getFirestore(app);