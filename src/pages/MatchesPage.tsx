import { ArrowLeft, LoaderCircle, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MatchCard } from '../components/MatchCard'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { generateMatches } from '../services/mockAI'
import type { Startup } from '../types/startup'

export function MatchesPage() {
  const [matches, setMatches] = useState<Startup[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    generateMatches().then((result) => {
      if (isActive) {
        setMatches(result)
        setIsLoading(false)
      }
    })

    return () => {
      isActive = false
    }
  }, [])

  return (
    <PageContainer className="py-12 sm:py-16">
      <Link to="/challenge" className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white">
        <ArrowLeft className="size-4" />
        Back to challenge
      </Link>
      <PageHeading
        eyebrow="AI Match Results"
        title="Best matches for this challenge"
        description="Ranked by capability, evidence and POC fit. Every recommendation includes the signals behind its score."
      />

      <div className="mt-7 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-zinc-500">Energy Efficiency</span>
        <span className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-zinc-500">Manufacturing</span>
        <span className="rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2 text-xs text-zinc-500">8–12 week POC</span>
        <span className="ml-auto text-xs text-zinc-700">Readiness: 82 / 100</span>
      </div>

      {isLoading ? (
        <div className="mt-8 grid min-h-64 place-items-center rounded-3xl border border-brand-400/15 bg-brand-500/[0.04] text-center">
          <div>
            <LoaderCircle className="mx-auto size-7 animate-spin text-brand-300" />
            <p className="mt-4 text-sm font-medium text-white">Ranking startup evidence</p>
            <p className="mt-1 text-xs text-zinc-600">Comparing capability, proof, industry fit, and POC readiness…</p>
          </div>
        </div>
      ) : (
        <div className="mt-8 space-y-4" aria-live="polite">
          <div className="flex items-center gap-2 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] px-4 py-3 text-xs text-emerald-300">
            <Sparkles className="size-3.5" />
            3 evidence-backed matches generated from your structured challenge.
          </div>
          {matches.map((startup, index) => (
            <MatchCard key={startup.id} startup={startup} rank={index + 1} />
          ))}
        </div>
      )}
    </PageContainer>
  )
}
