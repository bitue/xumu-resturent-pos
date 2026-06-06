'use client';

import { ReactNode, useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/use-translation';
import { useAuth } from '@/store/auth-store';
import {
  LayoutDashboard, UtensilsCrossed, Users, BarChart3,
  CalendarCheck, ShoppingBag, ShieldCheck, LogOut
} from 'lucide-react';
import { LanguageToggle } from '@/components/LanguageToggle';

const NAV_ITEMS = [
  { href: '/admin/dashboard',   labelKey: 'admin.sidebar.dashboard',    permission: 'admin.dashboard',    icon: LayoutDashboard },
  { href: '/admin/menu',        labelKey: 'admin.sidebar.menu',          permission: 'admin.menu',         icon: UtensilsCrossed },
  { href: '/admin/staff',       labelKey: 'admin.sidebar.staff',         permission: 'admin.staff',        icon: Users },
  { href: '/admin/reports',     labelKey: 'admin.sidebar.reports',       permission: 'admin.reports',      icon: BarChart3 },
  { href: '/admin/reservations',labelKey: 'admin.sidebar.reservations',  permission: 'admin.reservations', icon: CalendarCheck },
  { href: '/admin/orders',      labelKey: 'admin.sidebar.orders',        permission: 'admin.orders',       icon: ShoppingBag },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();
  const { hasPermission, isSuperAdmin } = useAuth();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const visibleItems = NAV_ITEMS.filter(item => hasPermission(item.permission));
  return (
    <div className="flex h-screen bg-[#FDFBF7]">
      {/* Sidebar */}
      <aside className="w-64 bg-[color:var(--delft-900)] text-white flex flex-col">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <span className="font-display font-bold text-2xl text-[color:var(--primary)]">Xuma</span>
          <LanguageToggle />
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {visibleItems.map(item => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-[color:var(--primary)]/20 text-[color:var(--primary)]'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {t(item.labelKey)}
              </Link>
            );
          })}

          {/* Access Configuration — SUPER_ADMIN only */}
          {isSuperAdmin() && (
            <Link
              href="/admin/roles"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors mt-2 border-t border-white/10 pt-4 ${
                pathname.startsWith('/admin/roles')
                  ? 'bg-[color:var(--primary)]/20 text-[color:var(--primary)]'
                  : 'text-white/50 hover:bg-white/5 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              {t('admin.sidebar.roles')}
            </Link>
          )}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link href="/login" className="flex items-center gap-3 px-4 py-2 text-white/50 hover:text-white text-sm transition-colors">
            <LogOut className="w-4 h-4" />
            {t('admin.sidebar.logout')}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
