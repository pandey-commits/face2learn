import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center
                    justify-between px-8 py-4"
      style={{
        background: 'rgba(6,11,24,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,130,255,0.08)',
      }}>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img 
        src="logo01.png"
        alt="Face2Learn"
        className="w-9 h-9 rounded-lg object-contain"
        />

      <span className="font-bold text-2xl">
      <span className="text-blue-500">Face</span><span className="text-white-500">2</span><span className="text-blue-500">Learn</span>
      </span>
      </Link>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <Link to="/login"
          className="text-gray-300 hover:text-white font-medium px-4 py-2 transition-colors">
          Sign In
        </Link>
        <Link to="/register" className="relative btn-primary px-5 py-2 text-sm">
          Get Started
        </Link>
      </div>
    </nav>
  );
}