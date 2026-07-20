import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Renamed to avoid collision
import { Link as RouterLink } from "react-router-dom"; // Added for routing to /contact

const statsData = [
  {
    value: "20+",
    label: "Years of Excellence",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0082FB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    value: "5",
    label: "Manufacturing Units",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0082FB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    value: "15,000+",
    label: "Sq. Meters Built-up Area",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0082FB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    value: "250+",
    label: "Employees",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0082FB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    value: "150+",
    label: "Tools Manufactured Per Year",
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0082FB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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

export default function Hero() {
  const [animationKey] = useState(0);

  const line1Chars = Array.from("Precision Sheet Metal ");
  const line2Chars = Array.from("Manufacturing For ");
  const line3Chars = Array.from("Global OEMs");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.025 }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline",
      transition: { duration: 0.4 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut", delay: 1.2 } 
    }
  };

  const taglineParentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.4 
      }
    }
  };

  const taglineChildVariants = {
    hidden: { filter: "blur(4px)", opacity: 0, y: 8 },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col justify-between bg-[#031424] overflow-hidden">
      
      {/* Background Graphic Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/image/hero-bg.png"
          alt="Precision Laser Manufacturing"
          className="w-full h-full object-cover object-right md:object-[80%_center] pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031424] via-[#031424]/90 sm:via-[#031424]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031424] via-transparent to-transparent" />
      </div>

      {/* Main Copy Hero Content Blocks */}
      <div className="max-w-[90rem] mx-auto w-full px-4 sm:px-6 lg:px-8 z-10 flex-grow flex items-center pt-28 sm:pt-36 pb-16 lg:pb-24">
        <div className="max-w-3xl flex flex-col gap-5 sm:gap-6">
          
          {/* Headline Container */}
          <motion.div
            key={animationKey}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-1 sm:gap-1.5 select-none font-extrabold tracking-wide uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {/* Line 1 */}
            <h1 className="text-white leading-[1.15]">
              {line1Chars.map((char, index) => (
                <motion.span key={`l1-${index}`} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Line 2 */}
            <h1 className="text-white leading-[1.15]">
              {line2Chars.map((char, index) => (
                <motion.span key={`l2-${index}`} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>

            {/* Line 3 */}
            <span className="text-[#0082FB] inline-block min-h-[1.2em]">
              {line3Chars.map((char, index) => (
                <motion.span key={`l3-${index}`} variants={letterVariants}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.div>

          {/* Taglines */}
          <motion.div 
            key={`tagline-${animationKey}`}
            variants={taglineParentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-gray-300 font-medium text-xs sm:text-sm md:text-base tracking-wide max-w-xl"
          >
            {taglines.map((item, index) => (
              <span key={index} className="flex items-center gap-2 sm:gap-3">
                <motion.span variants={taglineChildVariants}>
                  {item}
                </motion.span>
                {index < taglines.length - 1 && (
                  <motion.span 
                    variants={taglineChildVariants} 
                    className="text-[#0082FB] font-black hidden sm:inline"
                  >
                    |
                  </motion.span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto"
          >
            {/* Smooth Scroll Link to Capabilities Section */}
            <ScrollLink to="capabilities" smooth={true} duration={700} offset={-80} className="w-full sm:w-auto">
              <button className="w-full bg-[#0082FB] hover:bg-[#0072de] transition-colors text-white font-bold text-xs tracking-wider uppercase px-6 py-4 rounded flex items-center justify-center gap-2 cursor-pointer shadow-md">
                Explore Capabilities
                <span className="text-sm font-bold">→</span>
              </button>
            </ScrollLink>

            {/* Router Link routing directly to the Contact Page */}
            <RouterLink to="/contact" className="w-full sm:w-auto">
              <button className="w-full border border-gray-400 hover:border-white hover:bg-white/5 transition-all text-white font-bold text-xs tracking-wider uppercase px-6 py-4 rounded cursor-pointer text-center">
                Contact Sales
              </button>
            </RouterLink>
          </motion.div>
        </div>
      </div>

      {/* Bottom Matrix Strip */}
      <div className="w-full bg-[#031424]/95 border-t border-gray-800/80 backdrop-blur-sm z-10 relative">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-6 gap-x-4 sm:gap-x-6 items-start">
            
            {statsData.map((stat, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-2.5 sm:gap-3.5 px-1 xl:border-r xl:border-gray-800/60 last-of-type:border-none"
              >
                <div className="mt-0.5 flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-none tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-gray-400 tracking-wide mt-1.5 leading-snug uppercase">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Certifications */}
            <div className="flex items-start gap-2.5 sm:gap-3.5 px-1 col-span-2 md:col-span-1">
              <div className="mt-0.5 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-[#0082FB]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide leading-tight uppercase">
                  ISO 9001:2015 <br className="hidden sm:inline" />
                  ISO 14001:2015
                </span>
                <span className="text-[9px] font-medium text-gray-500 tracking-wider mt-1 uppercase">
                  ZED Certified
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}