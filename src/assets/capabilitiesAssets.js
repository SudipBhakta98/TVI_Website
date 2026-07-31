// 1. Process Video Assets
export const capabilitiesAssets = {
  npd: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488698/NPD_1_rsous6.mp4",
  tooling: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488693/Tooling_1_cfxqn4.mp4",
  laser_cutting: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488684/Laser_Cutting_1_x8xvsx.mp4",
  punching: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488691/Punching_1_xowyqi.mp4",
  bending: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488691/Bending_1_cjfzzx.mp4",
  stamping: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785489400/Stamping_1_rs5p7n.mp4",
  fabrication: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488695/Febrication_1_xpbtoz.mp4",
  powder_coating: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785488706/Powder_Coating_adeofw.mp4",
  assembly: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785489392/Assembly_1_blac4e.mp4",
  quality: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785489390/Quality_1_xicc05.mp4",
  dispatch: "https://res.cloudinary.com/eaubwmsx/video/upload/v1785489444/Dispatch_1_cprsqr.mp4",
};

// 2. Capabilities Image Assets
export const capabilities_image = {
  febrication: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876893/WELDING_kpnh55.png",
  powder_coating: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876892/POWDER_COATING_ubyeom.png",
  assembly: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876891/ASSEMBLY_mcrpkx.png",
  punching: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876890/TURRET_PUNCHING_tbtd71.png",
  design_development: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876890/DESIGN_DEVELOPMENT_vnar6m.png",
  tooling: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876889/IN_HOUSE_TOOLING_FACILITY_c4grqj.png",
  laser_cuting: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876888/LASER_CUTTING_rsuuha.png",
  stamping: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876887/STAMPING_pvczmy.png",
  bending: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876887/BENDING_ekeunw.png"
};

// 3. Process Section Data (Raw Sheet to Dispatch - Step by Step with Videos)
export const processSteps = [
  {
    step: "01",
    id: "npd",
    title: "New Product Development & Engineering",
    video: capabilitiesAssets.npd,
    tagline: "3D CAD Modeling, DFM Optimization & Nesting Design",
    description: "Every part begins in our NPD division where engineers evaluate customer blueprints. We run Design for Manufacturability (DFM) analyses to optimize raw sheet metal yield, minimize scrap, and establish control plans for production.",
    highlights: ["24-48 Hours Prototyping Turnover", "Siemens NX & SolidWorks CAD/CAM", "Automated Sheet Nesting Software"]
  },
  {
    step: "02",
    id: "tooling",
    title: "In-House Tool Room & Die Making",
    video: capabilitiesAssets.tooling,
    tagline: "Precision Progressive Dies & Custom Fixturing",
    description: "Our fully integrated tool room fabricates precision progressive, stage, and compound press tools. Using CNC Machining Centers and Wire-cut EDMs, we achieve tool tolerances down to ±0.01 mm.",
    highlights: ["In-house Tool Maintenance & Refurbishment", "Hardened Tool Steel Inserts (D2/SKD11)", "Custom Welding & Assembly Jigs"]
  },
  {
    step: "03",
    id: "laser_cutting",
    title: "High-Speed Fiber Laser Cutting",
    video: capabilitiesAssets.laser_cutting,
    tagline: "TRUMPF 3kW & 6kW High Precision Fiber Lasers",
    description: "High-speed CNC fiber lasers execute clean cuts across Mild Steel, Stainless Steel, and Aluminum up to 25mm thickness. Nitrogen-assist cutting provides oxide-free edges ready for immediate welding or coating.",
    highlights: ["Cut Speed up to 50m/min", "Tolerance: ±0.1 mm", "N2 & O2 Automated Gas Control"]
  },
  {
    step: "04",
    id: "punching",
    title: "CNC Turret Punching",
    video: capabilitiesAssets.punching,
    tagline: "Complex Cutouts, Louvers & Embossing",
    description: "Multi-tool CNC turret punch presses handle high-speed perforation, formings, countersinking, and louvering. Automated sheet loader systems allow 24/7 continuous operation with minimal operator intervention.",
    highlights: ["Up to 800 Hits per Minute", "Multi-Tool Auto-Index Stations", "Forming & Tapping in a single cycle"]
  },
  {
    step: "05",
    id: "bending",
    title: "CNC Press Brake Bending",
    video: capabilitiesAssets.bending,
    tagline: "AMADA & TRUMPF Multi-Axis Bending (40T to 200T)",
    description: "Precision CNC press brakes equipped with back-gauge sensors execute multi-stage complex bends. Dynamic angle measurement systems compensate for sheet spring-back in real time.",
    highlights: ["Max Bend Length: 3000 mm", "Angle Accuracy: ±0.5°", "Multi-V Die Quick Change Systems"]
  },
  {
    step: "06",
    id: "stamping",
    title: "High-Volume Stamping & Press Shop",
    video: capabilitiesAssets.stamping,
    tagline: "30+ Power Presses ranging from 32T to 300T",
    description: "Our stamping facility processes continuous coils and blanks into high-volume components. Servo-feeder equipped press lines ensure rapid progressive stamping with automatic sensor protections.",
    highlights: ["Progressive & Stage Tooling Line", "Automatic Coil Feeders & De-coilers", "In-Line Sensor Defect Detection"]
  },
  {
    step: "07",
    id: "fabrication",
    title: "Welding & Metal Fabrication",
    video: capabilitiesAssets.fabrication,
    tagline: "Certified TIG, MIG, Spot & Robotic Laser Welding",
    description: "Expert welders and robotic cells handle seam, spot, and structural welding. Dedicated fixtures ensure dimensional integrity and zero distortion across large enclosure sub-assemblies.",
    highlights: ["AWS D1.1 Certified Welders", "Resistance Spot & Projection Welding", "Distortion Control Jigs"]
  },
  {
    step: "08",
    id: "powder_coating",
    title: "SCADA-Controlled Powder Coating",
    video: capabilitiesAssets.powder_coating,
    tagline: "Automated 7-Tank Pre-Treatment & Powder Plant",
    description: "Components pass through a 7-tank chemical pre-treatment conveyor line followed by electrostatic powder deposition and high-temperature curing ovens to pass strict salt spray tests.",
    highlights: ["1000+ Hours Salt Spray Resistant Finish", "RAL Color Match Range", "Automated Reciprocator Spray Guns"]
  },
  {
    step: "09",
    id: "assembly",
    title: "Mechanical & Electrical Integration",
    video: capabilitiesAssets.assembly,
    tagline: "Modular Sub-Assembly, Busbar & Hardware Insertion",
    description: "Dedicated integration lines fit PEM studs, fasteners, gaskets, hinges, busbars, and wiring harnesses into sheet metal enclosures—providing complete turn-key product solutions.",
    highlights: ["PEM Auto-Insertion Presses", "Gasket Dispensing Robots", "Sub-Assembly Testing Stations"]
  },
  {
    step: "10",
    id: "quality",
    title: "Quality Inspection & QA/QC",
    video: capabilitiesAssets.quality,
    tagline: "CMM, VMS & Zero-Defect Control Systems",
    description: "Quality inspectors verify parts using Vision Measurement Systems (VMS), 3D profile scanners, coating thickness meters, and height gauges under strict ISO 9001:2015 quality standards.",
    highlights: ["ISO 9001:2015 & ISO 14001:2015 Certified", "Full Traceability Reports", "First Article Inspection (FAI) Approval"]
  },
  {
    step: "11",
    id: "dispatch",
    title: "Packaging & Global Logistics",
    video: capabilitiesAssets.dispatch,
    tagline: "Custom Export-Grade Crating & Traceable Logistics",
    description: "Finished products are protected with anti-rust VCI film, custom foam inserts, and wooden pallets before being shipped via ocean, air, or land with full batch tracking.",
    highlights: ["Custom VCI Anti-Corrosion Packaging", "Barcoded Box Labels", "Global Export Compliance"]
  }
];

// 4. Capabilities Grid Data (With detailed pop-up modal view support)
export const capabilitiesGrid = [
  {
    id: "design_development",
    title: "DESIGN & DEVELOPMENT",
    shortDesc: "End-to-end CAD/CAM modeling, DFM engineering, and prototyping support.",
    image: capabilities_image.design_development,
    fullDesc: "Our engineering department works as an extension of your product design team. Utilizing state-of-the-art 3D CAD modeling software, we perform DFM (Design for Manufacturability) analysis to lower material waste, improve structural integrity, and accelerate product launch cycles.",
    specs: [
      { label: "Software", value: "SolidWorks, Siemens NX, AutoCAD" },
      { label: "Capabilities", value: "3D Modeling, Reverse Engineering, Nesting" },
      { label: "Lead Time", value: "24-48 Hours for Prototyping" }
    ]
  },
  {
    id: "tooling",
    title: "IN-HOUSE TOOLING FACILITY",
    shortDesc: "Complete die making room with advanced CNC machining & wire EDM capabilities.",
    image: capabilities_image.tooling,
    fullDesc: "We house a fully equipped tool room capable of designing, manufacturing, and maintaining progressive, compound, and single-stage dies. In-house tooling control allows us to react swiftly to design modifications without third-party delays.",
    specs: [
      { label: "Accuracy", value: "± 0.01 mm Tool Tolerance" },
      { label: "Machining", value: "CNC Vertical Machining Centers, Wire EDM" },
      { label: "Life Cycle", value: "Preventive Maintenance & Lifetime Tool Guarantee" }
    ]
  },
  {
    id: "laser_cutting",
    title: "LASER CUTTING",
    shortDesc: "TRUMPF 3kW & 6kW High Precision Fiber Lasers for ultra-clean cuts.",
    image: capabilities_image.laser_cuting,
    fullDesc: "Our fiber laser technology enables high-speed, high-accuracy cutting across various material thicknesses. Nitrogen-assist cutting ensures burr-free and oxide-free edges, making sheets instantly ready for bending or welding.",
    specs: [
      { label: "Machine Power", value: "TRUMPF 3kW & 6kW Fiber Lasers" },
      { label: "Thickness Range", value: "Mild Steel up to 25mm, Stainless Steel up to 20mm" },
      { label: "Tolerance", value: "± 0.1 mm Dimensional Accuracy" }
    ]
  },
  {
    id: "punching",
    title: "TURRET PUNCHING",
    shortDesc: "High-speed CNC turret punching for intricate perforations and louvers.",
    image: capabilities_image.punching,
    fullDesc: "High-performance CNC turret punch presses perform rapid blanking, louvering, forming, and tapping. Automated sheet loader systems allow 24/7 lights-out production for cost-effective batch runs.",
    specs: [
      { label: "Speed", value: "Up to 800 Hits per minute" },
      { label: "Tooling Stations", value: "Auto-Index multi-tools" },
      { label: "Special Formings", value: "Louvers, Countersinks, Thread Tapping" }
    ]
  },
  {
    id: "bending",
    title: "BENDING & FORMING",
    shortDesc: "AMADA & TRUMPF press brakes with capacities from 40T to 200T.",
    image: capabilities_image.bending,
    fullDesc: "Multi-axis CNC press brakes execute high-precision bending with laser-guided angle verification. Automated back gauges accommodate complex geometries with multi-bend sequences.",
    specs: [
      { label: "Tonnage Range", value: "40 Ton to 200 Ton" },
      { label: "Max Length", value: "Up to 3000 mm" },
      { label: "Precision", value: "± 0.5° Angle Accuracy" }
    ]
  },
  {
    id: "stamping",
    title: "HIGH VOLUME STAMPING",
    shortDesc: "Fleet of 30+ presses ranging from 32 to 300 Tons with auto coil feeders.",
    image: capabilities_image.stamping,
    fullDesc: "Our automated press shop runs continuous high-volume progressive die stamping. Equipped with automatic de-coilers, straighteners, and servo feeders, we yield millions of high-precision components annually.",
    specs: [
      { label: "Press Range", value: "32 Tons to 300 Tons" },
      { label: "Feeding System", value: "Automated Servo Feeders & De-coilers" },
      { label: "Capacity", value: "Over 5 Million Components / Month" }
    ]
  },
  {
    id: "fabrication",
    title: "FABRICATION & WELDING",
    shortDesc: "MIG, TIG, Spot & Laser welding handled by AWS-certified welders.",
    image: capabilities_image.febrication,
    fullDesc: "Comprehensive metal fabrication shop equipped with dedicated welding bays and specialized fixtures to minimize thermal distortion. Certified welders handle structural enclosures, frames, and sub-assemblies.",
    specs: [
      { label: "Processes", value: "TIG, MIG, Spot, Projection & Laser Welding" },
      { label: "Certification", value: "AWS D1.1 Certified Personnel" },
      { label: "Materials", value: "Stainless Steel, Mild Steel, Aluminum" }
    ]
  },
  {
    id: "powder_coating",
    title: "POWDER COATING",
    shortDesc: "Automated SCADA-controlled plant with a 7-tank pre-treatment process.",
    image: capabilities_image.powder_coating,
    fullDesc: "Our conveyorized powder coating facility features a 7-stage chemical pre-treatment tunnel to ensure superior paint adhesion and corrosion resistance. SCADA controls maintain constant oven curing temperatures.",
    specs: [
      { label: "Line Type", value: "Automated SCADA Conveyor Line" },
      { label: "Pre-Treatment", value: "7-Tank Chemical Process" },
      { label: "Durability", value: "1000+ Hours Salt Spray Tested" }
    ]
  },
  {
    id: "assembly",
    title: "ASSEMBLY & INTEGRATION",
    shortDesc: "Electromechanical integration, hardware insertion, and box-build assembly.",
    image: capabilities_image.assembly,
    fullDesc: "From simple hardware insertion to full turnkey box-build manufacturing, our integration department assembles sub-components, installs electrical harnesses, applies seals, and performs end-of-line testing.",
    specs: [
      { label: "Services", value: "PEM Stud Insertion, Wire Harnessing, Box-Build" },
      { label: "Testing", value: "Electrical Continuity & Functional Fit Inspection" },
      { label: "Packaging", value: "Kitting & Custom Retail Packaging" }
    ]
  }
];