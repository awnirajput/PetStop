import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Cloud, Droplets, Wind } from "lucide-react"

export function WeatherWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sun className="w-5 h-5 text-yellow-500" />
          <span>Weather for Walks</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sun className="w-8 h-8 text-yellow-500" />
              <span className="text-3xl font-bold text-foreground">72°F</span>
            </div>
            <p className="text-sm text-muted-foreground">Sunny and pleasant</p>
            <Badge className="mt-2 bg-green-100 text-green-800">Perfect for walks!</Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span className="text-muted-foreground">Humidity: 45%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wind className="w-4 h-4 text-gray-500" />
              <span className="text-muted-foreground">Wind: 5 mph</span>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <h4 className="font-medium text-foreground mb-2">Today's Forecast</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Morning</span>
                <div className="flex items-center space-x-1">
                  <Sun className="w-4 h-4 text-yellow-500" />
                  <span>68°F</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Afternoon</span>
                <div className="flex items-center space-x-1">
                  <Sun className="w-4 h-4 text-yellow-500" />
                  <span>75°F</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Evening</span>
                <div className="flex items-center space-x-1">
                  <Cloud className="w-4 h-4 text-gray-500" />
                  <span>70°F</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
