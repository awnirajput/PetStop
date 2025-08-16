import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Flame, Gift } from "lucide-react"

const featuredDeals = [
  {
    id: 1,
    title: "Flash Sale: 40% Off Premium Dog Food",
    description: "Limited time offer on top-rated brands",
    image: "/flash-sale-dog-food.png",
    discount: "40% OFF",
    timeLeft: "2h 34m",
    urgent: true,
  },
  {
    id: 2,
    title: "Buy 2 Get 1 Free Cat Toys",
    description: "Mix and match any cat toys",
    image: "/cat-toys-deal.png",
    discount: "BOGO",
    timeLeft: "3 days",
    urgent: false,
  },
  {
    id: 3,
    title: "Free Shipping Weekend",
    description: "No minimum purchase required",
    image: "/free-shipping-promo.png",
    discount: "FREE SHIP",
    timeLeft: "2 days",
    urgent: false,
  },
]

export function FeaturedDeals() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Flame className="w-5 h-5 text-orange-500" />
        <h2 className="font-serif font-bold text-xl text-foreground">Featured Deals</h2>
        <Badge className="bg-red-100 text-red-800">Limited Time</Badge>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {featuredDeals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={deal.image || "/placeholder.svg"}
                  alt={deal.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <Badge
                    className={`${
                      deal.urgent ? "bg-red-500 text-white animate-pulse" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {deal.discount}
                  </Badge>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge variant="outline" className="bg-white/90">
                    <Clock className="w-3 h-3 mr-1" />
                    {deal.timeLeft}
                  </Badge>
                </div>
              </div>

              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground">{deal.title}</h3>
                  <p className="text-sm text-muted-foreground">{deal.description}</p>
                </div>

                <Button className="w-full" size="sm">
                  <Gift className="w-4 h-4 mr-2" />
                  Shop Deal
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
