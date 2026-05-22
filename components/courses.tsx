"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, IndianRupee, ArrowRight, Laptop, Code2, Database, Globe, FileCode, Terminal, Layers, Smartphone } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    name: "ADCA",
    fullName: "Advanced Diploma in Computer Applications",
    duration: "12 Months",
    fee: "4,999",
    icon: Laptop,
    color: "bg-blue-500",
    popular: true,
    skills: ["MS Office", "Tally", "Basic Programming"],
  },
  {
    name: "DCA",
    fullName: "Diploma in Computer Applications",
    duration: "6 Months",
    fee: "2,499",
    icon: FileCode,
    color: "bg-green-500",
    popular: false,
    skills: ["MS Office", "Internet Basics", "Typing"],
  },
  {
    name: "Python",
    fullName: "Python Programming Course",
    duration: "4 Months",
    fee: "2,499",
    icon: Terminal,
    color: "bg-yellow-500",
    popular: true,
    skills: ["Core Python", "OOP", "Libraries", "Projects"],
  },
  {
    name: "Fullstack",
    fullName: "Full Stack Web Development",
    duration: "3 Months",
    fee: "1,999",
    icon: Layers,
    color: "bg-purple-500",
    popular: true,
    skills: ["HTML/CSS/JS", "React", "PHP", "Database"],
  },
  {
    name: "Web Dev",
    fullName: "Web Development Fundamentals",
    duration: "2 Months",
    fee: "1,199",
    icon: Globe,
    color: "bg-cyan-500",
    popular: false,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    name: "Graphic Design",
    fullName: "Graphic Design Fundamentals",
    duration: "3 Months",
    fee: "2,999",
    icon: Database,
    color: "bg-orange-500",
    popular: false,
    skills: ["Photoshop", "Canva", "AI image processing"],
  },
  {
    name: "Programming",
    fullName: "C & C++ Programming",
    duration: "3 Months",
    fee: "2,499",
    icon: Code2,
    color: "bg-red-500",
    popular: false,
    skills: ["C", "C++", "OOP Concepts", "DSA Basics"],
  },
  {
    name: "Data Analyst",
    fullName: "Data Analytics with Python",
    duration: "3 Months",
    fee: "1,799",
    icon: Smartphone,
    color: "bg-pink-500",
    popular: false,
    skills: ["SQL", "Python", "Power BI", "Excel"],
  },

  {
  name: "AutoCAD Civil",
  fullName: "AutoCAD Civil Engineering Drafting",
  duration: "2 Months",
  fee: "1,499",
  icon: Layers,
  color: "bg-green-600",
  popular: true,
  skills: [
    "Building Plans",
    "Structural Drafting",
    "Site Layout",
    "Civil Projects",
  ],
},

  {
  name: "AutoCAD Electrical",
  fullName: "AutoCAD Electrical Design & Drafting",
  duration: "2 Months",
  fee: "1,499",
  icon: Laptop,
  color: "bg-yellow-600",
  popular: true,
  skills: [
    "Electrical Circuits",
    "Panel Design",
    "2D Drafting",
    "Industrial Projects",
  ],
},

{
  name: "AutoCAD Mechanical",
  fullName: "AutoCAD Mechanical Design",
  duration: "2 Months",
  fee: "1,499",
  icon: Code2,
  color: "bg-blue-600",
  popular: true,
  skills: [
    "Machine Drawing",
    "Mechanical Components",
    "3D Modeling",
    "Industrial Design",
  ],
},

{
  name: "DSA",
  fullName: "Data Structures & Algorithms with Python",
  duration: "2 Months",
  fee: "1,999",
  icon: Code2,
  color: "bg-indigo-500",
  popular: true,
  skills: ["Python DSA", "Algorithms", "Problem Solving", "Interview Prep"],
},
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function Courses() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-secondary/30">
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
            Our Courses
          </Badge>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy mb-4 text-balance">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-aligned courses designed to give you practical skills and
            real-world project experience
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <motion.div key={course.name} variants={itemVariants}>
              <Card className="group h-full relative overflow-hidden border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1">
                {course.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gold text-navy font-semibold">
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy">
                    {course.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.fullName}
                  </p>
                </CardHeader>
                <CardContent className="pb-4">
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* Duration & Fee */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                     <div className="flex items-center gap-0.5 font-semibold text-navy">
                      <IndianRupee className="w-4 h-4" /> 
                     <span>{course.fee}</span> 
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-navy/20 hover:bg-navy hover:text-white hover:border-navy group/btn"
                  >
                    <Link href="#contact">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
