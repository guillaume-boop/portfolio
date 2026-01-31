import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import TypewriterText from '@/components/portfolio/TypewriterText';
import DraggableCard from '@/components/portfolio/DraggableCard';
import { useLanguage } from '@/contexts/LanguageContext';
import ticketEasyImg from '@/assets/ticket_easy.png';
import dashboardImg from '@/assets/dashboard.png';
import interfaceImg from '@/assets/home_kiosk.png';
import kiosk3dImg from '@/assets/kiosk_3d.png';

interface TicketEasyPageProps {
  onPageChange?: (page: string | null) => void;
}

const TicketEasyPage = ({ onPageChange }: TicketEasyPageProps) => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile view - centered cards
  if (isMobile) {
    return (
      <div className="min-h-screen bg-background p-6 flex flex-col overflow-x-hidden">
        {/* Header */}
        <div className="mb-12">
          <PageTitle title="TICKET-EASY" onPageChange={onPageChange} showNav={true} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-8 py-8">
          {/* Logo */}
                  {/* Logo Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '10ms' }}>
            <div className={`w-[90%] sm:w-[320px] md:w-[320px] lg:w-[360px] xl:w-[400px] border-2 card-border mx-auto`}>
              {/* Header */}
              <div className="relative border-b-2 card-border px-3 pt-2 bg-card">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text="/Logo/" />
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-6 flex items-center justify-center aspect-[4/3] bg-secondary overflow-hidden">
                <img 
                  src={ticketEasyImg} 
                  alt="Ticket-Easy" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '80ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('description')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  {t('ticketEasyDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Kiosk 3D Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '480ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card overflow-hidden mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('kiosk3d')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[2.8/2.98]">
                <img src={kiosk3dImg} alt="Kiosk 3D" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Realization Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '240ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('realisation')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
                  {t('realizationDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Interface Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '400ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card overflow-hidden mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('interface')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[1.70/3]">
                <img src={interfaceImg} alt="Interface" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Dashboard Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '320ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card overflow-hidden mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('dashboard')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[18.4/9]">
                <img src={dashboardImg} alt="Dashboard" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* View Project Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '160ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 py-3 flex items-center justify-between gap-2">
                <h3 className="card-header text-lg flex-1 pr-2" translate="no">
                  <FlipText text={`/${t('view')}/`} />
                </h3>
                <a
                  href="https://ticketeasy.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-header-btn flex-shrink-0"
                  aria-label="Open TicketEasy project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

        </div>

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
        <PageTitle title="TICKET-EASY" onPageChange={onPageChange} showNav={true} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className="w-full h-screen">
        {/* Logo Card - Top Left */}
        <DraggableCard initialX={400} initialY={180} zIndex={3} isRaw={true}>
          <div className="animate-card-pop">
            <div className={`w-[280px] md:w-[320px] border-2 card-border`}>
              {/* Header */}
              <div className="relative border-b-2 card-border px-3 pt-2 bg-card">
                <h3 className="card-header text-lg md:text-xl">
                  <FlipText text="/Logo/" />
                </h3>
              </div>
              
              {/* Content */}
              <div className="p-6 flex items-center justify-center aspect-[4/3] bg-secondary overflow-hidden">
                <img 
                  src={ticketEasyImg} 
                  alt="Ticket-Easy" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Description Card - Center Top */}
        <DraggableCard initialX={590} initialY={440} zIndex={3}>
          <div className="animate-card-pop" style={{ animationDelay: '80ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('description')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                  {t('ticketEasyDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Interface Card - Top Right */}
        <DraggableCard initialX={880} initialY={100} zIndex={2}>
          <div className="animate-card-pop" style={{ animationDelay: '160ms' }}>
            <div className="w-[280px] md:w-[250px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('interface')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[1.70/3]">
                <img src={interfaceImg} alt="Interface" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Kiosk 3D Card - Bottom Left */}
        <DraggableCard initialX={140} initialY={300} zIndex={3}>
          <div className="animate-card-pop" style={{ animationDelay: '240ms' }}>
            <div className="w-[220px] md:w-[290px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('kiosk3d')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[2.8/2.98]">
                <img src={kiosk3dImg} alt="Kiosk 3D" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Realization Card - Center Bottom */}
        <DraggableCard initialX={900} initialY={530} zIndex={5}>
          <div className="animate-card-pop" style={{ animationDelay: '320ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('realisation')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                  {t('realizationDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Dashboard Card - Right Bottom */}
        <DraggableCard initialX={1050} initialY={380} zIndex={4}>
          <div className="animate-card-pop" style={{ animationDelay: '400ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('dashboard')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[18.4/9]">
                <img src={dashboardImg} alt="Dashboard" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* View Project Card - Bottom Center */}
        <DraggableCard initialX={390} initialY={620} zIndex={4}>
          <div className="animate-card-pop" style={{ animationDelay: '480ms' }}>
            <div className="w-[250px] md:w-[250px] border-2 card-border bg-card">
              <div className="relative border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('view')}/`} />
                </h3>
                <a
                  href="https://ticketeasy.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-header-btn absolute top-0.5 right-0.5"
                  aria-label="Open TicketEasy project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </DraggableCard>
      </div>
    </div>
  );
};

export default TicketEasyPage;