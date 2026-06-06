'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { Button } from '@/components/ui/button';
import { Settings, EyeOff, Search } from 'lucide-react';
import type { MenuItem } from '@/lib/api/types';
import { useTranslation } from '@/lib/i18n/use-translation';

export default function AdminMenuPage() {
  const { t, lang } = useTranslation();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  async function fetchMenu() {
    try {
      setIsLoading(true);
      const data = await apiFetch<MenuItem[]>('/api/menu/items');
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch menu items', error);
      alert('Failed to load menu items');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  const toggleAvailability = async (id: number) => {
    try {
      await apiFetch(`/api/menu/items/${id}/availability`, { method: 'PATCH' });
      setItems(prev => prev.map(item => item.id === id ? { ...item, available: !item.available } : item));
    } catch (e) {
      console.error('Failed to update availability', e);
      alert('Failed to update availability');
    }
  };

  const filteredItems = items.filter(i => {
    const itemName = lang === 'en' && i.nameEn ? i.nameEn : i.nameNl;
    const catName = lang === 'en' && i.categoryNameEn ? i.categoryNameEn : i.categoryNameNl;
    return itemName?.toLowerCase().includes(searchTerm.toLowerCase()) || 
           catName?.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (isLoading) return <div className="p-8 text-center text-lg">{t('common.loading')}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">{t('admin.menu_manage.title')}</h1>
        <div className="flex gap-4">
          <Button variant="secondary">{t('admin.menu_manage.addCategory')}</Button>
          <Button variant="primary">{t('admin.menu_manage.addDish')}</Button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[color:var(--border)] shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-[color:var(--border)] flex gap-4 items-center bg-[color:var(--bg-alt)]">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)]" />
            <input 
              type="text" 
              placeholder={t('admin.menu_manage.searchPlaceholder')}
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-md border border-[color:var(--border)] bg-white focus:outline-none focus:ring-2 focus:ring-[color:var(--focus-ring)]"
            />
          </div>
        </div>
        
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[color:var(--bg-alt)] border-b border-[color:var(--border)] text-sm text-[color:var(--text-muted)]">
              <th className="p-4 font-medium">{t('admin.menu_manage.name')}</th>
              <th className="p-4 font-medium">Categorie</th>
              <th className="p-4 font-medium text-right">{t('admin.menu_manage.price')}</th>
              <th className="p-4 font-medium text-center">Status</th>
              <th className="p-4 font-medium text-right">{t('common.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => {
              const itemName = lang === 'en' && item.nameEn ? item.nameEn : item.nameNl;
              const itemDesc = lang === 'en' && item.descriptionEn ? item.descriptionEn : item.descriptionNl;
              const catName = lang === 'en' && item.categoryNameEn ? item.categoryNameEn : item.categoryNameNl;
              
              return (
              <tr key={item.id} className={`border-b border-[color:var(--border)] last:border-0 hover:bg-cacao-50/50 ${!item.available ? 'opacity-60' : ''}`}>
                <td className="p-4">
                  <div className="font-medium text-[color:var(--ink)] flex items-center gap-3">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={itemName} className="w-10 h-10 rounded-md object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-md bg-cacao-100 flex items-center justify-center text-cacao-400">
                        IMG
                      </div>
                    )}
                    <div>
                      <div>{itemName}</div>
                      {itemDesc && <div className="text-xs text-[color:var(--text-muted)] line-clamp-1">{itemDesc}</div>}
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm text-[color:var(--text-muted)]">
                  <span className="px-2 py-1 rounded bg-cacao-100 text-cacao-800 text-xs font-medium">
                    {catName}
                  </span>
                </td>
                <td className="p-4 text-right tnum font-medium text-[color:var(--ink)]">
                  €{(item.price || 0).toFixed(2)}
                </td>
                <td className="p-4 text-center">
                  {item.available ? (
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[color:var(--success)]/10 text-[color:var(--success)]">
                      {t('admin.menu_manage.available')}
                    </span>
                  ) : (
                    <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-[color:var(--error)]/10 text-[color:var(--error)] items-center gap-1">
                      <EyeOff className="w-3 h-3" /> {t('admin.menu_manage.unavailable')}
                    </span>
                  )}
                </td>
                <td className="p-4 text-right flex items-center justify-end gap-2">
                  <Button variant="secondary" size="sm" onClick={() => toggleAvailability(item.id!)}>
                    {item.available ? 'Mark 86\'d' : 'Herstellen'}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-[color:var(--text-muted)]">
                    <Settings className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            )})}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="p-8 text-center text-[color:var(--text-muted)]">
                  {t('admin.menu_manage.noDishesFound')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
