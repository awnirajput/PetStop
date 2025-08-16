"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, MessageCircle, Calendar, ShoppingCart, Heart, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function QuickActionsFAB() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { icon: MessageCircle, label: "AI Chat", href: "/ai-assistant" },
    { icon: Calendar, label: "Book Service", href: "/services" },
    { icon: ShoppingCart, label: "Shop", href: "/shop" },
    { icon: Heart, label: "Community", href: "/community" },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Action Buttons */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-200">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <div key={index} className="flex items-center space-x-3">
                <span className="bg-background border border-border px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                  {action.label}
                </span>
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full shadow-lg hover:scale-110 transition-transform"
                  asChild
                >
                  <a href={action.href}>
                    <Icon className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            )
          })}
        </div>
      )}

      {/* Main FAB */}
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-all duration-200",
          isOpen && "rotate-45",
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </Button>
    </div>
  )
}
