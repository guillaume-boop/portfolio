import { useEffect, useState } from 'react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import DraggableCard from '@/components/portfolio/DraggableCard';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import StepCard from '@/components/portfolio/cards/StepCard';
import GitHubCard from '@/components/portfolio/cards/GitHubCard';
import ContactCard from '@/components/portfolio/cards/ContactCard';
import LinkedInCard from '@/components/portfolio/cards/LinkedInCard';
import TicketEasyCard from '@/components/portfolio/cards/TicketEasyCard';
import ProfileCard from '@/components/portfolio/cards/ProfileCard';
import DesignCard from '@/components/portfolio/cards/DesignCard';
import MichelinCard from '@/components/portfolio/cards/MichelinCard';
import TypewriterText from '@/components/portfolio/TypewriterText';
import { useLanguage } from '@/contexts/LanguageContext';
import StepPage from './StepPage';
import TicketEasyPage from './TicketEasyPage';
import ProfilePage from './ProfilePage';
import DesignPage from './DesignPage';
import MichelinPage from './MichelinPage';

const Index = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Trigger load animation immediately
    setIsLoaded(true);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show page content if page is selected
  if (currentPage === 'step') {
    return <StepPage onPageChange={setCurrentPage} />;
  }
  if (currentPage === 'ticketEasy') {
    return <TicketEasyPage onPageChange={setCurrentPage} />;
  }
  if (currentPage === 'profile') {
    return <ProfilePage onPageChange={setCurrentPage} />;
  }
  if (currentPage === 'design') {
    return <DesignPage onPageChange={setCurrentPage} />;
  }
  if (currentPage === 'michelin') {
    return <MichelinPage onPageChange={setCurrentPage} />;
  }

  // Mobile view - simple list navigation
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background p-6 flex flex-col overflow-x-hidden relative">
        <AnimatedGridBackground disableSpotlight={true} />
        {/* Header */}
        <div className="mb-12 relative z-10">
          <PageTitle title={t('home')} showNav={false} />
        </div>

        {/* Navigation Cards */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-6 mx-12 relative z-10">
          {[
            { label: '/PROFILE/', key: 'profile', external: false },
            { label: '/TICKET-EASY/', key: 'ticketEasy', external: false },
            { label: '/STEP/', key: 'step', external: false },
            { label: '/DESIGN/', key: 'design', external: false },
            { label: '/GUIDE MICHELIN/', key: 'michelin', external: false },
            { label: '/LINKEDIN/', key: 'linkedin', external: true, url: 'https://www.linkedin.com/in/guillaume-alameda-92b533217/' },
            { label: '/GITHUB/', key: 'github', external: true, url: 'https://github.com/guillaume-boop' },
          ].map((item, index) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.external) {
                  window.open(item.url, '_blank');
                } else {
                  setCurrentPage(item.key);
                }
              }}
              className="w-full max-w-xs text-left animate-fade-in-up text-foreground font-bold italic tracking-wider uppercase px-4 py-3 transition-colors border-0 bg-transparent cursor-pointer"
              style={{ animationDelay: `${index * 100}ms`, backgroundColor: 'rgba(0, 0, 0, 0.2)', fontFamily: "'Ethnocentric', sans-serif" }}
              translate="no"
            >
              <TypewriterText 
                text={item.label}
                speed={40}
                delay={index * 100 + 500}
                showCursor={false}
              />
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="mt-8 relative z-10">
          <LanguageSwitcher />
        </div>
      </div>
    );
  }

  // Desktop view - draggable cards
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <AnimatedGridBackground />
      {/* Header - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <PageTitle title={t('home')} onPageChange={setCurrentPage} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className="w-full h-screen">
        {/* STEP Card - Top center-left */}
        <DraggableCard initialX={330} initialY={80} zIndex={0}>
          <div className="animate-card-pop" style={{ animationDelay: '0ms' }}>
            <StepCard onPageChange={setCurrentPage} />
          </div>
        </DraggableCard>

        {/* TICKET-EASY Card - Top right */}
        <DraggableCard initialX={900} initialY={100} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '80ms' }}>
            <TicketEasyCard onPageChange={setCurrentPage} />
          </div>
        </DraggableCard>

        {/* LINKEDIN Card - Left side */}
        <DraggableCard initialX={170} initialY={350} zIndex={2}>
          <div className="animate-card-pop" style={{ animationDelay: '160ms' }}>
            <LinkedInCard />
          </div>
        </DraggableCard>

        {/* GitHub Card - Center */}
        <DraggableCard initialX={570} initialY={380} zIndex={3}>
          <div className="animate-card-pop" style={{ animationDelay: '240ms' }}>
            <ProfileCard onPageChange={setCurrentPage} />
          </div>
        </DraggableCard>

        {/* GitHub Card - Right side */}
        <DraggableCard initialX={1050} initialY={280} zIndex={4}>
          <div className="animate-card-pop" style={{ animationDelay: '320ms' }}>
            <GitHubCard />
          </div>
        </DraggableCard>

        {/* Contact Card - Bottom center */}
        <DraggableCard initialX={420} initialY={600} zIndex={5}>
          <div className="animate-card-pop" style={{ animationDelay: '400ms' }}>
            <ContactCard />
          </div>
        </DraggableCard>

        {/* DESIGN Card - Bottom right */}
        <DraggableCard initialX={900} initialY={450} zIndex={7}>
          <div className="animate-card-pop" style={{ animationDelay: '480ms' }}>
            <DesignCard onPageChange={setCurrentPage} />
          </div>
        </DraggableCard>

        {/* MICHELIN Card - Bottom left */}
        <DraggableCard initialX={650} initialY={200} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '560ms' }}>
            <MichelinCard onPageChange={setCurrentPage} />
          </div>
        </DraggableCard>
      </div>
    </div>
  );
};

export default Index;
