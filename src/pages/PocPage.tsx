import { ArrowLeft, Check, Circle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { pocs } from '../data/pocs'

export function PocPage() {
  const { id } = useParams()
  const poc = pocs.find((item) => item.id === id)

  if (!poc) {
    return (
      <PageContainer className="py-16">
        <h1 className="text-3xl font-semibold text-paper">PoC çalışma alanı bulunamadı</h1>
        <Link to="/network" className="mt-5 inline-flex text-sm font-medium text-brand-300">
          Ağa dön
        </Link>
      </PageContainer>
    )
  }

  const isVerified = poc.status === 'VERIFIED'
  const completedCount = poc.milestones.filter((item) => item.status === 'completed').length

  return (
    <PageContainer className="py-12 sm:py-16 lg:py-20">
      <Link to="/matches" className="inline-flex items-center gap-2 text-sm text-muted hover:text-paper">
        <ArrowLeft className="size-4" />
        Eşleşmelere dön
      </Link>

      <header className="mt-10 grid gap-8 border-y border-divider py-9 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="text-sm text-brand-300">{poc.partners}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-[-0.045em] text-paper sm:text-5xl">{poc.title}</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 border-t border-divider pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="font-mono text-[10px] text-muted">DURUM</p>
            <p className={`mt-2 text-sm ${isVerified ? 'text-emerald-300' : 'text-brand-300'}`}>
              {isVerified ? 'DOĞRULANDI' : 'DEVAM EDİYOR'}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] text-muted">SÜRE</p>
            <p className="mt-2 text-sm text-paper">{poc.duration}</p>
          </div>
        </div>
      </header>

      <section className="mt-12">
        <div className="flex items-end justify-between border-b border-divider pb-4">
          <h2 className="text-xl font-semibold text-paper">PoC zaman çizgisi</h2>
          <span className="font-mono text-xs text-muted">{completedCount} / {poc.milestones.length} tamamlandı</span>
        </div>

        <div className="overflow-x-auto py-8">
          <div className="flex min-w-[640px]">
            {poc.milestones.map((milestone, index) => {
              const isCompleted = milestone.status === 'completed'
              const isCurrent = milestone.status === 'current'
              return (
                <div key={milestone.label} className="flex flex-1 items-start">
                  <div className="w-full">
                    <div className="flex items-center">
                      <span className={`grid size-8 shrink-0 place-items-center border bg-canvas ${isCompleted ? 'border-emerald-500/60 text-emerald-300' : isCurrent ? 'border-brand-300 text-brand-300' : 'border-divider text-muted'}`}>
                        {isCompleted ? <Check className="size-4" /> : <Circle className={`size-2.5 ${isCurrent ? 'fill-current' : ''}`} />}
                      </span>
                      {index < poc.milestones.length - 1 && <span className={`h-px flex-1 ${isCompleted ? 'bg-emerald-500/40' : 'bg-divider'}`} />}
                    </div>
                    <p className={`mt-4 pr-5 text-sm ${isCurrent ? 'text-brand-300' : isCompleted ? 'text-paper' : 'text-muted'}`}>
                      {milestone.label}
                    </p>
                    {isCurrent && <p className="mt-2 font-mono text-[10px] text-brand-300">MEVCUT AŞAMA</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div className="flex items-end justify-between border-b border-divider pb-4">
          <h2 className="text-xl font-semibold text-paper">Canlı KPI’lar</h2>
          <span className="text-xs text-muted">Mutabık kalınan kriterlere göre ölçülür</span>
        </div>
        <div className="grid border-b border-divider md:grid-cols-3">
          {poc.kpis.map((kpi, index) => (
            <article key={kpi.label} className={`py-7 ${index > 0 ? 'md:border-l md:border-divider md:pl-7' : ''} ${index < poc.kpis.length - 1 ? 'border-b border-divider md:border-b-0 md:pr-7' : ''}`}>
              <p className="text-sm text-muted">{kpi.label}</p>
              <div className="mt-7 grid grid-cols-2 gap-5">
                <div>
                  <p className="font-mono text-[10px] text-muted">MEVCUT</p>
                  <strong className="mt-2 block font-mono text-3xl font-semibold tracking-[-0.04em] text-paper">{kpi.current}</strong>
                </div>
                <div>
                  <p className="font-mono text-[10px] text-muted">HEDEF</p>
                  <p className="mt-3 text-sm text-paper">{kpi.target}</p>
                </div>
              </div>
              <div className="mt-7 h-px bg-divider">
                <div className={`h-px ${kpi.progress === 100 ? 'bg-emerald-400' : 'bg-brand-300'}`} style={{ width: `${kpi.progress}%` }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-12">
        <aside className="border-t border-brand-400/50 pt-6 lg:col-span-4">
          <p className="font-mono text-[10px] text-brand-300">{isVerified ? 'DOĞRULANMIŞ SONUÇ' : 'SIRADAKİ KİLOMETRE TAŞI'}</p>
          <h2 className="mt-5 text-2xl font-semibold leading-8 tracking-[-0.03em] text-paper">{poc.nextMilestone}</h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            {isVerified ? 'Kanıt paketi tamamlandı ve ağ genelinde yeniden kullanılabilir.' : '6 gün içinde · Enerwise Uygulama Lideri'}
          </p>
        </aside>

        <div className="lg:col-span-8 lg:border-l lg:border-divider lg:pl-10">
          <div className="flex items-end justify-between border-b border-divider pb-4">
            <div>
              <h2 className="text-xl font-semibold text-paper">PoC Mutabakatı</h2>
              <p className="mt-2 text-xs text-muted">Ortak çalışma özeti · Demo belgesi</p>
            </div>
            <span className="font-mono text-xs text-emerald-300">ONAYLI</span>
          </div>
          <dl className="grid sm:grid-cols-2">
            {poc.agreement.map((item, index) => (
              <div key={item.label} className={`border-b border-divider py-5 ${index % 2 === 1 ? 'sm:border-l sm:pl-6' : 'sm:pr-6'}`}>
                <dt className="font-mono text-[10px] text-muted">{item.label.toUpperCase()}</dt>
                <dd className="mt-3 text-sm leading-7 text-paper">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageContainer>
  )
}
