import React, { useState } from "react";
import facilityAssets from "../assets/facilitiesAssets";

const unitsData = facilityAssets.unitsData || [];
const facilitiesData = facilityAssets.facilitiesData || [];

export default function Facilities() {
  // State to manage modal visibility and selected facility
  const [activeModalFacility, setActiveModalFacility] = useState(null);

  const openModal = (facility) => {
    setActiveModalFacility(facility);
  };

  const closeModal = () => {
    setActiveModalFacility(null);
  };

  return (
    <section id="facility" className="bg-[#F8FAFC] py-8 px-4 lg:px-8 w-full relative">
      <div className="max-w-[95rem] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#12161A] tracking-wider uppercase">
            OUR FACILITIES
          </h2>
          <div className="w-16 h-[4px] bg-[#4F9B28] mt-3 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed font-medium mt-3">
            State-of-the-art infrastructure for superior manufacturing.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
          
          {/* LEFT: 2 Columns Grid of Facility Cards (8 Cards) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5 w-full order-1 lg:order-1">
            {facilitiesData.map((fac) => (
              <div
                key={fac.name}
                onClick={() => openModal(fac)}
                className="group relative h-40 sm:h-44 w-full rounded-lg overflow-hidden bg-[#12161A] flex flex-col justify-between p-3 sm:p-4 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0px_10px_25px_rgba(18,22,26,0.25)] cursor-pointer"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={fac.path}
                    alt={fac.name}
                    className="w-full h-full "
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                </div>

                {/* Hover Precision Green Indicator Line */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-lime-600 z-20 w-0 group-hover:w-full transition-all duration-300" />

                {/* Top-Right Badge */}
                <div className="absolute top-2 right-2 z-20 bg-red-600 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-[9px] sm:text-[10px] font-black text-white tracking-wider flex items-center gap-1 opacity-90 group-hover:opacity-100 group-hover:bg-lime-600 transition-all duration-300 shadow">
                  <span>View Details</span>
                  <span className="text-xs font-bold">&rarr;</span>
                </div>

                {/* Bottom Title Container */}
                <div className="z-10 mt-auto w-full border-t border-white/10 pt-2">
                  <h3 className="text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase group-hover:text-lime-600 transition-colors duration-300 line-clamp-1 drop-shadow-md">
                    {fac.name}
                  </h3>
                  <p className="text-slate-300 text-[10px] line-clamp-1 font-medium mt-0.5">
                    {fac.tagline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Dynamic 1-Point Summary for Each Facility */}
          <div className="lg:col-span-7 w-full bg-white rounded-xl py-4 px-6 sm:px-8 shadow-sm border border-slate-200/80 order-2 lg:order-2">
            <div className="flex flex-col space-y-2">
              <div>
                <span className="text-xs font-black text-[#3B781D] tracking-widest uppercase bg-[#4F9B28]/15 px-3 py-1 rounded-md inline-block mb-3 border border-[#4F9B28]/20">
                  Infrastructure & Facilities Summary
                </span>
              </div>

              {/* 1 Point for Each Facility */}
              <div className="space-y-3 pt-1">
                {facilitiesData.map((fac, idx) => (
                  <div
                    key={fac.name || idx}
                    onClick={() => openModal(fac)}
                    className="bg-[#F8FAFC] p-3.5 rounded-lg border-l-4 border-lime-600 shadow-xs hover:border-red-600 transition-colors duration-300 cursor-pointer"
                  >
                    <h4 className="text-xs sm:text-sm font-black text-[#12161A] uppercase tracking-wider mb-1 flex items-center gap-2">
                      <span className="text-lime-600 text-xs font-bold">0{idx + 1}.</span>
                      {fac.name}
                    </h4>
                    <p className="text-slate-600 text-xs font-medium pl-5">
                      {fac.tagline || "Advanced industrial setup dedicated to high-precision engineering and structural production."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Section Divider */}
      <div className="max-w-[95rem] mx-auto px-4 lg:px-8 my-12">
        <div className="w-full h-[1px] bg-slate-300/80" />
      </div>

      {/* MANUFACTURING UNITS SECTION */}
      <div className="max-w-[95rem] mx-auto px-4 lg:px-8">
        
        {/* Manufacturing Units Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-black tracking-wider uppercase text-[#12161A]">
            MANUFACTURING UNITS
          </h2>
          <div className="w-12 h-[3px] bg-[#4F9B28] mt-2 mb-3 rounded-full" />
          <p className="text-slate-600 text-xs md:text-sm max-w-2xl leading-relaxed font-normal normal-case">
            Distributed manufacturing ecosystems built to manage scaling demands and multi-tier structural engineering projects.
          </p>
        </div>

        {/* Units List */}
        <div className="pb-12 space-y-8">
          {unitsData.map((unit, index) => {
            const isEven = index % 2 === 0;

            return (
              <article 
                key={unit.name} 
                className="group flex flex-col lg:flex-row items-stretch bg-white border border-slate-200/60 rounded-sm overflow-hidden hover:border-lime-600/60 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 ease-in-out"
              >
                
                {/* Image Block */}
                <div 
                  className={`relative w-full lg:w-1/2 min-h-[280px] sm:min-h-[340px] overflow-hidden bg-slate-900 order-1 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img 
                    src={unit.path} 
                    alt={unit.name} 
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-50"
                    loading="lazy"
                  />
                  
                  {/* Overlay Address */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                    <span className="text-[9px] font-bold text-lime-600 tracking-widest uppercase mb-1">
                      PLANT SITE ADDRESS
                    </span>
                    <p className="text-white text-[11px] font-medium leading-relaxed max-w-md">
                      {unit.address}
                    </p>
                  </div>
                </div>

                {/* Text Spec Box */}
                <div 
                  className={`w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-slate-50/30 transition-colors duration-500 group-hover:bg-white order-2 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative mb-6 pb-3 border-b border-slate-200/60">
                    <h3 className="text-lg font-black text-slate-900 tracking-wide uppercase transition-colors duration-300 group-hover:text-lime-600">
                      {unit.name}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-lime-600 transition-all duration-300 group-hover:w-24" />
                  </div>
                  
                  {/* Details List */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {unit.details.map((detail, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2.5 text-slate-600 font-medium text-[11px] sm:text-xs leading-relaxed col-span-1 sm:first-of-type:col-span-2 transition-all duration-300 ease-in-out group-hover:translate-x-1"
                        style={{ transitionDelay: `${idx * 40}ms` }}
                      >
                        <span className="text-lime-600 font-extrabold text-sm select-none leading-none mt-[-1px] transition-transform duration-300 group-hover:scale-125">
                          &rsaquo;
                        </span>
                        <span className="transition-colors duration-300 group-hover:text-slate-900">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </article>
            );
          })}
        </div>

      </div>

      {/* FULL IMAGE VIEW & DETAILS MODAL DIALOG */}
      {activeModalFacility && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs transition-opacity duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-white shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative border border-slate-200"
            onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing when clicking inside content
          >
            {/* Top Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-9 h-9  text-gray-600 hover:text-red-600 flex items-center justify-center transition-colors text-3xl font-bold"
              aria-label="Close dialog"
            >
              &times;
            </button>

            {/* Modal Body Container */}
            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              
              {/* Left Side: Full Image */}
              <div className="w-full  bg-white flex items-center justify-center min-h-[260px] md:min-h-[420px] relative">
                <img
                  src={activeModalFacility.path}
                  alt={activeModalFacility.name}
                  className="w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-[10px] font-black text-[#3B781D] tracking-widest uppercase bg-[#4F9B28]/15 px-2.5 py-1 rounded-md inline-block mb-3 border border-[#4F9B28]/20">
                    Facility Details
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#12161A] tracking-wider uppercase">
                    {activeModalFacility.name}
                  </h3>
                  <div className="w-10 h-[3px] bg-lime-600 mt-2 mb-4 rounded-full" />
                  
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed mb-4">
                    {activeModalFacility.tagline || "High-precision manufacturing facility engineered to meet custom build-to-print requirements and rigid quality specifications."}
                  </p>

                  {/* Additional details list if available */}
                  {activeModalFacility.details && (
                    <div className="space-y-2 border-t border-slate-100 pt-3">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Key Capabilities:</h4>
                      <ul className="space-y-1.5">
                        {activeModalFacility.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600 text-xs font-medium">
                            <span className="text-lime-600 font-bold">&rsaquo;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Bottom-Left Action Button inside Modal */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-start">
                  <button
                    onClick={closeModal}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-lime-600 text-white text-xs font-extrabold px-4 py-2.5 rounded-md transition-colors duration-300 shadow-md uppercase tracking-wider cursor-pointer"
                  >
                    <span>&larr;</span>
                    <span>Previous Page</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}