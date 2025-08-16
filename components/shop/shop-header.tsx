"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Grid, List, ShoppingCart, Heart, Truck } from "lucide-react"

export function ShopHeader() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground">Pet Store</h1>
          <p className="text-muted-foreground mt-1">Premium supplies for your beloved pets</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Badge className="bg-green-100 text-green-800">
            <Truck className="w-3 h-3 mr-1" />
            Free shipping over $50
          </Badge>
          <Button variant="outline" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Wishlist (3)
          </Button>
          <Button size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart (2)
          </Button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for products, brands, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Quick Filters */}
        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Pet Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pets</SelectItem>
              <SelectItem value="dogs">Dogs</SelectItem>
              <SelectItem value="cats">Cats</SelectItem>
              <SelectItem value="birds">Birds</SelectItem>
              <SelectItem value="fish">Fish</SelectItem>
              <SelectItem value="small-pets">Small Pets</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="relevance">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Customer Rating</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-1 border border-border rounded-lg p-1">
            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")}>
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4" />
            </Button>
          </div>

          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">Active filters:</span>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Dogs ×
        </Badge>
        <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80">
          Food & Treats ×
        </Badge>
        <Button variant="ghost" size="sm" className="text-xs">
          Clear all
        </Button>
      </div>
    </div>
  )
}
