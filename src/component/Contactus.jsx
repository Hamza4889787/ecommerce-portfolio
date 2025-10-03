"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0D0D0D] text-white py-20 px-6">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Get in <span className="text-[#4A90E2]">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mb-10"
        >
          I’m available for full time job, freelance work, consulting, or any
          exciting projects. Reach out through email, phone, or connect with me
          on social media.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#4A90E2] text-xl" />
            <a
              href="mailto:your.email@example.com"
              className="text-gray-300 hover:text-[#4A90E2] transition"
            >
              hamza4889787@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-[#4A90E2] text-xl" />
            <a
              href="tel:+1234567890"
              className="text-gray-300 hover:text-[#4A90E2] transition"
            >
              +92 305 4365091
            </a>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center gap-6 text-2xl"
        >
          <a
            href="https://www.linkedin.com/in/hamza-ali-3a9a191b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4A90E2] transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
