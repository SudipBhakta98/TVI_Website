import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import industriesAssets from "../../assets/industriesAssets.js";

export default function Industry() {
  // 1. Catch the dynamic route parameter defined in App.jsx (e.g., /industries/:industriesKey)
  const { industriesKey } = useParams();

  // 2. Check if the caught key exists in your industriesAssets object
  const industry = industriesKey ? industriesAssets[industriesKey] : null;

  // 3. If the key doesn't match any object key, redirect back to "/serviceIndustries"
  if (!industry) {
    return <Navigate to="/serviceIndustries" replace />;
  }

  // 4. Render the dynamic industry page with complete data coverage
  return (
    <div className="bg-[#F8FAFC] min-h-screen px-4 lg:px-8 w-full">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-6 bg-white rounded-xl shadow-sm border border-slate-200/80 mb-8">
        
        {/* Industry Header */}
        <div className="mb-6 border-b border-slate-200 pb-6">
          <span className="text-xl font-black text-[#4F9B28] tracking-widest uppercase bg-[#4F9B28]/10 px-3 py-1 rounded-md inline-block mb-3">
            {industry.name}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-2xl font-black text-[#12161A] tracking-wide uppercase">
            {industry.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[280px] sm:h-[380px] rounded-lg overflow-hidden mb-8 shadow-md border border-slate-200">
          <img 
            src={industry.image} 
            alt={industry.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Dynamic Content Sections */}
        <div className="space-y-8 text-slate-800">
          
          {/* Overview */}
          <div className="bg-[#F8FAFC] p-6 rounded-lg border-l-4 border-[#4F9B28]">
            <h2 className="text-sm font-black text-[#12161A] tracking-wider uppercase mb-2">
              Industry Overview
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              {industry.overview}
            </p>
          </div>

          {/* How We Help */}
          <div>
            <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
              How We Help
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              {industry.howWeHelp}
            </p>
          </div>

          {/* Products List */}
          {industry.products && industry.products.length > 0 && (
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                Solution Manufactured
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industry.products.map((product, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#F8FAFC] p-3 rounded-md border border-slate-200/60">
                    <span className="text-[#4F9B28] font-bold text-xs">✓</span>
                    <span className="text-slate-700 text-sm font-semibold">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Why OEMs Choose Us */}
          <div>
            <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
              Why OEMs Choose Us
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              {industry.whyChooseUs}
            </p>
          </div>

          {/* Production Capabilities */}
          {industry.production && (
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E31B23]"></span>
                Production Capabilities
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {industry.production}
              </p>
            </div>
          )}

          {/* The Solution Impact */}
          <div className="bg-[#12161A] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-sm font-black text-[#4F9B28] tracking-widest uppercase mb-2">
              The Solution Impact
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              {industry.solutionImpact}
            </p>
          </div>

          {/* Call to Action Box */}
          {industry.cta && (
            <div className="bg-[#4F9B28]/10 border border-[#4F9B28]/30 p-6 rounded-lg text-center">
              <h3 className="text-base font-black text-[#12161A] uppercase mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-700 text-sm sm:text-base font-medium mb-4">
                {industry.cta}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-lime-600 hover:bg-lime-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-md transition-colors shadow-sm"
              >
                Request a Quote 
              </Link>
            </div>
          )}

        </div>
      </article>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          to="/serviceIndustries"
          className="inline-flex items-center gap-2 hover:bg-lime-600 bg-red-600 text-white text-xs font-black uppercase px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
        >
          &larr; Back to Previous Page
        </Link>
      </div>
    </div>
  );
}