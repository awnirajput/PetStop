import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye, Truck, Repeat } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Royal Canin Adult Dog Food",
    brand: "Royal Canin",
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 234,
    image: "/dog-food-premium.png",
    badge: "Best Seller",
    freeShipping: true,
    subscription: true,
    category: "Food & Treats",
    petType: "Dogs",
  },
  {
    id: 2,
    name: "Interactive Puzzle Toy",
    brand: "KONG",
    price: 24.99,
    rating: 4.6,
    reviews: 189,
    image: "/interactive-dog-toy.png",
    badge: "New",
    freeShipping: false,
    subscription: false,
    category: "Toys & Enrichment",
    petType: "Dogs",
  },
  {
    id: 3,
    name: "Premium Cat Litter",
    brand: "World's Best",
    price: 34.99,
    rating: 4.7,
    reviews: 156,
    image: "/premium-cat-litter.png",
    badge: "Eco-Friendly",
    freeShipping: true,
    subscription: true,
    category: "Health & Wellness",
    petType: "Cats",
  },
  {
    id: 4,
    name: "Orthopedic Dog Bed",
    brand: "PetFusion",
    price: 129.99,
    originalPrice: 149.99,
    rating: 4.9,
    reviews: 298,
    image: "/orthopedic-dog-bed.png",
    badge: "Sale",
    freeShipping: true,
    subscription: false,
    category: "Accessories",
    petType: "Dogs",
  },
  {
    id: 5,
    name: "Natural Dental Chews",
    brand: "Greenies",
    price: 19.99,
    rating: 4.5,
    reviews: 167,
    image: "/dental-chews-dogs.png",
    freeShipping: false,
    subscription: true,
    category: "Health & Wellness",
    petType: "Dogs",
  },
  {
    id: 6,
    name: "Automatic Water Fountain",
    brand: "PetSafe",
    price: 79.99,
    rating: 4.4,
    reviews: 203,
    image: "/automatic-water-fountain.png",
    badge: "Popular",
    freeShipping: true,
    subscription: false,
    category: "Accessories",
    petType: "All",
  },
]

export function ProductGrid() {
  return (
    <div className="space-y-4">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing 1-6 of 1,247 results for "dog food"</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">View:</span>
          <Button variant="outline" size="sm">
            24 per page
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="relative aspect-square bg-muted/30">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3">
                  {product.badge && (
                    <Badge
                      className={`${
                        product.badge === "Sale"
                          ? "bg-red-100 text-red-800"
                          : product.badge === "New"
                            ? "bg-blue-100 text-blue-800"
                            : product.badge === "Best Seller"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                      }`}
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.brand}</p>
                  <h3 className="font-medium text-foreground line-clamp-2 hover:text-primary cursor-pointer">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                  {product.originalPrice && (
                    <Badge variant="destructive" className="text-xs">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.freeShipping && (
                    <Badge variant="outline" className="text-xs">
                      <Truck className="w-3 h-3 mr-1" />
                      Free Shipping
                    </Badge>
                  )}
                  {product.subscription && (
                    <Badge variant="outline" className="text-xs">
                      <Repeat className="w-3 h-3 mr-1" />
                      Subscribe & Save
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button className="flex-1" size="sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 pt-8">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <span className="text-muted-foreground">...</span>
        <Button variant="outline" size="sm">
          52
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
