import { facility_image } from "../../image/image";

// 1. Manufacturing Units Data Mapping
const unitsData = [
  {
    name: "Unit 1 & 3",
    path: facility_image.unit_01_03,
    address: "Plot Q13 & Q14, Kssidc Industrial Area, 2nd Phase Jigani, Bangalore - 560105",
    details: [
      "Competency: Product Assemblies.",
      "Card Frame Assemblies for Data centers.",
      "Mfg of sheet metal Component & assemblies.",
      "Wall mounts"
    ]
  },
  {
    name: "Unit 2",
    path: facility_image.unit_02,
    address: "Plot no 67, 563 Kiadb, Building no 4, Road no 4, 1st Phase Jigani Industrial Area, Anekal Taluk, Bangalore - 562105",
    details: [
      "Competency: Design & Mfg. of Press tools, Jigs & Fixtures",
      "Design and Mfg of progressive tools up to 2.5 mtrs",
      "Tooling supplier to OEM'S in India and exporter",
      "M/c: Wire cut, CNC, Surface grinding etc",
      "Expertise in the area of automobile, electrical and defence products",
      "Strong NPD team"
    ]
  },
  {
    name: "Unit 5",
    path: facility_image.unit_05,
    address: "SY.NO 261/3 & SY 261/4 Haragadde Village, Jigani Hobli Taluk, Bengaluru, Karnataka 560105",
    details: [
      "Competency: Soft & Hard tooling",
      "Automated Powder coating with Scada controls (m/c 0.8 X 1.5 X 2.4 Mtr.)",
      "M/c: Presses, Laser / Bending / Welding",
      "Capacity 25 enclosures per day, 1000 panels per day",
      "Electrical Panel with integration, Mechanical assembly, Consoles, Panels"
    ]
  }
];

// 2. Facilities Overview Data Mapping
const facilitiesData = [
  {
    name: "OFFICE OVERVIEW",
    tagline: "Modern administrative workspace designed for efficient operations, collaboration, and customer engagement.",
    path: facility_image.office_room
  },
  {
    name: "NPD ROOM",
    tagline: "Dedicated New Product Development center for innovative design, prototyping, and engineering excellence.",
    path: facility_image.npd_room
  },
  {
    name: "SHOP FLOOR OVERVIEW",
    tagline: "Well-organized production floor equipped with advanced manufacturing systems for high-quality fabrication.",
    path: facility_image.shop_flor_01
  },
  {
    name: "TOOL ROOM",
    tagline: "Fully equipped tool room supporting precision tooling, maintenance, and custom manufacturing solutions.",
    path: facility_image.tool_room
  },
  {
    name: "INTEGRATED SHOP FLOOR",
    tagline: "Integrated manufacturing facility enabling seamless fabrication, assembly, and production workflow.",
    path: facility_image.shop_flor_02
  },
  {
    name: "PRODUCT DEMO ROOM",
    tagline: "Interactive demonstration area showcasing finished products, innovations, and customer solutions.",
    path: facility_image.product_demo_room
  },
  {
    name: "OBEYA ACCELERATED QUALITY AREA",
    tagline: "Collaborative quality management hub where real-time data drives continuous improvement and operational excellence.",
    path: facility_image.obeya_room
  },
  {
    name: "TRAINING ROOM",
    tagline: "Dedicated learning environment for employee skill development, technical training, and knowledge sharing.",
    path: facility_image.training_room
  },
  {
    name: "ASSEMBLY ROOM",
    tagline: "Specialized assembly area ensuring precise integration, functional testing, and final product readiness.",
    path: facility_image.assembly_room
  }
];

export default function Facilities() {
  return (
    <section id="facility" className="w-full bg-[#070F19] text-white antialiased font-sans overflow-hidden">
      
      {/* Facilities Section Header */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 pt-20 pb-10">
        <h2 className="text-xl md:text-2xl font-black tracking-wider uppercase text-white">
          OUR FACILITIES
        </h2>
        <div className="w-12 h-[2px] bg-[#0252D6] mt-2 mb-3" />
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed font-normal normal-case">
          State-of-the-art infrastructure for superior manufacturing.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((fac) => (
            <article 
              key={fac.name} 
              className="group flex flex-col bg-white border border-slate-200/80 rounded-sm overflow-hidden hover:border-slate-300 transition-all duration-200"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200/80">
                <img 
                  src={fac.path} 
                  alt={fac.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
                />
              </div>
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

      {/* Section Divider */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 my-4">
        <div className="w-full h-[1px] bg-slate-800/60" />
      </div>

      {/* Manufacturing Units Header */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 pt-16 pb-12">
        <h2 className="text-xl md:text-2xl font-black tracking-wider uppercase text-white">
          MANUFACTURING UNITS
        </h2>
        <div className="w-12 h-[2px] bg-[#0252D6] mt-2 mb-3" />
        <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed font-normal normal-case">
          Distributed manufacturing ecosystems built to manage scaling demands and multi-tier structural engineering projects.
        </p>
      </div>

      {/* Units List */}
      <div className="max-w-[85rem] mx-auto px-6 md:px-12 pb-28 space-y-16">
        {unitsData.map((unit, index) => {
          const isEven = index % 2 === 0;

          return (
            <article 
              key={unit.name} 
              className={`group flex flex-col lg:flex-row items-stretch bg-white border border-slate-200/60 rounded-sm overflow-hidden hover:border-[#0252D6]/40 hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 ease-in-out ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              
              {/* Image Block */}
              <div className="relative w-full lg:w-1/2 min-h-[280px] sm:min-h-[340px] overflow-hidden bg-slate-900">
                <img 
                  src={unit.path} 
                  alt={unit.name} 
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-50"
                  loading="lazy"
                />
                
                {/* Overlay Address */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                  <span className="text-[9px] font-bold text-[#0082FB] tracking-widest uppercase mb-1">
                    PLANT SITE ADDRESS
                  </span>
                  <p className="text-white text-[11px] font-medium leading-relaxed max-w-md">
                    {unit.address}
                  </p>
                </div>
              </div>

              {/* Text Spec Box */}
              <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-slate-50/30 transition-colors duration-500 group-hover:bg-white">
                <div className="relative mb-6 pb-3 border-b border-slate-200/60">
                  <h3 className="text-lg font-black text-[#0A1118] tracking-wide uppercase transition-colors duration-300 group-hover:text-[#0252D6]">
                    {unit.name}
                  </h3>
                  <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#0252D6] transition-all duration-300 group-hover:w-24" />
                </div>
                
                {/* Details List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {unit.details.map((detail, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start gap-2.5 text-slate-600 font-medium text-[11px] sm:text-xs leading-relaxed col-span-1 sm:first-of-type:col-span-2 transition-all duration-300 ease-in-out group-hover:translate-x-1"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    >
                      <span className="text-[#0252D6] font-extrabold text-sm select-none leading-none mt-[-1px] transition-transform duration-300 group-hover:scale-125">
                        &rsaquo;
                      </span>
                      <span className="transition-colors duration-300 group-hover:text-slate-900">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          );
        })}
      </div>

    </section>
  );
}