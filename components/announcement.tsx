"use client";

import { motion } from "framer-motion";
const phoneNumber = "919065312121";

const message = encodeURIComponent(
  `Hi, I'm interested in your Summer Internship Program (Full Stack / Data Analytics). Please share details.`
);

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;


export default function Announcement() {
  return (
    <section className="pt-20 pb-12 bg-navy text-white relative overflow-hidden">

      {/* ================= BACKGROUND ANIMATIONS ================= */}

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"
        />

        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3 + i, repeat: Infinity }}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      {/* Animated Line Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="lines"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="6 6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;12"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#lines)" />
        </svg>
      </div>

      {/* Moving Highlight Beam */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40"
      />

      {/* ================= CONTENT ================= */}

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-white/10 overflow-hidden"
        >

          {/* Rotating Glow */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 blur-xl"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-yellow-400/20 text-yellow-300 px-4 py-1 rounded-full text-sm font-semibold mb-4 border border-yellow-300/30"
          >
            Limited Seats Available
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative text-2xl md:text-4xl font-extrabold mb-4 text-yellow-400"
          >
            📢 Big Announcement
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative text-lg md:text-xl leading-relaxed"
          >
            We are launching our{" "}
            <span className="font-bold text-yellow-300">
              Summer Internship Program
            </span>{" "}
            in{" "}
            <span className="font-semibold underline decoration-yellow-400">
              Full Stack Development
            </span>{" "}
            &{" "}
            <span className="font-semibold underline decoration-yellow-400">
              Data Analytics
            </span>.
          </motion.p>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative mt-5 space-y-2 text-lg"
          >
            <p>
              📅 Starts from{" "}
              <span className="font-bold text-yellow-300 text-xl">
                16th May
              </span>
            </p>

            <p>
              💻 Mode:{" "}
              <span className="font-semibold text-white">
                Online + Offline
              </span>
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative mt-6"
          >
            <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg"
          >
            Apply Now
          </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}