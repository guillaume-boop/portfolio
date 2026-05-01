import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import DraggableCard from '@/components/portfolio/DraggableCard';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import graphicImg from '@/assets/michelin/graphic.png';
import maquettesImg from '@/assets/michelin/maquettes.png';
import feedImg from '@/assets/michelin/feed.png';
import mapImg from '@/assets/michelin/map.png';
import postImg from '@/assets/michelin/post.png';
import profileImg from '@/assets/michelin/profile.png';
import searchImg from '@/assets/michelin/search.png';

interface MichelinPageProps {
  onPageChange?: (page: string | null) => void;
}


const MichelinPage = ({ onPageChange }: MichelinPageProps) => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  const cardsData = [
    { src: graphicImg, label: t('graphic'), aspect: 'aspect-[16/10]', width: 'w-[280px] md:w-[340px]' },
    { src: maquettesImg, label: t('maquettes'), aspect: 'aspect-[16/9]', width: 'w-[280px] md:w-[340px]' },
    { src: feedImg, label: t('feed'), aspect: 'aspect-[15/32]', width: 'w-[140px] md:w-[170px]' },
    { src: mapImg, label: t('map'), aspect: 'aspect-[15/32]', width: 'w-[140px] md:w-[170px]' },
    { src: postImg, label: t('post'), aspect: 'aspect-[15/32]', width: 'w-[140px] md:w-[170px]' },
    { src: profileImg, label: t('profile'), aspect: 'aspect-[15/32]', width: 'w-[220px] md:w-[230px]' },
    { src: searchImg, label: 'FIND', aspect: 'aspect-[15/32]', width: 'w-[140px] md:w-[170px]' },
    { type: 'text', label: t('contexte'), content: t('contexteDesc'), width: 'w-[280px] md:w-[340px]' },
    { type: 'text', label: t('solution'), content: t('solutionDesc'), width: 'w-[280px] md:w-[340px]' },
    { type: 'text', label: t('project'), link: 'https://hackathon-michelin.vercel.app/', width: 'w-[280px] md:w-[340px]' },
  ];

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
          <PageTitle title={t('guideMichelin')} onPageChange={onPageChange} showNav={true} />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start gap-8 py-8 relative z-10">
          {(() => {
            const mobileOrder = [7, 8, 0, 1, 2, 3, 4, 6, 5, 9];
            return mobileOrder.map((index) => {
              const image = cardsData[index];
              // Skip map (rendered with feed) and search (rendered with post)
              if (index === 3 || index === 6) return null;

            // Feed and map on same row
            if (index === 2) {
              const feed = cardsData[2];
              const map = cardsData[3];
              return (
                <div key={`row-2-3`} className="flex gap-4">
                  <div className="w-fit">
                    <div className={`${feed.width} border-2 card-border bg-card overflow-hidden`}>
                      <div className="border-b-2 card-border px-4 pt-2">
                        <h3 className="card-header text-lg" translate="no">
                          <FlipText text={`/${feed.label}/`} />
                        </h3>
                      </div>
                      <div className={`bg-secondary flex items-center justify-center ${feed.aspect}`}>
                        <img src={feed.src} alt={feed.label} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="w-fit">
                    <div className={`${map.width} border-2 card-border bg-card overflow-hidden`}>
                      <div className="border-b-2 card-border px-4 pt-2">
                        <h3 className="card-header text-lg" translate="no">
                          <FlipText text={`/${map.label}/`} />
                        </h3>
                      </div>
                      <div className={`bg-secondary flex items-center justify-center ${map.aspect}`}>
                        <img src={map.src} alt={map.label} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Post and find on same row
            if (index === 4) {
              const post = cardsData[4];
              const find = cardsData[6];
              return (
                <div key={`row-${index}`} className="flex gap-4">
                  <div className="w-fit">
                    <div className={`${post.width} border-2 card-border bg-card overflow-hidden`}>
                      <div className="border-b-2 card-border px-4 pt-2">
                        <h3 className="card-header text-lg" translate="no">
                          <FlipText text={`/${post.label}/`} />
                        </h3>
                      </div>
                      <div className={`bg-secondary flex items-center justify-center ${post.aspect}`}>
                        <img src={post.src} alt={post.label} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                  <div className="w-fit">
                    <div className={`${find.width} border-2 card-border bg-card overflow-hidden`}>
                      <div className="border-b-2 card-border px-4 pt-2">
                        <h3 className="card-header text-lg" translate="no">
                          <FlipText text={`/${find.label}/`} />
                        </h3>
                      </div>
                      <div className={`bg-secondary flex items-center justify-center ${find.aspect}`}>
                        <img src={find.src} alt={find.label} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

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
            });
          })()}
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
    { x: 100, y: 150, z: 1 },      // GRAPHIC - top left
    { x: 420, y: 250, z: 2 },      // MAQUETTES - center
    { x: 1100, y: 150, z: 3 },     // FEED - top right
    { x: 800, y: 300, z: 4 },      // MAP - center
    { x: 650, y: 100, z: 0 },      // POST - behind all
    { x: 900, y: 100, z: 2 },     // PROFILE - top-center-right
    { x: 1200, y: 280, z: 6 },     // FIND - center-right
    { x: 150, y: 400, z: 7 },      // CONTEXTE - middle left
    { x: 420, y: 450, z: 8 },      // SOLUTION - middle center-left
    { x: 700, y: 550, z: 9 },      // PROJECT - center-right
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <AnimatedGridBackground />
      {/* Header - Top Left */}
      <div className="fixed top-6 left-6 z-50">
        <PageTitle title={t('guideMichelin')} onPageChange={onPageChange} showNav={true} />
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

export default MichelinPage;
