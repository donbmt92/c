import ProductPage from '@/components/product/ProductPage'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Trang bị Quân sự Tiêu chuẩn: Thiết bị Quốc phòng Phi Sát thương & Phòng thủ | [Tên Nhà Sản Xuất]',
    description: 'Giải pháp Trang bị Quốc phòng Toàn diện, Đảm bảo Chất lượng Xuất khẩu Quốc tế.',
    openGraph: {
      title: 'Trang bị Quân sự Tiêu chuẩn: Thiết bị Quốc phòng Phi Sát thương & Phòng thủ | [Tên Nhà Sản Xuất]',
      description: 'Giải pháp Trang bị Quốc phòng Toàn diện, Đảm bảo Chất lượng Xuất khẩu Quốc tế.',
      images: [
        {
          url: '/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: 'Trang bị Quân sự Tiêu chuẩn: Thiết bị Quốc phòng Phi Sát thương & Phòng thủ | [Tên Nhà Sản Xuất]',
        },
      ],
    },
  }
}

export default function 1Page() {
  return <ProductPage productId="1" />
}
