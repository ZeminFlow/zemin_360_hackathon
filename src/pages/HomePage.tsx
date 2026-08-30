import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

const flowSteps = [
  {
    number: '01',
    stage: 'İHTİYAÇ',
    primary: 'Atlas Manufacturing',
    secondary: 'Enerji tüketimini azaltmak',
  },
  {
    number: '02',
    stage: 'HAZIRLIK',
    primary: '%82',
    secondary: 'İş birliğine hazır',
    technical: true,
  },
  {
    number: '03',
    stage: 'EŞLEŞME',
    primary: 'Enerwise AI',
    secondary: '%94 uyum',
  },
  {
    number: '04',
    stage: 'PoC',
    primary: '8 hafta',
    secondary: 'Endüstriyel Enerji Optimizasyonu',
  },
  {
    number: '05',
    stage: 'DOĞRULANMIŞ SONUÇ',
    primary: '↓ %18,2',
    secondary: 'Enerji tüketimi',
    result: true,
  },
]

export function HomePage() {
  return (
    <>
      <PageContainer>
        <section className="relative border-b border-divider py-16 sm:py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-y-0 left-[58.333%] hidden w-px bg-divider/60 lg:block" />

          <div className="grid gap-16 lg:grid-cols-12 lg:gap-0">
            <div className="lg:col-span-7 lg:pr-14 xl:pr-20">
              <p className="flex items-center gap-4 text-xs font-medium tracking-[0.16em] text-brand-300">
                <span className="h-px w-9 bg-brand-300" />
                İHTİYAÇTAN DOĞRULANMIŞ İŞ BİRLİĞİNE
              </p>

              <h1 className="mt-9 max-w-4xl text-[clamp(3rem,5.6vw,5.6rem)] font-semibold leading-[0.93] tracking-[-0.06em] text-paper">
                İş problemlerini
                <br />
                <span className="text-muted">kanıtlanmış iş birliklerine</span>
                <br />
                dönüştürün.
              </h1>

              <p className="mt-9 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                İhtiyacınızı yapılandırın, doğru girişimlerle eşleşin ve ölçülebilir PoC süreçlerini tek bir akışta yönetin.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/challenge"
                  className="inline-flex items-center justify-center gap-3 bg-paper px-5 py-3.5 text-sm font-semibold text-canvas transition-colors hover:bg-brand-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                >
                  İhtiyaç Oluştur
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/network"
                  className="inline-flex items-center justify-center gap-3 border border-divider px-5 py-3.5 text-sm font-medium text-paper transition-colors hover:border-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                >
                  Ağı Keşfet
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:pl-14 xl:pl-20">
              <div className="flex items-center justify-between border-b border-divider pb-4">
                <p className="text-sm font-medium text-paper">ZeminFlow süreci</p>
                <span className="font-mono text-[11px] text-muted">CANLI / 05</span>
              </div>

              <div className="relative mt-7">
                <span className="absolute bottom-8 left-[19px] top-6 w-px bg-divider" />
                {flowSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`relative grid grid-cols-[40px_1fr] gap-5 ${index < flowSteps.length - 1 ? 'pb-8' : ''}`}
                  >
                    <span className={`relative z-10 grid size-10 place-items-center border bg-canvas font-mono text-[11px] ${step.result ? 'border-emerald-500/60 text-emerald-300' : 'border-divider text-muted'}`}>
                      {step.number}
                    </span>
                    <div className={step.result ? 'border-t border-emerald-500/30 pt-3' : 'pt-1'}>
                      <p className={`text-[11px] font-medium tracking-[0.13em] ${step.result ? 'text-emerald-300' : 'text-muted'}`}>
                        {step.stage}
                      </p>
                      <p className={`mt-2 ${step.result ? 'font-mono text-4xl font-semibold tracking-[-0.05em] text-paper' : step.technical ? 'font-mono text-2xl text-paper' : 'text-base font-medium text-paper'}`}>
                        {step.primary}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">{step.secondary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </PageContainer>

      <PageContainer className="py-16 sm:py-20">
        <section>
          <div className="grid gap-6 border-b border-divider pb-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-medium tracking-[0.16em] text-brand-300">EKOSİSTEMDEN</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-paper sm:text-5xl">
                İş birlikleri ilerledikçe kanıt oluşur.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted lg:col-span-5">
              Açık ihtiyaçlar, devam eden PoC’ler ve doğrulanmış sonuçlar ekosistemde yeniden kullanılabilir bilgiye dönüşür.
            </p>
          </div>

          <div className="grid border-b border-divider lg:grid-cols-12">
            <Link
              to="/profile/enerwise-ai"
              className="group flex min-h-[430px] flex-col border-b border-divider py-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-14"
            >
              <div className="flex items-start justify-between gap-5">
                <p className="text-xs font-medium tracking-[0.14em] text-emerald-300">DOĞRULANMIŞ SONUÇ</p>
                <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-paper" />
              </div>
              <div className="mt-12">
                <p className="text-sm text-muted">Atlas Manufacturing × Enerwise AI</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-paper">Endüstriyel Enerji Optimizasyonu</h3>
              </div>
              <div className="mt-auto grid gap-8 border-t border-divider pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <strong className="font-mono text-6xl font-semibold tracking-[-0.07em] text-paper sm:text-7xl">↓ %18,2</strong>
                  <p className="mt-3 text-sm text-muted">Enerji tüketimi</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-paper">8 haftalık PoC</p>
                  <p className="mt-2 text-xs font-medium tracking-[0.13em] text-emerald-300">DOĞRULANDI</p>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-5 lg:pl-10">
              <Link to="/discover" className="group block border-b border-divider py-10">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-medium tracking-[0.14em] text-amber-300">AÇIK İHTİYAÇ</p>
                  <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-paper" />
                </div>
                <p className="mt-9 text-sm text-muted">RetailCo</p>
                <h3 className="mt-2 max-w-md text-2xl font-semibold tracking-[-0.03em] text-paper">Online ürün iadelerini azaltma</h3>
              </Link>

              <Link to="/network" className="group block py-10">
                <div className="flex items-start justify-between">
                  <p className="text-xs font-medium tracking-[0.14em] text-brand-300">PoC DEVAM EDİYOR</p>
                  <span className="font-mono text-xs text-muted">4 / 8. hafta</span>
                </div>
                <p className="mt-9 text-sm text-muted">LogiCore × RouteMind</p>
                <div className="mt-2 flex items-end justify-between gap-5">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-paper">Filo pilotu</h3>
                  <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-paper" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </PageContainer>
    </>
  )
}
