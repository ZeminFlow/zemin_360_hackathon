interface DarkVeilFallbackProps {
  className?: string
}

/**
 * Static ambient fallback used until the official React Bits source lands.
 * No animation is fabricated here.
 */
export function DarkVeilFallback({ className = '' }: DarkVeilFallbackProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -left-[18%] top-[-34%] h-[78%] w-[72%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),rgba(124,58,237,0.025)_45%,transparent_70%)] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.018)_48%,transparent_70%)]" />
    </div>
  )
}
