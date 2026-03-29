import { useState } from 'react';
import AppNavbar from '../components/layout/AppNavbar';

// ── EMOTION DATA ───────────────────────────────────────────
const emotionData = [
  { emoji: '😊', label: 'Happy',    pct: 70, color: '#10b981', activeColor: 'rgba(16,185,129,0.15)',  border: 'rgba(16,185,129,0.3)'  },
  { emoji: '😌', label: 'Calm',     pct: 85, color: '#4361ee', activeColor: 'rgba(67,97,238,0.15)',   border: 'rgba(67,97,238,0.3)'   },
  { emoji: '😤', label: 'Stressed', pct: 15, color: '#ef4444', activeColor: 'rgba(239,68,68,0.15)',   border: 'rgba(239,68,68,0.3)'   },
  { emoji: '😕', label: 'Confused', pct: 20, color: '#f59e0b', activeColor: 'rgba(245,158,11,0.15)',  border: 'rgba(245,158,11,0.3)'  },
  { emoji: '😴', label: 'Bored',    pct: 10, color: '#7c3aed', activeColor: 'rgba(124,58,237,0.15)',  border: 'rgba(124,58,237,0.3)'  },
];

// ── LIVE EMOTION CARDS ─────────────────────────────────────
function LiveEmotionState() {
  const [active, setActive] = useState('Calm');

  return (
    <div className="dark-card mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-blue-400">📈</span>
          <h2 className="text-white font-semibold">Live Emotional State</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm">Monitoring Active</span>
        </div>
      </div>

      {/* Emotion cards */}
      <div className="grid grid-cols-5 gap-3">
        {emotionData.map((e) => (
          <button
            key={e.label}
            onClick={() => setActive(e.label)}
            className="rounded-xl p-4 text-center transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: active === e.label ? e.activeColor : 'rgba(255,255,255,0.03)',
              border: `1px solid ${active === e.label ? e.border : 'rgba(99,130,255,0.1)'}`,
            }}>
            <div className="text-2xl mb-2">{e.emoji}</div>
            <div className="text-gray-300 text-xs mb-2">{e.label}</div>
            <div className="font-bold text-sm" style={{ color: e.color }}>
              {e.pct}%
            </div>
          </button>
        ))}
      </div>

      {/* Hint */}
      <div className="mt-4 flex items-center gap-2 text-gray-500 text-xs">
        <span>💡</span>
        <span>Click an emotion above to simulate detection and see the platform adapt in real-time</span>
      </div>
    </div>
  );
}

// ── ACTIVE ADAPTATIONS ─────────────────────────────────────
const adaptations = [
  {
    icon: '🔄',
    iconBg: 'rgba(67,97,238,0.2)',
    title: 'Normal Pacing',
    desc: 'Content delivered at standard pace — calm state detected',
  },
  {
    icon: '⚡',
    iconBg: 'rgba(16,185,129,0.2)',
    title: 'Standard Difficulty',
    desc: 'Exercises at your level — confidence is high',
  },
  {
    icon: '🎨',
    iconBg: 'rgba(124,58,237,0.2)',
    title: 'Calm UI Theme',
    desc: 'Blue accent colors and minimal animations for focus',
  },
];

function ActiveAdaptations() {
  return (
    <div className="dark-card mb-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-blue-400">⚙️</span>
        <h2 className="text-white font-semibold">Active Adaptations</h2>
      </div>
      <div className="space-y-4">
        {adaptations.map((a) => (
          <div key={a.title} className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
              style={{ background: a.iconBg }}>
              {a.icon}
            </div>
            <div>
              <p className="text-white font-medium text-sm">{a.title}</p>
              <p className="text-gray-400 text-xs mt-0.5">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EMOTION TIMELINE ───────────────────────────────────────
const timeLabels = ['2PM', '2:15', '2:30', '2:45', '3PM', '3:15', '3:30', '3:45', '4PM', 'Now'];

const timelineData = {
  Calm:    [60, 70, 75, 80, 85, 88, 85, 82, 85, 85],
  Happy:   [50, 55, 60, 65, 70, 72, 68, 65, 70, 70],
  Confused:[25, 20, 15, 12, 10,  8, 10, 12, 10, 20],
  Stressed:[20, 18, 15, 12, 10,  8,  8,  8, 10, 15],
};

const lineColors = {
  Calm:    '#4361ee',
  Happy:   '#10b981',
  Confused:'#f59e0b',
  Stressed:'#ef4444',
};

function EmotionTimeline() {
  const width  = 600;
  const height = 160;
  const padL   = 10;
  const padR   = 10;
  const padT   = 10;
  const padB   = 30;
  const chartW = width - padL - padR;
  const chartH = height - padT - padB;

  const getX = (i) => padL + (i / (timeLabels.length - 1)) * chartW;
  const getY = (v) => padT + chartH - (v / 100) * chartH;

  const makePath = (values) =>
    values.map((v, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(v)}`).join(' ');

  return (
    <div className="dark-card">
      <h2 className="text-white font-semibold mb-6">Today's Emotion Timeline</h2>

      {/* SVG chart */}
      <div className="overflow-x-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full"
          style={{ minWidth: '320px' }}>

          {/* Grid lines */}
          {[25, 50, 75].map(v => (
            <line key={v}
              x1={padL} y1={getY(v)}
              x2={width - padR} y2={getY(v)}
              stroke="rgba(255,255,255,0.05)" strokeWidth="1"
            />
          ))}

          {/* Emotion lines */}
          {Object.entries(timelineData).map(([emotion, values]) => (
            <path key={emotion}
              d={makePath(values)}
              fill="none"
              stroke={lineColors[emotion]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}

          {/* Time labels */}
          {timeLabels.map((label, i) => (
            <text key={label}
              x={getX(i)} y={height - 8}
              textAnchor="middle"
              fill="rgba(255,255,255,0.3)"
              fontSize="10"
              fontFamily="Outfit, sans-serif">
              {label}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-4">
        {Object.entries(lineColors).map(([label, color]) => (
          <div key={label} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: color }} />
            <span className="text-gray-400 text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────
export default function EmotionDashboard() {
  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Emotion" />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1"
            style={{ color: '#f59e0b' }}>
            Emotion Dashboard
          </h1>
          <p className="text-gray-400 text-sm">
            Real-time emotional state monitoring and adaptation controls
          </p>
        </div>

        {/* Live emotion state */}
        <LiveEmotionState />

        {/* Active adaptations */}
        <ActiveAdaptations />

        {/* Timeline */}
        <EmotionTimeline />

      </div>
    </div>
  );
}