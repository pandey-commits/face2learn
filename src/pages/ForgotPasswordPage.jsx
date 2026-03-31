import { useState } from 'react';
import { Link }     from 'react-router-dom';
import Navbar       from '../components/layout/Navbar';
import { resetPassword } from '../firebase/auth';

// 3 steps: enter email → sending → success
const STEPS = { INPUT: 'input', LOADING: 'loading', SUCCESS: 'success' };

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [step,  setStep]  = useState(STEPS.INPUT);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) { setError('Please enter your email address!'); return; }

    try {
      setError('');
      setStep(STEPS.LOADING);
      await resetPassword(email);
      setStep(STEPS.SUCCESS);
    } catch (err) {
      setStep(STEPS.INPUT);
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Something went wrong. Please try again.');
      }
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

            {/* ── STEP 1: Input email ── */}
            {step === STEPS.INPUT && (
              <>
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center
                                  justify-center text-3xl"
                    style={{
                      background: 'rgba(67,97,238,0.15)',
                      border: '1px solid rgba(67,97,238,0.3)',
                    }}>
                    🔑
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-white text-center mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-400 text-sm text-center mb-8 leading-relaxed">
                  No worries! Enter your email and we'll send you
                  a link to reset your password.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="dark-input"
                      placeholder="you@example.com"
                      autoFocus
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="text-red-400 text-sm p-3 rounded-lg"
                      style={{
                        background: 'rgba(239,68,68,0.1)',
                        border: '1px solid rgba(239,68,68,0.2)',
                      }}>
                      ⚠️ {error}
                    </div>
                  )}

                  <button type="submit" className="w-full btn-primary py-3">
                    Send Reset Link
                  </button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-6">
                  Remember your password?{' '}
                  <Link to="/login"
                    className="text-blue-400 hover:text-blue-300
                               transition-colors font-medium">
                    Sign in
                  </Link>
                </p>
              </>
            )}

            {/* ── STEP 2: Loading ── */}
            {step === STEPS.LOADING && (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full border-4 border-blue-500
                                border-t-transparent animate-spin mx-auto mb-6" />
                <h2 className="text-white font-bold text-xl mb-2">Sending...</h2>
                <p className="text-gray-400 text-sm">
                  Please wait while we send your reset link.
                </p>
              </div>
            )}

            {/* ── STEP 3: Success ── */}
            {step === STEPS.SUCCESS && (
              <div className="text-center py-4">
                {/* Success icon */}
                <div className="w-20 h-20 rounded-full flex items-center
                                justify-center text-4xl mx-auto mb-6"
                  style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '2px solid rgba(16,185,129,0.3)',
                  }}>
                  ✉️
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                  Check your email!
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                  We sent a password reset link to:
                </p>
                <p className="text-blue-400 font-medium mb-6">{email}</p>

                {/* Instructions */}
                <div className="rounded-xl p-4 mb-6 text-left space-y-3"
                  style={{
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.2)',
                  }}>
                  {[
                    '1. Open your email inbox',
                    '2. Click the reset link in the email',
                    '3. Choose a new strong password',
                    '4. Come back and sign in!',
                  ].map(step => (
                    <p key={step} className="text-green-300 text-sm flex items-center gap-2">
                      <span className="text-green-400">✓</span> {step}
                    </p>
                  ))}
                </div>

                {/* Resend option */}
                <p className="text-gray-400 text-sm mb-6">
                  Didn't receive the email?{' '}
                  <button
                    onClick={() => { setStep(STEPS.INPUT); setError(''); }}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Try again
                  </button>
                </p>

                {/* Back to login */}
                <Link to="/login" className="block w-full btn-primary py-3 text-center">
                  Back to Sign In
                </Link>

                {/* Spam note */}
                <p className="text-gray-600 text-xs mt-4">
                  💡 Check your spam folder if you don't see the email in 2 minutes.
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}