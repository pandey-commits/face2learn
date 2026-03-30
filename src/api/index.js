const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// ── EMOTION ────────────────────────────────────────────────
export const logEmotion = async (userId, emotions) => {
  try {
    const res = await fetch(`${BASE_URL}/api/emotion/log`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ userId, ...emotions }),
    });
    return res.json();
  } catch (err) {
    console.error('logEmotion error:', err);
  }
};

export const getAdaptation = async (dominant) => {
  try {
    const res = await fetch(`${BASE_URL}/api/emotion/adapt`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ dominant }),
    });
    return res.json();
  } catch (err) {
    console.error('getAdaptation error:', err);
  }
};

// ── QUIZ ───────────────────────────────────────────────────
export const submitQuiz = async (userId, quizId, answers, questions, emotion) => {
  try {
    const res = await fetch(`${BASE_URL}/api/quiz/submit`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ userId, quizId, answers, questions, emotion }),
    });
    return res.json();
  } catch (err) {
    console.error('submitQuiz error:', err);
  }
};

// ── ANALYTICS ──────────────────────────────────────────────
export const getAnalytics = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/api/analytics/${userId}`);
    return res.json();
  } catch (err) {
    console.error('getAnalytics error:', err);
  }
};

// ── ADAPTIVE ───────────────────────────────────────────────
export const getContentStyle = async (emotion, performance) => {
  try {
    const res = await fetch(`${BASE_URL}/api/adaptive/content`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ emotion, performance }),
    });
    return res.json();
  } catch (err) {
    console.error('getContentStyle error:', err);
  }
};