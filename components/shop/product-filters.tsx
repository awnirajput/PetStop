"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star, ChevronDown, ChevronUp } from "lucide-react"

const categories = [
  { name: "Food & Treats", count: 245, subcategories: ["Dry Food", "Wet Food", "Treats", "Supplements"] },
  { name: "Toys & Enrichment", count: 189, subcategories: ["Interactive Toys", "Chew Toys", "Balls", "Puzzles"] },
  { name: "Health & Wellness", count: 156, subcategories: ["Medications", "Vitamins", "First Aid", "Dental Care"] },
  { name: "Grooming", count: 134, subcategories: ["Shampoos", "Brushes", "Nail Care", "Dental"] },
  { name: "Accessories", count: 98, subcategories: ["Collars", "Leashes", "Beds", "Carriers"] },
]

const brands = [
  { name: "Royal Canin", count: 45 },
  { name: "Hill's Science Diet", count: 38 },
  { name: "Blue Buffalo", count: 32 },
  { name: "Purina Pro Plan", count: 29 },
  { name: "KONG", count: 24 },
  { name: "Wellness", count: 21 },
]

const ratings = [
  { stars: 5, count: 234 },
  { stars: 4, count: 189 },
  { stars: 3, count: 67 },
  { stars: 2, count: 23 },
  { stars: 1, count: 8 },
]

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 200])
  const [expandedSections, setExpandedSections] = useState<string[]>(["categories", "price", "brands"])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Filters</span>
          <Button variant="ghost" size="sm" className="text-xs">
            Clear All
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto font-medium"
            onClick={() => toggleSection("categories")}
          >
            Categories
            {expandedSections.includes("categories") ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          {expandedSections.includes("categories") && (
            <div className="mt-3 space-y-3">
              {categories.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={`category-${index}`} />
                      <label htmlFor={`category-${index}`} className="text-sm font-medium cursor-pointer">
                        {category.name}
                      </label>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="flex items-center space-x-2">
                        <Checkbox id={`sub-${index}-${subIndex}`} />
                        <label
                          htmlFor={`sub-${index}-${subIndex}`}
                          className="text-xs text-muted-foreground cursor-pointer"
                        >
                          {sub}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Price Range */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto font-medium"
            onClick={() => toggleSection("price")}
          >
            Price Range
            {expandedSections.includes("price") ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          {expandedSections.includes("price") && (
            <div className="mt-3 space-y-4">
              <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={5} className="w-full" />
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}+</span>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* Brands */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto font-medium"
            onClick={() => toggleSection("brands")}
          >
            Brands
            {expandedSections.includes("brands") ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          {expandedSections.includes("brands") && (
            <div className="mt-3 space-y-2">
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`brand-${index}`} />
                    <label htmlFor={`brand-${index}`} className="text-sm cursor-pointer">
                      {brand.name}
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {brand.count}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Customer Rating */}
        <div>
          <Button
            variant="ghost"
            className="w-full justify-between p-0 h-auto font-medium"
            onClick={() => toggleSection("rating")}
          >
            Customer Rating
            {expandedSections.includes("rating") ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          {expandedSections.includes("rating") && (
            <div className="mt-3 space-y-2">
              {ratings.map((rating, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id={`rating-${index}`} />
                    <label htmlFor={`rating-${index}`} className="flex items-center space-x-1 cursor-pointer">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < rating.stars ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm">& up</span>
                    </label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {rating.count}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Special Offers */}
        <div className="space-y-2">
          <h4 className="font-medium">Special Offers</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="free-shipping" />
              <label htmlFor="free-shipping" className="text-sm cursor-pointer">
                Free Shipping
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="on-sale" />
              <label htmlFor="on-sale" className="text-sm cursor-pointer">
                On Sale
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="subscription" />
              <label htmlFor="subscription" className="text-sm cursor-pointer">
                Subscription Available
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
