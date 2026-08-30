import { Network } from 'lucide-react'
import { FeedCard } from '../components/FeedCard'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { feedItems } from '../data/feed'

export function NetworkPage() {
  return (
    <PageContainer className="py-12 sm:py-16">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <PageHeading
          eyebrow="Collaboration Network"
          title="What's being built"
          description="Challenges, POCs and verified outcomes across the ecosystem. Collaboration knowledge that compounds instead of disappearing."
        />
        <div className="flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-500">
          <Network className="size-4 text-brand-300" />
          Professional activity feed
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {feedItems.map((item) => (
          <FeedCard key={item.id} item={item} />
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-white/8 bg-black/15 px-5 py-4 text-center">
        <p className="text-xs leading-5 text-zinc-600">
          Each verified result becomes reusable proof for the next company evaluating a similar collaboration.
        </p>
      </section>
    </PageContainer>
  )
}
