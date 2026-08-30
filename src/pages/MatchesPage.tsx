import { ArrowLeft, LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MatchCard } from '../components/MatchCard'
import { PageContainer } from '../components/PageContainer'
import { PageHeading } from '../components/PageHeading'
import { generateMatches } from '../services/mockAI'
import type { Startup } from '../types/startup'

export function MatchesPage() {
  const [matches, setMatches] = useState<Startup[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    generateMatches().then((result) => {
      if (isActive) {
        setMatches(result)
        setIsLoading(false)
      }
    })

    return () => {
      isActive = false
    }
  }, [])

  return (
    <PageContainer className="py-12 sm:py-16 lg:py-20">
      <Link to="/challenge" className="mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-paper">
        <ArrowLeft className="size-4" />
        İhtiyaca dön
      </Link>

      <PageHeading
        eyebrow="EŞLEŞME SONUÇLARI"
        title="Bu ihtiyaç için en güçlü eşleşmeler"
        description="Yetkinlik, kanıt ve PoC uyumuna göre sıralandı. Her öneri, skoru oluşturan sinyallerle birlikte sunulur."
      />

      <div className="mt-10 grid gap-y-3 border-y border-divider py-4 text-xs text-muted sm:grid-cols-4">
        <span>Enerji Verimliliği</span>
        <span>Üretim</span>
        <span>8–12 haftalık PoC</span>
        <span className="font-mono sm:text-right">Hazırlık 82 / 100</span>
      </div>

      {isLoading ? (
        <div className="mt-10 flex min-h-64 items-center justify-center border-y border-divider text-center">
          <div>
            <LoaderCircle className="mx-auto size-6 animate-spin text-brand-300" />
            <p className="mt-4 text-sm font-medium text-paper">Girişim kanıtları sıralanıyor</p>
            <p className="mt-2 text-xs text-muted">Yetkinlik, kanıt, sektör uyumu ve PoC hazırlığı karşılaştırılıyor…</p>
          </div>
        </div>
      ) : (
        <div className="mt-6" aria-live="polite">
          <p className="border-b border-divider py-4 text-xs text-emerald-400">
            Yapılandırılmış ihtiyacınız için 3 kanıta dayalı eşleşme üretildi.
          </p>
          {matches.map((startup, index) => (
            <MatchCard key={startup.id} startup={startup} rank={index + 1} />
          ))}
        </div>
      )}
    </PageContainer>
  )
}
