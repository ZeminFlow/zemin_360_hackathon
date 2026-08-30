import { ArrowRight, Check, LoaderCircle, Minus, Sparkles } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { structureChallenge } from '../services/mockAI'
import type { ChallengeInput, StructuredChallenge } from '../types/challenge'

const exampleProblem =
  "We want to reduce energy consumption across our production facilities, but we don't know which technologies or startups could help us..."

const initialInput: ChallengeInput = {
  problem: exampleProblem,
  industry: 'Manufacturing',
  companySize: 'Enterprise · 1,000+ employees',
  targetTimeline: '8–12 weeks',
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
    <PageContainer className="py-12 sm:py-16">
      <PageHeading
        eyebrow="Challenge Builder"
        title="Start with the problem."
        description="You don't need a perfect brief. ZeminFlow turns a business problem into a collaboration-ready challenge."
      />

      <form onSubmit={handleSubmit} className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
        <label htmlFor="problem" className="text-sm font-semibold text-white">
          What business problem are you trying to solve?
        </label>
        <textarea
          id="problem"
          rows={6}
          value={input.problem}
          onChange={(event) => setInput((current) => ({ ...current, problem: event.target.value }))}
          placeholder={exampleProblem}
          className="mt-3 w-full resize-y rounded-2xl border border-white/10 bg-black/20 p-4 text-base leading-7 text-white outline-none transition-colors placeholder:text-zinc-700 focus:border-brand-400/50"
        />

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <FieldSelect
            id="industry"
            label="Industry"
            value={input.industry}
            options={['Manufacturing', 'Retail', 'Logistics', 'Energy']}
            onChange={(industry) => setInput((current) => ({ ...current, industry }))}
          />
          <FieldSelect
            id="company-size"
            label="Company size"
            value={input.companySize}
            options={['Enterprise · 1,000+ employees', 'Mid-market · 250–999', 'SME · 50–249']}
            onChange={(companySize) => setInput((current) => ({ ...current, companySize }))}
          />
          <FieldSelect
            id="timeline"
            label="Target timeline"
            value={input.targetTimeline}
            options={['8–12 weeks', '3–6 months', '6–12 months']}
            onChange={(targetTimeline) => setInput((current) => ({ ...current, targetTimeline }))}
          />
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-xs leading-5 text-zinc-600">
            Demo mode uses deterministic local logic. No company data leaves this browser.
          </p>
          <button
            type="submit"
            disabled={!input.problem.trim() || isStructuring}
            className="inline-flex min-w-44 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isStructuring ? (
              <>
                <LoaderCircle className="size-4 animate-spin" />
                Structuring challenge…
              </>
            ) : (
              <>
                <Sparkles className="size-4" />
                Structure with AI
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
    <label htmlFor={id} className="grid gap-2 text-xs font-medium text-zinc-500">
      {label} <span className="font-normal text-zinc-700">Optional</span>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-white/10 bg-zinc-900 px-3 py-3 text-sm text-zinc-300 outline-none focus:border-brand-400/50"
      >
        <option value="">Not specified</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function ChallengeLoadingState() {
  return (
    <div className="mt-6 flex items-center gap-4 rounded-2xl border border-brand-400/15 bg-brand-500/[0.06] p-5 text-sm text-zinc-300">
      <span className="grid size-10 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
        <LoaderCircle className="size-5 animate-spin" />
      </span>
      <div>
        <p className="font-medium text-white">Structuring your challenge</p>
        <p className="mt-1 text-xs text-zinc-500">Identifying categories, measurable goals, and POC readiness…</p>
      </div>
    </div>
  )
}

function StructuredResult({ result }: { result: StructuredChallenge }) {
  const detailRows = [
    { label: 'Challenge', value: result.title },
    { label: 'Category', value: result.category },
    { label: 'Current problem', value: result.currentProblem },
    { label: 'Goal', value: result.goal },
    { label: 'Suggested POC', value: result.suggestedPoc },
  ]

  return (
    <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_300px]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
          <Sparkles className="size-3.5" />
          Structured challenge
        </div>
        <dl className="mt-6 divide-y divide-white/8">
          {detailRows.map((row) => (
            <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[140px_1fr] sm:gap-5">
              <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-600">{row.label}</dt>
              <dd className="text-sm leading-6 text-zinc-300">{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-zinc-600">Success metrics</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-3">
            {result.successMetrics.map((metric) => (
              <li key={metric} className="flex gap-2 rounded-xl border border-white/8 bg-black/15 p-3 text-xs leading-5 text-zinc-400">
                <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                {metric}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <aside className="rounded-3xl border border-brand-400/20 bg-brand-500/[0.07] p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-300">Readiness Score</p>
        <div className="mt-4 flex items-end gap-2">
          <strong className="text-6xl font-semibold tracking-[-0.06em] text-white">{result.readinessScore}</strong>
          <span className="pb-2 text-sm text-zinc-500">/ 100</span>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8">
          <div className="h-full rounded-full bg-brand-400" style={{ width: `${result.readinessScore}%` }} />
        </div>
        <p className="mt-6 text-sm font-semibold text-white">What improves this score?</p>
        <ul className="mt-3 space-y-3">
          {result.readinessFactors.map((factor) => (
            <li key={factor.label} className="flex gap-2 text-xs leading-5 text-zinc-400">
              {factor.status === 'positive' ? (
                <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
              ) : (
                <Minus className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
              )}
              {factor.label}
            </li>
          ))}
        </ul>
        <Link
          to="/matches"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
        >
          Find Matching Startups
          <ArrowRight className="size-4" />
        </Link>
      </aside>
    </section>
  )
}
