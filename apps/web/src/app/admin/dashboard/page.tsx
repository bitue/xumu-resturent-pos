'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { useTranslation } from '@/lib/i18n/use-translation';

export default function AdminDashboardPage() {
  const { t, lang } = useTranslation();
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
        const chartData = (dailySales || []).map(s => {
          rev += Number(s.totalRevenue) || 0;
          orders += Number(s.orderCount) || 0;
          return {
            name: new Date(s.date).toLocaleDateString(lang === 'nl' ? 'nl-NL' : 'en-US', { weekday: 'short' }),
            revenue: Number(s.totalRevenue) || 0
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
        setTopItems((top || []).map(t => ({ 
          name: lang === 'en' && t.menuItemNameEn ? t.menuItemNameEn : t.menuItemNameNl, 
          count: t.quantitySold 
        })));

      } catch (e) {
        console.error('Failed to fetch dashboard data', e);
      }
    }
    fetchDashboard();
  }, [lang]);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">{t('admin.dashboard.title')}</h1>
        <div className="px-4 py-2 bg-white border border-[color:var(--border)] rounded-md shadow-sm text-sm font-medium text-[color:var(--ink-soft)]">
          {t('admin.dashboard.last7days')}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">{t('admin.dashboard.revenue')}</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">€ {Number(stats?.totalRevenue || 0).toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">{t('admin.dashboard.ordersCount')}</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">{stats?.totalOrders || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">{t('admin.dashboard.avgSpend')}</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">€ {Number(stats?.averageSpend || 0).toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">{t('admin.dashboard.topItem')}</p>
          <p className="text-xl font-display font-bold text-[color:var(--ink)] truncate">{topItems[0]?.name || 'N/A'}</p>
          <p className="text-sm text-[color:var(--text-muted)] mt-2">{topItems[0]?.count || 0}{t('admin.dashboard.timesOrdered')}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <h2 className="text-lg font-bold text-[color:var(--ink)] mb-6">{t('admin.dashboard.revenueChartTitle')}</h2>
          <div className="h-80 w-full" style={{ minWidth: 0, minHeight: 0 }}>
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
            <h2 className="text-lg font-bold text-[color:var(--ink)]">{t('admin.dashboard.liveKitchen')}</h2>
            <span className="flex items-center gap-2 text-sm font-medium text-[color:var(--willow-500)]">
              <span className="w-2 h-2 rounded-full bg-[color:var(--willow-500)] animate-pulse" />
              {t('admin.dashboard.live')}
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
            <span className="text-5xl font-display font-bold text-[color:var(--ink)]">-</span>
            <span className="text-[color:var(--text-muted)]">{t('admin.dashboard.activeTickets')}</span>
            
            <a href="/kds" className="mt-8 text-[color:var(--primary)] text-sm font-medium hover:underline inline-flex items-center gap-1">
              {t('admin.dashboard.openKds')} &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
