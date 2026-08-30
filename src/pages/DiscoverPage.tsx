import { ArrowUpRight, Search } from 'lucide-react'
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
  { id: 'startups', label: 'Girişimler' },
  { id: 'challenges', label: 'Açık İhtiyaçlar' },
  { id: 'pocs', label: 'Doğrulanmış PoC’ler' },
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

  const isEmpty =
    (activeTab === 'startups' && filteredStartups.length === 0) ||
    (activeTab === 'challenges' && filteredChallenges.length === 0) ||
    (activeTab === 'pocs' && verifiedPocs.length === 0)

  return (
    <PageContainer className="py-12 sm:py-16 lg:py-20">
      <PageHeading
        eyebrow="KEŞFET"
        title="İş birliği ekosistemini keşfedin."
        description="Girişimleri, açık ihtiyaçları ve doğrulanmış PoC sonuçlarını tek bir yerde keşfedin."
      />

      <label className="mt-12 flex items-center gap-4 border-y border-divider py-4 focus-within:border-brand-300">
        <Search className="size-4 text-muted" />
        <span className="sr-only">İş birliği ekosisteminde ara</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Girişim, teknoloji, sektör veya ihtiyaç ara"
          className="w-full bg-transparent text-base text-paper outline-none placeholder:text-muted/60"
        />
        <span className="hidden font-mono text-[10px] text-muted sm:block">ARAMA</span>
      </label>

      <div className="mt-7 flex gap-8 overflow-x-auto border-b border-divider" role="tablist" aria-label="Keşif kategorileri">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative shrink-0 pb-4 text-sm transition-colors ${activeTab === tab.id ? 'text-paper' : 'text-muted hover:text-paper'}`}
          >
            {tab.label}
            {activeTab === tab.id && <span className="absolute inset-x-0 bottom-0 h-px bg-brand-300" />}
          </button>
        ))}
      </div>

      <div className="mt-7" role="tabpanel">
        {activeTab === 'startups' && filteredStartups.length > 0 && (
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 lg:border-r lg:border-divider">
              <StartupCard startup={filteredStartups[0]} index={0} featured />
            </div>
            <div className="lg:col-span-5 lg:pl-10">
              {filteredStartups.slice(1).map((startup, index) => (
                <StartupCard key={startup.id} startup={startup} index={index + 1} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div>
            {filteredChallenges.map((challenge, index) => (
              <article key={challenge.id} className="grid gap-6 border-b border-divider py-8 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  <p className="mt-3 text-xs text-amber-300">AÇIK İHTİYAÇ</p>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-sm text-muted">{challenge.company}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-paper">{challenge.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{challenge.summary}</p>
                  <p className="mt-5 text-xs text-paper">{challenge.tags.join(' / ')}</p>
                </div>
                <div className="flex items-end lg:col-span-3 lg:justify-end">
                  <Link to="/challenge" className="inline-flex items-center gap-2 border-b border-divider pb-2 text-sm text-paper hover:border-paper">
                    İhtiyacı incele
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === 'pocs' && (
          <div>
            {verifiedPocs.map((poc, index) => (
              <article key={poc.id} className="grid gap-7 border-b border-divider py-9 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <span className="font-mono text-xs text-muted">0{index + 1}</span>
                  <p className="mt-3 text-xs text-emerald-300">DOĞRULANMIŞ PoC</p>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm text-muted">{poc.partners}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-paper">{poc.title}</h3>
                  <p className="mt-4 text-xs text-muted">{poc.duration}</p>
                </div>
                <div className="grid grid-cols-3 gap-5 border-l border-divider pl-6 lg:col-span-4">
                  {poc.kpis.map((kpi) => (
                    <div key={kpi.label}>
                      <strong className="font-mono text-lg text-paper">{kpi.current}</strong>
                      <p className="mt-2 text-xs leading-5 text-muted">{kpi.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end justify-end lg:col-span-1">
                  <Link to={`/poc/${poc.id}`} aria-label="PoC kanıtını incele" className="text-muted hover:text-paper">
                    <ArrowUpRight className="size-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {isEmpty && (
          <div className="border-y border-divider py-14 text-center text-sm text-muted">
            Bu aramayla eşleşen ekosistem kaydı bulunamadı.
          </div>
        )}
      </div>
    </PageContainer>
  )
}
