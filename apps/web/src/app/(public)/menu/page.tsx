export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-display text-[color:var(--primary)] mb-8 text-center">Ons Menu</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="p-8 bg-[color:var(--surface)] border border-[color:var(--border)] rounded-xl shadow-soft">
          <p className="text-center text-[color:var(--text-muted)] italic">
            Menu wordt momenteel samengesteld door onze chef...
          </p>
        </div>
      </div>
    </div>
  );
}
