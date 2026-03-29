import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { registerUser } from '../firebase/auth';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [error,  setError]  = useState('');
  const [form,   setForm]   = useState({
    firstName: '',
    lastName:  '',
    email:     '',
    password:  '',
    role:      'Student',
    agreed:    false,
  });

  const update = (field, value) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.agreed)    { setError('Please agree to the terms first!'); return; }
    if (!form.email)     { setError('Please enter your email!'); return; }
    if (!form.firstName) { setError('Please enter your first name!'); return; }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters!'); return;
    }
    try {
      setError('');
      await registerUser(
        form.firstName,
        form.lastName,
        form.email,
        form.password,
        form.role
      );
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#080d1a' }}>
      <Navbar />

      <div className="flex items-center justify-center min-h-screen px-4 pt-20 pb-10">
        <div className="w-full max-w-md">
          <div className="rounded-2xl p-8"
            style={{ background: '#0f1729', border: '1px solid rgba(99,130,255,0.15)' }}>

            {/* Title */}
            <h1 className="text-2xl font-bold text-white text-center mb-1">
              Create Your Account
            </h1>
            <p className="text-gray-400 text-sm text-center mb-6">
              Start your emotion-aware learning journey
            </p>

            {/* Demo banner */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg mb-6 text-sm"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <span>⚠️</span>
              <span className="text-yellow-300">Demo Mode — Face2Learn Registration</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">First Name</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    className="dark-input"
                    placeholder="Alex"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                    className="dark-input"
                    placeholder="Kumar"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="dark-input"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => update('password', e.target.value)}
                  className="dark-input"
                  placeholder="Min. 6 characters"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">I am a</label>
                <select
                  value={form.role}
                  onChange={(e) => update('role', e.target.value)}
                  className="dark-input"
                  style={{ cursor: 'pointer' }}>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) => update('agreed', e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-blue-500"
                />
                <span className="text-gray-400 text-sm">
                  I agree to MindFlow's Terms of Service and Privacy Policy,
                  including emotion data processing.
                </span>
              </label>

              {/* Error message */}
              {error && (
                <div className="text-red-400 text-sm p-3 rounded-lg"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  {error}
                </div>
              )}

              {/* Submit */}
              <button type="submit" className="w-full btn-primary py-3">
                Create Account
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              Already a member?{' '}
              <Link to="/login"
                className="text-blue-400 hover:text-blue-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}