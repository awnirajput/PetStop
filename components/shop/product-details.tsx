"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  Repeat,
  Award,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react"

interface ProductDetailsProps {
  productId: string
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")

  // Mock product data
  const product = {
    id: productId,
    name: "Royal Canin Adult Dog Food - Premium Nutrition",
    brand: "Royal Canin",
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.8,
    reviews: 234,
    inStock: true,
    stockCount: 15,
    images: [
      "/dog-food-premium.png",
      "/dog-food-ingredients.png",
      "/dog-food-nutrition.png",
      "/dog-food-packaging.png",
    ],
    sizes: [
      { name: "15 lbs", price: 89.99, inStock: true },
      { name: "30 lbs", price: 159.99, inStock: true },
      { name: "50 lbs", price: 249.99, inStock: false },
    ],
    features: [
      "Premium quality ingredients",
      "Balanced nutrition for adult dogs",
      "Supports digestive health",
      "Made in USA",
      "Veterinarian recommended",
    ],
    description: `This premium adult dog food is specially formulated to meet the nutritional needs of adult dogs. 
    Made with high-quality ingredients and balanced nutrition to support your dog's overall health and wellbeing.`,
    ingredients: "Chicken, rice, corn, chicken fat, natural flavors, vitamins, minerals...",
    nutritionFacts: {
      protein: "26%",
      fat: "16%",
      fiber: "4%",
      moisture: "10%",
    },
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Product Images */}
      <div className="space-y-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <img
                src={product.images[currentImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <div className="absolute top-4 left-4">
                <Badge className="bg-red-100 text-red-800">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                currentImage === index ? "border-primary" : "border-border"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${product.name} ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">{product.brand}</p>
          <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mt-1">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-4 mt-3">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="font-medium ml-2">{product.rating}</span>
            </div>
            <span className="text-muted-foreground">({product.reviews} reviews)</span>
            <Button variant="link" className="p-0 h-auto text-primary">
              Write a review
            </Button>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold text-foreground">${product.price}</span>
          <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
          <Badge variant="destructive">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </Badge>
        </div>

        {/* Stock Status */}
        <div className="flex items-center space-x-2">
          {product.inStock ? (
            <>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-600 font-medium">In Stock</span>
              <span className="text-muted-foreground">({product.stockCount} left)</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-red-600 font-medium">Out of Stock</span>
            </>
          )}
        </div>

        {/* Size Selection */}
        <div className="space-y-3">
          <h3 className="font-medium">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {product.sizes.map((size, index) => (
              <Button
                key={index}
                variant={selectedSize === size.name ? "default" : "outline"}
                className="flex flex-col h-auto py-3"
                onClick={() => setSelectedSize(size.name)}
                disabled={!size.inStock}
              >
                <span className="font-medium">{size.name}</span>
                <span className="text-xs">${size.price}</span>
                {!size.inStock && <span className="text-xs text-red-500">Out of Stock</span>}
              </Button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="space-y-3">
          <h3 className="font-medium">Quantity</h3>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
              disabled={quantity >= product.stockCount}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full" size="lg" disabled={!product.inStock || !selectedSize}>
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart - ${(product.price * quantity).toFixed(2)}
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="lg">
              <Heart className="w-4 h-4 mr-2" />
              Add to Wishlist
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-primary" />
            <span className="text-sm">Free shipping over $50</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm">30-day return policy</span>
          </div>
          <div className="flex items-center space-x-2">
            <Repeat className="w-4 h-4 text-primary" />
            <span className="text-sm">Subscribe & save 15%</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm">Vet recommended</span>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            <div>
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="ingredients">
            <p className="text-muted-foreground">{product.ingredients}</p>
          </TabsContent>
          <TabsContent value="nutrition">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.nutritionFacts).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="capitalize">{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
