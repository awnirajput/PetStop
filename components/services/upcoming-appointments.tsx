import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, Phone, MessageCircle } from "lucide-react"

const upcomingAppointments = [
  {
    id: 1,
    service: "Grooming Appointment",
    provider: "Sarah's Pet Grooming",
    providerAvatar: "/pet-owner-avatar.png",
    date: "Tomorrow",
    time: "2:00 PM",
    duration: "1.5 hours",
    pet: "Buddy",
    petAvatar: "/happy-golden-retriever.png",
    location: "123 Main St, San Francisco",
    status: "confirmed",
    price: "$65",
    notes: "Full grooming with nail trim",
  },
  {
    id: 2,
    service: "Vet Checkup",
    provider: "Downtown Veterinary",
    providerAvatar: "/pet-owner-avatar.png",
    date: "Friday",
    time: "10:30 AM",
    duration: "45 minutes",
    pet: "Whiskers",
    petAvatar: "/cat-owner-pet-supplies.png",
    location: "456 Oak Ave, San Francisco",
    status: "pending",
    price: "$120",
    notes: "Annual wellness exam",
  },
  {
    id: 3,
    service: "Training Session",
    provider: "Happy Tails Training",
    providerAvatar: "/pet-owner-avatar.png",
    date: "Next Monday",
    time: "4:00 PM",
    duration: "1 hour",
    pet: "Charlie",
    petAvatar: "/diverse-pet-owners-park.png",
    location: "789 Pine St, San Francisco",
    status: "confirmed",
    price: "$80",
    notes: "Basic obedience training",
  },
]

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Upcoming Appointments</span>
          </div>
          <Button variant="ghost" size="sm">
            View All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingAppointments.map((appointment) => (
          <div key={appointment.id} className="p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors">
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium text-foreground">{appointment.service}</h4>
                  <p className="text-sm text-muted-foreground">{appointment.provider}</p>
                </div>
                <Badge
                  className={`${
                    appointment.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {appointment.status}
                </Badge>
              </div>

              {/* Pet and Provider */}
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={appointment.petAvatar || "/placeholder.svg"} />
                  <AvatarFallback>{appointment.pet[0]}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{appointment.pet}</span>
                <span className="text-sm text-muted-foreground">with</span>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={appointment.providerAvatar || "/placeholder.svg"} />
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{appointment.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>
                    {appointment.time} ({appointment.duration})
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{appointment.location}</span>
                </div>
                {appointment.notes && <p className="text-muted-foreground italic">{appointment.notes}</p>}
              </div>

              {/* Price and Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="font-medium text-foreground">{appointment.price}</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Reschedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule New Appointment
        </Button>
      </CardContent>
    </Card>
  )
}
