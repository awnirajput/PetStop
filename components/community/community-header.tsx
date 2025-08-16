"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Search, Plus, MapPin, AlertTriangle, Heart, MessageCircle, Camera, Filter } from "lucide-react"

export function CommunityHeader() {
  const [activeTab, setActiveTab] = useState("feed")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif font-bold text-2xl lg:text-3xl text-foreground">Pet Community</h1>
          <p className="text-muted-foreground mt-1">Connect with fellow pet lovers and share experiences</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            <MapPin className="w-4 h-4 mr-2" />
            Find Local Groups
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Create Post
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input placeholder="Search posts, groups, or topics..." className="pl-10 pr-20" />
        <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="feed" className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Feed</span>
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Groups</span>
          </TabsTrigger>
          <TabsTrigger value="meetups" className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Meetups</span>
          </TabsTrigger>
          <TabsTrigger value="lost-found" className="flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4" />
            <span className="hidden sm:inline">Lost & Found</span>
          </TabsTrigger>
          <TabsTrigger value="photos" className="flex items-center space-x-2">
            <Camera className="w-4 h-4" />
            <span className="hidden sm:inline">Photos</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <div className="font-serif font-bold text-xl">12.5K</div>
          <div className="text-sm text-muted-foreground">Members</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <MessageCircle className="w-5 h-5 text-blue-500" />
          </div>
          <div className="font-serif font-bold text-xl">3.2K</div>
          <div className="text-sm text-muted-foreground">Posts Today</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="w-5 h-5 text-green-500" />
          </div>
          <div className="font-serif font-bold text-xl">45</div>
          <div className="text-sm text-muted-foreground">Local Groups</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <div className="font-serif font-bold text-xl">89%</div>
          <div className="text-sm text-muted-foreground">Happy Reunions</div>
        </div>
      </div>
    </div>
  )
}
