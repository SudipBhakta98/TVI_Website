import React from 'react';
import { motion } from "framer-motion";

const metrics = [
  {
    value: "2003",
    label: "Year Founded",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    )
  },
  {
    value: "6",
    label: "Manufacturing Units",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5M5.25 21H2.25m3.375 0h8.25m-11.625 0h3.75m-3.75 0v-6.75A2.25 2.25 0 015.25 12h3.75a2.25 2.25 0 012.25 2.25v6.75m-7.5-10.5h.008v.008H3.75V10.5zm0 3h.008v.008H3.75v-.008zm3-3h.008v.008H6.75V10.5zm0 3h.008v.008H6.75v-.008zM11.25 7.5h.008v.008h-.008V7.5zM11.25 10.5h.008v.008h-.008v-.008zm3-3h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm3-3h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    value: "11,000+",
    label: "Sq. Meters Built-up Area",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m-4.179-2.25L12 7.5l9.75 4.5m-9.75-4.5V3m0 9l4.179-2.25m1.392 5.25l4.179-2.25m-8.358 2.25L2.25 12l4.179 2.25m0 0L12 16.5l5.771-3m0 0L21 12l-4.229-2.25m0 4.5L12 16.5m0 0V21m0-9L6.429 9.75" />
      </svg>
    )
  },
  {
    value: "180+",
    label: "Employees",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.656-2.51 9.947 9.947 0 01-6.222 0 3 3 0 00-4.656 2.51 9.094 9.094 0 003.741.479M12 12a3 3 0 100-6 3 3 0 000 6zm-4.34-1.28a3 3 0 110-6 3 3 0 010 6zm8.68 0a3 3 0 110-6 3 3 0 010 6z" />
      </svg>
    )
  }
];

const values = [
  {
    title: "Quality First",
    description: "Zero defect is our goal",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  },
  {
    title: "Customer Focus",
    description: "We grow with our customers",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "Technology drives us",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a3 3 0 10-3-3m3 3a3 3 0 103-3m-9 6h12a3 3 0 013 3v1.5a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V15a3 3 0 013-3z" />
      </svg>
    )
  },
  {
    title: "Integrity",
    description: "We do the right thing",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.333 9-6.03 9-11.623 0-1.31-.21-2.57-.598-3.751A11.956 11.956 0 0112 2.714z" />
      </svg>
    )
  },
  {
    title: "Sustainability",
    description: "Committed to a better future",
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13.5m0-13.5a9 9 0 019 9c0 2.25-1.5 4.5-3.75 5.25M12 3a9 9 0 00-9 9c0 2.25 1.5 4.5 3.75 5.25M12 16.5A4.5 4.5 0 1012 21a4.5 4.5 0 000-4.5z" />
      </svg>
    )
  }
];

const milestones = [
  {
    year: "2003",
    title: "Technovision industries unit-1",
    description: "Design and manufacturing of press tools mould and special purpose machines",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-500 ring-amber-100 text-amber-500"
  },
  {
    year: "2008",
    title: "Luminous industries",
    description: "Manufacturing of sheet metals components",
    color: "from-orange-500 to-rose-500",
    bg: "bg-orange-500 ring-orange-100 text-orange-500"
  },
  {
    year: "2009",
    title: "Super pack industries",
    description: "Manufacturing of aluminum foil containers",
    color: "from-rose-500 to-purple-600",
    bg: "bg-rose-500 ring-rose-100 text-rose-500"
  },
  {
    year: "2014",
    title: "Addition",
    description: "Manufacturing of electrical assemblies & Shycocan - corona guard",
    color: "from-purple-600 to-blue-600",
    bg: "bg-purple-600 ring-purple-100 text-purple-600"
  },
  {
    year: "2019",
    title: "Technovision Industries unit-2&3",
    description: "Electrical assemblies, and Card frame assemblies for networking",
    color: "from-blue-600 to-emerald-500",
    bg: "bg-blue-600 ring-blue-100 text-blue-600"
  },
  {
    year: "2023",
    title: "Techno vision industries Unit-5",
    description: "Soft & Hard Tooling with Electrical integration",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-500 ring-emerald-100 text-emerald-500"
  },
];

// Animation Configuration Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const arrowVariants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export default function About() {
  return (
    <div id="about" className="w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden">
      
      {/* 1. Hero Cover Section */}
      <div 
        className="relative w-full bg-[#041629] pt-28 pb-32 md:pt-40 md:pb-44 px-6 md:px-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/image/about-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#031120] via-[#031120]/80 to-transparent z-0" />
        
        <div className="relative z-10 max-w-[85rem] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-black tracking-wide uppercase leading-tight"
          >
            ABOUT <br />TECHNOVISION INDUSTRIES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 font-medium text-sm md:text-lg tracking-wide mt-4 max-w-2xl border-l-2 border-blue-500 pl-4"
          >
            Two Decades of Precision Manufacturing Excellence
          </motion.p>
        </div>
      </div>

      {/* Main Blocks Wrapper */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 pb-24 space-y-16">
        
        {/* 2. Our Journey & Milestones Roadmap Section */}
        <div className="w-full -mt-6 md:-mt-6 relative z-20 space-y-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10"
          >
            <div className="mb-6">
              <h2 className="text-[#1E3A8A] font-black text-xl tracking-wider uppercase mb-1">
                OUR JOURNEY &amp; MILESTONES
              </h2>
              <div className="w-12 h-[3px] bg-blue-600 rounded-full" />
            </div>

            {/* ROADMAP TIMELINE CONTAINER */}
            <div className="relative w-full py-2">
              
              {/* DESKTOP LAYOUT (Animated Color Arrows & Scale Shifts) */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="hidden lg:block relative w-full select-none"
              >
                {/* HORIZONTAL COLOR ARROW INTERCONNECTIONS TRACK */}
                <div className="absolute top-[21px] left-6 right-6 h-1.5 z-0 flex items-center justify-between pointer-events-none">
                  {milestones.slice(0, -1).map((milestone, i) => (
                    <div key={i} className="flex-1 relative h-full mx-6">
                      <motion.div 
                        variants={arrowVariants}
                        className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full origin-left`} 
                      />
                      {/* Arrow Pointer Tip Accent */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (i * 0.2) + 0.3 }}
                        viewport={{ once: true }}
                        className="absolute right-0 -top-[3px] w-3 h-3 rotate-45 border-t-2 border-r-2 border-slate-300" 
                        style={{ borderColor: i === 4 ? '#10B981' : i === 3 ? '#2563EB' : i === 2 ? '#9333EA' : '#F43F5E' }}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-6 gap-4 relative z-10">
                  {milestones.map((milestone, idx) => (
                    <motion.div 
                      key={idx}
                      variants={itemVariants}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Interactive Animated Milestone Circle */}
                      <motion.div 
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs text-white tracking-wider shadow-lg ring-4 ${milestone.bg} cursor-pointer z-20`}
                      >
                        {milestone.year}
                      </motion.div>

                      {/* Info Display Cards with Subtle Transition Lift */}
                      <motion.div 
                        whileHover={{ y: -6, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="bg-white border-2 border-slate-50 group-hover:border-blue-500/30 p-4 mt-6 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 min-h-[150px] w-full flex flex-col justify-start relative overflow-hidden"
                      >
                        <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${milestone.color}`} />
                        <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wide mb-2 leading-snug pt-1">
                          {milestone.title}
                        </h4>
                        <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                          {milestone.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* MOBILE & TABLET LAYOUT (Vertical Arrow Connectors Stack) */}
              <div className="lg:hidden relative border-l-4 border-slate-100 pl-6 ml-4 space-y-8">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: idx * 0.05 }}
                    className="relative flex flex-col sm:flex-row sm:items-start gap-4"
                  >
                    {/* Vertical Side Dot Frame */}
                    <motion.div 
                      whileTap={{ scale: 0.9 }}
                      className={`absolute -left-[38px] top-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] text-white shadow-md ring-4 ${milestone.bg} z-10`}
                    >
                      {idx + 1}
                    </motion.div>

                    {/* Content Box */}
                    <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-xs w-full relative overflow-hidden">
                      <div className={`absolute left-0 inset-y-0 w-1 bg-gradient-to-b ${milestone.color}`} />
                      <span className="inline-block bg-blue-50 text-blue-600 text-xs font-black px-2.5 py-1 rounded-md mb-2 tracking-wider">
                        {milestone.year}
                      </span>
                      <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wide mb-1.5">
                        {milestone.title}
                      </h4>
                      <p className="text-slate-500 text-xs font-medium leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Bottom Row CTA Anchor Elements */}
            {/* <div className="mt-12 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button className="bg-[#0B57D0] hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
                Connect With Us 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div> */}
          </motion.div>

          {/* Core Corporate Statistics Counter Row Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full bg-white rounded-xl shadow-md border border-slate-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center"
          >
            {metrics.map((metric, idx) => (
              <div key={idx} className="flex items-start gap-3 sm:gap-4 justify-start lg:justify-center">
                <div className="p-2 bg-blue-50 rounded-lg flex-shrink-0">
                  {metric.icon}
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wide mt-0.5 leading-snug">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 3. Our Vision & Mission Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-slate-100 relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
            <h3 className="text-[#1E3A8A] font-black text-lg tracking-wider uppercase mb-4 flex items-center gap-3">
              OUR VISION
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              To be a globally recognized benchmark in high-precision engineering solutions, fostering sustainable industrial ecosystems through advanced technological continuous innovation and an absolute zero-defect engineering mindset.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-slate-100 relative overflow-hidden group"
          >
            <span className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500" />
            <h3 className="text-emerald-800 font-black text-lg tracking-wider uppercase mb-4 flex items-center gap-3">
              OUR MISSION
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              To reliably empower international manufacturing layers by delivering top-tier components, embedding agile engineering processes, ensuring maximum baseline transparency, and consistently exceeding client expectations on every delivery metric.
            </p>
          </motion.div>

        </div>

        {/* 4. Managing Director's Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* MD Photo Frame Container */}
            <div className="lg:col-span-4 bg-slate-100 min-h-[360px] lg:min-h-full relative group overflow-hidden">
              <img 
                src="/image/Rao-Sir.jpeg" 
                alt="Managing Director - Lakshmi Narasimha Rao PVV" 
                className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-900 text-slate-400 p-4">
                <svg className="w-16 h-16 text-slate-600 mb-2" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Managing Director</span>
              </div>
            </div>

            {/* Message Body Block */}
            <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-[#1E3A8A] font-black text-xl tracking-wider uppercase mb-2">
                FROM THE MD's DESK
              </h3>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />
              
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-slate-100 font-serif select-none pointer-events-none">“</span>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium italic relative z-10">
                  For over two decades, our driving ethos at Technovision Industries has been built entirely around absolute manufacturing fidelity. We do not just construct products; we design scalable partnerships that help our global client clusters cross technical boundaries safely. Through constant hardware upgrades and deep engineering focus, we remain unconditionally bound to zero-compromise outputs.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h5 className="text-slate-900 font-black text-base uppercase">
                  Lakshmi Narasimha Rao PVV
                </h5>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  Managing Director — Technovision Industries
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 5. Our Values Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center"
        >
          <div className="max-w-md mx-auto mb-10">
            <h2 className="text-[#1E3A8A] font-black text-xl tracking-wider uppercase">
              OUR VALUES
            </h2>
            <div className="w-10 h-[2px] bg-blue-500 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center px-2 pt-6 sm:pt-0 ${idx === 0 ? 'sm:pl-0' : ''}`}
              >
                <div className="p-3 bg-blue-50 rounded-full mb-4 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h4 className="text-slate-950 font-black text-sm uppercase tracking-wide">
                  {val.title}
                </h4>
                <p className="text-slate-400 font-semibold text-[11px] sm:text-xs uppercase mt-2 max-w-[150px] leading-tight">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 6. Corporate Office Location Block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Address Information Container */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-slate-50 border-r border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-[#0B57D0] block mb-2">
                  HEADQUARTERS
                </span>
                <h2 className="text-[#1E3A8A] font-black text-xl tracking-wider uppercase mb-6">
                  CORPORATE OFFICE
                </h2>
                
                <div className="flex items-start gap-3 mt-4">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25c0-4.142 3.358-7.5 7.5-7.5c4.142 0 7.5 3.358 7.5 7.5z" />
                  </svg>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">Registered Address</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed normal-case">
                      SY.NO 261/3 &amp; SY 261/4 Haragadde Village,<br />
                      Jigani Hobli Taluk, Bengaluru,<br />
                      Karnataka 560105
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <a 
                  href="https://maps.google.com/?q=12.768059655900453,77.64674574174775" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0A1118] hover:bg-slate-800 text-white font-bold text-[11px] tracking-wider uppercase py-3 px-5 rounded-md shadow-xs transition-colors"
                >
                  Get Directions
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Google Map Frame Panel */}
            <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-auto min-h-[350px] w-full bg-slate-100 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.725907481546!2d77.6441708750736!3d12.768059687529458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ2JzA1LjAiTiA3N8KwMzgnNDguMyJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Technovision Industries Corporate Office Location"
              />
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  );
}