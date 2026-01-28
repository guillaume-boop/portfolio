import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex">
      <button
        onClick={() => setLanguage('fr')}
        className={`lang-switch px-4 py-2 text-sm border-2 border-foreground ${
          language === 'fr' ? 'lang-switch-active' : 'lang-switch-inactive'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`lang-switch px-4 py-2 text-sm border-2 border-l-0 border-foreground ${
          language === 'en' ? 'lang-switch-active' : 'lang-switch-inactive'
        }`}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitcher;
