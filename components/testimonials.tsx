"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rahul Kumar",
    course: "Fullstack Development",
    image: null,
    rating: 5,
    text: "DTechAcademy completely changed my career path. The practical approach to teaching helped me land a job as a web developer within 3 months of completing my course. The instructors are incredibly supportive!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    course: "Python Programming",
    image: null,
    rating: 5,
    text: "I came here with zero coding knowledge and now I can build my own applications. The Python course was comprehensive and the project-based learning made everything click. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Singh",
    course: "ADCA",
    image: null,
    rating: 5,
    text: "The ADCA course covered everything I needed for office work. From MS Office to basic programming, I learned skills that I use every day at my job. Great value for money!",
  },
  {
    id: 4,
    name: "Neha Patel",
    course: "Web Development",
    image: null,
    rating: 4,
    text: "Starting my own freelance web design business was a dream, and DTechAcademy helped me achieve it. The course content is up-to-date and relevant to what clients actually need.",
  },
  {
    id: 5,
    name: "Vikash Verma",
    course: "Data Analyst with Python",
    image: null,
    rating: 5,
    text: "The SQL and database course here is top-notch. I now manage databases for a growing company. The hands-on practice with real scenarios was incredibly helpful.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevTestimonial = useCallback(() => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [nextTestimonial])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
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
            Student Reviews
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with us
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 lg:left-12 z-10">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-navy" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-card rounded-2xl border border-border shadow-xl p-8 lg:p-12 pt-16 min-h-[320px] relative overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < current.rating
                            ? "text-gold fill-gold"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                    &ldquo;{current.text}&rdquo;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center text-white font-bold text-xl">
                      {current.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-lg text-navy">
                        {current.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {current.course}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full w-12 h-12 border-navy/20 hover:bg-navy hover:text-white hover:border-navy"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gold w-8"
                        : "bg-navy/20 hover:bg-navy/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full w-12 h-12 border-navy/20 hover:bg-navy hover:text-white hover:border-navy"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
