'use client';

import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api/client';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/lib/i18n/use-translation';

type Permission = {
  id: string;
  name: string;
  description: string;
};

type Role = {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
};

export default function RolesManagementPage() {
  const { t } = useTranslation();
  const [roles, setRoles] = useState<Role[]>([]);
  const [allPermissions, setAllPermissions] = useState<Permission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRoleDesc, setNewRoleDesc] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  async function fetchData() {
    try {
      setIsLoading(true);
      const [rolesRes, permsRes] = await Promise.all([
        apiFetch<Role[]>('/api/roles'),
        apiFetch<Permission[]>('/api/roles/permissions'),
      ]);
      setRoles(rolesRes);
      setAllPermissions(permsRes);
    } catch (error) {
      console.error('Failed to fetch roles/permissions', error);
      alert('Failed to load data');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePermissionToggle = async (roleId: string, currentPermissions: Permission[], permission: Permission) => {
    try {
      const currentIds = currentPermissions.map(p => p.id);
      let newIds = [...currentIds];
      
      if (newIds.includes(permission.id)) {
        newIds = newIds.filter(id => id !== permission.id);
      } else {
        newIds.push(permission.id);
      }
      
      const updatedRole = await apiFetch<Role>(`/api/roles/${roleId}/permissions`, {
        method: 'PUT',
        body: JSON.stringify({ permissionIds: newIds })
      });
      
      setRoles(prev => prev.map(r => r.id === roleId ? updatedRole : r));
    } catch (e) {
      console.error('Failed to update permissions', e);
      alert(t('admin.roles.updateFailed'));
    }
  };

  const handleCreateRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleName.trim()) return;
    
    try {
      setIsCreating(true);
      const newRole = await apiFetch<Role>('/api/roles', {
        method: 'POST',
        body: JSON.stringify({ name: newRoleName.toUpperCase(), description: newRoleDesc })
      });
      setRoles(prev => [...prev, newRole]);
      setNewRoleName('');
      setNewRoleDesc('');
    } catch (e) {
      console.error('Failed to create role', e);
      alert('Failed to create role');
    } finally {
      setIsCreating(false);
    }
  };

  if (isLoading) return <div className="p-8 text-center text-lg">{t('common.loading')}</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-display font-bold text-[color:var(--delft-900)]">
          {t('admin.roles.title')}
        </h1>
        <p className="text-[color:var(--text-muted)]">
          {t('admin.roles.description')}
        </p>
      </div>

      <form onSubmit={handleCreateRole} className="flex gap-4 items-end bg-white p-4 rounded-xl border border-[color:var(--border)] shadow-sm">
        <div className="flex-1">
          <label className="block text-sm font-medium text-[color:var(--ink-soft)] mb-1">Nieuwe Rol Naam</label>
          <input 
            type="text" 
            value={newRoleName}
            onChange={(e) => setNewRoleName(e.target.value)}
            placeholder="Bijv. ASSISTANT_MANAGER"
            className="w-full rounded-md border border-[color:var(--border)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[color:var(--primary)]"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-[color:var(--ink-soft)] mb-1">Beschrijving</label>
          <input 
            type="text" 
            value={newRoleDesc}
            onChange={(e) => setNewRoleDesc(e.target.value)}
            placeholder="Korte beschrijving"
            className="w-full rounded-md border border-[color:var(--border)] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[color:var(--primary)]"
            required
          />
        </div>
        <Button type="submit" disabled={isCreating || !newRoleName}>
          {isCreating ? 'Maken...' : 'Rol Maken'}
        </Button>
      </form>

      <div className="bg-white rounded-xl border border-[color:var(--border)] shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[color:var(--bg-alt)] border-b border-[color:var(--border)] text-sm text-[color:var(--text-muted)]">
              <th className="p-4 font-medium">{t('admin.roles.role')}</th>
              <th className="p-4 font-medium w-2/3">{t('admin.roles.permissions')}</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id} className="border-b border-[color:var(--border)] last:border-0 hover:bg-cacao-50/50">
                <td className="p-4">
                  <div className="font-medium text-[color:var(--ink)]">
                    {role.name}
                  </div>
                  <div className="text-sm text-[color:var(--text-muted)]">
                    {role.description}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {allPermissions.map(perm => {
                      const hasPerm = role.permissions.some(p => p.id === perm.id);
                      return (
                        <button
                          key={perm.id}
                          onClick={() => handlePermissionToggle(role.id, role.permissions, perm)}
                          title={perm.description}
                          className={`px-2 py-1 text-xs font-bold rounded border transition-colors ${
                            hasPerm 
                              ? 'bg-[color:var(--primary)]/10 text-[color:var(--primary)] border-[color:var(--primary)]/30'
                              : 'bg-transparent text-[color:var(--text-muted)] border-[color:var(--border)] hover:border-cacao-400'
                          }`}
                        >
                          {perm.name.replace('_', ' ')}
                        </button>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
            {roles.length === 0 && (
              <tr>
                <td colSpan={2} className="p-8 text-center text-[color:var(--text-muted)]">
                  No roles found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
