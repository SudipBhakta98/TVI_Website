import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
  // Active step index for process video pipeline
  const [activeProcess, setActiveProcess] = useState(0);
  
  // Controls auto-advancing and video playback state
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef(null);

  const currentStep = processSteps[activeProcess];

  // Auto-advance step when current step's video ends
  const handleVideoEnded = () => {
    if (isPlaying) {
      setActiveProcess((prevIndex) => (prevIndex + 1) % processSteps.length);
    }
  };

  // Toggle video play and pause
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

  // Synchronize native video element play state when active step changes
  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  }, [activeProcess, isPlaying]);

  return (
    <section className="w-full bg-[#F8FAFC] text-slate-800 font-sans antialiased">
      
      {/* =========================================================================
          SECTION 1: RAW SHEET METAL TO DISPATCH (PROCESS VIDEO PIPELINE)
         ========================================================================= */}
      <div className="py-8 sm:py-8 px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 border-b border-slate-200 pb-6 text-center">
          <span className="text-xs sm:text-sm font-black text-[#4F9B28] tracking-widest uppercase bg-[#4F9B28]/10 px-3 py-1 rounded-md inline-block mb-3">
            End-to-End Workflow
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12161A] tracking-wide uppercase">
            Raw Sheet to Dispatch Process
          </h1>
          <p className="mt-2 text-slate-600 text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Watch how raw metal sheets transform into precision-engineered products through our manufacturing process.
          </p>
        </div>

        {/* Outer Split Container - Fixed Height Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT OUTER CONTAINER: Fixed Height + Video Centered */}
          <div className="lg:col-span-6 h-[480px] sm:h-[520px] bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-between">
            
            {/* Center Video Area */}
            <div 
              className="relative w-full flex-1 bg-[#12161A] cursor-pointer group flex items-center justify-center p-4 overflow-hidden"
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
                className="max-w-full max-h-full object-contain rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161A]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              {/* Stage Counter Badge */}
              <div className="absolute top-4 left-4 bg-[#12161A]/90 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-md border border-slate-700 flex items-center gap-2 z-10">
                {isPlaying ? (
                  <FiPlayCircle className="w-4 h-4 text-[#4F9B28]" />
                ) : (
                  <FiPauseCircle className="w-4 h-4 text-[#E31B23]" />
                )}
                STAGE {currentStep.step} / {processSteps.length}
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 bg-[#12161A]/90 text-xs font-mono font-bold px-3 py-1.5 rounded-md border border-slate-700 flex items-center gap-2 z-10">
                <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-[#4F9B28]" : "bg-[#E31B23]"}`} />
                <span className={isPlaying ? "text-[#4F9B28]" : "text-[#E31B23]"}>
                  {isPlaying ? "PLAYING" : "PAUSED"}
                </span>
              </div>

              {/* Hover Indicator Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-10">
                <div className="p-3 rounded-full bg-[#12161A]/90 text-white border border-slate-700">
                  {isPlaying ? <FiPause className="w-6 h-6" /> : <FiPlay className="w-6 h-6 translate-x-0.5" />}
                </div>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="p-3.5 bg-white border-t border-slate-200 flex items-center justify-between gap-4 shrink-0 h-[60px]">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-[#12161A] transition-colors"
                  title="Previous Stage"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={togglePlayPause}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-colors ${
                    isPlaying 
                      ? "bg-[#E31B23] hover:bg-red-700 text-white" 
                      : "bg-[#4F9B28] hover:bg-lime-700 text-white"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <FiPause className="w-3.5 h-3.5" />
                      <span>PAUSE</span>
                    </>
                  ) : (
                    <>
                      <FiPlay className="w-3.5 h-3.5 fill-current" />
                      <span>PLAY</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 text-[#12161A] transition-colors"
                  title="Next Stage"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {processSteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStepSelect(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeProcess 
                        ? "w-5 bg-[#4F9B28]" 
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    title={`Jump to Stage ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT OUTER CONTAINER: Fixed Height + Text Centered */}
          <div className="lg:col-span-6 h-[480px] sm:h-[520px] bg-white border border-slate-200/80 rounded-xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-sm overflow-hidden">
            
            {/* Scrollable / Vertically Centered Text Content */}
            <div className="space-y-4 my-auto w-full max-w-xl flex flex-col items-center overflow-y-auto pr-1">
              
              {/* Header Badge & Title */}
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#4F9B28]/10 border border-[#4F9B28]/30 text-[#4F9B28] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <FiActivity className="w-3.5 h-3.5" />
                  Stage {currentStep.step} Detail Specifications
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#12161A] tracking-wide uppercase">
                  {currentStep.title}
                </h2>
                <p className="text-xs font-semibold text-[#4F9B28] mt-0.5">
                  {currentStep.tagline}
                </p>
              </div>

              {/* Overview / Description */}
              <div className="bg-[#F8FAFC] p-4 rounded-lg border-t-4 border-[#4F9B28] w-full text-center">
                <h3 className="text-xs font-black text-[#12161A] tracking-wider uppercase mb-1">
                  Stage Overview
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                  {currentStep.description}
                </p>
              </div>

              {/* Engineering Highlights */}
              <div className="w-full">
                <h3 className="text-xs font-black text-[#12161A] tracking-wider uppercase mb-2 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                  <FiSliders className="text-[#E31B23]" /> Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                  {currentStep.highlights.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-center gap-2 bg-[#F8FAFC] p-2.5 rounded-md border border-slate-200/60"
                    >
                      <FiCheckCircle className="text-[#4F9B28] shrink-0 w-3.5 h-3.5" />
                      <span className="text-slate-700 text-xs font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Workflow Progress Indicator (Bottom fixed) */}
            <div className="w-full pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-mono shrink-0">
              <span className="font-bold text-slate-500 uppercase">Workflow Progress</span>
              <span className="font-bold text-[#4F9B28] uppercase">Stage {currentStep.step} of {processSteps.length}</span>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          SECTION 2: MANUFACTURING CAPABILITIES (2-COLUMN GRID, 50/50 SPLIT CARDS)
         ========================================================================= */}
      <div className="py-8 sm:py-8 px-4 sm:px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-slate-200">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-slate-200 pb-6">
          <div>
            <span className="text-xs sm:text-sm font-black text-[#4F9B28] tracking-widest uppercase bg-[#4F9B28]/10 px-3 py-1 rounded-md inline-block mb-3">
              Technical Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#12161A] tracking-wide uppercase">
              Our Capabilities
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-600 text-sm font-medium max-w-md">
            Click on any capability card to view complete machinery specifications, capacity limits, and material tolerances.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {capabilitiesGrid.map((cap) => (
            <Link
              key={cap.id}
              to={`/capabilities/${cap.id}`}
              className="group relative h-44 sm:h-48 w-full rounded-lg overflow-hidden bg-[#12161A] flex border border-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0px_10px_25px_rgba(18,22,26,0.3)] cursor-pointer"
            >
              {/* Left Half: Image Container */}
              <div className="w-1/2 relative overflow-hidden bg-black/40 border-r border-slate-800/80">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-all duration-500 filter contrast-125 grayscale opacity-75 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#12161A]/80 opacity-60" />
              </div>

              {/* Right Half: Text & Content Container */}
              <div className="w-1/2 p-3 sm:p-4 flex flex-col justify-between relative z-10 bg-[#12161A]">
                
                {/* Top Badge */}
                <div className="flex items-center justify-between">
                  
                  <div className="bg-red-600 text-[9px] font-black text-white px-2 py-0.5 rounded border border-white/10 flex items-center gap-1 group-hover:bg-lime-600 transition-colors">
                    <span>Details</span>
                    <span>&rarr;</span>
                  </div>
                </div>

                {/* Middle Content */}
                <div className="my-auto pr-1">
                  <h3 className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase group-hover:text-lime-500 transition-colors duration-300 line-clamp-2">
                    {cap.title}
                  </h3>
                  <p className="text-slate-400 text-[10px] sm:text-xs mt-1 font-medium line-clamp-2 leading-tight">
                    {cap.shortDesc}
                  </p>
                </div>

                {/* Bottom Call to Action */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span className="uppercase tracking-wider">Specs & Limits</span>
                  <span className="text-[#4F9B28] group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                </div>
              </div>

              {/* Bottom Precision Green Indicator Line */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-[#4F9B28] z-20 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}