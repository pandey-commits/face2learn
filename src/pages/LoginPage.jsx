import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { loginUser } from '../firebase/auth';

export default function LoginPage() {
  const navigate          = useNavigate();
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [error,    setError]    = useState('');
  const [loading,  setLoading]  = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields!');
      return;
    }
    try {
      setError('');
      setLoading(true);
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#060b18' }}>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="w-full max-w-md">
          <div className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(145deg, #0f1d35, #0d1a30)',
              border: '1px solid rgba(99,130,255,0.15)',
            }}>

            {/* Logo icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #4361ee, #7c3aed)',
                  boxShadow: '0 8px 25px rgba(67,97,238,0.3)',
                }}>
                <span className="text-white font-bold text-xl">F2</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center mb-1">
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm text-center mb-6">
              Sign in to continue your learning journey
            </p>

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

              {/* Password with eye toggle */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="dark-input pr-12"
                    placeholder="Enter your password"
                  />
                  {/* Eye toggle button */}
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               text-gray-400 hover:text-white transition-colors
                               text-lg focus:outline-none"
                    title={showPass ? 'Hide password' : 'Show password'}>
                    {showPass ? '🙈' : '👁️'}
                  </button>
                </div>
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
                <button
                  type="button"
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                  Forgot?
                </button>
              </div>

              {/* Error message */}
              {error && (
                <div className="text-red-400 text-sm p-3 rounded-lg"
                  style={{
                    background: 'rgba(239,68,68,0.1)',
                    border: '1px solid rgba(239,68,68,0.2)',
                  }}>
                  ⚠️ {error}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-3 mt-2 disabled:opacity-60
                           disabled:cursor-not-allowed">
                {loading ? '⏳ Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Sign up link */}
            <p className="text-center text-gray-400 text-sm mt-6">
              Don't have an account?{' '}
              <Link to="/register"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}