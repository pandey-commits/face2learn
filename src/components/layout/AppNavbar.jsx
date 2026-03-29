import { Link } from 'react-router-dom';

export default function AppNavbar({ active }) {
  const links = [
    { label: 'Dashboard', to: '/dashboard' },
    { label: 'Courses',   to: '/courses'   },
    { label: 'Analytics', to: '/analytics' },
    { label: '😊 Emotion', to: '/emotion'  },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        background: 'rgba(8,13,26,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(99,130,255,0.1)'
      }}>

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
          F2
        </div>
        <span className="text-white font-bold text-lg">Face2Learn</span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        {links.map(l => (
          <Link key={l.label} to={l.to}
            className={`font-medium text-sm transition-colors pb-1 ${
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

        {/* Notification bell */}
        <button className="text-gray-400 hover:text-white transition-colors">
          🔔
        </button>

        {/* Profile avatar — clicking goes to /profile */}
        <Link to="/profile" className="relative group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600
                          flex items-center justify-center text-white font-bold text-sm
                          group-hover:ring-2 group-hover:ring-blue-400 transition-all">
            AK
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full
                           border-2 border-[#080d1a]" />
        </Link>

        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          DEMO
        </span>
      </div>
    </nav>
  );
}