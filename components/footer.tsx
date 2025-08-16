import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Shield, Award, Truck } from "lucide-react"

const footerLinks = {
  platform: [
    { name: "Pet Dashboard", href: "#" },
    { name: "Health Tracking", href: "#" },
    { name: "Community", href: "#" },
    { name: "Mobile App", href: "#" },
  ],
  shop: [
    { name: "Dog Supplies", href: "#" },
    { name: "Cat Supplies", href: "#" },
    { name: "Bird Supplies", href: "#" },
    { name: "Exotic Pets", href: "#" },
  ],
  services: [
    { name: "Find a Vet", href: "#" },
    { name: "Pet Grooming", href: "#" },
    { name: "Pet Training", href: "#" },
    { name: "Pet Boarding", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const trustBadges = [
  { icon: Shield, text: "Secure Payments" },
  { icon: Award, text: "Trusted by 50K+" },
  { icon: Truck, text: "Fast Delivery" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif font-bold text-2xl text-foreground mb-2">Stay Updated with Pet Care Tips</h3>
              <p className="text-muted-foreground">
                Get weekly pet care advice, product updates, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Enter your email address" className="flex-1" type="email" />
              <Button className="px-8">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground fill-current" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl text-foreground">THE PET STOP</h4>
                  <p className="text-xs text-muted-foreground">One stop solution for your pets</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Your trusted partner in pet care. We bring together health tracking, premium supplies, community
                support, and professional services in one comprehensive platform.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>1-800-PET-STOP</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>hello@thepetstop.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Available Nationwide</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h5 className="font-serif font-semibold text-foreground mb-4">Platform</h5>
              <ul className="space-y-2">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-semibold text-foreground mb-4">Shop</h5>
              <ul className="space-y-2">
                {footerLinks.shop.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-semibold text-foreground mb-4">Services</h5>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-serif font-semibold text-foreground mb-4">Support</h5>
              <ul className="space-y-2">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Trust Badges & Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">© 2024 THE PET STOP. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
