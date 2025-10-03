"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const logoNames = [
  "Amazon",
  "eBay",
  "Walmart",
  "BestBuy",
  "Newegg",
  "B&Q",
  "Helium10",
  "Jungle Scout",
  "Keepa",
];

const skillCategories = [
  {
    icon: "📝",
    title: "Listing Creation & Optimization",
    desc: "Creating and optimizing product listings using HTML/CSS and advanced marketplace tools for keyword research, SEO, and A+ content.",
    items: [
      "HTML & CSS",
      "A+ Content",
      "Keyword Research",
      "SEO Optimization",
      "Competitor Analysis",
      "Marketplace Tools",
    ],
  },
  {
    icon: "🔍",
    title: "Research & Analysis",
    desc: "Conducting in-depth product and keyword research, market analysis, and competitor insights using advanced tools to drive sales and growth strategies.",
    items: [
      "Product Research",
      "Keyword Research",
      "Competitor Analysis",
      "Market Trends",
      "Helium 10",
      "Jungle Scout",
      "Keepa",
      "SEO Optimization",
    ],
  },
  {
    icon: "📈",
    title: "Campaign Management",
    desc: "Planning, creating, and optimizing advertising campaigns across Amazon and eBay, including PPC strategies, promotions, and performance tracking to maximize ROI.",
    items: [
      "Amazon PPC",
      "eBay Campaigns",
      "Sponsored Ads",
      "Promotions & Deals",
      "Campaign Optimization",
      "Performance Analysis",
    ],
  },
  {
    icon: "📊",
    title: "Reporting & Operations",
    desc: "Managing day-to-day operations including order processing, inventory tracking, and performance reporting using Excel, Google Sheets, and marketplace dashboards to ensure smooth workflow and data-driven decisions.",
    items: [
      "Order Management",
      "Inventory Tracking",
      "Sales & Performance Reporting",
      "Excel",
      "Google Sheets",
      "Marketplace Dashboards",
    ],
  },
  {
    icon: "🛒",
    title: "Product Hunting & Sourcing",
    desc: "Identifying profitable products, sourcing from reliable suppliers, analyzing trends, and evaluating competition to ensure high-quality listings and maximize marketplace sales.",
    items: [
      "Product Research",
      "Supplier Sourcing",
      "Competitor Analysis",
      "Profit & Cost Evaluation",
      "Marketplace Tools",
    ],
  },
  {
    icon: "🎧",
    title: "Customer Support & Service",
    desc: "Providing excellent customer service by handling inquiries, resolving issues, managing returns, and ensuring a smooth post-purchase experience to maintain high customer satisfaction and loyalty.",
    items: [
      "Inquiry Handling",
      "Issue Resolution",
      "Returns & Refunds Management",
      "Order Assistance",
      "Feedback & Reviews Management",
    ],
  },
  {
    icon: "📋",
    title: "Task & Project Management",
    desc: "Organizing, prioritizing, and tracking tasks efficiently using tools like Trello and Monday.com to ensure timely completion, team collaboration, and streamlined workflow.",
    items: [
      "Task Prioritization",
      "Project Planning",
      "Workflow Management",
      "Trello",
      "Monday.com",
      "Team Collaboration",
      "Progress Tracking",
    ],
  },
];

export default function SkillsSection() {
  const [sliderKey, setSliderKey] = useState(0);

  useEffect(() => {
    // Force slider to recalc width on mount for mobile
    setSliderKey(1);
  }, []);

  const logoSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const categorySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="skills" className="bg-[#0D0D0D] text-white py-20 px-6">
      <div className="mx-auto max-w-[1200px] w-full">
        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-6"
        >
          My <span className="text-[#4A90E2]">Skills & Tools</span>
        </motion.h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          A blend of marketplace expertise, tools, and strategies to grow and
          manage brands effectively.
        </p>

        {/* Brand Slider */}
        <div className="w-full mb-14">
          <Slider key={`logo-${sliderKey}`} {...logoSettings}>
            {logoNames.map((name, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-2 sm:px-4 flex justify-center items-center"
              >
                <div className="bg-[#4A90E2] text-white px-8 py-6 rounded-full text-xl font-semibold shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer w-full max-w-[200px] text-center">
                  {name}
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        {/* Skill Categories Slider */}
        <Slider key={`category-${sliderKey}`} {...categorySettings}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="bg-[#1A1A1A] rounded-2xl p-6 h-[300px] flex flex-col justify-between border border-transparent hover:border-[#4A90E2] transition-all duration-300 shadow-md hover:shadow-[#4A90E2]/30">
                <div>
                  <div className="text-4xl mb-4">{cat.icon}</div>
                  <h3 className="text-xl font-semibold text-[#4A90E2] mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{cat.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="bg-[#2A2A2A] text-gray-300 px-3 py-1 rounded-full text-xs md:text-sm hover:bg-[#4A90E2] hover:text-white transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
