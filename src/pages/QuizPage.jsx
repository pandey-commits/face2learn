import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AppNavbar from '../components/layout/AppNavbar';

// ── QUIZ DATA ──────────────────────────────────────────────
const quizData = {
  1: {
    course: 'Python Fundamentals',
    title: 'Functions Quiz',
    questions: [
      {
        id: 1,
        question: 'What is the correct way to define a function in Python?',
        difficulty: 'Standard Difficulty',
        options: [
          { id: 'A', text: 'function greet(name):' },
          { id: 'B', text: 'def greet(name):' },
          { id: 'C', text: 'func greet(name):' },
          { id: 'D', text: 'define greet(name):' },
        ],
        correct: 'B',
      },
      {
        id: 2,
        question: 'What keyword is used to send back a value from a function?',
        difficulty: 'Standard Difficulty',
        options: [
          { id: 'A', text: 'send' },
          { id: 'B', text: 'output' },
          { id: 'C', text: 'return' },
          { id: 'D', text: 'yield' },
        ],
        correct: 'C',
      },
      {
        id: 3,
        question: 'What are variables listed in a function definition called?',
        difficulty: 'Standard Difficulty',
        options: [
          { id: 'A', text: 'Arguments' },
          { id: 'B', text: 'Variables' },
          { id: 'C', text: 'Parameters' },
          { id: 'D', text: 'Inputs' },
        ],
        correct: 'C',
      },
      {
        id: 4,
        question: 'Which of these correctly calls a function named "add" with values 3 and 5?',
        difficulty: 'Standard Difficulty',
        options: [
          { id: 'A', text: 'add(3, 5)' },
          { id: 'B', text: 'call add(3, 5)' },
          { id: 'C', text: 'function add(3, 5)' },
          { id: 'D', text: 'run add with 3, 5' },
        ],
        correct: 'A',
      },
    ],
  },
};

// ── TIMER ──────────────────────────────────────────────────
function Timer({ seconds }) {
  const mins = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, '0');
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl"
      style={{ background: '#1a2540', border: '1px solid rgba(99,130,255,0.2)' }}>
      <span className="text-blue-400">🕐</span>
      <span className="text-white font-bold font-mono">{mins}:{secs}</span>
    </div>
  );
}

// ── QUESTION CARD ──────────────────────────────────────────
function QuestionCard({ question, selected, onSelect }) {
  return (
    <div className="dark-card">

      {/* Question header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-400 text-sm">
          Question {question.id} of 4
        </span>
        <span className="text-xs px-3 py-1 rounded-full"
          style={{ background: 'rgba(67,97,238,0.15)', color: '#7b9fff', border: '1px solid rgba(67,97,238,0.2)' }}>
          {question.difficulty}
        </span>
      </div>

      {/* Question text */}
      <h2 className="text-white font-semibold text-lg mb-6 leading-relaxed">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
              selected === opt.id
                ? 'border-blue-500 bg-blue-500/10 text-white'
                : 'text-gray-300 hover:text-white hover:border-blue-500/40'
            }`}
            style={{
              border: selected === opt.id
                ? '1px solid #4361ee'
                : '1px solid rgba(99,130,255,0.15)',
              background: selected === opt.id
                ? 'rgba(67,97,238,0.1)'
                : 'rgba(255,255,255,0.02)',
            }}>
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 ${
              selected === opt.id
                ? 'bg-blue-500 text-white'
                : 'bg-[#0f1729] text-gray-400'
            }`}>
              {opt.id}
            </span>
            <span className="text-sm">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── RESULTS CARD ───────────────────────────────────────────
function ResultsCard({ score, total, onRetry }) {
  const accuracy  = Math.round((score / total) * 100);
  const xpEarned  = score * 30;

  return (
    <div className="dark-card text-center py-8">
      <div className="text-5xl mb-4">🎉</div>
      <h2 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h2>
      <p className="text-gray-400 text-sm mb-8">Here's how you did:</p>

      {/* Stats */}
      <div className="flex justify-center gap-10 mb-8">
        <div>
          <p className="text-3xl font-bold text-blue-400">{score}/{total}</p>
          <p className="text-gray-400 text-sm mt-1">Score</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-green-400">{accuracy}%</p>
          <p className="text-gray-400 text-sm mt-1">Accuracy</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-400">+{xpEarned}</p>
          <p className="text-gray-400 text-sm mt-1">XP Earned</p>
        </div>
      </div>

      {/* Emotion insight */}
      <div className="rounded-xl p-4 mb-8 text-sm text-gray-300 mx-4"
        style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)' }}>
        🧠 Emotion Insight: You showed high confidence throughout.
        Difficulty will increase in your next quiz.
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <Link to="/lesson/1" className="btn-primary px-6 py-3">
          Back to Lesson
        </Link>
        <Link to="/dashboard" className="btn-secondary px-6 py-3">
          Dashboard
        </Link>
      </div>
    </div>
  );
}

// ── MAIN QUIZ PAGE ─────────────────────────────────────────
export default function QuizPage() {
  const { id }                        = useParams();
  const quiz                          = quizData[id] || quizData[1];
  const [current, setCurrent]         = useState(0);
  const [answers, setAnswers]         = useState({});
  const [submitted, setSubmitted]     = useState(false);
  const [timeLeft, setTimeLeft]       = useState(300);

  // Timer countdown
  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); setSubmitted(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted]);

  const currentQ   = quiz.questions[current];
  const selected   = answers[currentQ.id];
  const progress   = ((current) / quiz.questions.length) * 100;

  const handleSelect = (optId) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: optId }));
  };

  const handleNext = () => {
    if (current < quiz.questions.length - 1) {
      setCurrent(prev => prev + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(prev => prev - 1);
  };

  // Calculate score
  const score = quiz.questions.filter(
    q => answers[q.id] === q.correct
  ).length;

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <AppNavbar active="Courses" />

      <div className="max-w-2xl mx-auto px-6 pt-28 pb-16">

        {/* Quiz header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-blue-400 text-sm font-medium mb-1">{quiz.course}</p>
            <h1 className="text-2xl font-bold text-white">{quiz.title}</h1>
          </div>
          {!submitted && <Timer seconds={timeLeft} />}
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="h-1.5 rounded-full mb-8"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            <div className="h-1.5 rounded-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }} />
          </div>
        )}

        {/* Content */}
        {submitted ? (
          <ResultsCard
            score={score}
            total={quiz.questions.length}
            onRetry={() => {
              setAnswers({});
              setCurrent(0);
              setSubmitted(false);
              setTimeLeft(300);
            }}
          />
        ) : (
          <>
            <QuestionCard
              question={currentQ}
              selected={selected}
              onSelect={handleSelect}
            />

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  current === 0
                    ? 'text-gray-600 border border-gray-700 cursor-not-allowed'
                    : 'btn-secondary'
                }`}>
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!selected}
                className={`px-8 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selected
                    ? 'btn-primary'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}>
                {current === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next'}
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}