import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Pill, Syringe, Heart } from "lucide-react"

const healthAlerts = [
  {
    id: 1,
    type: "medication",
    title: "Medication Due",
    description: "Whiskers needs antibiotic",
    time: "Due now",
    urgent: true,
    icon: Pill,
    pet: "Whiskers",
  },
  {
    id: 2,
    type: "appointment",
    title: "Vet Checkup",
    description: "Annual wellness exam",
    time: "In 5 days",
    urgent: false,
    icon: Calendar,
    pet: "Buddy",
  },
  {
    id: 3,
    type: "vaccination",
    title: "Vaccination Due",
    description: "Rabies booster shot",
    time: "In 2 weeks",
    urgent: false,
    icon: Syringe,
    pet: "Charlie",
  },
]

export function HealthAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span>Health Alerts</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {healthAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 rounded-lg border ${
              alert.urgent
                ? "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800/30"
                : "bg-muted/30 border-border"
            }`}
          >
            <div className="flex items-start space-x-3">
              <div
                className={`p-2 rounded-lg ${alert.urgent ? "bg-red-100 text-red-600" : "bg-background text-muted-foreground"}`}
              >
                <alert.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-foreground">{alert.title}</h4>
                  {alert.urgent && (
                    <Badge variant="destructive" className="text-xs">
                      Urgent
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{alert.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">
                    {alert.pet} • {alert.time}
                  </span>
                  <Button size="sm" variant={alert.urgent ? "default" : "outline"}>
                    {alert.urgent ? "Handle Now" : "Schedule"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          View All Health Records
        </Button>
      </CardContent>
    </Card>
  )
}
