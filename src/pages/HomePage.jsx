import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { 
  HiCalendar, 
  HiBuildingOffice2, 
  HiMapPin, 
  HiUsers, 
  HiCog6Tooth, 
  HiShieldCheck 
} from "react-icons/hi2";
import { root_image } from "../../image/image.js";
import ServiceIndustriesPreview from "../components/homeComponents/ServiceIndustriesPreview.jsx";
import ProductsPreview from "../components/homeComponents/ProductPreview.jsx";
import FacilitiesPreview from "../components/homeComponents/FacilitiesPreview.jsx";
import AboutPreview from "../components/homeComponents/AboutPreview.jsx";
import QualityPreview from "../components/homeComponents/QualityPreview.jsx";
import ContactUsPreview from "../components/homeComponents/ContactPreview.jsx";
import CapabilitiesPreview from "../components/homeComponents/CapabilitiesPreview.jsx";

const statsData = [
  {
    value: "20+",
    label: "Years Excellence",
    icon: <HiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-lime-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    value: "5",
    label: "Mfg. Units",
    icon: <HiBuildingOffice2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-lime-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    value: "15,000+",
    label: "Sq. M Area",
    icon: <HiMapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-lime-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    value: "250+",
    label: "Employees",
    icon: <HiUsers className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-lime-500 transition-transform duration-300 group-hover:scale-110" />,
  },
  {
    value: "150+",
    label: "Tools / Year",
    icon: <HiCog6Tooth className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-lime-500 transition-transform duration-300 group-hover:rotate-45" />,
  },
];

const taglines = [
  "End-to-End Manufacturing",
  "Tooling",
  "Fabrication",
  "Powder Coating",
  "Assembly",
];

export default function Home() {
  return (
    <>
      {/* Custom Keyframe Styles */}
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* High Initial Zoom -> Fast Zoom Out Curve */
        @keyframes fastZoomOut {
          from {
            transform: scale(1.25);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-slide-up {
          animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 1.2s fast ease-out transition for the image */
        .animate-zoom-out-fast {
          animation: fastZoomOut 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}</style>

      {/* Hero Section Container */}
      <section
        id="hero"
        className="relative w-full h-auto sm:h-[calc(100vh-4rem)] sm:min-h-[500px] flex flex-col justify-between bg-[#12161A] overflow-hidden"
      >
        {/* Main Hero Banner with Horizontal Image Fit */}
        <div className="relative w-full flex-1 flex items-center min-h-[320px] sm:min-h-0 py-6 sm:py-8 lg:py-10">
          
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={root_image.hero_bg}
              alt="Precision Laser Manufacturing"
              className="w-full h-full object-cover sm:object-cover object-right pointer-events-none opacity-80 animate-zoom-out-fast"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#12161A] via-[#12161A]/85 sm:via-[#12161A]/70 to-transparent" />
          </div>

          {/* Main Hero Copy Overlay */}
          <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-4xl flex flex-col gap-2.5 sm:gap-4">
              
              {/* Main Animated Headline */}
              <div className="flex flex-col gap-0.5 select-none font-extrabold tracking-wide uppercase text-base xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem]">
                <h1 className="text-white leading-tight whitespace-nowrap opacity-0 animate-fade-slide-up">
                  Precision Sheet Metal
                </h1>
                <h1 className="text-white leading-tight opacity-0 animate-fade-slide-up animation-delay-100">
                  Manufacturing For
                </h1>
                <span className="text-lime-500 leading-tight inline-block opacity-0 animate-fade-slide-up animation-delay-200 transition-all duration-300 hover:brightness-125">
                  Global OEMs
                </span>
              </div>

              {/* Taglines with Staggered Entrance */}
              <div className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-3 gap-y-0.5 text-gray-200 font-medium text-[9px] xs:text-[11px] sm:text-sm tracking-wide max-w-2xl opacity-0 animate-fade-slide-up animation-delay-300">
                {taglines.map((item, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-3 group transition-colors duration-200 hover:text-white"
                  >
                    <span className="whitespace-nowrap group-hover:text-lime-400 transition-colors">
                      {item}
                    </span>
                    {index < taglines.length - 1 && (
                      <span className="text-lime-600 font-black">|</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Call to Actions */}
              <div className="flex flex-row items-center gap-2 sm:gap-4 mt-1 sm:mt-2 w-full sm:w-auto opacity-0 animate-fade-slide-up animation-delay-400">
                {/* Primary CTA */}
                <RouterLink to="/capabilities" className="flex-1 sm:flex-none">
                  <button className="group w-full sm:w-auto bg-red-600 hover:bg-lime-600 active:scale-95 hover:scale-105 transition-all duration-300 text-white font-bold text-[9px] xs:text-[10px] sm:text-sm tracking-wider uppercase px-2.5 sm:px-5 py-2 sm:py-3 rounded flex items-center justify-center gap-1.5 cursor-pointer shadow-lg hover:shadow-lime-600/30">
                    <span>Explore Capabilities</span>
                    <span className="text-xs sm:text-sm font-bold transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </RouterLink>

                {/* Secondary CTA */}
                <RouterLink to="/contact" className="flex-1 sm:flex-none">
                  <button className="w-full border border-gray-400/80 hover:border-lime-500 hover:text-lime-400 hover:bg-white/10 active:scale-95 hover:scale-105 transition-all duration-300 text-white font-bold text-[9px] xs:text-[10px] sm:text-sm tracking-wider uppercase px-2.5 sm:px-5 py-2 sm:py-3 rounded cursor-pointer text-center bg-[#12161A]/40 backdrop-blur-xs">
                    Contact Sales
                  </button>
                </RouterLink>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Matrix Strip */}
        <div className="w-full bg-[#12161A] border-t border-gray-800/80 z-10 relative">
          <div className="max-w-[90rem] mx-auto px-1.5 sm:px-6 lg:px-8 py-2.5 sm:py-4">
            <div className="grid grid-cols-6 gap-x-0.5 sm:gap-x-4 items-center">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-0.5 sm:gap-2 px-0.5 border-r border-gray-800/60 last-of-type:border-none transition-colors duration-200"
                >
                  <div className="mt-0.5 flex-shrink-0">{stat.icon}</div>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-base lg:text-xl font-black text-white leading-none tracking-tight transition-colors duration-200 group-hover:text-lime-400">
                      {stat.value}
                    </span>
                    <span className="text-[7px] sm:text-[10px] font-semibold text-gray-400 tracking-wide mt-0.5 leading-tight uppercase transition-colors duration-200 group-hover:text-slate-200">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Certifications (6th Column) */}
              <div className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-0.5 sm:gap-2 px-0.5">
                <div className="mt-0.5 flex-shrink-0">
                  <HiShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-lime-500 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[7px] sm:text-[10px] font-bold text-white tracking-wide leading-tight uppercase transition-colors duration-200 group-hover:text-lime-400">
                    ISO 9001 &amp; 14001
                  </span>
                  <span className="text-[6.5px] sm:text-[9px] font-medium text-gray-400 tracking-wider mt-0.5 uppercase transition-colors duration-200 group-hover:text-slate-200">
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
      <CapabilitiesPreview/>
      <ServiceIndustriesPreview />
      <FacilitiesPreview />
      <QualityPreview />
      <ContactUsPreview/>
    </>
  );
}