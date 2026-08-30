import type { MatchBreakdown } from '../types/startup'

interface ScoreBreakdownProps {
  breakdown: MatchBreakdown
}

export function ScoreBreakdown({ breakdown }: ScoreBreakdownProps) {
  const scores = [
    { label: 'Problem Fit', value: breakdown.problemFit },
    { label: 'Evidence', value: breakdown.evidence },
    { label: 'POC Readiness', value: breakdown.pocReadiness },
    { label: 'Industry Fit', value: breakdown.industryFit },
  ]

  return (
    <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-600">Score breakdown</p>
        <p className="text-[10px] text-zinc-700">Explainable match</p>
      </div>
      <div className="space-y-3">
        {scores.map((score) => (
          <div key={score.label} className="grid grid-cols-[90px_1fr_28px] items-center gap-3">
            <span className="text-[11px] text-zinc-500">{score.label}</span>
            <span className="h-1 overflow-hidden rounded-full bg-white/8">
              <span className="block h-full rounded-full bg-brand-400" style={{ width: `${score.value}%` }} />
            </span>
            <strong className="text-right text-xs font-semibold text-zinc-300">{score.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
