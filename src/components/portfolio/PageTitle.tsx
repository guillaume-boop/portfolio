import { useState, useRef, useEffect } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import TypewriterText from './TypewriterText';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageTitleProps {
  title: string;
  showNav?: boolean;
  onPageChange?: (page: string) => void;
}

const navItems = [
  { key: 'home', label: '/HOME/' },
  { key: 'profile', label: '/PROFILE/' },
  { key: 'ticketEasy', label: '/TICKET-EASY/' },
  { key: 'step', label: '/STEP/' },
  { key: 'design', label: '/DESIGN/' },
  { key: 'michelin', label: '/GUIDE MICHELIN/' },
  { key: 'linkedin', label: '/LINKEDIN/' },
  { key: 'github', label: '/GITHUB/' },
];

const PageTitle = ({ title, showNav = true, onPageChange }: PageTitleProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonPos, setButtonPos] = useState({ top: 0, left: 0 });
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { t } = useLanguage();

  // Show nav button on desktop or when showNav is explicitly true
  const shouldShowNav = showNav || window.innerWidth >= 768;
  const isDesktop = window.innerWidth >= 768;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsNavOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const handleButtonClick = () => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
      setButtonPos({
        top: buttonRef.current.offsetTop + buttonRef.current.offsetHeight,
        left: buttonRef.current.offsetLeft
      });
    }
    setIsNavOpen(!isNavOpen);
  };

  // Recalculate position when nav opens
  useEffect(() => {
    if (isNavOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setButtonPos({
        top: rect.top + rect.height,
        left: rect.left
      });
    }
  }, [isNavOpen]);

  // Close navbar when clicking outside or dragging cards
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isNavOpen && navRef.current && buttonRef.current) {
        if (!navRef.current.contains(event.target as Node) && 
            !buttonRef.current.contains(event.target as Node)) {
          handleClose();
        }
      }
    };

    const handleDragStart = () => {
      if (isNavOpen) {
        handleClose();
      }
    };

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('dragstart', handleDragStart);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, [isNavOpen]);

  return (
    <>
      <div className="relative flex items-center">
        <button
          ref={buttonRef}
          onClick={handleButtonClick}
          className="text-2xl md:text-3xl pl-4 pr-1 pt-2 font-bold tracking-wider uppercase transition-colors"
          style={{
            fontFamily: "'Ethnocentric', sans-serif",
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: '#ffffff'
          }}
          translate="no"
        >
          <TypewriterText
            text={`/${title}/`}
            speed={40}
            delay={0}
            showCursor={false}
            key={title}
          />
        </button>
        {(isDesktop || title !== t('home')) && (
          <button
            onClick={handleButtonClick}
            className="flex items-center justify-center transition-transform duration-300"
            style={{ transform: isNavOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            <img src="/burger-button.svg" alt="Menu" className="h-8 w-8 md:h-10 md:w-10" />
          </button>
        )}
      </div>

      {showNav && shouldShowNav && isNavOpen && createPortal(
        <div 
          ref={navRef}
          style={{
            position: 'fixed',
            top: `${buttonPos.top}px`,
            left: `${buttonPos.left}px`,
            width: 'auto',
            minWidth: `${buttonWidth}px`,
            maxWidth: 'calc(100vw - 20px)',
            zIndex: 999999
          }}
          className={isClosing ? 'animate-slide-up' : 'animate-slide-down'}
        >
          {navItems
            .filter((item) => {
              // Ne pas afficher la page actuelle
              const normalize = (str: string) => str.toUpperCase().replace(/[^\w]/g, '');
              return normalize(title) !== normalize(item.label);
            })
            .map((item) => (
              <button
                key={item.key}
                onMouseEnter={() => setHoveredItem(item.key)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => {
                  if (item.key === 'linkedin') {
                    window.open('https://www.linkedin.com/in/guillaume-alameda-92b533217/', '_blank');
                  } else if (item.key === 'github') {
                    window.open('https://github.com/guillaume-boop', '_blank');
                  } else {
                    onPageChange?.(item.key);
                  }
                  handleClose();
                }}
                className="block w-full text-left px-4 pt-2 pb-0 font-bold tracking-wider uppercase border-t-0 first:border-t-2 border-b-2 border-l-2 border-r-2 whitespace-nowrap transition-colors"
                style={{ 
                  fontFamily: "'Ethnocentric', sans-serif",
                  borderColor: '#929292',
                  backgroundColor: hoveredItem === item.key ? '#B3B3B3' : 'rgb(20, 20, 20)',
                  color: hoveredItem === item.key ? '#000000' : '#ffffff'
                }}
                translate="no"
              >
                {item.label}
              </button>
            ))}
        </div>,
        document.body
      )}
    </>
  );
};

export default PageTitle;
