import { useEffect, useState } from 'react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import DraggableCard from '@/components/portfolio/DraggableCard';
import StepCard from '@/components/portfolio/cards/StepCard';
import GitHubCard from '@/components/portfolio/cards/GitHubCard';
import ContactCard from '@/components/portfolio/cards/ContactCard';
import LinkedInCard from '@/components/portfolio/cards/LinkedInCard';
import TicketEasyCard from '@/components/portfolio/cards/TicketEasyCard';
import ProfileCard from '@/components/portfolio/cards/ProfileCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Trigger load animation
    setTimeout(() => setIsLoaded(true), 100);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile view - simple list navigation
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background p-6 flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <PageTitle title={t('home')} showNav={false} />
        </div>

        {/* Navigation Cards */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-3">
          {[
            { label: 'PROFILE', path: '/profile' },
            { label: 'TICKET-EASY', path: '/ticket-easy' },
            { label: 'STEP', path: '/step' },
            { label: 'LINKEDIN', path: '/linkedin', external: true },
            { label: 'GITHUB', path: '/github', external: true },
            { label: 'CONTACT', path: '/contact' },
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.external ? (item.label === 'LINKEDIN' ? 'https://linkedin.com' : 'https://github.com') : item.path}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`nav-item w-full max-w-xs text-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-8">
          <LanguageSwitcher />
        </div>
      </div>
    );
  }

  // Desktop view - draggable cards
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Header - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <PageTitle title={t('home')} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className={`w-full h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        {/* STEP Card - Main focus, center-ish */}
        <DraggableCard initialX={300} initialY={120} zIndex={3}>
          <div className="animate-card-pop">
            <StepCard />
          </div>
        </DraggableCard>

        {/* GitHub Card - Right side */}
        <DraggableCard initialX={720} initialY={350} zIndex={2}>
          <div className="animate-card-pop" style={{ animationDelay: '100ms' }}>
            <GitHubCard />
          </div>
        </DraggableCard>

        {/* Contact Card - Bottom center */}
        <DraggableCard initialX={500} initialY={520} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '200ms' }}>
            <ContactCard />
          </div>
        </DraggableCard>

        {/* Hidden cards - can be accessed via nav */}
        {/* These are off-screen but draggable if user wants */}
        <DraggableCard initialX={-400} initialY={200} zIndex={0}>
          <div className="animate-card-pop" style={{ animationDelay: '300ms' }}>
            <LinkedInCard />
          </div>
        </DraggableCard>

        <DraggableCard initialX={-400} initialY={400} zIndex={0}>
          <div className="animate-card-pop" style={{ animationDelay: '400ms' }}>
            <TicketEasyCard />
          </div>
        </DraggableCard>

        <DraggableCard initialX={1200} initialY={150} zIndex={0}>
          <div className="animate-card-pop" style={{ animationDelay: '500ms' }}>
            <ProfileCard />
          </div>
        </DraggableCard>
      </div>
    </div>
  );
};

export default Index;
