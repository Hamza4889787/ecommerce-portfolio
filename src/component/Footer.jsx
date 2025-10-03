"use client";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#4A90E2] mb-3">
            Muhammad Hamza Ali
          </h2>
          <p className="text-gray-400">
            E-commerce Specialist & Account Manager. Helping brands grow.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-[#4A90E2] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#hero" className="hover:text-[#4A90E2] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#4A90E2] transition">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#case-studies"
                className="hover:text-[#4A90E2] transition"
              >
                Sales
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#4A90E2] transition">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#4A90E2] transition">
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-semibold text-[#4A90E2] mb-4">
            Contact Me
          </h3>
          <div className="flex flex-col gap-3 text-gray-400">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#4A90E2]" />
              <a
                href="mailto:your.email@example.com"
                className="hover:text-[#4A90E2] transition"
              >
                hamza4889787@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[#4A90E2]" />
              <a
                href="tel:+1234567890"
                className="hover:text-[#4A90E2] transition"
              >
                +923054365091
              </a>
            </div>
          </div>
        </motion.div>

        {/* Social / Connect */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-xl font-semibold text-[#4A90E2] mb-4">
            Follow Me
          </h3>
          <div className="flex gap-4 text-2xl text-gray-400">
            <a
              href="https://www.linkedin.com/in/hamza-ali-3a9a191b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4A90E2] transition"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            &copy; {new Date().getFullYear()} Muhammad Hamza Ali. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
