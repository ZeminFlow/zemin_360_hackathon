import type { Startup } from '../types/startup'

export const startups: Startup[] = [
  {
    id: 'enerwise-ai',
    name: 'Enerwise AI',
    initials: 'EA',
    category: 'Endüstriyel Enerji Zekâsı',
    summary:
      'Çok tesisli endüstriyel operasyonlar için yapay zekâ destekli enerji izleme ve optimizasyon.',
    industries: ['Üretim', 'Otomotiv', 'Endüstri'],
    technologies: ['Endüstriyel Yapay Zekâ', 'IoT', 'Enerji Analitiği'],
    stage: 'Ölçeklenme',
    location: 'İstanbul, Türkiye',
    matchScore: 94,
    matchBreakdown: { problemFit: 96, evidence: 92, pocReadiness: 93, industryFit: 95 },
    matchExplanation:
      'Endüstriyel enerji izleme ve optimizasyonu için güçlü uyum. Önceki uygulama verileri belirlenen hedefle yakından örtüşüyor.',
    evidence: [
      '3 endüstriyel pilot',
      'Raporlanan ortalama enerji azalımı: %17',
      'API entegrasyonu mevcut',
      'TRL 8',
    ],
    tags: ['Endüstriyel Yapay Zekâ', 'Enerji', 'IoT'],
    capabilities: [
      'Tesis düzeyinde enerji izleme',
      'Gerçek zamanlı anomali tespiti',
      'Yapay zekâ destekli yük optimizasyonu',
      'Çok tesisli performans karşılaştırması',
    ],
    verifiedOutcomes: [
      'Ortalama %17 enerji azalımı',
      '3 tamamlanmış endüstriyel pilot',
      '2 doğrulanmış iş birliği',
    ],
    pastPocs: [
      {
        name: 'Üretim Tesisi Optimizasyonu',
        duration: '8 hafta',
        target: '%15 enerji azalımı',
        result: '%18,2 azalma',
        status: 'VERIFIED',
      },
    ],
    accentClass: 'from-violet-500 to-indigo-500',
  },
  {
    id: 'optigrid',
    name: 'OptiGrid',
    initials: 'OG',
    category: 'Akıllı Şebeke Optimizasyonu',
    summary:
      'Verimlilik, maliyet ve operasyonel dayanıklılığı dengeleyen tesisler için öngörülü yük yönetimi.',
    industries: ['Üretim', 'Enerji', 'Altyapı'],
    technologies: ['Makine Öğrenmesi', 'Akıllı Şebeke', 'Tahminleme'],
    stage: 'Seri A',
    location: 'Berlin, Almanya',
    matchScore: 88,
    matchBreakdown: { problemFit: 91, evidence: 86, pocReadiness: 89, industryFit: 86 },
    matchExplanation:
      'Güçlü yük tahminleme yetkinliği ve karmaşık tesislerde kanıtlanmış, pilota hazır entegrasyon modeli.',
    evidence: [
      '5 ticari uygulama',
      'Medyan %12 pik yük azalımı',
      'ISO 27001 sertifikalı',
      'TRL 8',
    ],
    tags: ['Akıllı Şebeke', 'Tahminleme', 'Enerji'],
    capabilities: ['Yük tahminleme', 'Pik talep optimizasyonu', 'Tarifeye duyarlı planlama'],
    verifiedOutcomes: ['Medyan %12 pik yük azalımı', '5 tamamlanmış uygulama'],
    pastPocs: [
      {
        name: 'Dağıtım Merkezi Yük Pilotu',
        duration: '10 hafta',
        target: '%10 pik yük azalımı',
        result: '%12,6 azalma',
        status: 'VERIFIED',
      },
    ],
    accentClass: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'senseforge',
    name: 'SenseForge',
    initials: 'SF',
    category: 'Endüstriyel IoT İzleme',
    summary:
      'Eski üretim ortamlarında operasyonel görünürlük için hızla kurulabilen sensör altyapısı.',
    industries: ['Endüstri', 'Gıda Üretimi', 'Kimya'],
    technologies: ['Uç IoT', 'Sensörler', 'Dijital İkiz'],
    stage: 'Tohum',
    location: 'Ankara, Türkiye',
    matchScore: 81,
    matchBreakdown: { problemFit: 84, evidence: 78, pocReadiness: 83, industryFit: 79 },
    matchExplanation:
      'Tesis verisinin sınırlı olduğu durumlar için pratik bir uyum. Donanım kurulumu hızlı; sonuç kanıtı ise daha erken aşamada.',
    evidence: [
      '2 üretim pilotu',
      '14 günden kısa kurulum',
      'Eski ekipmanlarla uyumlu',
      'TRL 7',
    ],
    tags: ['Endüstriyel IoT', 'Sensörler', 'İzleme'],
    capabilities: ['Kablosuz sensör kurulumu', 'Eski varlık izleme', 'Uç analitiği'],
    verifiedOutcomes: ['2 tamamlanmış üretim pilotu', '100+ bağlı endüstriyel varlık'],
    pastPocs: [
      {
        name: 'Eski Ekipman Görünürlük Pilotu',
        duration: '6 hafta',
        target: '40 kritik varlığı bağlamak',
        result: '47 varlık bağlandı',
        status: 'COMPLETED',
      },
    ],
    accentClass: 'from-amber-400 to-orange-500',
  },
]
