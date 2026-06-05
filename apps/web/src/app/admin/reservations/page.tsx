'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

type ReservationStatus = 'PENDING' | 'CONFIRMED' | 'SEATED' | 'CANCELLED' | 'NO_SHOW';

type Reservation = {
  id: number;
  customerName: string;
  customerPhone: string;
  tableId: number | null;
  tableNumber: string | null;
  reservationTime: string;
  partySize: number;
  status: ReservationStatus;
  specialRequests: string | null;
};

export default function ReservationsPage() {
  const [loading, setLoading] = useState(true);
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    loadReservations();
  }, []);

  async function loadReservations() {
    try {
      setLoading(true);
      const res = await apiFetch<Reservation[]>('/api/reservations');
      setReservations(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function updateStatus(id: number, status: ReservationStatus) {
    try {
      await apiFetch(`/api/reservations/${id}/status?status=${status}`, { method: 'PATCH' });
      loadReservations();
    } catch (err) {
      console.error(err);
    }
  }

  const getStatusColor = (status: ReservationStatus) => {
    switch (status) {
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CONFIRMED': return 'bg-blue-100 text-blue-800';
      case 'SEATED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      case 'NO_SHOW': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-display font-bold">Reserveringen</h1>
        <div className="h-[400px] bg-black/5 animate-pulse rounded-2xl"></div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold text-[color:var(--primary)] mb-2">Reserveringen</h1>
          <p className="text-[color:var(--text-muted)]">Beheer tafel reserveringen voor vandaag</p>
        </div>
        <button className="bg-[color:var(--primary)] text-white px-6 py-3 rounded-xl font-medium hover:bg-[color:var(--delft-900)] transition-colors shadow-soft">
          + Nieuwe Reservering
        </button>
      </div>

      <div className="bg-white rounded-2xl border shadow-soft border-[color:var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black/5 text-sm text-[color:var(--text-muted)] border-b border-[color:var(--border)]">
                <th className="py-4 px-6 font-medium">Tijd</th>
                <th className="py-4 px-6 font-medium">Klant</th>
                <th className="py-4 px-6 font-medium">Personen</th>
                <th className="py-4 px-6 font-medium">Tafel</th>
                <th className="py-4 px-6 font-medium">Status</th>
                <th className="py-4 px-6 font-medium text-right">Acties</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r.id} className="border-b last:border-0 border-[color:var(--border)] hover:bg-black/[0.02] transition-colors">
                  <td className="py-4 px-6 font-medium">
                    {new Date(r.reservationTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium text-[color:var(--primary)]">{r.customerName}</div>
                    <div className="text-sm text-[color:var(--text-muted)]">{r.customerPhone}</div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 text-sm font-bold">
                      {r.partySize}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-[color:var(--text-muted)]">
                    {r.tableNumber || 'Geen tafel toegewezen'}
                  </td>
                  <td className="py-4 px-6">
                    <span className={cn('px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider', getStatusColor(r.status))}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right space-x-2">
                    {r.status === 'PENDING' && (
                      <button onClick={() => updateStatus(r.id, 'CONFIRMED')} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Bevestigen
                      </button>
                    )}
                    {r.status === 'CONFIRMED' && (
                      <button onClick={() => updateStatus(r.id, 'SEATED')} className="text-green-600 hover:text-green-800 text-sm font-medium">
                        Zitten
                      </button>
                    )}
                    {(r.status === 'PENDING' || r.status === 'CONFIRMED') && (
                      <button onClick={() => updateStatus(r.id, 'CANCELLED')} className="text-red-600 hover:text-red-800 text-sm font-medium">
                        Annuleren
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {reservations.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[color:var(--text-muted)]">
                    Geen reserveringen voor vandaag
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
