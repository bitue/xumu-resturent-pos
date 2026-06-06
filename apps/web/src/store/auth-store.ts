import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = {
  id: number;
  email?: string;
  fullName?: string;
  role?: string;
  roles?: string[];
  permissions?: string[];
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  hasPermission: (permission: string) => boolean;
  isSuperAdmin: () => boolean;
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      hasPermission: (permission: string) => {
        const user = get().user;
        if (!user) return false;
        // SUPER_ADMIN has all permissions
        if (user.roles?.includes('SUPER_ADMIN')) return true;
        return user.permissions?.includes(permission) ?? false;
      },
      isSuperAdmin: () => {
        const user = get().user;
        return user?.roles?.includes('SUPER_ADMIN') ?? false;
      },
    }),
    { name: 'xuma-auth' }
  )
);
