"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Heart, Stethoscope, Scissors } from "lucide-react"

export function BreedingCalendar() {
  const upcomingEvents = [
    {
      id: 1,
      type: "breeding",
      title: "Bella × Max Breeding",
      date: "Feb 15, 2024",
      time: "10:00 AM",
      status: "scheduled",
      icon: Heart,
      color: "text-red-500",
    },
    {
      id: 2,
      type: "health",
      title: "Luna Health Check",
      date: "Feb 18, 2024",
      time: "2:00 PM",
      status: "confirmed",
      icon: Stethoscope,
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "grooming",
      title: "Charlie Grooming",
      date: "Feb 20, 2024",
      time: "11:00 AM",
      status: "pending",
      icon: Scissors,
      color: "text-green-500",
    },
    {
      id: 4,
      type: "breeding",
      title: "Ruby × Duke Breeding",
      date: "Feb 25, 2024",
      time: "9:00 AM",
      status: "scheduled",
      icon: Heart,
      color: "text-red-500",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "scheduled":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Upcoming Events</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="flex items-center space-x-4 p-3 border rounded-lg">
            <div className={`p-2 rounded-full bg-muted ${event.color}`}>
              <event.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium truncate">{event.title}</h4>
              <p className="text-sm text-muted-foreground">
                {event.date} at {event.time}
              </p>
            </div>
            <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Calendar className="w-4 h-4 mr-2" />
          View Full Calendar
        </Button>
      </CardContent>
    </Card>
  )
}
