"use client";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  BarChart3,
  PenTool,
  Globe,
  Search,
  TrendingUp,
  Package,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: <ShoppingBag size={36} />,
    title: "Account Management",
    desc: "Complete stores management including product uploads, order fulfillment, promotions, inventory control, and performance tracking for maximum efficiency.",
  },
  {
    icon: <PenTool size={36} />,
    title: "Listing Creation & Optimization",
    desc: "Creating high-converting listings with SEO-friendly titles, bullet points, HTML descriptions, A+ content, enhanced images, and storefront setup.",
  },
  {
    icon: <Search size={36} />,
    title: "Keyword & Competitor Research",
    desc: "Comprehensive keyword research and competitor analysis using Helium 10, Jungle Scout, Keepa, and market insights to identify profitable products.",
  },
  {
    icon: <TrendingUp size={36} />,
    title: "Campaign Management",
    desc: "Setting up and optimizing Amazon PPC and eBay campaigns, including Sponsored Ads, bid adjustments, and promotion strategies to maximize ROI.",
  },
  {
    icon: <BarChart3 size={36} />,
    title: "Data Analysis & Reporting",
    desc: "Detailed sales tracking, trend analysis, and strategic reporting using Excel, Google Sheets, and marketplace dashboards for data-driven decisions.",
  },
  {
    icon: <Globe size={36} />,
    title: "Multi-Platform Support",
    desc: "Managing Amazon, eBay and other platforms to expand brand presence and improve cross-platform sales performance.",
  },
  {
    icon: <Search size={36} />,
    title: "Product Hunting",
    desc: "Identifying profitable products through market research, trend analysis, and competitor monitoring to find winning opportunities.",
  },
  {
    icon: <Package size={36} />,
    title: "Product Sourcing",
    desc: "Sourcing quality products from reliable suppliers, negotiating costs, and evaluating profitability to ensure high-quality listings and optimized margins.",
  },
  {
    icon: <Headphones size={36} />,
    title: "Customer Support",
    desc: "Providing professional customer service across marketplaces, handling inquiries, returns, and feedback to maintain high seller ratings and customer satisfaction.",
  },
];
export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#0D0D0D] text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6"
        >
          My <span className="text-[#4A90E2]">Services</span>
        </motion.h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-14">
          Specialized services to help your brand grow, scale, and dominate
          online marketplaces.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col items-start gap-4 border border-transparent hover:border-[#4A90E2] hover:shadow-[0_0_15px_rgba(74,144,226,0.4)] transition-all duration-300"
            >
              <div className="text-[#4A90E2]">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
