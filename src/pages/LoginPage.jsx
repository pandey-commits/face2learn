import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { loginUser } from '../firebase/auth';

export default function LoginPage() {
  const [email, setEmail]       = useState('demo@mindflow.com');
  const [password, setPassword] = useState('demo1234');
  const [remember, setRemember] = useState(true);

 const navigate  = useNavigate();
const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setError('');
    await loginUser(email, password);
    navigate('/dashboard');
  } catch (err) {
    setError('Invalid email or password. Try again!');
  }
};

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="w-full max-w-md">

          {/* Card */}
          <div className="rounded-2xl p-8" style={{ background: '#0f1729', border: '1px solid rgba(99,130,255,0.15)' }}>

            {/* Logo icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <span className="text-blue-400 text-2xl font-bold">F2</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center mb-1">Welcome Back</h1>
            <p className="text-gray-400 text-sm text-center mb-6">Sign in to continue your learning journey</p>

            {/* Demo banner */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg mb-6 text-sm"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <span>⚠️</span>
              <span className="text-yellow-300">Demo Mode — Face2Learn Test Account</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="dark-input"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="dark-input"
                  placeholder="••••••••"
                />
              </div>

              {/* Remember me + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="w-4 h-4 rounded accent-blue-500"
                  />
                  <span className="text-gray-300 text-sm">Remember me</span>
                </label>
                <a href="#" className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                  Forgot?
                </a>
              </div>

              {error && (
  <div className="text-red-400 text-sm p-3 rounded-lg"
    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
    {error}
  </div>
)}

              {/* Submit */}
              <button type="submit" className="w-full btn-primary py-3 mt-2">
                Sign In
              </button>
            </form>

            {/* Sign up link */}
            <p className="text-center text-gray-400 text-sm mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}