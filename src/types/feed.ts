export type FeedPostType = 'OPEN CHALLENGE' | 'POC STARTED' | 'VERIFIED OUTCOME'

export interface FeedMetric {
  label: string
  value: string
}

export interface FeedItem {
  id: string
  type: FeedPostType
  organization: string
  title: string
  description: string
  tags?: string[]
  metrics?: FeedMetric[]
  meta?: string
  href: string
  ctaLabel: string
}
