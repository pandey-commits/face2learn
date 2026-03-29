import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';

const hints = [
  {
    level: 1,
    label: 'Gentle Nudge',
    labelColor: '#10b981',
    labelBg: 'rgba(16,185,129,0.15)',
    content: 'Remember: a function to calculate area needs two inputs (width and height) and should',
    code: 'return',
    codeAfter: 'their product.',
    startRevealed: true,
  },
  {
    level: 2,
    label: 'More Help',
    labelColor: '#f59e0b',
    labelBg: 'rgba(245,158,11,0.15)',
    content: 'Try writing: def area(width, height): and on the next line return width * height',
    startRevealed: false,
  },
  {
    level: 3,
    label: 'Full Solution',
    labelColor: '#ef4444',
    labelBg: 'rgba(239,68,68,0.15)',
    content: `def area(width, height):\n    return width * height\n\n# Example usage:\nprint(area(5, 3))  # Output: 15`,
    isCode: true,
    startRevealed: false,
  },
];

function HintCard({ hint }) {
  const [revealed, setRevealed] = useState(hint.startRevealed);

  return (
    <div className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: '#0f1729',
        border: `1px solid ${revealed ? 'rgba(99,130,255,0.2)' : 'rgba(99,130,255,0.1)'}`,
      }}>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: hint.labelBg, color: hint.labelColor }}>
            Level {hint.level}
          </span>
          <span className="text-white font-medium text-sm">{hint.label}</span>
        </div>
        {revealed ? (
          <span className="text-gray-400 text-sm">Revealed</span>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            Reveal
          </button>
        )}
      </div>

      {/* Content */}
      {revealed && (
        <div className="px-5 pb-5 border-t border-[rgba(99,130,255,0.08)]">
          {hint.isCode ? (
            <pre className="mt-4 p-4 rounded-xl text-sm text-gray-200 overflow-x-auto"
              style={{
                background: '#080d1a',
                border: '1px solid rgba(99,130,255,0.1)',
                fontFamily: 'JetBrains Mono, monospace',
                lineHeight: '1.7',
              }}>
              {hint.content}
            </pre>
          ) : (
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              {hint.content}{' '}
              {hint.code && (
                <code className="px-1.5 py-0.5 rounded text-blue-300 text-xs mx-1"
                  style={{ background: 'rgba(67,97,238,0.2)', fontFamily: 'JetBrains Mono, monospace' }}>
                  {hint.code}
                </code>
              )}
              {hint.codeAfter}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default function SmartHints() {
  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Courses" />

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-16">

        {/* Back */}
        <Link to="/lesson/1"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition-colors">
          ← Back to Lesson
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30
                          flex items-center justify-center text-2xl">
            💡
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Smart Hints</h1>
            <p className="text-gray-400 text-sm">Contextual help based on your current progress and emotion</p>
          </div>
        </div>

        {/* Context banner */}
        <div className="rounded-xl p-4 mb-6"
          style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)' }}>
          <div className="flex items-center gap-2 mb-1">
            <span>🎯</span>
            <span className="text-yellow-300 font-semibold text-sm">
              Current Context: Functions & Parameters
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            We noticed you paused on the "Try It Yourself" exercise.
            Here's a progressive hint system:
          </p>
        </div>

        {/* Hint cards */}
        <div className="space-y-3 mb-6">
          {hints.map((hint) => (
            <HintCard key={hint.level} hint={hint} />
          ))}
        </div>

        {/* Emotion recommendation */}
        <div className="rounded-xl p-5"
          style={{ background: '#0f1729', border: '1px solid rgba(99,130,255,0.15)' }}>
          <div className="flex items-center gap-2 mb-2">
            <span>🧠</span>
            <span className="text-white font-semibold text-sm">Emotion-Based Recommendation</span>
          </div>
          <p className="text-gray-400 text-sm">
            Great mood! Challenge yourself without hints first.
          </p>
        </div>

      </div>
    </div>
  );
}