import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { facility_image } from "../../image/image";

const slideImages = [
  {
    name: "TOOL ROOM",
    image: facility_image.tool_room,
  },
  {
    name: "SHOP FLOOR OVERVIEW",
    image: facility_image.shop_flor_01,
  },
  {
    name: "NPD ROOM",
    image: facility_image.npd_room,
  },
  {
    name: "INTEGRATED SHOP FLOOR",
    image: facility_image.shop_flor_02,
  },
  {
    name: "UNIT 1 & 3",
    image: facility_image.unit_01_03,
  },
  {
    name: "UNIT 2",
    image: facility_image.unit_02,
  },
  {
    name: "UNIT 5",
    image: facility_image.unit_05,
  }
];

export default function FacilitiesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide images every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="facilities-preview" className="bg-[#F8FAFC] py-6 px-4 lg:px-8 w-full select-none">
      <div className="max-w-[85rem] mx-auto flex flex-col items-center">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12161A] tracking-wider uppercase">
            OUR FACILITIES
          </h2>
          <div className="w-16 md:w-20 h-[4px] bg-[#4F9B28] mt-3 rounded-full" />
        </div>

        {/* 2-Column Split Layout: Equal Height Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          
          {/* LEFT: Text Content - Infrastructure & Capabilities */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-sm border border-slate-200/90 h-full">
            <div>
              <span className="text-xs font-black text-[#3b781d] tracking-widest uppercase mb-2 block">
                Infrastructure & Capabilities
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#12161A] uppercase tracking-wide mb-4">
                State-of-the-Art Manufacturing
              </h3>
              
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                Distributed manufacturing ecosystems engineered to manage scaling demands, complex toolroom engineering, and multi-tier electro-mechanical structural projects.
              </p>

              {/* Feature Points */}
              <ul className="space-y-3.5 mb-8">
                {[
                  "Dedicated New Product Development (NPD) & rapid prototyping units",
                  "Advanced Tool Room with CNC, Wire Cut, and Surface Grinding equipment",
                  "Automated Powder Coating line integrated with SCADA controls",
                  "Specialized assembly & Obeya quality management centers"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-bold">
                    <span className="p-0.5 bg-[#4F9B28]/15 text-[#3b781d] rounded text-xs font-black shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Link */}
            <div className="pt-2">
              <Link to="/facilities" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#E31B23] hover:bg-[#C8141B] transition-colors duration-300 text-white font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95">
                  <span>Explore Facilities</span>
                  <span className="text-sm font-bold">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT: Pure CSS Image Sliding Container */}
          <div className="flex h-full min-h-[360px] sm:min-h-[420px] lg:min-h-0">
            <Link 
              to="/facilities" 
              className="group relative w-full h-full rounded-xl overflow-hidden bg-[#12161A] shadow-md border border-slate-200/90 cursor-pointer block flex-1"
            >
              {/* Render all slide images and crossfade with pure CSS opacity transitions */}
              {slideImages.map((slide, idx) => (
                <img
                  key={idx}
                  src={slide.image}
                  alt={slide.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
                    idx === currentIndex ? "opacity-90 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              ))}

              {/* High-Contrast Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Active Slide Badge & Title */}
              <div className="absolute bottom-8 left-6 right-6 z-20 flex flex-col items-start gap-1.5">
                <span className="text-[10px] font-black text-[#4F9B28] tracking-widest uppercase bg-[#12161A]/90 border border-[#4F9B28]/40 px-2.5 py-1 rounded shadow-sm">
                  Facility Showcase
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide uppercase drop-shadow-md">
                  {slideImages[currentIndex].name}
                </h3>
              </div>

              {/* Hover Prompt Badge */}
              <div className="absolute top-4 right-4 z-20 bg-[#12161A]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-[11px] font-black text-white tracking-wider flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#E31B23] transition-all duration-300 shadow">
                <span>View All Facilities</span>
                <span className="text-sm font-bold">&rarr;</span>
              </div>

              {/* Slide Progress Indicators */}
              <div className="absolute bottom-3 left-6 z-20 flex gap-1.5">
                {slideImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex ? "w-7 bg-[#4F9B28]" : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}