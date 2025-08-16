import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"

const meetups = [
  {
    id: 1,
    title: "Dog Park Social Hour",
    date: "Tomorrow",
    time: "3:00 PM",
    location: "Golden Gate Park",
    attendees: 23,
    maxAttendees: 30,
    organizer: "SF Dog Lovers",
    image: "/diverse-pet-owners-park.png",
    rsvp: false,
  },
  {
    id: 2,
    title: "Cat Cafe Meetup",
    date: "Saturday",
    time: "2:00 PM",
    location: "Whiskers Cat Cafe",
    attendees: 15,
    maxAttendees: 20,
    organizer: "Cat Lovers United",
    image: "/cat-owner-pet-supplies.png",
    rsvp: true,
  },
  {
    id: 3,
    title: "Puppy Training Workshop",
    date: "Sunday",
    time: "10:00 AM",
    location: "Community Center",
    attendees: 8,
    maxAttendees: 12,
    organizer: "Pet Training Pro",
    image: "/interactive-dog-toy.png",
    rsvp: false,
  },
]

export function LocalMeetups() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Local Meetups</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {meetups.map((meetup) => (
          <div key={meetup.id} className="p-3 rounded-lg border border-border hover:bg-muted/30 transition-colors">
            <div className="flex items-start space-x-3">
              <img
                src={meetup.image || "/placeholder.svg"}
                alt={meetup.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-sm text-foreground">{meetup.title}</h4>
                  {meetup.rsvp && <Badge className="text-xs bg-green-100 text-green-800">RSVP'd</Badge>}
                </div>

                <div className="space-y-1 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{meetup.date}</span>
                    <Clock className="w-3 h-3 ml-2" />
                    <span>{meetup.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{meetup.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>
                      {meetup.attendees}/{meetup.maxAttendees} attending
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">by {meetup.organizer}</span>
                  <Button variant="ghost" size="sm" className="text-xs">
                    {meetup.rsvp ? "View Details" : "RSVP"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button variant="outline" className="w-full bg-transparent" size="sm">
          <MapPin className="w-4 h-4 mr-2" />
          Find More Meetups
        </Button>
      </CardContent>
    </Card>
  )
}
