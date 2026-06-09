'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/i18n/use-translation';

type DailySales = { date: string; orderCount: number; totalRevenue: number; totalTax: number; totalDiscount: number };
type TopItem = { itemName: string; quantitySold: number; revenue: number; menuItemNameNl?: string; menuItemNameEn?: string };
type OrderTypeAnalytics = { orderType: string; orderCount: number; revenue: number };
type RevenueAnalytics = { timePeriod: string; orderCount: number; revenue: number };
type CustomerLtv = { customerId: number; customerName: string; phoneNumber: string; totalOrders: number; lifetimeValue: number };
type NewVsReturning = { newCustomersCount: number; returningCustomersCount: number };

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function ReportsPage() {
  const [loading, setLoading] = useState(true);
  const [dailySales, setDailySales] = useState<DailySales[]>([]);
  const [topItems, setTopItems] = useState<TopItem[]>([]);
  const [orderTypeData, setOrderTypeData] = useState<OrderTypeAnalytics[]>([]);
  const [hourlyRevenue, setHourlyRevenue] = useState<RevenueAnalytics[]>([]);
  const [topLtv, setTopLtv] = useState<CustomerLtv[]>([]);
  const [newVsReturning, setNewVsReturning] = useState<NewVsReturning | null>(null);
  const { t, lang } = useTranslation();

  useEffect(() => {
    async function loadReports() {
      try {
        const end = new Date().toISOString();
        const start = new Date();
        start.setDate(start.getDate() - 30);
        const startIso = start.toISOString();

        const [dailyRes, topItemsRes, orderTypeRes, hourlyRes, ltvRes, newRetRes] = await Promise.all([
          apiFetch<DailySales[]>(`/api/reports/daily-sales?startDate=${startIso}&endDate=${end}`),
          apiFetch<TopItem[]>(`/api/reports/top-items?limit=5`),
          apiFetch<OrderTypeAnalytics[]>(`/api/reports/order-types?startDate=${startIso}&endDate=${end}`),
          apiFetch<RevenueAnalytics[]>(`/api/reports/hourly-revenue?startDate=${startIso}&endDate=${end}`),
          apiFetch<CustomerLtv[]>(`/api/reports/customers/ltv?limit=5`),
          apiFetch<NewVsReturning>(`/api/reports/customers/new-vs-returning?startDate=${startIso}&endDate=${end}`)
        ]);

        setDailySales(dailyRes);
        setTopItems((topItemsRes || []).map(t => ({
          ...t,
          itemName: lang === 'en' && t.menuItemNameEn ? t.menuItemNameEn : (t.menuItemNameNl || 'Unknown')
        })));
        setOrderTypeData(orderTypeRes);
        setHourlyRevenue(hourlyRes);
        setTopLtv(ltvRes);
        setNewVsReturning(newRetRes);
      } catch (err) {
        console.error("Failed to load reports", err);
      } finally {
        setLoading(false);
      }
    }
    loadReports();
  }, [lang]);

  if (loading) {
    return (
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-display font-bold">{t('admin.sidebar.reports')}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-[400px] bg-black/5 animate-pulse rounded-2xl"></div>
          <div className="h-[400px] bg-black/5 animate-pulse rounded-2xl"></div>
        </div>
      </div>
    );
  }

  const pieData = newVsReturning ? [
    { name: t('reports_analytics.new'), value: newVsReturning.newCustomersCount },
    { name: t('reports_analytics.returning'), value: newVsReturning.returningCustomersCount }
  ] : [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-display font-bold text-[color:var(--primary)] mb-2">{t('reports_analytics.title')}</h1>
        <p className="text-[color:var(--text-muted)]">{t('reports_analytics.subtitle')}</p>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)]">
          <p className="text-sm text-[color:var(--text-muted)] font-medium">{t('reports_analytics.totalRevenue')}</p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            €{dailySales.reduce((sum, d) => sum + (Number(d.totalRevenue) || 0), 0).toFixed(2)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)]">
          <p className="text-sm text-[color:var(--text-muted)] font-medium">{t('reports_analytics.totalOrders')}</p>
          <p className="text-3xl font-bold text-[color:var(--primary)] mt-2">
            {dailySales.reduce((sum, d) => sum + (Number(d.orderCount) || 0), 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)]">
          <p className="text-sm text-[color:var(--text-muted)] font-medium">{t('reports_analytics.newCustomers')} (30d)</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {newVsReturning?.newCustomersCount || 0}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Sales Chart */}
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)]">
          <h2 className="text-xl font-bold mb-6">{t('reports_analytics.dailySales')}</h2>
          <div className="h-[300px]" style={{ minWidth: 0, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailySales}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E8DCC8" />
                <XAxis dataKey="date" tick={{fontSize: 12}} stroke="#9ca3af" />
                <YAxis tick={{fontSize: 12}} stroke="#9ca3af" tickFormatter={(val) => `€${val}`} />
                <RechartsTooltip formatter={(value: any) => `€${Number(value).toFixed(2)}`} />
                <Line type="monotone" dataKey="totalRevenue" stroke="var(--primary)" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)]">
          <h2 className="text-xl font-bold mb-6">{t('reports_analytics.topItems')}</h2>
          <div className="h-[300px]" style={{ minWidth: 0, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topItems} layout="vertical" margin={{ left: 50 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E8DCC8" />
                <XAxis type="number" stroke="#9ca3af" />
                <YAxis type="category" dataKey="itemName" stroke="#9ca3af" tick={{fontSize: 12}} />
                <RechartsTooltip />
                <Bar dataKey="quantitySold" fill="#FF8042" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Order Types */}
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)] flex flex-col">
          <h2 className="text-xl font-bold mb-6">{t('reports_analytics.salesDistribution')}</h2>
          <div className="h-[300px] flex-1" style={{ minWidth: 0, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="revenue"
                  nameKey="orderType"
                >
                  {orderTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value: any) => `€${Number(value).toFixed(2)}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* New vs Returning Customers */}
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)] flex flex-col">
          <h2 className="text-xl font-bold mb-6">{t('reports_analytics.customerAnalytics')}</h2>
          <div className="h-[300px] flex-1" style={{ minWidth: 0, minHeight: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  nameKey="name"
                  label
                >
                  <Cell fill="#0088FE" />
                  <Cell fill="#00C49F" />
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top LTV Customers List */}
        <div className="bg-white p-6 rounded-2xl border shadow-soft border-[color:var(--border)] lg:col-span-2">
          <h2 className="text-xl font-bold mb-6">{t('reports_analytics.customerLtv')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[color:var(--border)] text-sm text-[color:var(--text-muted)]">
                  <th className="py-3 px-4 font-medium">{t('reports_analytics.customer')}</th>
                  <th className="py-3 px-4 font-medium">{t('reservations_table.phone')}</th>
                  <th className="py-3 px-4 font-medium">{t('reports_analytics.orders')}</th>
                  <th className="py-3 px-4 font-medium text-right">{t('reports_analytics.ltv')}</th>
                </tr>
              </thead>
              <tbody>
                {topLtv.map((c, i) => (
                  <tr key={c.customerId} className="border-b last:border-0 border-[color:var(--border)]">
                    <td className="py-4 px-4 font-medium">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 text-sm font-bold text-[color:var(--primary)]">
                          {i + 1}
                        </span>
                        {c.customerName}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[color:var(--text-muted)]">{c.phoneNumber}</td>
                    <td className="py-4 px-4">{c.totalOrders}</td>
                    <td className="py-4 px-4 text-right font-bold text-green-600">€{Number(c.lifetimeValue || 0).toFixed(2)}</td>
                  </tr>
                ))}
                {topLtv.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-[color:var(--text-muted)]">-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
