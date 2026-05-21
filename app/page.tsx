import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Courses } from "@/components/courses"
import { FeeStructure } from "@/components/fee-structure"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { EnrollmentProcess } from "@/components/enrollment-process"
import { Founder } from "@/components/founder"
// import  Announcement from "@/components/announcement"
// ;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <Announcement /> */}
      <EnrollmentProcess />
      <Courses />
      <FeeStructure />
      <WhyChooseUs />
      <Founder />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
