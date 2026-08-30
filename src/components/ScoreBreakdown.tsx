import type { MatchBreakdown } from '../types/startup'

interface ScoreBreakdownProps {
  breakdown: MatchBreakdown
}

export function ScoreBreakdown({ breakdown }: ScoreBreakdownProps) {
  const scores = [
    { label: 'Problem Uyumu', value: breakdown.problemFit },
    { label: 'Kanıt', value: breakdown.evidence },
    { label: 'PoC Hazırlığı', value: breakdown.pocReadiness },
    { label: 'Sektör Uyumu', value: breakdown.industryFit },
  ]

  return (
    <div>
      <div className="flex items-center justify-between border-b border-divider pb-3">
        <p className="text-sm font-medium text-paper">Skor bileşenleri</p>
        <p className="text-xs text-muted">Açıklanabilir eşleşme</p>
      </div>
      <div>
        {scores.map((score) => (
          <div key={score.label} className="grid grid-cols-[120px_1fr_34px] items-center gap-4 border-b border-divider py-3">
            <span className="text-xs text-muted">{score.label}</span>
            <span className="h-px bg-divider">
              <span className="block h-px bg-brand-300" style={{ width: `${score.value}%` }} />
            </span>
            <strong className="text-right font-mono text-xs font-medium text-paper">{score.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
