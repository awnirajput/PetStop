import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageCircle, Brain, Heart, Calendar, Zap, Star, ArrowRight } from "lucide-react"

export default function AIAssistantPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Breadcrumb items={[{ label: "AI Assistant" }]} />

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
            <Bot className="w-10 h-10 text-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-foreground">AI Pet Assistant</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get instant, personalized advice for your pet's health, behavior, and care needs with our advanced AI
          assistant.
        </p>
      </div>

      {/* AI Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle>Health Analysis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              AI-powered health monitoring and symptom analysis for early detection of potential issues.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              <ArrowRight className="w-4 h-4 mr-2" />
              Start Health Check
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle>Behavior Insights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Understand your pet's behavior patterns and get personalized training recommendations.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              <ArrowRight className="w-4 h-4 mr-2" />
              Analyze Behavior
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle>Smart Scheduling</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Automated reminders for feeding, medication, grooming, and vet appointments.
            </p>
            <Button variant="outline" className="w-full bg-transparent">
              <ArrowRight className="w-4 h-4 mr-2" />
              Set Reminders
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Chat Interface */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <MessageCircle className="w-6 h-6 text-primary" />
              <CardTitle>Chat with AI Assistant</CardTitle>
            </div>
            <Badge variant="secondary">
              <Zap className="w-3 h-3 mr-1" />
              Online
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/30 rounded-lg p-4 space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">AI Assistant</p>
                <p className="text-muted-foreground">
                  Hello! I'm here to help with all your pet care questions. What would you like to know about your furry
                  friend today?
                </p>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask about your pet's health, behavior, or care..."
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Send</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              My dog is limping
            </Button>
            <Button variant="outline" size="sm">
              Cat won't eat
            </Button>
            <Button variant="outline" size="sm">
              Training tips
            </Button>
            <Button variant="outline" size="sm">
              Vaccination schedule
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Success Stories */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Trusted by Pet Parents</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Sarah M.", text: "The AI caught my cat's early kidney issues before our vet visit!", rating: 5 },
            { name: "Mike R.", text: "Behavior insights helped train my rescue dog in just 2 weeks.", rating: 5 },
            { name: "Lisa K.", text: "Smart reminders ensure I never miss my pet's medication again.", rating: 5 },
          ].map((review, index) => (
            <Card key={index} className="text-left">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-3">"{review.text}"</p>
                <p className="font-medium">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
