"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Utensils, Activity, Pill, Droplets, Plus, GripVertical } from "lucide-react"

const routineItems = [
  {
    id: 1,
    time: "7:00 AM",
    title: "Morning Walk - Buddy",
    type: "exercise",
    icon: Activity,
    completed: true,
    pet: "Buddy",
  },
  {
    id: 2,
    time: "7:30 AM",
    title: "Breakfast - All Pets",
    type: "feeding",
    icon: Utensils,
    completed: true,
    pet: "All",
  },
  {
    id: 3,
    time: "8:00 AM",
    title: "Medication - Whiskers",
    type: "medication",
    icon: Pill,
    completed: false,
    pet: "Whiskers",
    urgent: true,
  },
  {
    id: 4,
    time: "12:00 PM",
    title: "Lunch - All Pets",
    type: "feeding",
    icon: Utensils,
    completed: false,
    pet: "All",
  },
  {
    id: 5,
    time: "3:00 PM",
    title: "Playtime - Charlie",
    type: "exercise",
    icon: Activity,
    completed: false,
    pet: "Charlie",
  },
  {
    id: 6,
    time: "6:00 PM",
    title: "Evening Walk - Buddy",
    type: "exercise",
    icon: Activity,
    completed: false,
    pet: "Buddy",
  },
  {
    id: 7,
    time: "7:00 PM",
    title: "Dinner - All Pets",
    type: "feeding",
    icon: Utensils,
    completed: false,
    pet: "All",
  },
  {
    id: 8,
    time: "9:00 PM",
    title: "Fresh Water - All Pets",
    type: "care",
    icon: Droplets,
    completed: false,
    pet: "All",
  },
]

const typeColors = {
  exercise: "text-green-500",
  feeding: "text-blue-500",
  medication: "text-red-500",
  care: "text-purple-500",
}

const typeBadges = {
  exercise: "bg-green-100 text-green-800",
  feeding: "bg-blue-100 text-blue-800",
  medication: "bg-red-100 text-red-800",
  care: "bg-purple-100 text-purple-800",
}

export function DailyRoutine() {
  const [items, setItems] = useState(routineItems)

  const toggleComplete = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const completedCount = items.filter((item) => item.completed).length
  const totalCount = items.length
  const progressPercentage = (completedCount / totalCount) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Daily Routine</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {completedCount} of {totalCount} tasks completed ({Math.round(progressPercentage)}%)
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex items-center space-x-4 p-3 rounded-lg border transition-all ${
                item.completed
                  ? "bg-muted/30 border-muted opacity-60"
                  : item.urgent
                    ? "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800/30"
                    : "bg-background border-border hover:bg-muted/30"
              }`}
            >
              <div className="cursor-move text-muted-foreground">
                <GripVertical className="w-4 h-4" />
              </div>

              <Checkbox
                checked={item.completed}
                onCheckedChange={() => toggleComplete(item.id)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />

              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{item.time}</span>
              </div>

              <div className={`p-2 rounded-lg bg-muted ${typeColors[item.type as keyof typeof typeColors]}`}>
                <item.icon className="w-4 h-4" />
              </div>

              <div className="flex-1">
                <h4
                  className={`font-medium ${item.completed ? "line-through text-muted-foreground" : "text-foreground"}`}
                >
                  {item.title}
                </h4>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className={`text-xs ${typeBadges[item.type as keyof typeof typeBadges]}`}>
                    {item.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">• {item.pet}</span>
                  {item.urgent && (
                    <Badge variant="destructive" className="text-xs">
                      Urgent
                    </Badge>
                  )}
                </div>
              </div>

              {!item.completed && (
                <Button size="sm" variant="outline">
                  Mark Done
                </Button>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
