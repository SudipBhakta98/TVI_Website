import { motion } from "framer-motion";

const capabilities = [
  {
    title: "DESIGN & DEVELOPMENT",
    desc: "End-to-end product design, CAD modeling, engineering, prototyping, and manufacturing support.",
    image: "/image/capabilities/DESIGN & DEVELOPMENT.png",
  },
  {
    title: "IN HOUSE TOOLING FACILITY",
    desc: "In-house tool room with advanced CNC & EDM capabilities.",
    image: "/image/capabilities/IN HOUSE TOOLING FACILITY.png",
  },
  {
    title: "LASER CUTTING",
    desc: "TRUMPF 3kW & 6kW Lasers for high precision cutting.",
    image: "/image/capabilities/LASER CUTTING.png",
  },
  {
    title: "TURRET PUNCHING",
    desc: "LVD & TRUMPF punching machines for high speed accuracy.",
    image: "/image/capabilities/TURRET PUNCHING.png",
  },
  {
    title: "BENDING",
    desc: "AMADA & TRUMPF press brakes from 40T to 200T.",
    image: "/image/capabilities/BENDING.png",
  },
  {
    title: "STAMPING",
    desc: "27+ presses from 10 to 250 Tons.",
    image: "/image/capabilities/STAMPING.png",
  },
  {
    title: "FABRICATION",
    desc: "Spot, TIG, MIG & ARC welding with expert workmanship.",
    image: "/image/capabilities/WELDING.png",
  },
  {
    title: "POWDER COATING",
    desc: "Fully automated SCADA controlled powder coating plant.",
    image: "/image/capabilities/POWDER COATING.png",
  },
  {
    title: "ASSEMBLY",
    desc: "Mechanical, Electro-Mechanical & Electrical Assembly.",
    image: "/image/capabilities/ASSEMBLY.png",
  },
];

export default function Capabilities() {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="capabilities"
      className="bg-white pt-20 px-4 lg:px-8 w-full border-b border-gray-100"
    >
      <div className="max-w-[90rem] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#031424] tracking-wider uppercase">
            OUR MANUFACTURING CAPABILITIES
          </h2>
          <div className="w-16 h-[3px] bg-[#0082FB] mt-3" />
        </div>

        {/* Capabilities Responsive Matrix */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Minimal Circle Vector Frame */}
              <div className="w-full h-44 overflow-hidden rounded-lg mb-5">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Capability Descriptions */}
              <div className="px-6">
                <h3 className="text-[#031424] text-2xl font-bold uppercase mb-1">
                  {cap.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
