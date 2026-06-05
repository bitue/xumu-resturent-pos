import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LangState = {
  lang: 'nl' | 'en';
  setLang: (lang: 'nl' | 'en') => void;
};

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: 'nl',
      setLang: (lang) => {
        set({ lang });
        document.cookie = `xuma_lang=${lang}; path=/; max-age=31536000`;
      },
    }),
    { name: 'xuma-lang' }
  )
);
