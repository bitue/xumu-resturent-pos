'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiFetch } from '@/lib/api/client';
import { useRouter } from 'next/navigation';
import { roleHome } from '@/lib/utils/roles';
import type { User } from '@/lib/api/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useTranslation } from '@/lib/i18n/use-translation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useAuth } from '@/store/auth-store';

export default function LoginPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const { setUser } = useAuth();

  const Schema = z.object({
    email: z.string().email(t('auth.login.errors.emailInvalid')),
    password: z.string().min(1, t('auth.login.errors.passwordRequired')),
  });

  type FormValues = z.infer<typeof Schema>;

  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<FormValues>({
    resolver: zodResolver(Schema),
  });

  async function onSubmit(values: FormValues) {
    try {
      await apiFetch<{ accessToken: string }>('/api/auth/login', {
        method: 'POST', 
        body: JSON.stringify(values),
      });
      // Fetch the user profile (includes roles + permissions)
      const user = await apiFetch<User>('/api/auth/me');
      // Store user in global auth state for permission-based UI
      setUser(user as any);
      router.push(roleHome(user));
    } catch (error: any) {
      setError('root', { message: error.message || t('auth.login.errors.loginFailed') });
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <LanguageToggle />
      </div>
      <div className="w-full max-w-md bg-[color:var(--surface)] p-8 rounded-xl shadow-soft border border-[color:var(--border)]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display text-[color:var(--primary)] mb-2">{t('auth.login.title')}</h1>
          <p className="text-[color:var(--text-muted)]">{t('auth.login.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">{t('auth.login.emailLabel')}</Label>
            <Input id="email" type="email" placeholder={t('auth.login.emailPlaceholder')} {...register('email')} />
            {errors.email && <p className="text-sm text-[color:var(--error)]">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t('auth.login.passwordLabel')}</Label>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && <p className="text-sm text-[color:var(--error)]">{errors.password.message}</p>}
          </div>

          {errors.root && (
            <div className="p-3 bg-[color:var(--error-bg)] text-[color:var(--error)] rounded-md text-sm border border-[#E8DCC8]">
              {errors.root.message}
            </div>
          )}

          <Button type="submit" loading={isSubmitting} className="w-full">
            {t('auth.login.submitButton')}
          </Button>
        </form>
      </div>
    </div>
  );
}
