'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { Button } from '@/components/ui/button';
import { Check, X, Shield, ShieldAlert, MoreVertical } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/use-translation';

type User = {
  id: number;
  email: string;
  fullName: string;
  roles: string[];
};

const ALL_ROLES = ['SUPER_ADMIN', 'ADMIN', 'MANAGER', 'CASHIER', 'WAITER', 'KITCHEN_STAFF', 'CUSTOMER'];

export default function AdminStaffPage() {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUsers() {
    try {
      setIsLoading(true);
      const data = await apiFetch<User[]>('/api/admin/users');
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
      alert('Failed to load users');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRoleToggle = async (userId: number, currentRoles: string[], role: string) => {
    try {
      let newRoles = [...currentRoles];
      if (newRoles.includes(role)) {
        newRoles = newRoles.filter(r => r !== role);
      } else {
        newRoles.push(role);
      }
      if (newRoles.length === 0) {
        alert(t('admin.staff.mustHaveRole'));
        return;
      }
      
      await apiFetch(`/api/admin/users/${userId}/roles`, {
        method: 'PATCH',
        body: JSON.stringify({ roles: newRoles })
      });
      
      // Update local state
      setUsers(prev => prev.map(u => u.id === userId ? { ...u, roles: newRoles } : u));
    } catch (e) {
      console.error('Failed to update roles', e);
      alert(t('admin.staff.updateFailed'));
    }
  };

  const handleDeactivate = async (userId: number) => {
    try {
      await apiFetch(`/api/admin/users/${userId}/status`, {
        method: 'PATCH',
        body: JSON.stringify({ enabled: false })
      });
      alert('User deactivated');
    } catch (e) {
      console.error('Failed to deactivate user', e);
      alert('Failed to deactivate user');
    }
  };

  if (isLoading) return <div className="p-8 text-center text-lg">{t('common.loading')}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">{t('admin.staff.title')}</h1>
        <Button variant="primary">{t('admin.staff.addStaff')}</Button>
      </div>

      <div className="bg-white rounded-xl border border-[color:var(--border)] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[color:var(--bg-alt)] border-b border-[color:var(--border)] text-sm text-[color:var(--text-muted)]">
              <th className="p-4 font-medium">{t('admin.staff.name')}</th>
              <th className="p-4 font-medium">{t('admin.staff.email')}</th>
              <th className="p-4 font-medium w-1/2">{t('admin.staff.roles')}</th>
              <th className="p-4 font-medium text-right">{t('admin.staff.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-[color:var(--border)] last:border-0 hover:bg-cacao-50/50">
                <td className="p-4">
                  <div className="font-medium text-[color:var(--ink)] flex items-center gap-2">
                    {user.roles.includes('SUPER_ADMIN') ? <ShieldAlert className="w-4 h-4 text-rose-500" /> : <Shield className="w-4 h-4 text-[color:var(--text-muted)]" />}
                    {user.fullName}
                  </div>
                </td>
                <td className="p-4 text-sm text-[color:var(--text-muted)]">{user.email}</td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {ALL_ROLES.map(role => {
                      const hasRole = user.roles.includes(role);
                      return (
                        <button
                          key={role}
                          onClick={() => handleRoleToggle(user.id, user.roles, role)}
                          className={`px-2 py-1 text-xs font-bold rounded border transition-colors ${
                            hasRole 
                              ? 'bg-[color:var(--primary)]/10 text-[color:var(--primary)] border-[color:var(--primary)]/30'
                              : 'bg-transparent text-[color:var(--text-muted)] border-[color:var(--border)] hover:border-cacao-400'
                          }`}
                        >
                          {role.replace('_', ' ')}
                        </button>
                      );
                    })}
                  </div>
                </td>
                <td className="p-4 text-right">
                  <Button variant="ghost" size="sm" onClick={() => handleDeactivate(user.id)} className="text-[color:var(--error)]">
                    Deactiveren
                  </Button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-[color:var(--text-muted)]">
                  Geen gebruikers gevonden
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
