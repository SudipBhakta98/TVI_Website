import { useState, useEffect, useRef, Fragment } from "react";
import SEO from "../components/SEO.jsx";
import qualityAssets from "../assets/qualityAssets.js";

// Keep SVG icons mapped local to component
const stepIcons = [
  (
    <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  (
    <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h16.5M3.75 20.25h16.5M7.5 3.75v3M12 3.75v4.5M16.5 3.75v3M7.5 20.25v-3M12 20.25v-4.5M16.5 20.25v-3M3.75 12h16.5" />
    </svg>
  ),
  (
    <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25h1.5c.65 0 1.22.28 1.61.723m-5.8 0a2.222 2.222 0 00-.73 1.527v14.25c0 1.243 1.007 2.25 2.25 2.25h9c1.243 0 2.25-1.007 2.25-2.25V4.5c0-.573-.214-1.096-.57-1.49m-8.93 0A2.247 2.247 0 0113.5 2.25m-3.328 12.02l2.25 2.25 4.5-4.5" />
    </svg>
  ),
  (
    <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a1.534 1.534 0 01-2.169-2.169l3.277-3.276a4.5 4.5 0 00-6.336 4.486c.091.716.023 1.378-.18 1.905" />
    </svg>
  ),
  (
    <svg className="w-5 h-5 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  )
];

// Merge qualitySteps from assets with local icon set
const steps = qualityAssets.qualitySteps.map((step, index) => ({
  ...step,
  icon: stepIcons[index]
}));

function StepArrow() {
  return (
    <div className="flex items-center justify-center text-lime-600 shrink-0 self-center mb-5 sm:mb-6">
      <svg className="w-2.5 h-2.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </div>
  );
}

export default function Quality() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimer = useRef(null);

  const activeStage = steps[activeStageIndex];

  // Auto-sliding interval (Cycles every 2.5 seconds)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % steps.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Pause auto-sliding for 5 seconds on manual click
  const handleSelectStep = (index) => {
    setActiveStageIndex(index);
    setIsPaused(true);

    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <><SEO
  title="Quality Assurance | ISO 9001 & 14001 Certified | Technovision Industries"
  description="Technovision Industries follows a zero-defect quality process backed by ISO 9001:2015, ISO 14001:2015, and ZED Silver certification."
  path="/quality"
/>
    <section id="quality" className="relative w-full bg-[#F8FAFC]">
      
      {/* 1. Hero Section */}
      <div className="relative w-full pt-24 pb-36 md:pt-28 md:pb-40 px-6 lg:px-16 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right md:bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${qualityAssets.quality_bg})` }}
        />

        {/* Mobile-Only Dark Gradient Mask (Hidden on md and larger) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#031424]/90 via-[#031424]/75 to-[#031424]/40 md:hidden" />

        <div className="relative z-10 max-w-[85rem] mx-auto">
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-wider uppercase drop-shadow-md">
            QUALITY ASSURANCE
          </h1>
          <p className="text-lime-500 font-bold text-sm md:text-base tracking-wide mt-2 drop-shadow-md">
            Zero Defect. Zero Compromise.
          </p>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="max-w-[85rem] mx-auto px-2 sm:px-6 lg:px-12 -mt-20 md:-mt-24 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Process Section */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-slate-200/80 p-3 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden">
            <div>
              <h3 className="text-[#031424] font-extrabold text-xs sm:text-base tracking-wider uppercase mb-3 sm:mb-6 border-b border-slate-100 pb-2 sm:pb-3">
                OUR QUALITY PROCESS
              </h3>

              {/* Step Navigation Bar */}
              <div className="w-full my-1">
                <div className="flex flex-row items-start justify-between w-full gap-0.5 sm:gap-2">
                  {steps.map((stage, i) => {
                    const isActive = activeStageIndex === i;

                    return (
                      <Fragment key={stage.step}>
                        <button
                          onClick={() => handleSelectStep(i)}
                          className="flex flex-col items-center flex-1 min-w-0 focus:outline-none group cursor-pointer"
                        >
                          <div 
                            className={`flex items-center justify-center p-0.5 transition-all duration-300 ${
                              isActive ? "text-lime-600 scale-110" : "text-slate-400 group-hover:text-lime-600"
                            }`}
                          >
                            {stage.icon}
                          </div>
                          <span 
                            className={`text-[8px] sm:text-xs font-bold text-center mt-1 leading-tight w-full tracking-tighter sm:tracking-normal transition-colors duration-300 ${
                              isActive ? "text-lime-700 font-black" : "text-slate-600 group-hover:text-slate-900"
                            }`}
                          >
                            {stage.name}
                          </span>
                        </button>

                        {i < steps.length - 1 && <StepArrow />}
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step Detail Card */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50/70 rounded-xl p-3 sm:p-5 border border-slate-200/60 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] sm:text-xs font-black bg-lime-100 text-lime-700 px-2 py-0.5 rounded-md">
                    STAGE {activeStage.step}
                  </span>
                  <h4 className="text-xs sm:text-base font-extrabold text-[#031424] tracking-tight uppercase">
                    {activeStage.name}
                  </h4>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 font-medium italic">
                  {activeStage.tagline}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeStage.specs.map((spec) => (
                  <div key={spec.label} className="bg-white p-2 sm:p-3 rounded-lg border border-slate-200/80 shadow-2xs">
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Equipment */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-[#031424] font-extrabold text-sm md:text-base tracking-wider uppercase mb-6 border-b border-slate-100 pb-3">
                QUALITY EQUIPMENT
              </h3>

              <ul className="space-y-3">
                {qualityAssets.equipments.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-semibold text-xs md:text-sm">
                    <span className="w-2 h-2 rounded-full bg-lime-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Row: Certifications */}
          <div className="lg:col-span-12 bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 md:p-8">
            <h3 className="text-[#031424] font-extrabold text-sm md:text-base tracking-wider uppercase mb-6 border-b border-slate-100 pb-3">
              QUALITY ACCREDITATIONS & CERTIFICATIONS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {qualityAssets.certifications.map((cert) => (
                <div 
                  key={cert.title} 
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs flex flex-col justify-between"
                >
                  <div className="h-48 sm:h-56 p-4 flex items-center justify-center bg-slate-50/50">
                    <img
                      src={cert.previewImg}
                      alt={cert.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="p-4 border-t border-slate-100 bg-white">
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                      {cert.authority}
                    </span>
                    <h4 className="text-sm font-extrabold text-[#031424] uppercase mt-1">
                      {cert.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section></>
  );
}