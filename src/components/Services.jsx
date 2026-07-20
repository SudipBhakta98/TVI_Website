import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "DATA CENTERS",
    image: "/image/service_field/DataCenter.png",
  },
  {
    name: "TELECOMMUNICATIONS",
    image: "/image/service_field/telicommunication.png",
  },
  {
    name: "AUTOMOTIVE",
    image: "/image/service_field/automotive.png",
  },
  {
    name: "DEFENCE",
    image: "/image/service_field/defence.png",
  },
  {
    name: "ELECTRICAL",
    image: "/image/service_field/electrical .png", // Kept the space intact to match your filename
  },
  {
    name: "INDUSTRIAL AUTOMATION",
    image: "/image/service_field/industrial_autometion.png",
  },
  {
    name: "AVIATION & AEROSPACE",
    image: "/image/service_field/aviation.png",
  },
  {
    name: "MEDICAL",
    image: "/image/service_field/medical.png",
  },
];

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="industries" className="bg-[#F8FAFC] py-20 px-4 lg:px-8 w-full">
      <div className="max-w-[90rem] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#031424] tracking-wider uppercase">
            INDUSTRIES WE SERVE
          </h2>
          <div className="w-16 h-[3px] bg-[#0082FB] mt-3" />
        </div>

        {/* Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                rotate: idx % 2 === 0 ? 0.5 : -0.5,
                boxShadow: "0px 15px 30px rgba(3, 20, 36, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative h-48 w-full rounded overflow-hidden bg-[#031424] cursor-pointer flex flex-col justify-end p-4 sm:p-5 border border-gray-800"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-all duration-500 filter grayscale contrast-125 opacity-40 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-60"
                  loading="lazy"
                />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
              </div>

              {/* Decorative Blue Hover Bar */}
              <motion.div 
                className="absolute bottom-0 left-0 h-[3px] bg-[#0082FB] z-20"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />

              {/* Title Block */}
              <div className="z-10 text-center w-full border-t border-gray-850/60 pt-3">
                <h3 className="text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase group-hover:text-[#0082FB] transition-colors duration-300 line-clamp-2 drop-shadow-md">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}