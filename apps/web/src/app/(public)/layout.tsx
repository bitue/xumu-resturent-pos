export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--surface)]/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-display text-2xl text-[color:var(--primary)] font-bold">Xuma</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[color:var(--ink-soft)]">
            <a href="/menu" className="hover:text-[color:var(--primary)] transition-colors">Menu</a>
            <a href="/reserve" className="hover:text-[color:var(--primary)] transition-colors">Reserveren</a>
          </nav>
          <a href="/reserve" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[color:var(--accent)] text-[color:var(--accent-fg)] hover:bg-rose-500 h-9 px-4 py-2">
            Boek een tafel
          </a>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg-alt)] py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[color:var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Xuma Restaurant. Alle rechten voorbehouden.</p>
          <div className="mt-4">
            <a href="/login" className="hover:text-[color:var(--primary)]">Medewerker Login</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
