"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";

const salesMedia = [
  { type: "image", src: "/assets/amz-1.jpg", alt: "Sales Screenshot 1" },
  { type: "image", src: "/assets/amz-2.jpg", alt: "Sales Screenshot 2" },
  { type: "image", src: "/assets/amz-3.png", alt: "Sales Screenshot 3" },
  { type: "image", src: "/assets/amz-4.png", alt: "Sales Screenshot 4" },
  { type: "image", src: "/assets/bnq.png", alt: "Sales Screenshot 5" },
];

export default function SalesCarousel() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section id="case-studies" className="bg-[#0D0D0D] text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto w-full">
        <h2 className="text-3xl font-bold text-center text-[#4A90E2] mb-10">
          Sales Results
        </h2>

        <Slider {...settings}>
          {salesMedia.map((media, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex justify-center items-center px-4"
            >
              {media.type === "image" ? (
                <img
                  src={media.src}
                  alt={media.alt}
                  className="rounded-2xl shadow-lg max-h-[500px] object-contain w-full"
                />
              ) : (
                <video
                  src={media.src}
                  controls
                  className="rounded-2xl shadow-lg max-h-[500px] w-full"
                />
              )}
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
