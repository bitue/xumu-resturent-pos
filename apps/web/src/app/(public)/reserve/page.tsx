export default function ReservePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-display text-[color:var(--primary)] mb-8 text-center">Reserveren</h1>
      <div className="max-w-xl mx-auto p-8 bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl shadow-soft text-center">
        <p className="text-[color:var(--text-muted)] mb-6">
          Online reserveren is binnenkort beschikbaar. Bel ons gerust voor een tafel.
        </p>
        <p className="font-medium text-[color:var(--ink)]">+31 (0)113 123 456</p>
      </div>
    </div>
  );
}
