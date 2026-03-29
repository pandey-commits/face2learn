import { useParams, Link } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';

const coursesData = {
  1: {
    emoji: '🐍', bg: '#4361ee', category: 'Programming',
    title: 'Python Fundamentals', progress: 65,
    desc: 'Complete introduction to Python programming. Our emotion engine adjusts lesson complexity, examples, and pacing based on your real-time emotional state.',
    lessons: 24, hours: 12, students: 8234, rating: 4.9,
    modules: [
      { id: 1, title: 'Module 1: Getting Started',      sub: 'Variables, Data Types, I/O',         status: 'completed' },
      { id: 2, title: 'Module 2: Control Flow',         sub: 'If/Else, Loops, Logic',               status: 'completed' },
      { id: 3, title: 'Module 3: Functions',            sub: 'Definitions, Parameters, Returns',    status: 'inprogress' },
      { id: 4, title: 'Module 4: Data Structures',      sub: 'Lists, Tuples, Dicts, Sets',          status: 'locked' },
      { id: 5, title: 'Module 5: File Handling & OOP',  sub: 'Classes, Objects, Files',             status: 'locked' },
    ],
  },
  2: {
    emoji: '⚛️', bg: '#7c3aed', category: 'Frontend',
    title: 'React Masterclass', progress: 30,
    desc: 'Build modern web apps with React. Adaptive exercises adjust to your confidence level.',
    lessons: 18, hours: 10, students: 6100, rating: 4.8,
    modules: [
      { id: 1, title: 'Module 1: React Basics',         sub: 'JSX, Components, Props',              status: 'completed' },
      { id: 2, title: 'Module 2: State & Events',       sub: 'useState, Handlers, Forms',           status: 'inprogress' },
      { id: 3, title: 'Module 3: Component Lifecycle',  sub: 'useEffect, Mounting, Cleanup',        status: 'locked' },
      { id: 4, title: 'Module 4: Routing',              sub: 'React Router, Navigation',            status: 'locked' },
    ],
  },
};

function StatusIcon({ status }) {
  if (status === 'completed')  return <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400 text-sm">✓</div>;
  if (status === 'inprogress') return <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm">▶</div>;
  return <div className="w-8 h-8 rounded-full bg-gray-700/50 border border-gray-600/40 flex items-center justify-center text-gray-500 text-sm">🔒</div>;
}

function StatusBadge({ status }) {
  if (status === 'completed')  return <span className="text-green-400 text-sm font-medium">Completed</span>;
  if (status === 'inprogress') return <span className="text-blue-400 text-sm font-medium">In Progress</span>;
  return <span className="text-gray-500 text-sm">Locked</span>;
}

export default function CourseDetail() {
  const { id } = useParams();
  const course  = coursesData[id] || coursesData[1];

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Courses" />

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">

        {/* Back button */}
        <Link to="/courses"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-6 transition-colors">
          ← Back to Courses
        </Link>

        {/* Course banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8"
          style={{ background: course.bg, height: '200px' }}>
          <div className="flex items-center justify-center h-full text-7xl">
            {course.emoji}
          </div>
          {/* Overlay info */}
          <div className="absolute bottom-4 left-5">
            <span className="text-sm font-medium px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
              {course.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-5">
            <span className="text-white font-semibold text-sm">
              {course.progress}% Complete
            </span>
          </div>
          {/* Progress bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: 'rgba(255,255,255,0.2)' }}>
            <div className="h-1 bg-white transition-all"
              style={{ width: `${course.progress}%` }} />
          </div>
        </div>

        {/* Course info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-3">{course.title}</h1>
          <p className="text-gray-400 leading-relaxed mb-5">{course.desc}</p>

          {/* Meta */}
          <div className="flex flex-wrap gap-6 text-gray-400 text-sm">
            <span>📚 {course.lessons} Lessons</span>
            <span>⏱ {course.hours} Hours</span>
            <span>👥 {course.students.toLocaleString()} Students</span>
            <span>⭐ {course.rating} Rating</span>
          </div>
        </div>

        {/* Modules */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">Course Modules</h2>
          <div className="space-y-3">
            {course.modules.map((mod) => (
              <div key={mod.id}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                  mod.status === 'inprogress'
                    ? 'border-blue-500/30 bg-blue-500/5'
                    : mod.status === 'completed'
                    ? 'border-green-500/20 bg-green-500/5'
                    : 'border-[rgba(99,130,255,0.1)] bg-[#0f1729]/50'
                }`}>

                <StatusIcon status={mod.status} />

                <div className="flex-1">
                  <p className={`font-medium text-sm ${
                    mod.status === 'locked' ? 'text-gray-500' : 'text-white'
                  }`}>
                    {mod.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{mod.sub}</p>
                </div>

                <StatusBadge status={mod.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Start / Continue button */}
        <div className="mt-8">
          <Link to="/lesson/1"
            className="block w-full text-center btn-primary py-4 text-base">
            {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
          </Link>
        </div>

      </div>
    </div>
  );
}
