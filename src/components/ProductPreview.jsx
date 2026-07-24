import React from 'react';
import { Link } from 'react-router-dom';
import { product_image } from '../../image/image';

const categoriesData = [
  {
    id: "charging-station",
    name: "EV Charging Enclosure Solutions",
    description: "Custom structural enclosures and weatherproof cabinets engineered to OEM specifications.",
    images: [
      product_image.charging_station.charging_station_01,
      product_image.charging_station.charging_station_02,
    ],
  },
  {
    id: "console",
    name: "Control Desk & Console Solutions",
    description: "Precision-fabricated ergonomic desks and custom operator control console assemblies.",
    images: [
      product_image.console.console_01,
      product_image.console.console_02,
      product_image.console.console_03,
    ],
  },
  {
    id: "data-center-racks",
    name: "Data Infrastructure Solutions",
    description: "Heavy-duty server rack frames, perforated doors, and modular enclosure assemblies.",
    images: [
      product_image.data_center_rack.data_center_rack_01,
      product_image.data_center_rack.data_center_rack_02,
      product_image.data_center_rack.data_center_rack_03,
      product_image.data_center_rack.data_center_rack_04,
    ],
  },
  {
    id: "integrated-cabinets",
    name: "Integrated Electrical Housing Solutions",
    description: "Contract-manufactured power distribution cabinets and electrical panel housing units.",
    images: [
      product_image.integrated_electrical_cabinat.electrical_cabinat_01,
      product_image.integrated_electrical_cabinat.electrical_cabinat_02,
      product_image.integrated_electrical_cabinat.electrical_cabinat_03,
    ],
  },
  {
    id: "lab-equipment",
    name: "Precision Equipment Frame Solutions",
    description: "High-precision stainless steel and sheet metal housing for medical & lab instruments.",
    images: [
      product_image.lab_equipment.lab_equipment_01,
      product_image.lab_equipment.lab_equipment_02,
      product_image.lab_equipment.lab_equipment_03,
    ],
  },
  {
    id: "battery-casing",
    name: "Energy Storage Enclosure Solutions",
    description: "Custom lithium-ion battery pack enclosures, module trays, and structural protective housings.",
    images: [
      product_image.lithium_ion_casing.lithium_ion_casing_01,
      product_image.lithium_ion_casing.lithium_ion_casing_02,
      product_image.lithium_ion_casing.lithium_ion_casing_03,
      product_image.lithium_ion_casing.lithium_ion_casing_04,
    ],
  },
  {
    id: "sheet-metal",
    name: "Custom Sheet Metal Solutions",
    description: "Build-to-print punched, laser-cut, bent, and stamped precision sub-assemblies.",
    images: [
      product_image.sheet_metal_part.sheet_metal_part_01,
      product_image.sheet_metal_part.sheet_metal_part_02,
      product_image.sheet_metal_part.sheet_metal_part_03,
      product_image.sheet_metal_part.sheet_metal_part_04,
    ],
  },
];

// Flatten out every individual photo from every category into a single array of card items
const allRailCards = categoriesData.flatMap((category) =>
  category.images.map((img, idx) => ({
    id: `${category.id}-${idx}`,
    categoryId: category.id,
    name: category.name,
    description: category.description,
    image: img,
  }))
);

export default function ProductsPreview() {
  // Duplicate the array so the continuous animation loops infinitely without gaps
  const railItems = [...allRailCards, ...allRailCards];

  return (
    <section className="w-full bg-[#F8FAFC] py-10 text-slate-800 font-sans overflow-hidden">
      
      {/* Dynamic Keyframe Animation for Infinite Horizontal Rail Slide */}
      <style>{`
        @keyframes railSlide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-30%);
          }
        }
        .animate-rail {
          animation: railSlide 45s linear infinite;
        }
        .animate-rail:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 mb-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-[#0B57D0]/10 text-[#0B57D0] rounded text-[11px] font-bold tracking-widest uppercase mb-2">
              Contract Manufacturing Capabilities
            </div>
            <h2 className="text-[#1E3A8A] font-black text-2xl md:text-3xl tracking-wider uppercase">
              Our Engineered Solutions
            </h2>
            <p className="text-slate-600 text-xs md:text-sm max-w-xl mt-1.5 font-medium">
              We specialize in custom build-to-print manufacturing engineered precisely to your CAD models and specifications.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#0B57D0] hover:bg-[#1E3A8A] px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <span>Explore All Solutions</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* CONTINUOUS RAIL TRACK CONTAINER */}
      <div className="w-full overflow-hidden py-2 relative">
        <div className="flex gap-4 w-max animate-rail">
          {railItems.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              to="/products"
              className="w-[210px] sm:w-[230px] shrink-0 group bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
            >
              {/* Compact Image Container */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <div className="absolute top-2 left-2 bg-[#041629]/80 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider z-10">
                  Custom OEM
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />

                {/* Fallback Display */}
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-[#041629] text-slate-400 p-2 text-center">
                  <svg className="w-6 h-6 text-slate-600 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                  </svg>
                  <span className="text-[9px] font-bold tracking-wider uppercase text-slate-500">
                    {item.name}
                  </span>
                </div>
              </div>

              {/* Compact Card Details */}
              <div className="p-3.5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <h3 className="text-[#1E3A8A] font-bold text-xs uppercase tracking-wide group-hover:text-[#0B57D0] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-slate-500 text-[11px] font-normal mt-1.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-[#0B57D0] uppercase tracking-wider">
                  <span>View Details</span>
                  <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Quote Banner */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16 mt-6">
        <div className="p-4 rounded-lg bg-white border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#0B57D0]/10 text-[#0B57D0] rounded-md shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div>
              <h4 className="text-slate-900 font-bold text-xs uppercase">Need a completely custom assembly?</h4>
              <p className="text-slate-500 text-[11px] font-medium">We support rapid prototyping, custom tooling design, and full volume production.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0B57D0] hover:text-[#1E3A8A] uppercase tracking-wider whitespace-nowrap transition-colors duration-200"
          >
            <span>Request custom quote</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
          </Link>
        </div>
      </div>

    </section>
  );
}