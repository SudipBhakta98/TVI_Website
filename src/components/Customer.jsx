import React from "react";
import { motion } from "framer-motion";

const row1 = [
  { src: "/image/customer/yaskawa.png" },
  { src: "/image/customer/schneider.png" },
  { src: "/image/customer/reliance.png" },
  { src: "/image/customer/hitachi.png" },
  { src: "/image/customer/ge.png" },
  { src: "/image/customer/delta.png" },
  { src: "/image/customer/apw.png" },
  { src: "/image/customer/ace.png" },
];

const row2 = [
  { src: "/image/customer/thai_summit.png" },
  { src: "/image/customer/qwp.png" },
  { src: "/image/customer/prime.png" },
  { src: "/image/customer/eureka.png" },
  { src: "/image/customer/envision.png" },
  { src: "/image/customer/buchler.png" },
  { src: "/image/customer/andrew.png" },
];

export default function CustomerLogos() {
  return (
    <section className="bg-[#F8FAFC] pb-20 pt-6 overflow-hidden border-t border-b border-slate-200">
      
      {/* Animated Header */}
      <div className="max-w-[90rem] mx-auto px-4 lg:px-8 mb-16 text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#031424] text-3xl md:text-4xl font-black tracking-wide uppercase"
        >
          TRUSTED BY INDUSTRY TITANS
        </motion.h2>
        
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="h-[3px] bg-[#0082FB] mx-auto mt-4" 
        />
      </div>

      {/* Marquee Tracks */}
      <div className="relative w-full flex flex-col gap-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-28 before:bg-gradient-to-r before:from-[#F8FAFC] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-28 after:bg-gradient-to-l after:from-[#F8FAFC] after:to-transparent">
        
        {/* ROW 1 */}
        <div className="flex w-max overflow-hidden select-none">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-6 py-2 pr-6"
          >
            {[...row1, ...row1].map((logo, index) => (
              <motion.img 
                key={`r1-${index}`}
                src={logo.src} 
                alt="Customer Logo"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-48 h-24 bg-white border border-slate-200 rounded-xl p-6 shadow-sm cursor-pointer object-contain transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>

        {/* ROW 2 */}
        <div className="flex w-max overflow-hidden select-none">
          <motion.div 
            animate={{ x: ["-50%", 0] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex gap-6 py-2 pr-6"
          >
            {[...row2, ...row2].map((logo, index) => (
              <motion.img 
                key={`r2-${index}`}
                src={logo.src} 
                alt="Customer Logo"
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-48 h-24 bg-white border border-slate-200 rounded-xl p-6 shadow-sm cursor-pointer object-contain transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}