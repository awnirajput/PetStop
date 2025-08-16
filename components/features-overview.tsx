import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Users, Calendar, Brain, Award, Shield, Smartphone } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Health & Wellness Tracking",
    description:
      "Complete health monitoring with vaccination schedules, medical records, and AI-powered health insights.",
    badge: "Smart Tracking",
    color: "text-red-500",
  },
  {
    icon: ShoppingCart,
    title: "Premium Pet Store",
    description:
      "Curated selection of high-quality pet supplies with personalized recommendations and subscription options.",
    badge: "E-Commerce",
    color: "text-blue-500",
  },
  {
    icon: Users,
    title: "Pet Community",
    description: "Connect with fellow pet owners, share experiences, and get advice from our vibrant community.",
    badge: "Social",
    color: "text-green-500",
  },
  {
    icon: Calendar,
    title: "Professional Services",
    description: "Book grooming, training, veterinary, and boarding services with trusted local professionals.",
    badge: "Services",
    color: "text-purple-500",
  },
  {
    icon: Brain,
    title: "AI Pet Assistant",
    description: "24/7 AI-powered support for pet care questions, health concerns, and personalized recommendations.",
    badge: "AI Powered",
    color: "text-orange-500",
  },
  {
    icon: Award,
    title: "Breeder Tools",
    description: "Professional pedigree tracking, litter management, and client communication tools for breeders.",
    badge: "Professional",
    color: "text-indigo-500",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Your pet's data is protected with enterprise-grade security",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Full-featured mobile app for pet care on the go",
  },
]

export function FeaturesOverview() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Complete Pet Care Platform</Badge>
          <h2 className="font-serif font-bold text-3xl lg:text-5xl text-foreground mb-6">Everything Your Pet Needs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From daily care to professional services, our comprehensive platform brings together all aspects of pet
            ownership in one beautiful, easy-to-use interface.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-background shadow-sm ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <h3 className="font-serif font-semibold text-lg text-foreground">{feature.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-primary/5 border-primary/10">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-foreground mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
