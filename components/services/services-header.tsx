import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Calendar, Star, Clock, Shield } from "lucide-react"

export function ServicesHeader() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground">Pet Services</h1>
          <p className="text-muted-foreground mt-1">Book trusted professionals for your pet's needs</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Badge className="bg-green-100 text-green-800">
            <Shield className="w-3 h-3 mr-1" />
            Insured Providers
          </Badge>
          <Button>
            <Calendar className="w-4 h-4 mr-2" />
            My Bookings
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search services or providers..." className="pl-10" />
        </div>

        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Service Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Services</SelectItem>
            <SelectItem value="grooming">Grooming</SelectItem>
            <SelectItem value="veterinary">Veterinary</SelectItem>
            <SelectItem value="training">Training</SelectItem>
            <SelectItem value="boarding">Boarding</SelectItem>
            <SelectItem value="walking">Dog Walking</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Location" className="pl-10" />
        </div>

        <Select defaultValue="anytime">
          <SelectTrigger>
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="anytime">Anytime</SelectItem>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="tomorrow">Tomorrow</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="next-week">Next Week</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline">Advanced Filters</Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <div className="font-serif font-bold text-xl">2,500+</div>
          <div className="text-sm text-muted-foreground">Verified Providers</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Star className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="font-serif font-bold text-xl">4.9</div>
          <div className="text-sm text-muted-foreground">Average Rating</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-green-500" />
          </div>
          <div className="font-serif font-bold text-xl">24h</div>
          <div className="text-sm text-muted-foreground">Average Response</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Shield className="w-5 h-5 text-blue-500" />
          </div>
          <div className="font-serif font-bold text-xl">100%</div>
          <div className="text-sm text-muted-foreground">Insured & Bonded</div>
        </div>
      </div>
    </div>
  )
}
