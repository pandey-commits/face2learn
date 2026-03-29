import AppNavbar from '../components/layout/AppNavbar';

// ── STAT CARDS ─────────────────────────────────────────────
const stats = [
  { label: 'Total Study Time',  value: '42h 15m', sub: '↑ 12% this week',   subColor: '#10b981' },
  { label: 'Lessons Completed', value: '38',       sub: '↑ 5 this week',     subColor: '#10b981' },
  { label: 'Avg. Engagement',   value: '87%',      sub: 'Above average',     subColor: '#4361ee' },
  { label: 'Optimal Study Time',value: '2–5 PM',   sub: 'Peak focus window', subColor: '#f59e0b' },
];

function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((s) => (
        <div key={s.label} className="dark-card">
          <p className="text-gray-400 text-xs mb-2">{s.label}</p>
          <p className="text-white font-bold text-2xl mb-1">{s.value}</p>
          <p className="text-xs font-medium" style={{ color: s.subColor }}>{s.sub}</p>
        </div>
      ))}
    </div>
  );
}

// ── EMOTION DISTRIBUTION ───────────────────────────────────
const emotions = [
  { emoji: '😊', label: 'Happy / Engaged',  pct: 45, color: '#10b981' },
  { emoji: '😌', label: 'Calm / Focused',   pct: 30, color: '#4361ee' },
  { emoji: '😕', label: 'Confused',         pct: 12, color: '#f59e0b' },
  { emoji: '😤', label: 'Stressed',         pct: 8,  color: '#ef4444' },
  { emoji: '😴', label: 'Bored',            pct: 5,  color: '#7c3aed' },
];

function EmotionDistribution() {
  return (
    <div className="dark-card h-full">
      <h2 className="text-white font-bold text-base mb-6">
        Weekly Emotion Distribution
      </h2>
      <div className="space-y-4">
        {emotions.map((e) => (
          <div key={e.label}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-base">{e.emoji}</span>
                <span className="text-gray-300 text-sm">{e.label}</span>
              </div>
              <span className="text-white font-semibold text-sm">{e.pct}%</span>
            </div>
            <div className="h-2 rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div
                className="h-2 rounded-full transition-all duration-700"
                style={{ width: `${e.pct}%`, background: e.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ACTIVITY HEATMAP ───────────────────────────────────────
const days  = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const heatmap = [
  [3, 3, 2, 3, 3, 1, 2],
  [2, 3, 1, 2, 3, 0, 1],
  [1, 2, 2, 3, 2, 1, 2],
];

const intensityColor = (v) => {
  if (v === 0) return 'rgba(255,255,255,0.04)';
  if (v === 1) return 'rgba(67,97,238,0.25)';
  if (v === 2) return 'rgba(67,97,238,0.5)';
  return '#4361ee';
};

function ActivityHeatmap() {
  return (
    <div className="dark-card h-full">
      <h2 className="text-white font-bold text-base mb-6">
        Study Activity (This Week)
      </h2>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {days.map(d => (
          <div key={d} className="text-center text-gray-500 text-xs">{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="space-y-2">
        {heatmap.map((row, ri) => (
          <div key={ri} className="grid grid-cols-7 gap-2">
            {row.map((val, ci) => (
              <div key={ci}
                className="rounded-lg aspect-square transition-all duration-300 hover:opacity-80 cursor-pointer"
                style={{ background: intensityColor(val) }}
                title={`${val} sessions`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-500 text-xs">Less</span>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3].map(v => (
            <div key={v} className="w-3 h-3 rounded-sm"
              style={{ background: intensityColor(v) }} />
          ))}
        </div>
        <span className="text-gray-500 text-xs">More</span>
      </div>
    </div>
  );
}

// ── AI INSIGHTS ────────────────────────────────────────────
const insights = [
  {
    title: 'Best Performance',
    titleColor: '#4361ee',
    desc: 'You score 23% higher on quizzes taken between 2–4 PM when your calm score is above 70%.',
  },
  {
    title: 'Break Impact',
    titleColor: '#10b981',
    desc: 'Taking suggested breaks improved your retention rate by 18% compared to sessions without breaks.',
  },
  {
    title: 'Difficulty Sweet Spot',
    titleColor: '#f59e0b',
    desc: "You enter flow state most when content is 15% above your current level. We're calibrating accordingly.",
  },
];

function AIInsights() {
  return (
    <div className="dark-card mt-6">
      <div className="flex items-center gap-2 mb-6">
        <span>🧠</span>
        <h2 className="text-white font-bold text-base">AI-Powered Insights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {insights.map((i) => (
          <div key={i.title}>
            <p className="font-semibold text-sm mb-2" style={{ color: i.titleColor }}>
              {i.title}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────
export default function Analytics() {
  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Analytics" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Learning Analytics</h1>
          <p className="text-gray-400 text-sm">
            Insights powered by emotion tracking and learning patterns
          </p>
        </div>

        {/* Stat cards */}
        <StatCards />

        {/* Middle grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <EmotionDistribution />
          <ActivityHeatmap />
        </div>

        {/* AI Insights */}
        <AIInsights />

      </div>
    </div>
  );
}