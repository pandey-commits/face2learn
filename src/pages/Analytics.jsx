import { useState, useEffect } from 'react';
import AppNavbar from '../components/layout/AppNavbar';
import { getAnalytics } from '../api/index';
import { useAuth } from '../context/AuthContext';

function StatCards({ summary }) {
  const stats = [
    { label: 'Total Study Time',   value: summary?.totalStudyTime   || '42h 15m', sub: '↑ 12% this week',   subColor: '#10b981' },
    { label: 'Lessons Completed',  value: summary?.lessonsCompleted || '38',       sub: '↑ 5 this week',     subColor: '#10b981' },
    { label: 'Avg. Engagement',    value: `${summary?.avgEngagement || 87}%`,      sub: 'Above average',     subColor: '#4361ee' },
    { label: 'Optimal Study Time', value: summary?.optimalStudyTime || '2–5 PM',   sub: 'Peak focus window', subColor: '#f59e0b' },
  ];
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

function EmotionDistribution({ data }) {
  const emotions = [
    { emoji: '😊', label: 'Happy / Engaged',  pct: data?.happy    || 45, color: '#10b981' },
    { emoji: '😌', label: 'Calm / Focused',   pct: data?.calm     || 30, color: '#4361ee' },
    { emoji: '😕', label: 'Confused',         pct: data?.confused || 12, color: '#f59e0b' },
    { emoji: '😤', label: 'Stressed',         pct: data?.stressed || 8,  color: '#ef4444' },
    { emoji: '😴', label: 'Bored',            pct: data?.bored    || 5,  color: '#7c3aed' },
  ];
  return (
    <div className="dark-card h-full">
      <h2 className="text-white font-bold text-base mb-6">Weekly Emotion Distribution</h2>
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
            <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-2 rounded-full transition-all duration-700"
                style={{ width: `${e.pct}%`, background: e.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AIInsights({ insights }) {
  const colors = ['#4361ee', '#10b981', '#f59e0b'];
  return (
    <div className="dark-card mt-6">
      <div className="flex items-center gap-2 mb-6">
        <span>🧠</span>
        <h2 className="text-white font-bold text-base">AI-Powered Insights</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(insights || []).map((i, idx) => (
          <div key={i.type}>
            <p className="font-semibold text-sm mb-2" style={{ color: colors[idx] }}>
              {i.title}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">{i.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Analytics() {
  const { user }          = useAuth();
  const [data, setData]   = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAnalytics(user?.uid || 'demo-user');
      if (result?.success) setData(result);
      setLoading(false);
    };
    fetchData();
  }, [user]);

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Analytics" />
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Learning Analytics</h1>
          <p className="text-gray-400 text-sm">Insights powered by emotion tracking and learning patterns</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent
                              rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400 text-sm">Loading analytics...</p>
            </div>
          </div>
        ) : (
          <>
            <StatCards summary={data?.summary} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EmotionDistribution data={data?.emotionDistribution} />
              <div className="dark-card">
                <h2 className="text-white font-bold text-base mb-4">Weekly Activity</h2>
                <div className="flex items-end gap-2 h-24">
                  {(data?.weeklyActivity || [3,3,2,3,3,1,2]).map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md transition-all duration-500"
                        style={{ height: `${(v / 3) * 100}%`, background: '#4361ee', minHeight: '8px' }} />
                      <span className="text-gray-500 text-xs">
                        {['M','T','W','T','F','S','S'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <AIInsights insights={data?.insights} />
          </>
        )}
      </div>
    </div>
  );
}
