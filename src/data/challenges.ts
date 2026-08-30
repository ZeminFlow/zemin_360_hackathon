import type { Challenge, StructuredChallenge } from '../types/challenge'

export const structuredEnergyChallenge: StructuredChallenge = {
  title: 'Üretim tesislerinde enerji tüketimini azaltma',
  category: 'Enerji Verimliliği / Endüstriyel Yapay Zekâ',
  currentProblem:
    'Tesisler arasındaki enerji tüketimi önemli ölçüde değişiyor ve verimsizliklere ilişkin gerçek zamanlı görünürlük sınırlı kalıyor.',
  goal: 'Üretim çıktısını azaltmadan enerji tüketimini en az %15 düşürmek.',
  suggestedPoc: 'Bir tesiste 8 hafta boyunca izleme ve optimizasyon teknolojisi uygulamak.',
  successMetrics: [
    'Enerji tüketimindeki azalma',
    'Üretim çıktısının korunması',
    'Geri ödeme süresi tahmini',
  ],
  readinessScore: 82,
  readinessFactors: [
    { label: 'Geçmiş enerji verileri mevcut', status: 'positive' },
    { label: 'Pilot tesis belirlendi', status: 'positive' },
    { label: 'Entegrasyon sorumlusu henüz atanmadı', status: 'negative' },
  ],
}

export const openChallenges: Challenge[] = [
  {
    id: 'retail-sizing-intelligence',
    company: 'RetailCo',
    title: 'Daha doğru beden önerileriyle ürün iadelerini azaltma',
    summary:
      'İade oranı yüksek giyim kategorilerinde beden önerilerini iyileştirecek odaklı bir pilot aranıyor.',
    tags: ['Perakende', 'Bilgisayarlı Görü', 'Beden Önerisi'],
    status: 'OPEN CHALLENGE',
  },
  {
    id: 'cold-chain-visibility',
    company: 'FreshRoute Logistics',
    title: 'Soğuk zincir operasyonlarında gerçek zamanlı görünürlüğü artırma',
    summary:
      'Sevkiyat etkilenmeden önce sıcaklık riskini görünür kılan izleme çözümleri aranıyor.',
    tags: ['Lojistik', 'IoT', 'Gıda Teknolojileri'],
    status: 'OPEN CHALLENGE',
  },
]
