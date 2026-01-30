import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Don't show navbar on home (handled by PageTitle dropdown) or on mobile
  if (location.pathname === '/' || isMobile) {
    return null;
  }

  const navItems = [
    { label: '/HOME/', path: '/' },
    { label: '/STEP/', path: '/step' },
    { label: '/TICKET-EASY/', path: '/ticket-easy' },
    { label: '/PROFILE/', path: '/profile' },
    { label: '/LINKEDIN/', path: '/linkedin', external: true },
    { label: '/GITHUB/', path: '/github', external: true },
  ];

  // Determine current page
  const currentPath = location.pathname;

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-40 border-b-2 flex flex-col"
      style={{ borderColor: '#929292' }}
    >
      {navItems
        .filter(item => item.path !== currentPath)
        .map((item) => (
          <a
            key={item.label}
            href={item.external ? (item.label === '/LINKEDIN/' ? 'https://linkedin.com' : 'https://github.com') : item.path}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            onClick={(e) => {
              if (!item.external) {
                e.preventDefault();
                navigate(item.path);
              }
            }}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
            className="px-6 pt-2 font-bold tracking-wider uppercase border-b-2 transition-colors"
            style={{ 
              fontFamily: "'Ethnocentric', sans-serif",
              borderColor: '#929292',
              backgroundColor: hoveredItem === item.label ? '#B3B3B3' : 'rgb(20, 20, 20)',
              color: hoveredItem === item.label ? '#000000' : '#ffffff'
            }}
          >
            {item.label}
          </a>
        ))}
    </nav>
  );
};

export default Navbar;
