import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categoriesData = [
  {
    id: 'charging-station',
    name: 'Charging Station',
    images: [
      '/image/productes/charging_station/charging_station_01.png',
      '/image/productes/charging_station/charging_station_02.png'
    ]
  },
  {
    id: 'console',
    name: 'Console',
    images: [
      '/image/productes/console/console_01.png',
      '/image/productes/console/console_02.png',
      '/image/productes/console/console_03.png'
    ]
  },
  {
    id: 'data-center-racks',
    name: 'Data Center Racks',
    images: [
      '/image/productes/data_center_racks/data_center_rack_01.png',
      '/image/productes/data_center_racks/data_center_rack_02.png',
      '/image/productes/data_center_racks/data_center_rack_03.png',
      '/image/productes/data_center_racks/data_center_rack_04.png'
    ]
  },
  {
    id: 'integrated-cabinets',
    name: 'Integrated Electrical Cabinets',
    images: [
      '/image/productes/integrated_electrical_cabinates/electrical_cabinets_01.png',
      '/image/productes/integrated_electrical_cabinates/electrical_cabinets_02.png',
      '/image/productes/integrated_electrical_cabinates/electrical_cabinets_03.png'
    ]
  },
  {
    id: 'lab-equipment',
    name: 'Lab Equipment',
    images: [
      '/image/productes/lab_equipment/lab_equipment_01.png',
      '/image/productes/lab_equipment/lab_equipment_02.png',
      '/image/productes/lab_equipment/lab_equipment_03.png'
    ]
  },
  {
    id: 'battery-casing',
    name: 'Lithium Ion Battery Casing',
    images: [
      '/image/productes/lithium_ion_battery_casing/lithium_ion_casing_01.png',
      '/image/productes/lithium_ion_battery_casing/lithium_ion_casing_02.png',
      '/image/productes/lithium_ion_battery_casing/lithium_ion_casing_03.png',
      '/image/productes/lithium_ion_battery_casing/lithium_ion_casing_04.png'
    ]
  },
  {
    id: 'sheet-metal',
    name: 'Sheet Metal Parts',
    images: [
      '/image/productes/sheet_metal_parts/sheet_metal_parts_01.png',
      '/image/productes/sheet_metal_parts/sheet_metal_parts_02.png',
      '/image/productes/sheet_metal_parts/sheet_metal_parts_03.png',
      '/image/productes/sheet_metal_parts/sheet_metal_parts_04.png'
    ]
  }
];

export default function ProductsPortfolio() {
  const [activeTab, setActiveTab] = useState(categoriesData[0].id);
  const [selectedImage, setSelectedImage] = useState(null);

  // Lock scrolling behind popup when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedImage]);

  const activeCategory = categoriesData.find(cat => cat.id === activeTab);

  return (
    <div id="products" className="w-full bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-16 text-slate-800 font-sans">
      <div className="max-w-[85rem] mx-auto">
        
        {/* Header Section Title */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-[#1E3A8A] font-black text-3xl md:text-4xl tracking-wider uppercase">
            OUR PRODUCT PORTFOLIO
          </h2>
          <div className="w-16 h-[3px] bg-[#0B57D0] rounded-full mt-3 mx-auto lg:mx-0" />
        </div>

        {/* Master Layout Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Clickable Category List */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-lg border border-slate-100 p-4 lg:sticky lg:top-24 z-10">
            <div className="text-xs font-black text-slate-400 uppercase tracking-widest px-4 pb-3 mb-2 border-b border-slate-100">
              Category List
            </div>
            
            <nav className="space-y-1">
              {categoriesData.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`relative w-full text-left px-4 py-3.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 uppercase flex items-center justify-between group ${
                      isActive 
                        ? 'text-white' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B57D0]'
                    }`}
                  >
                    {/* Brand Styled Active Background Pill */}
                    {isActive && (
                      <motion.span 
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 bg-[#0B57D0] rounded-lg z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    
                    <span className="relative z-10 truncate">{category.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT VIEW PANEL: Dynamic Grid Display Layer */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow-lg border border-slate-100 p-6 sm:p-8 min-h-[500px]">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-[#1E3A8A] font-black text-lg uppercase tracking-wide">
                {activeCategory?.name}
              </h3>
              <span className="text-xs font-medium text-slate-400 italic hidden sm:inline">
                Click an item to examine engineering specs
              </span>
            </div>

            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {activeCategory?.images.map((src, index) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, scale: 0.92, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    onClick={() => setSelectedImage({ src, title: activeCategory.name, index: index + 1 })}
                    className="group relative bg-slate-50 rounded-xl overflow-hidden border border-slate-100 aspect-[4/3] shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <img
                      src={src}
                      alt={`${activeCategory.name} component item ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = e.target.nextSibling;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />

                    {/* Fallback View Panel Container */}
                    <div className="hidden absolute inset-0 flex-col items-center justify-center bg-[#041629] text-slate-400 p-4 text-center">
                      <svg className="w-10 h-10 text-slate-600 mb-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                      </svg>
                      <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
                        {activeCategory.name} Image #{index + 1}
                      </span>
                    </div>

                    {/* Gradient Overlay Interaction Card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041629]/90 via-[#041629]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold tracking-widest text-white uppercase">Precision Engineered</p>
                          <h4 className="text-xs font-black uppercase tracking-wide text-white mt-0.5">View Full Size</h4>
                        </div>
                        <div className="p-1.5 bg-[#0B57D0] text-white rounded-full shadow-md">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604zM10.5 7.5v6m3-3h-6" />
                          </svg>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>

      {/* FULL-SIZE IMAGE POPUP MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[#041629]/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button Top Edge Indicator */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors group z-50"
              aria-label="Close panel view modal"
            >
              <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Box Frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[85vh] flex flex-col"
            >
              <div className="flex-1 bg-slate-900 overflow-hidden flex items-center justify-center relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Fallback error component inside pop up panel window */}
                <div className="hidden absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-6">
                  <svg className="w-16 h-16 text-slate-700 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z" />
                  </svg>
                  <p className="text-sm font-black uppercase tracking-widest text-slate-400">Image Asset Missing</p>
                  <p className="text-xs font-mono text-slate-600 mt-1">{selectedImage.src}</p>
                </div>
              </div>

              {/* Bottom Metadata Info Banner */}
              <div className="bg-[#041629] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-white/5">
                <div>
                  <h4 className="text-white text-sm font-black uppercase tracking-wider">
                    {selectedImage.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                   A Technovision Industries Product
                  </p>
                </div>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}