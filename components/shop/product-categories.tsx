import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProductCategories() {
  const categories = [
    {
      name: "Dog Food",
      image: "/premium-dog-food.png",
      count: 156,
      color: "bg-blue-500",
    },
    {
      name: "Cat Food",
      image: "/premium-cat-food.png",
      count: 89,
      color: "bg-purple-500",
    },
    {
      name: "Toys & Play",
      image: "/interactive-pet-toys.png",
      count: 234,
      color: "bg-green-500",
    },
    {
      name: "Health Care",
      image: "/pet-health-supplements.png",
      count: 67,
      color: "bg-red-500",
    },
    {
      name: "Accessories",
      image: "/pet-accessories-collection.png",
      count: 145,
      color: "bg-orange-500",
    },
    {
      name: "Grooming",
      image: "/pet-grooming-supplies.png",
      count: 78,
      color: "bg-pink-500",
    },
  ]

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-muted-foreground">Find exactly what your pet needs</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-4 text-center">
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full mx-auto flex items-center justify-center mb-2`}
                  >
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  <Badge className="absolute -top-1 -right-1 text-xs">{category.count}</Badge>
                </div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
