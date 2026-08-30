export type MilestoneStatus = 'completed' | 'current' | 'upcoming'

export interface PocMilestone {
  label: string
  status: MilestoneStatus
}

export interface PocKpi {
  label: string
  target: string
  current: string
  progress: number
}

export interface PocAgreementItem {
  label: string
  value: string
}

export interface Poc {
  id: string
  partners: string
  title: string
  status: 'IN PROGRESS' | 'VERIFIED'
  duration: string
  milestones: PocMilestone[]
  kpis: PocKpi[]
  nextMilestone: string
  agreement: PocAgreementItem[]
}
