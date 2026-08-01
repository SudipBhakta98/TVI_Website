import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import industriesAssets from "../assets/industriesAssets.js";

const industryKeys = Object.keys(industriesAssets);

export default function ServiceIndustries() {
  return (
    <><SEO
  title="Industries We Serve | Data Center, Defence, Automotive & More | Technovision Industries"
  description="Technovision Industries delivers precision sheet metal manufacturing for data centers, defence, medical, and automotive OEMs."
  path="/serviceIndustries"
/>
    <section id="industries" className="bg-[#F8FAFC] py-8 px-4 lg:px-8 w-full relative">
      <div className="max-w-[95rem] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h1 className="text-2xl md:text-3xl font-black text-[#12161A] tracking-wider uppercase">
            INDUSTRIES WE SERVE
          </h1>
          <div className="w-16 h-[4px] bg-[#4F9B28] mt-3 rounded-full" />
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
          
          {/* LEFT: 2 Columns Grid of Industry Cards (Order 1 on mobile) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5 w-full order-1 lg:order-1">
            {industryKeys.map((key) => {
              const industry = industriesAssets[key];

              return (
                <Link
                  key={key}
                  to={`/serviceIndustries/${key}`}
                  className="group relative h-40 sm:h-44 w-full rounded-lg overflow-hidden bg-[#12161A] flex flex-col justify-between p-3 sm:p-4 border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0px_10px_25px_rgba(18,22,26,0.25)] cursor-pointer"
                >
                  {/* Background Image Container */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-all duration-500 filter contrast-125 grayscale opacity-45 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-65"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                  </div>

                  {/* Hover Precision Green Indicator Line */}
                  <div className="absolute bottom-0 left-0 h-[3px] bg-[#4F9B28] z-20 w-0 group-hover:w-full transition-all duration-300" />

                  {/* Top-Right Badge: Fixed to Top 0 Right 0 corner */}
                  <div className="absolute top-2 right-2 z-20 bg-red-600 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[9px] sm:text-[10px] font-black text-white tracking-wider flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:bg-lime-600 transition-all duration-300 shadow">
                    <span>View details</span>
                    <span className="text-xs font-bold">&rarr;</span>
                  </div>

                  {/* Bottom Title Container */}
                  <div className="z-10 mt-auto w-full border-t border-white/10 pt-2">
                    <h3 className="text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase group-hover:text-lime-600 transition-colors duration-300 line-clamp-2 drop-shadow-md">
                      {industry.name}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Capabilities & Text Context (Order 2 on mobile) */}
          <div className="lg:col-span-7 w-full bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200/80 order-2 lg:order-2">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-xs font-black text-[#3B781D] tracking-widest uppercase bg-[#4F9B28]/15 px-3 py-1 rounded-md inline-block mb-3 border border-[#4F9B28]/20">
                  Our Capabilities & Solutions
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#12161A] tracking-wide uppercase">
                  How We Help Every Industry We Serve
                </h3>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                At Technovision Industries, we bridge the gap between concept and high-precision production. Across all mission-critical sectors—from data centers and defence to medical and automotive—we deliver build-to-print sheet metal fabrication, custom tooling, advanced laser/CNC processing, and complete electro-mechanical integration.
              </p>

              <div className="space-y-4 pt-2">
                <div className="bg-[#F8FAFC] p-4 rounded-lg border-l-4 border-[#4F9B28] shadow-xs">
                  <h4 className="text-xs sm:text-sm font-black text-[#12161A] uppercase tracking-wider mb-1">
                    Custom Build-to-Print Fabrication
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    We strictly adhere to your exact CAD designs, ensuring tight dimensional tolerances, absolute material traceability, and flawless structural integrity.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-4 rounded-lg border-l-4 border-[#4F9B28] shadow-xs">
                  <h4 className="text-xs sm:text-sm font-black text-[#12161A] uppercase tracking-wider mb-1">
                    Electro-Mechanical Integration
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    We go beyond raw sheet metal by assembling internal components, routing wiring harnesses, and testing fully integrated systems ready for deployment.
                  </p>
                </div>

                <div className="bg-[#F8FAFC] p-4 rounded-lg border-l-4 border-[#4F9B28] shadow-xs">
                  <h4 className="text-xs sm:text-sm font-black text-[#12161A] uppercase tracking-wider mb-1">
                    Surface Treatment & Quality Control
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium">
                    Equipped with in-house powder coating lines and advanced CMM/VMS inspection systems, we guarantee maximum corrosion resistance and zero-defect quality.
                  </p>
                </div>
              </div>

              <div className="pt-4 text-center border-t border-slate-100">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Click <span className="text-[#E31B23]">"View details"</span> or any card on the left to view the dedicated industry page.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section></>
  );
}