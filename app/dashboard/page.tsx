import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardOverview } from "@/components/dashboard/dashboard-overview"
import { PetQuickActions } from "@/components/dashboard/pet-quick-actions"
import { DailyRoutine } from "@/components/dashboard/daily-routine"
import { HealthAlerts } from "@/components/dashboard/health-alerts"
import { WeatherWidget } from "@/components/dashboard/weather-widget"
import { RecommendedActivities } from "@/components/dashboard/recommended-activities"
import { AiRecommendations } from "@/components/ai/ai-recommendations"
import { AiHealthInsights } from "@/components/ai/ai-health-insights"
import { SmartScheduling } from "@/components/ai/smart-scheduling"
import { AiChatWidget } from "@/components/ai/ai-chat-widget"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <DashboardOverview />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PetQuickActions />
            <DailyRoutine />
            <AiRecommendations />
          </div>

          <div className="space-y-6">
            <HealthAlerts />
            <WeatherWidget />
            <RecommendedActivities />
            <AiHealthInsights />
            <SmartScheduling />
          </div>
        </div>
      </div>

      <AiChatWidget />
    </DashboardLayout>
  )
}
