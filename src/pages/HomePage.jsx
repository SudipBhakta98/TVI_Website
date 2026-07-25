import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { root_image } from "../../image/image.js";
import IndustriesPreview from "../components/IndustriesPreview.jsx";
import ProductsPreview from "../components/ProductPreview.jsx";
import FacilitiesPreview from "../components/FacilitiesPreview.jsx";
import AboutPreview from "../components/AboutPreview.jsx";
import QualityPreview from "../components/QualityPreview.jsx";

const statsData = [
  {
    value: "20+",
    label: "Years Excellence",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#4F9B28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    value: "5",
    label: "Mfg. Units",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#4F9B28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: "15,000+",
    label: "Sq. M Area",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#4F9B28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    value: "250+",
    label: "Employees",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#4F9B28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    value: "150+",
    label: "Tools / Year",
    icon: (
      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#4F9B28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const taglines = [
  "End-to-End Manufacturing",
  "Tooling",
  "Fabrication",
  "Powder Coating",
  "Assembly"
];

export default function Home() {
  return (
    <>
      {/* Hero Section Container */}
      <section 
        id="hero" 
        className="relative w-full h-auto sm:h-[calc(100vh-4rem)] sm:min-h-[500px] flex flex-col justify-between bg-[#12161A] overflow-hidden"
      >
        
        {/* Main Hero Banner with Horizontal Image Fit */}
        <div className="relative w-full flex-1 flex items-center min-h-[320px] sm:min-h-0 py-6 sm:py-8 lg:py-10">
          
          {/* Background Image: Scaled horizontally to full width */}
          <div className="absolute inset-0 z-0">
            <img
              src={root_image.hero_bg}
              alt="Precision Laser Manufacturing"
              className="w-full h-full object-cover sm:object-cover object-right pointer-events-none opacity-80"
            />
            {/* Desktop and Mobile Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#12161A] via-[#12161A]/80 sm:via-[#12161A]/70 to-transparent" />
          </div>

          {/* Main Hero Copy Overlay */}
          <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl flex flex-col gap-2.5 sm:gap-4 animate-fade-in">
              
              {/* Main Headline */}
              <div className="flex flex-col gap-0.5 select-none font-extrabold tracking-wide uppercase text-base xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem]">
                <h1 className="text-white leading-tight whitespace-nowrap">
                  Precision Sheet Metal
                </h1>
                <h1 className="text-white leading-tight">
                  Manufacturing For
                </h1>
                <span className="text-[#4F9B28] leading-tight inline-block">
                  Global OEMs
                </span>
              </div>

              {/* Taglines */}
              <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-3 gap-y-0.5 text-gray-200 font-medium text-[9px] xs:text-[11px] sm:text-sm tracking-wide max-w-2xl">
                {taglines.map((item, index) => (
                  <span key={index} className="flex items-center gap-1.5 sm:gap-3">
                    <span className="whitespace-nowrap">{item}</span>
                    {index < taglines.length - 1 && (
                      <span className="text-[#4F9B28] font-black">
                        |
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-row items-center gap-2 sm:gap-4 mt-1 sm:mt-2 w-full sm:w-auto">
                
                {/* Primary CTA */}
                <RouterLink to="/capabilities" className="flex-1 sm:flex-none">
                  <button className="w-full sm:w-auto bg-[#E31B23] hover:bg-[#C8141B] active:scale-95 transition-all text-white font-bold text-[9px] xs:text-[10px] sm:text-sm tracking-wider uppercase px-2.5 sm:px-5 py-2 sm:py-3 rounded flex items-center justify-center gap-1 cursor-pointer shadow-lg">
                    Explore Capabilities
                    <span className="text-xs sm:text-sm font-bold">→</span>
                  </button>
                </RouterLink>

                {/* Secondary CTA */}
                <RouterLink to="/contact" className="flex-1 sm:flex-none">
                  <button className="w-full border border-gray-400/80 hover:border-[#4F9B28] hover:text-[#4F9B28] hover:bg-white/5 active:scale-95 transition-all text-white font-bold text-[9px] xs:text-[10px] sm:text-sm tracking-wider uppercase px-2.5 sm:px-5 py-2 sm:py-3 rounded cursor-pointer text-center bg-[#12161A]/40 backdrop-blur-xs">
                    Contact Sales
                  </button>
                </RouterLink>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Matrix Strip - Follows naturally below the image header */}
        <div className="w-full bg-[#12161A] border-t border-gray-800/80 z-10 relative">
          <div className="max-w-[90rem] mx-auto px-1.5 sm:px-6 lg:px-8 py-2.5 sm:py-4">
            
            <div className="grid grid-cols-6 gap-x-0.5 sm:gap-x-4 items-center">
              
              {statsData.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-0.5 sm:gap-2 px-0.5 border-r border-gray-800/60 last-of-type:border-none"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-base lg:text-xl font-black text-white leading-none tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[7px] sm:text-[10px] font-semibold text-gray-400 tracking-wide mt-0.5 leading-tight uppercase">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Certifications (6th Column) */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-0.5 sm:gap-2 px-0.5">
                <div className="mt-0.5 flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#4F9B28]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] sm:text-[10px] font-bold text-white tracking-wide leading-tight uppercase">
                    ISO 9001 &amp; 14001
                  </span>
                  <span className="text-[6.5px] sm:text-[9px] font-medium text-gray-400 tracking-wider mt-0.5 uppercase">
                    ZED
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </section>

      {/* Child Previews */}
      <AboutPreview />
      <ProductsPreview />
      <IndustriesPreview />
      <FacilitiesPreview />
      <QualityPreview />
    </>
  );
}