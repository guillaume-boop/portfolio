import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-0">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-4 py-2 text-sm border-2 transition-colors font-bold tracking-wider uppercase`}
        style={{
          fontFamily: "'Ethnocentric', sans-serif",
          borderColor: '#929292',
          backgroundColor: language === 'fr' ? '#B3B3B3' : 'rgba(0, 0, 0, 0.2)',
          color: language === 'fr' ? '#000000' : '#ffffff'
        }}
        translate="no"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 text-sm border-2 border-l-0 transition-colors font-bold tracking-wider uppercase`}
        style={{
          fontFamily: "'Ethnocentric', sans-serif",
          borderColor: '#929292',
          backgroundColor: language === 'en' ? '#B3B3B3' : 'rgba(0, 0, 0, 0.2)',
          color: language === 'en' ? '#000000' : '#ffffff'
        }}
        translate="no"
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitcher;
