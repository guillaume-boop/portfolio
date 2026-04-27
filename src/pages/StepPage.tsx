import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import DraggableCard from '@/components/portfolio/DraggableCard';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import stepImg from '@/assets/step/step-logo.png';
import assetDetailImg from '@/assets/step/asset_detail.png';
import homepageImg from '@/assets/step/homepage.png';
import profileImg from '@/assets/step/profile.png';

interface StepPageProps {
  onPageChange?: (page: string | null) => void;
}

const StepPage = ({ onPageChange }: StepPageProps) => {
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
      <div className="min-h-screen bg-background p-6 flex flex-col overflow-x-hidden relative">
        <AnimatedGridBackground disableSpotlight={true} />
        {/* Header */}
        <div className="mb-8 relative z-10">
          <PageTitle title="STEP" onPageChange={onPageChange} showNav={true} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-8 py-8 relative z-10">
          {/* Logo */}
          <div>
            <img src={stepImg} alt="Step" className="w-48 h-auto object-contain rounded-full" />
          </div>

          {/* The Project Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('theProject')}/`} />
                </h3>
              </div>
              <div className="p-2 sm:p-4">
                <p className="text-foreground leading-relaxed text-sm" style={{ fontFamily: "'Geist Mono', sans-serif", fontWeight: 400 }} translate="no">
                  {t('stepDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Blockchain Advantages Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('blockchainAdvantages')}/`} />
                </h3>
              </div>
              <div className="p-2 sm:p-4">
                <p className="text-foreground leading-relaxed text-sm" style={{ fontFamily: "'Geist Mono', sans-serif", fontWeight: 400 }} translate="no">
                  {t('blockchainDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Investment Advantages Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('investmentAdvantages')}/`} />
                </h3>
              </div>
              <div className="p-2 sm:p-4">
                <p className="text-foreground leading-relaxed text-sm" style={{ fontFamily: "'Geist Mono', sans-serif", fontWeight: 400 }} translate="no">
                  {t('investmentDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Asset Detail Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text="/ASSET DETAIL/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={assetDetailImg} alt="Asset Detail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Homepage Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text="/HOMEPAGE/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={homepageImg} alt="Homepage" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text="/PROFILE/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Open Project Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border pl-4 pr-1 pt-2 flex items-center justify-between gap-2">
                <h3 className="card-header text-lg flex-1 pr-2" translate="no">
                  <FlipText text={`/${t('open')}/`} />
                </h3>
                <a
                  href="https://step-front.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-header-btn flex-shrink-0 -mt-2"
                  aria-label="Open STEP project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

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
        <PageTitle title="STEP" onPageChange={onPageChange} showNav={true} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className="w-full h-screen">
        {/* Logo Card - Top Center/Left */}
        <DraggableCard initialX={350} initialY={60} zIndex={0} isRaw={true}>
          <div className="animate-card-pop">
            <img src={stepImg} alt="Step" className="w-64 md:w-72 h-auto object-contain cursor-grab active:cursor-grabbing rounded-full user-select-none" />
          </div>
        </DraggableCard>

        {/* Asset Detail Card - Right of Logo */}
        <DraggableCard initialX={750} initialY={80} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '80ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text="/ASSET DETAIL/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={assetDetailImg} alt="Asset Detail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Homepage Card - Right of Asset Detail */}
        <DraggableCard initialX={1000} initialY={300} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '160ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text="/HOMEPAGE/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={homepageImg} alt="Homepage" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Profile Card - Below Asset Detail */}
        <DraggableCard initialX={680} initialY={480} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '240ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text="/PROFILE/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Description Card - The Project - Right of Logo */}
        <DraggableCard initialX={550} initialY={260} zIndex={2}>
          <div className="animate-card-pop" style={{ animationDelay: '80ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card">
              {/* Card Header */}
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('theProject')}/`} />
                </h3>
              </div>

              {/* Card Content */}
              <div className="md:p-4">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base" translate="no">
                  {t('stepDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Blockchain Advantages Card - Bottom Left */}
        <DraggableCard initialX={280} initialY={420} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '160ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card">
              {/* Card Header */}
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('blockchainAdvantages')}/`} />
                </h3>
              </div>

              {/* Card Content */}
              <div className="md:p-4">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base" translate="no">
                  {t('blockchainDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Open Project Card - Bottom Center */}
        <DraggableCard initialX={600} initialY={600} zIndex={5}>
          <div className="animate-card-pop" style={{ animationDelay: '240ms' }}>
            <div className="w-[380px] md:w-[500px] border-2 card-border bg-card">
              {/* Card Header with ExternalLink Button */}
              <div className="relative border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('openTheProject')}/`} />
                </h3>
                <a
                  href="https://step-front.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-header-btn absolute top-0.5 right-0.5"
                  aria-label="Open STEP project"
                  translate="no"
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

export default StepPage;
