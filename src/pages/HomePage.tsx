import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  FileInput,
  FlaskConical,
  Network,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { FeedCard } from '../components/FeedCard'
import { PageContainer } from '../components/PageContainer'
import { feedItems } from '../data/feed'

const flowSteps = [
  { label: 'Need', detail: 'Energy inefficiency', icon: FileInput },
  { label: '82% Ready', detail: 'Challenge structured', icon: ShieldCheck },
  { label: '3 Matches', detail: 'Evidence ranked', icon: SearchCheck },
  { label: 'POC', detail: '8 week pilot', icon: FlaskConical },
  { label: 'Verified', detail: 'Outcome published', icon: CheckCircle2 },
]

export function HomePage() {
  return (
    <PageContainer className="py-14 sm:py-20">
      <section className="grid items-center gap-12 border-b border-white/8 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-500/10 px-3 py-1.5 text-xs font-semibold tracking-[0.13em] text-brand-300">
            FROM NEED TO VERIFIED COLLABORATION
          </div>
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Turn business problems into{' '}
            <span className="text-brand-300">proven collaborations.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Structure your challenge, discover the right startups, and run measurable POCs — all in one flow.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/challenge"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Start a Challenge
              <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/network"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-400"
            >
              <Network className="size-4" />
              Explore Network
            </Link>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/8 pb-4">
            <div>
              <p className="text-sm font-semibold text-white">Live Flow</p>
              <p className="mt-1 text-xs text-zinc-600">Atlas Manufacturing</p>
            </div>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Active
            </span>
          </div>

          <div className="mt-4">
            {flowSteps.map(({ label, detail, icon: Icon }, index) => (
              <div key={label}>
                <div className="flex items-center gap-4 rounded-xl border border-white/8 bg-black/15 px-4 py-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-500/12 text-brand-300">
                    <Icon className="size-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-0.5 text-xs text-zinc-600">{detail}</p>
                  </div>
                  {index < 3 && <span className="size-1.5 rounded-full bg-emerald-400" />}
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="flex h-5 items-center pl-7 text-zinc-700">
                    <ArrowDown className="size-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="pt-14 sm:pt-16">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Collaboration activity</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">What the ecosystem is proving</h2>
          </div>
          <Link to="/network" className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white">
            Explore the network <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {feedItems.map((item) => (
            <FeedCard key={item.id} item={item} compact />
          ))}
        </div>
      </section>
    </PageContainer>
  )
}
