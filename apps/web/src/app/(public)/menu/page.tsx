'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from '@/lib/i18n/use-translation';
import { apiFetch } from '@/lib/api/client';
import type { MenuItem } from '@/lib/api/types';

export default function MenuPage() {
  const { t, lang } = useTranslation();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const data = await apiFetch<MenuItem[]>('/api/menu/items');
        setItems(data.filter(item => item.available));
      } catch (error) {
        console.error('Failed to fetch menu items', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenu();
  }, []);

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    const categoryName = (lang === 'en' && item.categoryNameEn ? item.categoryNameEn : item.categoryNameNl) || 'Unknown';
    if (!acc[categoryName]) {
      acc[categoryName] = [];
    }
    acc[categoryName].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-display text-[color:var(--primary)] mb-4 text-center">{t('menu.title')}</h1>
      
      {isLoading ? (
        <div className="text-center text-[color:var(--text-muted)] mt-12">
          {t('menu.loading')}
        </div>
      ) : Object.keys(groupedItems).length === 0 ? (
        <div className="max-w-3xl mx-auto mt-8">
          <div className="p-8 bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl shadow-soft">
            <p className="text-center text-[color:var(--text-muted)] italic">
              {t('menu.subtitle')}
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-12 mt-12">
          {Object.entries(groupedItems).map(([category, categoryItems]) => (
            <div key={category} className="space-y-6">
              <h2 className="text-2xl font-display font-semibold text-[color:var(--delft-900)] border-b border-[color:var(--border)] pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categoryItems.map(item => {
                  const itemName = lang === 'en' && item.nameEn ? item.nameEn : item.nameNl;
                  const itemDesc = lang === 'en' && item.descriptionEn ? item.descriptionEn : item.descriptionNl;
                  
                  return (
                  <div key={item.id} className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl p-4 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-lg text-[color:var(--ink)]">{itemName}</h3>
                        <span className="font-medium text-[color:var(--primary)]">€{(item.price || 0).toFixed(2)}</span>
                      </div>
                      {itemDesc && (
                        <p className="text-[color:var(--text-muted)] text-sm mb-4">
                          {itemDesc}
                        </p>
                      )}
                    </div>
                    {item.allergens && item.allergens.length > 0 && (
                      <div className="text-xs text-cacao-500 mt-2">
                        Contains: {item.allergens.join(', ')}
                      </div>
                    )}
                  </div>
                )})}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
