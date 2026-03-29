import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';

const courses = [
  {
    id: 1, emoji: '🐍', bg: '#4361ee',
    category: 'Programming', enrolled: true,
    title: 'Python Fundamentals',
    desc: 'Complete introduction to Python programming with emotion-adaptive pacing.',
    lessons: 24, hours: 12, level: 'Beginner',
  },
  {
    id: 2, emoji: '⚛️', bg: '#7c3aed',
    category: 'Frontend', enrolled: true,
    title: 'React Masterclass',
    desc: 'Build modern web apps with React. Adaptive exercises adjust to your confidence.',
    lessons: 18, hours: 10, level: 'Intermediate',
  },
  {
    id: 3, emoji: '📊', bg: '#10b981',
    category: 'Data Science', enrolled: false,
    title: 'Data Science with Pandas',
    desc: 'Analyze data effectively with Python Pandas. Emotion-paced exercises.',
    lessons: 20, hours: 14, level: 'Intermediate',
  },
  {
    id: 4, emoji: '🤖', bg: '#f59e0b',
    category: 'AI & ML', enrolled: false,
    title: 'Machine Learning Essentials',
    desc: 'Foundational ML concepts with adaptive difficulty curves.',
    lessons: 30, hours: 20, level: 'Advanced',
  },
  {
    id: 5, emoji: '🎨', bg: '#ec4899',
    category: 'Design', enrolled: false,
    title: 'UI/UX Design Principles',
    desc: 'Design thinking meets emotion-aware learning for creative confidence.',
    lessons: 16, hours: 8, level: 'Beginner',
  },
  {
    id: 6, emoji: '☁️', bg: '#0ea5e9',
    category: 'Cloud', enrolled: false,
    title: 'AWS Cloud Practitioner',
    desc: 'Cloud fundamentals with stress-aware pacing for certification prep.',
    lessons: 22, hours: 15, level: 'Beginner',
  },
];

const filters = ['All Courses', 'Programming', 'Data Science', 'Design', 'AI & ML'];

export default function CourseCatalog() {
  const [active, setActive]   = useState('All Courses');
  const [search, setSearch]   = useState('');

  const filtered = courses.filter(c => {
    const matchFilter = active === 'All Courses' || c.category === active;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Courses" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Course Catalog</h1>
            <p className="text-gray-400 text-sm">Emotion-optimized courses curated for your learning style</p>
          </div>
          {/* Search */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="dark-input pl-9 w-64"
            />
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === f
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white border border-[rgba(99,130,255,0.15)] hover:border-blue-500/40'
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(c => (
            <Link to={`/courses/${c.id}`} key={c.id}
              className="dark-card hover:border-blue-500/30 transition-all duration-200 hover:-translate-y-1 overflow-hidden p-0 block">

              {/* Course banner */}
              <div className="h-40 flex items-center justify-center text-5xl relative"
                style={{ background: c.bg }}>
                {c.emoji}
              </div>

              {/* Course info */}
              <div className="p-5">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(99,130,255,0.15)', color: '#7b9fff' }}>
                    {c.category}
                  </span>
                  {c.enrolled && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(16,185,129,0.15)', color: '#10b981' }}>
                      Enrolled
                    </span>
                  )}
                </div>

                <h3 className="text-white font-bold text-base mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{c.desc}</p>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-gray-500 text-xs">
                  <span>📚 {c.lessons} Lessons</span>
                  <span>⏱ {c.hours} Hours</span>
                  <span>📶 {c.level}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-white font-semibold text-lg mb-2">No courses found</p>
            <p className="text-gray-400 text-sm">Try a different search or filter</p>
          </div>
        )}

      </div>
    </div>
  );
}