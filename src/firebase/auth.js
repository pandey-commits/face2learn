import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './config';

// ── REGISTER ───────────────────────────────────────────────
export const registerUser = async (firstName, lastName, email, password, role) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Save extra info to Firestore
  await setDoc(doc(db, 'users', user.uid), {
    firstName,
    lastName,
    email,
    role,
    xp:               0,
    streak:           0,
    lessonsCompleted: 0,
    enrolledCourses:  [],
    createdAt:        new Date().toISOString(),
  });

  return user;
};

// ── LOGIN ──────────────────────────────────────────────────
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// ── LOGOUT ─────────────────────────────────────────────────
export const logoutUser = () => signOut(auth);

// ── GET USER DATA ──────────────────────────────────────────
export const getUserData = async (uid) => {
  const docRef  = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// ── AUTH STATE LISTENER ────────────────────────────────────
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);