import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

const navigation = [
  { label: 'Ana Sayfa', to: '/' },
  { label: 'Keşfet', to: '/discover' },
  { label: 'İhtiyaç Oluştur', to: '/challenge' },
  { label: 'Ağ', to: '/network' },
]

export function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-canvas text-paper">
      <header className="sticky top-0 z-40 border-b border-divider bg-canvas/95 backdrop-blur-md">
        <PageContainer className="grid h-17 grid-cols-[1fr_auto] items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <NavLink
            to="/"
            className="group flex w-fit items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <LogoMark />
            <span className="text-[15px] font-semibold tracking-[-0.02em] text-paper">ZeminFlow</span>
          </NavLink>

          <nav className="hidden h-full items-center gap-8 lg:flex" aria-label="Ana navigasyon">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative flex h-full items-center text-sm transition-colors ${
                    isActive ? 'text-paper' : 'text-muted hover:text-paper'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="absolute inset-x-0 bottom-0 h-px bg-brand-300" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden justify-end lg:flex">
            <Link
              to="/challenge"
              className="inline-flex items-center border border-paper/70 px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-canvas"
            >
              İhtiyaç Oluştur
            </Link>
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center border border-divider text-muted transition-colors hover:border-muted hover:text-paper lg:hidden"
            aria-label={isMenuOpen ? 'Navigasyonu kapat' : 'Navigasyonu aç'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </PageContainer>

        {isMenuOpen && (
          <nav className="border-t border-divider bg-panel px-5 py-2 lg:hidden" aria-label="Mobil navigasyon">
            <div className="mx-auto grid max-w-[1360px]">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-divider px-1 py-4 text-sm ${
                      isActive ? 'text-paper' : 'text-muted'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center gap-3">
                      <span className={`size-1.5 ${isActive ? 'bg-brand-300' : 'bg-divider'}`} />
                      {item.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="mt-14 border-t border-divider">
        <PageContainer className="grid gap-3 py-8 text-xs text-muted sm:grid-cols-2">
          <p>ZeminFlow yarışma demosu · Yalnızca yerel örnek veriler</p>
          <p className="sm:text-right">İhtiyaç → Hazırlık → Eşleşme → PoC → Kanıt → Ağ</p>
        </PageContainer>
      </footer>
    </div>
  )
}

function LogoMark() {
  return (
    <span className="relative block h-6 w-9" aria-hidden="true">
      <span className="absolute left-0 top-1 size-4 border border-paper/70" />
      <span className="absolute left-3.5 top-3 h-px w-3 bg-brand-300" />
      <span className="absolute right-0 top-2 size-3 bg-brand-300" />
    </span>
  )
}
