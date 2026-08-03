import React from 'react';
import { Link } from 'react-router-dom';
import productAssets from "../../assets/productAssets.js";

// Extract image items directly from productAssets
const railItems = productAssets
  .map((category) => {
    const images = Object.values(category.images || {});
    return {
      id: `${category.id}-0`,
      name: category.name,
      description: category.description,
      image: images[0],
    };
  })
  .filter((item) => item.image);

// Duplicate array for seamless infinite scroll
const marqueeCards = [...railItems, ...railItems];

export default function ProductsPreview() {
  return (
    <section className="w-full bg-[#F8FAFC] py-8 text-slate-800 font-sans overflow-hidden select-none">
      
      {/* CSS Infinite Continuous Marquee Animation */}
      <style>{`
        @keyframes marqueeSmooth {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeSmooth 50s linear infinite;
        }
        .animate-marquee-smooth:hover { 
          animation-play-state: paused; 
        }

        /* Hide Scrollbars Across Browsers */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

      {/* Header Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="inline-block px-3 py-1 bg-[#4F9B28]/15 text-[#3b781d] rounded text-xs font-black tracking-widest uppercase mb-2">
            Contract Manufacturing Capabilities
          </span>
          <h2 className="text-[#12161A] font-black text-2xl sm:text-4xl uppercase tracking-wider">
            Our Engineered Solutions
          </h2>
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-white bg-red-600 hover:bg-lime-600 px-6 py-3.5 rounded-lg transition-all self-start md:self-auto"
        >
          Explore All Solutions &rarr;
        </Link>
      </div>

      {/* Marquee Rail Container (Changed overflow-x-auto to overflow-hidden) */}
      <div className="w-full overflow-hidden py-3">
        <div className="animate-marquee-smooth gap-5 pr-5">
          {marqueeCards.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              to="/products"
              className="w-[240px] sm:w-[280px] shrink-0 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group"
            >
              {/* Image Box with Badge */}
              <div className="relative aspect-[16/11] bg-[#12161A] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  loading="lazy"
                />

                <div className="absolute top-2.5 right-2.5 bg-red-600 backdrop-blur-md text-white text-[9px] font-black px-2 py-1 rounded border border-[#4F9B28]/30 uppercase tracking-wider shadow-sm">
                  Custom OEM Solutions
                </div>
              </div>

              {/* Content Box */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-[#12161A] font-extrabold text-xs uppercase tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-slate-800 font-semibold text-xs mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[13px] font-black text-[#3b781d] uppercase tracking-wider">
                    View Details<span className="text-xs text-[#3b781d] font-bold transition-transform group-hover:translate-x-1 duration-200">&rarr;</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}