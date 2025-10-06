"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

const salesMedia = [
  { type: "image", src: "/assets/amz-1.jpg", alt: "Sales Screenshot 1" },
  { type: "image", src: "/assets/amz-2.jpg", alt: "Sales Screenshot 2" },
  { type: "image", src: "/assets/amz-3.png", alt: "Sales Screenshot 3" },
  { type: "image", src: "/assets/amz-4.png", alt: "Sales Screenshot 4" },
  { type: "image", src: "/assets/bnq.png", alt: "Sales Screenshot 5" },
];

export default function SalesCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

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

  const handleZoom = (e) => {
    e.stopPropagation();
    if (e.deltaY < 0) setZoom((z) => Math.min(z + 0.2, 3)); // zoom in
    else setZoom((z) => Math.max(z - 0.2, 1)); // zoom out
  };

  return (
    <section id="case-studies" className="bg-[#0D0D0D] text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto w-full">
        <h2 className="text-3xl font-bold text-center text-[#4A90E2] mb-10">
          Sales Results
        </h2>

        {/* --- Slider --- */}
        <Slider {...settings}>
          {salesMedia.map((media, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex justify-center items-center px-4 cursor-pointer"
              onClick={() => setSelectedImage(media.src)}
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

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedImage(null);
              setZoom(1);
            }}
          >
            <motion.img
              src={selectedImage}
              alt="Zoomed Image"
              onWheel={handleZoom}
              initial={{ scale: 0.8 }}
              animate={{ scale: zoom }}
              transition={{ type: "spring", stiffness: 200 }}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-lg object-contain cursor-zoom-in"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
