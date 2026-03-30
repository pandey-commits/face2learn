import {
  doc, setDoc, getDoc,
  updateDoc, arrayUnion, increment,
} from 'firebase/firestore';
import { db } from './config';

// ── SAVE COURSE PROGRESS ───────────────────────────────────
export const saveCourseProgress = async (userId, courseId, moduleId, percentage) => {
  try {
    const ref = doc(db, 'progress', `${userId}_${courseId}`);
    await setDoc(ref, {
      userId,
      courseId,
      percentage,
      completedModules: arrayUnion(moduleId),
      lastUpdated: new Date().toISOString(),
    }, { merge: true });
    console.log('✅ Progress saved!');
  } catch (err) {
    console.error('saveCourseProgress error:', err);
  }
};

// ── GET COURSE PROGRESS ────────────────────────────────────
export const getCourseProgress = async (userId, courseId) => {
  try {
    const ref     = doc(db, 'progress', `${userId}_${courseId}`);
    const snap    = await getDoc(ref);
    return snap.exists() ? snap.data() : { percentage: 0, completedModules: [] };
  } catch (err) {
    console.error('getCourseProgress error:', err);
    return { percentage: 0, completedModules: [] };
  }
};

// ── SAVE QUIZ RESULT ───────────────────────────────────────
export const saveQuizResult = async (userId, quizId, score, accuracy, xpEarned) => {
  try {
    // Save quiz result
    const quizRef = doc(db, 'quizResults', `${userId}_${quizId}_${Date.now()}`);
    await setDoc(quizRef, {
      userId, quizId, score, accuracy, xpEarned,
      completedAt: new Date().toISOString(),
    });

    // Update user XP and lessons count
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      xp:               increment(xpEarned),
      lessonsCompleted: increment(1),
    });

    console.log('✅ Quiz result saved!');
  } catch (err) {
    console.error('saveQuizResult error:', err);
  }
};

// ── SAVE EMOTION LOG ───────────────────────────────────────
export const saveEmotionLog = async (userId, emotions) => {
  try {
    const ref = doc(db, 'emotionLogs', `${userId}_${Date.now()}`);
    await setDoc(ref, {
      userId,
      ...emotions,
      timestamp: new Date().toISOString(),
    });
    console.log('✅ Emotion log saved!');
  } catch (err) {
    console.error('saveEmotionLog error:', err);
  }
};

// ── GET USER DATA ──────────────────────────────────────────
export const updateUserStreak = async (userId) => {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      streak:    increment(1),
      lastLogin: new Date().toISOString(),
    });
    console.log('✅ Streak updated!');
  } catch (err) {
    console.error('updateUserStreak error:', err);
  }
};