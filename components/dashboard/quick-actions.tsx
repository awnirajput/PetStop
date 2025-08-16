import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Stethoscope, ShoppingCart, Camera, MapPin, Phone } from "lucide-react"

export function QuickActions() {
  const actions = [
    { icon: Calendar, label: "Book Appointment", color: "bg-blue-500 hover:bg-blue-600" },
    { icon: Stethoscope, label: "Health Checkup", color: "bg-green-500 hover:bg-green-600" },
    { icon: ShoppingCart, label: "Order Supplies", color: "bg-purple-500 hover:bg-purple-600" },
    { icon: Camera, label: "Add Photo", color: "bg-pink-500 hover:bg-pink-600" },
    { icon: MapPin, label: "Find Nearby", color: "bg-orange-500 hover:bg-orange-600" },
    { icon: Phone, label: "Emergency", color: "bg-red-500 hover:bg-red-600" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <Button
                key={action.label}
                variant="outline"
                className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-muted bg-transparent"
              >
                <div className={`p-2 rounded-lg ${action.color} text-white`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-center">{action.label}</span>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
