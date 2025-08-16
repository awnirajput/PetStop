"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Baby, Calendar, Eye, MoreHorizontal } from "lucide-react"

export function ActiveLitters() {
  const litters = [
    {
      id: "L001",
      dam: "Bella",
      sire: "Max",
      breed: "Golden Retriever",
      dueDate: "2024-02-15",
      status: "pregnant",
      week: 7,
      totalWeeks: 9,
      puppyCount: "Expected: 6-8",
    },
    {
      id: "L002",
      dam: "Luna",
      sire: "Charlie",
      breed: "Labrador",
      dueDate: "2024-01-28",
      status: "whelped",
      week: 3,
      totalWeeks: 8,
      puppyCount: "Born: 7",
    },
    {
      id: "L003",
      dam: "Ruby",
      sire: "Duke",
      breed: "German Shepherd",
      dueDate: "2024-03-10",
      status: "pregnant",
      week: 4,
      totalWeeks: 9,
      puppyCount: "Expected: 5-7",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pregnant":
        return "bg-blue-100 text-blue-800"
      case "whelped":
        return "bg-green-100 text-green-800"
      case "weaning":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Baby className="w-5 h-5 text-primary" />
          <span>Active Litters</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {litters.map((litter) => (
          <div key={litter.id} className="p-4 border rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">
                  {litter.dam} × {litter.sire}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {litter.breed} • {litter.id}
                </p>
              </div>
              <Badge className={getStatusColor(litter.status)}>{litter.status}</Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>
                  Week {litter.week} of {litter.totalWeeks}
                </span>
                <span>{Math.round((litter.week / litter.totalWeeks) * 100)}%</span>
              </div>
              <Progress value={(litter.week / litter.totalWeeks) * 100} className="h-2" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{litter.dueDate}</span>
                </div>
                <span>{litter.puppyCount}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button size="sm" variant="outline">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="ghost">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Baby className="w-4 h-4 mr-2" />
          Add New Litter
        </Button>
      </CardContent>
    </Card>
  )
}
