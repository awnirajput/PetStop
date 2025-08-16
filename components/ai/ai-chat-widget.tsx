"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Send, Minimize2, Maximize2, Bot, User, Sparkles, Heart, Activity, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  type: "user" | "ai"
  content: string
  timestamp: Date
  suggestions?: string[]
  category?: "health" | "behavior" | "nutrition" | "general"
}

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hi! I'm your AI pet care assistant. I can help with health questions, behavior tips, nutrition advice, and more. What would you like to know about your furry friend?",
      timestamp: new Date(),
      category: "general",
      suggestions: [
        "My dog seems lethargic lately",
        "Best food for senior cats",
        "Puppy training tips",
        "Emergency pet care",
      ],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: generateAiResponse(content),
        timestamp: new Date(),
        category: detectCategory(content),
        suggestions: generateSuggestions(content),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAiResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("lethargic") || lowerInput.includes("tired") || lowerInput.includes("energy")) {
      return "Lethargy in pets can have various causes. Here are some things to consider:\n\n• **Recent changes**: New environment, diet, or routine\n• **Age factors**: Senior pets naturally have less energy\n• **Health issues**: Could indicate illness - monitor for other symptoms\n• **Weather**: Hot weather can make pets less active\n\nI recommend monitoring your pet for 24-48 hours. If lethargy persists or you notice other symptoms (loss of appetite, vomiting, difficulty breathing), please consult your veterinarian immediately."
    }

    if (lowerInput.includes("food") || lowerInput.includes("nutrition") || lowerInput.includes("diet")) {
      return "Great question about nutrition! Here's what I recommend:\n\n• **Age-appropriate food**: Puppy/kitten, adult, or senior formulas\n• **Quality ingredients**: Look for named meat sources as first ingredients\n• **Portion control**: Follow feeding guidelines based on weight and activity\n• **Gradual transitions**: Change foods slowly over 7-10 days\n\nFor senior pets specifically, consider foods with joint support, easily digestible proteins, and controlled calories. Would you like specific brand recommendations?"
    }

    if (lowerInput.includes("training") || lowerInput.includes("behavior") || lowerInput.includes("puppy")) {
      return "Training is so important for a happy pet-owner relationship! Here are my top tips:\n\n• **Positive reinforcement**: Reward good behavior immediately\n• **Consistency**: Everyone in the household should use same commands\n• **Short sessions**: 5-10 minutes, multiple times daily\n• **Patience**: Every pet learns at their own pace\n\nFor puppies specifically, focus on house training, basic commands (sit, stay, come), and socialization. Start training as early as 8 weeks old!"
    }

    return "I understand you're looking for help with your pet. While I can provide general guidance, every pet is unique. For specific health concerns, behavioral issues, or emergency situations, I always recommend consulting with your veterinarian or a certified pet behaviorist. They can provide personalized advice based on your pet's individual needs.\n\nIs there a specific aspect of pet care you'd like me to help you with?"
  }

  const detectCategory = (input: string): "health" | "behavior" | "nutrition" | "general" => {
    const lowerInput = input.toLowerCase()
    if (lowerInput.includes("sick") || lowerInput.includes("health") || lowerInput.includes("vet")) return "health"
    if (lowerInput.includes("training") || lowerInput.includes("behavior")) return "behavior"
    if (lowerInput.includes("food") || lowerInput.includes("nutrition") || lowerInput.includes("diet"))
      return "nutrition"
    return "general"
  }

  const generateSuggestions = (input: string): string[] => {
    const category = detectCategory(input)

    switch (category) {
      case "health":
        return ["Schedule vet appointment", "Track symptoms", "Emergency care info", "Preventive care tips"]
      case "behavior":
        return ["Training schedules", "Positive reinforcement", "Socialization tips", "Professional trainers"]
      case "nutrition":
        return ["Feeding schedules", "Treat recommendations", "Weight management", "Special diets"]
      default:
        return ["Pet care basics", "Health monitoring", "Exercise needs", "Grooming tips"]
    }
  }

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case "health":
        return <Activity className="w-4 h-4" />
      case "behavior":
        return <Heart className="w-4 h-4" />
      case "nutrition":
        return <Calendar className="w-4 h-4" />
      default:
        return <Sparkles className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case "health":
        return "bg-red-100 text-red-700"
      case "behavior":
        return "bg-blue-100 text-blue-700"
      case "nutrition":
        return "bg-green-100 text-green-700"
      default:
        return "bg-purple-100 text-purple-700"
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card
      className={cn(
        "fixed bottom-6 right-6 w-96 shadow-xl z-50 transition-all duration-300",
        isMinimized ? "h-16" : "h-[600px]",
      )}
    >
      <CardHeader className="p-4 border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2 text-base">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <span>AI Pet Assistant</span>
            <Badge variant="secondary" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              Smart
            </Badge>
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8">
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8">
              ×
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex space-x-3", message.type === "user" ? "justify-end" : "justify-start")}
              >
                {message.type === "ai" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}

                <div className={cn("max-w-[80%] space-y-2", message.type === "user" ? "items-end" : "items-start")}>
                  <div
                    className={cn(
                      "p-3 rounded-lg whitespace-pre-wrap text-sm",
                      message.type === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted",
                    )}
                  >
                    {message.content}
                  </div>

                  {message.category && message.type === "ai" && (
                    <Badge className={cn("text-xs", getCategoryColor(message.category))}>
                      {getCategoryIcon(message.category)}
                      <span className="ml-1 capitalize">{message.category}</span>
                    </Badge>
                  )}

                  {message.suggestions && message.suggestions.length > 0 && (
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Quick actions:</p>
                      <div className="flex flex-wrap gap-1">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-6 px-2 bg-transparent"
                            onClick={() => handleSendMessage(suggestion)}
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {message.type === "user" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about your pet's health, behavior, nutrition..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                className="flex-1"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
