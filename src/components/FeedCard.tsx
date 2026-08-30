import { ArrowUpRight, CheckCircle2, CircleDot, Radio } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { FeedItem, FeedPostType } from '../types/feed'

interface FeedCardProps {
  item: FeedItem
  compact?: boolean
}

const typeStyles: Record<FeedPostType, string> = {
  'OPEN CHALLENGE': 'border-amber-400/20 bg-amber-400/10 text-amber-300',
  'POC STARTED': 'border-sky-400/20 bg-sky-400/10 text-sky-300',
  'VERIFIED OUTCOME': 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
}

const typeIcons = {
  'OPEN CHALLENGE': CircleDot,
  'POC STARTED': Radio,
  'VERIFIED OUTCOME': CheckCircle2,
}

export function FeedCard({ item, compact = false }: FeedCardProps) {
  const Icon = typeIcons[item.type]

  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] ${typeStyles[item.type]}`}
        >
          <Icon className="size-3" />
          {item.type}
        </span>
        {item.type === 'VERIFIED OUTCOME' && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
            Verified
          </span>
        )}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-zinc-600">
        {item.organization}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-6 text-white">{item.title}</h3>
      {!compact && <p className="mt-3 text-sm leading-6 text-zinc-500">{item.description}</p>}

      {item.meta && <p className="mt-4 text-sm font-medium text-sky-300">{item.meta}</p>}

      {item.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/8 bg-black/20 px-2 py-1 text-xs text-zinc-500">
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.metrics && (
        <div className="mt-5 grid grid-cols-2 gap-2">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.04] p-3">
              <strong className="text-lg font-semibold text-emerald-300">{metric.value}</strong>
              <p className="mt-1 text-[11px] text-zinc-600">{metric.label}</p>
            </div>
          ))}
        </div>
      )}

      <Link
        to={item.href}
        className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-zinc-400 hover:text-white"
      >
        {item.ctaLabel}
        <ArrowUpRight className="size-4" />
      </Link>
    </article>
  )
}
