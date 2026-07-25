import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { root_image } from "../../image/image";

const footerNavItems = [
  { name: "HOME", to: "/" },
  { name: "INDUSTRIES", to: "/industries" },
  { name: "CAPABILITIES", to: "/capabilities" },
  { name: "OUR SOLUTIONS", to: "/products" },
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
                className="p-2.5 bg-slate-800/70 hover:bg-[#0077B5] hover:text-white text-slate-300 rounded transition-all shadow-xs"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/9342163575"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800/70 hover:bg-[#25D366] hover:text-white text-slate-300 rounded transition-all shadow-xs"
                aria-label="WhatsApp Communication Chat"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.233-1.371a9.936 9.936 0 004.777 1.217h.004c5.505 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.178-2.922-7.062A9.925 9.925 0 0012.012 2zm5.835 14.165c-.24.674-1.398 1.284-1.922 1.347-.465.056-.933.088-1.545-.119-3.602-1.222-5.926-4.9-6.105-5.141-.178-.241-1.443-1.922-1.443-3.666 0-1.744.892-2.597 1.21-2.943.268-.291.67-.424 1.097-.424.138 0 .26.007.369.012.32.015.48.034.69.539.262.633.896 2.19.973 2.346.077.157.129.339.024.549-.105.21-.157.339-.314.524-.157.185-.329.412-.47.553-.153.153-.314.32-.133.629.18.31.8 1.309 1.71 2.122 1.173 1.047 2.16 1.37 2.48 1.528.32.157.507.13.693-.085.186-.215.797-.927 1.01-1.244.214-.316.427-.264.719-.157.292.106 1.854.874 2.174 1.034.32.16.533.238.613.376.08.137.08.797-.16 1.471z" />
                </svg>
              </a>

              {/* Connect Button */}
              <Link to="/contact" onClick={handleNavClick}>
                <button
                  className={`transition-all px-5 py-2 rounded-lg text-white font-extrabold text-xs tracking-wider uppercase cursor-pointer shadow-md active:scale-95 ${
                    location.pathname === "/contact"
                      ? "bg-[#C8141B] ring-2 ring-[#E31B23]"
                      : "bg-[#E31B23] hover:bg-[#C8141B]"
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