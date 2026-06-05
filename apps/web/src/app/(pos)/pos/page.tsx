'use client';

import { useCart } from '@/store/cart-store';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

// Temporary mock data for UI testing until API is wired
const MOCK_CATEGORIES = ['Voorgerechten', 'Hoofdgerechten', 'Desserts', 'Dranken'];
const MOCK_ITEMS = [
  { id: 1, name: 'Zeeuwse Oesters (6st)', price: 18.50, category: 'Voorgerechten' },
  { id: 2, name: 'Steak Tartare', price: 14.00, category: 'Voorgerechten' },
  { id: 3, name: 'Zeebaars', price: 26.00, category: 'Hoofdgerechten' },
  { id: 4, name: 'Tournedos', price: 32.50, category: 'Hoofdgerechten' },
  { id: 5, name: 'Crème Brûlée', price: 9.50, category: 'Desserts' },
];

export default function PosTerminalPage() {
  const [activeCategory, setActiveCategory] = useState(MOCK_CATEGORIES[0]);
  const cart = useCart();
  
  const taxRate = 0.09; // 9% BTW for food
  const subtotal = cart.subtotal();
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  const filteredItems = MOCK_ITEMS.filter(i => i.category === activeCategory);

  return (
    <div className="h-full flex flex-col tablet:grid tablet:grid-cols-[1fr_380px]">
      
      {/* LEFT PANEL: Menu & Categories */}
      <div className="flex flex-col h-full overflow-hidden bg-[color:var(--bg)]">
        {/* Category Tabs */}
        <div className="flex-none p-4 overflow-x-auto border-b border-[color:var(--border)] hide-scrollbar">
          <div className="flex gap-2">
            {MOCK_CATEGORIES.map(cat => (
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
            {filteredItems.map(item => (
              <button
                key={item.id}
                onClick={() => cart.add({ menuItemId: item.id, name: item.name, unitPriceEur: item.price })}
                className="flex flex-col text-left bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl p-4 shadow-soft hover:shadow-lift transition-all active:scale-95 h-32 justify-between"
              >
                <span className="font-display font-medium text-lg text-[color:var(--ink)] leading-tight">{item.name}</span>
                <span className="text-[color:var(--primary)] font-medium">€ {item.price.toFixed(2)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Order Cart */}
      <div className="flex flex-col h-[50vh] tablet:h-full bg-[color:var(--surface)] border-t tablet:border-t-0 tablet:border-l border-[color:var(--border)] shadow-[-4px_0_12px_rgba(36,28,23,0.03)] z-10">
        
        {/* Cart Header */}
        <div className="flex-none p-4 border-b border-[color:var(--border)] flex justify-between items-center bg-[color:var(--bg-alt)]">
          <h2 className="font-display font-bold text-xl text-[color:var(--ink)]">Bestelling</h2>
          <span className="text-sm font-medium bg-[color:var(--warning-bg)] text-[color:var(--warning)] px-2 py-1 rounded">Tafel 12</span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.lines.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-[color:var(--text-muted)] italic text-sm">
              <p>Geen items in bestelling</p>
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
              <span>Subtotaal</span>
              <span>€ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[color:var(--text-muted)]">
              <span>BTW (9%)</span>
              <span>€ {taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[color:var(--ink)] font-bold text-lg pt-2 border-t border-[color:var(--border)]">
              <span>Totaal</span>
              <span>€ {total.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <Button variant="secondary" onClick={() => cart.clear()} disabled={cart.lines.length === 0} className="w-full">
              Annuleren
            </Button>
            <Button variant="secondary" disabled={cart.lines.length === 0} className="w-full text-[color:var(--info)] border-[color:var(--info)]">
              In de Wacht
            </Button>
          </div>
          <Button variant="accent" disabled={cart.lines.length === 0} className="w-full h-14 text-lg">
            Afrekenen
          </Button>
        </div>

      </div>
    </div>
  );
}
