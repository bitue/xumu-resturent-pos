'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';

export default function AdminDashboardPage() {
  const [sales, setSales] = useState<{name: string, revenue: number}[]>([]);
  const [topItems, setTopItems] = useState<{name: string, count: number}[]>([]);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    averageSpend: 0
  });

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const now = new Date();
        const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        
        // Fetch Daily Sales
        const dailySales = await apiFetch<any[]>(`/api/reports/daily-sales?startDate=${sevenDaysAgo.toISOString()}&endDate=${now.toISOString()}`);
        
        let rev = 0;
        let orders = 0;
        
        const chartData = dailySales.map(s => {
          rev += s.totalRevenue;
          orders += s.totalOrders;
          return {
            name: new Date(s.date).toLocaleDateString('nl-NL', { weekday: 'short' }),
            revenue: s.totalRevenue
          };
        }).reverse(); // Since API returns DESC
        
        setSales(chartData);
        setStats({
          totalRevenue: rev,
          totalOrders: orders,
          averageSpend: orders > 0 ? rev / orders : 0
        });

        // Fetch Top Items
        const top = await apiFetch<any[]>('/api/reports/top-items?limit=5');
        setTopItems(top.map(t => ({ name: t.menuItemName, count: t.quantitySold })));

      } catch (e) {
        console.error('Failed to fetch dashboard data', e);
      }
    }
    fetchDashboard();
  }, []);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">Dashboard</h1>
        <div className="px-4 py-2 bg-white border border-[color:var(--border)] rounded-md shadow-sm text-sm font-medium text-[color:var(--ink-soft)]">
          Laatste 7 Dagen
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Omzet</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">€ {stats.totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Bestellingen</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Gemiddelde Besteding</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">€ {stats.averageSpend.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Top Gerecht</p>
          <p className="text-xl font-display font-bold text-[color:var(--ink)] truncate">{topItems[0]?.name || 'N/A'}</p>
          <p className="text-sm text-[color:var(--text-muted)] mt-2">{topItems[0]?.count || 0}x besteld</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <h2 className="text-lg font-bold text-[color:var(--ink)] mb-6">Omzet (Laatste 7 dagen)</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sales}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8DCC8" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#8c7d70'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#8c7d70'}} tickFormatter={(value) => `€${value}`} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#241c17', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#E1C295' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="var(--primary)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--primary)', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: 'var(--accent)', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-[color:var(--ink)]">Live Keuken</h2>
            <span className="flex items-center gap-2 text-sm font-medium text-[color:var(--willow-500)]">
              <span className="w-2 h-2 rounded-full bg-[color:var(--willow-500)] animate-pulse" />
              Live
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-5xl font-display font-bold text-[color:var(--ink)]">-</span>
            <span className="text-[color:var(--text-muted)]">Actieve Bonnen</span>
            
            <a href="/kds" className="mt-8 text-[color:var(--primary)] text-sm font-medium hover:underline inline-flex items-center gap-1">
              Open KDS Scherm &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
