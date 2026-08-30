import type { Startup } from '../types/startup'

export const startups: Startup[] = [
  {
    id: 'enerwise-ai',
    name: 'Enerwise AI',
    initials: 'EA',
    category: 'Industrial Energy Intelligence',
    summary:
      'AI-powered energy monitoring and optimization for multi-site industrial operations.',
    industries: ['Manufacturing', 'Automotive', 'Industrial'],
    technologies: ['Industrial AI', 'IoT', 'Energy Analytics'],
    stage: 'Scale-up',
    location: 'Istanbul, Türkiye',
    matchScore: 94,
    matchBreakdown: { problemFit: 96, evidence: 92, pocReadiness: 93, industryFit: 95 },
    matchExplanation:
      'Strong fit for industrial energy monitoring and optimization. Previous deployment data aligns closely with your target.',
    evidence: [
      '3 industrial pilots',
      'Average reported energy reduction: 17%',
      'API integration available',
      'TRL 8',
    ],
    tags: ['Industrial AI', 'Energy', 'IoT'],
    capabilities: [
      'Facility-level energy monitoring',
      'Real-time anomaly detection',
      'AI-assisted load optimization',
      'Multi-site performance benchmarking',
    ],
    verifiedOutcomes: [
      '17% average energy reduction',
      '3 completed industrial pilots',
      '2 verified collaborations',
    ],
    pastPocs: [
      {
        name: 'Manufacturing Plant Optimization',
        duration: '8 weeks',
        target: '15% energy reduction',
        result: '18.2% reduction',
        status: 'VERIFIED',
      },
    ],
    accentClass: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'optigrid',
    name: 'OptiGrid',
    initials: 'OG',
    category: 'Smart Grid Optimization',
    summary:
      'Predictive load management for facilities balancing efficiency, cost, and operational resilience.',
    industries: ['Manufacturing', 'Energy', 'Infrastructure'],
    technologies: ['Machine Learning', 'Smart Grid', 'Forecasting'],
    stage: 'Series A',
    location: 'Berlin, Germany',
    matchScore: 88,
    matchBreakdown: { problemFit: 91, evidence: 86, pocReadiness: 89, industryFit: 86 },
    matchExplanation:
      'Strong load forecasting capability and a pilot-ready integration model, with relevant evidence in complex facilities.',
    evidence: [
      '5 commercial deployments',
      '12% median peak-load reduction',
      'ISO 27001 certified',
      'TRL 8',
    ],
    tags: ['Smart Grid', 'Forecasting', 'Energy'],
    capabilities: ['Load forecasting', 'Peak demand optimization', 'Tariff-aware scheduling'],
    verifiedOutcomes: ['12% median peak-load reduction', '5 completed deployments'],
    pastPocs: [
      {
        name: 'Distribution Center Load Pilot',
        duration: '10 weeks',
        target: '10% peak-load reduction',
        result: '12.6% reduction',
        status: 'VERIFIED',
      },
    ],
    accentClass: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'senseforge',
    name: 'SenseForge',
    initials: 'SF',
    category: 'Industrial IoT Monitoring',
    summary:
      'Fast-deploy sensor infrastructure for operational visibility in legacy production environments.',
    industries: ['Industrial', 'Food Production', 'Chemicals'],
    technologies: ['Edge IoT', 'Sensors', 'Digital Twin'],
    stage: 'Seed',
    location: 'Ankara, Türkiye',
    matchScore: 81,
    matchBreakdown: { problemFit: 84, evidence: 78, pocReadiness: 83, industryFit: 79 },
    matchExplanation:
      'A practical fit where limited facility data is the first barrier. Hardware deployment is fast, though outcome evidence is earlier-stage.',
    evidence: [
      '2 production pilots',
      'Deployment in under 14 days',
      'Legacy equipment compatible',
      'TRL 7',
    ],
    tags: ['Industrial IoT', 'Sensors', 'Monitoring'],
    capabilities: ['Wireless sensor deployment', 'Legacy asset monitoring', 'Edge analytics'],
    verifiedOutcomes: ['2 completed production pilots', '100+ connected industrial assets'],
    pastPocs: [
      {
        name: 'Legacy Equipment Visibility Pilot',
        duration: '6 weeks',
        target: 'Connect 40 critical assets',
        result: '47 assets connected',
        status: 'COMPLETED',
      },
    ],
    accentClass: 'from-amber-400 to-orange-500',
  },
]
