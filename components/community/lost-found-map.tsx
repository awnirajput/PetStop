"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Layers, Maximize2 } from "lucide-react"

export function LostFoundMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Live Map</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Layers className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="ghost" size="sm">
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
          {/* Mock Map Interface */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Interactive map showing lost and found pets in your area</p>
            </div>
          </div>

          {/* Mock Map Markers */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-red-500 text-white animate-pulse">Lost: Beagle</Badge>
          </div>
          <div className="absolute top-12 right-8">
            <Badge className="bg-green-500 text-white">Found: Cat</Badge>
          </div>
          <div className="absolute bottom-8 left-12">
            <Badge className="bg-orange-500 text-white">Lost: Golden Retriever</Badge>
          </div>

          {/* Map Legend */}
          <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg p-3 space-y-2">
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Lost Pets</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Found Pets</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Reunited</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
          <span>Showing pets within 25 miles of your location</span>
          <Button variant="ghost" size="sm" className="text-primary">
            Expand Search Area
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
