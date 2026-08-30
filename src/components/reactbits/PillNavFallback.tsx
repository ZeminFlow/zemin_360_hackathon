import { NavLink } from 'react-router-dom'

export interface PillNavItem {
  label: string
  href: string
}

interface PillNavFallbackProps {
  items: PillNavItem[]
  onNavigate?: () => void
  mobile?: boolean
}

/**
 * Accessible static fallback used until the official React Bits source lands.
 * It is deliberately named as a fallback and does not reproduce React Bits.
 */
export function PillNavFallback({ items, onNavigate, mobile = false }: PillNavFallbackProps) {
  return (
    <nav
      aria-label={mobile ? 'Mobile navigation' : 'Primary navigation'}
      className={
        mobile
          ? 'grid gap-1'
          : 'hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex'
      }
    >
      {items.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === '/'}
          onClick={onNavigate}
          className={({ isActive }) =>
            `${mobile ? 'rounded-lg px-3 py-3' : 'rounded-full px-4 py-2'} relative text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
              isActive
                ? 'bg-white text-zinc-950'
                : 'text-zinc-400 hover:bg-white/[0.055] hover:text-white'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
