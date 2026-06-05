'use client';

import { useCallback } from 'react';
import { useLangStore } from '@/store/ui-store';
import { nl } from './dictionaries/nl';
import { en } from './dictionaries/en';

const dictionaries = { nl, en };

export function useTranslation() {
  const lang = useLangStore(s => s.lang);
  
  const t = useCallback((key: string) => {
    const parts = key.split('.');
    let v: any = dictionaries[lang];
    for (const p of parts) {
      if (v === undefined) return key;
      v = v[p];
    }
    return (v as string) ?? key;
  }, [lang]);

  return { t, lang, setLang: useLangStore.getState().setLang };
}
