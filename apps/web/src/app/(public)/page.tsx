'use client';

import { useTranslation } from '@/lib/i18n/use-translation';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 py-16 text-center">
      <h1 className="text-5xl font-display text-[color:var(--primary)] mb-6 font-bold tracking-tight">
        {t('home.hero_title')}
      </h1>
      <p className="max-w-2xl text-lg text-[color:var(--text-muted)] mb-10 text-balance leading-relaxed">
        {t('home.hero_subtitle')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/reserve" className="inline-flex items-center justify-center rounded-md font-medium transition-all shadow-soft hover:shadow-lift bg-[color:var(--primary)] text-[color:var(--primary-fg)] hover:bg-[color:var(--primary-hover)] h-12 px-8 text-base">
          {t('home.reserve_btn')}
        </a>
        <a href="/menu" className="inline-flex items-center justify-center rounded-md font-medium transition-all border border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-cacao-50 h-12 px-8 text-base bg-transparent">
          {t('home.menu_btn')}
        </a>
      </div>
    </div>
  );
}
