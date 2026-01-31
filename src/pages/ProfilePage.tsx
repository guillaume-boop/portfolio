import { useEffect, useState } from 'react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import DraggableCard from '@/components/portfolio/DraggableCard';
import { useLanguage } from '@/contexts/LanguageContext';
import profileImg from '@/assets/profile.jpeg';


interface ProfilePageProps {
  onPageChange?: (page: string | null) => void;
}

const ProfilePage = ({ onPageChange }: ProfilePageProps) => {
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
        <div className="mb-8">
          <PageTitle title={t('profile')} onPageChange={onPageChange} showNav={true} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-8 py-8">
          {/* Profile Avatar */}
          <div className="animate-card-pop">
            <div className="w-48 h-48 bg-secondary rounded-full flex items-center justify-center border-2 card-border">
              <img src={profileImg} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>

          {/* Name Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '80ms' }}>
            <div className="border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3 flex flex-col">
                <h2 className="card-header text-lg" translate="no">
                  <FlipText text="/GUILLAUME" />
                </h2>
                <h2 className="card-header text-lg" translate="no">
                  <FlipText text="ALAMEDA/" />
                </h2>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }} translate="no">
                  {t('profileTitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Back-End Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '160ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('backend')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }} translate="no">
                  {t('backendDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Front-End Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '240ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('frontend')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }} translate="no">
                  {t('frontendDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Blockchain Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '320ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('blockchain')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm text-left" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }} translate="no">
                  {t('blockchainSkills')}
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '400ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('location')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="font-body text-foreground leading-relaxed text-sm">
                  {t('locationDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="animate-card-pop w-full max-w-xs" style={{ animationDelay: '480ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('contactInfo')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <a href="mailto:guillaume.alameda@gmail.com" className="font-body text-foreground hover:text-secondary transition-colors text-sm break-all">
                  {t('email')}
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
        <PageTitle title={t('profile')} onPageChange={onPageChange} showNav={true} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className="w-full h-screen">
        {/* Profile Avatar - Top Left */}
        <DraggableCard initialX={380} initialY={100} zIndex={0} isRaw={true}>
          <div className="animate-card-pop">
            <div className="w-64 h-64 bg-secondary rounded-full flex items-center justify-center border-2 card-border cursor-grab active:cursor-grabbing">
              <img src={profileImg} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </DraggableCard>

        {/* Name Card - Top Right */}
        <DraggableCard initialX={700} initialY={220} zIndex={2}>
          <div className="animate-card-pop" style={{ animationDelay: '80ms' }}>
            <div className="w-[90%] sm:w-[320px] md:w-[400px] lg:w-[460px] xl:w-[520px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3">
                <h2 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text="/GUILLAUME ALAMEDA/" />
                </h2>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base text">
                  {t('profileTitle')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Back-End Card - Left Middle */}
        <DraggableCard initialX={200} initialY={400} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '160ms' }}>
            <div className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('backend')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                  {t('backendDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Front-End Card - Center Middle */}
        <DraggableCard initialX={600} initialY={420} zIndex={3}>
          <div className="animate-card-pop" style={{ animationDelay: '240ms' }}>
            <div className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('frontend')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                  {t('frontendDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Blockchain Card - Right Middle */}
        <DraggableCard initialX={1000} initialY={400} zIndex={3}>
          <div className="animate-card-pop" style={{ animationDelay: '320ms' }}>
            <div className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('blockchain')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                  {t('blockchainSkills')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Location Card - Bottom Left */}
        <DraggableCard initialX={300} initialY={550} zIndex={4}>
          <div className="animate-card-pop" style={{ animationDelay: '400ms' }}>
            <div className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('location')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
                  {t('locationDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Contact Card - Bottom Right */}
        <DraggableCard initialX={750} initialY={550} zIndex={5}>
          <div className="animate-card-pop" style={{ animationDelay: '480ms' }}>
            <div className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 py-3">
                <h3 className="card-header text-lg md:text-xl" translate="no">
                  <FlipText text={`/${t('contactInfo')}/`} />
                </h3>
              </div>
              <div className="p-6">
                <a href="mailto:guillaume.alameda@gmail.com" className="font-body text-foreground hover:text-secondary transition-colors text-sm md:text-base break-all">
                  {t('email')}
                </a>
              </div>
            </div>
          </div>
        </DraggableCard>
      </div>
    </div>
  );
};

export default ProfilePage;
