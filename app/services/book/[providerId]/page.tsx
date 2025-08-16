import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { BookingForm } from "@/components/services/booking-form"
import { ProviderProfile } from "@/components/services/provider-profile"
import { BookingSummary } from "@/components/services/booking-summary"

export default function BookingPage({ params }: { params: { providerId: string } }) {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span>Services</span>
          <span>→</span>
          <span>Book Appointment</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <ProviderProfile providerId={params.providerId} />
            <BookingForm providerId={params.providerId} />
          </div>

          <div>
            <BookingSummary />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
