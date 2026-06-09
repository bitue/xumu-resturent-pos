'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStompSubscription } from '@/lib/ws/use-stomp';
import { formatDistanceToNowStrict } from 'date-fns';
import { nl, enUS } from 'date-fns/locale';
import { useTranslation } from '@/lib/i18n/use-translation';

type OrderStatus = 'PENDING' | 'PREPARING' | 'READY';

interface Ticket {
  id: string;
  tableId: number;
  status: OrderStatus;
  createdAt: string;
  items: { name: string; qty: number; note?: string }[];
}

const mockInitialTickets: Ticket[] = [
  { id: 'ORD-0042', tableId: 4, status: 'PENDING', createdAt: new Date(Date.now() - 2 * 60000).toISOString(), items: [{ name: 'Mosselen', qty: 2 }, { name: 'Pommes', qty: 1, note: 'no salt' }] },
  { id: 'ORD-0040', tableId: 7, status: 'PREPARING', createdAt: new Date(Date.now() - 11 * 60000).toISOString(), items: [{ name: 'Steak frites', qty: 3 }, { name: 'Saffron risotto', qty: 1 }] },
  { id: 'ORD-0039', tableId: 2, status: 'READY', createdAt: new Date(Date.now() - 18 * 60000).toISOString(), items: [{ name: 'Zeeuwse Oesters', qty: 1 }] },
];

function useElapsedMinutes(since: string) {
  const [mins, setMins] = useState(0);
  useEffect(() => {
    const calc = () => setMins(Math.floor((Date.now() - new Date(since).getTime()) / 60000));
    calc();
    const id = setInterval(calc, 30000);
    return () => clearInterval(id);
  }, [since]);
  return mins;
}

function TicketCard({ ticket, onMove }: { ticket: Ticket; onMove: (id: string, to: OrderStatus) => void }) {
  const { t, lang } = useTranslation();
  const mins = useElapsedMinutes(ticket.createdAt);
  
  let borderColor = 'border-[#2d251f]'; // Default
  let timeColor = 'text-[color:var(--text-muted)]';
  
  if (mins < 5) { borderColor = 'border-[color:var(--willow-500)]'; timeColor = 'text-[color:var(--willow-500)]'; }
  else if (mins < 10) { borderColor = 'border-[color:var(--dune-300)]'; timeColor = 'text-[color:var(--dune-300)]'; }
  else if (mins < 15) { borderColor = 'border-[color:var(--warning)]'; timeColor = 'text-[color:var(--warning)]'; }
  else { borderColor = 'border-[color:var(--error)] shadow-[0_0_15px_rgba(200,60,60,0.3)]'; timeColor = 'text-[color:var(--error)] animate-pulse'; }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`bg-[#1a1511] border-2 ${borderColor} rounded-xl p-4 flex flex-col gap-3`}
    >
      <div className="flex justify-between items-center border-b border-[#2d251f] pb-2">
        <span className="font-bold text-lg text-white">#{ticket.id}</span>
        <span className="px-2 py-1 bg-white/10 rounded font-bold text-[color:var(--primary)]">{t('admin.kds.table')} {ticket.tableId}</span>
      </div>
      
      <div className="flex-1 space-y-1">
        {ticket.items.map((item, i) => (
          <div key={i} className="text-white text-lg">
            <span className="font-bold mr-2">{item.qty}×</span>
            <span>{item.name}</span>
            {item.note && <div className="text-[color:var(--warning)] text-sm ml-6 border-l-2 border-[color:var(--warning)] pl-2">{t('admin.kds.note')}: {item.note}</div>}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-end pt-2 border-t border-[#2d251f] mt-2">
        <div className={`font-medium ${timeColor}`}>
          {formatDistanceToNowStrict(new Date(ticket.createdAt), { locale: lang === 'nl' ? nl : enUS, addSuffix: true })} ({mins} min)
        </div>
        
        {ticket.status === 'PENDING' && (
          <button onClick={() => onMove(ticket.id, 'PREPARING')} className="px-4 py-2 bg-[color:var(--willow-500)] text-[#0f0c0a] font-bold rounded hover:opacity-90 transition-opacity">{t('admin.kds.start')}</button>
        )}
        {ticket.status === 'PREPARING' && (
          <button onClick={() => onMove(ticket.id, 'READY')} className="px-4 py-2 bg-[color:var(--primary)] text-white font-bold rounded hover:opacity-90 transition-opacity">{t('admin.kds.ready_btn')}</button>
        )}
        {ticket.status === 'READY' && (
          <button onClick={() => onMove(ticket.id, 'PENDING')} className="px-4 py-2 bg-[color:var(--success)] text-white font-bold rounded hover:opacity-90 transition-opacity">{t('admin.kds.served')}</button>
        )}
      </div>
    </motion.div>
  );
}

export default function KdsPage() {
  const { t } = useTranslation();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function fetchKds() {
      try {
        const { apiFetch } = await import('@/lib/api/client');
        const items = await apiFetch<any[]>('/api/kds/active');
        
        // Group items by orderNumber into Tickets
        const ticketMap = new Map<string, Ticket>();
        for (const item of items) {
          if (!ticketMap.has(item.orderNumber)) {
            ticketMap.set(item.orderNumber, {
              id: item.orderNumber,
              tableId: 0, // Not provided in KdsItemResponse, default to 0
              status: item.status, // take status of first item
              createdAt: item.orderedAt,
              items: []
            });
          }
          ticketMap.get(item.orderNumber)!.items.push({
            name: item.menuItemName,
            qty: item.quantity,
            note: item.specialRequest
          });
          // Note: store original item ID if we want to update item by item, but for now we'll do whole ticket
          (ticketMap.get(item.orderNumber) as any).itemIds = (ticketMap.get(item.orderNumber) as any).itemIds || [];
          (ticketMap.get(item.orderNumber) as any).itemIds.push(item.id);
        }
        setTickets(Array.from(ticketMap.values()));
      } catch (e) {
        console.error('Failed to fetch KDS items', e);
      }
    }
    fetchKds();
  }, []);

  // Subscribe to real-time updates
  useStompSubscription<any>('/topic/kds', (update) => {
    // Basic logic to refresh the page if a new item comes in
    // In production we would smartly update the ticket list
    const { apiFetch } = require('@/lib/api/client');
    apiFetch('/api/kds/active').then((items: any) => {
      const ticketMap = new Map<string, Ticket>();
      for (const item of items) {
        if (!ticketMap.has(item.orderNumber)) {
          ticketMap.set(item.orderNumber, {
            id: item.orderNumber,
            tableId: 0,
            status: item.status,
            createdAt: item.orderedAt,
            items: []
          });
        }
        ticketMap.get(item.orderNumber)!.items.push({
          name: item.menuItemName,
          qty: item.quantity,
          note: item.specialRequest
        });
        (ticketMap.get(item.orderNumber) as any).itemIds = (ticketMap.get(item.orderNumber) as any).itemIds || [];
        (ticketMap.get(item.orderNumber) as any).itemIds.push(item.id);
      }
      setTickets(Array.from(ticketMap.values()));
    });
  });

  const handleMove = async (id: string, newStatus: OrderStatus) => {
    try {
      const ticket = tickets.find(t => t.id === id) as any;
      if (!ticket) return;

      const { apiFetch } = await import('@/lib/api/client');
      // Update each item in the ticket
      for (const itemId of ticket.itemIds) {
        await apiFetch(`/api/kds/items/${itemId}/status`, {
          method: 'PATCH',
          body: JSON.stringify({ status: newStatus })
        });
      }

      if (newStatus === 'PENDING') {
        setTickets(prev => prev.filter(t => t.id !== id));
      } else {
        setTickets(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
      }
    } catch (e) {
      console.error('Failed to move ticket', e);
    }
  };

  const pending = tickets.filter(t => t.status === 'PENDING');
  const preparing = tickets.filter(t => t.status === 'PREPARING');
  const ready = tickets.filter(t => t.status === 'READY');

  return (
    <div className="grid grid-cols-3 gap-6 h-full">
      <div className="flex flex-col h-full bg-[#120e0c] rounded-xl border border-[#2d251f] overflow-hidden">
        <div className="bg-[#1a1511] p-4 border-b border-[#2d251f] flex justify-between items-center">
          <h2 className="font-display font-bold text-xl text-white">{t('admin.kds.incoming')}</h2>
          <span className="w-8 h-8 rounded-full bg-[#2d251f] flex items-center justify-center font-bold">{pending.length}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {pending.map(t => <TicketCard key={t.id} ticket={t} onMove={handleMove} />)}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col h-full bg-[#120e0c] rounded-xl border border-[#2d251f] overflow-hidden">
        <div className="bg-[#1a1511] p-4 border-b border-[#2d251f] flex justify-between items-center">
          <h2 className="font-display font-bold text-xl text-[color:var(--primary)]">{t('admin.kds.cooking')}</h2>
          <span className="w-8 h-8 rounded-full bg-[color:var(--primary)]/20 text-[color:var(--primary)] flex items-center justify-center font-bold">{preparing.length}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {preparing.map(t => <TicketCard key={t.id} ticket={t} onMove={handleMove} />)}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col h-full bg-[#120e0c] rounded-xl border border-[#2d251f] overflow-hidden">
        <div className="bg-[#1a1511] p-4 border-b border-[#2d251f] flex justify-between items-center">
          <h2 className="font-display font-bold text-xl text-[color:var(--success)]">{t('admin.kds.ready')}</h2>
          <span className="w-8 h-8 rounded-full bg-[color:var(--success)]/20 text-[color:var(--success)] flex items-center justify-center font-bold">{ready.length}</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {ready.map(t => <TicketCard key={t.id} ticket={t} onMove={handleMove} />)}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
