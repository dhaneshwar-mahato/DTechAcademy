"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Star, IndianRupee } from "lucide-react"

const feeData = [
  {
    course: "ADCA",
    duration: "12 Months",
    fee: "3,499",
    monthly: "350",
    highlight: false,
  },
  {
    course: "DCA",
    duration: "6 Months",
    fee: "1,999",
    monthly: "400",
    highlight: false,
  },
  {
    course: "Python",
    duration: "4 Months",
    fee: "2,199",
    monthly: "550",
    highlight: true,
  },
  {
    course: "Fullstack Development",
    duration: "3 Months",
    fee: "1,999",
    monthly: "700",
    highlight: true,
  },
  {
    course: "Web Development",
    duration: "2 Months",
    fee: "1,199",
    monthly: "600",
    highlight: false,
  },
  {
    course: "Graphic Design",
    duration: "3 Months",
    fee: "1,499",
    monthly: "500",
    highlight: false,
  },
  {
    course: "C & C++ Programming",
    duration: "4 Months",
    fee: "1,499",
    monthly: "400",
    highlight: false,
  },
  {
    course: "Data Analyst with Python",
    duration: "3 Months",
    fee: "1,499",
    monthly: "500",
    highlight: false,
  },

  {
  course: "AutoCAD Civil",
  duration: "2 Months",
  fee: "1,499",
  monthly: "750",
  highlight: true,
},

{
  course: "AutoCAD Electrical",
  duration: "2 Months",
  fee: "1,499",
  monthly: "750",
  highlight: true,
},

{
  course: "AutoCAD Mechanical",
  duration: "2 Months",
  fee: "1,499",
  monthly: "750",
  highlight: true,
},

{
  course: "DSA with Python",
  duration: "2 Months",
  fee: "1,999",
  monthly: "1000",
  highlight: true,
},
]

const benefits = [
  "Flexible payment options available",
  "One-time registration fee included",
  "Study materials provided free",
  "Certificate on completion",
]

export function FeeStructure() {
  return (
    <section className="py-20 lg:py-28 bg-background">
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
            Transparent Pricing
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4 text-balance">
            Affordable Fee Structure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality education at prices that fit your budget. No hidden charges,
            no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Fee Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Table Header */}
              <div className="grid grid-cols-2 gap-2 p-2 bg-navy text-white font-semibold text-sm lg:text-base">
                <div className="col-span-1">Course</div>
                <div className="text-center">Duration</div>
                {/* <div className="text-center">Total Fee</div> */}
                {/* <div className="text-center hidden sm:block">Monthly</div> */}
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border">
                {feeData.map((item, index) => (
                  <motion.div
                    key={item.course}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className={`grid grid-cols-2 gap-2 p-2 items-center hover:bg-secondary/50 transition-colors ${
                      item.highlight ? "bg-gold/5" : ""
                    }`}
                  >
                    <div className="col-span-1 flex items-center gap-2">
                      {item.highlight && (
                        <Star className="w-2 h-2 text-gold fill-gold flex-shrink-0" />
                      )}
                      <span
                        className={`font-semibold text-sm lg:text-base ${
                          item.highlight ? "text-navy" : "text-foreground"
                        }`}
                      >
                        {item.course}
                      </span>
                    </div>
                    <div className="text-center text-muted-foreground text-sm lg:text-base">
                      {item.duration}
                    </div>
                    {/* <div className="text-center">
                      <span className="inline-flex items-center font-bold text-navy text-sm lg:text-lg">
                        <IndianRupee className="w-3 h-3 lg:w-4 lg:h-4" />
                        {item.fee}
                      </span>
                    </div> */}
                    {/* <div className="text-center hidden sm:block">
                      <span className="inline-flex items-center text-muted-foreground text-sm">
                        <IndianRupee className="w-3 h-3" />
                        {item.monthly}/mo
                      </span>
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="bg-navy rounded-2xl p-8 text-white h-full">
              <h3 className="font-display font-bold text-2xl mb-6">
                What&apos;s Included
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/70 mb-2">Need financial help?</p>
                <p className="font-semibold text-gold">
                  EMI options available for courses.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
