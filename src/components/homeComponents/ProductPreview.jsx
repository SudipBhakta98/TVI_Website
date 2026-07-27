import React from 'react';
import { Link } from 'react-router-dom';
import productAssets from "../../assets/productAssets.js"
// Extract image items directly from productAssets
const railItems = productAssets.flatMap((category) =>
  Object.values(category.images || {}).map((img, idx) => ({
    id: `${category.id}-${idx}`,
    name: category.name,
    description: category.description,
    image: img,
  }))
);

// Duplicate array for infinite scroll continuous marquee
const marqueeCards = [...railItems, ...railItems];

export default function ProductsPreview() {
  return (
    <section className="w-full bg-[#F8FAFC] py-6 text-slate-800 font-sans overflow-hidden select-none">
      
      {/* CSS Animation */}
      <style>{`
        @keyframes marqueeSmooth {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-30%, 0, 0); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeSmooth 40s linear infinite;
        }
        .animate-marquee-smooth:hover { animation-play-state: paused; }
      `}</style>

      {/* Header */}
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
          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase text-white bg-red-600 hover:bg-lime-600 px-6 py-3.5 rounded-lg transition-all"
        >
          Explore All Solutions &rarr;
        </Link>
      </div>

      {/* Continuous Marquee Rail */}
      <div className="w-full overflow-hidden py-3">
        <div className="animate-marquee-smooth gap-5">
          {marqueeCards.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              to="/products"
              className="w-[250px] shrink-0 bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/11] bg-[#12161A]">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-[#12161A] font-black text-xs uppercase">{item.name}</h3>
                  <p className="text-slate-600 text-xs mt-1 line-clamp-2">{item.description}</p>
                </div>
                <span className="mt-3 text-[11px] font-black text-[#3b781d] uppercase">View Details &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  );
}