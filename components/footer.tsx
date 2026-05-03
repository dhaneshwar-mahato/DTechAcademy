"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUp } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
]

const courses = [
  { name: "ADCA", href: "#courses" },
  { name: "Python", href: "#courses" },
  { name: "Fullstack", href: "#courses" },
  { name: "Web Development", href: "#courses" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy font-bold text-xl font-display">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-tight">
                  DTech
                </span>
                <span className="font-display text-xs text-gold font-semibold -mt-1">
                  Academy
                </span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-6">
              Building the next generation of tech professionals with practical
              skills and real-world project experience.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-white group-hover:text-navy transition-colors duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">
              Popular Courses
            </h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-white/70 hover:text-gold transition-colors duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li>
                <a
                  href="tel:+919065312121"
                  className="hover:text-gold transition-colors"
                >
                  +91-9065312121
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dtechacademy.in"
                  className="hover:text-gold transition-colors"
                >
                  info@dtechacademy.in
                </a>
              </li>
              <li>
                <a
                  href="https://dtechacademy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  dtechacademy.in
                </a>
              </li>
              <li className="leading-relaxed">
                Ramnagar, Raghunathpur Block Road,
                <br />
                Seraikela Kharsawan, Jharkhand, 832401
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              &copy; {new Date().getFullYear()} DTechAcademy. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
