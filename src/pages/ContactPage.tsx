import PageTitle from '@/components/portfolio/PageTitle';
import LanguageSwitcher from '@/components/portfolio/LanguageSwitcher';
import FlipText from '@/components/portfolio/FlipText';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(t('email'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 flex flex-col">
      {/* Header */}
      <div className="mb-12">
        <PageTitle title="CONTACT" />
      </div>

      {/* Content - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="animate-card-pop">
          <div className="border-2 border-foreground bg-card">
            {/* Header */}
            <div className="border-b-2 border-foreground p-4">
              <h2 className="portfolio-title text-xl md:text-2xl">
                <FlipText text="/CONTACT/" />
              </h2>
            </div>

            {/* Email */}
            <div className="p-6 flex items-center gap-4">
              <Mail className="w-6 h-6 text-foreground" />
              <a
                href={`mailto:${t('email')}`}
                className="font-body text-foreground text-lg md:text-xl hover:underline"
              >
                {t('email')}
              </a>
              <button
                onClick={handleCopy}
                className="card-icon-btn ml-2"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
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

export default ContactPage;
