import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';

// ── LESSON DATA ────────────────────────────────────────────
const lessonData = {
  module: 'Module 3 · Lesson 8',
  title: 'Functions & Parameters',
  emotion: 'Happy & Engaged',
  outline: [
    { id: 1, title: 'What is a Function?',      done: true },
    { id: 2, title: 'Parameters vs Arguments',  active: true },
    { id: 3, title: 'Return Values',            done: false },
    { id: 4, title: 'Default Parameters',       done: false },
    { id: 5, title: 'Practice Exercise',        done: false },
  ],
};

// ── LESSON OUTLINE SIDEBAR ─────────────────────────────────
function LessonOutline({ outline }) {
  return (
    <div className="dark-card mb-4">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-blue-400">☰</span>
        <span className="text-white font-semibold text-sm">Lesson Outline</span>
      </div>
      <div className="space-y-2">
        {outline.map((item) => (
          <div key={item.id}
            className={`flex items-center gap-3 p-2 rounded-lg text-sm transition-all ${
              item.active
                ? 'bg-blue-500/10'
                : 'hover:bg-white/5 cursor-pointer'
            }`}>
            <div className={`w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${
              item.done
                ? 'bg-green-500'
                : item.active
                ? 'bg-blue-500'
                : 'bg-gray-600'
            }`}>
              {item.done && <span className="text-white text-xs">✓</span>}
              {item.active && <span className="w-1.5 h-1.5 bg-white rounded-full block" />}
            </div>
            <span className={
              item.done ? 'text-gray-400' :
              item.active ? 'text-white font-medium' :
              'text-gray-500'
            }>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── EMOTION ADAPTATION CARD ────────────────────────────────
function EmotionAdaptation() {
  return (
    <div className="rounded-xl p-4"
      style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)' }}>
      <div className="flex items-center gap-2 mb-2">
        <span>🧠</span>
        <span className="text-purple-300 font-semibold text-sm">Emotion Adaptation</span>
      </div>
      <p className="text-gray-300 text-sm">
        Great energy! Increasing content complexity slightly.
      </p>
    </div>
  );
}

// ── CODE BLOCK ─────────────────────────────────────────────
function CodeBlock({ code }) {
  return (
    <div className="rounded-xl overflow-hidden my-4"
      style={{ background: '#0a0f1e', border: '1px solid rgba(99,130,255,0.15)' }}>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[rgba(99,130,255,0.1)]">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
      </div>
      <pre className="p-4 text-sm overflow-x-auto"
        style={{ fontFamily: 'JetBrains Mono, monospace', lineHeight: '1.7' }}>
        <code className="text-gray-200">{code}</code>
      </pre>
    </div>
  );
}

// ── TRY IT YOURSELF ────────────────────────────────────────
function TryItYourself() {
  const [code, setCode] = useState('def area(width, height):\n    # your code here');
  const [output, setOutput] = useState('');

  const runCode = () => {
    setOutput('✅ Output: area(5, 3) → 15\nGreat job! Your function works correctly.');
  };

  return (
    <div className="dark-card mt-6">
      <h3 className="text-white font-semibold mb-2">Try It Yourself</h3>
      <p className="text-gray-400 text-sm mb-4">
        Write a function that calculates the area of a rectangle:
      </p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={4}
        className="w-full rounded-xl p-4 text-sm text-gray-200 resize-none focus:outline-none focus:border-blue-500 transition-colors"
        style={{
          background: '#0a0f1e',
          border: '1px solid rgba(99,130,255,0.15)',
          fontFamily: 'JetBrains Mono, monospace',
          lineHeight: '1.7',
        }}
      />
      {output && (
        <div className="mt-3 p-3 rounded-lg text-sm text-green-300"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
          {output}
        </div>
      )}
      <div className="flex gap-3 mt-4">
        <button onClick={runCode} className="btn-primary flex items-center gap-2 px-5 py-2.5 text-sm">
          ▶ Run Code
        </button>
        <Link to="/hints"
          className="btn-secondary flex items-center gap-2 px-5 py-2.5 text-sm">
          💡 Get Hint
        </Link>
      </div>
    </div>
  );
}

// ── MAIN LESSON PAGE ───────────────────────────────────────
export default function LessonPage() {
  const [showBreak, setShowBreak] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Courses" />

      {/* Progress bar at top */}
      <div className="fixed top-[65px] left-0 right-0 h-1 z-40"
        style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div className="h-1 bg-blue-500 transition-all" style={{ width: '65%' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/courses/1"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Course
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#fcd34d' }}>
              😊 Happy & Engaged
            </span>
            <button
              onClick={() => setShowBreak(true)}
              className="text-gray-400 hover:text-white transition-colors text-lg"
              title="Take a break">
              ☕
            </button>
          </div>
        </div>

        {/* Module label */}
        <p className="text-blue-400 text-sm font-medium mb-2">{lessonData.module}</p>
        <h1 className="text-3xl font-bold text-white mb-8">{lessonData.title}</h1>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left — lesson content */}
          <div className="lg:col-span-2 space-y-6">

            {/* Section 1 */}
            <div className="dark-card">
              <h2 className="text-white font-semibold text-lg mb-3">What is a Function?</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                A <span className="text-white font-semibold">function</span> is a reusable block of code that performs a specific task.
                Think of it as a recipe — you define it once, then use it whenever you need that result.
              </p>
              <CodeBlock code={`# Defining a function
def greet(name):
    return f"Hello, {name}!"

# Calling the function
message = greet("Alex")
print(message)  # Hello, Alex!`} />
            </div>

            {/* Section 2 */}
            <div className="dark-card">
              <h2 className="text-white font-semibold text-lg mb-3">Parameters vs Arguments</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                <span className="text-white font-semibold">Parameters</span> are variables listed in the function definition.{' '}
                <span className="text-white font-semibold">Arguments</span> are values passed when calling the function.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl p-4"
                  style={{ background: 'rgba(67,97,238,0.1)', border: '1px solid rgba(67,97,238,0.2)' }}>
                  <p className="text-blue-400 text-xs font-semibold mb-2">Parameters (Definition)</p>
                  <code className="text-blue-300 text-sm"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    def add(a, b):
                  </code>
                </div>
                <div className="rounded-xl p-4"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <p className="text-green-400 text-xs font-semibold mb-2">Arguments (Call)</p>
                  <code className="text-green-300 text-sm"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    add(3, 5)
                  </code>
                </div>
              </div>
            </div>

            {/* Try it yourself */}
            <TryItYourself />

          </div>

          {/* Right — sidebar */}
          <div className="space-y-4">
            <LessonOutline outline={lessonData.outline} />
            <EmotionAdaptation />
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex items-center justify-between mt-10 pt-6"
          style={{ borderTop: '1px solid rgba(99,130,255,0.1)' }}>
          <button className="btn-secondary flex items-center gap-2 px-6 py-3">
            ← Previous
          </button>
          <Link to="/quiz/1" className="btn-primary flex items-center gap-2 px-8 py-3">
            Take Quiz →
          </Link>
        </div>

      </div>

      {/* Break modal */}
      {showBreak && (
        <BreakModal onClose={() => setShowBreak(false)} />
      )}
    </div>
  );
}

// ── BREAK MODAL ────────────────────────────────────────────
function BreakModal({ onClose }) {
  const [seconds, setSeconds] = useState(105);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <div className="w-full max-w-md mx-4 rounded-2xl p-8 text-center"
        style={{ background: '#1a2540', border: '1px solid rgba(99,130,255,0.2)' }}>
        <div className="text-5xl mb-4">🧘</div>
        <h2 className="text-2xl font-bold text-white mb-2">Time for a Mindful Break</h2>
        <p className="text-gray-400 text-sm mb-1">Our emotion system detected elevated stress levels.</p>
        <p className="text-gray-400 text-sm mb-6">
          Take a moment to breathe. Research shows short breaks improve retention by 20%.
        </p>
        <div className="text-4xl font-bold mb-8"
          style={{ color: '#4361ee' }}>
          {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}
        </div>
        <div className="flex gap-3 justify-center">
          <button className="btn-primary px-6 py-3">
            Guided Breathing
          </button>
          <button onClick={onClose} className="btn-secondary px-6 py-3">
            Skip Break
          </button>
        </div>
      </div>
    </div>
  );
}