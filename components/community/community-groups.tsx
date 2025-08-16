import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, Plus } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Golden Retriever Owners SF",
    members: 1234,
    location: "San Francisco, CA",
    image: "/happy-golden-retriever.png",
    description: "Local golden retriever enthusiasts",
    joined: true,
    activity: "Very Active",
  },
  {
    id: 2,
    name: "Cat Rescue Network",
    members: 2567,
    location: "Bay Area",
    image: "/cat-owner-pet-supplies.png",
    description: "Helping cats find forever homes",
    joined: false,
    activity: "Active",
  },
  {
    id: 3,
    name: "Puppy Training 101",
    members: 890,
    location: "Online",
    image: "/diverse-pet-owners-park.png",
    description: "First-time puppy owner support",
    joined: true,
    activity: "Moderate",
  },
  {
    id: 4,
    name: "Pet Photography Club",
    members: 456,
    location: "Worldwide",
    image: "/pet-owner-avatar.png",
    description: "Share your best pet photos",
    joined: false,
    activity: "Active",
  },
]

export function CommunityGroups() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-primary" />
            <span>Your Groups</span>
          </div>
          <Button variant="ghost" size="sm">
            <Plus className="w-4 h-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {groups.map((group) => (
          <div key={group.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <Avatar className="h-12 w-12">
              <AvatarImage src={group.image || "/placeholder.svg"} />
              <AvatarFallback>
                {group.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-sm text-foreground truncate">{group.name}</h4>
                {group.joined && (
                  <Badge variant="secondary" className="text-xs">
                    Joined
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-2">{group.description}</p>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>{group.members.toLocaleString()}</span>
                <span>•</span>
                <MapPin className="w-3 h-3" />
                <span>{group.location}</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    group.activity === "Very Active"
                      ? "bg-green-100 text-green-800"
                      : group.activity === "Active"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {group.activity}
                </Badge>
                <Button variant="ghost" size="sm" className="text-xs">
                  {group.joined ? "View" : "Join"}
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent" size="sm">
          Discover More Groups
        </Button>
      </CardContent>
    </Card>
  )
}
