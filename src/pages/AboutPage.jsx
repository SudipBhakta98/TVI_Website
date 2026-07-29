import React, { useState, useEffect, useRef } from "react";
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

// Import data from your external file
import {
  aboutPhotos,
  aboutContent,
  metricsData,
  valuesData,
  milestones,
} from "../assets/aboutAssetc.js";

// Custom lightweight IntersectionObserver Hook for Scroll Animations
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

// Icon Mappings
const metricIcons = [FaCalendarCheck, FaIndustry, FaRulerCombined, FaUsers];
const valueIcons = [
  FaShieldHalved,
  FaHandshake,
  FaLightbulb,
  FaShieldHalved,
  FaLeaf,
];

export default function About() {
  // Animation refs for sections
  const [heroRef, heroInView] = useInView();
  const [journeyRef, journeyInView] = useInView();
  const [metricsRef, metricsInView] = useInView();
  const [visionRef, visionInView] = useInView();
  const [mdRef, mdInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [officeRef, officeInView] = useInView();

  return (
    <div
      id="about"
      className="w-full bg-[#F8FAFC] text-slate-800 font-sans overflow-x-hidden"
    >
      {/* 1. HERO COVER SECTION */}
      <div
        ref={heroRef}
        className="relative w-full bg-[#F8FAFC] min-h-[420px] lg:min-h-[500px] overflow-hidden flex items-center pt-8 pb-20 lg:py-0"
      >
        {/* Right Side Background Image Container */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0 pointer-events-none">
          {/* Desktop Angled Clip Path Layer */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat relative hidden lg:block"
            style={{
              backgroundImage: `url(${aboutPhotos.heroBg})`,
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-slate-900/10" />
          </div>

          {/* Mobile Background Fallback: Positioned right without masking */}
          <div
            className="absolute top-0 right-0 w-full sm:w-2/5 h-full bg-cover bg-right bg-no-repeat opacity-20 lg:hidden"
            style={{ backgroundImage: `url(${aboutPhotos.heroBg})` }}
          />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-16">
          <div
            className={`max-w-2xl transition-all duration-1000 ease-out transform ${
              heroInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Small Top Kicker Tag */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-[#65A30D]" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#65A30D]">
                ABOUT TECHNOVISION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[#1E293B] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[1.15]">
              {aboutContent.hero.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mt-4 max-w-xl">
              {aboutContent.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* MAIN BLOCKS WRAPPER */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 pb-24 space-y-16">
        {/* 2. ROADMAP TIMELINE & METRICS SECTION */}
        <div className="w-full -mt-10 lg:-mt-20 relative z-20 space-y-8">
          {/* Timeline Card */}
          <div
            ref={journeyRef}
            className={`w-full bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10 transition-all duration-1000 ease-out transform ${
              journeyInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="mb-6">
              <h2 className="text-[#1E293B] font-black text-xl tracking-wider uppercase mb-1">
                OUR JOURNEY &amp; MILESTONES
              </h2>
              <div className="w-12 h-[3px] bg-[#65A30D] rounded-full" />
            </div>

            {/* ROADMAP TIMELINE CONTAINER */}
            <div className="relative w-full py-2">
              {/* DESKTOP LAYOUT */}
              <div className="hidden lg:block relative w-full select-none">
                {/* Track Line */}
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

                {/* Milestones Grid */}
                <div className="grid grid-cols-6 gap-4 relative z-10">
                  {milestones.map((milestone, idx) => (
                    <div
                      key={idx}
                      style={{ transitionDelay: `${idx * 150}ms` }}
                      className={`flex flex-col items-center text-center group transition-all duration-700 ease-out transform ${
                        journeyInView
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                    >
                      {/* Circle */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xs text-white tracking-wider shadow-lg ring-4 ${milestone.bg} cursor-pointer z-20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[360deg]`}
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

              {/* MOBILE & TABLET LAYOUT */}
              <div className="lg:hidden relative border-l-4 border-slate-100 pl-6 ml-4 space-y-8">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                    className={`relative flex flex-col sm:flex-row sm:items-start gap-4 transition-all duration-700 ease-out transform ${
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

          {/* STATISTICS / METRICS BAR */}
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

        {/* 3. VISION & MISSION BLOCK */}
        <div ref={visionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            className={`bg-white rounded-xl p-6 sm:p-10 shadow-md border border-slate-100 relative overflow-hidden group transition-all duration-1000 ease-out transform ${
              visionInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            } hover:shadow-xl hover:-translate-y-1`}
          >
            <span className="absolute top-0 left-0 w-1.5 h-full bg-red-600" />
            <h3 className="text-red-600 font-black text-lg tracking-wider uppercase mb-4 flex items-center gap-3">
              <FaEye className="w-5 h-5 text-red-600" />
              {aboutContent.vision.title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {aboutContent.vision.description}
            </p>
          </div>

          {/* Mission Card */}
          <div
            style={{ transitionDelay: "200ms" }}
            className={`bg-white rounded-xl p-6 sm:p-10 shadow-md border border-slate-100 relative overflow-hidden group transition-all duration-1000 ease-out transform ${
              visionInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-16 opacity-0"
            } hover:shadow-xl hover:-translate-y-1`}
          >
            <span className="absolute top-0 left-0 w-1.5 h-full bg-lime-600" />
            <h3 className="text-lime-600 font-black text-lg tracking-wider uppercase mb-4 flex items-center gap-3">
              <FaBullseye className="w-5 h-5 text-lime-600" />
              {aboutContent.mission.title}
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {aboutContent.mission.description}
            </p>
          </div>
        </div>

        {/* 4. MD'S MESSAGE BLOCK */}
        <div
          ref={mdRef}
          className={`bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden transition-all duration-1000 ease-out transform ${
            mdInView ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
          } hover:shadow-xl`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-4 bg-slate-100 min-h-[360px] lg:min-h-full relative group overflow-hidden">
              <img
                src={aboutPhotos.mdPhoto}
                alt={aboutContent.mdDesk.name}
                className="w-full h-full object-cover object-top absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.nextElementSibling) {
                    e.currentTarget.nextElementSibling.classList.remove(
                      "hidden",
                    );
                    e.currentTarget.nextElementSibling.classList.add("flex");
                  }
                }}
              />
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-900 text-slate-400 p-4">
                <FaUserTie className="w-16 h-16 text-slate-600 mb-2" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                  Managing Director
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
              <h3 className="text-black font-black text-xl tracking-wider uppercase mb-2">
                {aboutContent.mdDesk.title}
              </h3>
              <div className="w-12 h-1 bg-lime-600 rounded-full mb-6" />

              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-slate-100 font-serif select-none pointer-events-none">
                  “
                </span>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium italic relative z-10">
                  {aboutContent.mdDesk.quote}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <h5 className="text-slate-900 font-black text-base uppercase">
                  {aboutContent.mdDesk.name}
                </h5>
                <p className="text-xs font-bold text-lime-600 uppercase tracking-wider mt-0.5">
                  {aboutContent.mdDesk.designation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 5. VALUES BLOCK */}
        <div
          ref={valuesRef}
          className={`bg-white rounded-xl shadow-xl border border-slate-100 p-6 sm:p-10 text-center transition-all duration-1000 ease-out transform ${
            valuesInView
              ? "translate-x-0 opacity-100"
              : "-translate-x-12 opacity-0"
          }`}
        >
          <div className="max-w-md mx-auto mb-10">
            <h2 className="text-black font-black text-xl tracking-wider uppercase">
              OUR VALUES
            </h2>
            <div className="w-10 h-[2px] bg-lime-600 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {valuesData.map((val, idx) => {
              const Icon = valueIcons[idx] || FaShieldHalved;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                  className={`flex flex-col items-center px-2 pt-6 sm:pt-0 ${
                    idx === 0 ? "sm:pl-0" : ""
                  } transition-all duration-700 ease-out transform ${
                    valuesInView
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-8 opacity-0"
                  }`}
                >
                  <div
                    className={`p-3 ${
                      isEven
                        ? "bg-lime-50 text-lime-600"
                        : "bg-red-50 text-red-600"
                    } rounded-full mb-4 flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-slate-950 font-black text-sm uppercase tracking-wide">
                    {val.title}
                  </h4>
                  <p className="text-slate-400 font-semibold text-[11px] sm:text-xs uppercase mt-2 max-w-[150px] leading-tight">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. CORPORATE OFFICE & MAP BLOCK */}
        <div
          ref={officeRef}
          className={`bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-1000 ease-out transform ${
            officeInView
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0"
          } hover:shadow-2xl`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between bg-slate-50 border-r border-slate-100">
              <div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-lime-600 block mb-2">
                  {aboutContent.corporateOffice.tag}
                </span>
                <h2 className="text-black font-black text-xl tracking-wider uppercase mb-6">
                  {aboutContent.corporateOffice.title}
                </h2>

                <div className="flex items-start gap-3 mt-4">
                  <FaLocationDot className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-1">
                      {aboutContent.corporateOffice.addressTitle}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed normal-case">
                      {aboutContent.corporateOffice.addressLines.map(
                        (line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i <
                              aboutContent.corporateOffice.addressLines.length -
                                1 && <br />}
                          </React.Fragment>
                        ),
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <a
                  href={aboutContent.corporateOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-lime-600 text-white font-bold text-[11px] tracking-wider uppercase py-3 px-5 rounded-md shadow-xs transition-colors"
                >
                  <span>Get Directions</span>
                  <FaArrowUpRightFromSquare className="w-3.5 h-3.5 " />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-[300px] sm:h-[400px] lg:h-auto min-h-[350px] w-full bg-slate-100 relative">
              <iframe
                src={aboutContent.corporateOffice.embedMapUrl}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Technovision Industries Corporate Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}