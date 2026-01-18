import ProductPage from '@/components/product/ProductPage'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Hệ thống Huấn luyện & Mô phỏng Tác chiến Tiên tiến | [Tên Nhà Sản Xuất & Xuất Khẩu]',
    description: 'Nâng cao năng lực chiến đấu của lực lượng vũ trang thông qua các giải pháp mô phỏng thực tế ảo và thực tại tăng cường.',
    openGraph: {
      title: 'Hệ thống Huấn luyện & Mô phỏng Tác chiến Tiên tiến | [Tên Nhà Sản Xuất & Xuất Khẩu]',
      description: 'Nâng cao năng lực chiến đấu của lực lượng vũ trang thông qua các giải pháp mô phỏng thực tế ảo và thực tại tăng cường.',
      images: [
        {
          url: '/placeholder.jpg',
          width: 1200,
          height: 630,
          alt: 'Hệ thống Huấn luyện & Mô phỏng Tác chiến Tiên tiến | [Tên Nhà Sản Xuất & Xuất Khẩu]',
        },
      ],
    },
  }
}

export default function Product2Page() {
  return <ProductPage productId="2" />
}
