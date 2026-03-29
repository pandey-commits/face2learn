import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// ── HERO SECTION ──────────────────────────────────────────
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(ellipse, #4361ee 0%, #7c3aed 50%, transparent 70%)' }} />
      </div>

      {/* AI badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 border border-blue-500/30 bg-blue-500/10">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-blue-300 text-sm font-medium">AI-Powered Emotion-Aware Learning</span>
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
        Learn Smarter, Not Harder
        <br />
        <span className="text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
          With MindFlow
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 text-gray-400 text-lg max-w-xl mt-4 mb-10 leading-relaxed">
        Face2Learn adapts to your emotions in real-time. When you're confused, we simplify.
        When you're bored, we challenge. When you're stressed, we pause.
      </p>

      {/* Buttons */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4">
        <Link to="/register" className="btn-primary text-lg px-8 py-4">
          Start Learning Free
        </Link>
        <Link to="/courses"
          className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
          <span>▶</span> Explore Courses
        </Link>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 mt-14 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <span>👥</span> 50K+ Learners
        </div>
        <div className="flex items-center gap-2">
          <span>⭐</span> 4.9 Rating
        </div>
        <div className="flex items-center gap-2">
          <span>🏆</span> Certified
        </div>
      </div>
    </section>
  );
}

// ── FEATURES SECTION ──────────────────────────────────────
const features = [
  { icon: '🧠', title: 'Emotion Detection', desc: 'Real-time behavioral analysis tracks engagement, frustration, and confidence through interaction patterns.' },
  { icon: '⚡', title: 'Adaptive Content',  desc: 'Lessons automatically adjust difficulty, pacing, and presentation style to match your current state.' },
  { icon: '💡', title: 'Smart Hints',       desc: 'Contextual hints appear when struggle is detected, guiding without giving away answers.' },
  { icon: '⏸️', title: 'Break Reminders',   desc: 'Automatic break suggestions when stress peaks, with guided breathing exercises.' },
  { icon: '📊', title: 'Emotion Analytics', desc: 'Detailed charts showing emotional patterns, optimal study times, and learning efficiency.' },
  { icon: '🏆', title: 'Gamified Progress', desc: 'Earn XP, badges, and streaks while the system keeps you in the optimal flow state.' },
];

function FeaturesSection() {
  return (
    <section className="py-24 px-6" style={{ background: '#0a0f1e' }}>
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Emotion-Aware Learning Works
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Our platform monitors your engagement and emotional state to deliver a personalized learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="dark-card hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#0f1729] flex items-center justify-center text-2xl mb-5">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TESTIMONIALS SECTION ───────────────────────────────────
const testimonials = [
  { name: 'Sarah Chen',  role: 'Data Science Student', color: '#f97316', quote: 'The break reminders saved my study sessions. I used to burn out, now I stay in flow for hours.' },
  { name: 'James Wright', role: 'Web Developer',       color: '#3b82f6', quote: 'The adaptive quizzes are brilliant. When I was struggling, it gave easier questions to build confidence.' },
  { name: 'Priya Patel', role: 'UX Designer',          color: '#a855f7', quote: 'I love how the platform notices when I\'m bored and switches up the content format. Keeps me engaged!' },
];

function TestimonialsSection() {
  return (
    <section className="py-24 px-6" style={{ background: '#080d1a' }}>
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white text-center mb-14">
          Loved by Learners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="dark-card">
              {/* Stars */}
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ background: t.color }}>
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ─────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[rgba(99,130,255,0.1)]"
      style={{ background: '#080d1a' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">© 2025 Face2Learn. All rights reserved.</p>
        <div className="flex gap-6 text-gray-500 text-sm">
          <button className="hover:text-white transition-colors">Privacy</button>
<button className="hover:text-white transition-colors">Terms</button>
<button className="hover:text-white transition-colors">Support</button>
        </div>
      </div>
    </footer>
  );
}

// ── MAIN PAGE ──────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
