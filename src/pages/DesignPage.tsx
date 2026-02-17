import { useEffect, useState } from 'react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import DraggableCard from '@/components/portfolio/DraggableCard';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import interfaceImg from '@/assets/home_kiosk.png';
import maquetteImg from '@/assets/maquettes.png';
import img3dImg from '@/assets/3d.png';

interface DesignPageProps {
  onPageChange?: (page: string | null) => void;
}

const DesignPage = ({ onPageChange }: DesignPageProps) => {
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
          <PageTitle title={t('design')} onPageChange={onPageChange} showNav={true} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-8 py-8 relative z-10">
          {/* Resume Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('resume')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }} translate="no">
                  {t('resumeDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* Video Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] border-2 card-border bg-card mx-auto">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('design')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-video overflow-hidden\">
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  loop
                  muted
                  controlsList="nofullscreen"
                  disablePictureInPicture
                  playsInline
                  style={{ objectFit: 'cover', maxHeight: '100%' } as React.CSSProperties}
                >
                  <source
                    src="https://res.cloudinary.com/djdtzd2wv/video/upload/Votre_texte_de_paragraphe_1_hzhemo.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          {/* Interface Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] border-2 card-border bg-card mx-auto overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text="/INTERFACE/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[1.70/3]">
                <img src={interfaceImg} alt="Interface" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Maquettes Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] border-2 card-border bg-card mx-auto overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('maquettes')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={maquetteImg} alt="Maquettes" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* 3D Modelling Card */}
          <div className="w-full max-w-xs">
            <div className="w-[90%] sm:w-[320px] border-2 card-border bg-card mx-auto overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-lg" translate="no">
                  <FlipText text={`/${t('modelling3d')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={img3dImg} alt="Modélisation 3D" className="w-full h-full object-contain" />
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
        <PageTitle title={t('design')} onPageChange={onPageChange} showNav={true} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className="w-full h-screen">
        {/* Video Card - Center */}
        <DraggableCard initialX={800} initialY={100} zIndex={0}>
          <div className="animate-card-pop">
            <div className="w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] border-2 card-border bg-card">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('design')}/`} />
                </h3>
              </div>
              <div className="flex items-center justify-center aspect-video bg-secondary overflow-hidden">
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  loop
                  muted
                  style={{ objectFit: 'cover' }}
                >
                  <source
                    src="https://res.cloudinary.com/djdtzd2wv/video/upload/Votre_texte_de_paragraphe_1_hzhemo.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Interface Card - Right */}
        <DraggableCard initialX={120} initialY={100} zIndex={1}>
          <div className="animate-card-pop" style={{ animationDelay: '80ms' }}>
            <div className="w-[280px] md:w-[280px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text="/INTERFACE/" />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[1.70/3]">
                <img src={interfaceImg} alt="Interface" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Maquettes Card - Bottom Left */}
        <DraggableCard initialX={300} initialY={520} zIndex={5}>
          <div className="animate-card-pop" style={{ animationDelay: '160ms' }}>
            <div className="w-[280px] md:w-[340px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('maquettes')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={maquetteImg} alt="Maquettes" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* 3D Modelling Card - Bottom Right */}
        <DraggableCard initialX={800} initialY={500} zIndex={5}>
          <div className="animate-card-pop" style={{ animationDelay: '240ms' }}>
            <div className="w-[280px] md:w-[400px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('modelling3d')}/`} />
                </h3>
              </div>
              <div className="bg-secondary flex items-center justify-center aspect-[16/9]">
                <img src={img3dImg} alt="Modélisation 3D" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </DraggableCard>

        {/* Resume Card - Top Right */}
        <DraggableCard initialX={400} initialY={300} zIndex={4}>
          <div className="animate-card-pop" style={{ animationDelay: '320ms' }}>
            <div className="w-[280px] md:w-[400px] border-2 card-border bg-card overflow-hidden">
              <div className="border-b-2 card-border px-4 pt-2">
                <h3 className="card-header text-xl md:text-2xl" translate="no">
                  <FlipText text={`/${t('resume')}/`} />
                </h3>
              </div>
              <div className="p-4">
                <p className="text-foreground leading-relaxed text-base" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }} translate="no">
                  {t('resumeDesc')}
                </p>
              </div>
            </div>
          </div>
        </DraggableCard>
      </div>
    </div>
  );
};

export default DesignPage;
