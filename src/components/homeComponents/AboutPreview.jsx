import React from "react";
import { Link } from "react-router-dom";
import { root_image } from "../../../image/image.js";

const metrics = [
  { value: "2003", label: "Year Founded" },
  { value: "4", label: "Manufacturing Units" },
  { value: "15,000+", label: "Sq. Meters Area" },
  { value: "250+", label: "Expert Workforce" },
];

const highlights = [
  "Zero-defect engineering mindset with ISO-certified quality standards",
  "End-to-end capabilities: Tooling, sheet metal, and electro-mechanical assembly",
  "Dedicated New Product Development (NPD) & rapid prototyping facilities",
];

export default function AboutPreview() {
  return (
    <section id="about-preview" className="bg-[#F8FAFC] mt-4 px-4 lg:px-8 w-full">
      <div className="max-w-[85rem] mx-auto flex flex-col items-center">
        
        {/* Outer Card Container with Tailwind Fade-In Animation */}
        <div className="w-full bg-white  p-6 sm:p-10 flex flex-col gap-8 animate-fade-in">
          
          {/* TOP SECTION: 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 w-full items-center">
            
            {/* TOP LEFT: Image Frame */}
            <div className="lg:col-span-5 w-full flex items-center justify-center transition-all duration-700 ease-out transform hover:scale-[1.01]">
              <Link 
                to="/about" 
                className="group relative rounded-lg overflow-hidden border border-slate-200 bg-slate-50/50 p-4 shadow-md w-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-[#4F9B28]/50 hover:shadow-lg"
              >
                <img 
                  src={root_image.twenty_years_of_excellence} 
                  alt="20 Years of Excellence - Technovision Industries" 
                  className="w-full h-auto max-h-[300px] object-contain rounded transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Prompt Overlay - Turns Laser Red on Hover */}
                <div className="absolute top-3 right-3 bg-[#12161A]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold text-white tracking-wider flex items-center gap-1 group-hover:bg-[#E31B23] transition-all duration-300">
                  View Story
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </div>

            {/* TOP RIGHT: Text Content Section */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              
              {/* Subheading */}
              <span className="text-xs font-bold text-[#4F9B28] tracking-widest uppercase block animate-fade-in-up [animation-delay:100ms]">
                Two Decades of Engineering Precision
              </span>

              {/* Main Heading */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#12161A] uppercase tracking-wide animate-fade-in-up [animation-delay:200ms]">
                Pioneering High-Precision Manufacturing Solutions
              </h3>

              {/* Paragraph Body */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal animate-fade-in-up [animation-delay:300ms]">
                Founded in 2003, Technovision Industries has evolved into a premier contract manufacturer operating across 6 integrated units. We specialize in precision sheet metal fabrication, complex tool room operations, and full electro-mechanical assemblies for global leaders.
              </p>

              {/* Core Feature Bullet Points */}
              <ul className="space-y-3.5 pt-2">
                {highlights.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium transition-all duration-300 hover:translate-x-1"
                  >
                    {/* Green Accent Checkmarks */}
                    <span className="text-[#4F9B28] font-bold text-base leading-none mt-0.5 select-none">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}