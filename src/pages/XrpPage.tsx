import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import DraggableCard from '@/components/portfolio/DraggableCard';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import collectionImg from '@/assets/xrp/collection.png';
import profileImg from '@/assets/xrp/profile.png';
import walletImg from '@/assets/xrp/wallet.png';
import assetImg from '@/assets/xrp/asset.png';

interface XrpPageProps {
  onPageChange?: (page: string | null) => void;
}

const XrpPage = ({ onPageChange }: XrpPageProps) => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    { src: collectionImg, label: t('collection'), aspect: 'aspect-[1716/1284]', width: 'w-[280px] md:w-[360px]' },
    { src: assetImg, label: t('asset'), aspect: 'aspect-[2830/1458]', width: 'w-[300px] md:w-[420px]' },
    { src: profileImg, label: t('profile'), aspect: 'aspect-[2830/1458]', width: 'w-[300px] md:w-[420px]' },
    { src: walletImg, label: t('assetsOnChain'), aspect: 'aspect-[2830/1458]', width: 'w-[300px] md:w-[420px]' },
    { type: 'text', label: t('contexte'), content: t('xrpContexteDesc'), width: 'w-[280px] md:w-[340px]' },
    { type: 'text', label: t('solution'), content: t('xrpSolutionDesc'), width: 'w-[280px] md:w-[340px]' },
    { type: 'text', label: t('project'), link: 'https://actify.yohan-georgelin.fr/', width: 'w-[280px] md:w-[340px]' },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile view - centered cards
  if (isMobile) {
    const mobileOrder = [4, 5, 0, 1, 2, 3, 6];

    return (
      <div className="min-h-screen bg-background p-6 flex flex-col overflow-x-hidden relative">
        <AnimatedGridBackground disableSpotlight={true} />
        {/* Header */}
        <div className="mb-8 relative z-10">
          <PageTitle title={t('xrpMarketplace')} onPageChange={onPageChange} showNav={true} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-8 py-8 relative z-10">
          {mobileOrder.map((index) => {
            const image = cardsData[index];
            return (
              <div key={index} className="w-full max-w-xs">
                <div className={`${image.width} border-2 card-border bg-card mx-auto overflow-hidden`}>
                  {image.type === 'text' && image.link ? (
                    <div className="border-b-2 card-border pl-4 pr-1 pt-2 flex items-center justify-between gap-2">
                      <h3 className="card-header text-lg flex-1 pr-2" translate="no">
                        <FlipText text={`/${image.label}/`} />
                      </h3>
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-header-btn flex-shrink-0 -mt-2"
                        aria-label="Open project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  ) : (
                    <div className="border-b-2 card-border px-4 pt-2">
                      <h3 className="card-header text-lg" translate="no">
                        <FlipText text={`/${image.label}/`} />
                      </h3>
                    </div>
                  )}
                  {image.type === 'text' && !image.link ? (
                    <div className="p-2 sm:p-4">
                      <p className="text-foreground text-sm leading-relaxed" style={{ fontFamily: "'Geist Mono', sans-serif", fontWeight: 400 }}>
                        {image.content}
                      </p>
                    </div>
                  ) : image.type === 'text' ? null : (
                    <div className={`bg-secondary flex items-center justify-center ${image.aspect}`}>
                      <img src={image.src} alt={image.label} className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 relative z-10">
          <LanguageSwitcher />
        </div>
      </div>
    );
  }

  // Desktop view - draggable cards
  const positions = [
    { x: 465, y: 95, z: 0 },       // COLLECTION - top center
    { x: 415, y: 265, z: 3 },      // ASSET - center
    { x: 190, y: 175, z: 1 },      // PROFILE - left
    { x: 710, y: 170, z: 2 },      // ASSETS ON CHAIN - right
    { x: 205, y: 485, z: 5 },      // CONTEXTE - bottom left
    { x: 615, y: 460, z: 6 },      // SOLUTION - bottom center
    { x: 880, y: 440, z: 7 },      // PROJECT - bottom right, on top
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <AnimatedGridBackground />
      {/* Header - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <PageTitle title={t('xrpMarketplace')} onPageChange={onPageChange} showNav={true} />
      </div>

      {/* Language Switcher - Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <LanguageSwitcher />
      </div>

      {/* Draggable Cards Container */}
      <div className="w-full h-screen">
        {cardsData.map((image, index) => (
          <DraggableCard
            key={index}
            initialX={positions[index].x}
            initialY={positions[index].y}
            zIndex={positions[index].z}
          >
            <div
              className="animate-card-pop"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`${image.width} border-2 card-border bg-card overflow-hidden`}>
                {image.type === 'text' && image.link ? (
                  <div className="border-b-2 card-border pl-4 pr-1 pt-2 flex items-center justify-between gap-2">
                    <h3 className="card-header text-xl md:text-2xl flex-1 pr-2" translate="no">
                      <FlipText text={`/${image.label}/`} />
                    </h3>
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-header-btn flex-shrink-0 -mt-2"
                      aria-label="Open project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                ) : (
                  <div className="border-b-2 card-border px-4 pt-2">
                    <h3 className="card-header text-xl md:text-2xl" translate="no">
                      <FlipText text={`/${image.label}/`} />
                    </h3>
                  </div>
                )}
                {image.type === 'text' && !image.link ? (
                  <div className="p-2 sm:p-4">
                    <p className="text-foreground text-sm leading-relaxed" style={{ fontFamily: "'Geist Mono', sans-serif", fontWeight: 400 }}>
                      {image.content}
                    </p>
                  </div>
                ) : image.type === 'text' ? null : (
                  <div className={`bg-secondary flex items-center justify-center ${image.aspect}`}>
                    <img
                      src={image.src}
                      alt={image.label}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </DraggableCard>
        ))}
      </div>
    </div>
  );
};

export default XrpPage;
