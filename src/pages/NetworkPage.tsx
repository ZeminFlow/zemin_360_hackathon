import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { feedItems } from '../data/feed'
import type { FeedItem } from '../types/feed'

const typeLabels = {
  'OPEN CHALLENGE': 'AÇIK İHTİYAÇ',
  'POC STARTED': 'PoC BAŞLADI',
  'VERIFIED OUTCOME': 'DOĞRULANMIŞ SONUÇ',
}

export function NetworkPage() {
  const verified = feedItems.find((item) => item.type === 'VERIFIED OUTCOME')
  const supporting = feedItems.filter((item) => item.type !== 'VERIFIED OUTCOME')

  return (
    <PageContainer className="py-12 sm:py-16 lg:py-20">
      <PageHeading
        eyebrow="İŞ BİRLİĞİ AĞI"
        title="Ekosistemde neler oluyor?"
        description="İhtiyaçlar, PoC’ler ve doğrulanmış sonuçlar ekosistemde yaşayan bir iş birliği hafızası oluşturur."
      />

      <div className="mt-12 border-t border-divider">
        {verified && <VerifiedRecord item={verified} />}
        <div className="lg:ml-[25%]">
          {supporting.map((item, index) => (
            <SupportingRecord key={item.id} item={item} index={index + 2} />
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-5 border-y border-divider py-6 lg:grid-cols-12">
        <p className="font-mono text-xs text-muted lg:col-span-3">AĞ PRENSİBİ / 01</p>
        <p className="max-w-3xl text-sm leading-7 text-muted lg:col-span-9">
          Her doğrulanmış sonuç, benzer bir iş birliğini değerlendiren sonraki kurum için yeniden kullanılabilir kanıta dönüşür.
        </p>
      </div>
    </PageContainer>
  )
}

function VerifiedRecord({ item }: { item: FeedItem }) {
  return (
    <article className="grid gap-8 border-b border-divider py-10 lg:grid-cols-12 lg:py-14">
      <div className="lg:col-span-3">
        <span className="font-mono text-xs text-muted">01</span>
        <p className="mt-4 text-xs font-medium tracking-[0.14em] text-emerald-300">{typeLabels[item.type]}</p>
      </div>

      <div className="lg:col-span-5">
        <p className="text-sm text-muted">{item.organization}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-paper">{item.title}</h2>
        <p className="mt-5 max-w-xl text-sm leading-7 text-muted">{item.description}</p>
        <Link to={item.href} className="mt-8 inline-flex items-center gap-2 border-b border-divider pb-2 text-sm text-paper hover:border-paper">
          {item.ctaLabel}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div className="border-l border-emerald-500/30 pl-7 lg:col-span-4">
        <p className="text-xs text-emerald-300">DOĞRULANDI</p>
        <div className="mt-8 space-y-8">
          {item.metrics?.map((metric) => (
            <div key={metric.label}>
              <strong className="font-mono text-4xl font-semibold tracking-[-0.05em] text-paper">{metric.value}</strong>
              <p className="mt-2 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

function SupportingRecord({ item, index }: { item: FeedItem; index: number }) {
  const isOpen = item.type === 'OPEN CHALLENGE'

  return (
    <article className="grid gap-6 border-b border-divider py-9 lg:grid-cols-9">
      <div className="lg:col-span-2">
        <span className="font-mono text-xs text-muted">0{index}</span>
        <p className={`mt-3 text-xs ${isOpen ? 'text-amber-300' : 'text-brand-300'}`}>{typeLabels[item.type]}</p>
      </div>
      <div className="lg:col-span-5">
        <p className="text-sm text-muted">{item.organization}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-paper">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
        {item.meta && <p className="mt-4 font-mono text-xs text-paper">{item.meta}</p>}
        {item.tags && <p className="mt-4 text-xs text-muted">{item.tags.join(' / ')}</p>}
      </div>
      <div className="flex items-end lg:col-span-2 lg:justify-end">
        <Link to={item.href} className="inline-flex items-center gap-2 border-b border-divider pb-2 text-sm text-paper hover:border-paper">
          {item.ctaLabel}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  )
}
