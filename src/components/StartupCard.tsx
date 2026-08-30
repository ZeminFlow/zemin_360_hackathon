import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Startup } from '../types/startup'

interface StartupCardProps {
  startup: Startup
  index: number
  featured?: boolean
}

export function StartupCard({ startup, index, featured = false }: StartupCardProps) {
  return (
    <article className={`group flex h-full flex-col border-t border-divider py-7 ${featured ? 'lg:pr-10' : ''}`}>
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs text-muted">0{index + 1}</span>
        <span className="text-xs text-emerald-400">KANITLI</span>
      </div>

      <div className={featured ? 'mt-12' : 'mt-8'}>
        <h3 className={`${featured ? 'text-4xl' : 'text-2xl'} font-semibold tracking-[-0.04em] text-paper`}>{startup.name}</h3>
        <p className="mt-2 text-sm text-brand-300">{startup.category}</p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{startup.summary}</p>
      </div>

      <dl className={`mt-8 grid gap-5 border-y border-divider py-5 ${featured ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
        <Detail label="KONUM" value={startup.location} />
        <Detail label="ÖLÇEK" value={startup.stage} />
        <Detail label="KANIT" value={startup.evidence[0]} />
      </dl>

      <div className="mt-6">
        <p className="text-[11px] text-muted">TEKNOLOJİLER</p>
        <p className="mt-2 text-sm leading-6 text-paper">{startup.technologies.join(' / ')}</p>
      </div>

      <Link
        to={`/profile/${startup.id}`}
        className="mt-auto flex items-center justify-between border-b border-divider pt-8 pb-3 text-sm font-medium text-paper transition-colors group-hover:border-paper"
      >
        Girişimi İncele
        <ArrowUpRight className="size-4" />
      </Link>
    </article>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] text-muted">{label}</dt>
      <dd className="mt-2 text-sm text-paper">{value}</dd>
    </div>
  )
}
