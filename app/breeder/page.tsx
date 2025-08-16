import { BreederLayout } from "@/components/breeder/breeder-layout"
import { BreederOverview } from "@/components/breeder/breeder-overview"
import { ActiveLitters } from "@/components/breeder/active-litters"
import { BreedingCalendar } from "@/components/breeder/breeding-calendar"
import { HealthAlerts } from "@/components/breeder/health-alerts"
import { RecentInquiries } from "@/components/breeder/recent-inquiries"
import { FinancialSummary } from "@/components/breeder/financial-summary"

export default function BreederDashboard() {
  return (
    <BreederLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Breeder Dashboard</h1>
            <p className="text-muted-foreground">Manage your breeding program and business</p>
          </div>
        </div>

        <BreederOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ActiveLitters />
          <BreedingCalendar />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <HealthAlerts />
          <RecentInquiries />
          <FinancialSummary />
        </div>
      </div>
    </BreederLayout>
  )
}
