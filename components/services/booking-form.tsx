"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, PawPrint, CreditCard } from "lucide-react"

interface BookingFormProps {
  providerId: string
}

export function BookingForm({ providerId }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedPet, setSelectedPet] = useState("")
  const [selectedService, setSelectedService] = useState("")

  const availableDates = [
    "2024-01-15",
    "2024-01-16",
    "2024-01-17",
    "2024-01-18",
    "2024-01-19",
    "2024-01-22",
    "2024-01-23",
  ]

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const userPets = [
    { id: "1", name: "Buddy", type: "Golden Retriever" },
    { id: "2", name: "Whiskers", type: "Persian Cat" },
    { id: "3", name: "Charlie", type: "Beagle" },
  ]

  const services = [
    { id: "full-grooming", name: "Full Grooming", price: 65, duration: "1.5 hours" },
    { id: "bath-brush", name: "Bath & Brush", price: 45, duration: "1 hour" },
    { id: "nail-trim", name: "Nail Trimming", price: 25, duration: "30 minutes" },
    { id: "teeth-cleaning", name: "Teeth Cleaning", price: 35, duration: "45 minutes" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-primary" />
          <span>Book Your Appointment</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Service Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Select Service</Label>
          <div className="grid grid-cols-1 gap-3">
            {services.map((service) => (
              <div
                key={service.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  selectedService === service.id ? "border-primary bg-primary/5" : "border-border hover:bg-muted/30"
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-muted-foreground">{service.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${service.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pet Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Select Pet</Label>
          <Select value={selectedPet} onValueChange={setSelectedPet}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your pet" />
            </SelectTrigger>
            <SelectContent>
              {userPets.map((pet) => (
                <SelectItem key={pet.id} value={pet.id}>
                  <div className="flex items-center space-x-2">
                    <PawPrint className="w-4 h-4" />
                    <span>
                      {pet.name} ({pet.type})
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Select Date</Label>
          <div className="grid grid-cols-4 gap-2">
            {availableDates.map((date) => {
              const dateObj = new Date(date)
              const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" })
              const dayNumber = dateObj.getDate()

              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    selectedDate === date
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:bg-muted/30"
                  }`}
                >
                  <div className="text-xs">{dayName}</div>
                  <div className="font-medium">{dayNumber}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Select Time</Label>
          <div className="grid grid-cols-4 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg border text-center transition-colors ${
                  selectedTime === time
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:bg-muted/30"
                }`}
              >
                <Clock className="w-4 h-4 mx-auto mb-1" />
                <div className="text-sm">{time}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Special Instructions */}
        <div className="space-y-3">
          <Label htmlFor="instructions" className="text-base font-medium">
            Special Instructions (Optional)
          </Label>
          <Textarea
            id="instructions"
            placeholder="Any special requests or information about your pet..."
            className="resize-none"
            rows={3}
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="(555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions and cancellation policy
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="reminders" />
            <Label htmlFor="reminders" className="text-sm">
              Send me appointment reminders via SMS and email
            </Label>
          </div>
        </div>

        {/* Book Button */}
        <Button
          className="w-full"
          size="lg"
          disabled={!selectedService || !selectedPet || !selectedDate || !selectedTime}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Book Appointment & Pay
        </Button>
      </CardContent>
    </Card>
  )
}
