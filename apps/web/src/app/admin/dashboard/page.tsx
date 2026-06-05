'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ma', revenue: 4000 },
  { name: 'Di', revenue: 3000 },
  { name: 'Wo', revenue: 2000 },
  { name: 'Do', revenue: 2780 },
  { name: 'Vr', revenue: 6890 },
  { name: 'Za', revenue: 8390 },
  { name: 'Zo', revenue: 7490 },
];

export default function AdminDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">Dashboard</h1>
        <div className="px-4 py-2 bg-white border border-[color:var(--border)] rounded-md shadow-sm text-sm font-medium text-[color:var(--ink-soft)]">
          Deze week
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Omzet</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">€ 34.550</p>
          <p className="text-sm text-[color:var(--success)] mt-2 font-medium">+12% vs vorige week</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Bestellingen</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">482</p>
          <p className="text-sm text-[color:var(--success)] mt-2 font-medium">+5% vs vorige week</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Gemiddelde Besteding</p>
          <p className="text-3xl font-display font-bold text-[color:var(--ink)]">€ 71,68</p>
          <p className="text-sm text-[color:var(--success)] mt-2 font-medium">+2% vs vorige week</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <p className="text-sm font-medium text-[color:var(--text-muted)] mb-1">Top Gerecht</p>
          <p className="text-2xl font-display font-bold text-[color:var(--ink)]">Zeeuwse Oesters</p>
          <p className="text-sm text-[color:var(--text-muted)] mt-2">142x besteld</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-[color:var(--border)] shadow-sm">
          <h2 className="text-lg font-bold text-[color:var(--ink)] mb-6">Omzet (Laatste 7 dagen)</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
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
            <span className="text-5xl font-display font-bold text-[color:var(--ink)]">8</span>
            <span className="text-[color:var(--text-muted)]">Actieve Bonnen</span>
            
            <div className="w-full flex gap-2 mt-6">
              <div className="flex-1 bg-[color:var(--bg-alt)] p-3 rounded-lg border border-[color:var(--border)]">
                <span className="block text-2xl font-bold text-[color:var(--primary)]">3</span>
                <span className="text-xs text-[color:var(--text-muted)] uppercase tracking-wider">Pending</span>
              </div>
              <div className="flex-1 bg-[color:var(--bg-alt)] p-3 rounded-lg border border-[color:var(--border)]">
                <span className="block text-2xl font-bold text-[color:var(--success)]">5</span>
                <span className="text-xs text-[color:var(--text-muted)] uppercase tracking-wider">Cooking</span>
              </div>
            </div>
            
            <a href="/kds" className="mt-8 text-[color:var(--primary)] text-sm font-medium hover:underline inline-flex items-center gap-1">
              Open KDS Scherm &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
