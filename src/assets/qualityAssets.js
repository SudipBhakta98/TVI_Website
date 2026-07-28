const qualityAssets = {
  quality_bg:
    "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876910/quality-bg_kd6nui.png",
  quality_inspection_img:
    "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784970543/quality_l21fxh.png",

  qualitySteps: [
    {
      step: "01",
      name: "Incoming Inspection",
      tagline: "Raw material validation & testing",
      specs: [
        { label: "Check Type", value: "Chemical & Physical analysis" },
        { label: "Material Profile", value: "Thickness & Grade verification" },
        { label: "Compliance", value: "Mill TC matching verification" },
      ],
     
    },
    {
      step: "02",
      name: "In Process Inspection",
      tagline: "Continuous station routing dimension check",
      specs: [
        { label: "Method", value: "First-piece & random batch check" },
        { label: "Metrics", value: "Dimensional limits & angle profiles" },
        { label: "Traceability", value: "Operator-level data logging" },
      ],
      
    },
    {
      step: "03",
      name: "Final Inspection",
      tagline: "Pre-packaging comprehensive blueprint audit",
      specs: [
        { label: "Check System", value: "Full dimensional clearance profile" },
        { label: "Finishing", value: "Powder coat DFT & verification" },
        { label: "Standard", value: "Customer drawing matching check" },
      ],
     
    },
    {
      step: "04",
      name: "Testing & Validation",
      tagline: "Stress, load, and performance evaluation",
      specs: [
        { label: "Welding", value: "AWS D1.1 certified check" },
        { label: "Hardware", value: "Torque testing & structural metrics" },
        { label: "Assembly", value: "Functional & component fit logs" },
      ],
     
    },
    {
      step: "05",
      name: "Packaging & Dispatch",
      tagline: "Secure outbound logistics assurance",
      specs: [
        { label: "Crating", value: "Custom export-grade protection" },
        { label: "Traceability", value: "Barcode shipping documentation" },
        { label: "Transit", value: "Anti-moisture shrink wrap shield" },
      ],
     
    },
  ],

  equipments: [
    "VMS",
    "Height Master",
    "Welding Inspection Equipment",
    "Digital Measuring Instruments",
    "Precision Measuring Instruments",
  ],

  certifications: [
    {
      title: "ISO 9001:2015",
      authority: "BMQR Certification",
      previewImg: "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876923/ISO_9001_2015_d9tje6.jpg",
    },
    {
      title: "ISO 14001:2015",
      authority: "STAR ISO Certification",
      previewImg:  "https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876908/ISO_14001_2015_uqjsus.jpg",
    },
    {
      title: "ZED SILVER",
      authority: "Zero Defect Zero Effect (MSME)",
      previewImg:"https://res.cloudinary.com/eaubwmsx/image/upload/q_auto,f_auto/v1784876893/ZED_SILVER_oqppvn.jpg",
    },
  ],
};

export default qualityAssets
