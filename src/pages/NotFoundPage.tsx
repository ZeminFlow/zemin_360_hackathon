import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

export function NotFoundPage() {
  return (
    <PageContainer className="grid min-h-[60vh] place-items-center py-16 text-center">
      <div>
        <p className="text-sm font-semibold text-brand-300">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-paper">Bu yol haritalanmamış.</h1>
        <p className="mt-3 text-muted">Aradığınız sayfa bulunamadı.</p>
        <Link to="/" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-brand-300">
          <ArrowLeft className="size-4" />
          Ana sayfaya dön
        </Link>
      </div>
    </PageContainer>
  )
}
