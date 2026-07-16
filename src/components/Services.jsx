import { motion } from "framer-motion";

const industries = [
  {
    name: "DATA CENTERS",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    name: "TELECOMMUNICATIONS",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    name: "AUTOMOTIVE",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h7.5m-7.5 0h-1.5A2.25 2.25 0 013 16.5v-1.5m15 3.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.5a2.25 2.25 0 002.25-2.25v-3m-3.75-3h1.5a2.25 2.25 0 012.25 2.25v1.5m-.75-6l-3-3H9L6 6.75M19.5 9.75h-15" />
      </svg>
    ),
  },
  {
    name: "DEFENCE",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.956 11.956 0 0112 2.714z" />
      </svg>
    ),
  },
  {
    name: "ELECTRICAL",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    name: "INDUSTRIAL AUTOMATION",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.128l1.41-.513M5.106 17.785l1.15-.827m11.379-8.16l1.15-.827M8.14 21.27l.707-.866m6.305-7.722l.706-.865M12 3v1.5m0 15V21m-3.077-8.457l-.513-1.41m5.128 14.095l-.513-1.41M6.215 8.14l-.866-.707m7.722 6.305l-.865-.706M3.215 5.106l-.827-1.15m8.16 11.379l-.827-1.15" />
      </svg>
    ),
  },
  {
    name: "AVIATION & AEROSPACE",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    name: "MEDICAL",
    icon: (
      <svg className="w-10 h-10 text-white/80 group-hover:text-[#0082FB] transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5h15v15h-15V4.5zM12 7.5v9m-4.5-4.5h9" />
      </svg>
    ),
  },
];

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="industries" className="bg-[#F8FAFC] pt-20 px-4 lg:px-8 w-full">
      <div className="max-w-[90rem] mx-auto flex flex-col items-center">
        
        <div className="flex flex-col items-center mb-14 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-[#031424] tracking-wider uppercase">
            INDUSTRIES WE SERVE
          </h2>
          <div className="w-16 h-[3px] bg-[#0082FB] mt-3" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                rotate: idx % 2 === 0 ? 0.5 : -0.5,
                boxShadow: "0px 15px 30px rgba(3, 20, 36, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative h-48 w-full rounded overflow-hidden bg-[#031424] cursor-pointer flex flex-col justify-between p-4 sm:p-5 border border-gray-800"
            >
              <motion.div 
                className="absolute bottom-0 left-0 h-[3px] bg-[#0082FB]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />

              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-b from-transparent to-black" />
              
              <motion.div 
                whileHover={{ scale: 1.12, y: -2 }}
                className="z-10 w-full flex-grow flex items-center justify-center pt-2"
              >
                {industry.icon}
              </motion.div>

              <div className="z-10 text-center w-full border-t border-gray-800/60 pt-3">
                <h3 className="text-white font-bold text-[10px] sm:text-xs tracking-wider uppercase group-hover:text-[#0082FB] transition-colors duration-300 line-clamp-2">
                  {industry.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}