"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-[#0D0D0D] text-white flex items-center justify-center min-h-screen px-4"
    >
      <div className="max-w-[1200px] w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Muhammad <span className="text-[#4A90E2]">Hamza Ali</span>
          </motion.h1>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 font-medium"
          >
            E-commerce Specialist & Account Manager
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mx-auto md:mx-0 text-gray-400 text-base md:text-lg leading-relaxed max-w-full md:max-w-[650px]"
          >
            I’m an experienced E-commerce Specialist & Account Manager, helping
            brands grow on Amazon, eBay, B&Q, BestBuy, and more through
            optimized listings, PPC campaigns, keyword research, and operational
            strategies to maximize sales, visibility, and sustainable growth.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block bg-[#4A90E2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#357ABD] transition"
            >
              Hire Me
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] rounded-full flex items-center justify-center">
            {/* Floating Profile Image */}
            <motion.img
              src="/assets/main.jpg"
              alt="Hamza"
              className="w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

            {/* Border Animation */}
            <motion.div
              className="absolute rounded-full border-4 border-[#4A90E2]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              style={{
                width: "100%",
                height: "100%",
                zIndex: 5,
              }}
            ></motion.div>

            {/* Expanding Dot */}
            <motion.div
              className="absolute bg-[#4A90E2] rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 12, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                width: "12px",
                height: "12px",
                zIndex: 4,
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
