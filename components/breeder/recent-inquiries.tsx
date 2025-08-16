"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageCircle, Phone, Mail } from "lucide-react"

export function RecentInquiries() {
  const inquiries = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      phone: "(555) 123-4567",
      interest: "Golden Retriever Puppy",
      status: "new",
      date: "2 hours ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@email.com",
      phone: "(555) 987-6543",
      interest: "Labrador Breeding Rights",
      status: "responded",
      date: "1 day ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@email.com",
      phone: "(555) 456-7890",
      interest: "German Shepherd Puppy",
      status: "scheduled",
      date: "2 days ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800"
      case "responded":
        return "bg-amber-100 text-amber-800"
      case "scheduled":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-primary" />
          <span>Recent Inquiries</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="p-3 border rounded-lg space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={inquiry.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {inquiry.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{inquiry.name}</h4>
                <p className="text-sm text-muted-foreground truncate">{inquiry.interest}</p>
              </div>
              <Badge className={getStatusColor(inquiry.status)}>{inquiry.status}</Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{inquiry.date}</span>
              <div className="flex items-center space-x-1">
                <Button size="sm" variant="ghost">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Users className="w-4 h-4 mr-2" />
          View All Inquiries
        </Button>
      </CardContent>
    </Card>
  )
}
