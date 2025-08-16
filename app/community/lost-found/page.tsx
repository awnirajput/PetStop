import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { LostFoundHeader } from "@/components/community/lost-found-header"
import { LostFoundMap } from "@/components/community/lost-found-map"
import { LostFoundFeed } from "@/components/community/lost-found-feed"
import { LostFoundFilters } from "@/components/community/lost-found-filters"

export default function LostFoundPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <LostFoundHeader />

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <LostFoundFilters />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <LostFoundMap />
            <LostFoundFeed />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
