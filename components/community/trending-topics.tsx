import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Hash } from "lucide-react"

const trendingTopics = [
  { tag: "golden-retriever-tips", posts: 234, trend: "up" },
  { tag: "lost-pets-austin", posts: 89, trend: "up", urgent: true },
  { tag: "cat-behavior", posts: 156, trend: "up" },
  { tag: "puppy-training", posts: 178, trend: "stable" },
  { tag: "pet-nutrition", posts: 145, trend: "up" },
  { tag: "adoption-success", posts: 98, trend: "up" },
  { tag: "vet-recommendations", posts: 67, trend: "down" },
  { tag: "pet-photography", posts: 123, trend: "up" },
]

export function TrendingTopics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span>Trending Topics</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingTopics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/30 cursor-pointer transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Hash className="w-4 h-4 text-muted-foreground" />
              <div>
                <p className="font-medium text-sm text-foreground">#{topic.tag}</p>
                <p className="text-xs text-muted-foreground">{topic.posts} posts</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {topic.urgent && (
                <Badge variant="destructive" className="text-xs">
                  Urgent
                </Badge>
              )}
              <div
                className={`w-2 h-2 rounded-full ${
                  topic.trend === "up" ? "bg-green-500" : topic.trend === "down" ? "bg-red-500" : "bg-gray-400"
                }`}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
