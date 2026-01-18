import ProductPage from '@/components/product/ProductPage'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hệ thống C2/C4ISR Chiến lược - Giải pháp Chỉ huy & Kiểm soát Tích hợp Toàn diện | [Tên Nhà Sản Xuất]',
    description: 'Nâng cao năng lực ra quyết định chiến thuật và tình báo với nền tảng C4ISR thế hệ mới, được thiết kế cho các hoạt động quốc phòng và an ninh toàn cầu.',
    openGraph: {
      title: 'Hệ thống C2/C4ISR Chiến lược - Giải pháp Chỉ huy & Kiểm soát Tích hợp Toàn diện | [Tên Nhà Sản Xuất]',
      description: 'Nâng cao năng lực ra quyết định chiến thuật và tình báo với nền tảng C4ISR thế hệ mới, được thiết kế cho các hoạt động quốc phòng và an ninh toàn cầu.',
      images: [
        {
          url: '/uploads/1768725510594-pekffgkuurm.jpg',
          width: 1200,
          height: 630,
          alt: 'Hệ thống C2/C4ISR Chiến lược - Giải pháp Chỉ huy & Kiểm soát Tích hợp Toàn diện | [Tên Nhà Sản Xuất]',
        },
      ],
    },
  }
}

export default function 3Page() {
  return <ProductPage productId="3" />
}
