import type { FeedItem } from '../types/feed'

export const feedItems: FeedItem[] = [
  {
    id: 'retail-open-challenge',
    type: 'OPEN CHALLENGE',
    organization: 'RetailCo',
    title: 'Daha doğru beden önerileriyle online ürün iadelerini azaltma',
    description:
      'RetailCo, iade oranı yüksek kategorilerde beden önerilerini iyileştirecek çözümler arıyor.',
    tags: ['Perakende', 'Bilgisayarlı Görü', 'Beden Önerisi'],
    href: '/discover',
    ctaLabel: 'İhtiyacı incele',
  },
  {
    id: 'atlas-poc-started',
    type: 'POC STARTED',
    organization: 'Atlas Manufacturing × Enerwise AI',
    title: 'Endüstriyel Enerji Optimizasyonu',
    description: 'Canlı tesis verisini enerji optimizasyonu önerileriyle buluşturan odaklı bir pilot.',
    meta: '8 haftalık pilot · 5. hafta',
    href: '/poc/demo-poc',
    ctaLabel: 'PoC’yi incele',
  },
  {
    id: 'logicore-verified',
    type: 'VERIFIED OUTCOME',
    organization: 'LogiCore × RouteMind',
    title: 'Rota Optimizasyonu PoC',
    description:
      'Zamanında teslimatı korurken kaçınılabilir mesafeyi azaltan doğrulanmış filo pilotu.',
    metrics: [
      { label: 'Yakıt tüketimi', value: '↓ %12,4' },
      { label: 'Boş kilometre', value: '↓ %9,1' },
    ],
    href: '/network',
    ctaLabel: 'Sonucu incele',
  },
]
