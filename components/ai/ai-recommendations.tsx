"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Heart, Activity, Calendar, ShoppingCart, BookOpen, Clock, TrendingUp } from "lucide-react"

interface Recommendation {
  id: string
  type: "health" | "behavior" | "nutrition" | "product" | "activity"
  title: string
  description: string
  priority: "high" | "medium" | "low"
  action: string
  confidence: number
  petName?: string
}

export function AiRecommendations() {
  const recommendations: Recommendation[] = [
    {
      id: "1",
      type: "health",
      title: "Vaccination Reminder",
      description:
        "Bella's annual vaccination is due in 5 days. Based on her age and health history, I recommend scheduling soon.",
      priority: "high",
      action: "Schedule Appointment",
      confidence: 95,
      petName: "Bella",
    },
    {
      id: "2",
      type: "nutrition",
      title: "Diet Optimization",
      description:
        "Max could benefit from a senior dog formula. His activity level has decreased, and joint support would be beneficial.",
      priority: "medium",
      action: "View Products",
      confidence: 87,
      petName: "Max",
    },
    {
      id: "3",
      type: "behavior",
      title: "Training Opportunity",
      description:
        "Charlie shows signs of separation anxiety. I found some effective training techniques that could help.",
      priority: "medium",
      action: "View Training Tips",
      confidence: 82,
      petName: "Charlie",
    },
    {
      id: "4",
      type: "activity",
      title: "Exercise Suggestion",
      description: "Based on weather and Luna's energy levels, today is perfect for a longer walk or park visit.",
      priority: "low",
      action: "Plan Activity",
      confidence: 78,
      petName: "Luna",
    },
    {
      id: "5",
      type: "product",
      title: "Grooming Tools",
      description:
        "Your recent searches suggest you need grooming supplies. I found highly-rated tools perfect for your pets.",
      priority: "low",
      action: "Shop Now",
      confidence: 73,
    },
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "health":
        return <Activity className="w-4 h-4" />
      case "behavior":
        return <Heart className="w-4 h-4" />
      case "nutrition":
        return <Calendar className="w-4 h-4" />
      case "product":
        return <ShoppingCart className="w-4 h-4" />
      case "activity":
        return <BookOpen className="w-4 h-4" />
      default:
        return <Sparkles className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "health":
        return "bg-red-100 text-red-700"
      case "behavior":
        return "bg-blue-100 text-blue-700"
      case "nutrition":
        return "bg-green-100 text-green-700"
      case "product":
        return "bg-purple-100 text-purple-700"
      case "activity":
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
          <Sparkles className="w-5 h-5 text-primary" />
          <span>AI Recommendations</span>
          <Badge variant="secondary" className="text-xs">
            <TrendingUp className="w-3 h-3 mr-1" />
            Personalized
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <Badge className={getTypeColor(rec.type)}>
                  {getTypeIcon(rec.type)}
                  <span className="ml-1 capitalize">{rec.type}</span>
                </Badge>
                <Badge className={getPriorityColor(rec.priority)}>{rec.priority}</Badge>
                {rec.petName && (
                  <Badge variant="outline" className="text-xs">
                    {rec.petName}
                  </Badge>
                )}
              </div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3" />
                <span>{rec.confidence}% confidence</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-1">{rec.title}</h4>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>AI-generated • Just now</span>
              </div>
              <Button size="sm" variant="outline">
                {rec.action}
              </Button>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Sparkles className="w-4 h-4 mr-2" />
          Generate More Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}
