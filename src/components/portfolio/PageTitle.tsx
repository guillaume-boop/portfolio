import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface PageTitleProps {
  title: string;
  showNav?: boolean;
}

const navItems = [
  { key: 'profile', path: '/profile', label: '/PROFILE/' },
  { key: 'ticketEasy', path: '/ticket-easy', label: '/TICKET EASY/' },
  { key: 'step', path: '/step', label: '/STEP/' },
  { key: 'linkedin', path: '/linkedin', label: '/LINKEDIN/' },
  { key: 'github', path: '/github', label: '/GITHUB/' },
  { key: 'contact', path: '/contact', label: '/CONTACT/' },
];

const PageTitle = ({ title, showNav = true }: PageTitleProps) => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="portfolio-title text-2xl md:text-3xl bg-card border-2 border-foreground px-4 py-3 hover:bg-foreground hover:text-background transition-colors duration-100"
      >
        /{title}/
      </button>

      {showNav && isNavOpen && (
        <nav className="absolute top-full left-0 z-50 mt-0">
          {navItems.map((item, index) => (
            <button
              key={item.key}
              onClick={() => {
                if (item.key === 'linkedin') {
                  window.open('https://linkedin.com', '_blank');
                } else if (item.key === 'github') {
                  window.open('https://github.com', '_blank');
                } else {
                  navigate(item.path);
                }
                setIsNavOpen(false);
              }}
              className="nav-item block w-full text-left text-lg md:text-xl border-t-0 first:border-t-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
};

export default PageTitle;
