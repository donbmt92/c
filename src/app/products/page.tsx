import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function ProductsPage() {
  const products = [
    {
        "id": "1",
        "title": "Trang bị Quân sự Tiêu chuẩn: Thiết bị Quốc phòng Phi Sát thương & Phòng thủ | [Tên Nhà Sản Xuất]",
        "subtitle": "Giải pháp Trang bị Quốc phòng Toàn diện, Đảm bảo Chất lượng Xuất khẩu Quốc tế.",
        "image": "/placeholder.jpg"
    },
    {
        "id": "2",
        "title": "Hệ thống Huấn luyện & Mô phỏng Tác chiến Tiên tiến | [Tên Nhà Sản Xuất & Xuất Khẩu]",
        "subtitle": "Nâng cao năng lực chiến đấu của lực lượng vũ trang thông qua các giải pháp mô phỏng thực tế ảo và thực tại tăng cường.",
        "image": "/placeholder.jpg"
    },
    {
        "id": "3",
        "title": "Hệ thống C2/C4ISR Chiến lược - Giải pháp Chỉ huy & Kiểm soát Tích hợp Toàn diện | [Tên Nhà Sản Xuất]",
        "subtitle": "Nâng cao năng lực ra quyết định chiến thuật và tình báo với nền tảng C4ISR thế hệ mới, được thiết kế cho các hoạt động quốc phòng và an ninh toàn cầu.",
        "image": "/uploads/1768725510594-pekffgkuurm.jpg"
    }
]

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground">
            Explore our range of professional products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted relative">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/products/${product.id}`}>
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
