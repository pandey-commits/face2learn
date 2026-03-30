import { Link } from 'react-router-dom';

export default function AppNavbar({ active }) {
  const links = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Courses',   to: '/courses'   },
    { label: 'Analytics', to: '/analytics' },
    { label: '😊 Emotion', to: '/emotion'  },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center
                    justify-between px-8 py-4"
      style={{
        background: 'rgba(6,11,24,0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99,130,255,0.08)',
      }}>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center
                        font-bold text-white text-sm"
          style={{ background: 'linear-gradient(135deg, #4361ee, #7c3aed)' }}>
          F2
        </div>
        <span className="text-white font-bold text-lg">Face2Learn</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-8">
        {links.map(l => (
          <Link key={l.label} to={l.to}
            className={`font-medium text-sm transition-all duration-200 pb-1 ${
              active === l.label.replace('😊 ', '')
                ? 'text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white'
            }`}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center
                           text-gray-400 hover:text-white transition-colors"
          style={{ background: 'rgba(99,130,255,0.08)' }}>
          🔔
        </button>
        <Link to="/profile" className="relative group">
          <div className="w-9 h-9 rounded-full flex items-center justify-center
                          text-white font-bold text-sm
                          group-hover:ring-2 group-hover:ring-blue-400
                          transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #4361ee, #7c3aed)' }}>
            AK
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500
                           rounded-full border-2 border-[#060b18]" />
        </Link>
        <span className="text-xs font-bold px-2 py-1 rounded-lg text-white"
          style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}>
          DEMO
        </span>
      </div>
    </nav>
  );
}