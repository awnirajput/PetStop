import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Plus, Heart, Calendar, Activity } from "lucide-react"

export function PetProfiles() {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      type: "Golden Retriever",
      age: "3 years",
      image: "/happy-golden-retriever.png",
      healthScore: 95,
      nextAppointment: "Vet Checkup - Dec 15",
      status: "Healthy",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    },
    {
      id: 2,
      name: "Whiskers",
      type: "Persian Cat",
      age: "2 years",
      image: "/fluffy-persian-cat.png",
      healthScore: 88,
      nextAppointment: "Grooming - Dec 12",
      status: "Good",
      statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      id: 3,
      name: "Charlie",
      type: "Beagle",
      age: "5 years",
      image: "/beagle-dog.png",
      healthScore: 92,
      nextAppointment: "Vaccination - Dec 20",
      status: "Healthy",
      statusColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-primary" />
          <span>My Pets</span>
        </CardTitle>
        <Button size="sm" className="flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Pet</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={pet.image || "/placeholder.svg"} alt={pet.name} />
                  <AvatarFallback>{pet.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-foreground">{pet.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {pet.type} • {pet.age}
                  </p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Activity className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Health Score: {pet.healthScore}%</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <Badge className={pet.statusColor}>{pet.status}</Badge>
                <div className="flex items-center space-x-1 mt-2">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{pet.nextAppointment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
