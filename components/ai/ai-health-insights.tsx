"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Activity, Brain, Heart, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Info } from "lucide-react"

interface HealthInsight {
  id: string
  petName: string
  category: "physical" | "mental" | "behavioral" | "preventive"
  title: string
  description: string
  status: "good" | "attention" | "concern"
  trend: "improving" | "stable" | "declining"
  score: number
  recommendations: string[]
}

export function AiHealthInsights() {
  const insights: HealthInsight[] = [
    {
      id: "1",
      petName: "Bella",
      category: "physical",
      title: "Overall Health Score",
      description:
        "Based on recent activity, weight, and vet records, Bella's health is excellent with minor attention needed for joint care.",
      status: "good",
      trend: "stable",
      score: 87,
      recommendations: ["Continue current exercise routine", "Consider joint supplements", "Monitor weight monthly"],
    },
    {
      id: "2",
      petName: "Max",
      category: "behavioral",
      title: "Anxiety Patterns",
      description:
        "AI detected increased stress indicators during thunderstorms and when left alone for extended periods.",
      status: "attention",
      trend: "improving",
      score: 65,
      recommendations: [
        "Gradual desensitization training",
        "Calming supplements during storms",
        "Interactive toys for alone time",
      ],
    },
    {
      id: "3",
      petName: "Charlie",
      category: "preventive",
      title: "Vaccination Schedule",
      description: "All vaccinations are up to date. Next preventive care window opens in 3 months.",
      status: "good",
      trend: "stable",
      score: 95,
      recommendations: ["Schedule annual check-up", "Update microchip information", "Dental cleaning assessment"],
    },
    {
      id: "4",
      petName: "Luna",
      category: "mental",
      title: "Cognitive Stimulation",
      description: "Luna shows high intelligence but may benefit from more mental challenges to prevent boredom.",
      status: "attention",
      trend: "stable",
      score: 72,
      recommendations: ["Puzzle toys and games", "Training new tricks", "Rotate toys weekly"],
    },
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "physical":
        return <Activity className="w-4 h-4" />
      case "mental":
        return <Brain className="w-4 h-4" />
      case "behavioral":
        return <Heart className="w-4 h-4" />
      case "preventive":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Info className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "physical":
        return "bg-blue-100 text-blue-700"
      case "mental":
        return "bg-purple-100 text-purple-700"
      case "behavioral":
        return "bg-green-100 text-green-700"
      case "preventive":
        return "bg-amber-100 text-amber-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "attention":
        return <Info className="w-4 h-4 text-amber-600" />
      case "concern":
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      default:
        return <Info className="w-4 h-4" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "improving":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "declining":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      case "stable":
        return <div className="w-4 h-4 border-b-2 border-gray-400" />
      default:
        return null
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="w-5 h-5 text-primary" />
          <span>AI Health Insights</span>
          <Badge variant="secondary" className="text-xs">
            <Activity className="w-3 h-3 mr-1" />
            Real-time Analysis
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {insights.map((insight) => (
          <div key={insight.id} className="p-4 border rounded-lg space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-xs">
                  {insight.petName}
                </Badge>
                <Badge className={getCategoryColor(insight.category)}>
                  {getCategoryIcon(insight.category)}
                  <span className="ml-1 capitalize">{insight.category}</span>
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon(insight.status)}
                {getTrendIcon(insight.trend)}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">{insight.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Health Score</span>
                  <span className={`font-medium ${getScoreColor(insight.score)}`}>{insight.score}/100</span>
                </div>
                <Progress value={insight.score} className="h-2" />
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-sm font-medium">AI Recommendations:</h5>
              <ul className="space-y-1">
                {insight.recommendations.map((rec, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="sm" variant="outline" className="w-full bg-transparent">
              View Detailed Analysis
            </Button>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Brain className="w-4 h-4 mr-2" />
          Generate New Insights
        </Button>
      </CardContent>
    </Card>
  )
}
