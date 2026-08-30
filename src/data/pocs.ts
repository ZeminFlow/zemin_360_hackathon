import type { Poc } from '../types/poc'

export const pocs: Poc[] = [
  {
    id: 'demo-poc',
    partners: 'Enerwise AI × Atlas Manufacturing',
    title: 'Endüstriyel Enerji Optimizasyonu PoC',
    status: 'IN PROGRESS',
    duration: '8 hafta',
    milestones: [
      { label: 'Kapsam', status: 'completed' },
      { label: 'Veri Entegrasyonu', status: 'completed' },
      { label: 'Pilot Uygulama', status: 'current' },
      { label: 'Ölçüm', status: 'upcoming' },
      { label: 'Son Doğrulama', status: 'upcoming' },
    ],
    kpis: [
      { label: 'Enerji Azalımı', target: '%15', current: '%11,8', progress: 79 },
      { label: 'Üretim Çıktısı', target: 'Azalma yok', current: 'Kararlı', progress: 100 },
      { label: 'Entegrasyon', target: 'Tamamlandı', current: '%100', progress: 100 },
    ],
    nextMilestone: '14 günlük optimizasyon döngüsünü tamamla',
    agreement: [
      { label: 'Kapsam', value: 'Bir üretim tesisi ve en yüksek tüketimli beş hat' },
      { label: 'Başarı kriterleri', value: 'Üretim çıktısı korunurken en az %15 enerji azalımı' },
      { label: 'Gerekli veriler', value: '15 dakikalık enerji ölçümleri, vardiya verileri ve üretim hacmi' },
      { label: 'Sorumlular', value: 'Atlas Operasyon Lideri · Enerwise Uygulama Lideri' },
    ],
  },
  {
    id: 'route-optimization-poc',
    partners: 'LogiCore × RouteMind',
    title: 'Rota Optimizasyonu PoC',
    status: 'VERIFIED',
    duration: '10 hafta',
    milestones: [
      { label: 'Kapsam', status: 'completed' },
      { label: 'Veri Entegrasyonu', status: 'completed' },
      { label: 'Filo Pilotu', status: 'completed' },
      { label: 'Ölçüm', status: 'completed' },
      { label: 'Son Doğrulama', status: 'completed' },
    ],
    kpis: [
      { label: 'Yakıt Tüketimi', target: '%10 azalma', current: '↓ %12,4', progress: 100 },
      { label: 'Boş Kilometre', target: '%8 azalma', current: '↓ %9,1', progress: 100 },
      { label: 'Zamanında Teslimat', target: 'Temel seviyeyi koru', current: 'Kararlı', progress: 100 },
    ],
    nextMilestone: 'Sonuç iş birliği ağında yayımlandı',
    agreement: [
      { label: 'Kapsam', value: 'İki bölgesel dağıtım merkezinde 120 araç' },
      { label: 'Başarı kriterleri', value: 'Zamanında teslimatı etkilemeden yakıt kullanımını azaltmak' },
      { label: 'Gerekli veriler', value: 'Rotalar, siparişler, araç kapasitesi ve telematik verileri' },
      { label: 'Sorumlular', value: 'LogiCore Filo Lideri · RouteMind PoC Lideri' },
    ],
  },
]
