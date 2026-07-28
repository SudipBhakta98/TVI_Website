import React from 'react';
import { Link } from 'react-router-dom';
import productAssets from "../assets/productAssets.js";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = React.useState(productAssets[0]?.id);

  const activeCategory = productAssets.find(cat => cat.id === activeTab);

  return (
    <div id="products" className="w-full bg-[#F8FAFC] py-8 px-6 text-slate-800 font-sans">
      <div className="max-w-[85rem] mx-auto">
        
        {/* Header Section Title */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-slate-900 font-black text-3xl md:text-4xl tracking-wider uppercase">
            OUR ENGINEERED MANUFACTURING SOLUTIONS
          </h2>
          <div className="inline-block px-3 py-1 bg-lime-600/10 text-lime-700 rounded text-[11px] font-bold tracking-widest uppercase mb-3">
            End-to-End Contract Manufacturing Solutions
          </div>
          <p className="text-slate-600 text-sm max-w-2xl mt-2 font-medium">
            We deliver custom build-to-print manufacturing solutions tailored precisely to your CAD models, technical drawings, and quality standards.
          </p>
          <div className="w-16 h-[3px] bg-lime-600 rounded-full mt-4 mx-auto lg:mx-0" />
        </div>

        {/* Master Layout Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Solution Categories */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4 lg:sticky lg:top-24 z-10">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest px-4 pb-3 mb-2 border-b border-slate-100 flex items-center justify-between">
              <span>Solution Areas</span>
              <span className="text-[10px] text-lime-700 bg-lime-600/10 px-2 py-0.5 rounded font-bold">Build To Print</span>
            </div>
            
            <nav className="space-y-1.5">
              {productAssets.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-300 transform ${
                      isActive 
                        ? 'bg-red-600 text-white shadow-md translate-x-1' 
                        : 'text-slate-600 hover:bg-slate-100 hover:text-lime-600 hover:translate-x-1'
                    }`}
                  >
                    <span className="truncate block">{category.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT VIEW PANEL: Dynamic Display Panel */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-lg border border-slate-100 p-6 sm:p-8 min-h-[500px]">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-2">
              <div>
                <h3 className="text-slate-900 font-black text-lg uppercase tracking-wide">
                  {activeCategory?.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {activeCategory?.description}
                </p>
              </div>
              <span className="text-[11px] font-bold text-lime-600 bg-lime-600/10 px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
                Custom OEM Solutions
              </span>
            </div>

            {/* Product Grid -> Direct Navigation Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCategory?.images && Object.entries(activeCategory.images).map(([imgKey, src], index) => (
                <Link
                  key={imgKey}
                  to={`/products/${activeCategory.id}`}
                  className="group relative bg-slate-50 rounded-xl overflow-hidden border border-slate-200/80 aspect-[4/3] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 block"
                >
                  {/* Top Accent Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-lime-600 opacity-100 z-10" />

                  {/* Image */}
                  <img
                    src={src}
                    alt={`${activeCategory.name} - ${imgKey}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />

                  {/* Fallback View Container */}
                  <div className="hidden absolute inset-0 flex-col items-center justify-center bg-slate-900 text-slate-400 p-4 text-center">
                    <svg className="w-10 h-10 text-slate-600 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                    </svg>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
                      {activeCategory.name} Sample #{index + 1}
                    </span>
                  </div>

                  {/* Gradient Overlay & Hover Callout */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="w-full flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold tracking-widest text-lime-600 uppercase">Engineered Solution</p>
                        <h4 className="text-xs font-black uppercase tracking-wide text-white mt-0.5">Explore Product Details</h4>
                      </div>
                      <div className="p-1.5 bg-red-600 text-white rounded-full shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Custom Engineering Notice Box */}
            <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:border-lime-600/30 hover:bg-slate-100/60">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-lime-600/10 text-lime-700 rounded-md mt-0.5 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-bold text-slate-800 uppercase block mb-0.5">Require a tailored manufacturing solution?</span>
                  We support complete tooling design, sheet metal fabrication, surface treatment, and integration tailored specifically to your project requirements.
                </div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-lime-600 uppercase tracking-wider whitespace-nowrap self-end sm:self-auto transition-colors duration-200"
              >
                <span>Request custom quote</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}