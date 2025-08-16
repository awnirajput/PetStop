import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CommunityHeader } from "@/components/community/community-header"
import { CommunityFeed } from "@/components/community/community-feed"
import { CommunityGroups } from "@/components/community/community-groups"
import { TrendingTopics } from "@/components/community/trending-topics"
import { LocalMeetups } from "@/components/community/local-meetups"

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <CommunityHeader />

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <CommunityFeed />
          </div>

          <div className="space-y-6">
            <TrendingTopics />
            <CommunityGroups />
            <LocalMeetups />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
