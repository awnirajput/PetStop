"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Activity, Calendar } from "lucide-react"

export function HealthAlerts() {
  const alerts = [
    {
      id: 1,
      dog: "Bella",
      type: "vaccination",
      message: "Annual vaccination due",
      dueDate: "Feb 20, 2024",
      priority: "high",
    },
    {
      id: 2,
      dog: "Max",
      type: "health_check",
      message: "Hip dysplasia screening",
      dueDate: "Mar 5, 2024",
      priority: "medium",
    },
    {
      id: 3,
      dog: "Luna",
      type: "medication",
      message: "Heartworm prevention",
      dueDate: "Feb 25, 2024",
      priority: "high",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-amber-100 text-amber-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-primary" />
          <span>Health Alerts</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-3 border rounded-lg space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{alert.dog}</h4>
              <Badge className={getPriorityColor(alert.priority)}>{alert.priority}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{alert.message}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Due: {alert.dueDate}</span>
              </div>
              <Button size="sm" variant="outline">
                Schedule
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <AlertTriangle className="w-4 h-4 mr-2" />
          View All Alerts
        </Button>
      </CardContent>
    </Card>
  )
}
