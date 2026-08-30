import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import type { ReactNode } from 'react'
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
        <h1 className="text-3xl font-semibold text-paper">Girişim bulunamadı</h1>
        <Link to="/discover" className="mt-5 inline-flex text-sm font-medium text-brand-300">
          Keşfet sayfasına dön
        </Link>
      </PageContainer>
    )
  }

  return (
    <PageContainer className="py-12 sm:py-16 lg:py-20">
      <Link to="/matches" className="inline-flex items-center gap-2 text-sm text-muted hover:text-paper">
        <ArrowLeft className="size-4" />
        Eşleşmelere dön
      </Link>

      <header className="mt-10 grid gap-10 border-y border-divider py-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center border border-divider bg-panel font-mono text-sm text-paper">
              {startup.initials}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-4xl font-semibold tracking-[-0.05em] text-paper sm:text-5xl">{startup.name}</h1>
                <span className="text-xs text-emerald-300">KANITLI</span>
              </div>
              <p className="mt-3 text-base text-brand-300">{startup.category}</p>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-muted">{startup.summary}</p>
        </div>

        <div className="flex flex-col justify-between border-t border-divider pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <dl className="grid grid-cols-2 gap-6">
            <CompanyDetail label="KONUM" values={[startup.location]} />
            <CompanyDetail label="ÖLÇEK" values={[startup.stage]} />
            <CompanyDetail label="SEKTÖRLER" values={startup.industries} />
            <CompanyDetail label="TEKNOLOJİLER" values={startup.technologies} />
          </dl>
          <Link
            to="/poc/demo-poc"
            className="mt-8 inline-flex items-center justify-between bg-paper px-5 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-brand-300"
          >
            PoC Başlat
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-8">
          <ContentSection title="Yetkinlikler" number="01">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {startup.capabilities.map((capability) => (
                <li key={capability} className="flex gap-3 border-b border-divider pb-4 text-sm text-paper">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand-300" />
                  {capability}
                </li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection title="Kanıt" number="02">
            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {startup.evidence.map((evidence) => (
                <li key={evidence} className="border-l border-emerald-500/40 pl-4 text-sm leading-6 text-muted">
                  {evidence}
                </li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection title="Geçmiş PoC’ler" number="03">
            {startup.pastPocs.map((poc) => (
              <article key={poc.name} className="grid gap-7 border-b border-divider pb-7 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold text-paper">{poc.name}</h3>
                  <p className="mt-2 text-sm text-muted">Süre: {poc.duration}</p>
                </div>
                <p className="text-xs text-emerald-300 sm:text-right">
                  {poc.status === 'VERIFIED' ? 'DOĞRULANDI' : 'TAMAMLANDI'}
                </p>
                <div>
                  <p className="font-mono text-[10px] text-muted">HEDEF</p>
                  <p className="mt-2 text-sm text-paper">{poc.target}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted">SONUÇ</p>
                  <p className="mt-2 text-lg font-medium text-emerald-300">{poc.result}</p>
                </div>
              </article>
            ))}
          </ContentSection>
        </div>

        <aside className="space-y-12 lg:col-span-4 lg:border-l lg:border-divider lg:pl-8">
          <ContentSection title="Doğrulanmış Sonuçlar" number="04">
            <div className="space-y-5">
              {startup.verifiedOutcomes.map((outcome) => (
                <p key={outcome} className="border-b border-divider pb-4 text-sm leading-6 text-paper">{outcome}</p>
              ))}
            </div>
          </ContentSection>

          <ContentSection title="Eşleşme Açıklaması" number="05">
            <div className="flex items-baseline gap-3">
              <strong className="font-mono text-5xl font-semibold tracking-[-0.06em] text-paper">%{startup.matchScore}</strong>
              <span className="text-xs text-muted">ihtiyaç uyumu</span>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">{startup.matchExplanation}</p>
            <div className="mt-7">
              <ScoreBreakdown breakdown={startup.matchBreakdown} />
            </div>
          </ContentSection>
        </aside>
      </div>
    </PageContainer>
  )
}

function CompanyDetail({ label, values }: { label: string; values: string[] }) {
  return (
    <div>
      <dt className="font-mono text-[10px] text-muted">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-paper">{values.join(' / ')}</dd>
    </div>
  )
}

function ContentSection({ title, number, children }: { title: string; number: string; children: ReactNode }) {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between border-b border-divider pb-4">
        <h2 className="text-lg font-semibold text-paper">{title}</h2>
        <span className="font-mono text-xs text-muted">{number}</span>
      </div>
      {children}
    </section>
  )
}
