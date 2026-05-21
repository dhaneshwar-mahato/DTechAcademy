"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  UserPlus,
  BookOpen,
  CreditCard,
  Laptop,
  Award,
} from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Contact Us",
    description:
      "Message us on WhatsApp or call our team to know about courses, fees, timings, and internship details.",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Verify & Choose Course",
    description:
      "After discussion and verification, select your preferred course like Python, AutoCAD, Fullstack, or DSA.",
    icon: BookOpen,
  },
  {
    step: "03",
    title: "Send Your Details",
    description:
      "Submit your basic details such as name, phone number, college/school, and email for enrollment.",
    icon: Laptop,
  },
  {
    step: "04",
    title: "Pay Enrollment Fee",
    description:
      "Complete your admission by paying the registration or enrollment amount online or offline.",
    icon: CreditCard,
  },
  {
    step: "05",
    title: "Receive Offer Letter",
    description:
      "Receive your internship/training offer letter and successfully complete your enrollment process.",
    icon: Award,
  },
]

export function EnrollmentProcess() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <Badge className="mb-4 px-4 py-1.5">
            Enrollment Process
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Join Dtechacademy in 5 Easy Steps
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Simple and beginner-friendly admission process designed for students.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">

          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 top-0 hidden md:block h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -translate-x-1/2 rounded-full" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-5 top-0 md:hidden h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 rounded-full" />

          <div className="space-y-16">

            {steps.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -80 : 80,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}
                  className={`relative flex items-center ${
                    isLeft
                      ? "justify-start md:justify-start"
                      : "justify-end md:justify-end"
                  }`}
                >

                  {/* Desktop Step Circle */}
                  <div className="absolute left-1/2 hidden md:flex -translate-x-1/2 w-14 h-14 rounded-full bg-primary text-white items-center justify-center font-bold shadow-xl z-20 border-4 border-background">
                    {item.step}
                  </div>

                  {/* Mobile Step Circle */}
                  <div className="absolute left-5 md:hidden -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg z-20 border-4 border-background">
                    {item.step}
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-[88%] md:w-[45%] ${
                      isLeft
                        ? "ml-12 md:ml-0 md:pr-12"
                        : "ml-12 md:mr-0 md:pl-12"
                    }`}
                  >

                    <Card className="overflow-hidden border-border/50 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 bg-background/80 backdrop-blur-xl">

                      <CardContent className="p-8">

                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                          <item.icon className="w-8 h-8 text-primary" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* WhatsApp Button */}
                        {index === 0 && (
                          <a
                            href="https://wa.me/919065312121?text=Hi%20Dtechacademy%2C%20I%20want%20to%20join%20Dtechacademy.%20Can%20I%20know%20more%20about%20the%20courses%20and%20internship%20program%3F"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600 hover:scale-105"
                          >
                            Contact Us on WhatsApp
                          </a>
                        )}

                      </CardContent>
                    </Card>

                  </motion.div>
                </motion.div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}