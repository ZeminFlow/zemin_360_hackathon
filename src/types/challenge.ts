export interface ChallengeInput {
  problem: string
  industry: string
  companySize: string
  targetTimeline: string
}

export interface ReadinessFactor {
  label: string
  status: 'positive' | 'negative'
}

export interface StructuredChallenge {
  title: string
  category: string
  currentProblem: string
  goal: string
  suggestedPoc: string
  successMetrics: string[]
  readinessScore: number
  readinessFactors: ReadinessFactor[]
}

export interface Challenge {
  id: string
  company: string
  title: string
  summary: string
  tags: string[]
  status: 'OPEN CHALLENGE'
}
