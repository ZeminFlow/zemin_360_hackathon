import { structuredEnergyChallenge } from '../data/challenges'
import { startups } from '../data/startups'
import type { ChallengeInput, StructuredChallenge } from '../types/challenge'
import type { Startup } from '../types/startup'

const simulateLatency = <T>(value: T, duration: number): Promise<T> =>
  new Promise((resolve) => {
    window.setTimeout(() => resolve(value), duration)
  })

export function getReadinessScore(input: ChallengeInput): number {
  let score = 64

  if (input.problem.trim().length >= 80) score += 8
  if (input.industry) score += 4
  if (input.companySize) score += 3
  if (input.targetTimeline) score += 3

  return Math.min(score, 82)
}

export async function structureChallenge(
  input: ChallengeInput,
): Promise<StructuredChallenge> {
  const readinessScore = getReadinessScore(input)

  return simulateLatency(
    { ...structuredEnergyChallenge, readinessScore },
    1200,
  )
}

export async function generateMatches(): Promise<Startup[]> {
  return simulateLatency(startups, 900)
}
