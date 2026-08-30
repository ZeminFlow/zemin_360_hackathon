import { ArrowRight, Check, ExternalLink, FlaskConical } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Startup } from '../types/startup'
import { ScoreBreakdown } from './ScoreBreakdown'

export function MatchCard({ startup, rank }: { startup: Startup; rank: number }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
      <div className="grid gap-7 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div className="flex items-center gap-4">
              <span className={`grid size-12 place-items-center rounded-xl bg-gradient-to-br ${startup.accentClass} text-sm font-bold text-white`}>
                {startup.initials}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-700">#{rank} match</span>
                </div>
                <h2 className="mt-1 text-xl font-semibold text-white">{startup.name}</h2>
                <p className="mt-1 text-sm text-brand-300">{startup.category}</p>
              </div>
            </div>
            <div className="flex items-baseline gap-1 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.07] px-3 py-2">
              <strong className="text-2xl font-semibold tracking-tight text-emerald-300">{startup.matchScore}%</strong>
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-emerald-500">Match</span>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-600">Why this match</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{startup.matchExplanation}</p>
          </div>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-600">Evidence</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {startup.evidence.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-5 text-zinc-500">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {startup.tags.map((tag) => (
              <span key={tag} className="rounded-md border border-white/8 bg-black/20 px-2 py-1 text-xs text-zinc-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <ScoreBreakdown breakdown={startup.matchBreakdown} />
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            <Link
              to={`/profile/${startup.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-white/[0.08]"
            >
              <ExternalLink className="size-4" />
              View Evidence
            </Link>
            <Link
              to="/poc/demo-poc"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              <FlaskConical className="size-4" />
              Start POC
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
