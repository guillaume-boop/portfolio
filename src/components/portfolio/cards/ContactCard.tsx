import FlipText from '../FlipText';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactCardProps {
  className?: string;
}

const ContactCard = ({ className = '' }: ContactCardProps) => {
  const { t } = useLanguage();

  return (
    <div className={`w-[280px] md:w-[380px] ${className}`}>
      {/* Header */}
      <div className="border-b-2 border-foreground p-3">
        <h3 className="portfolio-title text-xl md:text-2xl">
          <FlipText text="/CONTACT/" />
        </h3>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <a 
          href={`mailto:${t('email')}`}
          onClick={(e) => e.stopPropagation()}
          className="font-body text-foreground hover:underline text-sm md:text-base"
        >
          {t('email')}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
