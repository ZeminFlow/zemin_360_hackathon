import type { FeedItem } from '../types/feed'

export const feedItems: FeedItem[] = [
  {
    id: 'retail-open-challenge',
    type: 'OPEN CHALLENGE',
    organization: 'RetailCo',
    title: 'Reduce online product returns with better sizing intelligence',
    description:
      'RetailCo is looking for solutions that improve size recommendations across high-return categories.',
    tags: ['Retail', 'Computer Vision', 'Sizing'],
    href: '/discover',
    ctaLabel: 'Explore challenge',
  },
  {
    id: 'atlas-poc-started',
    type: 'POC STARTED',
    organization: 'Atlas Manufacturing × Enerwise AI',
    title: 'Industrial Energy Optimization',
    description: 'A focused pilot connecting live facility data to energy optimization recommendations.',
    meta: '8 week pilot · Week 5',
    href: '/poc/demo-poc',
    ctaLabel: 'View POC',
  },
  {
    id: 'logicore-verified',
    type: 'VERIFIED OUTCOME',
    organization: 'LogiCore × RouteMind',
    title: 'Route Optimization POC',
    description:
      'A verified fleet pilot that reduced avoidable distance while maintaining on-time delivery.',
    metrics: [
      { label: 'Fuel consumption', value: '-12.4%' },
      { label: 'Empty kilometers', value: '-9.1%' },
    ],
    href: '/network',
    ctaLabel: 'View outcome',
  },
]
