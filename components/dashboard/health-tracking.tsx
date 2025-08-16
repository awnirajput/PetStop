import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Activity } from "lucide-react"

export function HealthTracking() {
  const healthMetrics = [
    {
      pet: "Buddy",
      metrics: [
        { label: "Weight", value: "32 kg", target: "30-35 kg", progress: 85, status: "good" },
        { label: "Exercise", value: "45 min", target: "60 min/day", progress: 75, status: "needs-attention" },
        { label: "Vaccination", value: "Up to date", target: "Current", progress: 100, status: "excellent" },
      ],
    },
    {
      pet: "Whiskers",
      metrics: [
        { label: "Weight", value: "4.2 kg", target: "4-5 kg", progress: 90, status: "excellent" },
        { label: "Grooming", value: "2 days ago", target: "Weekly", progress: 60, status: "due-soon" },
        { label: "Dental Care", value: "1 week ago", target: "Bi-weekly", progress: 80, status: "good" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
      case "good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
      case "needs-attention":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
      case "due-soon":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-primary" />
          <span>Health Tracking</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {healthMetrics.map((petHealth) => (
            <div key={petHealth.pet}>
              <h3 className="font-semibold text-foreground mb-3">{petHealth.pet}</h3>
              <div className="space-y-3">
                {petHealth.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{metric.label}</span>
                        <Badge className={getStatusColor(metric.status)}>{metric.status.replace("-", " ")}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>Current: {metric.value}</span>
                        <span>Target: {metric.target}</span>
                      </div>
                      <Progress value={metric.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
