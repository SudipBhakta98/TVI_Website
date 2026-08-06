import React, { useState, useEffect, useRef } from "react";
import SEO from "../components/SEO";
import DetailJourney from "../components/aboutcomponent/DetailJourney.jsx";
import {
  FaCalendarCheck,
  FaIndustry,
  FaRulerCombined,
  FaUsers,
  FaShieldHalved,
  FaHandshake,
  FaLightbulb,
  FaLeaf,
  FaEye,
  FaBullseye,
  FaLocationDot,
  FaArrowUpRightFromSquare,
  FaQuoteLeft,
  FaUserTie,
} from "react-icons/fa6";

import {
  aboutPhotos,
  aboutContent,
  metricsData,
  valuesData,
  milestones,
} from "../assets/aboutAssets.js";

/* ------------------------------------------------------------------ */
/*  useInView                                                          */
/*  Tells us when an element has scrolled into the viewport.           */
/*  Returns a ref to attach to the element + a boolean "isInView".     */
/* ------------------------------------------------------------------ */
function useInView() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el); // only animate once
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return [ref, isInView];
}

/* ------------------------------------------------------------------ */
/*  Reveal                                                             */
/*  A small wrapper that fades/slides its children in once they enter  */
/*  the viewport. This replaces the 7 copy-pasted ref/inView blocks    */
/*  that used to live directly inside the page component.              */
/*                                                                      */
/*  direction: "left" | "up" | "scale"                                 */
/* ------------------------------------------------------------------ */
function Reveal({ children, direction = "up", className = "" }) {
  const [ref, isInView] = useInView();

  const hiddenStyles = {
    left: "-translate-x-12 opacity-0",
    up: "translate-y-12 opacity-0",
    scale: "scale-95 opacity-0",
  };

  const shownStyles = {
    left: "translate-x-0 opacity-100",
    up: "translate-y-0 opacity-100",
    scale: "scale-100 opacity-100",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isInView ? shownStyles[direction] : hiddenStyles[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}

const metricIcons = [FaCalendarCheck, FaIndustry, FaRulerCombined, FaUsers];
const valueIcons = [
  FaShieldHalved,
  FaHandshake,
  FaLightbulb,
  FaShieldHalved,
  FaLeaf,
];

export default function About() {
  // Controls the "Detail Journey" modal that opens when a milestone is clicked.
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="About Technovision | Precision Metalworking Since 2003"
        description="Learn about Technovision — high-quality metalworking, CNC stamping, robotic welding, ISO 9001/14001 certification, and two decades of precision engineering."
        path="/about"
      />

      <div
        id="about"
        className="w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden"
      >
        <style>{`
          @keyframes fastZoomOut {
            from { transform: scale(1.25); }
            to { transform: scale(1); }
          }
          .animate-zoom-out-fast {
            animation: fastZoomOut 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

        {/* ============================= HERO ============================= */}
        <div className="relative w-full bg-[#F8FAFC] min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center pt-8 pb-20 lg:py-0">
          <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 pointer-events-none overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat relative hidden lg:block animate-zoom-out-fast origin-center"
              style={{
                backgroundImage: `url(${aboutPhotos.heroBg})`,
                clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>

            <div
              className="absolute top-0 right-0 w-full sm:w-2/5 h-full bg-cover bg-right bg-no-repeat opacity-20 lg:hidden animate-zoom-out-fast origin-center"
              style={{ backgroundImage: `url(${aboutPhotos.heroBg})` }}
            />
          </div>

          <div className="relative z-10 max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-16">
            <Reveal direction="left" className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-[#65A30D]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#65A30D]">
                  ABOUT TECHNOVISION
                </span>
              </div>

              <h1 className="text-[#1E293B] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.15]">
                {aboutContent.hero.title}
              </h1>

              <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
                {aboutContent.hero.subtitle}
              </p>
            </Reveal>
          </div>
        </div>

        {/* ========================= MAIN CONTENT ========================== */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 pb-24 space-y-16">
          <div className="w-full -mt-10 lg:-mt-20 relative z-20 space-y-16">

            {/* 1. MILESTONES / JOURNEY TIMELINE */}
            <Reveal
              direction="left"
              className="w-full bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10"
            >
              <DetailJourney
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onOpenTrigger={() => setIsModalOpen(true)}
              />

              <div className="relative w-full py-2">
                {/* --- Desktop timeline (horizontal) --- */}
                <div className="hidden lg:block relative w-full select-none">
                  <div className="absolute top-[21px] left-6 right-6 h-1.5 z-0 flex items-center justify-between pointer-events-none">
                    {milestones.slice(0, -1).map((milestone, i) => (
                      <div key={i} className="flex-1 relative h-full mx-6">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-6 gap-4 relative z-10">
                    {milestones.map((milestone, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="flex flex-col items-center text-center group cursor-pointer text-left"
                      >
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs text-white tracking-wider shadow-lg ring-4 ${milestone.bg} z-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[360deg]`}
                        >
                          {milestone.year}
                        </div>

                        <div className="bg-white border-2 border-slate-50 group-hover:border-[#65A30D]/40 p-4 mt-6 rounded-xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 min-h-[150px] w-full flex flex-col justify-start relative overflow-hidden">
                          <div
                            className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${milestone.color}`}
                          />
                          <h4 className="text-slate-900 font-extrabold text-xs uppercase tracking-wide mb-2 leading-snug pt-1">
                            {milestone.title}
                          </h4>
                          <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* --- Mobile timeline (vertical) --- */}
                <div className="lg:hidden relative border-l-4 border-slate-100 pl-6 ml-4 space-y-8">
                  {milestones.map((milestone, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="relative flex flex-col sm:flex-row sm:items-start gap-4 cursor-pointer w-full text-left"
                    >
                      <div
                        className={`absolute -left-[38px] top-0 w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] text-white shadow-md ring-4 ${milestone.bg} z-10`}
                      >
                        {idx + 1}
                      </div>

                      <div className="bg-white border border-slate-100 p-5 rounded-xl shadow-xs w-full relative overflow-hidden">
                        <div
                          className={`absolute left-0 inset-y-0 w-1 bg-gradient-to-b ${milestone.color}`}
                        />
                        <span className="inline-block bg-lime-50 text-lime-700 text-xs font-black px-2.5 py-1 rounded-md mb-2 tracking-wider">
                          {milestone.year}
                        </span>
                        <h4 className="text-slate-900 font-extrabold text-sm uppercase tracking-wide mb-1.5">
                          {milestone.title}
                        </h4>
                        <p className="text-slate-500 text-xs font-medium leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 2. METRICS BAR (years in business, sq. ft., staff, etc.) */}
            <Reveal
              direction="left"
              className="w-full bg-white rounded-xl shadow-md border border-slate-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center"
            >
              {metricsData.map((metric, idx) => {
                const Icon = metricIcons[idx] || FaIndustry;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 sm:gap-4 justify-start lg:justify-center group"
                  >
                    <div className="p-2.5 bg-lime-50 text-lime-600 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-6 h-6" />
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
                );
              })}
            </Reveal>

            {/* 3. VISION & MISSION */}
            <Reveal direction="up" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 text-lime-700 rounded-lg">
                    <FaEye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                    {aboutContent.vision.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {aboutContent.vision.description}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-lime-100 text-lime-700 rounded-lg">
                    <FaBullseye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 uppercase">
                    {aboutContent.mission.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {aboutContent.mission.description}
                </p>
              </div>
            </Reveal>

            {/* 4. MANAGING DIRECTOR'S DESK */}
       <Reveal className="bg-white rounded-2xl shadow-xl overflow-hidden group">
  <div className="grid lg:grid-cols-2">

    {/* Left - Image */}
    <div className="relative overflow-hidden min-h-[450px]">

      <img
        src={aboutPhotos.mdPhoto}
        alt={aboutContent.mdDesk.name}
        className="
          w-full
          h-full
          object-cover
          object-top
          transition-all
          duration-700
          group-hover:scale-105
          brightness-105
          contrast-110
          saturate-110
        "
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Leadership Badge */}
      <div className="absolute top-6 left-6">
        <span className="bg-lime-600 text-white px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase shadow-lg">
          Leadership & Vision
        </span>
      </div>

    </div>

    {/* Right */}
    <div className="flex flex-col justify-center p-8 lg:p-12">

      <FaQuoteLeft className="text-5xl text-lime-600 mb-6" />

      <h2 className="text-3xl font-bold text-slate-900 mb-6">
        {aboutContent.mdDesk.title}
      </h2>

      <p className="text-gray-600 italic leading-8 text-lg">
        "{aboutContent.mdDesk.quote}"
      </p>

      {/* Divider */}
      <div className="w-20 h-1 bg-lime-600 rounded-full my-8" />

      {/* MD Details */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900">
          {aboutContent.mdDesk.name}
        </h3>

        <p className="text-lime-600 font-semibold uppercase tracking-wider mt-1">
          {aboutContent.mdDesk.designation}
        </p>
      </div>

    </div>

  </div>
</Reveal>

            {/* 5. VALUES */}
            <Reveal direction="up" className="space-y-6">
              <div className="text-center max-w-xl mx-auto">
                <span className="text-[#65A30D] text-xs font-black uppercase tracking-[0.2em]">
                  YOUR ADVANTAGES
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase mt-1">
                  Value Delivered At A Glance
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {valuesData.map((val, idx) => {
                  const Icon = valueIcons[idx] || FaShieldHalved;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-6 rounded-xl shadow-xs border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <div className="p-3 bg-lime-50 text-lime-600 rounded-lg w-fit mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">
                        {val.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            {/* 6. CORPORATE OFFICE / HEADQUARTERS */}
            <Reveal
              direction="up"
              className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-lime-600 text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                    {aboutContent.corporateOffice.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase">
                    {aboutContent.corporateOffice.title}
                  </h3>
                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                      {aboutContent.corporateOffice.addressTitle}
                    </h4>
                    <div className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <FaLocationDot className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
                      <div>
                        {aboutContent.corporateOffice.addressLines.map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={aboutContent.corporateOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-lime-600 transition-colors w-fit"
                >
                  View on Google Maps <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-72 lg:h-auto min-h-[300px]">
                <iframe
                  title="Technovision Map"
                  src={aboutContent.corporateOffice.embedMapUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}