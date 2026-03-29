import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{ background: 'rgba(8,13,26,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(99,130,255,0.1)' }}>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
          F2
        </div>
        <span className="text-white font-bold text-lg">Face2Learn</span>
      </Link>

      {/* Right side buttons */}
      <div className="flex items-center gap-3">
        <Link to="/login"
          className="text-gray-300 hover:text-white font-medium px-4 py-2 transition-colors">
          Sign In
        </Link>
        <Link to="/register"
          className="relative bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition-all duration-200">
          Get Started
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            DEMO
          </span>
        </Link>
      </div>
    </nav>
  );
}
