"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Globe,
  MapPin,
  Mail,
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
    value: "dtechacademyinfo@gmail.com",
    href: "mailto:dtechacademyinfo@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value:
      "Ramnagar, Raghunathpur Block Road, Seraikela Kharsawan, Jharkhand, 832401",
    href: null,
  },
]

const officeHours = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "10:00 AM - 5:00 PM" },
  { day: "Sunday", time: "Closed" },
]

export function Contact() {
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
            Have questions? Want to enroll? Connect directly with
            Dtechacademy on WhatsApp and get instant guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 32 32"
                    fill="white"
                  >
                    <path d="M16.004 3C8.822 3 3 8.822 3 16.004c0 2.824.902 5.438 2.438 7.57L3 29l5.602-2.37a12.94 12.94 0 0 0 7.402 2.316H16c7.182 0 13.004-5.822 13.004-13.004S23.182 3 16 3zm0 23.633a10.58 10.58 0 0 1-5.387-1.477l-.387-.23-3.324 1.406 1.426-3.242-.25-.406a10.57 10.57 0 0 1-1.629-5.68c0-5.875 4.777-10.652 10.652-10.652 2.844 0 5.52 1.105 7.531 3.121a10.58 10.58 0 0 1 3.121 7.531c0 5.875-4.777 10.652-10.652 10.652zm5.84-7.965c-.32-.16-1.887-.93-2.18-1.035-.293-.106-.508-.16-.723.16-.215.32-.828 1.035-1.016 1.25-.188.215-.375.242-.695.082-.32-.16-1.352-.5-2.574-1.594-.95-.848-1.59-1.895-1.777-2.215-.188-.32-.02-.492.14-.652.145-.144.32-.375.48-.562.16-.188.215-.32.32-.535.106-.215.055-.402-.027-.562-.082-.16-.723-1.742-.992-2.383-.262-.629-.528-.543-.723-.55l-.617-.012c-.215 0-.562.082-.855.402-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.148 3.094 1.308 3.309.16.215 2.258 3.445 5.473 4.828.765.328 1.36.523 1.824.668.766.242 1.465.207 2.016.125.614-.09 1.887-.77 2.152-1.516.266-.746.266-1.387.188-1.516-.078-.133-.293-.215-.613-.375z" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-navy">
                    Chat on WhatsApp
                  </h3>

                  <p className="text-muted-foreground">
                    Quick response for admissions & course inquiries
                  </p>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="p-5 rounded-xl bg-secondary/40 border border-border">
                  <h4 className="font-semibold text-navy mb-2">
                    What can we help you with?
                  </h4>

                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Internship & Training Details</li>
                    <li>• Full Stack Development Course</li>
                    <li>• Data Analytics Program</li>
                    <li>• AutoCAD Training</li>
                    <li>• Fees & Admission Process</li>
                    <li>• Certificate & Placement Support</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <p className="text-sm text-green-800 font-medium">
                    Usually replies within a few minutes
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919065312121?text=Hello%20Dtechacademy,%20I%20want%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                  <span className="flex items-center gap-3">
                    Chat Now on WhatsApp
                  </span>
                </Button>
              </a>
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

                        <div className="font-semibold text-navy">
                          {item.value}
                        </div>
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

                <h4 className="font-display font-bold text-lg">
                  Office Hours
                </h4>
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

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="rounded-2xl overflow-hidden border border-border shadow-lg mt-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d257.6244058742869!2d86.12151656266127!3d23.005675364898945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1777783234377!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}