import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Startup } from '../types/startup'
import { ScoreBreakdown } from './ScoreBreakdown'

export function MatchCard({ startup, rank }: { startup: Startup; rank: number }) {
  return (
    <article className="grid gap-8 border-t border-divider py-9 lg:grid-cols-12">
      <div className="lg:col-span-1">
        <span className="font-mono text-sm text-muted">0{rank}</span>
      </div>

      <div className="lg:col-span-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-paper">{startup.name}</h2>
            <p className="mt-2 text-sm text-brand-300">{startup.category}</p>
          </div>
          <div className="flex items-baseline gap-2 sm:text-right">
            <strong className="font-mono text-4xl font-semibold tracking-[-0.05em] text-paper">%{startup.matchScore}</strong>
            <span className="text-xs text-muted">Uyum</span>
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-divider pt-5 sm:grid-cols-[150px_1fr]">
          <p className="text-sm font-medium text-paper">Neden eşleşti?</p>
          <p className="text-sm leading-7 text-muted">{startup.matchExplanation}</p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-[150px_1fr]">
          <p className="text-sm font-medium text-paper">Kanıt</p>
          <ul className="grid gap-x-5 gap-y-2 sm:grid-cols-2">
            {startup.evidence.map((item) => (
              <li key={item} className="flex gap-2 text-xs leading-5 text-muted">
                <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-divider pt-4 text-xs text-muted">
          {startup.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-divider pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <ScoreBreakdown breakdown={startup.matchBreakdown} />
        <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link
            to={`/profile/${startup.id}`}
            className="inline-flex flex-1 items-center justify-center border border-divider px-4 py-3 text-sm font-medium text-paper transition-colors hover:border-muted"
          >
            Kanıtları İncele
          </Link>
          <Link
            to="/poc/demo-poc"
            className="inline-flex flex-1 items-center justify-center gap-2 bg-paper px-4 py-3 text-sm font-semibold text-canvas transition-colors hover:bg-brand-300"
          >
            PoC Başlat
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
