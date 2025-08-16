import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scissors, Stethoscope, GraduationCap, Home, Footprints, Heart, Camera, Utensils } from "lucide-react"

const serviceCategories = [
  {
    id: "grooming",
    name: "Pet Grooming",
    description: "Professional grooming services for all breeds",
    icon: Scissors,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    providers: 456,
    avgPrice: "$45-85",
    popular: true,
    image: "/pet-grooming-service.png",
  },
  {
    id: "veterinary",
    name: "Veterinary Care",
    description: "Licensed veterinarians for health checkups",
    icon: Stethoscope,
    color: "text-red-500",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    providers: 234,
    avgPrice: "$75-150",
    urgent: true,
    image: "/veterinary-care-service.png",
  },
  {
    id: "training",
    name: "Pet Training",
    description: "Certified trainers for obedience and behavior",
    icon: GraduationCap,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    providers: 189,
    avgPrice: "$60-120",
    popular: false,
    image: "/pet-training-service.png",
  },
  {
    id: "boarding",
    name: "Pet Boarding",
    description: "Safe and comfortable overnight care",
    icon: Home,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    providers: 123,
    avgPrice: "$35-75/night",
    popular: false,
    image: "/pet-boarding-service.png",
  },
  {
    id: "walking",
    name: "Dog Walking",
    description: "Daily exercise and outdoor activities",
    icon: Footprints,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    providers: 567,
    avgPrice: "$20-40",
    popular: true,
    image: "/dog-walking-service.png",
  },
  {
    id: "sitting",
    name: "Pet Sitting",
    description: "In-home care while you're away",
    icon: Heart,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    providers: 345,
    avgPrice: "$25-50/day",
    popular: false,
    image: "/pet-sitting-service.png",
  },
  {
    id: "photography",
    name: "Pet Photography",
    description: "Professional photos of your beloved pets",
    icon: Camera,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    providers: 78,
    avgPrice: "$100-250",
    popular: false,
    image: "/pet-photography-service.png",
  },
  {
    id: "nutrition",
    name: "Pet Nutrition",
    description: "Dietary consultation and meal planning",
    icon: Utensils,
    color: "text-teal-500",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    providers: 67,
    avgPrice: "$50-100",
    popular: false,
    image: "/pet-nutrition-service.png",
  },
]

export function ServiceCategories() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif font-bold text-xl text-foreground">Service Categories</h2>
        <Button variant="ghost" className="text-primary">
          View All Services →
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceCategories.map((category) => (
          <Card
            key={category.id}
            className={`group cursor-pointer hover:shadow-lg transition-all duration-300 ${category.borderColor} ${category.bgColor}`}
          >
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Icon and Badges */}
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-xl bg-white shadow-sm ${category.color}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    {category.popular && <Badge className="bg-yellow-100 text-yellow-800 text-xs">Popular</Badge>}
                    {category.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        24/7
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Service Info */}
                <div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{category.description}</p>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Providers:</span>
                      <span className="font-medium">{category.providers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Price Range:</span>
                      <span className="font-medium">{category.avgPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
