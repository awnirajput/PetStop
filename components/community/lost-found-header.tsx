import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Plus, MapPin, Clock, Heart } from "lucide-react"

export function LostFoundHeader() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground flex items-center space-x-2">
            <AlertTriangle className="w-8 h-8 text-orange-500" />
            <span>Lost & Found Pets</span>
          </h1>
          <p className="text-muted-foreground mt-1">Help reunite pets with their families</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button
            variant="outline"
            size="sm"
            className="bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            Report Lost Pet
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Report Found Pet
          </Button>
        </div>
      </div>

      {/* Success Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-5 h-5 text-green-600" />
          </div>
          <div className="font-serif font-bold text-xl text-green-700">234</div>
          <div className="text-sm text-green-600">Successful Reunions</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
          </div>
          <div className="font-serif font-bold text-xl text-orange-700">12</div>
          <div className="text-sm text-orange-600">Currently Lost</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div className="font-serif font-bold text-xl text-blue-700">8</div>
          <div className="text-sm text-blue-600">Found Pets</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-purple-600" />
          </div>
          <div className="font-serif font-bold text-xl text-purple-700">2.3</div>
          <div className="text-sm text-purple-600">Avg Days to Reunion</div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-800">Active Alert: Missing Beagle in Downtown Austin</h3>
            <p className="text-sm text-red-700 mt-1">
              Brown and white beagle, red collar, last seen near 6th Street. Please share if you're in the area.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <Badge className="bg-red-100 text-red-800">High Priority</Badge>
              <Button variant="ghost" size="sm" className="text-red-700 hover:text-red-800">
                View Details →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
