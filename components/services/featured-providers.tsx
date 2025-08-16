import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, Shield, Heart, Calendar, Phone } from "lucide-react"

const featuredProviders = [
  {
    id: 1,
    name: "Sarah's Pet Grooming",
    owner: "Sarah Johnson",
    avatar: "/pet-owner-avatar.png",
    rating: 4.9,
    reviews: 234,
    location: "2.3 miles away",
    services: ["Grooming", "Nail Trimming", "Teeth Cleaning"],
    price: "$45-85",
    nextAvailable: "Today 3:00 PM",
    verified: true,
    insured: true,
    experience: "8 years",
    specialties: ["Golden Retrievers", "Long-haired breeds"],
    image: "/pet-grooming-service.png",
    responseTime: "< 1 hour",
    completedJobs: 1250,
  },
  {
    id: 2,
    name: "Downtown Veterinary Clinic",
    owner: "Dr. Michael Chen",
    avatar: "/pet-owner-avatar.png",
    rating: 4.8,
    reviews: 456,
    location: "1.8 miles away",
    services: ["Health Checkups", "Vaccinations", "Emergency Care"],
    price: "$75-150",
    nextAvailable: "Tomorrow 10:00 AM",
    verified: true,
    insured: true,
    experience: "12 years",
    specialties: ["Emergency Care", "Surgery", "Dental"],
    image: "/veterinary-care-service.png",
    responseTime: "< 30 min",
    completedJobs: 2340,
    emergency: true,
  },
  {
    id: 3,
    name: "Happy Tails Training",
    owner: "Lisa Rodriguez",
    avatar: "/pet-owner-avatar.png",
    rating: 4.7,
    reviews: 189,
    location: "3.1 miles away",
    services: ["Obedience Training", "Puppy Classes", "Behavior Modification"],
    price: "$60-120",
    nextAvailable: "This Week",
    verified: true,
    insured: true,
    experience: "6 years",
    specialties: ["Aggressive Dogs", "Puppy Training", "Service Dogs"],
    image: "/pet-training-service.png",
    responseTime: "< 2 hours",
    completedJobs: 890,
  },
  {
    id: 4,
    name: "Cozy Paws Boarding",
    owner: "Tom Wilson",
    avatar: "/pet-owner-avatar.png",
    rating: 4.6,
    reviews: 123,
    location: "4.2 miles away",
    services: ["Overnight Boarding", "Daycare", "Playtime"],
    price: "$35-75/night",
    nextAvailable: "Next Week",
    verified: true,
    insured: true,
    experience: "5 years",
    specialties: ["Small Dogs", "Anxious Pets", "Senior Care"],
    image: "/pet-boarding-service.png",
    responseTime: "< 3 hours",
    completedJobs: 567,
  },
]

export function FeaturedProviders() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif font-bold text-xl text-foreground">Featured Providers</h2>
        <Button variant="ghost" className="text-primary">
          View All Providers →
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {featuredProviders.map((provider) => (
          <Card key={provider.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Provider Header */}
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={provider.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {provider.owner
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-serif font-semibold text-lg text-foreground">{provider.name}</h3>
                      {provider.verified && <Badge className="bg-blue-100 text-blue-800 text-xs">Verified</Badge>}
                      {provider.emergency && (
                        <Badge variant="destructive" className="text-xs animate-pulse">
                          24/7
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">by {provider.owner}</p>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{provider.rating}</span>
                        <span className="text-muted-foreground">({provider.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{provider.location}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                {/* Services */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {provider.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Price Range:</span>
                    <span className="font-medium">{provider.price}</span>
                  </div>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="font-medium">Next Available</p>
                      <p className="text-muted-foreground">{provider.nextAvailable}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="font-medium">Experience</p>
                      <p className="text-muted-foreground">{provider.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <p className="text-sm font-medium mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {provider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <span>{provider.completedJobs} completed jobs</span>
                  <span>Responds in {provider.responseTime}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
