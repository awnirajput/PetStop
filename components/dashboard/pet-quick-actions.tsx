import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pill, Utensils, Activity, Camera, Calendar, CheckCircle } from "lucide-react"

const quickActions = [
  {
    icon: Pill,
    title: "Give Medication",
    description: "Whiskers - Antibiotic",
    time: "Due now",
    urgent: true,
    color: "text-red-500",
  },
  {
    icon: Utensils,
    title: "Feeding Time",
    description: "All pets - Dinner",
    time: "In 2 hours",
    urgent: false,
    color: "text-blue-500",
  },
  {
    icon: Activity,
    title: "Walk Buddy",
    description: "Evening walk",
    time: "In 1 hour",
    urgent: false,
    color: "text-green-500",
  },
  {
    icon: Calendar,
    title: "Vet Appointment",
    description: "Buddy - Annual checkup",
    time: "Tomorrow 2 PM",
    urgent: false,
    color: "text-purple-500",
  },
]

const recentActivities = [
  {
    icon: CheckCircle,
    title: "Fed Whiskers",
    time: "2 hours ago",
    type: "feeding",
  },
  {
    icon: Activity,
    title: "Walked Buddy",
    time: "4 hours ago",
    type: "exercise",
  },
  {
    icon: Camera,
    title: "Added photo of Charlie",
    time: "6 hours ago",
    type: "photo",
  },
  {
    icon: Pill,
    title: "Gave medication to Whiskers",
    time: "8 hours ago",
    type: "medication",
  },
]

export function PetQuickActions() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quickActions.map((action, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-background ${action.color}`}>
                  <action.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{action.title}</h4>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </div>
              <div className="text-right">
                <Badge variant={action.urgent ? "destructive" : "secondary"} className="mb-1">
                  {action.time}
                </Badge>
                <Button size="sm" variant={action.urgent ? "default" : "outline"}>
                  {action.urgent ? "Do Now" : "Schedule"}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-muted">
                  <activity.icon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
