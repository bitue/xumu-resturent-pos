'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStompSubscription } from '@/lib/ws/use-stomp';
import { formatDistanceToNowStrict } from 'date-fns';
import { nl } from 'date-fns/locale';

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
        <span className="px-2 py-1 bg-white/10 rounded font-bold text-[color:var(--primary)]">Tafel {ticket.tableId}</span>
      </div>
      
      <div className="flex-1 space-y-1">
        {ticket.items.map((item, i) => (
          <div key={i} className="text-white text-lg">
            <span className="font-bold mr-2">{item.qty}×</span>
            <span>{item.name}</span>
            {item.note && <div className="text-[color:var(--warning)] text-sm ml-6 border-l-2 border-[color:var(--warning)] pl-2">note: {item.note}</div>}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-end pt-2 border-t border-[#2d251f] mt-2">
        <div className={`font-medium ${timeColor}`}>
          {formatDistanceToNowStrict(new Date(ticket.createdAt), { locale: nl, addSuffix: true })} ({mins} min)
        </div>
        
        {ticket.status === 'PENDING' && (
          <button onClick={() => onMove(ticket.id, 'PREPARING')} className="px-4 py-2 bg-[color:var(--willow-500)] text-[#0f0c0a] font-bold rounded hover:opacity-90 transition-opacity">Start →</button>
        )}
        {ticket.status === 'PREPARING' && (
          <button onClick={() => onMove(ticket.id, 'READY')} className="px-4 py-2 bg-[color:var(--primary)] text-white font-bold rounded hover:opacity-90 transition-opacity">Klaar →</button>
        )}
        {ticket.status === 'READY' && (
          <button onClick={() => onMove(ticket.id, 'PENDING')} className="px-4 py-2 bg-[color:var(--success)] text-white font-bold rounded hover:opacity-90 transition-opacity">Geserveerd ✓</button>
        )}
      </div>
    </motion.div>
  );
}

export default function KdsPage() {
  const [tickets, setTickets] = useState<Ticket[]>(mockInitialTickets);

  // In a real app, this updates the cache from WS messages
  useStompSubscription<Ticket>('/topic/orders/new', (newTicket) => {
    setTickets(prev => [newTicket, ...prev]);
  });

  const handleMove = (id: string, newStatus: OrderStatus) => {
    // In a real app, we would also emit an API call/STOMP message here
    if (newStatus === 'PENDING') {
      // Mock 'Served' by removing from KDS for now if it was READY and clicked again
      setTickets(prev => prev.filter(t => t.id !== id));
    } else {
      setTickets(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    }
  };

  const pending = tickets.filter(t => t.status === 'PENDING');
  const preparing = tickets.filter(t => t.status === 'PREPARING');
  const ready = tickets.filter(t => t.status === 'READY');

  return (
    <div className="grid grid-cols-3 gap-6 h-full">
      <div className="flex flex-col h-full bg-[#120e0c] rounded-xl border border-[#2d251f] overflow-hidden">
        <div className="bg-[#1a1511] p-4 border-b border-[#2d251f] flex justify-between items-center">
          <h2 className="font-display font-bold text-xl text-white">INCOMING</h2>
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
          <h2 className="font-display font-bold text-xl text-[color:var(--primary)]">COOKING</h2>
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
          <h2 className="font-display font-bold text-xl text-[color:var(--success)]">READY</h2>
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
