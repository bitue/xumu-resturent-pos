'use client';

import { useCart } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { useTranslation } from '@/lib/i18n/use-translation';

type MenuItem = {
  id: number;
  nameNl: string;
  nameEn: string;
  descriptionNl: string;
  descriptionEn: string;
  price: number;
  imageUrl: string;
  isAvailable: boolean;
  isFeatured: boolean;
  categoryNameNl: string;
  categoryNameEn: string;
};

export default function PosTerminalPage() {
  const { t, lang } = useTranslation();
  const [items, setItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const cart = useCart();
  
  useEffect(() => {
    async function fetchMenu() {
      try {
        const data = await apiFetch<MenuItem[]>('/api/menu/items');
        setItems(data);
        const uniqueCats = Array.from(new Set(data.map(i => (lang === 'en' && i.categoryNameEn ? i.categoryNameEn : i.categoryNameNl) || '')));
        setCategories(uniqueCats);
        if (uniqueCats.length > 0) setActiveCategory(uniqueCats[0] || '');
      } catch (e) {
        console.error('Failed to fetch menu:', e);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMenu();
  }, [lang]);

  const taxRate = 0.09; // 9% BTW for food
  const subtotal = cart.subtotal();
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  const filteredItems = items.filter(i => {
    const catName = lang === 'en' && i.categoryNameEn ? i.categoryNameEn : i.categoryNameNl;
    return catName === activeCategory;
  });

  const handleCheckout = async () => {
    try {
      // 1. Create order
      const orderPayload = {
        type: cart.type,
        tableId: cart.tableId,
        customerNote: cart.customerNote,
        items: cart.lines.map(line => ({
          menuItemId: line.menuItemId,
          quantity: line.quantity,
          notes: line.note
        }))
      };
      
      const order = await apiFetch<any>('/api/orders', {
        method: 'POST',
        body: JSON.stringify(orderPayload)
      });

      // 1b. Process dummy payment so it registers as PAID
      await apiFetch(`/api/orders/${order.id}/payments`, {
        method: 'POST',
        body: JSON.stringify({
          amount: total,
          method: 'CASH',
          reference: 'DUMMY-PAYMENT'
        })
      });

      // 2. Clear cart
      cart.clear();
      alert(`Order ${order.orderNumber} placed & paid successfully!`);
    } catch (e) {
      console.error('Checkout failed', e);
      alert('Checkout failed');
    }
  };

  if (isLoading) return <div className="h-full flex items-center justify-center">{t('common.loading')}</div>;

  return (
    <div className="h-full flex flex-col tablet:grid tablet:grid-cols-[1fr_380px]">
      
      {/* LEFT PANEL: Menu & Categories */}
      <div className="flex flex-col h-full overflow-hidden bg-[color:var(--bg)]">
        {/* Category Tabs */}
        <div className="flex-none p-4 overflow-x-auto border-b border-[color:var(--border)] hide-scrollbar">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-3 rounded-md font-medium text-sm whitespace-nowrap transition-colors ${
                  activeCategory === cat 
                    ? 'bg-[color:var(--primary)] text-[color:var(--primary-fg)] shadow-soft' 
                    : 'bg-[color:var(--surface)] text-[color:var(--ink-soft)] hover:bg-cacao-50 border border-[color:var(--border)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => {
              const itemName = lang === 'en' && item.nameEn ? item.nameEn : item.nameNl;
              return (
              <button
                key={item.id}
                disabled={!item.isAvailable}
                onClick={() => cart.add({ menuItemId: item.id, name: itemName, unitPriceEur: item.price })}
                className={`flex flex-col text-left bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl p-4 shadow-soft transition-all active:scale-95 h-32 justify-between ${!item.isAvailable ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lift'}`}
              >
                <span className="font-display font-medium text-lg text-[color:var(--ink)] leading-tight">{itemName}</span>
                <span className="text-[color:var(--primary)] font-medium">€ {item.price.toFixed(2)}</span>
              </button>
            )})}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Order Cart */}
      <div className="flex flex-col h-[50vh] tablet:h-full bg-[color:var(--surface)] border-t tablet:border-t-0 tablet:border-l border-[color:var(--border)] shadow-[-4px_0_12px_rgba(36,28,23,0.03)] z-10">
        
        {/* Cart Header */}
        <div className="flex-none p-4 border-b border-[color:var(--border)] flex justify-between items-center bg-[color:var(--bg-alt)]">
          <h2 className="font-display font-bold text-xl text-[color:var(--ink)]">{t('admin.pos.order')}</h2>
          <span className="text-sm font-medium bg-[color:var(--warning-bg)] text-[color:var(--warning)] px-2 py-1 rounded">
            {cart.type === 'DINE_IN' ? (cart.tableId ? `${t('admin.reservations_table.table')} ${cart.tableId}` : t('admin.pos.chooseTable')) : cart.type}
          </span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-[color:var(--text-muted)] italic text-sm">
              <p>{t('admin.pos.emptyCart')}</p>
            </div>
          ) : (
            cart.lines.map((line) => (
              <div key={line.menuItemId} className="flex flex-col gap-2 p-3 bg-[color:var(--bg)] border border-[color:var(--border)] rounded-lg">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-[color:var(--ink)] text-sm">{line.name}</span>
                  <span className="font-medium text-[color:var(--ink)] text-sm">€ {(line.unitPriceEur * line.quantity).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-[color:var(--text-muted)]">€ {line.unitPriceEur.toFixed(2)} / st</span>
                  <div className="flex items-center gap-3 bg-[color:var(--surface)] border border-[color:var(--border)] rounded-md">
                    <button onClick={() => cart.setQty(line.menuItemId, line.quantity - 1)} className="p-1 hover:bg-[color:var(--bg-alt)] text-[color:var(--ink-soft)] rounded-l-md"><Minus size={16}/></button>
                    <span className="text-sm font-medium w-4 text-center">{line.quantity}</span>
                    <button onClick={() => cart.setQty(line.menuItemId, line.quantity + 1)} className="p-1 hover:bg-[color:var(--bg-alt)] text-[color:var(--ink-soft)] rounded-r-md"><Plus size={16}/></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Totals & Actions */}
        <div className="flex-none p-4 border-t border-[color:var(--border)] bg-[color:var(--bg-alt)]">
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex justify-between text-[color:var(--text-muted)]">
              <span>{t('admin.pos.subtotal')}</span>
              <span>€ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[color:var(--text-muted)]">
              <span>{t('admin.pos.tax')}</span>
              <span>€ {taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[color:var(--ink)] font-bold text-lg pt-2 border-t border-[color:var(--border)]">
              <span>{t('admin.pos.total')}</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Button variant="secondary" onClick={() => cart.clear()} disabled={cart.lines.length === 0} className="w-full">
              {t('common.cancel')}
            </Button>
            <Button variant="secondary" disabled={cart.lines.length === 0} className="w-full text-[color:var(--info)] border-[color:var(--info)]">
              {t('admin.pos.hold')}
            </Button>
          </div>
          <Button variant="accent" onClick={handleCheckout} disabled={cart.lines.length === 0} className="w-full h-14 text-lg">
            {t('admin.pos.placeOrder')}
          </Button>
        </div>

      </div>
    </div>
  );
}
