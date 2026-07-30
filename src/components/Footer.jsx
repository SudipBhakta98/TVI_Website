import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { root_image } from "../../image/image";

const footerNavItems = [
  { name: "HOME", to: "/" },
  { name: "INDUSTRIES WE SERVE", to: "/serviceIndustries" },
  { name: "CAPABILITIES", to: "/capabilities" },
  { name: "PRODUCTS", to: "/products" },
  { name: "OUR FACILITY", to: "/facilities" },
  { name: "QUALITY", to: "/quality" },
];

export default function Footer() {
  const location = useLocation();

  // Scrolls to the top of the page when a footer link is clicked
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#12161A] text-slate-300 border-t border-slate-800/80 pt-16 pb-8 select-none">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-16">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Directory Profile */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={root_image.logo}
                alt="Technovision Logo"
                className="h-9 w-auto object-contain brightness-110"
              />
              <div className="text-white border-l border-slate-700 pl-3">
                <h2 className="font-black text-base tracking-wider leading-none uppercase">
                  TECHNOVISION
                </h2>
                <p className="text-[11px] text-[#4F9B28] tracking-[2.5px] mt-1 uppercase font-bold">
                  INDUSTRIES
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm pt-2 font-medium">
              High-precision engineering and contract manufacturing partner
              specialized in industrial solutions, tooling, and critical
              component infrastructure.
            </p>

            {/* Social Networks & Action */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/company/technovision-industries-bengaluru?trk=public_post_follow-view-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/70 hover:bg-[#0077B5] hover:text-white text-slate-300 rounded transition-all shadow-xs flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9342163575"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/70 hover:bg-[#25D366] hover:text-white text-slate-300 rounded transition-all shadow-xs flex items-center justify-center"
                aria-label="WhatsApp Communication Chat"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>

              {/* Connect Button */}
              <Link to="/contact" onClick={handleNavClick}>
                <button
                  className={`transition-all px-5 py-2 rounded-lg text-white font-extrabold text-xs tracking-wider uppercase cursor-pointer shadow-md active:scale-95 ${
                    location.pathname === "/contact"
                      ? "bg-red-600 ring-2 ring-[#E31B23]"
                      : "bg-red-600 hover:bg-lime-600"
                  }`}
                >
                  CONNECT WITH US
                </button>
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-black tracking-widest uppercase">
              SITEMAP DIRECTORY
            </h4>
            <div className="w-8 h-[2.5px] bg-[#4F9B28] rounded-full" />
            <nav className="space-y-1.5 pt-1">
              {footerNavItems.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={handleNavClick}
                    className={`block py-1 text-xs font-semibold tracking-wider cursor-pointer transition-colors duration-200 ${
                      isActive 
                        ? "text-[#4F9B28]" 
                        : "text-slate-400 hover:text-[#4F9B28]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-black tracking-widest uppercase">
              COMMERCIAL INQUIRIES
            </h4>
            <div className="w-8 h-[2.5px] bg-[#4F9B28] rounded-full" />
            <div className="space-y-3 pt-1 text-xs text-slate-400 font-medium">
              <p className="leading-relaxed">
                <strong className="text-white font-bold">Headquarters:</strong>
                <br />
                SY.NO 261/3 &amp; SY 261/4 Haragadde Village,
                <br />
                Jigani Hobli Taluk, Bengaluru,
                <br />
                Karnataka 560105
              </p>
              <p>
                <strong className="text-white font-bold">Email:</strong>{" "}
                narpvvl@technovisionindustries.in
              </p>
              <p>
                <strong className="text-white font-bold">Phone:</strong> +91 9342163575
              </p>
              <div className="pt-1">
                <Link to="/about" onClick={handleNavClick}>
                  <button className="flex items-center gap-2 text-[#4F9B28] hover:text-white font-extrabold text-xs cursor-pointer underline underline-offset-4 transition-colors">
                    Know more about us
                    <FiExternalLink />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright Panel */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium">
          <p>
            © {new Date().getFullYear()} Technovision Industries. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="hover:text-white transition-colors"
            >
              Support
            </Link>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}