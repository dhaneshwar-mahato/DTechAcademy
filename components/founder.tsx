"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Briefcase,
  Code2,
  Users,
  ArrowRight,
} from "lucide-react"

export function Founder() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30 overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <Badge className="bg-gold/10 text-gold border-gold/30 mb-5 px-4 py-1.5">
              Founder of Dtechacademy
            </Badge>

            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-6">
              Meet The Founder Behind
              <span className="text-gold"> Dtechacademy</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A passionate developer, educator, and mentor dedicated to helping
              students learn practical technology skills, build real-world
              projects, and prepare for future careers in software development
              and digital technologies.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

              {/* Card */}
              <div className="rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-300 p-5 bg-background/80 backdrop-blur-xl hover:shadow-xl hover:shadow-gold/5">

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-gold" />
                  </div>

                  <h3 className="font-semibold text-navy">
                    Developer
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  Fullstack developer working with modern web technologies.
                </p>

              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-300 p-5 bg-background/80 backdrop-blur-xl hover:shadow-xl hover:shadow-gold/5">

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>

                  <h3 className="font-semibold text-navy">
                    Mentor
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  Helping students learn coding and practical development.
                </p>

              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-300 p-5 bg-background/80 backdrop-blur-xl hover:shadow-xl hover:shadow-gold/5">

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>

                  <h3 className="font-semibold text-navy">
                    Educator
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  Building beginner-friendly tech education for students.
                </p>

              </div>

              {/* Card */}
              <div className="rounded-2xl border border-border/50 hover:border-gold/40 transition-all duration-300 p-5 bg-background/80 backdrop-blur-xl hover:shadow-xl hover:shadow-gold/5">

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-gold" />
                  </div>

                  <h3 className="font-semibold text-navy">
                    Entrepreneur
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  Founder building Dtechacademy for future tech learners.
                </p>

              </div>

            </div>

            {/* CTA */}
            <Button
              asChild
              className="bg-navy hover:bg-navy/90 text-white rounded-xl px-6 py-6 text-base"
            >
              <a
                href="https://wa.me/919065312121"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on WhatsApp

                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full" />

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-border/50 hover:border-gold/40 transition-all duration-300 shadow-2xl hover:shadow-gold/10">

              <Image
                src="/founder.jpg"
                alt="Founder"
                width={700}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}