'use client';

import { useTranslation } from '@/lib/i18n/use-translation';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const { t, lang, setLang } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--surface)]/80 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-display text-2xl text-[color:var(--primary)] font-bold">Xuma</div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[color:var(--ink-soft)]">
            <a href="/menu" className="hover:text-[color:var(--primary)] transition-colors">{t('nav.menu')}</a>
            <a href="/reserve" className="hover:text-[color:var(--primary)] transition-colors">{t('nav.reserve')}</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex bg-[color:var(--bg-alt)] border border-[color:var(--border)] rounded-md p-1">
              <button 
                onClick={() => setLang('nl')} 
                className={`px-2 py-1 rounded text-xs font-bold transition-all ${lang === 'nl' ? 'bg-[color:var(--primary)] text-white shadow-soft' : 'text-[color:var(--ink-soft)] hover:text-[color:var(--primary)]'}`}
              >
                NL
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-2 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-[color:var(--primary)] text-white shadow-soft' : 'text-[color:var(--ink-soft)] hover:text-[color:var(--primary)]'}`}
              >
                EN
              </button>
            </div>

            <a href="/reserve" className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[color:var(--accent)] text-[color:var(--accent-fg)] hover:bg-rose-500 h-9 px-4 py-2">
              {t('nav.book_table')}
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg-alt)] py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[color:var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Xuma Restaurant. {t('footer.rights')}</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="/login" className="hover:text-[color:var(--primary)]">{t('footer.staff_login')}</a>
            
            {/* Mobile Lang Toggle Backup */}
            <div className="md:hidden flex bg-[color:var(--surface)] border border-[color:var(--border)] rounded-md p-1">
              <button onClick={() => setLang('nl')} className={`px-2 py-1 rounded text-xs font-bold transition-all ${lang === 'nl' ? 'bg-[color:var(--primary)] text-white' : ''}`}>NL</button>
              <button onClick={() => setLang('en')} className={`px-2 py-1 rounded text-xs font-bold transition-all ${lang === 'en' ? 'bg-[color:var(--primary)] text-white' : ''}`}>EN</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
