import { ArrowUpRight, Building2, Search, ShieldCheck, Target } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { StartupCard } from '../components/StartupCard'
import { openChallenges } from '../data/challenges'
import { pocs } from '../data/pocs'
import { startups } from '../data/startups'

type DiscoverTab = 'startups' | 'challenges' | 'pocs'

const tabs: { id: DiscoverTab; label: string }[] = [
  { id: 'startups', label: 'Startups' },
  { id: 'challenges', label: 'Open Challenges' },
  { id: 'pocs', label: 'Verified POCs' },
]

export function DiscoverPage() {
  const [activeTab, setActiveTab] = useState<DiscoverTab>('startups')
  const [query, setQuery] = useState('')
  const normalizedQuery = query.trim().toLowerCase()

  const filteredStartups = useMemo(
    () =>
      startups.filter((startup) =>
        [startup.name, startup.category, ...startup.industries, ...startup.technologies, ...startup.tags]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery),
      ),
    [normalizedQuery],
  )

  const filteredChallenges = openChallenges.filter((challenge) =>
    [challenge.company, challenge.title, challenge.summary, ...challenge.tags]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery),
  )

  const verifiedPocs = pocs.filter(
    (poc) =>
      poc.status === 'VERIFIED' &&
      [poc.partners, poc.title, ...poc.kpis.map((kpi) => kpi.label)]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
  )

  return (
    <PageContainer className="py-12 sm:py-16">
      <PageHeading
        eyebrow="Discover"
        title="Explore the collaboration ecosystem."
        description="Find startup capabilities, open business challenges, and verified POC evidence in one searchable surface."
      />

      <label className="mt-9 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3.5 focus-within:border-brand-400/50">
        <Search className="size-4 text-zinc-500" />
        <span className="sr-only">Search the collaboration ecosystem</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search startups, technologies, industries or challenges"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
        />
      </label>

      <div className="mt-6 flex gap-1 overflow-x-auto border-b border-white/8" role="tablist" aria-label="Discover categories">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? 'border-brand-400 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6" role="tabpanel">
        {activeTab === 'startups' && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredChallenges.map((challenge) => (
              <article key={challenge.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-[10px] font-bold tracking-[0.12em] text-amber-300">
                    <Target className="size-3" />
                    {challenge.status}
                  </span>
                  <Building2 className="size-4 text-zinc-700" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.13em] text-zinc-600">{challenge.company}</p>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-white">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{challenge.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {challenge.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-white/8 bg-black/20 px-2 py-1 text-xs text-zinc-500">{tag}</span>
                  ))}
                </div>
                <Link to="/challenge" className="mt-6 flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white">
                  Explore challenge
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'pocs' && (
          <div className="grid gap-4 md:grid-cols-2">
            {verifiedPocs.map((poc) => (
              <article key={poc.id} className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.035] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.13em] text-emerald-300">
                      <ShieldCheck className="size-3.5" />
                      VERIFIED POC
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.13em] text-zinc-600">{poc.partners}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{poc.title}</h3>
                  </div>
                  <span className="text-xs text-zinc-600">{poc.duration}</span>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {poc.kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-xl border border-white/8 bg-black/15 p-3">
                      <strong className="text-sm text-emerald-300">{kpi.current}</strong>
                      <p className="mt-1 text-[10px] leading-4 text-zinc-600">{kpi.label}</p>
                    </div>
                  ))}
                </div>
                <Link to={`/poc/${poc.id}`} className="mt-6 flex items-center gap-1.5 text-sm font-medium text-zinc-300 hover:text-white">
                  View evidence
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        )}

        {((activeTab === 'startups' && filteredStartups.length === 0) ||
          (activeTab === 'challenges' && filteredChallenges.length === 0) ||
          (activeTab === 'pocs' && verifiedPocs.length === 0)) && (
          <div className="rounded-2xl border border-white/8 p-8 text-center text-sm text-zinc-600">
            No ecosystem records match this search.
          </div>
        )}
      </div>
    </PageContainer>
  )
}
