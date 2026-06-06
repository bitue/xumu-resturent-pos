'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { Clock, CheckCircle2, ChefHat, XCircle, ReceiptText } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/use-translation';

type OrderItem = {
  id: number;
  menuItemName: string;
  quantity: number;
  unitPrice: number;
  status: string;
};

type Order = {
  id: number;
  orderNumber: string;
  type: string;
  status: string;
  subtotal: number;
  tax: number;
  total: number;
  tableId: number | null;
  createdAt: string;
  items: OrderItem[];
};

export default function AdminOrdersPage() {
  const { t, lang } = useTranslation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>('ALL');

  const STATUS_CONFIG: Record<string, { label: string; color: string; icon: any }> = {
    PENDING:    { label: t('admin.orders.pending'),    color: 'bg-amber-100 text-amber-700',   icon: Clock },
    IN_PROGRESS:{ label: t('admin.orders.in_progress'), color: 'bg-blue-100 text-blue-700',   icon: ChefHat },
    READY:      { label: t('admin.orders.ready'),       color: 'bg-green-100 text-green-700',   icon: CheckCircle2 },
    COMPLETED:  { label: t('admin.orders.completed'),   color: 'bg-gray-100 text-gray-600',     icon: ReceiptText },
    CANCELLED:  { label: t('admin.orders.cancelled'), color: 'bg-red-100 text-red-600',      icon: XCircle },
  };

  async function fetchOrders() {
    try {
      setIsLoading(true);
      const data = await apiFetch<Order[]>('/api/orders');
      setOrders(data);
    } catch (error) {
      console.error('Failed to fetch orders', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchOrders();
    // Poll every 15s for live updates
    const interval = setInterval(fetchOrders, 15000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (orderId: number, status: string) => {
    try {
      await apiFetch(`/api/orders/${orderId}/status`, { method: 'PUT', body: JSON.stringify({ status }) });
      setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    } catch (e) {
      console.error('Failed to update status', e);
    }
  };

  const filtered = filter === 'ALL' ? orders : orders.filter(o => o.status === filter);

  if (isLoading) return <div className="p-8 text-center text-lg">{t('common.loading')}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">{t('admin.orders.title')}</h1>
        <div className="flex gap-2">
          {['ALL', 'PENDING', 'IN_PROGRESS', 'READY', 'COMPLETED'].map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                filter === s
                  ? 'bg-[color:var(--delft-900)] text-white'
                  : 'bg-white border border-[color:var(--border)] text-[color:var(--ink-soft)] hover:bg-cacao-50'
              }`}
            >
              {s === 'ALL' ? t('common.all') : STATUS_CONFIG[s]?.label ?? s}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-[color:var(--border)] p-12 text-center text-[color:var(--text-muted)]">
          {t('admin.orders.noOrdersFound')}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(order => {
            const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG['PENDING'] || { label: order.status, color: 'bg-gray-100 text-gray-600', icon: Clock };
            const Icon = cfg.icon;
            return (
              <div key={order.id} className="bg-white rounded-xl border border-[color:var(--border)] shadow-sm overflow-hidden">
                <div className="p-4 border-b border-[color:var(--border)] flex justify-between items-start">
                  <div>
                    <div className="font-bold text-[color:var(--ink)] font-mono">{order.orderNumber}</div>
                    <div className="text-xs text-[color:var(--text-muted)] mt-0.5">
                      {order.tableId ? `Tafel T${order.tableId}` : order.type} · {new Date(order.createdAt).toLocaleTimeString(lang === 'nl' ? 'nl-NL' : 'en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${cfg.color}`}>
                    {Icon && <Icon className="w-3 h-3" />}
                    {cfg?.label}
                  </span>
                </div>

                <div className="p-4 space-y-1.5">
                  {order.items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-[color:var(--ink)]">
                        <span className="font-medium">{item.quantity}×</span> {item.menuItemName}
                      </span>
                      <span className="text-[color:var(--text-muted)]">€{(item.unitPrice * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="px-4 pb-2 border-t border-[color:var(--border)] pt-2 flex justify-between items-center">
                  <span className="font-bold text-[color:var(--ink)]">€{order.total.toFixed(2)}</span>
                  <div className="flex gap-2">
                    {order.status === 'PENDING' && (
                      <button onClick={() => updateStatus(order.id, 'IN_PROGRESS')} className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded border border-blue-200 hover:bg-blue-100">
                        Start
                      </button>
                    )}
                    {order.status === 'IN_PROGRESS' && (
                      <button onClick={() => updateStatus(order.id, 'READY')} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded border border-green-200 hover:bg-green-100">
                        Klaar
                      </button>
                    )}
                    {order.status === 'READY' && (
                      <button onClick={() => updateStatus(order.id, 'COMPLETED')} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded border border-gray-200 hover:bg-gray-200">
                        Afgerond
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
