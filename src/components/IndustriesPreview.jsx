import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { service_field } from "../../image/image";

const slideImages = [
  {
    name: "DATA CENTERS",
    image: service_field.data_center,
  },
  {
    name: "TELECOMMUNICATIONS",
    image: service_field.telicommunication,
  },
  {
    name: "AUTOMOTIVE",
    image: service_field.automotive,
  },
  {
    name: "DEFENCE",
    image: service_field.defence,
  },
  {
    name: "ELECTRICAL",
    image: service_field.electrical,
  },
  {
    name: "INDUSTRIAL AUTOMATION",
    image: service_field.industrial_automation,
  },
  {
    name: "AVIATION & AEROSPACE",
    image: service_field.aviation,
  },
  {
    name: "MEDICAL",
    image: service_field.medical,
  },
];

export default function IndustriesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide images every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="industries-preview" className="bg-[#F8FAFC] py-6 px-4 lg:px-8 w-full">
      <div className="max-w-[85rem] mx-auto flex flex-col items-center">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#031424] tracking-wider uppercase">
            INDUSTRIES WE SERVE
          </h2>
          <div className="w-16 h-[3px] bg-[#0082FB] mt-3" />
        </div>

        {/* 2-Column Split Layout matching wireframe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-stretch">
          
          {/* LEFT: Image Sliding Container (Linked to /industries) */}
          <Link 
            to="/industries" 
            className="group relative h-[320px] sm:h-[400px] w-full rounded-lg overflow-hidden bg-[#031424] shadow-lg border border-slate-200 cursor-pointer block"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={slideImages[currentIndex].image}
                alt={slideImages[currentIndex].name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 0.85, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />

            {/* Active Slide Badge & Title */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col items-start gap-1">
              <span className="text-[10px] font-bold text-[#0082FB] tracking-widest uppercase bg-[#0082FB]/10 border border-[#0082FB]/30 px-2.5 py-1 rounded">
                Featured Industry
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
                {slideImages[currentIndex].name}
              </h3>
            </div>

            {/* Hover Prompt Badge */}
            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-[11px] font-semibold text-white tracking-wider flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#0082FB] transition-all duration-300">
              View All Industries
              <span>→</span>
            </div>

            {/* Slide Progress Indicators */}
            <div className="absolute bottom-3 left-6 z-20 flex gap-1.5">
              {slideImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-6 bg-[#0082FB]" : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </Link>

          {/* RIGHT: Text Content - How We Support Industries */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-slate-200/80">
            <div>
              <span className="text-xs font-bold text-[#0082FB] tracking-widest uppercase mb-2 block">
                Engineering Excellence
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#031424] uppercase tracking-wide mb-4">
                How We Support Industries
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                We deliver high-precision sheet metal fabrication, tooling, and fully integrated assembly solutions engineered specifically to meet stringent OEM standards across mission-critical sectors.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3.5 mb-8">
                {[
                  "Custom tooling & prototype development for specialized applications",
                  "High-volume precision sheet metal manufacturing and pressing",
                  "Automated powder coating compliant with industrial durability norms",
                  "End-to-end electro-mechanical integration and testing"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="text-[#0082FB] font-bold text-base leading-none mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Link */}
            <Link to="/industries" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#031424] hover:bg-[#0082FB] transition-colors duration-300 text-white font-bold text-xs tracking-wider uppercase px-6 py-3.5 rounded flex items-center justify-center gap-2 cursor-pointer shadow-sm">
                Explore More
                <span className="text-sm font-bold">→</span>
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}