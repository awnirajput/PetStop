import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp } from "lucide-react"

const recentReviews = [
  {
    id: 1,
    reviewer: "Jennifer Smith",
    avatar: "/pet-owner-avatar.png",
    rating: 5,
    service: "Pet Grooming",
    provider: "Sarah's Pet Grooming",
    date: "2 days ago",
    review: "Amazing service! Sarah did a fantastic job with my golden retriever. Very professional and caring.",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    reviewer: "Mike Johnson",
    avatar: "/pet-owner-avatar.png",
    rating: 5,
    service: "Veterinary Care",
    provider: "Downtown Veterinary",
    date: "1 week ago",
    review: "Dr. Chen was excellent with my anxious cat. Very thorough examination and great bedside manner.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    reviewer: "Lisa Chen",
    avatar: "/pet-owner-avatar.png",
    rating: 4,
    service: "Dog Training",
    provider: "Happy Tails Training",
    date: "2 weeks ago",
    review: "Great progress with my puppy's training. Lisa is patient and uses positive reinforcement methods.",
    helpful: 15,
    verified: true,
  },
]

export function ServiceReviews() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span>Recent Reviews</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentReviews.map((review) => (
          <div key={review.id} className="p-3 rounded-lg bg-muted/30">
            <div className="space-y-3">
              {/* Reviewer Info */}
              <div className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={review.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {review.reviewer
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h5 className="font-medium text-sm text-foreground">{review.reviewer}</h5>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>

              {/* Service Info */}
              <div className="text-xs">
                <Badge variant="outline" className="mr-2">
                  {review.service}
                </Badge>
                <span className="text-muted-foreground">at {review.provider}</span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-foreground leading-relaxed">{review.review}</p>

              {/* Helpful */}
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <ThumbsUp className="w-3 h-3" />
                <span>{review.helpful} found this helpful</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
