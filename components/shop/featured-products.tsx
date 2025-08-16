import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"

export function FeaturedProducts() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Organic Dog Food",
      brand: "NaturalPet",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 324,
      image: "/premium-dog-food-deal.png",
      badge: "Best Seller",
      badgeColor: "bg-green-500",
    },
    {
      id: 2,
      name: "Interactive Puzzle Toy Set",
      brand: "SmartPlay",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.9,
      reviews: 156,
      image: "/interactive-toy-bundle.png",
      badge: "30% Off",
      badgeColor: "bg-red-500",
    },
    {
      id: 3,
      name: "Complete Health Care Kit",
      brand: "VetCare",
      price: 124.99,
      originalPrice: 149.99,
      rating: 4.7,
      reviews: 89,
      image: "/health-care-kit.png",
      badge: "New Arrival",
      badgeColor: "bg-blue-500",
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-muted-foreground">Hand-picked favorites for your beloved pets</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-3 left-3 ${product.badgeColor} text-white`}>{product.badge}</Badge>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-foreground">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <Button className="w-full flex items-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
