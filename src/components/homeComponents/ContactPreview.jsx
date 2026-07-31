import React from "react";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaGear,
  FaShieldHalved,
  FaUsers,
  FaLeaf,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { contactDetails } from "../../assets/contactAssets.js";

export default function HomeContactSection() {
  const pillars = [
  { 
    label: "PRECISION ENGINEERING", 
    icon: <FaGear className="w-6 h-6 text-[#65A30D] group-hover:rotate-45 transition-transform duration-300" /> 
  },
  { 
    label: "QUALITY ASSURED", 
    icon: <FaShieldHalved className="w-6 h-6 text-[#65A30D] group-hover:scale-110 transition-transform duration-300" /> 
  },
  { 
    label: "CUSTOMER FOCUSED", 
    icon: <FaUsers className="w-6 h-6 text-[#65A30D] group-hover:scale-110 transition-transform duration-300" /> 
  },
  { 
    label: "SUSTAINABLE SOLUTIONS", 
    icon: <FaLeaf className="w-6 h-6 text-[#65A30D] group-hover:scale-110 transition-transform duration-300" /> 
  },
];

  return (
    <section className="w-full bg-[#F8FAFC] pb-10 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-[85rem] mx-auto space-y-4">
        
        {/* ================= SECTION 1: ADDRESS & MAP (SAME LINE) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
          
          {/* Left: Compact Corporate Office Address */}
          <div className="md:col-span-5 lg:col-span-4 bg-white p-5 rounded-lg border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaLocationDot className="w-4 h-4 text-[#65A30D]" />
                <h3 className="text-slate-800 font-black text-xs tracking-wider uppercase">
                  Corporate Office
                </h3>
              </div>
              <div className="w-8 h-[2px] bg-[#65A30D] mb-3" />

              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                {contactDetails.address.lines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < contactDetails.address.lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-1 gap-1.5 text-[11px]">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <FaPhone className="w-3 h-3 text-[#65A30D]" />
                <span>{contactDetails.phone.numbers[0]}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold truncate">
                <FaEnvelope className="w-3 h-3 text-[#65A30D]" />
                <a
                  href={`mailto:${contactDetails.email.addresses[0]}`}
                  className="hover:text-[#65A30D] transition-colors truncate"
                >
                  {contactDetails.email.addresses[0]}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="md:col-span-7 lg:col-span-8 bg-white p-3 rounded-lg border border-slate-200/80 shadow-sm relative overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                LOCATION MAP
              </span>
              <a
                href={contactDetails.address.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-[#65A30D] hover:text-red-600 uppercase tracking-wide transition-colors"
              >
                <span>Open Map</span>
                <FaArrowUpRightFromSquare className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="w-full h-36 md:h-full min-h-[140px] rounded border border-slate-100 overflow-hidden relative group">
              <iframe
                src={contactDetails.address.embedMapUrl}
                className="w-full h-full border-0 absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Technovision Location Map"
              />
            </div>
          </div>

        </div>

        {/* ================= SECTION 2: PILLARS IN A SINGLE LINE ================= */}
        <div className="bg-white rounded-lg p-3.5 border border-slate-200/80 shadow-sm pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className={`flex items-center justify-center gap-2 group cursor-default text-5xl ${
                  i !== 0 ? "pt-2 md:pt-0" : ""
                }`}
              >
                {pillar.icon}
                <span className="text-[11px] font-extrabold uppercase tracking-tight text-slate-800 whitespace-nowrap">
                  {pillar.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}