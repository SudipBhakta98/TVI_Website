import React from "react";
import { Link } from "react-router-dom";
import { root_image } from "../../../image/image";


const highlights = [
  "100% Incoming raw material & chemical mill test certificate validation",
  "First-piece, routing station, and automated batch dimensional checks",
  "Powder coating DFT inspection and final drawing tolerance clearance",
];

const capabilities = [
  "CMM & VMS Precision Inspection",
  "AWS D1.1 Certified Weld Testing",
  "Digital Surface Roughness & DFT Checks",
];

const accreditations = ["ISO 9001:2015", "ISO 14001:2015", "ZED SILVER"];

export default function QualityPreview() {
  return (
    <section id="quality-preview" className="bg-[#F8FAFC] py-6 px-4 lg:px-8 w-full select-none">
      <div className="max-w-[85rem] mx-auto">
        
        {/* Main Card Container */}
        <div className="w-full bg-white   sm:p-8 flex flex-col gap-6 overflow-hidden">
          
          {/* TOP ROW: Image (Left) & Aligned Content (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full items-stretch">
            
            {/* TOP LEFT: Image Container */}
            <div className="lg:col-span-5 w-full flex">
              <Link 
                to="/quality" 
                className="group relative rounded-xl overflow-hidden border border-slate-200 bg-[#12161A] shadow-xs w-full flex-1 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#4F9B28]/50 hover:shadow-md"
              >
                <img 
                  src={root_image.quality_inspection}
                  alt="Quality Inspection - Technovision Industries" 
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Badge */}
                <div className="absolute top-3 right-3 bg-[#12161A]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10 text-[11px] font-black text-white tracking-wider flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:bg-[#E31B23] transition-all duration-300 shadow">
                  <span>Explore Quality</span>
                  <span className="text-sm font-bold">&rarr;</span>
                </div>
              </Link>
            </div>

            {/* TOP RIGHT: Text Content Matched to Image Height */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full p-5 py-1">
              
              <div>
                {/* Header Line */}
                <div className="mb-3">
                  <span className="text-xs font-black text-[#3b781d] tracking-widest uppercase block mb-1">
                    Uncompromised Standards
                  </span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#12161A] tracking-wider uppercase">
                    QUALITY ASSURANCE & COMPLIANCE
                  </h2>
                  <div className="w-16 md:w-20 h-[4px] bg-[#4F9B28] mt-3 rounded-full" />
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                  At Technovision Industries, quality is engineered into every routing station. We operate under a strict Zero Defect mindset, combining advanced metrology equipment with standardized operational controls to maintain zero-defect manufacturing from raw material audits to final component dispatch.
                </p>

                {/* Main Process Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {highlights.map((point, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-800 font-bold"
                    >
                      <span className="p-0.5 bg-[#4F9B28]/15 text-[#3b781d] rounded text-xs font-black shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra Capabilities Section */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-4 mt-2">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-2.5">
                  Key Quality Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {capabilities.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 text-xs font-bold text-[#12161A]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#4F9B28] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* BOTTOM ROW: Certifications & CTA */}
          <div className="w-full bg-slate-50/80 rounded-lg border border-slate-200/80 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Accreditation Badges */}
            <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
              {accreditations.map((cert) => (
                <Link key={cert} to="/quality">
                  <span className="text-xs font-black text-[#12161A] bg-white border border-slate-200 px-3.5 py-1.5 rounded-md shadow-2xs hover:border-[#4F9B28] hover:text-[#3b781d] transition-all duration-200 inline-block cursor-pointer">
                    {cert}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end shrink-0">
              <Link to="/quality" className="w-full sm:w-auto">
                <button 
                  className="w-full sm:w-auto bg-[#E31B23] hover:bg-[#C8141B] transition-all duration-300 text-white font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg active:scale-95 group whitespace-nowrap"
                >
                  <span>View Full Quality Process</span>
                  <span className="text-sm font-bold group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}