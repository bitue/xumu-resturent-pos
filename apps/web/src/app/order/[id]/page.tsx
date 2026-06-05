'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { useStompSubscription } from '@/lib/ws/use-stomp';
import { motion } from 'framer-motion';
import { Check, Clock, ChefHat, Utensils, Receipt } from 'lucide-react';
import type { Order } from '@/lib/api/types';

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await apiFetch<Order>(`/api/orders/${params.id}`);
        setOrder(data);
      } catch (error) {
        console.error('Failed to fetch order', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchOrder();
  }, [params.id]);

  // Listen for order-wide status updates
  useStompSubscription<Order>('/topic/orders', (updatedOrder) => {
    if (updatedOrder.id.toString() === params.id) {
      setOrder(updatedOrder);
    }
  });

  if (isLoading) return <div className="p-8 text-center text-[color:var(--text-muted)]">Laden...</div>;
  if (!order) return <div className="p-8 text-center text-[color:var(--error)]">Bestelling niet gevonden.</div>;

  const steps = [
    { status: 'PENDING', label: 'Ontvangen', icon: Clock },
    { status: 'PREPARING', label: 'In de keuken', icon: ChefHat },
    { status: 'READY', label: 'Klaar', icon: Check },
    { status: 'COMPLETED', label: 'Geserveerd', icon: Utensils },
    { status: 'PAID', label: 'Betaald', icon: Receipt },
  ];

  const currentStepIndex = steps.findIndex(s => s.status === order.status);
  // If cancelled or something else, handle gracefully
  const isCancelled = order.status === 'CANCELLED';

  return (
    <div className="min-h-screen bg-[color:var(--bg)] flex flex-col items-center py-12 px-4 font-body">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-soft border border-[color:var(--border)] overflow-hidden">
        <div className="p-6 bg-[color:var(--bg-alt)] border-b border-[color:var(--border)] text-center">
          <h1 className="text-2xl font-display font-bold text-[color:var(--delft-900)]">Jouw Bestelling</h1>
          <p className="text-[color:var(--text-muted)] mt-1 font-medium">{order.orderNumber}</p>
        </div>

        {isCancelled ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[color:var(--error)]/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-[color:var(--error)] font-bold text-2xl">✕</span>
            </div>
            <h2 className="text-lg font-bold text-[color:var(--ink)]">Geannuleerd</h2>
            <p className="text-[color:var(--text-muted)] mt-2">Deze bestelling is geannuleerd.</p>
          </div>
        ) : (
          <div className="p-8">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[color:var(--border)]" />
              
              <div className="space-y-8">
                {steps.map((step, index) => {
                  const isCompleted = index <= currentStepIndex;
                  const isActive = index === currentStepIndex;
                  const Icon = step.icon;
                  
                  return (
                    <div key={step.status} className="relative flex items-center gap-6">
                      <motion.div 
                        initial={false}
                        animate={{
                          backgroundColor: isCompleted ? 'var(--primary)' : '#ffffff',
                          borderColor: isCompleted ? 'var(--primary)' : 'var(--border)',
                          color: isCompleted ? '#ffffff' : 'var(--text-muted)'
                        }}
                        className={`z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h3 className={`font-bold text-lg ${isActive ? 'text-[color:var(--ink)]' : isCompleted ? 'text-[color:var(--ink)]' : 'text-[color:var(--text-muted)]'}`}>
                          {step.label}
                        </h3>
                        {isActive && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-sm text-[color:var(--primary)] font-medium mt-0.5"
                          >
                            Momenteel in behandeling...
                          </motion.p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="bg-[color:var(--bg-alt)] p-6 border-t border-[color:var(--border)]">
          <h4 className="font-bold text-[color:var(--ink)] mb-4">Overzicht</h4>
          <ul className="space-y-3">
            {order.items.map((item: any) => (
              <li key={item.id} className="flex justify-between text-[color:var(--ink)]">
                <span><span className="text-[color:var(--text-muted)]">{item.quantity}x</span> {item.menuItemName}</span>
                <span className="font-medium tnum">€{item.unitPriceEur.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-[color:var(--border)] flex justify-between font-bold text-lg text-[color:var(--ink)]">
            <span>Totaal</span>
            <span className="tnum">€{order.totalAmountEur.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
