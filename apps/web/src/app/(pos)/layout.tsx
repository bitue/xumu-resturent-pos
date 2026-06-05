export default function PosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[color:var(--bg-alt)]">
      <header className="flex-none h-14 bg-[color:var(--cacao-900)] text-white px-4 flex items-center justify-between shadow-soft z-10">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-lg tracking-wide">XUMA POS</span>
          <div className="h-5 w-px bg-white/20" />
          <span className="text-sm font-medium text-white/80">Kassa 1</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="hover:text-[color:var(--accent)] transition-colors">
            Sluiten
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
