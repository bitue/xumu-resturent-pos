'use client';

import { useTranslation } from '@/lib/i18n/use-translation';

export default function ReservePage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-display text-[color:var(--primary)] mb-8 text-center">{t('reserve.title')}</h1>
      <div className="max-w-xl mx-auto p-8 bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl shadow-soft text-center">
        <p className="text-[color:var(--text-muted)] mb-6">
          {t('reserve.subtitle')}
        </p>
        <p className="font-medium text-[color:var(--ink)] mb-2">{t('reserve.phone_cta')}</p>
        <p className="font-bold text-xl text-[color:var(--primary)]">{t('reserve.phone')}</p>
      </div>
    </div>
  );
}
