import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { 
  FaShieldHalved, 
  FaTemperatureHalf, 
  FaMicrochip, 
  FaWrench, 
  FaCircleCheck, 
  FaArrowRight 
} from "react-icons/fa6";

import industriesAssets, { industryProductMapping } from "../../assets/industriesAssets.js";
import productAssets from "../../assets/productAssets.js";
import SEO from "../SEO.jsx";

// Industry SEO Configuration
const industrySeo = {
  data_centers: {
    title: "Data Center Rack Manufacturer | Server Enclosures | Technovision",
    description: "Precision server rack frames, data center enclosures & cable management structures, build-to-print manufactured in Bengaluru for global OEMs.",
  },
  telecommunications: {
    title: "Telecom Enclosure Manufacturer | Equipment Housings | Technovision",
    description: "Rugged telecommunication cabinets, router chassis & outdoor equipment enclosures manufactured to OEM drawings.",
  },
  automotive: {
    title: "Automotive Sheet Metal & Battery Enclosure Manufacturer | Technovision",
    description: "Precision automotive brackets, battery enclosures & trays for EV and conventional mobility OEMs.",
  },
  defence: {
    title: "Defence Equipment Enclosure Manufacturer | Technovision",
    description: "Rugged defence enclosures, operator consoles & structural frames built to mission-critical specifications.",
  },
  electrical: {
    title: "Electrical Cabinet & Panel Manufacturer | Technovision",
    description: "Electrical cabinets, power distribution enclosures & control panels manufactured build-to-print.",
  },
  industrial_automation: {
    title: "Industrial Automation Enclosure Manufacturer | Technovision",
    description: "Machine enclosures, operator consoles & control cabinets for smart manufacturing systems.",
  },
  aviation: {
    title: "Aerospace Sheet Metal Component Manufacturer | Technovision",
    description: "Precision aerospace brackets, instrument enclosures & structural sub-assemblies.",
  },
  medical: {
    title: "Medical Equipment Housing Manufacturer | Technovision",
    description: "Medical & laboratory equipment housings, diagnostic chassis & stainless steel structures.",
  },
};

export default function Industry() {
  const { industriesKey } = useParams();

  // 1. Get current industry details from industriesAssets
  const industry = industriesKey ? industriesAssets[industriesKey] : null;
  const seo = industrySeo[industriesKey];

  // Fallback / Redirect if route doesn't match any key
  if (!industry) {
    return <Navigate to="/serviceIndustries" replace />;
  }

  // 2. Fetch products dynamically based on industry mapping & productAssets
  const mappedProductIds = industryProductMapping[industriesKey] || [];
  const relatedProducts = Array.isArray(productAssets)
    ? productAssets.filter((product) => mappedProductIds.includes(product.id))
    : [];

  return (
    <>
      <SEO
        title={seo?.title || `${industry.name} Manufacturing | Technovision Industries`}
        description={seo?.description || industry.overview}
        path={`/serviceIndustries/${industriesKey}`}
      />

      <div className="bg-[#F8FAFC] min-h-screen text-slate-800">
        
        {/* HERO SECTION WITH VISIBLE BG IMAGE */}
        <div className="relative bg-slate-950 text-white min-h-[420px] flex items-center overflow-hidden">
          {/* Background Image - Clean Opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-300" 
            style={{ backgroundImage: `url(${industry.image})` }}
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
            <Link 
              to="/serviceIndustries" 
              className="text-[#4F9B28] font-bold text-xs uppercase tracking-widest hover:underline inline-flex items-center gap-1 mb-4"
            >
              &larr; {industry.name}
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-3xl mb-4 drop-shadow-sm">
              {industry.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              {industry.overview}
            </p>

            {/* Feature Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur border border-slate-700/60 p-3 rounded-lg shadow-md">
                <FaShieldHalved className="w-5 h-5 text-[#4F9B28] shrink-0" />
                <span className="text-xs font-bold text-slate-200">High Strength & Durability</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur border border-slate-700/60 p-3 rounded-lg shadow-md">
                <FaTemperatureHalf className="w-5 h-5 text-[#4F9B28] shrink-0" />
                <span className="text-xs font-bold text-slate-200">Optimized Performance</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur border border-slate-700/60 p-3 rounded-lg shadow-md">
                <FaMicrochip className="w-5 h-5 text-[#4F9B28] shrink-0" />
                <span className="text-xs font-bold text-slate-200">Precision Engineering</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur border border-slate-700/60 p-3 rounded-lg shadow-md">
                <FaWrench className="w-5 h-5 text-[#4F9B28] shrink-0" />
                <span className="text-xs font-bold text-slate-200">Custom Built-to-Print</span>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="text-xs font-black tracking-widest text-[#4F9B28] uppercase">
                  OUR PRODUCTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#12161A] uppercase tracking-wide mt-1">
                  {industry.name} Solutions
                </h2>
                <p className="text-slate-600 text-sm max-w-xl mx-auto mt-2">
                  From custom components to integrated systems, our solutions are designed for reliability, scalability, and ease of deployment.
                </p>
              </div>

              {/* Grid of Industry-Mapped Products */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((prod) => {
                  // Get the first image from product.images or fallback to industry hero
                  const firstImg = prod.images 
                    ? Object.values(prod.images)[0] 
                    : industry.image;

                  return (
                    <div 
                      key={prod.id} 
                      className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                    >
                      <div className="h-48 bg-slate-100 flex items-center justify-center p-4 border-b border-slate-100">
                        <img 
                          src={firstImg} 
                          alt={prod.name} 
                          className="max-h-full object-contain"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-base font-black text-slate-900 uppercase mb-2">
                            {prod.name}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                            {prod.description}
                          </p>
                        </div>
                        <Link 
                          to={`/products/${prod.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4F9B28] hover:text-lime-700 transition-colors uppercase tracking-wider"
                        >
                          View Details <FaArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* DETAILED INDUSTRY CONTENT */}
        <section className="py-8 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-8">
            
            {/* How We Help */}
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
                How We Help
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {industry.howWeHelp}
              </p>
            </div>

            {/* Key Capabilities / Solutions List */}
            {industry.products && industry.products.length > 0 && (
              <div>
                <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
                  Solutions Manufactured
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {industry.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                      <FaCircleCheck className="w-4 h-4 text-[#4F9B28] shrink-0" />
                      <span className="text-slate-700 text-xs sm:text-sm font-semibold">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why OEMs Choose Us */}
            <div>
              <h2 className="text-lg font-black text-[#12161A] tracking-wide uppercase mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]"></span>
                Why OEMs Choose Us
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {industry.whyChooseUs}
              </p>
            </div>

            {/* Impact Banner */}
            <div className="bg-[#12161A] text-white p-6 rounded-xl shadow-md">
              <h2 className="text-xs font-black text-[#4F9B28] tracking-widest uppercase mb-2">
                The Solution Impact
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {industry.solutionImpact}
              </p>
            </div>

            {/* CTA Box */}
            {industry.cta && (
              <div className="bg-[#4F9B28]/10 border border-[#4F9B28]/30 p-6 rounded-xl text-center">
                <h3 className="text-base font-black text-[#12161A] uppercase mb-2">
                  Ready to Start Your Project?
                </h3>
                <p className="text-slate-700 text-sm font-medium mb-4 max-w-xl mx-auto">
                  {industry.cta}
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-[#4F9B28] hover:bg-lime-700 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-md transition-colors shadow-sm"
                >
                  Request a Quote 
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* METRICS & STATS BAR */}
        <section className="pb-12 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-sm">
            <div>
              <div className="text-2xl font-black text-[#4F9B28]">200+</div>
              <div className="text-xs text-slate-500 font-bold uppercase mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#4F9B28]">99.9%</div>
              <div className="text-xs text-slate-500 font-bold uppercase mt-1">Product Reliability</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#4F9B28]">10+</div>
              <div className="text-xs text-slate-500 font-bold uppercase mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#4F9B28]">Custom</div>
              <div className="text-xs text-slate-500 font-bold uppercase mt-1">Built Solutions</div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}