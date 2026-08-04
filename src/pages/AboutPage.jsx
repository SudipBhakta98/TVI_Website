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
  FaUserTie,
} from "react-icons/fa6";

import {
  aboutPhotos,
  aboutContent,
  metricsData,
  valuesData,
  milestones,
} from "../assets/aboutAssets.js";

function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isInView];
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
  const [heroRef, heroInView] = useInView();
  const [journeyRef, journeyInView] = useInView();
  const [metricsRef, metricsInView] = useInView();
  const [visionRef, visionInView] = useInView();
  const [mdRef, mdInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [officeRef, officeInView] = useInView();

  // --- MODAL CONTROL STATE ---
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="About Technovision Industries | 20+ Years of Precision Manufacturing"
        description="Learn about Technovision Industries — 6 manufacturing units, ISO-certified quality, and two decades of precision sheet metal engineering since 2003."
        path="/about"
      />

      <div
        id="about"
        className="w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden"
      >
        <style>{`
          @keyframes fastZoomOut {
            from {
              transform: scale(1.25);
            }
            to {
              transform: scale(1);
            }
          }

          .animate-zoom-out-fast {
            animation: fastZoomOut 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>

        {/* HERO SECTION */}
        <div
          ref={heroRef}
          className="relative w-full bg-[#F8FAFC] min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center pt-8 pb-20 lg:py-0"
        >
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
            <div
              className={`max-w-2xl transition-all duration-1000 ease-out transform ${
                heroInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
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
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 pb-24 space-y-16">
          <div className="w-full -mt-10 lg:-mt-20 relative z-20 space-y-8">
            <div
              ref={journeyRef}
              className={`w-full bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10 transition-all duration-1000 ease-out transform ${
                journeyInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
            >
              {/* MODAL CONTROL PROPS */}
              <DetailJourney
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onOpenTrigger={() => setIsModalOpen(true)}
              />

              <div className="relative w-full py-2">
                {/* DESKTOP LAYOUT */}
                <div className="hidden lg:block relative w-full select-none">
                  <div className="absolute top-[21px] left-6 right-6 h-1.5 z-0 flex items-center justify-between pointer-events-none">
                    {milestones.slice(0, -1).map((milestone, i) => (
                      <div key={i} className="flex-1 relative h-full mx-6">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${milestone.color} rounded-full origin-left transition-transform duration-500`}
                        />
                        <div
                          className="absolute right-0 -top-[3px] w-3 h-3 rotate-45 border-t-2 border-r-2 border-slate-300"
                          style={{
                            borderColor:
                              i === 4
                                ? "#65A30D"
                                : i === 3
                                  ? "#DC2626"
                                  : i === 2
                                    ? "#65A30D"
                                    : "#DC2626",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-6 gap-4 relative z-10">
                    {milestones.map((milestone, idx) => (
                      <div
                        key={idx}
                        onClick={() => setIsModalOpen(true)} // CLICK ANY CARD TO OPEN MODAL
                        style={{ transitionDelay: `${idx * 150}ms` }}
                        className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-700 ease-out transform ${
                          journeyInView
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-8 opacity-0"
                        }`}
                      >
                        {/* Circle */}
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs text-white tracking-wider shadow-lg ring-4 ${milestone.bg} z-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[360deg]`}
                        >
                          {milestone.year}
                        </div>

                        {/* Card */}
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
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOBILE LAYOUT */}
                <div className="lg:hidden relative border-l-4 border-slate-100 pl-6 ml-4 space-y-8">
                  {milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      onClick={() => setIsModalOpen(true)} // CLICK ANY MOBILE CARD TO OPEN MODAL
                      style={{ transitionDelay: `${idx * 100}ms` }}
                      className={`relative flex flex-col sm:flex-row sm:items-start gap-4 cursor-pointer transition-all duration-700 ease-out transform ${
                        journeyInView
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* METRICS BAR */}
            <div
              ref={metricsRef}
              className={`w-full bg-white rounded-xl shadow-md border border-slate-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 items-center transition-all duration-1000 ease-out transform ${
                metricsInView
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}