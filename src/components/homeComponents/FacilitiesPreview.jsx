import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import facilityAssets from "../../assets/facilitiesAssets.js"; // Adjust import path if needed

// Extract images dynamically from facilityAssets
const slideImages = [
  ...facilityAssets.facilitiesData.map((f) => ({ name: f.name, image: f.path })),
  ...facilityAssets.unitsData.map((u) => ({ name: u.name, image: u.path }))
];

export default function FacilitiesPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide images every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 2000);

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

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          
          {/* RIGHT: Slide Container */}
          <div className="flex h-full min-h-[360px] sm:min-h-[420px] lg:min-h-0 order-1 lg:order-2">
            <Link 
              to="/facilities" 
              className="group relative w-full h-full rounded-xl overflow-hidden bg-[#12161A] shadow-md border border-slate-200/90 cursor-pointer block flex-1"
            >
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

              {/* Active Title */}
              <div className="absolute bottom-8 left-6 right-6 z-20 flex flex-col items-start gap-1.5">
                <span className="text-[10px] font-black text-[#4F9B28] tracking-widest uppercase bg-[#12161A]/90 border border-[#4F9B28]/40 px-2.5 py-1 rounded shadow-sm">
                  Facility Showcase
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide uppercase drop-shadow-md">
                  {slideImages[currentIndex]?.name}
                </h3>
              </div>

              {/* View All Prompt */}
              <div className="absolute top-4 right-4 z-20 bg-red-600 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-[11px] font-black text-white tracking-wider flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-lime-600 transition-all duration-300 shadow">
                <span>View All Facilities</span>
                <span className="text-sm font-bold">&rarr;</span>
              </div>

              {/* Slide Dots */}
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

          {/* LEFT: Text Content */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 md:p-10 h-full order-2 lg:order-1">
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

            {/* CTA Button */}
            <div className="pt-2">
              <Link to="/facilities" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-red-600 hover:bg-lime-600 transition-colors duration-300 text-white font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95">
                  <span>Explore Facilities</span>
                  <span className="text-sm font-bold">&rarr;</span>
                </button>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}