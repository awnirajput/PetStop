"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PawPrint, Baby, Calendar, TrendingUp, Heart, Users, Plus, AlertTriangle } from "lucide-react"

export function BreederOverview() {
  const stats = [
    {
      title: "Active Dogs",
      value: "12",
      change: "+2 this month",
      icon: PawPrint,
      color: "text-blue-600",
    },
    {
      title: "Current Litters",
      value: "3",
      change: "2 due soon",
      icon: Baby,
      color: "text-green-600",
    },
    {
      title: "Upcoming Breedings",
      value: "5",
      change: "Next: Feb 15",
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "Monthly Revenue",
      value: "$8,450",
      change: "+15% vs last month",
      icon: TrendingUp,
      color: "text-emerald-600",
    },
  ]

  const quickActions = [
    { label: "Add New Dog", icon: PawPrint, href: "/breeder/dogs/new" },
    { label: "Record Breeding", icon: Heart, href: "/breeder/breeding/new" },
    { label: "New Litter", icon: Baby, href: "/breeder/litters/new" },
    { label: "Add Client", icon: Users, href: "/breeder/clients/new" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Plus className="w-5 h-5" />
            <span>Quick Actions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 bg-transparent"
              >
                <action.icon className="w-6 h-6" />
                <span className="text-sm">{action.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <div>
              <p className="font-medium text-amber-800">Health Check Reminder</p>
              <p className="text-sm text-amber-700">Bella's annual health screening is due in 3 days</p>
            </div>
            <Button size="sm" variant="outline" className="ml-auto bg-transparent">
              Schedule
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
