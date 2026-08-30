import type { Poc } from '../types/poc'

export const pocs: Poc[] = [
  {
    id: 'demo-poc',
    partners: 'Enerwise AI × Atlas Manufacturing',
    title: 'Industrial Energy Optimization POC',
    status: 'IN PROGRESS',
    duration: '8 weeks',
    milestones: [
      { label: 'Scope', status: 'completed' },
      { label: 'Data Integration', status: 'completed' },
      { label: 'Pilot Deployment', status: 'current' },
      { label: 'Measurement', status: 'upcoming' },
      { label: 'Final Verification', status: 'upcoming' },
    ],
    kpis: [
      { label: 'Energy Reduction', target: '15%', current: '11.8%', progress: 79 },
      { label: 'Production Output', target: 'No reduction', current: 'Stable', progress: 100 },
      { label: 'Integration', target: 'Complete', current: '100%', progress: 100 },
    ],
    nextMilestone: 'Complete 14-day optimization cycle',
    agreement: [
      { label: 'Scope', value: 'One production facility and its five highest-consumption lines' },
      { label: 'Success criteria', value: 'At least 15% energy reduction with stable production output' },
      { label: 'Data required', value: '15-minute energy readings, shift data, and production volume' },
      { label: 'Owners', value: 'Atlas Operations Lead · Enerwise Deployment Lead' },
    ],
  },
  {
    id: 'route-optimization-poc',
    partners: 'LogiCore × RouteMind',
    title: 'Route Optimization POC',
    status: 'VERIFIED',
    duration: '10 weeks',
    milestones: [
      { label: 'Scope', status: 'completed' },
      { label: 'Data Integration', status: 'completed' },
      { label: 'Fleet Pilot', status: 'completed' },
      { label: 'Measurement', status: 'completed' },
      { label: 'Final Verification', status: 'completed' },
    ],
    kpis: [
      { label: 'Fuel Consumption', target: '10% reduction', current: '-12.4%', progress: 100 },
      { label: 'Empty Kilometers', target: '8% reduction', current: '-9.1%', progress: 100 },
      { label: 'On-time Delivery', target: 'Maintain baseline', current: 'Stable', progress: 100 },
    ],
    nextMilestone: 'Outcome published to the collaboration network',
    agreement: [
      { label: 'Scope', value: '120 vehicles across two regional distribution hubs' },
      { label: 'Success criteria', value: 'Reduce fuel use without affecting on-time delivery' },
      { label: 'Data required', value: 'Routes, orders, vehicle capacity, and telematics data' },
      { label: 'Owners', value: 'LogiCore Fleet Lead · RouteMind POC Lead' },
    ],
  },
]
