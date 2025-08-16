import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Calendar, Camera, Edit, MoreVertical, Activity, Award } from "lucide-react"

const pets = [
  {
    id: 1,
    name: "Buddy",
    breed: "Golden Retriever",
    age: "3 years old",
    weight: "65 lbs",
    gender: "Male",
    microchip: "982000123456789",
    image: "/happy-golden-retriever.png",
    status: "Healthy",
    lastVet: "2 months ago",
    nextAppointment: "Annual checkup in 5 days",
    vaccinations: "Up to date",
    medications: "None",
    allergies: "None known",
    personality: ["Friendly", "Energetic", "Loyal"],
    achievements: ["Good Boy Award", "Walking Champion"],
  },
  {
    id: 2,
    name: "Whiskers",
    breed: "Persian Cat",
    age: "2 years old",
    weight: "8 lbs",
    gender: "Female",
    microchip: "982000987654321",
    image: "/cat-owner-pet-supplies.png",
    status: "On Medication",
    lastVet: "1 week ago",
    nextAppointment: "Grooming tomorrow",
    vaccinations: "Up to date",
    medications: "Antibiotic (5 days remaining)",
    allergies: "Chicken",
    personality: ["Independent", "Curious", "Affectionate"],
    achievements: ["Litter Box Master", "Purr Champion"],
  },
  {
    id: 3,
    name: "Charlie",
    breed: "Beagle",
    age: "1 year old",
    weight: "25 lbs",
    gender: "Male",
    microchip: "982000456789123",
    image: "/diverse-pet-owners-park.png",
    status: "Healthy",
    lastVet: "3 weeks ago",
    nextAppointment: "Training session in 3 days",
    vaccinations: "Puppy series complete",
    medications: "None",
    allergies: "None known",
    personality: ["Playful", "Curious", "Food-motivated"],
    achievements: ["Sit Command", "Potty Training Graduate"],
  },
]

export function PetProfileGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <Card key={pet.id} className="overflow-hidden">
          <CardContent className="p-0">
            {/* Pet Image Header */}
            <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
              <Avatar className="absolute top-4 left-4 h-16 w-16 border-4 border-white shadow-lg">
                <AvatarImage src={pet.image || "/placeholder.svg"} alt={pet.name} />
                <AvatarFallback className="text-lg font-bold">{pet.name[0]}</AvatarFallback>
              </Avatar>

              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                  <Camera className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-4">
                <Badge
                  className={`${
                    pet.status === "Healthy" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                  }`}
                >
                  {pet.status}
                </Badge>
              </div>
            </div>

            {/* Pet Details */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground">{pet.name}</h3>
                <p className="text-muted-foreground">
                  {pet.breed} • {pet.age}
                </p>
                <p className="text-sm text-muted-foreground">
                  {pet.gender} • {pet.weight}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-3 border-y border-border">
                <div className="text-center">
                  <Heart className="w-5 h-5 text-red-500 mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Health</p>
                  <p className="text-sm font-medium">{pet.status}</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Last Vet</p>
                  <p className="text-sm font-medium">{pet.lastVet}</p>
                </div>
                <div className="text-center">
                  <Activity className="w-5 h-5 text-green-500 mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Activity</p>
                  <p className="text-sm font-medium">Active</p>
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Appointment:</span>
                  <span className="font-medium">{pet.nextAppointment}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vaccinations:</span>
                  <span className="font-medium text-green-600">{pet.vaccinations}</span>
                </div>
                {pet.medications !== "None" && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Medications:</span>
                    <span className="font-medium text-orange-600">{pet.medications}</span>
                  </div>
                )}
              </div>

              {/* Personality Traits */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Personality</p>
                <div className="flex flex-wrap gap-1">
                  {pet.personality.map((trait, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Recent Achievements</p>
                <div className="space-y-1">
                  {pet.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Award className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 pt-2">
                <Button className="flex-1" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4 mr-2" />
                  Health
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
