import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import industriesAssets from "../../assets/industriesAssets.js";

export default function Industry() {
  // 1. Catch the dynamic route parameter defined in App.jsx (e.g., /industries/:industriesKey)
  const { industriesKey } = useParams();

  // 2. Check if the caught key exists in your industriesAssets object
  const industry = industriesKey ? industriesAssets[industriesKey] : null;

  // 3. If the key doesn't match any object key, redirect/navigate back to the base url "/industries"
  if (!industry) {
    return <Navigate to="/serviceIndustries" replace />;
  }

  // 4. If it matches, render the full dedicated page with the details component logic
  return (
    <div className="bg-[#F8FAFC] min-h-screen  px-4 lg:px-8 w-full">
      

      <article className="max-w-4xl mx-auto px-4 py-4  bg-white rounded-xl shadow-sm border border-slate-200/80 my-8">
        
        {/* Industry Header */}
        <div className="mb-6 border-b border-slate-200 pb-6">
          <span className="text-xs font-black text-[#4F9B28] tracking-widest uppercase bg-[#4F9B28]/10 px-3 py-1 rounded-md inline-block mb-3">
            {industry.name}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#12161A] tracking-wide uppercase">
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

        {/* Blog Content Sections */}
        <div className="space-y-6 text-slate-800">
          
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

          {/* The Solution Impact */}
          <div className="bg-[#12161A] text-white p-6 rounded-lg shadow-md">
            <h2 className="text-sm font-black text-[#4F9B28] tracking-widest uppercase mb-2">
              The Solution Impact
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
              {industry.solutionImpact}
            </p>
          </div>

        </div>

      </article>
      <div className="max-w-4xl mx-auto mb-6">
        <Link
          to="/serviceIndustries"
          className="inline-flex items-center gap-2  hover:bg-red-700 bg-red-600 text-white text-xs font-black uppercase px-4 py-2 rounded-lg transition-colors duration-200 shadow-sm cursor-pointer"
        >
          &larr; Back to Previous Page
        </Link>
      </div>
    </div>
  );
}