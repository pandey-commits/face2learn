import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';
import { useAuth } from '../context/AuthContext';

const badges = [
  { emoji: '🔥', label: 'Hot Streak',    bg: 'rgba(239,68,68,0.15)',  color: '#fca5a5' },
  { emoji: '🧠', label: 'Quick Learner', bg: 'rgba(124,58,237,0.15)', color: '#c4b5fd' },
  { emoji: '😊', label: 'Zen Master',    bg: 'rgba(16,185,129,0.15)', color: '#6ee7b7' },
];

const toggles = [
  { id: 'emotion',  label: 'Enable emotion detection' },
  { id: 'breaks',   label: 'Auto break suggestions' },
  { id: 'adaptive', label: 'Adaptive difficulty' },
  { id: 'research', label: 'Share emotion data for research' },
];

function Toggle({ on, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative w-11 h-6 rounded-full transition-all duration-300 flex-shrink-0"
      style={{ background: on ? '#4361ee' : 'rgba(255,255,255,0.1)' }}>
      <span
        className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300"
        style={{ left: on ? '24px' : '4px' }}
      />
    </button>
  );
}

export default function ProfilePage() {

  // ── AUTH ─────────────────────────────────────────────────
  const { logout } = useAuth();
  const navigate   = useNavigate();

  // ── STATE ─────────────────────────────────────────────────
  const [form, setForm] = useState({
    firstName: 'Alex',
    lastName:  'Kumar',
    email:     'demo@mindflow.com',
    role:      'Student',
  });

  const [settings, setSettings] = useState({
    emotion:  true,
    breaks:   true,
    adaptive: true,
    research: false,
  });

  const [saved, setSaved] = useState(false);

  // ── HANDLERS ──────────────────────────────────────────────
  const updateForm = (field, value) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const toggleSetting = (id) =>
    setSettings(prev => ({ ...prev, [id]: !prev[id] }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSignOut = async () => {
    await logout();
    navigate('/');
  };

  // ── RENDER ────────────────────────────────────────────────
  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="" />

      <div className="max-w-5xl mx-auto px-6 pt-28 pb-16">

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-8">Profile & Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── LEFT: Profile card ── */}
          <div className="dark-card flex flex-col items-center text-center py-8">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600
                            flex items-center justify-center text-white font-bold text-2xl mb-4">
              AK
            </div>

            <h2 className="text-white font-bold text-xl mb-1">
              {form.firstName} {form.lastName}
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              {form.role} · Joined Jan 2025
            </p>

            {/* Stats */}
            <div className="flex gap-6 mb-6 w-full justify-center"
              style={{
                borderTop:    '1px solid rgba(99,130,255,0.1)',
                borderBottom: '1px solid rgba(99,130,255,0.1)',
                padding: '1rem 0'
              }}>
              <div className="text-center">
                <p className="text-white font-bold text-lg">2,480</p>
                <p className="text-gray-500 text-xs">XP</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">12</p>
                <p className="text-gray-500 text-xs">Streak</p>
              </div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">38</p>
                <p className="text-gray-500 text-xs">Lessons</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {badges.map((b) => (
                <span key={b.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: b.bg, color: b.color }}>
                  {b.emoji} {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Settings ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Personal info */}
            <div className="dark-card">
              <h2 className="text-white font-bold text-base mb-6">Personal Information</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">First Name</label>
                  <input
                    value={form.firstName}
                    onChange={(e) => updateForm('firstName', e.target.value)}
                    className="dark-input"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                  <input
                    value={form.lastName}
                    onChange={(e) => updateForm('lastName', e.target.value)}
                    className="dark-input"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                    className="dark-input"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Role</label>
                  <input
                    value={form.role}
                    readOnly
                    className="dark-input opacity-60 cursor-not-allowed"
                  />
                </div>
              </div>
              <button onClick={handleSave} className="btn-primary px-6 py-2.5 text-sm">
                {saved ? '✅ Saved!' : 'Save Changes'}
              </button>
            </div>

            {/* Emotion tracking toggles */}
            <div className="dark-card">
              <h2 className="text-white font-bold text-base mb-6">
                Emotion Tracking Preferences
              </h2>
              <div className="space-y-5">
                {toggles.map((t) => (
                  <div key={t.id} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{t.label}</span>
                    <Toggle
                      on={settings[t.id]}
                      onToggle={() => toggleSetting(t.id)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sign out */}
            <button
              onClick={handleSignOut}
              className="w-full py-3.5 rounded-xl text-gray-400 font-medium text-sm
                         hover:text-white transition-all duration-200
                         flex items-center justify-center gap-2"
              style={{ background: '#0f1729', border: '1px solid rgba(99,130,255,0.15)' }}>
              ↪ Sign Out
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}