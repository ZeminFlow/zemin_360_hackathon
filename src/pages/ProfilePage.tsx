import { ArrowLeft, Check, FlaskConical, MapPin, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { ScoreBreakdown } from '../components/ScoreBreakdown'
import { startups } from '../data/startups'

export function ProfilePage() {
  const { id } = useParams()
  const startup = startups.find((item) => item.id === id)

  if (!startup) {
    return (
      <PageContainer className="py-16">
        <h1 className="text-2xl font-semibold text-white">Startup not found</h1>
        <Link to="/discover" className="mt-4 inline-flex text-sm font-medium text-brand-300 hover:text-brand-200">
          Return to discover
        </Link>
      </PageContainer>
    )
  }

  return (
    <PageContainer className="py-10 sm:py-16">
      <Link to="/matches" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white">
        <ArrowLeft className="size-4" />
        Back to matches
      </Link>

      <section className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-start">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <span className={`grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${startup.accentClass} text-lg font-bold text-white`}>
              {startup.initials}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold tracking-tight text-white">{startup.name}</h1>
                <ShieldCheck className="size-5 text-emerald-400" aria-label="Evidence verified" />
              </div>
              <p className="mt-2 text-base font-medium text-brand-300">{startup.category}</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">{startup.summary}</p>
              <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-600">
                <MapPin className="size-3.5" />
                {startup.location}
              </p>
            </div>
          </div>
          <Link
            to="/poc/demo-poc"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
          >
            <FlaskConical className="size-4" />
            Start POC
          </Link>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/8 pt-7 sm:grid-cols-3">
          <CompanyDetail label="Industries" values={startup.industries} />
          <CompanyDetail label="Technologies" values={startup.technologies} />
          <CompanyDetail label="Stage" values={[startup.stage]} />
        </div>
      </section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          <ContentSection title="Capabilities">
            <ul className="grid gap-3 sm:grid-cols-2">
              {startup.capabilities.map((capability) => (
                <li key={capability} className="flex gap-2 rounded-xl border border-white/8 bg-black/15 p-3 text-sm text-zinc-400">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-300" />
                  {capability}
                </li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection title="Evidence">
            <ul className="grid gap-3 sm:grid-cols-2">
              {startup.evidence.map((evidence) => (
                <li key={evidence} className="flex gap-2 text-sm text-zinc-400">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  {evidence}
                </li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection title="Past POCs">
            {startup.pastPocs.map((poc) => (
              <div key={poc.name} className="rounded-2xl border border-white/8 bg-black/15 p-5">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-semibold text-white">{poc.name}</h3>
                    <p className="mt-1 text-xs text-zinc-600">Duration: {poc.duration}</p>
                  </div>
                  <span className="w-fit rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-emerald-300">
                    {poc.status}
                  </span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700">Target</p>
                    <p className="mt-1 text-sm text-zinc-400">{poc.target}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700">Result</p>
                    <p className="mt-1 text-sm font-semibold text-emerald-300">{poc.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </ContentSection>
        </div>

        <aside className="space-y-5">
          <ContentSection title="Verified Outcomes">
            <div className="space-y-3">
              {startup.verifiedOutcomes.map((outcome) => (
                <div key={outcome} className="flex gap-2 text-sm leading-6 text-zinc-300">
                  <ShieldCheck className="mt-1 size-4 shrink-0 text-emerald-400" />
                  {outcome}
                </div>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Match Explanation">
            <div className="flex items-end gap-2">
              <strong className="text-4xl font-semibold tracking-tight text-white">{startup.matchScore}%</strong>
              <span className="pb-1 text-xs text-zinc-600">challenge fit</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{startup.matchExplanation}</p>
            <div className="mt-5">
              <ScoreBreakdown breakdown={startup.matchBreakdown} />
            </div>
          </ContentSection>
        </aside>
      </section>
    </PageContainer>
  )
}

function CompanyDetail({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-zinc-700">{label}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">{values.join(' · ')}</p>
    </div>
  )
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
