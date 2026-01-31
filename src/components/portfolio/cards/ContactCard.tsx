import FlipText from '../FlipText';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContactCardProps {
  className?: string;
}

const ContactCard = ({ className = '' }: ContactCardProps) => {
  const { t } = useLanguage();

  return (
    <div className={`w-[280px] md:w-[380px] border-2 card-border ${className}`}>
      {/* Header */}
      <div className="border-b-2 card-border">
        <h3 className="card-header text-xl md:text-2xl px-3 pt-2" translate="no">
          <FlipText text="/CONTACT/" />
        </h3>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <a 
          href={`mailto:${t('email')}`}
          onClick={(e) => e.stopPropagation()}
          className="font-body text-foreground hover:underline text-sm md:text-base"
          translate="no"
        >
          {t('email')}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
