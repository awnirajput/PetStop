import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ProductDetails } from "@/components/shop/product-details"
import { ProductReviews } from "@/components/shop/product-reviews"
import { RelatedProducts } from "@/components/shop/related-products"
import { ProductQA } from "@/components/shop/product-qa"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <ProductDetails productId={params.id} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProductReviews />
            <ProductQA />
          </div>
          <div>
            <RelatedProducts />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
