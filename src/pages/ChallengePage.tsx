import { ArrowRight, Check, LoaderCircle, Minus } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { structureChallenge } from '../services/mockAI'
import type { ChallengeInput, StructuredChallenge } from '../types/challenge'

const exampleProblem =
  'Üretim tesislerimizdeki enerji tüketimini azaltmak istiyoruz ancak hangi teknolojilerin veya girişimlerin bize yardımcı olabileceğini bilmiyoruz.'

const initialInput: ChallengeInput = {
  problem: exampleProblem,
  industry: 'Üretim',
  companySize: 'Kurumsal · 1.000+ çalışan',
  targetTimeline: '8–12 hafta',
}

export function ChallengePage() {
  const [input, setInput] = useState(initialInput)
  const [result, setResult] = useState<StructuredChallenge>()
  const [isStructuring, setIsStructuring] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!input.problem.trim() || isStructuring) return

    setIsStructuring(true)
    setResult(undefined)
    const structured = await structureChallenge(input)
    setResult(structured)
    setIsStructuring(false)
  }

  return (
    <PageContainer className="py-12 sm:py-16 lg:py-20">
      <PageHeading
        eyebrow="İHTİYAÇ OLUŞTURUCU"
        title="Problemi anlatarak başlayın."
        description="Mükemmel bir brief’e ihtiyacınız yok. ZeminFlow, iş probleminizi girişimlerle çalışmaya hazır bir ihtiyaca dönüştürür."
      />

      <form onSubmit={handleSubmit} className="mt-12 border-y border-divider bg-panel px-5 py-7 sm:px-8 sm:py-9">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <label htmlFor="problem" className="text-base font-medium text-paper">
              Hangi iş problemini çözmek istiyorsunuz?
            </label>
            <textarea
              id="problem"
              rows={7}
              value={input.problem}
              onChange={(event) => setInput((current) => ({ ...current, problem: event.target.value }))}
              placeholder={exampleProblem}
              className="mt-4 w-full resize-y border border-divider bg-canvas p-5 text-base leading-7 text-paper outline-none transition-colors placeholder:text-muted/50 focus:border-brand-300"
            />
          </div>

          <div className="grid content-start gap-5 border-t border-divider pt-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <FieldSelect
              id="industry"
              label="Sektör"
              value={input.industry}
              options={['Üretim', 'Perakende', 'Lojistik', 'Enerji']}
              onChange={(industry) => setInput((current) => ({ ...current, industry }))}
            />
            <FieldSelect
              id="company-size"
              label="Şirket büyüklüğü"
              value={input.companySize}
              options={['Kurumsal · 1.000+ çalışan', 'Orta ölçek · 250–999', 'KOBİ · 50–249']}
              onChange={(companySize) => setInput((current) => ({ ...current, companySize }))}
            />
            <FieldSelect
              id="timeline"
              label="Hedef süre"
              value={input.targetTimeline}
              options={['8–12 hafta', '3–6 ay', '6–12 ay']}
              onChange={(targetTimeline) => setInput((current) => ({ ...current, targetTimeline }))}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-divider pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-5 text-muted">
            Demo modunda yerel ve deterministik bir yapılandırma kullanılır. Şirket verileri tarayıcınızdan çıkmaz.
          </p>
          <button
            type="submit"
            disabled={!input.problem.trim() || isStructuring}
            className="inline-flex min-w-52 items-center justify-center gap-3 bg-paper px-5 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-brand-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isStructuring ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Yapılandırılıyor…
              </>
            ) : (
              <>
                Yapay Zekâ ile Yapılandır
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {isStructuring && <ChallengeLoadingState />}
        {result && <StructuredResult result={result} />}
      </div>
    </PageContainer>
  )
}

interface FieldSelectProps {
  id: string
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}

function FieldSelect({ id, label, value, options, onChange }: FieldSelectProps) {
  return (
    <label htmlFor={id} className="grid gap-2 text-xs text-muted">
      <span className="flex justify-between gap-3">
        {label}
        <span className="text-muted/50">İsteğe bağlı</span>
      </span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border-b border-divider bg-transparent py-3 text-sm text-paper outline-none focus:border-brand-300"
      >
        <option value="">Belirtilmedi</option>
        {options.map((option) => (
          <option key={option} className="bg-panel">{option}</option>
        ))}
      </select>
    </label>
  )
}

function ChallengeLoadingState() {
  return (
    <div className="mt-8 flex items-center gap-5 border-y border-brand-400/30 py-6 text-sm text-paper">
      <LoaderCircle className="size-5 shrink-0 animate-spin text-brand-300" />
      <div>
        <p className="font-medium">İhtiyaç yapılandırılıyor</p>
        <p className="mt-1 text-xs text-muted">Kategori, ölçülebilir hedefler ve PoC hazırlığı değerlendiriliyor…</p>
      </div>
    </div>
  )
}

function StructuredResult({ result }: { result: StructuredChallenge }) {
  const detailRows = [
    { label: 'Yapılandırılmış İhtiyaç', value: result.title },
    { label: 'Kategori', value: result.category },
    { label: 'Mevcut Problem', value: result.currentProblem },
    { label: 'Hedef', value: result.goal },
    { label: 'Önerilen PoC', value: result.suggestedPoc },
  ]

  return (
    <section className="mt-12 border-t border-divider pt-8">
      <div className="grid gap-10 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <p className="text-sm font-medium text-paper">Hazırlık Skoru</p>
          <div className="mt-5 flex items-baseline gap-3 border-b border-divider pb-6">
            <strong className="font-mono text-7xl font-semibold tracking-[-0.07em] text-paper">{result.readinessScore}</strong>
            <span className="font-mono text-sm text-muted">/ 100</span>
          </div>
          <p className="mt-7 text-sm font-medium text-paper">Skoru ne iyileştirir?</p>
          <ul className="mt-4 space-y-3">
            {result.readinessFactors.map((factor) => (
              <li key={factor.label} className="flex gap-3 text-sm leading-6 text-muted">
                {factor.status === 'positive' ? (
                  <Check className="mt-1 size-4 shrink-0 text-emerald-400" />
                ) : (
                  <Minus className="mt-1 size-4 shrink-0 text-amber-300" />
                )}
                {factor.label}
              </li>
            ))}
          </ul>
        </aside>

        <div className="border-t border-divider lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-10">
          <dl>
            {detailRows.map((row) => (
              <div key={row.label} className="grid gap-2 border-b border-divider py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                <dt className="text-sm text-muted">{row.label}</dt>
                <dd className="text-sm leading-7 text-paper">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="py-6">
            <p className="text-sm text-muted">Başarı Metrikleri</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {result.successMetrics.map((metric, index) => (
                <li key={metric} className="border-l border-brand-400/40 pl-4 text-sm leading-6 text-paper">
                  <span className="mb-2 block font-mono text-[10px] text-muted">0{index + 1}</span>
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end border-t border-divider pt-6">
            <Link
              to="/matches"
              className="inline-flex items-center gap-3 bg-paper px-5 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-brand-300"
            >
              Eşleşen Girişimleri Bul
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
