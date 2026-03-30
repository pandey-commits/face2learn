import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

// ── HERO ───────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center
                        text-center px-6 pt-24 pb-16 relative overflow-hidden">

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #4361ee, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[700px] h-[400px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(ellipse, #4361ee, transparent 70%)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,130,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,130,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

      {/* Badge */}
      <div className="relative z-10 inline-flex items-center gap-2 px-5 py-2
                      rounded-full mb-8"
        style={{
          background: 'rgba(67,97,238,0.1)',
          border: '1px solid rgba(67,97,238,0.3)',
          backdropFilter: 'blur(10px)',
        }}>
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-blue-300 text-sm font-medium">
          AI-Powered Emotion-Aware Learning
        </span>
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold
                     text-gray-100 leading-tight mb-4">
        Learn Smarter, Not Harder
        <br />
        <span className="text-transparent bg-clip-text"
          style={{ backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)' }}>
          With MindFlow
        </span>
      </h1>

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
      <div className="relative z-10 flex flex-wrap justify-center gap-8
                      mt-14 text-gray-400 text-sm">
        {[
          { icon: '👥', text: '50K+ Learners' },
          { icon: '⭐', text: '4.9 Rating' },
          { icon: '🏆', text: 'Certified' },
        ].map(s => (
          <div key={s.text} className="flex items-center gap-2">
            <span>{s.icon}</span> {s.text}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── FEATURES ───────────────────────────────────────────────
const features = [
  { icon: '🧠', title: 'Emotion Detection',  desc: 'Real-time behavioral analysis tracks engagement, frustration, and confidence through interaction patterns.', gradient: 'from-blue-500/20 to-purple-500/20' },
  { icon: '⚡', title: 'Adaptive Content',   desc: 'Lessons automatically adjust difficulty, pacing, and presentation style to match your current state.', gradient: 'from-purple-500/20 to-pink-500/20' },
  { icon: '💡', title: 'Smart Hints',        desc: 'Contextual hints appear when struggle is detected, guiding without giving away answers.', gradient: 'from-yellow-500/20 to-orange-500/20' },
  { icon: '⏸️', title: 'Break Reminders',    desc: 'Automatic break suggestions when stress peaks, with guided breathing exercises.', gradient: 'from-green-500/20 to-teal-500/20' },
  { icon: '📊', title: 'Emotion Analytics',  desc: 'Detailed charts showing emotional patterns, optimal study times, and learning efficiency.', gradient: 'from-cyan-500/20 to-blue-500/20' },
  { icon: '🏆', title: 'Gamified Progress',  desc: 'Earn XP, badges, and streaks while the system keeps you in the optimal flow state.', gradient: 'from-orange-500/20 to-red-500/20' },
];

function FeaturesSection() {
  return (
    <section className="py-24 px-6 relative"
      style={{ background: 'linear-gradient(180deg, #060b18 0%, #080d1a 100%)' }}>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(99,130,255,0.3), transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            How Emotion-Aware Learning Works
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Our platform monitors your engagement and emotional state to deliver
            a personalized learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title}
              className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: 'linear-gradient(145deg, #0f1d35, #0d1a30)',
                border: '1px solid rgba(99,130,255,0.1)',
              }}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.gradient}
                              flex items-center justify-center text-2xl mb-5
                              group-hover:scale-110 transition-transform duration-300`}>
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

// ── TESTIMONIALS ───────────────────────────────────────────
const testimonials = [
  { name: 'Sirjana Poudel',   role: 'Data Science Student',  color: 'from-orange-400 to-pink-500',   image: '/avatar/Sirjana.png',   quote: 'The break reminders saved my study sessions. I used to burn out, now I stay in flow for hours.' },
  { name: 'Bimal Pandey', role: 'Web Developer',         color: 'from-blue-400 to-cyan-500',    image:'/avatar/Bimal.png',   quote: 'The adaptive quizzes are brilliant. When I was struggling, it gave easier questions to build confidence.' },
  { name: 'Sadhana Dhital',  role: 'UX Designer',           color: 'from-purple-400 to-pink-500',  image:'/avatar/Sadhana.png',  quote: "I love how the platform notices when I'm bored and switches up the content. Keeps me engaged!" },
];

function TestimonialsSection() {
  return (
    <section className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #080d1a 0%, #060b18 100%)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-14">
          Loved by Learners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name}
              className="rounded-xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #0f1d35, #0d1a30)',
                border: '1px solid rgba(99,130,255,0.12)',
              }}>
              {/* Subtle gradient top */}
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, rgba(99,130,255,0.3), transparent)` }} />
              <div className="text-yellow-400 text-lg mb-4">★★★★★</div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <img
  src={t.image}
  alt={t.name}
  className="w-10 h-10 rounded-full object-cover"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }}
/>
<div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color}
                items-center justify-center text-white font-bold text-sm hidden`}>
  {t.name[0]}
</div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
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
    <footer className="py-8 px-6"
      style={{
        background: '#060b18',
        borderTop: '1px solid rgba(99,130,255,0.08)',
      }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row
                      justify-between items-center gap-4">
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