import { ArrowLeft, Check, CheckCircle2, Circle, Clock3, Flag, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { pocs } from '../data/pocs'

export function PocPage() {
  const { id } = useParams()
  const poc = pocs.find((item) => item.id === id)

  if (!poc) {
    return (
      <PageContainer className="py-16">
        <h1 className="text-2xl font-semibold text-white">POC workspace not found</h1>
        <Link to="/network" className="mt-4 inline-flex text-sm font-medium text-brand-300">
          Return to network
        </Link>
      </PageContainer>
    )
  }

  const isVerified = poc.status === 'VERIFIED'

  return (
    <PageContainer className="py-10 sm:py-16">
      <Link to="/matches" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white">
        <ArrowLeft className="size-4" />
        Back to matches
      </Link>

      <header className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{poc.partners}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">{poc.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
            <span className={`rounded-full border px-2.5 py-1 font-bold tracking-[0.12em] ${isVerified ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300' : 'border-sky-400/20 bg-sky-400/10 text-sky-300'}`}>
              {poc.status}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock3 className="size-3.5" />
              {poc.duration}
            </span>
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs text-zinc-500">
          POC workspace · Updated today
        </div>
      </header>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="font-semibold text-white">POC timeline</h2>
          <span className="text-xs text-zinc-600">{poc.milestones.filter((item) => item.status === 'completed').length} of {poc.milestones.length} milestones complete</span>
        </div>
        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-[720px] items-start">
            {poc.milestones.map((milestone, index) => {
              const isCompleted = milestone.status === 'completed'
              const isCurrent = milestone.status === 'current'
              return (
                <div key={milestone.label} className="flex flex-1 items-start">
                  <div className="w-full">
                    <div className="flex items-center">
                      <span className={`grid size-8 shrink-0 place-items-center rounded-full border ${isCompleted ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300' : isCurrent ? 'border-brand-400 bg-brand-500/15 text-brand-300' : 'border-white/10 bg-zinc-900 text-zinc-700'}`}>
                        {isCompleted ? <Check className="size-4" /> : isCurrent ? <Circle className="size-3 fill-current" /> : <Circle className="size-3" />}
                      </span>
                      {index < poc.milestones.length - 1 && (
                        <span className={`h-px flex-1 ${isCompleted ? 'bg-emerald-400/30' : 'bg-white/8'}`} />
                      )}
                    </div>
                    <p className={`mt-3 pr-3 text-xs font-medium ${isCurrent ? 'text-brand-300' : isCompleted ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {milestone.label}
                    </p>
                    {isCurrent && <p className="mt-1 text-[10px] font-bold tracking-[0.13em] text-brand-500">CURRENT</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-white">Live KPIs</h2>
          <span className="text-xs text-zinc-600">Measured against agreed criteria</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {poc.kpis.map((kpi) => (
            <article key={kpi.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.13em] text-zinc-600">{kpi.label}</p>
              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-700">Current</p>
                  <strong className="mt-1 block text-2xl font-semibold text-white">{kpi.current}</strong>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-700">Target</p>
                  <p className="mt-1 text-xs text-zinc-400">{kpi.target}</p>
                </div>
              </div>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/8">
                <div className={`h-full rounded-full ${kpi.progress === 100 ? 'bg-emerald-400' : 'bg-brand-400'}`} style={{ width: `${kpi.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-3xl border border-brand-400/20 bg-brand-500/[0.06] p-6">
          <span className="grid size-10 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
            {isVerified ? <ShieldCheck className="size-5" /> : <Flag className="size-5" />}
          </span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-300">
            {isVerified ? 'Verified outcome' : 'Next milestone'}
          </p>
          <h2 className="mt-2 text-xl font-semibold leading-7 text-white">{poc.nextMilestone}</h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {isVerified ? 'The evidence package is complete and reusable across the network.' : 'Due in 6 days · Enerwise Deployment Lead'}
          </p>
        </aside>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="font-semibold text-white">POC Agreement</h2>
              <p className="mt-1 text-xs text-zinc-600">Shared operating brief · Mock document</p>
            </div>
            <CheckCircle2 className="size-5 text-emerald-400" />
          </div>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {poc.agreement.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/8 bg-black/15 p-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.13em] text-zinc-700">{item.label}</dt>
                <dd className="mt-2 text-sm leading-6 text-zinc-400">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageContainer>
  )
}
