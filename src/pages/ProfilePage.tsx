import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import TypewriterText from '@/components/portfolio/TypewriterText';
import FlipText from '@/components/portfolio/FlipText';
import { useLanguage } from '@/contexts/LanguageContext';

const ProfilePage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      {/* Header */}
      <div className="mb-12">
        <PageTitle title="PROFILE" />
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center mt-12 lg:mt-24">
        {/* Photo */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="animate-card-pop">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-secondary rounded-full flex items-center justify-center border-2 border-foreground">
              <span className="text-6xl">👤</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/3 max-w-xl">
          {/* Name */}
          <div className="border-2 border-foreground p-3 mb-0 bg-card inline-block">
            <h2 className="portfolio-title text-xl md:text-2xl">
              <FlipText text="/GUILLAUME ALAMEDA/" />
            </h2>
          </div>

          {/* Bio Box */}
          <div className="border-2 border-t-0 border-foreground p-4 md:p-6 bg-card">
            <p className="font-body text-foreground leading-relaxed text-sm md:text-base">
              <TypewriterText text={t('profileDesc')} speed={20} />
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'GSAP', 'UI/UX', 'CSS'].map((skill, index) => (
              <span
                key={skill}
                className="border-2 border-foreground px-3 py-1 font-display text-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 100 + 500}ms` }}
              >
                {skill}
              </span>
            ))}
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

export default ProfilePage;
