import { User } from '../api/types';

export function roleHome(user: User): string {
  if (!user.roles || user.roles.length === 0) return '/';

  // Assuming roles are strings like "ROLE_ADMIN", "ROLE_MANAGER", etc.
  const roles = user.roles.map(r => typeof r === 'string' ? r : (r as any).name);

  if (roles.includes('SUPER_ADMIN') || roles.includes('ADMIN') || roles.includes('ROLE_SUPER_ADMIN') || roles.includes('ROLE_ADMIN')) return '/admin/dashboard';
  if (roles.includes('MANAGER') || roles.includes('CASHIER') || roles.includes('WAITER') || roles.includes('ROLE_MANAGER') || roles.includes('ROLE_CASHIER') || roles.includes('ROLE_WAITER')) return '/pos';
  if (roles.includes('KITCHEN_STAFF') || roles.includes('ROLE_KITCHEN_STAFF')) return '/kds';
  return '/';
}
