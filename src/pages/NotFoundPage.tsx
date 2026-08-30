import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

export function NotFoundPage() {
  return (
    <PageContainer className="grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-sm font-semibold text-brand-300">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">This path isn't mapped.</h1>
        <p className="mt-3 text-zinc-500">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-300">
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </div>
    </PageContainer>
  )
}
