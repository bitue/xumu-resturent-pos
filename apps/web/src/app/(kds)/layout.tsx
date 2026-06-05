export default function KdsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[color:var(--bg-alt)] dark text-[color:var(--cream)]">
      <header className="flex-none h-16 bg-[#1a1511] px-6 flex items-center justify-between shadow-soft z-10 border-b border-[#2d251f]">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-2xl text-[color:var(--primary)] tracking-wide">XUMA KDS</span>
          <div className="h-6 w-px bg-[color:var(--border)]" />
          <span className="font-medium text-lg">Keuken</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-[color:var(--willow-500)]/20 text-[color:var(--willow-500)] rounded-full text-sm font-medium border border-[color:var(--willow-500)]/30">
            <span className="w-2 h-2 rounded-full bg-[color:var(--willow-500)] animate-pulse" />
            Live
          </div>
          <button className="text-[color:var(--ink-soft)] hover:text-white transition-colors">
            Afsluiten
          </button>
        </div>
      </header>
      <main className="flex-1 overflow-hidden p-6 bg-[#0f0c0a]">
        {children}
      </main>
    </div>
  );
}
