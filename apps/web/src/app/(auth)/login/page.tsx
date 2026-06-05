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

const Schema = z.object({
  email: z.string().email('Vul een geldig e-mailadres in'),
  password: z.string().min(1, 'Wachtwoord is verplicht'),
});

type FormValues = z.infer<typeof Schema>;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<FormValues>({
    resolver: zodResolver(Schema),
  });

  async function onSubmit(values: FormValues) {
    try {
      const res = await apiFetch<{ accessToken: string; user: User }>('/api/auth/login', {
        method: 'POST', 
        body: JSON.stringify(values),
      });
      // Assuming backend sets HttpOnly cookie for session, just route
      router.push(roleHome(res.user));
    } catch (error: any) {
      setError('root', { message: error.message || 'Login mislukt. Controleer uw gegevens.' });
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md bg-[color:var(--surface)] p-8 rounded-xl shadow-soft border border-[color:var(--border)]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display text-[color:var(--primary)] mb-2">Xuma</h1>
          <p className="text-[color:var(--text-muted)]">Inloggen voor medewerkers</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="naam@xuma.nl" {...register('email')} />
            {errors.email && <p className="text-sm text-[color:var(--error)]">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Wachtwoord</Label>
            <Input id="password" type="password" {...register('password')} />
            {errors.password && <p className="text-sm text-[color:var(--error)]">{errors.password.message}</p>}
          </div>

          {errors.root && (
            <div className="p-3 bg-[color:var(--error-bg)] text-[color:var(--error)] rounded-md text-sm border border-[#E8DCC8]">
              {errors.root.message}
            </div>
          )}

          <Button type="submit" loading={isSubmitting} className="w-full">
            Inloggen
          </Button>
        </form>
      </div>
    </div>
  );
}
