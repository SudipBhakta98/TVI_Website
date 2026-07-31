import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FiPlay, 
  FiPause, 
  FiPlayCircle, 
  FiPauseCircle, 
  FiCheckCircle, 
  FiArrowRight 
} from "react-icons/fi";

import { processSteps } from "../../assets/capabilitiesAssets.js";

export default function CapabilitiesPreview() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const currentStep = processSteps[activeProcess] || processSteps[0];

  // Auto-advance process stages
  const handleVideoEnded = () => {
    if (isPlaying) {
      setActiveProcess((prevIndex) => (prevIndex + 1) % processSteps.length);
    }
  };

  // Toggle Play / Pause
  const togglePlayPause = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Keep video synced when step changes
  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play().catch(() => {});
    }
  }, [activeProcess, isPlaying]);

  return (
    <section id="capabilities-preview" className="bg-[#F8FAFC] py-12 px-4 lg:px-8 w-full select-none border-t border-slate-200">
      <div className="max-w-[85rem] mx-auto flex flex-col items-center">
        
        {/* Main Section Header */}
        <div className="flex flex-col items-center mb-8 md:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12161A] tracking-wider uppercase">
            OUR PROCESS & CAPABILITIES
          </h2>
          <div className="w-16 md:w-20 h-[4px] bg-[#4F9B28] mt-3 rounded-full" />
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-stretch">
          
          {/* LEFT: Video Pipeline Container */}
          <div className="relative h-[340px] sm:h-[420px] w-full rounded-xl overflow-hidden bg-[#12161A] shadow-md border border-slate-200/90 flex flex-col justify-between">
            
            {/* Center Video Frame */}
            <div 
              className="relative w-full h-full flex items-center justify-center p-4 cursor-pointer group overflow-hidden"
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
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161A]/80 via-transparent to-transparent pointer-events-none" />

              {/* Stage Badge */}
              <div className="absolute top-4 left-4 bg-[#12161A]/90 text-white font-mono text-[11px] font-bold px-3 py-1.5 rounded-md border border-slate-700 flex items-center gap-2 z-20">
                {isPlaying ? (
                  <FiPlayCircle className="w-4 h-4 text-[#4F9B28]" />
                ) : (
                  <FiPauseCircle className="w-4 h-4 text-[#E31B23]" />
                )}
                <span>STAGE {currentStep.step} / {processSteps.length}</span>
              </div>

              {/* View All Capabilities Hover Prompt */}
              <Link
                to="/capabilities"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 z-20 bg-[#E31B23] hover:bg-[#4F9B28] px-3 py-1.5 rounded-md border border-white/10 text-[11px] font-black text-white tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow"
              >
                <span>Full Workflow</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Active Stage Title Overlay */}
              <div className="absolute bottom-8 left-6 right-6 z-20 flex flex-col items-start gap-1">
                <span className="text-[10px] font-black text-[#4F9B28] tracking-widest uppercase bg-[#12161A]/90 border border-[#4F9B28]/40 px-2.5 py-0.5 rounded shadow-sm">
                  {currentStep.tagline || "Manufacturing Stage"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide uppercase drop-shadow-md">
                  {currentStep.title}
                </h3>
              </div>

              {/* Hover Indicator Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 z-10">
                <div className="p-3 rounded-full bg-[#12161A]/90 text-white border border-slate-700">
                  {isPlaying ? <FiPause className="w-6 h-6" /> : <FiPlay className="w-6 h-6 translate-x-0.5" />}
                </div>
              </div>
            </div>

            {/* Stage Progress Bar / Dots */}
            <div className="absolute bottom-3 left-6 z-20 flex gap-1.5">
              {processSteps.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProcess(idx);
                    setIsPlaying(true);
                  }}
                  aria-label={`Go to stage ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeProcess ? "w-7 bg-[#4F9B28]" : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT: Text Content - Stage Specs & Features */}
          <div className="flex flex-col justify-between bg-white p-6 sm:p-8 md:p-10 border border-slate-200/80 rounded-xl shadow-sm">
            <div>
              <span className="text-xs font-black text-[#4F9B28] tracking-widest uppercase mb-2 block">
                Raw Sheet to Dispatch Process
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#12161A] uppercase tracking-wide mb-4">
                {currentStep.title}
              </h3>
              
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                {currentStep.description}
              </p>

              {/* Stage Highlights */}
              {currentStep.highlights && (
                <ul className="space-y-3 mb-8">
                  {currentStep.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-bold">
                      <FiCheckCircle className="text-[#4F9B28] shrink-0 w-4 h-4 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Action CTA Link */}
            <Link to="/capabilities" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#E31B23] hover:bg-[#4F9B28] transition-colors duration-300 text-white font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95">
                <span>Explore Capabilities</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}