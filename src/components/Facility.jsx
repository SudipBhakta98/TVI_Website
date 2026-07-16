import React from 'react';

const facilitiesData = [
  { name: "PLANT OVERVIEW", tagline: "State-of-the-art infrastructure for superior manufacturing.", path: "/image/facility/office-room.png" },
  { name: "LASER CUTTING SHOP", tagline: "High-precision TRUMPF fiber lasers for flawless metal profiling.", path: "/image/facility/npd-room.png" },
  { name: "PRESS SHOP", tagline: "Heavy-duty CNC press brakes ranging from 40T to 200T configurations.", path: "/image/facility/shop-flor.png" },
  { name: "TOOL ROOM", tagline: "Advanced in-house tool design, EDM wire-cutting, and machining.", path: "/image/facility/tool-room.png" },
  { name: "FABRICATION SHOP", tagline: "Certified MIG, TIG, and spot welding stations for rugged assembly.", path: "/image/facility/shop-flor2.png" },
  { name: "POWDER COATING PLANT", tagline: "Fully automated SCADA-controlled conveyorized coating systems.", path: "/image/facility/product-demo-room.png" },
  { name: "ASSEMBLY SHOP", tagline: "Streamlined electro-mechanical and structural integration lines.", path: "/image/facility/obeya-room.png" },
  { name: "QUALITY LAB", tagline: "Rigid verification setup featuring CMM and 3D scanning equipment.", path: "/image/facility/training-room.png" },
  { name: "QUALITY CONTROL ROOM", tagline: "Centralized inspection analytics, micro-precision calibration, and final documentation control.", path: "/image/facility/quality-room.png" }
];

export default function FacilitiesSection() {
  return (
    <section id='facility' className="w-full bg-[#070F19] text-white antialiased font-sans">
      
      {/* 1. Header Block Component (Matches your global section text alignments) */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 pt-16 pb-10">
        <h2 className="text-xl md:text-2xl font-black tracking-wider uppercase text-white">
          OUR FACILITIES
        </h2>
        <div className="w-12 h-[2px] bg-[#0252D6] mt-2 mb-3" />
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed font-normal normal-case">
          State-of-the-art infrastructure for superior manufacturing.
        </p>
      </div>

      {/* 2. Grid Mesh System (3 Columns, Crisp White Image Cards) */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((fac) => (
            <article 
              key={fac.name} 
              className="group flex flex-col bg-white border border-slate-200/80 rounded-sm overflow-hidden hover:border-slate-300 transition-all duration-200"
            >
              
              {/* Card Image Wrapper Panel */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                <img 
                  src={fac.path} 
                  alt={fac.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
              </div>

              {/* Card Information Body (Switched to crisp dark text on the white card background) */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xs font-bold text-[#0A1118] tracking-wide uppercase transition-colors group-hover:text-[#0252D6]">
                    {fac.name}
                  </h3>
                  <p className="text-slate-500 font-normal text-[11px] mt-2 leading-relaxed normal-case">
                    {fac.tagline}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>

    </section>
  );
}