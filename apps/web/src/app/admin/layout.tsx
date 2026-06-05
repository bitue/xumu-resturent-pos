import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-[#FDFBF7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[color:var(--delft-900)] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <span className="font-display font-bold text-2xl text-[color:var(--primary)]">Xuma Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="/admin/dashboard" className="block px-4 py-3 rounded-lg bg-white/10 text-white font-medium">
            Dashboard
          </a>
          <a href="/admin/menu" className="block px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            Menu Beheer
          </a>
          <a href="/admin/staff" className="block px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            Medewerkers
          </a>
          <a href="/admin/reservations" className="block px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            Reserveringen
          </a>
          <a href="/admin/reports" className="block px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            Rapportages
          </a>
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/login" className="block px-4 py-2 text-white/50 hover:text-white text-sm">
            Uitloggen
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
