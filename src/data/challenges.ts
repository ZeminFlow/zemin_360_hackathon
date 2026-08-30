import type { Challenge, StructuredChallenge } from '../types/challenge'

export const structuredEnergyChallenge: StructuredChallenge = {
  title: 'Reduce energy consumption in production facilities',
  category: 'Energy Efficiency / Industrial AI',
  currentProblem:
    'Energy consumption varies significantly between facilities and there is limited real-time visibility into inefficiencies.',
  goal: 'Reduce energy consumption by at least 15% without reducing production output.',
  suggestedPoc: 'Deploy monitoring and optimization technology in one facility for 8 weeks.',
  successMetrics: [
    'Energy consumption reduction',
    'Production output maintained',
    'Payback period estimate',
  ],
  readinessScore: 82,
  readinessFactors: [
    { label: 'Historical energy data available', status: 'positive' },
    { label: 'Pilot facility identified', status: 'positive' },
    { label: 'Integration owner not assigned', status: 'negative' },
  ],
}

export const openChallenges: Challenge[] = [
  {
    id: 'retail-sizing-intelligence',
    company: 'RetailCo',
    title: 'Reduce product return rates with better sizing intelligence',
    summary:
      'Looking for a focused pilot that can improve size recommendations across high-return apparel categories.',
    tags: ['Retail', 'Computer Vision', 'Sizing'],
    status: 'OPEN CHALLENGE',
  },
  {
    id: 'cold-chain-visibility',
    company: 'FreshRoute Logistics',
    title: 'Improve real-time visibility across cold-chain operations',
    summary:
      'Seeking monitoring solutions that surface temperature risk before shipments are compromised.',
    tags: ['Logistics', 'IoT', 'Foodtech'],
    status: 'OPEN CHALLENGE',
  },
]
