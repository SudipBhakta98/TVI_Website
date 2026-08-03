import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { capabilitiesGrid } from "../../assets/capabilitiesAssets.js";
import SEO from "../SEO.jsx";

export default function CapabilityDetail() {
  // 1. Catch dynamic route parameter (e.g., /capabilities/:capabilityId)
  const { capabilityId } = useParams();

  // 2. Find matching capability item in capabilitiesGrid array
  const cap = capabilitiesGrid.find((item) => String(item.id) === capabilityId);

  // 3. Fallback redirect back to capabilities index if ID doesn't exist
  if (!cap) {
    return <Navigate to="/capabilities" replace />;
  }

  // 4. Render dynamic capability detail page
  return (
    <>
      <SEO
        title={`${cap.title} Services | Technovision Industries`}
        description={cap.shortDesc}
        path={`/capabilities/${capabilityId}`}
      />
      <div className="bg-[#F8FAFC] min-h-screen px-4 lg:px-8 w-full">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 bg-white rounded-xl shadow-sm border border-slate-200/80 mb-8">
          
          {/* Capability Header */}
          <div className="mb-6 border-b border-slate-200 pb-6">
            <span className="text-xl font-black text-[#4F9B28] tracking-widest uppercase bg-[#4F9B28]/10 px-3 py-1 rounded-md inline-block mb-3">
              Technical Specification
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-2xl font-black text-[#12161A] tracking-wide uppercase">
              {cap.title}
            </h1>
          </div>

          {/* Hero Image */}
          <div className="w-full h-[280px] sm:h-[380px] rounded-lg overflow-hidden mb-8 shadow-md border border-slate-200 bg-slate-100">
            <img 
              src={cap.image} 
              alt={cap.title} 
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Dynamic Content Sections */}
          <div className="space-y-8 text-slate-800">
            
            {/* Overview */}
            <div className="bg-[#F8FAFC] p-6 rounded-lg border-l-4 border-[#4F9B28]">
              <h2 className="text-sm font-black text-[#12161A] tracking-wider uppercase mb-2">
                Capability Overview
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {cap.fullDesc || cap.shortDesc}
              </p>
            </div>

            {/* Key Performance Metrics / Specifications Grid */}
            {cap.specs && cap.specs.length > 0 && (
              <div>
                <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                  Key Machinery Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cap.specs.map((spec, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-slate-200/80 p-4 rounded-lg">
                      <div className="text-[10px] font-mono text-[#4F9B28] uppercase font-bold">
                        {spec.label}
                      </div>
                      <div className="text-xs sm:text-sm font-black text-[#12161A] mt-1">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Features / Process Highlights */}
            {cap.highlights && cap.highlights.length > 0 && (
              <div>
                <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                  Process Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cap.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#F8FAFC] p-3 rounded-md border border-slate-200/60">
                      <span className="text-[#4F9B28] font-bold text-xs">✓</span>
                      <span className="text-slate-700 text-sm font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Quality Impact */}
            <div className="bg-[#12161A] text-white p-6 rounded-lg shadow-md">
              <h2 className="text-sm font-black text-[#4F9B28] tracking-widest uppercase mb-2">
                Quality & Tolerance Standard
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                All processing under this manufacturing capability is continuously calibrated against ISO quality standards, ensuring zero-defect production batches with tight dimensional tolerances.
              </p>
            </div>

            {/* Call to Action Box */}
            <div className="bg-[#4F9B28]/10 border border-[#4F9B28]/30 p-6 rounded-lg text-center">
              <h3 className="text-base font-black text-[#12161A] uppercase mb-2">
                Require Machinery Specifications for Your Part?
              </h3>
              <p className="text-slate-700 text-sm sm:text-base font-medium mb-4">
                Send us your design files or technical drawings for precise feasibility assessment and production estimates.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lime-600 hover:bg-lime-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-md transition-colors shadow-sm"
              >
                Request a Quote 
              </Link>
            </div>

          </div>
        </article>

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-6">
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2 hover:bg-lime-600 bg-red-600 text-white text-xs font-black uppercase px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
          >
            &larr; Back to Capabilities
          </Link>
        </div>
      </div>
    </>
  );
}