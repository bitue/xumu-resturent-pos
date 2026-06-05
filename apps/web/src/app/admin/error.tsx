'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Admin Error Boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center">
        <AlertCircle className="w-10 h-10 text-rose-500" />
      </div>
      
      <div className="space-y-2 max-w-md mx-auto">
        <h2 className="text-2xl font-display font-bold text-[color:var(--delft-900)]">
          Er is iets misgegaan
        </h2>
        <p className="text-[color:var(--text-muted)]">
          We konden deze pagina helaas niet laden. Controleer je verbinding en probeer het opnieuw.
        </p>
      </div>

      <div className="flex gap-4">
        <Button variant="secondary" onClick={() => window.history.back()}>
          Ga terug
        </Button>
        <Button variant="primary" onClick={() => reset()}>
          Probeer opnieuw
        </Button>
      </div>
    </div>
  );
}
