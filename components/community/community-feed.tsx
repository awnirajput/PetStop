"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircle, Share2, MoreHorizontal, Camera, MapPin, Clock, Bookmark } from "lucide-react"

const posts = [
  {
    id: 1,
    author: {
      name: "Sarah Johnson",
      avatar: "/pet-owner-avatar.png",
      verified: true,
      location: "San Francisco, CA",
    },
    timestamp: "2 hours ago",
    content:
      "Just adopted this beautiful golden retriever from the local shelter! Meet Luna - she's already stolen our hearts. Any tips for first-time golden retriever owners?",
    images: ["/happy-golden-retriever.png"],
    likes: 47,
    comments: 12,
    shares: 3,
    tags: ["adoption", "golden-retriever", "first-time-owner"],
    liked: false,
    bookmarked: false,
  },
  {
    id: 2,
    author: {
      name: "Mike Chen",
      avatar: "/pet-owner-avatar.png",
      verified: false,
      location: "Austin, TX",
    },
    timestamp: "4 hours ago",
    content:
      "PSA: There's a lost beagle in the downtown area. Brown and white, wearing a red collar. Please share if you're in the Austin area! 🙏",
    images: [],
    likes: 89,
    comments: 23,
    shares: 45,
    tags: ["lost-pet", "austin", "beagle", "help-needed"],
    urgent: true,
    liked: true,
    bookmarked: true,
  },
  {
    id: 3,
    author: {
      name: "Pet Training Pro",
      avatar: "/pet-owner-avatar.png",
      verified: true,
      location: "Professional Trainer",
    },
    timestamp: "6 hours ago",
    content:
      "Training tip Tuesday! 🎾 Teaching your dog to 'drop it' can be a lifesaver. Start with low-value items and work your way up. Always reward the drop with something even better!",
    images: ["/interactive-dog-toy.png"],
    likes: 156,
    comments: 34,
    shares: 67,
    tags: ["training-tips", "professional-advice", "dog-training"],
    liked: false,
    bookmarked: true,
  },
  {
    id: 4,
    author: {
      name: "Cat Lovers United",
      avatar: "/pet-owner-avatar.png",
      verified: true,
      location: "Community Group",
    },
    timestamp: "8 hours ago",
    content:
      "Reminder: Our monthly cat cafe meetup is this Saturday at 2 PM! Come meet fellow cat enthusiasts and some adorable adoptable kitties. RSVP in comments!",
    images: ["/cat-owner-pet-supplies.png"],
    likes: 78,
    comments: 19,
    shares: 12,
    tags: ["meetup", "cats", "adoption-event", "community"],
    event: true,
    liked: false,
    bookmarked: false,
  },
]

export function CommunityFeed() {
  const [newPost, setNewPost] = useState("")

  const toggleLike = (postId: number) => {
    // Handle like toggle
    console.log("Toggle like for post", postId)
  }

  const toggleBookmark = (postId: number) => {
    // Handle bookmark toggle
    console.log("Toggle bookmark for post", postId)
  }

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/pet-owner-avatar.png" />
              <AvatarFallback>YU</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <Textarea
                placeholder="Share something with the community..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="resize-none"
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Camera className="w-4 h-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    Location
                  </Button>
                </div>
                <Button size="sm" disabled={!newPost.trim()}>
                  Post
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className={`${post.urgent ? "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20" : ""}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {post.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-foreground">{post.author.name}</h4>
                      {post.author.verified && (
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          Verified
                        </Badge>
                      )}
                      {post.urgent && (
                        <Badge variant="destructive" className="text-xs animate-pulse">
                          Urgent
                        </Badge>
                      )}
                      {post.event && <Badge className="text-xs bg-green-100 text-green-800">Event</Badge>}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{post.author.location}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Post Content */}
              <p className="text-foreground leading-relaxed">{post.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Images */}
              {post.images.length > 0 && (
                <div className="grid grid-cols-1 gap-2 rounded-lg overflow-hidden">
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt="Post image"
                      className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  ))}
                </div>
              )}

              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-b border-border py-2">
                <div className="flex items-center space-x-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                  <span>{post.shares} shares</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLike(post.id)}
                    className={post.liked ? "text-red-500" : ""}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${post.liked ? "fill-current" : ""}`} />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleBookmark(post.id)}
                  className={post.bookmarked ? "text-primary" : ""}
                >
                  <Bookmark className={`w-4 h-4 ${post.bookmarked ? "fill-current" : ""}`} />
                </Button>
              </div>

              {/* Comments Preview */}
              {post.comments > 0 && (
                <div className="space-y-3 pt-2 border-t border-border">
                  <div className="flex space-x-3">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/pet-owner-avatar.png" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-muted rounded-lg px-3 py-2">
                        <p className="text-sm">
                          <span className="font-medium">John Doe</span> Congratulations on the new addition! Golden
                          retrievers are amazing family dogs.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                        <button className="hover:text-foreground">Like</button>
                        <button className="hover:text-foreground">Reply</button>
                        <span>1h</span>
                      </div>
                    </div>
                  </div>
                  {post.comments > 1 && (
                    <Button variant="ghost" size="sm" className="text-primary">
                      View all {post.comments} comments
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline">Load More Posts</Button>
      </div>
    </div>
  )
}
