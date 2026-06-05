import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Line = { 
  menuItemId: number; 
  name: string; 
  unitPriceEur: number; 
  quantity: number; 
  note?: string; 
};

type CartState = {
  type: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY';
  tableId?: number;
  lines: Line[];
  customerNote?: string;
  setType: (type: 'DINE_IN' | 'TAKEAWAY' | 'DELIVERY') => void;
  setTableId: (id?: number) => void;
  setCustomerNote: (note?: string) => void;
  add: (line: Omit<Line, 'quantity'> & { quantity?: number }) => void;
  setQty: (menuItemId: number, qty: number) => void;
  remove: (menuItemId: number) => void;
  clear: () => void;
  subtotal: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      type: 'DINE_IN',
      lines: [],
      
      setType: (type) => set({ type }),
      setTableId: (id) => set({ tableId: id }),
      setCustomerNote: (note) => set({ customerNote: note }),

      add: (item) => {
        set((state) => {
          const existing = state.lines.find(l => l.menuItemId === item.menuItemId);
          if (existing) {
            return {
              lines: state.lines.map(l => 
                l.menuItemId === item.menuItemId 
                  ? { ...l, quantity: l.quantity + (item.quantity ?? 1) } 
                  : l
              )
            };
          }
          return { lines: [...state.lines, { ...item, quantity: item.quantity ?? 1 }] };
        });
      },

      setQty: (menuItemId, qty) => {
        set((state) => ({
          lines: qty <= 0 
            ? state.lines.filter(l => l.menuItemId !== menuItemId)
            : state.lines.map(l => l.menuItemId === menuItemId ? { ...l, quantity: qty } : l)
        }));
      },

      remove: (menuItemId) => {
        set((state) => ({
          lines: state.lines.filter(l => l.menuItemId !== menuItemId)
        }));
      },

      clear: () => set({ lines: [], tableId: undefined, customerNote: undefined, type: 'DINE_IN' }),

      subtotal: () => {
        return get().lines.reduce((acc, line) => acc + (line.unitPriceEur * line.quantity), 0);
      }
    }),
    {
      name: 'xuma-pos-cart',
    }
  )
);
