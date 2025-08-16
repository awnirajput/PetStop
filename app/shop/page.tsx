import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ShopHeader } from "@/components/shop/shop-header"
import { ProductFilters } from "@/components/shop/product-filters"
import { ProductGrid } from "@/components/shop/product-grid"
import { FeaturedDeals } from "@/components/shop/featured-deals"

export default function ShopPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ShopHeader />
        <FeaturedDeals />

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
