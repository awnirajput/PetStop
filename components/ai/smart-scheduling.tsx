"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Zap, CheckCircle, AlertCircle, Sparkles, Plus } from "lucide-react"

interface SmartScheduleItem {
  id: string
  type: "vet" | "grooming" | "training" | "exercise" | "medication"
  title: string
  petName: string
  suggestedTime: string
  priority: "high" | "medium" | "low"
  aiReason: string
  confidence: number
}

export function SmartScheduling() {
  const suggestions: SmartScheduleItem[] = [
    {
      id: "1",
      type: "vet",
      title: "Annual Health Check",
      petName: "Bella",
      suggestedTime: "Tomorrow 2:00 PM",
      priority: "high",
      aiReason: "Vaccination due + optimal appointment availability",
      confidence: 94,
    },
    {
      id: "2",
      type: "grooming",
      title: "Full Grooming Session",
      petName: "Max",
      suggestedTime: "Friday 10:00 AM",
      priority: "medium",
      aiReason: "Coat condition + your preferred groomer available",
      confidence: 87,
    },
    {
      id: "3",
      type: "exercise",
      title: "Extended Walk",
      petName: "Charlie",
      suggestedTime: "Today 6:00 PM",
      priority: "medium",
      aiReason: "Perfect weather + Charlie's energy levels high",
      confidence: 82,
    },
    {
      id: "4",
      type: "training",
      title: "Anxiety Training Session",
      petName: "Luna",
      suggestedTime: "Saturday 11:00 AM",
      priority: "low",
      aiReason: "Quiet weekend morning + Luna's learning patterns",
      confidence: 76,
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "vet":
        return <AlertCircle className="w-4 h-4" />
      case "grooming":
        return <Sparkles className="w-4 h-4" />
      case "training":
        return <CheckCircle className="w-4 h-4" />
      case "exercise":
        return <Zap className="w-4 h-4" />
      case "medication":
        return <Clock className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "vet":
        return "bg-red-100 text-red-700"
      case "grooming":
        return "bg-purple-100 text-purple-700"
      case "training":
        return "bg-blue-100 text-blue-700"
      case "exercise":
        return "bg-green-100 text-green-700"
      case "medication":
        return "bg-amber-100 text-amber-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

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
          <Zap className="w-5 h-5 text-primary" />
          <span>Smart Scheduling</span>
          <Badge variant="secondary" className="text-xs">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestions.map((item) => (
          <div key={item.id} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge className={getTypeColor(item.type)}>
                  {getTypeIcon(item.type)}
                  <span className="ml-1 capitalize">{item.type}</span>
                </Badge>
                <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
                <Badge variant="outline" className="text-xs">
                  {item.petName}
                </Badge>
              </div>
              <div className="text-xs text-muted-foreground">{item.confidence}% match</div>
            </div>

            <div>
              <h4 className="font-medium">{item.title}</h4>
              <div className="flex items-center space-x-2 mt-1">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-primary">{item.suggestedTime}</span>
              </div>
            </div>

            <div className="bg-muted/30 p-3 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong>AI Reasoning:</strong> {item.aiReason}
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Button size="sm" className="flex-1">
                <Plus className="w-4 h-4 mr-1" />
                Schedule Now
              </Button>
              <Button size="sm" variant="outline">
                Suggest Different Time
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Zap className="w-4 h-4 mr-2" />
          Generate More Suggestions
        </Button>
      </CardContent>
    </Card>
  )
}
