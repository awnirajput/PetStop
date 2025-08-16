import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Calendar, AlertTriangle, TrendingUp, Camera, Edit, Sparkles, Brain } from "lucide-react"

const pets = [
  {
    id: 1,
    name: "Buddy",
    type: "Golden Retriever",
    age: "3 years",
    image: "/happy-golden-retriever.png",
    status: "healthy",
    nextAppointment: "Vet checkup in 5 days",
  },
  {
    id: 2,
    name: "Whiskers",
    type: "Persian Cat",
    age: "2 years",
    image: "/cat-owner-pet-supplies.png",
    status: "medication",
    nextAppointment: "Grooming tomorrow",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Beagle",
    age: "1 year",
    image: "/diverse-pet-owners-park.png",
    status: "healthy",
    nextAppointment: "Training session in 3 days",
  },
]

const stats = [
  {
    title: "Total Pets",
    value: "3",
    change: "+1 this month",
    icon: Heart,
    color: "text-red-500",
  },
  {
    title: "Upcoming Tasks",
    value: "7",
    change: "2 due today",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    title: "Health Alerts",
    value: "1",
    change: "Medication reminder",
    icon: AlertTriangle,
    color: "text-orange-500",
  },
  {
    title: "Activity Score",
    value: "92%",
    change: "+5% this week",
    icon: TrendingUp,
    color: "text-green-500",
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground">Good morning, Sarah! 👋</h1>
          <p className="text-muted-foreground mt-1">Your pets are doing great today. Here's their latest updates.</p>
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Insights Active
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Brain className="w-3 h-3 mr-1" />3 Smart Recommendations
            </Badge>
          </div>
        </div>
        <Button className="mt-4 sm:mt-0">
          <Camera className="w-4 h-4 mr-2" />
          Add Pet Photo
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pet Overview Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Your Pets</span>
            <Button variant="outline" size="sm">
              <Edit className="w-4 h-4 mr-2" />
              Manage Pets
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {pets.map((pet) => (
              <Card key={pet.id} className="bg-muted/30">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={pet.image || "/placeholder.svg"} alt={pet.name} />
                      <AvatarFallback>{pet.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{pet.name}</h3>
                        <Badge
                          variant={pet.status === "healthy" ? "default" : "secondary"}
                          className={
                            pet.status === "healthy" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                          }
                        >
                          {pet.status}
                        </Badge>
                        {pet.id === 1 && (
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                            <Brain className="w-3 h-3 mr-1" />
                            AI: 87%
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {pet.type} • {pet.age}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">{pet.nextAppointment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
