'use client';

import { useTranslation } from '@/lib/i18n/use-translation';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { lang, setLang } = useTranslation();

  const toggleLanguage = () => {
    setLang(lang === 'nl' ? 'en' : 'nl');
  };

  return (
    <Button 
      variant="secondary" 
      size="sm" 
      onClick={toggleLanguage}
      className="font-medium min-w-[40px]"
    >
      {lang.toUpperCase()}
    </Button>
  );
}
