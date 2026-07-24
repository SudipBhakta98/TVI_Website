import { useState, useEffect, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { root_image } from "../../image/image";

const qualitySteps = [
  { 
    step: "01", 
    name: "Incoming Inspection", 
    tagline: "Raw material validation & testing",
    specs: [
      { label: "Check Type", value: "Chemical & Physical analysis" },
      { label: "Material Profile", value: "Thickness & Grade verification" },
      { label: "Compliance", value: "Mill TC matching verification" }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
      </svg>
    )
  },
  { 
    step: "02", 
    name: "In Process Inspection", 
    tagline: "Continuous station routing dimension check",
    specs: [
      { label: "Method", value: "First-piece & random batch check" },
      { label: "Metrics", value: "Dimensional limits & angle profiles" },
      { label: "Traceability", value: "Operator-level data logging" }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    )
  },
  { 
    step: "03", 
    name: "Final Inspection", 
    tagline: "Pre-packaging comprehensive blueprint audit",
    specs: [
      { label: "Check System", value: "Full dimensional clearance profile" },
      { label: "Finishing", value: "Powder coat DFT & verification" },
      { label: "Standard", value: "Customer drawing matching check" }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 9h3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    step: "04", 
    name: "Testing & Validation", 
    tagline: "Stress, load, and performance evaluation",
    specs: [
      { label: "Welding", value: "AWS D1.1 certified check" },
      { label: "Hardware", value: "Torque testing & structural metrics" },
      { label: "Assembly", value: "Functional & component fit logs" }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    step: "05", 
    name: "Packaging & Dispatch", 
    tagline: "Secure outbound logistics assurance",
    specs: [
      { label: "Crating", value: "Custom export-grade protection" },
      { label: "Traceability", value: "Barcode shipping documentation" },
      { label: "Transit", value: "Anti-moisture shrink wrap shield" }
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    )
  }
];

const equipments = [
  "VMS",
  "Height Master",
  "Welding Inspection Equipment",
  "Digital Measuring Instruments",
  "Precision Measuring Instruments",
];

const certifications = [
  {
    title: "ISO 9001:2015",
    authority: "BMQR Certification",
    previewImg: root_image.ISO_9001_2015
  },
  {
    title: "ISO 14001:2015",
    authority: "STAR ISO Certification",
    previewImg: root_image.ISO_14001_2015
  },
  {
    title: "ZED SILVER",
    authority: "Zero Defect Zero Effect (MSME)",
    previewImg: root_image.ZED_Silver
  }
];

const GRID_COLS = "flex flex-col lg:grid lg:grid-cols-[1fr_0.55fr_1fr_0.55fr_1fr_0.55fr_1fr_0.55fr_1fr] w-full";

function HorizontalPathLink({ lit }) {
  return (
    <div className="relative flex items-center justify-center w-full min-h-[32px] lg:min-h-0">
      <div className="h-8 w-[2px] lg:hidden bg-slate-200" />
      <div
        className={`absolute h-8 w-[2px] lg:hidden origin-top transition-all duration-700 ease-in-out ${
          lit
            ? "scale-y-100 bg-gradient-to-b from-emerald-500 to-green-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
            : "scale-y-0 bg-transparent"
        }`}
      />
      <div className="hidden lg:block h-[2px] w-full bg-slate-200" />
      <div
        className={`absolute hidden lg:block h-[2px] w-full origin-left transition-all duration-700 ease-in-out ${
          lit
            ? "scale-x-100 bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
            : "scale-x-0 bg-transparent"
        }`}
      />
    </div>
  );
}

export default function Quality() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);
  
  const activeStage = qualitySteps[active] || qualitySteps[qualitySteps.length - 1];

  useEffect(() => {
    if (paused) return;
    
    const id = setInterval(() => {
      setActive((prev) => {
        if (prev === qualitySteps.length - 1) {
          setPaused(true);
          if (resumeTimer.current) clearTimeout(resumeTimer.current);
          
          resumeTimer.current = setTimeout(() => {
            setActive(-1);
            resumeTimer.current = setTimeout(() => {
              setActive(0);
              setPaused(false);
            }, 1500);
          }, 1500);
          
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(id);
  }, [paused]);

  const handleSelect = (index) => {
    setActive(index);
    setPaused(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), 5000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section id="quality" className="relative w-full bg-[#F8FAFC]">
      
      {/* 1. Hero Section */}
      <div className="relative w-full bg-[#031424] pt-24 pb-36 md:pt-32 md:pb-44 px-4 lg:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${root_image.quality_bg})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#031424] via-[#031424]/85 to-transparent" />

        <div className="relative z-10 max-w-[90rem] mx-auto">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-4xl font-black tracking-wider uppercase"
          >
            QUALITY ASSURANCE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="text-gray-400 font-medium text-sm md:text-base tracking-wide mt-3"
          >
            Zero Defect. Zero Compromise.
          </motion.p>
        </div>
      </div>

      {/* 2. Content Layout */}
      <div className="max-w-[90rem] mx-auto px-4 lg:px-16 -mt-20 md:-mt-24 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Box A: Process Flow */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-lg shadow-md border border-slate-100 p-4 sm:p-6 md:p-8 relative overflow-hidden"
          >
            <span className="absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-emerald-500/20" />
            <span className="absolute -right-px -top-px h-6 w-6 border-r-2 border-t-2 border-emerald-500/20" />
            <span className="absolute -bottom-px -left-px h-6 w-6 border-b-2 border-l-2 border-emerald-500/20" />
            <span className="absolute -bottom-px -right-px h-6 w-6 border-b-2 border-r-2 border-emerald-500/20" />

            <h3 className="text-[#1E293B] font-extrabold text-base tracking-wider uppercase mb-8 lg:mb-12 border-b border-slate-100 pb-3">
              OUR QUALITY PROCESS
            </h3>

            <div className="w-full overflow-visible pb-4 pt-2">
              <div className={GRID_COLS}>
                {qualitySteps.map((stage, i) => {
                  const isActive = active === i;
                  const isPassedOrActive = active >= i && active !== -1;
                  
                  return (
                    <Fragment key={stage.step}>
                      <div className="flex justify-center py-2 overflow-visible">
                        <motion.button
                          onClick={() => handleSelect(i)}
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="group relative flex flex-col items-center gap-3 sm:gap-4 focus:outline-none cursor-pointer w-full overflow-visible"
                        >
                          <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-visible">
                            {isActive && (
                              <motion.div
                                layoutId="qualityCircleGlow"
                                className="absolute -inset-2 rounded-full border border-emerald-500/70 bg-emerald-50/5 shadow-[0_0_20px_rgba(16,185,129,0.4)] z-0"
                                transition={{ type: "spring", stiffness: 200, damping: 24 }}
                              />
                            )}
                            
                            <div
                              className={`flex h-full w-full flex-col items-center justify-center rounded-full border transition-all duration-500 relative z-10 ${
                                isActive
                                  ? "border-emerald-500 bg-[#031424] text-white shadow-xl"
                                  : isPassedOrActive
                                  ? "border-white bg-white text-emerald-500 shadow-sm"
                                  : "border-slate-200 bg-white text-slate-400 group-hover:border-slate-400 group-hover:bg-slate-50 group-hover:text-slate-600"
                              }`}
                            >
                              <div className={`transition-transform duration-500 ${isActive ? "text-emerald-400 scale-110" : isPassedOrActive ? "text-emerald-500 scale-105" : "group-hover:scale-105 text-slate-400 group-hover:text-emerald-500"}`}>
                                {stage.icon}
                              </div>
                            </div>
                          </div>

                          <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider text-center max-w-[130px] sm:max-w-[150px] lg:max-w-[110px] leading-tight transition-colors min-h-[24px] lg:min-h-[32px] ${isActive ? "text-emerald-600 font-black" : isPassedOrActive ? "text-emerald-600 font-bold" : "text-slate-500 group-hover:text-slate-800"}`}>
                            {stage.name}
                          </span>
                        </motion.button>
                      </div>

                      {i < qualitySteps.length - 1 && (
                        <HorizontalPathLink lit={active > i && active !== -1} />
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Box B: Equipment */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md border border-slate-100 p-6 sm:p-8 h-full"
          >
            <h3 className="text-[#1E293B] font-extrabold text-base tracking-wider uppercase mb-6 border-b border-slate-100 pb-3">
              QUALITY EQUIPMENT
            </h3>
            <ul className="space-y-4">
              {equipments.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 group text-slate-600 font-semibold text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
                  <span className="group-hover:text-emerald-600 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dynamic Specs Panel */}
          <div className="lg:col-span-3 w-full mt-2">
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6 lg:p-10 shadow-lg relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active === -1 ? "neutral" : active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">
                        STAGE {activeStage.step}
                      </span>
                      <h4 className="text-xl font-black text-slate-900 tracking-tight uppercase">
                        {activeStage.name}
                      </h4>
                    </div>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed font-medium">
                      {activeStage.tagline}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto lg:min-w-[500px]">
                    {activeStage.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-xl border border-slate-100 bg-slate-50 px-5 py-4 shadow-xs hover:border-emerald-200 transition-all"
                      >
                        <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400">
                          {spec.label}
                        </div>
                        <div className="mt-1 text-xs font-bold text-slate-800 break-words">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Document Preview Grid Footer */}
       
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
  className="lg:col-span-3 bg-white rounded-lg shadow-md border border-slate-100 p-6 sm:p-8 mt-2"
>
  <h3 className="text-[#1E293B] font-extrabold text-base tracking-wider uppercase mb-8 border-b border-slate-100 pb-3">
    QUALITY ACCREDITATIONS & CERTIFICATIONS
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {certifications.map((cert) => (
      <div 
        key={cert.title}
        className="flex flex-col bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow"
      >
        {/* Visual Image Preview Area */}
        <div className="relative w-full h-56 bg-slate-100 overflow-hidden group select-none">
          
          {/* Clean Graphic Image Thumbnail instead of clunky iframe controls */}
          <img
            src={cert.previewImg}
            alt={`Certificate snapshot of ${cert.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Dark Smooth Gradient Hover Mask */}
          {/* <div className="absolute inset-0 bg-[#031424]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4" /> */}

          {/* Floating Center Action Button Trigger */}
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 z-10">
            <a 
              href={cert.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded-md shadow-lg flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>View Document</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div> */}
        </div>

        {/* Identification Data Label */}
        <div className="p-4 bg-white border-t border-slate-100 flex flex-col justify-between flex-grow">
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block">
              {cert.authority}
            </span>
            <h4 className="text-sm font-black text-slate-800 uppercase mt-0.5 tracking-tight">
              {cert.title}
            </h4>
          </div>
        </div>

      </div>
    ))}
  </div>
</motion.div>

        </div>
      </div>
      
    </section>
  );
}