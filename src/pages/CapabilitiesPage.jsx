import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiPlayCircle, 
  FiPauseCircle,
  FiPlay,
  FiPause,
  FiCheckCircle, 
  FiChevronLeft, 
  FiChevronRight,
  FiActivity,
  FiSliders
} from "react-icons/fi";

import { processSteps, capabilitiesGrid } from "../assets/capabilitiesAssets.js";

export default function Capabilities() {
  // Process Video Active Index
  const [activeProcess, setActiveProcess] = useState(0);
  
  // Controls playback and auto-advancing
  const [isPlaying, setIsPlaying] = useState(true);

  // Selected Capability for Modal View
  const [selectedCap, setSelectedCap] = useState(null);

  const videoRef = useRef(null);

  const currentStep = processSteps[activeProcess];

  // Advance to next video/stage automatically when current video ends
  const handleVideoEnded = () => {
    if (isPlaying) {
      setActiveProcess((prevIndex) => (prevIndex + 1) % processSteps.length);
    }
  };

  // Toggle video Play/Pause state
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setActiveProcess((prevIndex) => (prevIndex + 1) % processSteps.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setActiveProcess((prevIndex) => (prevIndex - 1 + processSteps.length) % processSteps.length);
    setIsPlaying(true);
  };

  const handleStepSelect = (index) => {
    setActiveProcess(index);
    setIsPlaying(true);
  };

  return (
    <section className="w-full bg-[#0B0F19] text-slate-100 font-sans antialiased overflow-hidden">
      
      {/* =========================================================================
          SECTION 1: RAW SHEET METAL TO DISPATCH (PROCESS VIDEO PIPELINE)
         ========================================================================= */}
      <div className="py-20 px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto border-b border-slate-800">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            End-to-End Workflow
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Raw Sheet to Dispatch Process
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Watch how raw metal sheets transform into precision-engineered products through our 11 integrated manufacturing stages.
          </p>
        </div>

        {/* Process Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Video Screen Display */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Video Frame */}
            <div 
              className="relative aspect-video bg-black shrink-0 cursor-pointer group"
              onClick={togglePlayPause}
            >
              <video
                ref={videoRef}
                key={currentStep.video}
                src={currentStep.video}
                autoPlay={isPlaying}
                muted
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Stage Counter Badge */}
              <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white font-mono text-xs font-bold px-3 py-1.5 rounded-full border border-blue-400/30 flex items-center gap-2">
                {isPlaying ? (
                  <FiPlayCircle className="w-4 h-4 animate-pulse" />
                ) : (
                  <FiPauseCircle className="w-4 h-4 text-amber-400" />
                )}
                STAGE {currentStep.step} / {processSteps.length}
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-md text-xs font-mono font-medium px-3 py-1.5 rounded-full border border-slate-700/60 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-ping" : "bg-amber-400"}`} />
                <span className={isPlaying ? "text-emerald-400" : "text-amber-400"}>
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>

              {/* Overlay Play/Pause Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                <div className="p-4 rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-slate-700">
                  {isPlaying ? <FiPause className="w-8 h-8" /> : <FiPlay className="w-8 h-8 translate-x-0.5" />}
                </div>
              </div>
            </div>

            {/* Stage Quick Controls */}
            <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Previous Stage"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>

                {/* Main Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className={`px-4 py-2 rounded-lg font-mono text-xs font-bold flex items-center gap-2 transition-all ${
                    isPlaying 
                      ? "bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-400/30" 
                      : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <FiPause className="w-4 h-4" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <FiPlay className="w-4 h-4 fill-current" />
                      <span>PLAY</span>
                    </>
                  )}
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Next Stage"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Interactive Stage Indicator Indicator Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {processSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStepSelect(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeProcess 
                        ? "w-6 bg-blue-500" 
                        : "w-2 bg-slate-700 hover:bg-slate-500"
                    }`}
                    title={`Jump to Stage ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Description Panel */}
          <div className="lg:col-span-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Header Badge & Title */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                    <FiActivity className="w-3.5 h-3.5" />
                    Stage {currentStep.step} Detail Specifications
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mt-1">
                    {currentStep.tagline}
                  </p>
                </div>

                {/* Primary Narrative Description */}
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Key Process Highlights & Features */}
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FiSliders className="text-blue-400" /> Key Engineering Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStep.highlights.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs sm:text-sm text-slate-200"
                      >
                        <FiCheckCircle className="text-blue-400 shrink-0 w-4 h-4" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Progress Tracker */}
            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>WORKFLOW PIPELINE</span>
              <span className="text-blue-400 font-bold">{Math.round(((activeProcess + 1) / processSteps.length) * 100)}% COMPLETED</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 2: MANUFACTURING CAPABILITIES (2-COLUMN GRID WITH DETAIL MODAL)
         ========================================================================= */}
      <div className="py-20 px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-800 pb-6">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Technical Excellence
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Capabilities
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm max-w-md">
            Click on any capability card to view complete machinery specifications, capacity limits, and material tolerances.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilitiesGrid.map((cap) => (
            <motion.div
              key={cap.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedCap(cap)}
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col sm:flex-row"
            >
              {/* Left Photo Frame */}
              <div className="sm:w-1/2 aspect-video sm:aspect-auto relative overflow-hidden bg-slate-950">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:opacity-0 transition-opacity" />
              </div>

              {/* Right Content Frame */}
              <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-wide">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {cap.shortDesc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-blue-400 gap-2 group-hover:translate-x-1 transition-transform">
                  <span>VIEW SPECIFICATIONS</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* =========================================================================
          SLIDE-OVER / POP-UP MODAL (INDIVIDUAL CAPABILITY DETAILS)
         ========================================================================= */}
      <AnimatePresence>
        {selectedCap && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCap(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCap(null)}
                className="absolute top-4 right-4 z-20 bg-slate-950/70 hover:bg-slate-800 text-slate-300 p-2 rounded-full border border-slate-700 transition-colors"
              >
                ✕
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-56 sm:h-64 bg-slate-950 shrink-0">
                <img
                  src={selectedCap.image}
                  alt={selectedCap.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
                    Technical Specification
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    {selectedCap.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Overview
                  </h4>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {selectedCap.fullDesc}
                  </p>
                </div>

                {/* Technical Specifications Grid */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Key Performance Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedCap.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl"
                      >
                        <div className="text-[10px] font-mono text-blue-400 uppercase font-bold">
                          {spec.label}
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Modal Action */}
                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedCap(null)}
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}