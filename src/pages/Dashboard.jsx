import { Link } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';

// ── EMOTION BAR ────────────────────────────────────────────
const emotions = [
  { label: 'Happy',    emoji: '😊', color: '#10b981', width: '75%' },
  { label: 'Calm',     emoji: '😌', color: '#4361ee', width: '60%' },
  { label: 'Stressed', emoji: '😤', color: '#ef4444', width: '25%' },
  { label: 'Confused', emoji: '😕', color: '#f59e0b', width: '20%' },
  { label: 'Bored',    emoji: '😴', color: '#7c3aed', width: '10%' },
];

function EmotionState() {
  return (
    <div className="dark-card mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">📈</span>
          <span className="text-white font-semibold">Current Emotional State</span>
        </div>
        <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">View Details →</button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {emotions.map((e) => (
          <div key={e.label} className="flex flex-col items-center gap-2">
            <span className="text-2xl">{e.emoji}</span>
            <span className="text-gray-400 text-xs">{e.label}</span>
            <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <div className="h-1.5 rounded-full transition-all duration-500"
                style={{ width: e.width, background: e.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CONTINUE LEARNING ──────────────────────────────────────
const courses = [
  {
    id: 1, emoji: '🐍', color: '#4361ee',
    category: 'Python Fundamentals',
    title: 'Lesson 8: Functions & Parameters',
    desc: 'Master function definitions, arguments, and return values',
    progress: 65,
  },
  {
    id: 2, emoji: '⚛️', color: '#7c3aed',
    category: 'React Masterclass',
    title: 'Lesson 3: Component Lifecycle',
    desc: 'Understanding mounting, updating, and unmounting',
    progress: 30,
  },
];

function ContinueLearning() {
  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-4">Continue Learning</h2>
      <div className="space-y-4">
        {courses.map((c) => (
          <Link to={`/lesson/${c.id}`} key={c.id}
            className="dark-card flex items-center gap-4 hover:border-blue-500/30 transition-all duration-200 hover:-translate-y-0.5">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: c.color }}>
              {c.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-blue-400 text-xs font-medium mb-1">{c.category}</p>
              <p className="text-white font-semibold text-sm mb-1">{c.title}</p>
              <p className="text-gray-400 text-xs mb-3 truncate">{c.desc}</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div className="h-1.5 rounded-full bg-blue-500 transition-all"
                    style={{ width: `${c.progress}%` }} />
                </div>
                <span className="text-gray-400 text-xs">{c.progress}%</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ── AI SUGGESTIONS ─────────────────────────────────────────
function AISuggestions() {
  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-4">AI Suggestions</h2>
      <div className="space-y-4">

        {/* Emotion insight */}
        <div className="rounded-xl p-4"
          style={{ background: '#1a2540', border: '1px solid rgba(67,97,238,0.3)' }}>
          <div className="flex items-start gap-3">
            <span className="text-xl">💡</span>
            <div>
              <p className="text-gray-400 text-xs mb-1">Based on your emotion data:</p>
              <p className="text-white text-sm font-medium">
                "You learn best between 2–5 PM. Your current session is in that window!"
              </p>
            </div>
          </div>
        </div>

        {/* Quiz ready */}
        <div className="rounded-xl p-4"
          style={{ background: '#1a2540', border: '1px solid rgba(16,185,129,0.3)' }}>
          <div className="flex items-center gap-2 mb-3">
            <span>🎯</span>
            <span className="text-gray-300 text-sm font-medium">Quiz ready:</span>
          </div>
          <p className="text-white text-sm mb-3">"Functions & Parameters" quiz is waiting</p>
          <Link to="/quiz/1"
            className="block w-full text-center py-2.5 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90"
            style={{ background: '#10b981' }}>
            Take Quiz
          </Link>
        </div>

        {/* Weekly goals */}
        <div className="dark-card">
          <h3 className="text-white font-semibold mb-4">Weekly Goals</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-400">Lessons</span>
                <span className="text-white font-medium">5/7</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-1.5 rounded-full bg-blue-500" style={{ width: '71%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-gray-400">Quizzes</span>
                <span className="text-white font-medium">2/3</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-1.5 rounded-full bg-green-500" style={{ width: '66%' }} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ── MAIN DASHBOARD ─────────────────────────────────────────
export default function Dashboard() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Dashboard"/>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Header greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              {greeting}, Alex 👋
            </h1>
            <p className="text-gray-400">
              You're feeling{' '}
              <span className="text-blue-400 font-medium">focused and calm</span>
              {' '}— great time to learn!
            </p>
          </div>

          {/* Streak + XP */}
          <div className="flex gap-4">
            <div className="dark-card flex items-center gap-3 px-5 py-3">
              <span className="text-xl">🔥</span>
              <div>
                <span className="text-white font-bold text-xl">12</span>
                <span className="text-gray-400 text-sm ml-1">day streak</span>
              </div>
            </div>
            <div className="dark-card flex items-center gap-3 px-5 py-3">
              <span className="text-xl">⚡</span>
              <div>
                <span className="text-white font-bold text-xl">2,480</span>
                <span className="text-gray-400 text-sm ml-1">XP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emotion state bar */}
        <EmotionState />

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <ContinueLearning />
          </div>
          <div className="lg:col-span-2">
            <AISuggestions />
          </div>
        </div>

      </div>
    </div>
  );
}
