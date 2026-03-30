"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Globe,
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9065312121",
    href: "tel:+919065312121",
  },
  {
    icon: Globe,
    label: "Website",
    value: "dtechacademy.in",
    href: "https://dtechacademy.in",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dtechacademy.in",
    href: "mailto:info@dtechacademy.in",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Near +2 High School Bansa, Chowka-Kandra Road, Jharkhand",
    href: null,
  },
]

const officeHours = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "10:00 AM - 5:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gold/10 text-gold border-gold/30 mb-4 px-4 py-1.5">
            Get In Touch
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4 text-balance">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to enroll? Reach out to us and we&apos;ll help you
            get started on your tech journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
              <h3 className="font-display font-bold text-2xl text-navy mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-navy mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-muted-foreground">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-navy font-medium">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        className="border-border focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-navy font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="border-border focus:border-gold focus:ring-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-navy font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-gold focus:ring-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-navy font-medium">
                      Interested Course
                    </Label>
                    <Input
                      id="course"
                      placeholder="e.g., Python, Fullstack, ADCA"
                      className="border-border focus:border-gold focus:ring-gold"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-navy font-medium">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us what you're looking for..."
                      rows={4}
                      required
                      className="border-border focus:border-gold focus:ring-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-gold/50 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-white group-hover:text-navy transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="font-semibold text-navy group-hover:text-gold transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                      <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="font-semibold text-navy">{item.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="bg-navy rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-gold" />
                <h4 className="font-display font-bold text-lg">Office Hours</h4>
              </div>
              <div className="space-y-3">
                {officeHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-white/80">{item.day}</span>
                    <span className="font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
