import React, { useState, useEffect, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCompass,
  FiCpu,
  FiZap,
  FiScissors,
  FiLayers,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";
import { GiAnvil, GiSpray, GiSpanner } from "react-icons/gi";

// 1. Data Structures
const capabilities = [
  {
    title: "DESIGN & DEVELOPMENT",
    desc: "End-to-end product design, CAD modeling, engineering, prototyping, and manufacturing support.",
    image: "/image/capabilities/DESIGN & DEVELOPMENT.png",
  },
  {
    title: "IN HOUSE TOOLING FACILITY",
    desc: "In-house tool room with advanced CNC & EDM capabilities.",
    image: "/image/capabilities/IN HOUSE TOOLING FACILITY.png",
  },
  {
    title: "LASER CUTTING",
    desc: "TRUMPF 3kW & 6kW Lasers for high precision cutting.",
    image: "/image/capabilities/LASER CUTTING.png",
  },
  {
    title: "TURRET PUNCHING",
    desc: "LVD & TRUMPF punching machines for high speed accuracy.",
    image: "/image/capabilities/TURRET PUNCHING.png",
  },
  {
    title: "BENDING",
    desc: "AMADA & TRUMPF press brakes from 40T to 200T.",
    image: "/image/capabilities/BENDING.png",
  },
  {
    title: "STAMPING",
    desc: "30+ presses from 32 to 300 Tons.",
    image: "/image/capabilities/STAMPING.png",
  },
  {
    title: "FABRICATION",
    desc: "Spot, TIG, MIG, ARC & LASER welding with expert workmanship.",
    image: "/image/capabilities/WELDING.png",
  },
  {
    title: "POWDER COATING",
    desc: "Fully automated SCADA controlled powder coating plant.",
    image: "/image/capabilities/POWDER COATING.png",
  },
  {
    title: "ASSEMBLY",
    desc: "Mechanical, Electro-Mechanical & Electrical Assembly.",
    image: "/image/capabilities/ASSEMBLY.png",
  },
];

const stages = [
  {
    step: "01",
    name: "Design",
    icon: FiCompass,
    tagline: "CAD/CAM modeling & DFM review",
    specs: [
      { label: "Software", value: "SolidWorks / AutoCAD / Creo" },
      { label: "Output", value: "3D models & nesting layout" },
      { label: "Turnaround", value: "24–48 hrs" },
    ],
  },
  {
    step: "02",
    name: "Tool Room",
    icon: FiCpu,
    tagline: "Custom die & fixture fabrication",
    specs: [
      { label: "Precision", value: "± 0.02 mm" },
      { label: "Material", value: "Tool-grade steel" },
      { label: "Capability", value: "Fully in-house tooling" },
    ],
  },
  {
    step: "03",
    name: "Laser Cutting",
    icon: FiZap,
    tagline: "CNC fiber laser sheet cutting",
    specs: [
      { label: "Machines", value: "Trumpf / Bystronic fiber" },
      { label: "Thickness", value: "0.5 – 25 mm" },
      { label: "Tolerance", value: "± 0.1 mm" },
    ],
  },
  {
    step: "04",
    name: "Punching",
    icon: FiScissors,
    tagline: "Turret punching for holes & cutouts",
    specs: [
      { label: "Speed", value: "Up to 80 hits/min" },
      { label: "Tonnage", value: "Up to 20T" },
      { label: "Tooling", value: "200+ stations" },
    ],
  },
  {
    step: "05",
    name: "Bending",
    icon: GiAnvil,
    tagline: "Press-brake forming to spec",
    specs: [
      { label: "Press force", value: "40 Ton To 200 Ton" },
      { label: "Angle accuracy", value: "± 0.5°" },
      { label: "Max length", value: "3,000 mm" },
    ],
  },
  {
    step: "06",
    name: "Fabrication",
    icon: GiSpanner,
    tagline: "Welding & structural assembly",
    specs: [
      { label: "Processes", value: "MIG / TIG / Spot / Laser" },
      { label: "Standard", value: "AWS D1.1 certified" },
      { label: "Materials", value: "MS / SS / Aluminium" },
    ],
  },
  {
    step: "07",
    name: "Powder Coating",
    icon: GiSpray,
    tagline: "Electrostatic finish application",
    specs: [
      { label: "Line", value: "SCADA-controlled booth" },
      { label: "Finish", value: "As RAL colour range" },
      { label: "Cure temp", value: "110 – 200°C" },
    ],
  },
  {
    step: "08",
    name: "Assembly",
    icon: FiLayers,
    tagline: "Mechanical & electrical integration",
    specs: [
      { label: "Stations", value: "Modular assembly lines" },
      { label: "Testing", value: "Functional & fit checks" },
      { label: "Traceability", value: "Batch-level logging" },
    ],
  },
  {
    step: "09",
    name: "Quality Check",
    icon: FiCheckCircle,
    tagline: "Dimensional & functional inspection",
    specs: [
      { label: "Equipment", value: "VMS · 3D scanner · height master" },
      { label: "Standard", value: "Zero Defect Zero Effect" },
      { label: "Certification", value: "ISO 9001:2015" },
    ],
  },
  {
    step: "10",
    name: "Dispatch",
    icon: FiTruck,
    tagline: "Packaging & logistics",
    specs: [
      { label: "Packaging", value: "Custom export-grade crating" },
      { label: "Delivery", value: "Pan-India + export" },
      { label: "Docs", value: "Full shipment traceability" },
    ],
  },
];

const DESKTOP_GRID_COLS = "xl:grid-cols-[1fr_0.55fr_1fr_0.55fr_1fr_0.55fr_1fr_0.55fr_1fr]";

// 2. Micro-Link Components for Pipeline Map
function HorizontalLink({ lit, reverse = false }) {
  return (
    <div className="relative hidden xl:flex items-center justify-center w-full">
      <div className="h-[2px] w-full bg-slate-200" />
      <div
        className={`absolute h-[2px] w-full transition-all duration-500 ${
          reverse ? "origin-right bg-gradient-to-l" : "origin-left bg-gradient-to-r"
        } from-[#0082FB] to-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)] ${
          lit ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

function VerticalLink({ lit }) {
  return (
    <div className="hidden xl:flex col-start-9 items-center justify-center h-16">
      <div className="relative h-full w-[2px] bg-slate-200">
        <div
          className={`absolute inset-x-0 top-0 w-[2px] origin-top bg-gradient-to-b from-[#0082FB] to-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-500 ${
            lit ? "h-full scale-y-100" : "h-0 scale-y-0"
          }`}
        />
      </div>
    </div>
  );
}

function MobileVerticalLink({ lit }) {
  return (
    <div className="xl:hidden flex justify-center items-center h-8 w-full">
      <div className="relative h-full w-[2px] bg-slate-200">
        <div
          className={`absolute inset-x-0 top-0 w-[2px] origin-top bg-gradient-to-b from-[#0082FB] to-amber-400 transition-all duration-500 ${
            lit ? "h-full scale-y-100" : "h-0 scale-y-0"
          }`}
        />
      </div>
    </div>
  );
}

function Node({ stage, index, active, onSelect }) {
  const isActive = active === index;
  const Icon = stage.icon;
  
  return (
    <motion.button
      onClick={() => onSelect(index)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative flex flex-col items-center gap-3 focus:outline-none cursor-pointer w-20 sm:w-24"
    >
      <div className="relative h-20 w-20 sm:h-24 sm:w-24">
        {isActive && (
          <motion.div
            layoutId="nodeGlow"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="absolute -inset-2.5 sm:-inset-3.5"
          >
            <span className="absolute left-0 top-0 h-3 w-3 sm:h-4 w-4 border-l-2 border-t-2 border-amber-400 animate-pulse" />
            <span className="absolute right-0 top-0 h-3 w-3 sm:h-4 w-4 border-r-2 border-t-2 border-amber-400 animate-pulse" />
            <span className="absolute bottom-0 left-0 h-3 w-3 sm:h-4 w-4 border-b-2 border-l-2 border-amber-400 animate-pulse" />
            <span className="absolute bottom-0 right-0 h-3 w-3 sm:h-4 w-4 border-b-2 border-r-2 border-amber-400 animate-pulse" />
          </motion.div>
        )}
        <div
          className={`flex h-20 w-20 sm:h-24 sm:w-24 flex-col items-center justify-center rounded-lg border transition-all duration-300 ${
            isActive
              ? "border-amber-400 bg-[#1e1b10] shadow-[0_0_25px_rgba(245,158,11,0.25)]"
              : "border-slate-200 bg-[#0F1626] group-hover:border-slate-400"
          }`}
        >
          <span
            className={`absolute left-2 top-2 font-mono text-[9px] sm:text-[11px] font-bold transition-colors ${
              isActive ? "text-amber-400" : "text-slate-500"
            }`}
          >
            {stage.step}
          </span>
          <Icon
            className={`h-7 w-7 sm:h-9 sm:w-9 transition-all duration-300 ${
              isActive
                ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]"
                : "text-slate-400 group-hover:text-slate-200"
          }`}
          />
        </div>
      </div>

      <span
        className={`text-[10px] sm:text-xs font-black uppercase tracking-wider text-center transition-colors ${
          isActive ? "text-amber-500" : "text-slate-400 group-hover:text-slate-950"
        }`}
      >
        {stage.name}
      </span>
    </motion.button>
  );
}

// 3. Main Master Export Component
export default function Capabilities() {
  // Matrix Grid Framer Variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  // Pipeline Flow Controls State logic
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);
  const activeStage = stages[active];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % stages.length);
    }, 2500);
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
    <section id="capabilities" className="w-full bg-white font-sans antialiased">
      
      {/* ==================== MODULE A: CAPABILITIES MATRIX ==================== */}
      <div className="pt-20 pb-16 px-4 lg:px-8 max-w-[90rem] mx-auto flex flex-col items-center border-b border-gray-100">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#031424] tracking-wider uppercase">
            OUR MANUFACTURING CAPABILITIES
          </h2>
          <div className="w-16 h-[3px] bg-[#0082FB] mt-3" />
        </div>

        {/* Capabilities Responsive Matrix Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image Frame Wrapper */}
              <div className="w-full h-44 overflow-hidden rounded-lg mb-5">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Descriptions Block */}
              <div className="px-6 pb-6">
                <h3 className="text-[#031424] text-xl font-bold uppercase mb-2">
                  {cap.title}
                </h3>
                <p className="text-gray-600 text-sm leading-6">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ==================== MODULE B: WORKFLOW PIPELINE ==================== */}
      <div className="relative overflow-hidden bg-[#0B0F19] px-4 sm:px-6 lg:px-12 py-20 sm:py-24 border-b border-slate-900">
        {/* Engineering Mesh Grid Background overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-full max-w-[900px] -translate-x-1/2 rounded-full bg-[#0082FB]/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[80rem]">
          
          {/* Pipeline Section Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#0082FB]">
              End-to-End Workflow
            </span>
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              From Raw Sheet to Dispatched
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-400 px-2">
              Ten integrated stages under one roof — every handoff tracked, every tolerance held.
            </p>
            
            {/* Automatic Top Progress Interaction Bar */}
            <div className="mx-auto mt-6 flex max-w-sm items-center justify-center gap-2 px-4">
              {stages.map((s, i) => (
                <div
                  key={s.step}
                  className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800"
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r from-[#0082FB] to-amber-400 transition-all`}
                    style={{
                      width: i < active ? "100%" : i === active ? "100%" : "0%",
                      animation: i === active && !paused ? "pipelineFill 2.5s linear" : "none",
                      transformOrigin: "left"
                    }}
                  />
                </div>
              ))}
            </div>
            <style>{`
              @keyframes pipelineFill {
                from { transform: scaleX(0); }
                to { transform: scaleX(1); }
              }
            `}</style>
          </div>

          {/* Graphical Map Dashboard Card Container */}
          <div className="relative border border-slate-200 bg-white p-6 sm:p-10 xl:p-16 backdrop-blur-md rounded-2xl shadow-2xl mb-8">
            <span className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-[#0082FB]/40" />
            <span className="absolute -right-px -top-px h-8 w-8 border-r-2 border-t-2 border-[#0082FB]/40" />
            <span className="absolute -bottom-px -left-px h-8 w-8 border-b-2 border-l-2 border-[#0082FB]/40" />
            <span className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-[#0082FB]/40" />

            {/* Matrix View Map for Large Displays */}
            <div className="hidden xl:flex flex-col gap-4">
              {/* Row A: Operations 1 through 5 */}
              <div className={`grid ${DESKTOP_GRID_COLS} items-center`}>
                {stages.slice(0, 5).map((stage, i) => (
                  <Fragment key={stage.step}>
                    <div className="flex justify-center">
                      <Node stage={stage} index={i} active={active} onSelect={handleSelect} />
                    </div>
                    {i < 4 && <HorizontalLink lit={active > i} reverse={false} />}
                  </Fragment>
                ))}
              </div>

              {/* Vertical Row Transition Element */}
              <div className={`grid ${DESKTOP_GRID_COLS}`}>
                <VerticalLink lit={active >= 5} />
              </div>

              {/* Row B: Operations 6 through 10 (Snake layout alignment flow) */}
              <div className={`grid ${DESKTOP_GRID_COLS} items-center`}>
                {[9, 8, 7, 6, 5].map((globalIdx, positionIndex) => {
                  const stage = stages[globalIdx];
                  return (
                    <Fragment key={stage.step}>
                      <div className="flex justify-center">
                        <Node stage={stage} index={globalIdx} active={active} onSelect={handleSelect} />
                      </div>
                      {positionIndex < 4 && (
                        <HorizontalLink lit={active >= globalIdx} reverse={true} />
                      )}
                    </Fragment>
                  );
                })}
              </div>
            </div>

            {/* Vertical Responsive System for Small Viewports */}
            <div className="xl:hidden flex flex-col items-center max-w-xs mx-auto">
              {stages.map((stage, idx) => (
                <div key={stage.step} className="w-full flex flex-col items-center">
                  <Node stage={stage} index={idx} active={active} onSelect={handleSelect} />
                  {idx < stages.length - 1 && <MobileVerticalLink lit={active > idx} />}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Specifications Breakdown Display panel */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-xl before:absolute before:left-0 before:top-0 before:h-full before:w-[5px] before:bg-[#0082FB]/80 before:blur-[2px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="max-w-xl pl-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold bg-blue-50 text-[#0082FB] px-2.5 py-1 rounded-md">
                      {activeStage.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {activeStage.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                    {activeStage.tagline}
                  </p>
                </div>

                {/* Sub-Metric Parameter Specs Sheets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto lg:min-w-[500px]">
                  {activeStage.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="relative rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 shadow-sm overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-blue-400/40 before:blur-[1px]"
                    >
                      <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 pl-1">
                        {spec.label}
                      </div>
                      <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800 break-words pl-1">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quality Standard Badges Footer strip */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-slate-150 pt-6 sm:pt-8 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
              <span>ISO 9001:2015</span>
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span>ISO 14001:2015</span>
              <span className="hidden sm:inline h-1.5 w-1.5 rounded-full bg-slate-300" />
              <span>Zero Defect Zero Effect</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}