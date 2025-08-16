import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Activity, Brain, Users } from "lucide-react"

const recommendations = [
  {
    id: 1,
    title: "Interactive Puzzle Toy",
    description: "Keep Whiskers mentally stimulated",
    reason: "Based on breed intelligence",
    type: "mental",
    icon: Brain,
    color: "text-purple-500",
    badge: "Mental Stimulation",
  },
  {
    id: 2,
    title: "Agility Training",
    description: "Perfect for Buddy's energy level",
    reason: "High activity breed",
    type: "physical",
    icon: Activity,
    color: "text-green-500",
    badge: "Exercise",
  },
  {
    id: 3,
    title: "Socialization Playdate",
    description: "Charlie needs more social interaction",
    reason: "Young puppy development",
    type: "social",
    icon: Users,
    color: "text-blue-500",
    badge: "Social",
  },
]

export function RecommendedActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          <span>AI Recommendations</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((rec) => (
          <div key={rec.id} className="p-3 rounded-lg bg-muted/30 border border-border">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg bg-background ${rec.color}`}>
                <rec.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-foreground">{rec.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {rec.badge}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{rec.description}</p>
                <p className="text-xs text-muted-foreground italic">{rec.reason}</p>
                <Button size="sm" variant="outline" className="mt-2 bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent">
          <Sparkles className="w-4 h-4 mr-2" />
          Get More Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}
