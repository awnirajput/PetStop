"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, Star, Users, ShoppingBag, Calendar } from "lucide-react"

const heroSlides = [
  {
    image: "/happy-golden-retriever.png",
    title: "Your Pet's Health, Our Priority",
    subtitle: "Complete health tracking and veterinary care scheduling",
  },
  {
    image: "/cat-owner-pet-supplies.png",
    title: "Everything Your Pet Needs",
    subtitle: "Premium pet supplies delivered to your doorstep",
  },
  {
    image: "/diverse-pet-owners-park.png",
    title: "Join Our Pet Community",
    subtitle: "Connect with fellow pet lovers and share experiences",
  },
  {
    image: "/placeholder-im01i.png",
    title: "Professional Pet Services",
    subtitle: "Book grooming, training, and boarding services",
  },
]

const stats = [
  { icon: Users, value: "50K+", label: "Happy Pet Owners" },
  { icon: ShoppingBag, value: "10K+", label: "Products Available" },
  { icon: Calendar, value: "25K+", label: "Services Booked" },
  { icon: Star, value: "4.9", label: "Average Rating" },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-accent/10 text-accent-foreground border-accent/20">
                🐾 Trusted by 50,000+ Pet Owners
              </Badge>
              <h1 className="font-serif font-bold text-4xl lg:text-6xl text-foreground leading-tight">THE PET STOP</h1>
              <p className="text-xl lg:text-2xl text-primary font-medium">One stop solution for your pets</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From health tracking to premium supplies, community connections to professional services - everything
                your beloved pet needs in one comprehensive platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-xl">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl bg-transparent">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-serif font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative">
            <Card className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative h-96 lg:h-[500px]">
                {heroSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="font-serif font-bold text-xl mb-2">{slide.title}</h3>
                      <p className="text-white/90">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
