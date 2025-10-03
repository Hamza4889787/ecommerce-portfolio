"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0d0d0d] text-white py-20 px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Floating Image */}
          <motion.video
            src="/assets/about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-[0_0_25px_rgba(74,174,232,0.6)] w-80 md:w-96 object-cover"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Animated Electric Blue Border */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-2xl border-4 border-electricBlue"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-electricBlue">Me</span>
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-lg">
            I’m an e-commerce specialist who helps businesses grow online. I
            focus on creating effective solutions using smart strategies and the
            right tools to make your store successful.
          </p>

          <div id="#contact" className="flex gap-4">
            <button className="border-2 border-electricBlue text-electricBlue px-6 py-3 rounded-full hover:bg-electricBlue hover:text-white transition">
              Contact
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
