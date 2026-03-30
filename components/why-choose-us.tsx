"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  IndianRupee,
  Rocket,
  Users,
  BookOpen,
  Award,
} from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Practical Training",
    description:
      "Hands-on learning with real-world projects. No boring theory-only classes.",
    color: "bg-blue-500",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    description:
      "Quality education at budget-friendly prices with flexible payment options.",
    color: "bg-green-500",
  },
  {
    icon: Rocket,
    title: "Project-Based Learning",
    description:
      "Build portfolio-worthy projects that showcase your skills to employers.",
    color: "bg-purple-500",
  },
  {
    icon: Users,
    title: "Career Guidance",
    description:
      "Resume building, interview prep, and placement assistance included.",
    color: "bg-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from industry professionals with years of practical experience.",
    color: "bg-cyan-500",
  },
  {
    icon: Award,
    title: "Certified Courses",
    description:
      "Get recognized certificates that add value to your professional profile.",
    color: "bg-pink-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function WhyChooseUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary/30">
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
            Why DTechAcademy
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4 text-balance">
            Why Students Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing the best learning experience with
            practical skills that matter in the real world.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
                <div
                  className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 bg-navy rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Students Trained" },
              { value: "15+", label: "Courses Offered" },
              { value: "95%", label: "Success Rate" },
              { value: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-3xl lg:text-5xl text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
