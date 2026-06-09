'use client';

import { useTranslation } from '@/lib/i18n/use-translation';
import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex items-center gap-1 border border-[color:var(--primary)] rounded-md p-0.5">
      <Button 
        variant={lang === 'nl' ? 'primary' : 'ghost'} 
        size="sm" 
        onClick={() => setLang('nl')}
        className="px-2 h-7 text-xs"
      >
        NL
      </Button>
      <Button 
        variant={lang === 'en' ? 'primary' : 'ghost'} 
        size="sm" 
        onClick={() => setLang('en')}
        className="px-2 h-7 text-xs"
      >
        EN
      </Button>
      <Button 
        variant={lang === 'de' ? 'primary' : 'ghost'} 
        size="sm" 
        onClick={() => setLang('de')}
        className="px-2 h-7 text-xs"
      >
        DE
      </Button>
    </div>
  );
}
