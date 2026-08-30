import { ArrowUpRight, MapPin, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Startup } from '../types/startup'

export function StartupCard({ startup }: { startup: Startup }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className={`grid size-11 place-items-center rounded-xl bg-gradient-to-br ${startup.accentClass} text-xs font-bold text-white`}>
            {startup.initials}
          </span>
          <div>
            <h3 className="font-semibold text-white">{startup.name}</h3>
            <p className="mt-0.5 text-xs text-brand-300">{startup.category}</p>
          </div>
        </div>
        <ShieldCheck className="size-4 text-emerald-400" aria-label="Evidence verified" />
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-500">{startup.summary}</p>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-600">
        <MapPin className="size-3.5" />
        {startup.location} · {startup.stage}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {startup.tags.map((tag) => (
          <span key={tag} className="rounded-md border border-white/8 bg-black/20 px-2 py-1 text-xs text-zinc-500">
            {tag}
          </span>
        ))}
      </div>

      <Link to={`/profile/${startup.id}`} className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-zinc-300 hover:text-white">
        View startup
        <ArrowUpRight className="size-4" />
      </Link>
    </article>
  )
}
