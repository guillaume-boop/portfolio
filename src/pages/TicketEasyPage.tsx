import { ExternalLink } from 'lucide-react';
import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import TypewriterText from '@/components/portfolio/TypewriterText';
import FlipText from '@/components/portfolio/FlipText';
import { useLanguage } from '@/contexts/LanguageContext';

const TicketEasyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      {/* Header */}
      <div className="mb-12">
        <PageTitle title="TICKET EASY" />
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center mt-12 lg:mt-24">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 max-w-lg">
          {/* Section Title */}
          <div className="border-2 border-foreground p-3 mb-0 bg-card inline-block">
            <h2 className="portfolio-title text-lg md:text-xl">
              <FlipText text={`/${t('itsWhat')}/`} />
            </h2>
          </div>

          {/* Description Box */}
          <div className="border-2 border-t-0 border-foreground p-4 md:p-6 bg-card">
            <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
              <TypewriterText text={t('ticketEasyDesc')} speed={20} />
            </p>
          </div>

          {/* View Button */}
          <div className="mt-4">
            <a
              href="https://ticket-easy.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 border-2 border-foreground bg-card px-4 py-3 hover:bg-foreground hover:text-background transition-colors duration-100"
            >
              <span className="portfolio-title text-lg">
                <FlipText text={`/${t('view')}/`} />
              </span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="animate-card-pop w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-full flex items-center justify-center">
            <span className="text-8xl">🎫</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-6 left-6">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default TicketEasyPage;
