export interface MatchBreakdown {
  problemFit: number
  evidence: number
  pocReadiness: number
  industryFit: number
}

export interface PastPoc {
  name: string
  duration: string
  target: string
  result: string
  status: 'VERIFIED' | 'COMPLETED'
}

export interface Startup {
  id: string
  name: string
  initials: string
  category: string
  summary: string
  industries: string[]
  technologies: string[]
  stage: string
  location: string
  matchScore: number
  matchBreakdown: MatchBreakdown
  matchExplanation: string
  evidence: string[]
  tags: string[]
  capabilities: string[]
  verifiedOutcomes: string[]
  pastPocs: PastPoc[]
  accentClass: string
}
