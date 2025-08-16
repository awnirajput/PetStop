import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ServicesHeader } from "@/components/services/services-header"
import { ServiceCategories } from "@/components/services/service-categories"
import { FeaturedProviders } from "@/components/services/featured-providers"
import { UpcomingAppointments } from "@/components/services/upcoming-appointments"
import { ServiceReviews } from "@/components/services/service-reviews"

export default function ServicesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <ServicesHeader />

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <ServiceCategories />
            <FeaturedProviders />
          </div>

          <div className="space-y-6">
            <UpcomingAppointments />
            <ServiceReviews />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
